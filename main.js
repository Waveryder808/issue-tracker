import * as fs from 'node:fs';
import * as process from 'node:process';

//const srcFile = '/data/bot_presets.json';
//const tgtFile = '/target/db/bot_presets2.json';
const outFile = '/out/';

const obj1 = {
  "bot_presets": [
    {
      "BotDifficulty": "easy",
      "COEF_IF_MOVE": 1.3,
      "FIRST_CONTACT_ADD_SEC": 0.35,
      "HearingSense": 0.75,
      "MAX_AIMING_UPGRADE_BY_TIME": 0.85,
      "Role": "assault",
      "SCATTERING_DIST_MODIF": 0.8,
      "ScatteringPerMeter": 0.095,
      "UseThis": true,
      "VisibleAngle": 140,
      "VisibleDistance": 125
    },
    {
      "BotDifficulty": "normal",
      "COEF_IF_MOVE": 1.3,
      "FIRST_CONTACT_ADD_SEC": 0.3,
      "HearingSense": 0.8,
      "MAX_AIMING_UPGRADE_BY_TIME": 0.85,
      "Role": "assault",
      "SCATTERING_DIST_MODIF": 0.8,
      "ScatteringPerMeter": 0.085,
      "UseThis": true,
      "VisibleAngle": 145,
      "VisibleDistance": 129 
    }
  ]
};

const obj2 = {
  "bot_presets": [
    {
      "BotDifficulty": "easy",
      "COEF_IF_MOVE": 1.3,
      "FIRST_CONTACT_ADD_SEC": 0.35,
      "HearingSense": 0.75,
      "MAX_AIMING_UPGRADE_BY_TIME": 0.85,
      "Role": "assault",
      "SCATTERING_DIST_MODIF": 0.8,
      "ScatteringPerMeter": 0.095,
      "UseThis": true,
      "VisibleAngle": 140,
      "VisibleDistance": 125
    },
    {
      "BotDifficulty": "normal",
      "COEF_IF_MOVE": 1.3,
      "FIRST_CONTACT_ADD_SEC": 0.3,
      "HearingSense": 0.8,
      "MAX_AIMING_UPGRADE_BY_TIME": 0.85,
      "Role": "assault",
      "SCATTERING_DIST_MODIF": 0.8,
      "ScatteringPerMeter": 0.085,
      "UseThis": true,
      "VisibleAngle": 145,
      "VisibleDistance": 129
    }
  ]
};

// READ COMMAND LINE ARGUMENTS
// Usage: node app.js sourceFile.json targetFile.json
const [, , srcFile, tgtFile] = process.argv;

if (!srcFile || !tgtFile || srcFile === tgtFile) {
  console.error('Usage: node app.js sourceFile.json targetFile.json');
  process.exit(1);
} 
console.log("Command Line Args:");
console.log(srcFile);
console.log(tgtFile);

// Import JSON from files
const sourceData = importJSON(srcFile);
const targetData = importJSON(tgtFile);


// Compare JSON files

// Output data changes



function importJSON(src) {
  try {
    // NOTE: fs.readFileSync() auto closes its file handle.
    const data = JSON.parse(fs.readFileSync(src, 'utf8'));
    //fs.writeFileSync(tgt, JSON.stringify(data2, null, 2));
    console.log(`File '${tgt}' updated successfully.`);
  } catch (err) {
    console.error('Error:', err);
    process.exit(1);
  }
  return data;
}

function compareProps(obj1, obj2) {

}

function writeJSON(data, destination) {
  try {
    fs.writeFileSync(destination, JSON.stringify(data))
  } catch (error) {
    
  }
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


function areObjectsEqual(firstObject, secondObject) {
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