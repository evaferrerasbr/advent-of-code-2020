const fs = require('fs');

const rawData = fs
  .readFileSync('data.txt', { encoding: 'utf-8' })
  .split(/\r?\n|\r/g);

//part 1

const rules = [];

//creates and object with bag type and content and pushes it to the rules array
const getArrayOfObjects = () => {
  for (const rawInput of rawData) {
    const input = {
      bag: rawInput.match(/\w*\s\w*/)[0],
      content: rawInput.match(/\d(\s\w*\s\w*)?/gm),
    };
    rules.push(input);
  }
};

getArrayOfObjects();

const totalBags = [];
let searchedBags = ['shiny gold'];
let foundBags;

const getTotalBags = () => {
  do {
    //we set foundBags empty when we start the loop and after iterating the full rules array so it work as a stop condition
    foundBags = [];
    for (let i = 0; i < rules.length; i++) {
      for (let j = 0; j < searchedBags.length; j++) {
        if (rules[i].content !== null) {
          for (
            //we need to iterate rules[i].content because otherwise it doesn't understand the includes()
            let stringContent = 0;
            stringContent < rules[i].content.length;
            stringContent++
          ) {
            if (rules[i].content[stringContent].includes(searchedBags[j])) {
              foundBags.push(rules[i].bag);
              if (!totalBags.includes(rules[i].bag)) {
                totalBags.push(rules[i].bag);
              }
            }
          }
        }
      }
    }
    //we set searchedBags with the content of foundBags so in the next iteration it compares the rules array with the bags that have been found
    searchedBags = [...foundBags];
    //it stops after iterates the rules array for the second time
  } while (foundBags.length !== 0);
};

getTotalBags();
