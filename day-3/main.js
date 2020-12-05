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
const multiplierArray = [1, 3, 5, 7];
const counters = [];

for (let i = 0; i < multiplierArray.length; i++) {
  let counter = 0;
  for (let j = 0; j < forest.length; j++) {
    const forestLine = j;
    const treeSearcher = i * j;
    const stringIndex = treeSearcher % forest[forestLine].length;
    if (forest[forestLine][stringIndex] === '#') {
      counter++;
    }
  }
}

const result = counters.reduce((value, number) => value * number, 1);

console.log(result);
