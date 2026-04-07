const fs = require('fs');
const path = require('path');

/**
 * Standard GitAgent File Reader tool.
 */
const filePath = process.argv[2] || process.cwd();

try {
    const content = fs.readFileSync(filePath, 'utf8');
    console.log(content);
} catch (error) {
    console.error(`Error reading file: ${error.message}`);
    process.exit(1);
}
