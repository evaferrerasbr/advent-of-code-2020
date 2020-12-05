const fs = require('fs');

const lines = fs
  .readFileSync('data.txt', { encoding: 'utf-8' })
  .split(/\r?\n|\r/g);

//part 1

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

//part 2

let newValidPasswords = 0;

for (let i = 0; i < lines.length; i++) {
  const {
    groups,
  } = /^(?<from>\d+)-(?<to>\d+) (?<character>.): (?<password>.*)$/.exec(
    lines[i]
  );
  if (
    (groups.password[groups.from - 1] === groups.character &&
      groups.password[groups.to - 1] !== groups.character) ||
    (groups.password[groups.from - 1] !== groups.character &&
      groups.password[groups.to - 1] === groups.character)
  ) {
    newValidPasswords++;
  }
}
