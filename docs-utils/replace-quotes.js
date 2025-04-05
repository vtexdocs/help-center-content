console.log("TEST: Script is running!"); 

const fs = require('fs').promises;
const path = require('path');

const docsDir = path.resolve(__dirname, '../docs');
const MAX_CONCURRENT_FILES = 100;

let activeFiles = 0;
let fileQueue = [];

// Function to process each Markdown file
async function processFile(filePath) {
  try {
    const data = await fs.readFile(filePath, 'utf8');
    const lines = data.split('\n');

    if (lines[1] && lines[1].trim().startsWith('title:')) {
      let titleLine = lines[1].trim();
      
      // Fix unquoted titles - for example:  `title: Hello "world"` - not sure if we need to cover this type of scenario
      if (!titleLine.match(/title:\s*['"]/)) {
        titleLine = titleLine.replace(/title:\s*(.*)/, (_, content) => {
          return `title: "${content.replace(/"/g, "'")}"`; // Add quotes + replace internals
        });
      }
      // Fix double-quoted titles  - for example: `title: "Hello "world""`
      else if (titleLine.includes('"') && !titleLine.includes('\\"')) {
        titleLine = titleLine.replace(/"([^"\\]*(\\.[^"\\]*)*)"/g, (match, content) => {
          return `"${content.replace(/"/g, "'")}"`; // Replace internal quotes
        });
      }
      // Fix single-quoted titles  - for example: `title: 'Hello "world"'`
      else if (titleLine.includes("'")) {
        titleLine = titleLine.replace(/'([^'\\]*(\\.[^'\\]*)*)'/g, (match, content) => {
          return `"${content.replace(/"/g, "'")}"`; // Convert to double quotes
        });
      }

      // Only update if changes were made
      if (titleLine !== lines[1]) {
        lines[1] = titleLine;
        await fs.writeFile(filePath, lines.join('\n'), 'utf8');
      }
    }
  } catch (error) {
    console.error(`Error in ${filePath}:`, error);
  } finally {
    activeFiles--;
    if (fileQueue.length > 0) processFile(fileQueue.shift());
  }
}

// Function to recursively process files in directories
async function processDirectory(dirPath) {
    try {
        const files = await fs.readdir(dirPath);
        
        for (const file of files) {
            const filePath = path.join(dirPath, file);
            const stats = await fs.stat(filePath);

            if (stats.isDirectory()) {
                await processDirectory(filePath);
            } else if (path.extname(file) === '.md') {
                if (activeFiles < MAX_CONCURRENT_FILES) {
                    activeFiles++;
                    processFile(filePath);
                } else {
                    fileQueue.push(filePath);
                }
            }
        }
    } catch (error) {
        console.error('Error processing directory:', error);
    }
}

async function replaceQuotes() {
    console.log("Replacing quotation marks...");
    await processDirectory(docsDir);

    // Wait until all files are processed
    while (activeFiles > 0 || fileQueue.length > 0) {
        await new Promise(resolve => setTimeout(resolve, 100));
    }

    console.log("Finished replacing quotation marks in markdown files.");
}

module.exports = { replaceQuotes };
