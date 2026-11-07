'use strict';

const sumFor = (...args) => {
  let total = 0;
  for (let i = 0; i < args.length; i++) {
    total += args[i];
  }
  return total;
};

const sumForOf = (...args) => {
  let total = 0;
  for (const value of args) {
    total += value;
  }
  return total;
};


const sumWhile = (...args) => {
  let total = 0;
  let i = 0;
  while (i < args.length) {
    total += args[i];
    i++;
  }
  return total;
};

const sumDoWhile = (...args) => {
  let total = 0;
  if (args.length === 0) return total;
  let i = 0;
  do {
    total += args[i];
    i++;
  } while (i < args.length);
  return total;
};

const sumReduce = (...args) => args.reduce((acc, value) => acc + value, 0);

const implementations = { sumFor, sumForOf, sumWhile, sumDoWhile, sumReduce };

for (const [name, sum] of Object.entries(implementations)) {
  const a = sum(1, 2, 3); // 6
  const b = sum(0); // 0
  const c = sum(); // 0
  const d = sum(1, -1, 1); // 1
  const e = sum(10, -1, -1, -1); // 7
  console.log(name, a, b, c, d, e);
}

module.exports = { sumFor, sumForOf, sumWhile, sumDoWhile, sumReduce };