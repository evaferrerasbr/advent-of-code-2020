const fs = require('fs');

const lines = fs
  .readFileSync('dataTest.txt', { encoding: 'utf-8' })
  .split('\n')
  .filter((x) => x);

let validPasswords = 0;

lines.forEach((line) => {
  const match = /^(\d+)-(\d+) (.): (.*)$/.exec(line);
  console.log(match);
});
