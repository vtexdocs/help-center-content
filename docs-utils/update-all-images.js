const fs = require('fs').promises;
const path = require('path');
const { updateImages } = require('./update-images.js');

// The root folder to process
const rootFolder = 'docs';

// Maximum number of files to process simultaneously
const MAX_CONCURRENT_FILES = 100;

// Array to keep track of currently processing files
let activeFiles = 0;
let fileQueue = [];

// Function to process each Markdown file
async function processFile(filePath) {
    console.log('Running processFile: ',filePath)
    activeFiles++;
    try {
        updateImages(filePath)
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
    console.log('Running processDirectory: ',directory)
    try {
        console.log('try')
        console.log('|',directory,'|')
        const files = await fs.readdir(directory);
        console.log('files: ',files)
        for (const file of files) {
            const filePath = path.join(directory, file);
            console.log('filePath: ',filePath)
            const stats = await fs.stat(filePath);
            console.log('stats: ',stats)

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

async function updateAllImages() {
    console.log("Updating all images...");
    await processDirectory(rootFolder);
    while (activeFiles > 0 || fileQueue.length > 0) {
        await new Promise(resolve => setTimeout(resolve, 100));
    }
    console.log("Finished updating images in markdown files.");
}

updateAllImages()