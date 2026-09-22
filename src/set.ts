/**
 * Minimal dot-path setter used to build docker-compose object fragments.
 *
 * Replaces the `set-value` dependency (unmaintained since 2021, and the last
 * package pulling `is-plain-object` and `is-primitive` into the tree) with a
 * small, in-tree implementation covering exactly the semantics this project
 * relies on:
 *
 *   - a dot-separated path creates the plain objects it names and assigns the
 *     value at the leaf (`set({}, 'healthcheck.test', v)`),
 *   - an empty path is a no-op,
 *   - an intermediate segment holding a non-object is replaced by a new object,
 *   - the target is mutated in place and returned,
 *   - `__proto__`, `constructor` and `prototype` are rejected outright.
 *
 * Every path this project passes is a literal in `src/options.ts` or
 * `src/parser.ts`: one to three plain identifier segments, no escapes, no
 * array indices. `set-value`'s array paths, custom separators, `split`/`merge`
 * hooks and `preservePaths` escaping are therefore not reproduced. The unsafe
 * key check is kept anyway — it costs three comparisons and the paths could
 * stop being literals later.
 */

// eslint-disable-next-line @typescript-eslint/no-explicit-any
type PlainObject = Record<string, any>;

const UNSAFE_KEYS = ['__proto__', 'constructor', 'prototype'];

function isObject(value: unknown): value is PlainObject {
  return typeof value === 'object' && value !== null && !Array.isArray(value);
}

/**
 * Assign `value` at the dot-separated `path` within `target`, creating any
 * missing intermediate objects.
 *
 * @param target Object to mutate.
 * @param path Dot-separated path; an empty path leaves `target` untouched.
 * @param value Value to assign at the leaf.
 * @returns The `target` that was passed in.
 */
export default function set<T extends PlainObject>(target: T, path: string, value: unknown): T {
  if (path === '') {
    return target;
  }

  const segments = path.split('.');
  for (const segment of segments) {
    if (UNSAFE_KEYS.includes(segment)) {
      throw new Error(`Cannot set unsafe key: "${segment}"`);
    }
  }

  let current: PlainObject = target;
  for (const segment of segments.slice(0, -1)) {
    if (!isObject(current[segment])) {
      current[segment] = {};
    }
    current = current[segment];
  }
  current[segments[segments.length - 1]] = value;

  return target;
}
