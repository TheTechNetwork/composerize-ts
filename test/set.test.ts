import { expect, test } from 'vitest';
import set from '../src/set';

test('assigns at a single-segment path', () => {
  expect(set({}, 'image', 'nginx')).toEqual({ image: 'nginx' });
});

test('creates the objects a nested path names', () => {
  expect(set({}, 'healthcheck.test', 'curl')).toEqual({ healthcheck: { test: 'curl' } });
  expect(set({}, 'networks.default.aliases', ['a'])).toEqual({ networks: { default: { aliases: ['a'] } } });
});

test('keeps sibling keys on an existing intermediate object', () => {
  expect(set({ healthcheck: { test: 'curl' } }, 'healthcheck.interval', '5s')).toEqual({
    healthcheck: { test: 'curl', interval: '5s' },
  });
});

test('replaces a non-object intermediate', () => {
  expect(set({ a: 1 }, 'a.b', 2)).toEqual({ a: { b: 2 } });
});

test('leaves the target untouched for an empty path', () => {
  expect(set({ a: 1 }, '', 2)).toEqual({ a: 1 });
});

test('mutates and returns the target', () => {
  const target = {};
  expect(set(target, 'a', 1)).toBe(target);
  expect(target).toEqual({ a: 1 });
});

test('rejects unsafe keys', () => {
  expect(() => set({}, '__proto__.x', 1)).toThrow('Cannot set unsafe key: "__proto__"');
  expect(() => set({}, 'a.constructor', 1)).toThrow('Cannot set unsafe key: "constructor"');
  expect(() => set({}, 'prototype', 1)).toThrow('Cannot set unsafe key: "prototype"');
  expect(({} as Record<string, unknown>).x).toBeUndefined();
});
