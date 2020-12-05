'use strict';

const fs = require('fs');

const expenseReport = fs
  .readFileSync('data.txt', { encoding: 'utf-8' })
  .split(/\r?\n|\r/g);

//part 1
const getEntriesOne = () => {
  const modifiedArray = expenseReport.map(
    (expense) => 2020 - parseInt(expense)
  );
  const numbers = [];
  for (let i = 0; i < expenseReport.length; i++) {
    for (let j = 0; j < modifiedArray.length; j++) {
      if (parseInt(modifiedArray[j]) === parseInt(expenseReport[i])) {
        numbers.push(parseInt(modifiedArray[j]));
      }
    }
  }
  const mult = numbers.reduce((value, number) => value * number, 1);
  return mult;
};

//part 2
const getEntriesTwo = () => {
  const numbers = [];
  for (let i = 0; i < expenseReport.length; i++) {
    for (let j = i + 1; j < expenseReport.length; j++) {
      for (let k = j + 1; k < expenseReport.length; k++) {
        if (
          parseInt(expenseReport[i]) +
            parseInt(expenseReport[j]) +
            parseInt(expenseReport[k]) ===
          2020
        ) {
          numbers.push(
            parseInt(expenseReport[i]),
            parseInt(expenseReport[j]),
            parseInt(expenseReport[k])
          );
        }
      }
    }
  }
  const mult = numbers.reduce((value, number) => value * number, 1);
  return mult;
};
