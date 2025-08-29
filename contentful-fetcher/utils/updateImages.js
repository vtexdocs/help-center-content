const fs = require("fs");
const path = require("path");

const docsDirEN = path.join(__dirname, "..", "..", "docs", "en");
const docsDirPT = path.join(__dirname, "..", "..", "docs", "pt");
const docsDirES = path.join(__dirname, "..", "..", "docs", "es");

const { imageFetcher } = require("./imageFetcher.js");

const MAX_CONCURRENT_FILES = 100;

let activeFiles = 0;
let fileQueue = [];

/**
 * Process a single Markdown file
 */
async function processFile(filePath) {
  try {
    await imageFetcher(filePath);
  } catch (error) {
    console.error(`❌ Error processing file: ${filePath}`, error);
  } finally {
    activeFiles--;
    if (fileQueue.length > 0) {
      const nextFile = fileQueue.shift();
      await processFile(nextFile);
    }
  }
}

/**
 * Recursively process all .md files in the given directory,
 * optionally filtering by contentTypeFolder (e.g. 'tutorials').
 */
async function processDirectory(dirPath, contentTypeFolder) {
  try {
    const files = fs.readdirSync(dirPath);

    for (const file of files) {
      const filePath = path.join(dirPath, file);
      const stats = fs.statSync(filePath);

      if (stats.isDirectory()) {
        if (contentTypeFolder) {
          const parts = path.normalize(filePath).split(path.sep);
          if (!parts.includes(contentTypeFolder)) continue;
        }
        await processDirectory(filePath, contentTypeFolder);
      } else if (path.extname(file) === ".md") {
        if (activeFiles < MAX_CONCURRENT_FILES) {
          activeFiles++;
          await processFile(filePath);
        } else {
          fileQueue.push(filePath);
        }
      }
    }
  } catch (error) {
    console.error(`❌ Error processing directory: ${dirPath}`, error.message);
  }
}

/**
 * Main function to update images inside docs/{locale}/{contentTypeFolder}/
 * @param {string|null} contentTypeFolder - e.g. 'tutorials', 'tracks', 'faq'
 */
async function updateImages(contentTypeFolder = null) {
  const LOCALE_DIRS = [docsDirEN, docsDirPT, docsDirES];

  for (const localeDir of LOCALE_DIRS) {
    const targetDir = contentTypeFolder
      ? path.join(localeDir, contentTypeFolder)
      : localeDir;

    if (!fs.existsSync(targetDir)) {
      console.warn(`⚠️ Skipping missing directory: ${targetDir}`);
      continue;
    }

    await processDirectory(targetDir, contentTypeFolder);
  }

  // Wait for any remaining queued files
  while (activeFiles > 0 || fileQueue.length > 0) {
    await new Promise((resolve) => setTimeout(resolve, 100));
  }

  console.log("🚀 Finished replacing all images.");
}

// CLI support: allow direct usage like `node utils/updateImages.js tutorials`
if (require.main === module) {
  const folderArg = process.argv[2]; // e.g. 'tutorials'
  updateImages(folderArg).catch((error) => {
    console.error("❌ Error during image update:", error);
  });
}

module.exports = { updateImages };
