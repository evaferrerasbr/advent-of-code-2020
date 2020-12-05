const fs = require('fs');

const lines = fs
  .readFileSync('dataTest.txt', { encoding: 'utf-8' })
  .split(/\r?\n|\r/g);

console.log(lines);

let validPasswords = 0;

for (let i = 0; i < lines.length; i++) {
  const match = /^(\d+)-(\d+) (.): (.*)$/.exec(lines[i]);
  console.log(match);
}
