const fs = require("fs").promises;
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

module.exports = { writeMarkdown };
