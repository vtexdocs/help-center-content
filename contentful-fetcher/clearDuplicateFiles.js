#!/usr/bin/env node
const fs = require("fs");
const path = require("path");
const matter = require("gray-matter");

/**
 * Get all Markdown files recursively in a folder
 * @param {string} dir - Directory path
 * @returns {string[]} - Array of file paths
 */
function getMarkdownFilesRecursively(dir) {
  let results = [];
  const list = fs.readdirSync(dir);

  list.forEach((file) => {
    const filePath = path.join(dir, file);
    const stat = fs.statSync(filePath);

    if (stat && stat.isDirectory()) {
      console.log(`📂 Entering directory: ${filePath}`);
      results = results.concat(getMarkdownFilesRecursively(filePath));
    } else if (file.endsWith(".md")) {
      console.log(`📄 Found Markdown file: ${filePath}`);
      results.push(filePath);
    }
  });

  return results;
}

/**
 * Remove duplicate Markdown files in a folder by ID,
 * keeping only the file with the most recent `updatedAt`.
 *
 * @param {string} folderPath - Path to the folder containing .md files
 */
function cleanMarkdownFiles(folderPath) {
  console.log(`🚀 Scanning folder: ${folderPath}`);

  const files = getMarkdownFilesRecursively(folderPath);
  console.log(`🔍 Total Markdown files found: ${files.length}`);

  const fileData = [];

  // Parse frontmatter of all files
  for (const filePath of files) {
    const content = fs.readFileSync(filePath, "utf8");
    const { data } = matter(content);

    if (!data.id || !data.updatedAt) {
      console.warn(`⚠️ Skipping ${filePath}: missing 'id' or 'updatedAt' in frontmatter`);
      continue;
    }

    console.log(`✅ Parsed ${filePath} → id=${data.id}, updatedAt=${data.updatedAt}`);

    fileData.push({
      id: data.id,
      updatedAt: new Date(data.updatedAt),
      filePath,
    });
  }

  // Group by id
  const grouped = fileData.reduce((acc, item) => {
    if (!acc[item.id]) acc[item.id] = [];
    acc[item.id].push(item);
    return acc;
  }, {});

  // For each group, keep only the latest and delete the rest
  for (const [id, items] of Object.entries(grouped)) {
    if (items.length > 1) {
      console.log(`\n⚡ Found duplicates for id=${id}:`);
      items.forEach((item) => {
        console.log(`   - ${item.filePath} (updatedAt=${item.updatedAt.toISOString()})`);
      });

      items.sort((a, b) => b.updatedAt - a.updatedAt); // newest first
      const keep = items[0];
      const remove = items.slice(1);

      console.log(`👉 Keeping: ${keep.filePath}`);

      remove.forEach((item) => {
        fs.unlinkSync(item.filePath);
        console.log(`🗑️ Deleted: ${item.filePath}`);
      });
    }
  }

  console.log("\n🎉 Cleanup complete!");
}

// CLI entrypoint
const folderPath = process.argv[2];
if (!folderPath) {
  console.error("Usage: clean-markdown <folderPath>");
  process.exit(1);
}

cleanMarkdownFiles(path.resolve(folderPath));
