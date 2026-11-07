'use strict';


const max = (matrix) => {
  let result = -Infinity;
  for (const row of matrix) {
    for (const value of row) {
      if (value > result) result = value;
    }
  }
  return result;
};

const m = max([[1, 2, 3], [4, 5, 6], [7, 8, 9]]);
console.log(m); // 9

module.exports = { max };