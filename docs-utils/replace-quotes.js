const fs = require('fs').promises;
const fsSync = require('fs');
const path = require('path');

const docsDir = path.resolve(__dirname, '../docs');
const scriptErrorsPath = path.resolve(__dirname, '../script-errors.md');
const MAX_CONCURRENT_FILES = 100;

let activeFiles = 0;
let fileQueue = [];

// Function to log errors to script-errors.md
async function logScriptStatus(scriptName, status, errors = []) {
  const timestamp = new Date().toISOString();
  const errorDetails = errors.length
    ? errors.map(err => `| ${scriptName} | ❌ Failed | ${err} | ${timestamp} |`).join('\n')
    : `| ${scriptName} | ✅ Success | - | ${timestamp} |`;

  const header = `| Script Name | Status | Details | Timestamp |\n|-------------|--------|---------|-----------|`;
  const content = `${header}\n${errorDetails}\n`;

  try {
    if (!fsSync.existsSync(scriptErrorsPath)) {
      fsSync.writeFileSync(scriptErrorsPath, content);
    } else {
      fsSync.appendFileSync(scriptErrorsPath, `${errorDetails}\n`);
    }
  } catch (err) {
    console.error(`Error logging script status: ${err.message}`);
  }
}

// Function to process each Markdown file
async function processFile(filePath) {
    try {
        const data = await fs.readFile(filePath, 'utf8');
        const lines = data.split('\n');

        if (lines[1] && lines[1].startsWith('title:')) {
            let titleLine = lines[1].trim();
            const titleContentMatch = titleLine.match(/^title:\s*(['"])(.*)\1$/);

            if (titleContentMatch) {
                const currentOuterQuote = titleContentMatch[1];
                const originalTitleContent = titleContentMatch[2];
                let updatedTitleContent;
                let updatedTitleLine;

                if (currentOuterQuote === `'`) {
                    if (originalTitleContent.includes('"')) {
                        updatedTitleContent = originalTitleContent.replace(/"/g, "'");
                        updatedTitleLine = `title: "${updatedTitleContent}"`;
                    } else {
                        updatedTitleLine = titleLine;
                    }
                } else if (currentOuterQuote === `"`) {
                    if (originalTitleContent.includes('"')) {
                        updatedTitleContent = originalTitleContent.replace(/"(?![^"]*")/g, "'");
                        updatedTitleLine = `title: "${updatedTitleContent}"`;
                    } else {
                        updatedTitleLine = titleLine;
                    }
                }

                if (updatedTitleLine && updatedTitleLine !== titleLine) {
                    lines[1] = updatedTitleLine;
                    const newData = lines.join('\n');
                    await fs.writeFile(filePath, newData, 'utf8');
                    // console.log(`Quotes replaced in file: ${filePath}`);
                }
            }
        }
    } catch (error) {
        console.error(`Error processing file: ${filePath}`, error);
    } finally {
        activeFiles--;
        if (fileQueue.length > 0) {
            const nextFile = fileQueue.shift();
            processFile(nextFile);
        }
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
    const errors = [];
    try {
        console.log("Replacing quotation marks...");
        await processDirectory(docsDir);

        // Wait until all files are processed
        while (activeFiles > 0 || fileQueue.length > 0) {
            await new Promise(resolve => setTimeout(resolve, 100));
        }

        console.log("Finished replacing quotation marks in markdown files.");
    } catch (err) {
        errors.push(err.message);
        console.error(`Error replacing quotes: ${err.message}`);
    } finally {
        await logScriptStatus('replaceQuotes', errors.length ? 'Failed' : 'Success', errors);
    }
}

module.exports = { replaceQuotes };
