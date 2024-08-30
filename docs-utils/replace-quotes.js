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
    console.log("Replacing quotation marks...");
    await processDirectory(docsDir);

    // Wait until all files are processed
    while (activeFiles > 0 || fileQueue.length > 0) {
        await new Promise(resolve => setTimeout(resolve, 100));
    }

    console.log("Finished replacing quotation marks in markdown files.");
}

module.exports = { replaceQuotes };
