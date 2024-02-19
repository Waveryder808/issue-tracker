import fs from 'node:fs';
import chalk from 'chalk';
import {} from 'lodash-es';
import { time } from 'node:console';

//    JSON.stringify() = converts a JS object into a JSON string
//    JSON.parse()  =   converts a string to a JS object

const SRC_DIR_BASE = "./data/bots/types/";
const TGT_DIR_BASE = "./target/db/bots/types/";
const OUT_DIR_BASE = "./out/;"

const src = "D:/TarkovSP/SPT-AKI 13.6.26535/Aki_Data/Server/database/bots/types/usec.json";
const tgt = "D:/TarkovSP/SPT-AKI 14.0.1.28476/Aki_Data/Server/database/bots/types/usec.json";

// Check for 2 console string arguments
if (process.argv.length < 3) {
  console.log(`Usage: node jdiff.js targetFile sourceFile [(optional) --backup]`);
  process.exit(1);
}

const tgtFile = process.argv[2];
const srcFile = process.argv[3];

// Read files 
const source = JSON.parse(fs.readFileSync(srcFile, 'utf-8'));
const target = JSON.parse(fs.readFileSync(tgtFile, 'utf-8'));
console.log(chalk.red(srcInput));
console.log(chalk.blue(tgtInput));


// If the two objects are NOT deeply equal
if (!areEqual(target, source)) {

  // TODO: Save Changes 
  //fs.writeFileSync(tgtFile, changes);

} else {
  console.log("File contents are equal! No changes necessary.");
}

const changeList = {};



/** 
 * Compare an object (source) to a similar object (target)
 * @param {object} source - object v1
 * @param {object} target - object v2
 * 
 * @return {number} - An integer value containing # of mismatched properties/key-values. 
 * Returns 0 if source strictly-equals target, 1+ if source != target, and -1 if object undefined Error }
*/
function areEqual(source, target) {

  for (let prop in source) {

  }
  
}

function compareValues(firstObject, secondObject) {
  // Check if the objects have the same number of properties
  if (Object.keys(firstObject).length !== Object.keys(secondObject).length) {
   return false
  }
 
  // Check if the properties and values of the objects are equal
  for (let key in firstObject) {
   if (firstObject.hasOwnProperty(key)) {
    if (!secondObject.hasOwnProperty(key)) {
     return false
    }
    // Check if the type of the properties is object.
    if (
     typeof firstObject[key] === "object" &&
     typeof secondObject[key] === "object"
    ) {
     if (!areObjectsEqual(firstObject[key], secondObject[key])) {
      return false
     }
    } else if (firstObject[key] !== secondObject[key]) {
     console.log("true")
     return false
    }
   }
  }
 
  return true
 }

 // Function to recursively update object properties
function updateObject(target, source) {
  for (const key in source) {
    if (typeof source[key] === 'object' && source[key] !== null) {
      if (!target[key]) {
          target[key] = {};
      }
      updateObject(target[key], source[key]);
    } else {
      target[key] = source[key];
    }
  }
}
/* 
  PSEUDOCODE:

  1. Read commmand line arguments -> source file, target file 
  2. If missing source||target -> exit code 1.
  3. Open->Read source && target files.
  4. JSON.parse() source && target
  5. Compare source -> target  (jsondiffpatch library?)
  6. If !SameContent -> backup target file && output change file

*/

/* const person = {
  "name": "Spongebob",
  "age": 30,
  "isEmployed": true,
  "hobbies": ["Jellyfishing", "karate", "Cooking"]
}; */

/* 
// Fetch one person
fetch("person.json")
  .then(response => response.json())
  .then(value => console.log(value));

// Fetch lots of people
fetch("people.json")
  .then(response => response.json())
  .then(values => values.forEach(value => console.log(value)));
   */

