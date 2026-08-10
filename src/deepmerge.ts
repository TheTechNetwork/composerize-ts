/**
 * Minimal deep-merge used to combine docker-compose object fragments.
 *
 * Replaces the `deepmerge-ts` dependency (no functional release since 2025)
 * with a small, in-tree implementation covering exactly the semantics this
 * project relies on:
 *
 *   - plain objects are merged recursively,
 *   - arrays are concatenated in argument order (left then right),
 *   - any other value (scalars, or a type mismatch between the two sides) is
 *     taken from the right-most argument (last-wins),
 *   - inputs are never mutated,
 *   - the `__proto__` key is skipped to avoid prototype pollution.
 *
 * These match `deepmerge-ts`'s default `deepmerge` behaviour for the plain
 * object / array / scalar shapes produced by the parser (compose specs contain
 * no Sets, Maps or class instances), which the test-suite locks in.
 */

// eslint-disable-next-line @typescript-eslint/no-explicit-any
type PlainObject = Record<string, any>;

function isPlainObject(value: unknown): value is PlainObject {
  if (value === null || typeof value !== 'object') {
    return false;
  }
  const proto = Object.getPrototypeOf(value);
  return proto === Object.prototype || proto === null;
}

function mergeTwo(target: unknown, source: unknown): unknown {
  if (Array.isArray(target) && Array.isArray(source)) {
    return [...target, ...source];
  }

  if (isPlainObject(target) && isPlainObject(source)) {
    const result: PlainObject = { ...target };
    for (const key of Object.keys(source)) {
      if (key === '__proto__') {
        continue;
      }
      result[key] = key in result ? mergeTwo(result[key], source[key]) : source[key];
    }
    return result;
  }

  return source;
}

/**
 * Deep-merge two or more values left to right and return a new value.
 *
 * @param objects Values to merge; later values win on conflict.
 */
export function deepmerge<T>(...objects: T[]): T {
  return objects.reduce((acc, object) => mergeTwo(acc, object) as T);
}
