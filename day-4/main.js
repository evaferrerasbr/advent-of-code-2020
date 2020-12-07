const fs = require('fs');

const documents = fs
  .readFileSync('data.txt', { encoding: 'utf-8' })
  .split('\r\n\r\n');

//part 1

//creates an array with the keys of the documents and checks if it has all the required information
const checkDocuments = () => {
  let validDocuments = 0;
  const keyDocuments = documents.map((document) =>
    document.match(/([a-z]{3}):/gm)
  );
  for (const keyDocument of keyDocuments) {
    if (keyDocument.length === 8) {
      validDocuments++;
    } else if (keyDocument.length === 7 && !keyDocument.includes('cid:')) {
      validDocuments++;
    }
  }
  return validDocuments;
};

checkDocuments();

//part 2

//an object with the required information
const validation = {
  byr: /byr:(19[2-9][0-9])|(200[0-2])\b/,
  iyr: /iyr:(201[0-9])|(2020)\b/,
  eyr: /eyr:(202[0-9])|(2030)\b/,
  hgt: /hgt:(1[5-8][0-9]cm)|(19[0-3]cm)|(59in)|(6[0-9]in)|(7[0-6]in)\b/,
  hcl: /hcl:#(([0-9a-f]){6})\b/,
  ecl: /ecl:(amb|blu|brn|gry|grn|hzl|oth)\b/,
  pid: /pid:([0-9]{9})\b/,
};

//creates an object with a key for each validation's key and a value with the value of the match
const checkNewDocuments = () => {
  let validDocuments = 0;
  documents.map((document) => {
    let objDocuments = {};
    try {
      for (const key of Object.keys(validation)) {
        objDocuments[key] = document.match(validation[key][1]);
        //[1] is needed so it takes only the 1st group information of the regexp
      }
      validDocuments++;
    } catch (error) {
      return null;
      //catch is needed when it doesnt match
    }
  });
  return validDocuments;
};

checkNewDocuments();
