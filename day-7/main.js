const fs = require('fs');

const rawData = fs
  .readFileSync('dataTest.txt', { encoding: 'utf-8' })
  .split(/\r?\n|\r/g);

//part 1

const firstRules = [];

//creates and object with bag type and content and pushes it to the firstRules array
const orderFirstInput = () => {
  for (const rawInput of rawData) {
    const input = {
      bag: rawInput.match(/\w*\s\w*/)[0],
      content: rawInput.match(/\d(\s\w*\s\w*)?/gm),
    };
    firstRules.push(input);
  }
};

orderFirstInput();

const getBagsThatCanContainShinyGoldBags = () => {
  const totalBags = [];
  let searchedBags = ['shiny gold'];
  let foundBags;
  do {
    //we set foundBags empty when we start the loop and after iterating the full rules array so it work as a stop condition
    foundBags = [];
    for (let i = 0; i < firstRules.length; i++) {
      for (let j = 0; j < searchedBags.length; j++) {
        if (firstRules[i].content !== null) {
          for (
            //we need to iterate firstRules[i].content because otherwise it doesn't understand the includes()
            let stringContent = 0;
            stringContent < firstRules[i].content.length;
            stringContent++
          ) {
            if (
              firstRules[i].content[stringContent].includes(searchedBags[j])
            ) {
              foundBags.push(firstRules[i].bag);
              if (!totalBags.includes(firstRules[i].bag)) {
                totalBags.push(firstRules[i].bag);
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
  return totalBags.length;
};

getBagsThatCanContainShinyGoldBags();

//part 2

const secondRules = [];

const orderSecondInput = () => {
  for (const rawInput of rawData) {
    const input = {
      bag: rawInput.match(/\w*\s\w*/)[0],
      content: {
        number: rawInput.match(/\d/gm),
        bags: rawInput.match(/\d(\s\w*\s\w*)?/gm),
      },
    };
    secondRules.push(input);
  }
};

orderSecondInput();

const getBagsContainedInShinyGold = () => {
  const totalBags = [];

  return totalBags.length;
};

getBagsContainedInShinyGold();
