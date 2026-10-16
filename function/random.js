'use strict';


const random = (min, max) => {
  if (max === undefined) {
    max = min;
    min = 0;
  }
  return min + Math.floor(Math.random() * (max - min + 1));
};

console.log('random(5, 10):', random(5, 10));
console.log('random(3):', random(3));
console.log('random(1, 6) x10:', Array.from({ length: 10 }, () => random(1, 6)));