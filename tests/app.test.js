const app = require('../src/app');

test('a < 0, b < 0', () => {
  expect(app(-1, -1)).toBe('not very successful');
})

test('a < 0, b > 0', () => {
  expect(app(-1, 1)).toBe('not very successful');
})

test('a > 0, b < 0', () => {
  expect(app(1, -1)).toBe('successful');
})

test('a > 0, b > 0', () => {
  expect(app(1, 1)).toBe('not very successful');
})

test('a == 0, b == 0', () => {
  expect(app(0, 0)).toBe('successful');
})