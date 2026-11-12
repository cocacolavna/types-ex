'use strict';


const seq = (...fns) => (arg) => {
  if (typeof arg === 'number') {
    return fns.reduceRight((acc, fn) => fn(acc), arg);
  }
  return seq(...fns, arg);
};

console.log(seq((x) => x + 7)((x) => x * 2)(5)); // 17
console.log(seq((x) => x * 2)((x) => x + 7)(5)); // 24
console.log(
  seq((x) => x + 1)((x) => x * 2)((x) => x / 3)((x) => x - 4)(7),
); // 3

module.exports = { seq };