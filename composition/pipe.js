'use strict';

const pipe = (...fns) => {
  for (const fn of fns) {
    if (typeof fn !== 'function') {
      throw new TypeError(`pipe: аргумент ${fn} не є функцією`);
    }
  }
  return (x) => fns.reduce((acc, fn) => fn(acc), x);
};

const inc = (x) => x +1;
const twice = (x) => x * 2;
const cube = (x) => x ** 3;

const f1 = pipe(inc, twice, cube);
console.log(f1(5)); 

const f2 = pipe(inc, inc);
console.log(f2(7)); 

try {
  pipe(inc, 7, cube); 
} catch (err) {
  console.log('Помилка:', err.message);
}

module.exports = { pipe };