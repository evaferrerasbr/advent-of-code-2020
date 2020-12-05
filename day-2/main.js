const fs = require('fs');

const lines = fs
  .readFileSync('data.txt', { encoding: 'utf-8' })
  .split(/\r?\n|\r/g);

let validPasswords = 0;

for (let i = 0; i < lines.length; i++) {
  const {
    groups,
  } = /^(?<from>\d+)-(?<to>\d+) (?<character>.): (?<password>.*)$/.exec(
    lines[i]
  );
  let found = 0;
  for (let j = 0; j < groups.password.length; j++) {
    if (groups.password[j] === groups.character) {
      found++;
    }
  }
  if (found >= groups.from && found <= groups.to) {
    validPasswords++;
  }
}

console.log(validPasswords);
