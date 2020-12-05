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
