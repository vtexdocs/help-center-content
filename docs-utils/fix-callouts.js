const fs = require('fs').promises;
const fsSync = require('fs');
const path = require('path');

const scriptErrorsPath = path.resolve(__dirname, '../script-errors.md');

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

// The root folder to process
const rootFolder = 'docs';

// Maximum number of files to process simultaneously
const MAX_CONCURRENT_FILES = 100;

// Array to keep track of currently processing files
let activeFiles = 0;
let fileQueue = [];

// Function to process the HTML content
function convertCallout(htmlCallout) {
    let markdownCallout = htmlCallout.trim();

    // Remove inline styles (e.g., style="color:red;")
    markdownCallout = markdownCallout.replace(/\s*style="[^"]*"/g, '');

    // Convert <br> and <br /> to new lines with `>` prefix
    markdownCallout = markdownCallout.replace(/<br\s*\/?>/g, '\n>\n> ');

    // Convert <p>...</p> only if it's NOT the first <p> element
    let firstParagraph = true;
    markdownCallout = markdownCallout.replace(/<p>(.*?)<\/p>/gs, (_, pContent) => {
        pContent = pContent.trim(); // Remove any extra whitespace around the paragraph content

        if (firstParagraph) {
            firstParagraph = false;
            return pContent;
        }

        // Ensure that any existing blank lines or spaces are cleaned up
        return `\n> ${pContent}`;
    });

    // Convert <ul>, <ol>, and <li> within callouts to markdown lists
    markdownCallout = markdownCallout
        .replace(/<ul>(.*?)<\/ul>/gs, (match, ulContent) => {
            return ulContent
                .replace(/<li>(.*?)<\/li>/gs, (match, liContent) => `\n> * ${liContent.trim()}`)
                .replace(/^\n>\s*\* /gm, '\n> *'); // Remove any extra space before list items
        })
        .replace(/<ol>(.*?)<\/ol>/gs, (match, olContent) => {
            let counter = 1;
            return olContent
                .replace(/<li>(.*?)<\/li>/gs, (match, liContent) => `\n> ${counter++}. ${liContent.trim()}`)
                .replace(/^\n>\s*\d+\. /gm, '\n> '); // Remove any extra space before list items
        });

    // Clean up any excessive blank lines that may have been introduced
    markdownCallout = markdownCallout.replace(/(\n\s*){2,}/g, '\n>\n');

    // Convert basic HTML tags to markdown
    markdownCallout = markdownCallout.replace(/<strong>(.*?)<\/strong>/g, '**$1**');
    markdownCallout = markdownCallout.replace(/<b>(.*?)<\/b>/g, '**$1**');
    markdownCallout = markdownCallout.replace(/<em>(.*?)<\/em>/g, '*$1*');
    markdownCallout = markdownCallout.replace(/<code>(.*?)<\/code>/g, '`$1`');  // Convert <code> to backticks
    markdownCallout = markdownCallout.replace(/<a href="(.*?)">(.*?)<\/a>/g, '[$2]($1)');

    // Append '>' to new lines within the div
    markdownCallout = markdownCallout.replace(/\n(?!>\s)/g, '\n> ');

    return markdownCallout;
}

// Function to process each Markdown file
async function processFile(filePath) {
    activeFiles++;
    try {
        const data = await fs.readFile(filePath, 'utf8');
        // Replace HTML structures with corresponding markdown symbols
        const newData = data
            .replace(/<div\s+[^>]*class\s*=\s*"alert alert-info"[^>]*>(.*?)<\/div>/gs, (match, p1) => `>ℹ️ ${convertCallout(p1)}`)
            .replace(/<div\s+[^>]*class\s*=\s*"alert alert-warning"[^>]*>(.*?)<\/div>/gs, (match, p1) => `>⚠️ ${convertCallout(p1)}`)
            .replace(/<div\s+[^>]*class\s*=\s*"alert alert-danger"[^>]*>(.*?)<\/div>/gs, (match, p1) => `>❗ ${convertCallout(p1)}`);

        await fs.writeFile(filePath, newData, 'utf8');
    } catch (err) {
        console.error(`Error processing file: ${filePath}`, err);
    } finally {
        activeFiles--;
        if (fileQueue.length > 0) {
            const nextFile = fileQueue.shift();
            processFile(nextFile);
        }
    }
}

// Recursive function to process all markdown files in the directory
async function processDirectory(directory) {
    try {
        const files = await fs.readdir(directory);
        for (const file of files) {
            const filePath = path.join(directory, file);
            const stats = await fs.stat(filePath);

            if (stats.isDirectory()) {
                await processDirectory(filePath);
            } else if (path.extname(file) === '.md') {
                if (activeFiles < MAX_CONCURRENT_FILES) {
                    processFile(filePath);
                } else {
                    fileQueue.push(filePath);
                }
            }
        }
    } catch (err) {
        console.error(`Error processing directory: ${directory}`, err);
    }
}

async function fixCallouts() {
    const errors = [];
    try {
        console.log("Fixing callouts...");
        await processDirectory(rootFolder);
        while (activeFiles > 0 || fileQueue.length > 0) {
            await new Promise(resolve => setTimeout(resolve, 100));
        }
        console.log("Finished fixing callouts in markdown files.");
    } catch (err) {
        errors.push(err.message);
        console.error(`Error fixing callouts: ${err.message}`);
    } finally {
        await logScriptStatus('fixCallouts', errors.length ? 'Failed' : 'Success', errors);
    }
}

module.exports = { fixCallouts };