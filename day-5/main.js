const fs = require('fs');

const boardingPasses = fs
  .readFileSync('data.txt', { encoding: 'utf-8' })
  .toString()
  .split(/\r?\n|\r/g);

//part 1

const binaryPasses = [];
const ids = [];

//takes the boarding passes list and transform each boarding pass to binary; then sets an object with the binary information that will be pushed to the binary passes array
const getBinaryPasses = () => {
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
        pass.column = pass.column.concat(binaryPass[j]);
      }
    }
    binaryPasses.push(pass);
  }
};

getBinaryPasses();

//gets the ids of the boarding passes according to the given formula (row * 8 + column) and push them into the id array
const getIds = () => {
  for (const binaryPass of binaryPasses) {
    let row = parseInt(binaryPass.row, 2);
    let column = parseInt(binaryPass.column, 2);
    let id = row * 8 + column;
    //it also works if we concat the whole boarding pass instead of dividing it in rows and columns, since *8 adds '000' and +5 adds three digits
    ids.push(id);
  }
};

getIds();

//sorts ids array and returns the highest value
const getHighestId = () => {
  const sortedIds = ids.sort(function (a, b) {
    return a - b;
  });
  return sortedIds[sortedIds.length - 1];
};

getHighestId();

//part 2

//sorts ids array and starts to search matches from the lowest possible id to the highest possible id
const getMyId = () => {
  const sortedIds = ids.sort(function (a, b) {
    return a - b;
  });
  for (
    let i = sortedIds[0] + 1;
    i <= sortedIds[sortedIds.length - 1] - 1;
    i++
  ) {
    if (!sortedIds.includes(i)) {
      return i;
    }
  }
};

getMyId();
