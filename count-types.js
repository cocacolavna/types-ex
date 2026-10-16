'use strict';

const values = [
  true, 'hello', 5, 12, -200, false, false, 'word',
  3.14, 0, NaN, Infinity,
  null, undefined, null,
  { a: 1 }, [1, 2, 3], [],
  () => {}, function named() {},
  Symbol('id'), 10n, 'last',
];

const counts = {
  number: 0,
  string: 0,
  boolean: 0,
  object: 0,
  undefined: 0,
  function: 0,
  symbol: 0,
  bigint: 0,
};

for (const value of values) {
  const type = typeof value;
  counts[type]++;
}

console.dir(counts);