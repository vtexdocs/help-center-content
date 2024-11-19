const fs = require('fs').promises;
const path = require('path');
const { updateImages } = require('./update-images.js');

const docsDir = path.join(__dirname, '../docs');
const MAX_CONCURRENT_FILES = 100;

let activeFiles = 0;
let fileQueue = [];

// Function to process each Markdown file
async function processFile(filePath) {
    try {
        console.log(`Updating images for: ${filePath}`);
        await updateImages(filePath);  // Wait for updateImages to finish before proceeding
        console.log(`Finished updating images for: ${filePath}`);
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

// Start iterating from the target directory and process articles sequentially
async function updateAllImages() {
    console.log("Updating all images...");
    await processDirectory(docsDir);

    // Wait until all files are processed
    while (activeFiles > 0 || fileQueue.length > 0) {
        await new Promise(resolve => setTimeout(resolve, 100));
    }

    console.log("Finished replacing all images in markdown files.");
}

module.exports = { updateAllImages }