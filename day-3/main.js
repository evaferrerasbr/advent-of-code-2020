const fs = require('fs');

const forest = fs
  .readFileSync('data.txt', { encoding: 'utf-8' })
  .split(/\r?\n|\r/g);

//part 1
let counter = 0;

for (let i = 0; i < forest.length; i++) {
  const treeSearcher = i * 3;
  const stringIndex = treeSearcher % forest[i].length;
  if (forest[i][stringIndex] === '#') {
    counter++;
  }
}

//part 2
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

const finalCounter = [];

for (let i = 0; i < slopes.length; i++) {
  let counter = 0;
  let numberOfSteps = 0;
  let verticalSteps = 0;
  do {
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

const result = finalCounter.reduce((value, number) => value * number, 1);
