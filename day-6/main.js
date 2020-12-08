const fs = require('fs');

const rawForms = fs
  .readFileSync('data.txt', { encoding: 'utf-8' })
  .split('\r\n\r\n');

//part1

const forms = [];
const answers = [];

//deletes from data \n and \r
const deleteCharacters = () => {
  for (let i = 0; i < rawForms.length; i++) {
    const form = rawForms[i].replace(/\r\n|\n|\r/gm, '');
    forms.push(form);
  }
};

deleteCharacters();

//includes not repeated letters in a new string to check in how many questions  anyone answered yes
const getAnswers = () => {
  let letterMatches = 0;
  for (let i = 0; i < forms.length; i++) {
    let string = '';
    for (let j = 0; j < forms[i].length; j++) {
      if (!string.includes(forms[i][j])) {
        string = string.concat(forms[i][j]);
      }
    }
    letterMatches = string.length;
    answers.push(letterMatches);
  }
};

getAnswers();

const getSum = (arr) => {
  const sum = arr.reduce((value, number) => value + number, 0);
  return sum;
};

getSum(answers);

//part 2

const finalForms = [];
const finalAnswers = [];

//transforms data into an array of arrays so we can use .lenght of each element to check which letter has been picked by everybody
const getArrayOfArrays = () => {
  for (let i = 0; i < rawForms.length; i++) {
    const input = rawForms[i].split(/\r?\n|\r/g);
    finalForms.push(input);
  }
};

getArrayOfArrays();

//takes every letter of the first element of each array and checks if its included in the rest of the elements
const getFinalAnswers = () => {
  //array of arrays (contains the forms of all groups)
  for (let mainIndex = 0; mainIndex < finalForms.length; mainIndex++) {
    let letterMatches = 0;
    for (
      //first string in each sub-array (contains the form of the first person in the group)
      let stringIndex = 0;
      stringIndex < finalForms[mainIndex][0].length;
      stringIndex++
    ) {
      let letterMatch = 0;
      for (
        //each sub-array (contains the group info)
        let groupIndex = 0;
        groupIndex < finalForms[mainIndex].length;
        groupIndex++
      ) {
        const form = finalForms[mainIndex][groupIndex];
        const letter = finalForms[mainIndex][0][stringIndex];
        if (form.includes(letter)) {
          letterMatch++;
          if (letterMatch === finalForms[mainIndex].length) {
            letterMatches++;
          }
        }
      }
    }
    finalAnswers.push(letterMatches);
  }
};

getFinalAnswers();

getSum(finalAnswers);
