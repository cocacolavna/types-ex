'use strict';

const compose = (...fns) => {
  const handlers = [];

  const composed = (x) => {
    let result = x;
    try {
      for (let i = fns.length - 1; i >= 0; i--) {
        result = fns[i](result);
      }
    } catch (err) {
      for (const handler of handlers) handler(err);
      return undefined;
    }
    return result;
  };

  composed.on = (name, handler) => {
    if (name === 'error') handlers.push(handler);
  };

  return composed;
};

const inc = (x) => x + 1;
const twice = (x) => x * 2;
const cube = (x) => x ** 3;
const fail = () => {
  throw new Error('Щось пішло не так');
};

const f1 = compose(inc, twice, cube);
console.log(f1(5)); // 251

const f2 = compose(inc, fail, cube);
f2.on('error', (e) => {
  console.log('Перехоплено помилку:', e.message);
});
console.log(f2(5)); // undefined

module.exports = { compose };