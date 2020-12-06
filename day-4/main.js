const fs = require('fs');

const passports = fs
  .readFileSync('data.txt', { encoding: 'utf-8' })
  .split('\r\n\r\n');

//part 1

let validPassports = 0;

const keyPassports = passports.map((passport) =>
  passport.match(/([a-z]{3}):/gm)
);

for (keyPassport of keyPassports) {
  if (keyPassport.length === 8) {
    validPassports++;
  } else if (keyPassport.length === 7 && !keyPassport.includes('cid:')) {
    validPassports++;
  }
}
