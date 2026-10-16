'use strict';

const values = [
  true, 'hello', 5, 12, -200, false, false, 'word',
  3.14, 0, NaN, Infinity,
  null, undefined, null,
  { a: 1 }, [1, 2, 3], [],
  () => {}, function named() {},
  Symbol('id'), 10n, 'last',
];

const getType = (value) => {
  if (value === null) return 'null';
  if (Array.isArray(value)) return 'array';
  return typeof value;
};

const counts = {};

for (const value of values) {
  const type = getType(value);
  if (counts[type] === undefined) {
    counts[type] = 0;
  }
  counts[type]++;
}

console.dir(counts);