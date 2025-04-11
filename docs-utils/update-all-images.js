const fs = require('fs');
const fsSync = require('fs');
const path = require('path');

const docsDirEN = path.join(__dirname, '../docs/en/');
const docsDirPT = path.join(__dirname, '../docs/pt/');
const docsDirES = path.join(__dirname, '../docs/es/');
const scriptErrorsPath = path.resolve(__dirname, '../script-errors.md');

const { updateImages } = require('./update-images.js');

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
       //  console.log(`Updating images for: ${filePath}`);
        await updateImages(filePath);  // Wait for updateImages to finish before proceeding
       // console.log(`Finished updating images for: ${filePath}`);
    } catch (error) {
        console.error(`Error processing file: ${filePath}`, error);
    } finally {
        activeFiles--;
        if (fileQueue.length > 0) {
            const nextFile = fileQueue.shift();
            await processFile(nextFile);
        }
    }
}

// Function to recursively process files in directories
async function processDirectory(dirPath) {
    try {
        const files = fs.readdirSync(dirPath);
        
        for (const file of files) {
            const filePath = path.join(dirPath, file);
            const stats = fs.statSync(filePath);

            if (stats.isDirectory()) {
                await processDirectory(filePath);
            } else if (path.extname(file) === '.md') {
                if (activeFiles < MAX_CONCURRENT_FILES) {
                    activeFiles++;
                    await processFile(filePath);
                } else {
                    fileQueue.push(filePath);
                }
            }
        }
    } catch (error) {
        console.error('Error processing directory:', error);
    }
}

// Start iterating from the target directory and process articles sequentially
async function updateAllImages() {
    const errors = [];
    try {
        console.log("Updating all images...");
        await processDirectory(docsDirEN);
        await processDirectory(docsDirPT);
        await processDirectory(docsDirES);

        // Wait until all files are processed
        while (activeFiles > 0 || fileQueue.length > 0) {
            await new Promise(resolve => setTimeout(resolve, 100));
        }

        console.log("Finished replacing all images in markdown files.");
    } catch (err) {
        errors.push(err.message);
        console.error(`Error updating images: ${err.message}`);
    } finally {
        await logScriptStatus('updateAllImages', errors.length ? 'Failed' : 'Success', errors);
    }
}

(async () => {
    try {
        await updateAllImages();
    } catch (error) {
        console.error('Error during image updates:', error);
    }
})();

module.exports = { updateAllImages };