// This script has an error: it passes absolute paths to the function updateImages. So the updated image links are wrong. This can be fixed manually using VSCode search.
const fs = require('fs').promises;  // Use the promise-based version of fs
const path = require('path');
const { updateImages } = require('./update-images.js'); // Ensure this returns a promise or is async

const targetDir = path.join(__dirname, '../docs');
let articleNumber = 0;
let allArticles = [];

async function iterateFiles(dir) {
  const files = await fs.readdir(dir, { withFileTypes: true });

  for (const file of files) {
    const fullPath = path.join(dir, file.name).replace(/\\/g, '/');

    if (file.isDirectory()) {
      // If it's a directory, recursively search it
      await iterateFiles(fullPath);
    } else if (file.isFile() && (file.name.endsWith('.md') || file.name.endsWith('.mdx'))) {
      // If it's a .md or .mdx file, do something with it
      articleNumber++;
      allArticles.push(fullPath);
    }
  }
}

async function processArticles() {
  for (const article of allArticles) {
    console.log(`Updating images for: ${article}`);
    await updateImages(article);  // Wait for updateImages to finish before proceeding
    console.log(`Finished updating images for: ${article}`);
  }
}

// Start iterating from the target directory and process articles sequentially
(async () => {
  await iterateFiles(targetDir);  // First gather all the articles
  await processArticles();        // Then process them one by one
})();
