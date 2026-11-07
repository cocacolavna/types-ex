'use strict';

const ages = (persons) => {
  const result = {};
  for (const name in persons) {
    const { born, died } = persons[name];
    result[name] = died - born;
  }
  return result;
};

const persons = {
  lenin: { born: 1870, died: 1924 },
  mao: { born: 1893, died: 1976 },
  gandhi: { born: 1869, died: 1948 },
  hirohito: { born: 1901, died: 1989 },
};
console.log(ages(persons));

module.exports = { ages };