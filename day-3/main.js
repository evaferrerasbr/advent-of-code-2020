const fs = require('fs');

const forest = fs
  .readFileSync('data.txt', { encoding: 'utf-8' })
  .split(/\r?\n|\r/g);

//part 1

const findTrees = () => {
  let counter = 0;
  for (let i = 0; i < forest.length; i++) {
    const treeSearcher = i * 3;
    const stringIndex = treeSearcher % forest[i].length;
    //uses module to "imagine" the forest pattern instead of creating it
    if (forest[i][stringIndex] === '#') {
      counter++;
    }
  }
  return counter;
};

findTrees();

//part 2

const finalCounter = [];
const slopes = [
  {
    right: 1,
    down: 1,
  },
  {
    right: 3,
    down: 1,
  },
  {
    right: 5,
    down: 1,
  },
  {
    right: 7,
    down: 1,
  },
  {
    right: 1,
    down: 2,
  },
];

//checks how big a step is in x and y exes and search trees for different slopes
const findTreesWithSlopes = () => {
  for (let i = 0; i < slopes.length; i++) {
    let counter = 0;
    let numberOfSteps = 0;
    let verticalSteps = 0;
    do {
      //verticalSteps is the forest index
      verticalSteps = slopes[i].down * numberOfSteps;
      const horizontalSteps = slopes[i].right * numberOfSteps;
      const stringIndex = horizontalSteps % forest[verticalSteps].length;
      if (forest[verticalSteps][stringIndex] === '#') {
        counter++;
      }
      numberOfSteps++;
    } while (verticalSteps + 1 < forest.length);
    finalCounter.push(counter);
  }
};

findTreesWithSlopes();

const getMult = () => {
  const result = finalCounter.reduce((value, number) => value * number, 1);
  return result;
};

getMult();
