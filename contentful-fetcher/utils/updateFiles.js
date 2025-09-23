const fs = require("fs");
const path = require("path");
const axios = require("axios");
const http = require("http");
const https = require("https");

const docsDirEN = path.join(__dirname, "..", "..", "docs", "en");
const docsDirPT = path.join(__dirname, "..", "..", "docs", "pt");
const docsDirES = path.join(__dirname, "..", "..", "docs", "es");

const MAX_CONCURRENT_FILES = 100;
const ASSETS_PROTOCOL = "https:";
// Configure GitHub link generation
const PROJECT_ROOT = path.join(__dirname, "..", "..");
const GITHUB_REPO = process.env.GITHUB_REPO || "vtexdocs/help-center-content"; // format: org/repo
const GITHUB_BRANCH = process.env.GITHUB_BRANCH || "files-migration-script";

let activeFiles = 0;
let fileQueue = [];

/**
 * Extracts downloadable asset links from Markdown content.
 */
function findAssetLinks(markdownContent) {
  // Matches [text](url) or [text](url "title") and captures text + url only
  const linkRegex = /\[([^\]]*)\]\((\S+?)(?:\s+"[^"]*")?\)/g;
  const matches = [];
  for (const match of markdownContent.matchAll(linkRegex)) {
    const [full, text, url] = match;
    if (typeof url === "string" && url.startsWith("//assets")) {
      matches.push({ full, text, url });
    }
  }
  return matches;
}

/**
 * Derives a safe filename from a URL path, preserving the extension.
 */
function deriveSafeFilenameFromUrl(urlString) {
  try {
    const parsed = new URL(`${ASSETS_PROTOCOL}${urlString}`);
    const rawName = path.basename(parsed.pathname);
    const sanitized = rawName
      .replace(/[^a-zA-Z0-9._-]/g, "-")
      .replace(/-+/g, "-")
      .replace(/^-|-$|^\.+/g, "");
    return sanitized || "download";
  } catch {
    // Fallback: best-effort basename
    const base = path.basename(urlString.split("?")[0]);
    return base.replace(/[^a-zA-Z0-9._-]/g, "-") || "download";
  }
}

/**
 * Ensures no filename collision in a directory by suffixing a counter.
 */
function ensureUniqueFilename(directoryPath, filename) {
  const base = path.parse(filename).name;
  const ext = path.parse(filename).ext;
  let attempt = 0;
  let candidate = filename;
  while (fs.existsSync(path.join(directoryPath, candidate))) {
    attempt += 1;
    candidate = `${base}-${attempt}${ext}`;
  }
  return candidate;
}

/**
 * Streams a remote URL to a local file.
 */
async function downloadToFile(absoluteUrl, targetFilePath) {
  const response = await axios({
    url: absoluteUrl,
    method: "GET",
    responseType: "stream",
    httpAgent: new http.Agent({ keepAlive: false }),
    httpsAgent: new https.Agent({ keepAlive: false })
  });
  await fs.promises.mkdir(path.dirname(targetFilePath), { recursive: true });
  await new Promise((resolve, reject) => {
    const write = fs.createWriteStream(targetFilePath);
    response.data.pipe(write);
    write.on("finish", resolve);
    write.on("error", reject);
  });
}

/**
 * Builds an HTML anchor with download attribute to force browser download.
 */
function buildMarkdownGitHubLink(text, repoRelativePath, fallbackLocalFilename) {
  const safeText = text && String(text).trim() ? String(text).trim() : (fallbackLocalFilename || repoRelativePath);
  const normalizedRepoPath = repoRelativePath.replace(/\\/g, "/");
  if (GITHUB_REPO) {
    const rawUrl = `https://raw.githubusercontent.com/${GITHUB_REPO}/${GITHUB_BRANCH}/${normalizedRepoPath}`;
    return `[${safeText}](${rawUrl})`;
  }
  // Fallback to local relative link if repo not configured
  if (!process.env.__SILENCE_UPDATE_FILES_WARN) {
    console.warn("⚠️ GITHUB_REPO not set. Falling back to local relative link.");
  }
  return `[${safeText}](./${fallbackLocalFilename || normalizedRepoPath.split('/').pop()})`;
}

/**
 * Process a single Markdown file: download assets and rewrite links.
 */
async function processMarkdownFile(filePath) {
  let content;
  try {
    content = await fs.promises.readFile(filePath, "utf8");
  } catch (error) {
    console.error(`❌ Failed reading file: ${filePath}`, error.message);
    return;
  }

  const matches = findAssetLinks(content);
  if (matches.length === 0) return;

  const directoryPath = path.dirname(filePath);
  const replacements = [];

  for (const { full, text, url } of matches) {
    try {
      let normalized = url;
      // Normalize known Contentful asset hosts to downloads domain to avoid 403s
      if (normalized.startsWith("//assets.contentful.com")) {
        normalized = normalized.replace("//assets.contentful.com", "//downloads.ctfassets.net");
      } else if (normalized.startsWith("//assets.ctfassets.net")) {
        normalized = normalized.replace("//assets.ctfassets.net", "//downloads.ctfassets.net");
      }
      const absoluteUrl = normalized.startsWith("//") ? `${ASSETS_PROTOCOL}${normalized}` : normalized;
      const derived = deriveSafeFilenameFromUrl(url);
      const uniqueName = ensureUniqueFilename(directoryPath, derived);
      const targetPath = path.join(directoryPath, uniqueName);

      await downloadToFile(absoluteUrl, targetPath);

      // Build repo-relative path for GitHub link
      const repoRelativePath = path.relative(PROJECT_ROOT, targetPath);
      const markdownLink = buildMarkdownGitHubLink(text, repoRelativePath, uniqueName);
      replacements.push({ full, replacement: markdownLink });
    } catch (error) {
      console.error(`❌ Error downloading asset for ${filePath}: ${url}`, error.message);
    }
  }

  if (replacements.length === 0) return;

  let newContent = content;
  for (const { full, replacement } of replacements) {
    newContent = newContent.replace(full, replacement);
  }

  try {
    await fs.promises.writeFile(filePath, newContent, "utf8");
  } catch (error) {
    console.error(`❌ Failed writing file: ${filePath}`, error.message);
  }
}

/**
 * Concurrency wrapper for processing a Markdown file path.
 */
async function processFile(filePath) {
  try {
    await processMarkdownFile(filePath);
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
 * Recursively process all .md files in a directory, optionally filtering by a folder name.
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
 * Main entry: update files inside docs/{locale}/{contentTypeFolder}/
 */
async function updateFiles(contentTypeFolder = null, locales = ["en", "pt", "es"]) {
  const mapLocaleToDir = { en: docsDirEN, pt: docsDirPT, es: docsDirES };
  for (const locale of locales) {
    const localeDir = mapLocaleToDir[locale];
    const targetDir = contentTypeFolder ? path.join(localeDir, contentTypeFolder) : localeDir;
    if (!fs.existsSync(targetDir)) {
      console.warn(`⚠️ Skipping missing directory: ${targetDir}`);
      continue;
    }
    await processDirectory(targetDir, contentTypeFolder);
  }

  while (activeFiles > 0 || fileQueue.length > 0) {
    await new Promise((resolve) => setTimeout(resolve, 100));
  }
  console.log("📥 Finished replacing all downloadable file links.");
}

// CLI support
if (require.main === module) {
  const folderArg = process.argv[2];
  updateFiles(folderArg)
    .then(() => {
      // Ensure the process exits when used as a standalone CLI
      process.exit(0);
    })
    .catch((error) => {
      console.error("❌ Error during file update:", error);
      process.exit(1);
    });
}

module.exports = { updateFiles };


