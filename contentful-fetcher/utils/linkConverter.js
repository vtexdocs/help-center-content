const fs = require("fs");
const path = require("path");

/**
 * Converts absolute portal links to relative links in markdown content
 * @param {string} content - The markdown content to process
 * @returns {string} - The processed content with converted links
 */
function convertPortalLinks(content) {
  if (!content || typeof content !== "string") {
    return content;
  }

  let processedContent = content;

  // Pattern 1: Markdown inline links [text](https://help.vtex.com/path)
  const markdownLinkPattern = /\[([^\]]+)\]\(https:\/\/help\.vtex\.com\/([^)]+)\)/g;
  processedContent = processedContent.replace(
    markdownLinkPattern,
    "[$1](/$2)"
  );

  // Pattern 2: HTML <a> tags <a href="https://help.vtex.com/path">text</a>
  const htmlLinkPattern = /<a\s+href="https:\/\/help\.vtex\.com\/([^"]+)"([^>]*)>([^<]+)<\/a>/g;
  processedContent = processedContent.replace(
    htmlLinkPattern,
    '<a href="/$1"$2>$3</a>'
  );

  return processedContent;
}

/**
 * Processes a single markdown file
 * @param {string} filePath - Path to the markdown file
 * @param {Object} options - Processing options
 * @param {boolean} options.dryRun - If true, don't modify files
 * @param {boolean} options.backup - If true, create backup files
 * @param {boolean} options.verbose - If true, show detailed logging
 * @returns {Object} - Result object with success status and changes made
 */
async function processMarkdownFile(filePath, options = {}) {
  const { dryRun = false, backup = false, verbose = false } = options;

  try {
    // Read the file content
    const originalContent = fs.readFileSync(filePath, "utf8");
    
    // Convert the links
    const convertedContent = convertPortalLinks(originalContent);
    
    // Check if any changes were made
    const hasChanges = originalContent !== convertedContent;
    
    if (!hasChanges) {
      if (verbose) {
        console.log(`📄 No changes needed: ${filePath}`);
      }
      return { success: true, changed: false, filePath };
    }

    if (verbose) {
      console.log(`🔄 Processing: ${filePath}`);
    }

    if (dryRun) {
      if (verbose) {
        console.log(`🔍 [DRY RUN] Would convert links in: ${filePath}`);
      }
      return { success: true, changed: true, filePath, dryRun: true };
    }

    // Create backup if requested
    if (backup) {
      const backupPath = `${filePath}.bak`;
      fs.writeFileSync(backupPath, originalContent);
      if (verbose) {
        console.log(`💾 Created backup: ${backupPath}`);
      }
    }

    // Write the converted content
    fs.writeFileSync(filePath, convertedContent);
    
    if (verbose) {
      console.log(`✅ Converted links in: ${filePath}`);
    }

    return { success: true, changed: true, filePath };

  } catch (error) {
    console.error(`❌ Error processing ${filePath}:`, error.message);
    return { success: false, error: error.message, filePath };
  }
}

/**
 * Recursively processes all .md files in a directory
 * @param {string} directoryPath - Path to the directory to process
 * @param {Object} options - Processing options
 * @param {string[]} options.locales - Array of locale codes to process (e.g., ['en', 'pt', 'es'])
 * @param {boolean} options.dryRun - If true, don't modify files
 * @param {boolean} options.backup - If true, create backup files
 * @param {boolean} options.verbose - If true, show detailed logging
 * @returns {Object} - Result object with processing statistics
 */
async function processDirectory(directoryPath, options = {}) {
  const { locales = [], dryRun = false, backup = false, verbose = false } = options;

  if (!fs.existsSync(directoryPath)) {
    throw new Error(`Directory does not exist: ${directoryPath}`);
  }

  const results = {
    total: 0,
    processed: 0,
    changed: 0,
    errors: 0,
    files: []
  };

  try {
    // Get all markdown files recursively
    const markdownFiles = getAllMarkdownFiles(directoryPath, locales);
    results.total = markdownFiles.length;

    if (verbose) {
      console.log(`📁 Found ${markdownFiles.length} markdown files to process`);
    }

    // Process each file
    for (const filePath of markdownFiles) {
      const result = await processMarkdownFile(filePath, options);
      results.files.push(result);
      
      if (result.success) {
        results.processed++;
        if (result.changed) {
          results.changed++;
        }
      } else {
        results.errors++;
      }
    }

    return results;

  } catch (error) {
    console.error(`❌ Error processing directory ${directoryPath}:`, error.message);
    throw error;
  }
}

/**
 * Recursively finds all .md files in a directory, optionally filtered by locale
 * @param {string} directoryPath - Path to search
 * @param {string[]} locales - Array of locale codes to include
 * @returns {string[]} - Array of file paths
 */
function getAllMarkdownFiles(directoryPath, locales = []) {
  const markdownFiles = [];

  function scanDirectory(dir, isTopLevel = true) {
    const items = fs.readdirSync(dir);
    
    for (const item of items) {
      const fullPath = path.join(dir, item);
      const stat = fs.statSync(fullPath);
      
      if (stat.isDirectory()) {
        // Only apply locale filtering at the top level
        if (isTopLevel && locales.length > 0 && !locales.includes(item)) {
          continue;
        }
        scanDirectory(fullPath, false);
      } else if (stat.isFile() && item.endsWith('.md')) {
        markdownFiles.push(fullPath);
      }
    }
  }

  scanDirectory(directoryPath, true);
  return markdownFiles;
}

/**
 * Main function to run link conversion
 * @param {Object} options - Processing options
 * @param {string} options.docsPath - Path to the docs directory
 * @param {string[]} options.locales - Array of locale codes to process
 * @param {boolean} options.dryRun - If true, don't modify files
 * @param {boolean} options.backup - If true, create backup files
 * @param {boolean} options.verbose - If true, show detailed logging
 * @returns {Object} - Processing results
 */
async function runLinkConversion(options = {}) {
  const {
    docsPath = path.join(__dirname, "..", "..", "docs"),
    locales = [],
    dryRun = false,
    backup = false,
    verbose = false
  } = options;

  console.log("🔗 Starting link conversion process...");
  
  if (dryRun) {
    console.log("🔍 Running in DRY RUN mode - no files will be modified");
  }
  
  if (backup) {
    console.log("💾 Backup files will be created");
  }

  try {
    const results = await processDirectory(docsPath, {
      locales,
      dryRun,
      backup,
      verbose
    });

    // Print summary
    console.log("\n📊 Link Conversion Summary:");
    console.log(`   Total files found: ${results.total}`);
    console.log(`   Files processed: ${results.processed}`);
    console.log(`   Files changed: ${results.changed}`);
    console.log(`   Errors: ${results.errors}`);

    if (dryRun && results.changed > 0) {
      console.log(`\n🔍 ${results.changed} files would be modified in a real run`);
    }

    return results;

  } catch (error) {
    console.error("❌ Link conversion failed:", error.message);
    throw error;
  }
}

module.exports = {
  convertPortalLinks,
  processMarkdownFile,
  processDirectory,
  runLinkConversion,
  getAllMarkdownFiles
};
