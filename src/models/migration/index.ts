import * as fs from 'fs';
import * as path from 'path';

type MigrationMap = {
  [key: string]: () => void
};

const functions: MigrationMap = {};

fs.readdirSync(__dirname)
  .filter(file => file !== path.basename(__filename) && file.endsWith('.ts'))
  .forEach((file) => {
    // Define the function and file names
    const fileNameNoExt = file.slice(0, -3);
    const splitContext = fileNameNoExt.split('-');
    const functionName = `${splitContext[1]}${splitContext[0]}`;

    // Import the functions and put them in an object
    const migratedFile: NodeRequire = require(`./${fileNameNoExt}`);
    functions[functionName] = migratedFile[functionName];
  });

export default functions;
