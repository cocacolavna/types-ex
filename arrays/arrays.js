'use strict';

const removeElement = (array, item) => {
  const index = array.indexOf(item);
  if (index !== -1) {
    array.splice(index, 1);
  }
};

const removeElements = (array, ...items) => {
  for (const item of items) {
    removeElement(array, item);
  }
};

const unique = (array) =>
  array.filter((item, index) => array.indexOf(item) === index);

const difference = (array1, array2) =>
  array1.filter((item) => !array2.includes(item));

// Перевірка
const a1 = [1, 2, 3, 4, 5, 6, 7];
removeElement(a1, 5);
console.log(a1);

const c1 = ['Kiev', 'Beijing', 'Lima', 'Saratov'];
removeElement(c1, 'Lima');
removeElement(c1, 'Berlin');
console.log(c1);

const a2 = [1, 2, 3, 4, 5, 6, 7];
removeElements(a2, 5, 1, 6);
console.log(a2);

const c2 = ['Kiev', 'Beijing', 'Lima', 'Saratov'];
removeElements(c2, 'Lima', 'Berlin', 'Kiev');
console.log(c2);

console.log(unique([2, 1, 1, 3, 2]));
console.log(unique(['top', 'bottom', 'top', 'left']));

console.log(difference([7, -2, 10, 5, 0], [0, 10]));
console.log(difference(['Beijing', 'Kiev'], ['Kiev', 'London', 'Baghdad']));