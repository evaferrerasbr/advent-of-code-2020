const fs = require('fs');

const rawForms = fs
  .readFileSync('dataTest.txt', { encoding: 'utf-8' })
  .split('\r\n\r\n');

console.log(rawForms);

//part1

const forms = [];
const formsYes = [];

//deletes from data \n and \r
const cleanData = () => {
  for (let i = 0; i < rawForms.length; i++) {
    const form = rawForms[i].replace(/\r\n|\n|\r/gm, '');
    forms.push(form);
  }
};

cleanData();

//iterates each string in the array and include not repeated letters in a new string
const getYesAnswers = () => {
  let counter = 0;
  for (let i = 0; i < forms.length; i++) {
    let string = '';
    for (let j = 0; j < forms[i].length; j++) {
      if (!string.includes(forms[i][j])) {
        string = string.concat(forms[i][j]);
      }
    }
    counter = string.length;
    formsYes.push(counter);
  }
};

getYesAnswers();

const getSum = () => {
  const sum = formsYes.reduce((value, number) => value + number, 0);
  return sum;
};

getSum();
