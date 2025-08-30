const fs = require("fs");
const path = require("path");
const { normalizeFileName } = require("../utils/normalize");

async function writeMarkdown({
  content,
  slug,
  locale = "en",
  folder = "",
  subfolder = "",
  subcategoryFolder = "",
}) {
  const docsFolder = path.join(
    __dirname,
    "..",
    "..",
    "docs",
    locale,
    folder,
    subfolder,
    subcategoryFolder
  );

  const fileName = normalizeFileName(slug || "untitled") + ".md";
  const fullPath = path.join(docsFolder, fileName);

  await fs.mkdir(docsFolder, { recursive: true });
  await fs.writeFile(fullPath, content, "utf8");
  console.log(`✅ Written: ${path.relative(process.cwd(), fullPath)}`);
}

function ensureDirSync(dir) {
  if (!fs.existsSync(dir)) fs.mkdirSync(dir, { recursive: true });
}

async function writeJSON(filePath, data) {
  const fsp = fs.promises;

  try {
    await fsp.writeFile(filePath, JSON.stringify(data, null, 2), "utf8");
    console.log(`📝  ${path.relative(process.cwd(), filePath)}`);
  } catch (err) {
    if (err.code === "ENOENT") {
      console.error(`❌ Pasta não existe: ${path.dirname(filePath)}`);
    } else {
      throw err; 
    }
  }
}


module.exports = { writeMarkdown, writeJSON };
