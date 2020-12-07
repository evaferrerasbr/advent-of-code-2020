const fs = require('fs');

const boardingPasses = fs
  .readFileSync('dataTest.txt', { encoding: 'utf-8' })
  .toString()
  .split(/\r?\n|\r/g);

//part 1

const binaryPasses = [];

for (let i = 0; i < boardingPasses.length; i++) {
  const binaryPass = boardingPasses[i]
    .replace(/F/g, '0')
    .replace(/L/g, '0')
    .replace(/B/g, '1')
    .replace(/R/g, '1');
  const pass = {
    row: '',
    column: '',
  };
  for (let j = 0; j < boardingPasses[i].length; j++) {
    if (j <= 6) {
      pass.row = pass.row.concat(binaryPass[j]);
    } else {
      pass.column = pass.row.concat(binaryPass[j]);
    }
  }
  binaryPasses.push(pass);
}

const ids = [];

const getIds = () => {
  for (const binaryPass of binaryPasses) {
    let row = parseInt(binaryPass.row, 2);
    let column = parseInt(binaryPass.column, 2);
    let id = row * 8 + column;
    ids.push(id);
  }
};

getIds();

const sortedIds = ids.sort(function (a, b) {
  return b - a;
});

console.log(sortedIds);
