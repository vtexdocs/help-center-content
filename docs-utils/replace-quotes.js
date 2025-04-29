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
      console.log(`file: ${filePath} -ORIGINAL: ${titleLine}`);

      // Handle empty or whitespace-only titles
      if (titleLine === 'title:' || titleLine.match(/^title:\s+$/)) {
        console.warn(`Warning: Empty or whitespace-only title in file: ${filePath}`);
        return;
      }

      // Fix unquoted titles
      if (!titleLine.match(/title:\s*['"]/)) {
        titleLine = titleLine.replace(/title:\s*(.*)/, (_, content) => {
          return `title: "${content.replace(/"/g, "'")}"`; // Add quotes + replace internals
        });
      }
      // Fix double-quoted titles
      else if (titleLine.match(/^title:\s*"([^`]*"[^`]*)+"$/)) {
        titleLine = titleLine.replace(/^title:\s*"(.*)"$/, (match, content) => {
          const cleanContent = content.replace(/^"|"$/g, ''); // Remove extra quotes
          return `title: '${cleanContent}'`;
        });
      }
      // Fix single-quoted titles with nested single quotes
      else if (titleLine.match(/^title:\s*'([^']*'[^']*)+'$/)) {
        titleLine = titleLine.replace(/^title:\s*'(.*)'$/, (match, content) => {
          return `title: "${content}"`; // Convert outer single quotes to double quotes
        });
      }
      // Handle mixed quotes
      else if (titleLine.match(/^title:\s*"(.*'[^"]*)"/)) {
        titleLine = titleLine.replace(/^title:\s*"(.*)"$/, (match, content) => {
          return `title: "${content}"`; // Keep outer double quotes
        });
      }
      // Handle escaped quotes
      else if (titleLine.match(/^title:\s*".*\\".*"$/)) {
        console.log(`Escaped quotes detected in file: ${filePath}`);
      }
      // Handle multiline titles
      else if (titleLine.includes('\n')) {
        console.warn(`Warning: Multiline title detected in file: ${filePath}`);
      }

      // Only update if changes were made
      if (titleLine !== lines[1]) {
        console.log('Replacing title line:', lines[1], 'with:', titleLine);
        lines[1] = titleLine;
        await fs.writeFile(filePath, lines.join('\n'), 'utf8');
      }
      console.log(`file: ${filePath} -UPDATED: ${titleLine}`);
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
    console.log(`Scanning directory: ${dirPath}`); // Log the directory being scanned
    try {
        const files = await fs.readdir(dirPath);
        
        for (const file of files) {
            const filePath = path.join(dirPath, file);
            const stats = await fs.stat(filePath);

            if (stats.isDirectory()) {
                await processDirectory(filePath);
            } else if (path.extname(file) === '.md') {
                console.log(`Found Markdown file: ${filePath}`); // Log each Markdown file found
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
    console.log("Lendo arquivos da pasta docsDir");
    await processDirectory(docsDir);

    // Wait until all files are processed
    while (activeFiles > 0 || fileQueue.length > 0) {
        await new Promise(resolve => setTimeout(resolve, 100));
    }

    console.log("Finished replacing quotation marks in markdown files.");
}

module.exports = { replaceQuotes };
