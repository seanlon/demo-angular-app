
console.log('Config started...');
const fs = require('fs');
const DEFAULT_ANGULAR_CLI_PATH = '../.angular-cli.json';

//RECEIVE PARAMETER FOR ENV TO BUILD
let parameterEnvironment = 'dev'
process.argv.forEach(function(value, index, array) { 
  // ['node','build-config.js', 'dev/prod']
  if (index === 2 && value) {
    parameterEnvironment = value;
  }
});

//GET DATA FOR ENV FILE
const filePath =`./build-configuration/angular-cli-${parameterEnvironment}.json`;
const parameterFileData = fs.readFileSync(filePath, 'utf-8');
 
//WRITE INTO FILE
fs.writeFileSync(DEFAULT_ANGULAR_CLI_PATH, parameterFileData);
console.log('Config finished Successfully');