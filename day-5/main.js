const fs = require('fs');

const boardingPasses = fs
  .readFileSync('dataTest.txt', { encoding: 'utf-8' })
  .toString()
  .split(/\r?\n|\r/g);

//part 1

const binaryPasses = [];

const getBinaryFromPasses = boardingPasses.map((boardingPass) => {
  const test = boardingPass
    .replace(/F/g, '0')
    .replace(/L/g, '0')
    .replace(/B/g, '1')
    .replace(/R/g, '1');
  binaryPasses.push(test);
});

console.log(binaryPasses);

// console.log(parseInt(binaryPasses[0], 2));
