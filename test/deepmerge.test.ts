import { expect, test } from 'vitest';
import { deepmerge } from '../src/deepmerge';

test('merges plain objects recursively', () => {
  const result = deepmerge({ a: { x: 1 }, b: 2 }, { a: { y: 3 }, c: 4 });
  expect(result).toEqual({ a: { x: 1, y: 3 }, b: 2, c: 4 });
});

test('concatenates arrays in argument order (left then right)', () => {
  const result = deepmerge({ ports: ['80:80'] }, { ports: ['443:443'] });
  expect(result).toEqual({ ports: ['80:80', '443:443'] });
});

test('right-most value wins for conflicting scalars', () => {
  expect(deepmerge({ a: 1 }, { a: 2 })).toEqual({ a: 2 });
});

test('right-most value wins on a type mismatch', () => {
  expect(deepmerge({ a: [1, 2] }, { a: 'x' })).toEqual({ a: 'x' });
  expect(deepmerge({ a: { x: 1 } }, { a: [1] })).toEqual({ a: [1] });
});

test('merges more than two objects left to right', () => {
  const result = deepmerge({ a: [1] }, { a: [2] }, { a: [3] });
  expect(result).toEqual({ a: [1, 2, 3] });
});

test('does not mutate its inputs', () => {
  const left = { a: { x: 1 }, list: [1] };
  const right = { a: { y: 2 }, list: [2] };
  deepmerge(left, right);
  expect(left).toEqual({ a: { x: 1 }, list: [1] });
  expect(right).toEqual({ a: { y: 2 }, list: [2] });
});

test('does not pollute Object.prototype via __proto__', () => {
  deepmerge({}, JSON.parse('{ "__proto__": { "polluted": true } }'));
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  expect(({} as any).polluted).toBeUndefined();
});
