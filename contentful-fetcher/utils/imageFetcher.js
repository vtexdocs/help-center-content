const fs = require("fs");
const path = require("path");
const imageDownloader = require("image-downloader");
const sharp = require("sharp");

const baseURL =
  "https://raw.githubusercontent.com/vtexdocs/help-center-content/refs/heads/main/";

const isValidExtension = (ext) => /^[a-zA-Z0-9]*$/.test(ext);

const getExtension = (url) => {
  let dotIndex = url.lastIndexOf(".");
  if (dotIndex < 0) return "png"; // Default to 'png' if no extension
  const ext = url.substring(dotIndex + 1);
  return isValidExtension(ext) ? ext : "png";
};

const checkAndCompressImage = async (filePath) => {
  try {
    // Ensure the file is a GIF
    const fileExt = path.extname(filePath).toLowerCase();
    if (fileExt !== ".gif") {
      //console.log(`⏭️ Skipping non-GIF file: ${filePath}`);
      return filePath; // Return original path if it's not a GIF
    }

    const stats = fs.statSync(filePath);
    const fileSizeInMB = stats.size / (1024 * 1024); // Convert bytes to MB

    if (fileSizeInMB > 100) {
      // If file exceeds 100MB
      console.log(
        `🟡 File ${filePath} is over 100MB (${fileSizeInMB.toFixed(
          2
        )} MB). Compressing...`
      );

      // Temporary file path for compressed version
      const tempCompressedPath = filePath.replace(/(\.\w+)$/, "_compressed$1");

      // Compress into a temporary file first
      await sharp(filePath, { limitInputPixels: 0, animated: true })
        .resize({ width: 800, withoutEnlargement: true }) // só reduz se for maior que 800px
        .gif({
          interFrameMaxError: 8, // mais baixo = mais qualidade
          colours: 256, // cores máximas para GIF
          effort: 10, // mais esforço para compressão
          reoptimise: true, // otimiza mantendo qualidade
        })
        .toFile(tempCompressedPath);

      // Delete the original large file
      fs.unlinkSync(filePath);
      console.log(`🗑️ Original large file deleted: ${filePath}`);

      // Rename compressed file back to original name
      fs.renameSync(tempCompressedPath, filePath);
      console.log(`♻️ Compression completed: ${filePath}`);

      return filePath; // Return compressed file path
    } else {
      console.log(
        `🟢 File ${filePath} is within the size limit (${fileSizeInMB.toFixed(
          2
        )} MB).`
      );
      return filePath; // Return original file path if no compression needed
    }
  } catch (error) {
    console.error(
      `❌ Error checking or compressing file ${filePath}:`,
      error.message
    );
    return filePath; // Return original path if there's an error
  }
};

const imageFetcher = async (filepath) => {
  if (!filepath) {
    console.error("⚠️ Received undefined filePath in imageFetcher");
    return;
  }

  const resolvedFilepath = path.resolve(filepath); // Ensure the path is absolute
  const fileName = path.basename(resolvedFilepath);
  console.log(`📄 Processing images in: ${fileName}`);

  if (!fs.existsSync(resolvedFilepath)) {
    console.error(`⛔ File not found: ${fileName}`);
    return;
  }

  const content = fs.readFileSync(resolvedFilepath, "utf-8");

  const images = [];
  let imageIndex = 1;

  const replaceURL = (match, extra, url) => {
    const isMarkdownBlock = match.startsWith("![");
    if (url.startsWith(baseURL)) return match; // Skip processing for already processed URLs

    if (url.startsWith("//")) {
      url = `https:${url}`;
    }

    const ext = getExtension(url);
    const parsedPath = path.parse(resolvedFilepath); // Safely parse the path
    const newFilepath =
      parsedPath.dir + "/" + `${parsedPath.name}_${imageIndex}.${ext}`; // Create new file path

    images.push({
      filepath: path.resolve(newFilepath),
      url,
    });

    const encodedFilepath = encodeURI(
      path.relative(".", newFilepath).replace(/\\/g, "/")
    );
    const newURL = `${baseURL}${encodedFilepath}`;

    imageIndex++;

    return isMarkdownBlock
      ? `![${extra}](${newURL})`
      : `<img ${extra}src="${newURL}"`;
  };

  let newContent = content
    .replace(/\!\[([^\]]*?)\]\(([^)\s]+)\)/g, replaceURL)
    .replace(/<img ([^>]*?)\bsrc=["']([^"']+)["']/gi, replaceURL);

  try {
    for (const image of images) {
      console.log(`🔽 Downloading image from: ${image.url}`);
      await imageDownloader.image({
        url: image.url,
        dest: image.filepath,
      });
      console.log(`✅ Downloaded image to: ${image.filepath}`);

      // Check and compress the image if needed
      let compressedFilePath = await checkAndCompressImage(image.filepath);
    }
    if (images.length > 0) {
      fs.writeFileSync(resolvedFilepath, newContent);
      console.log(`🖋️ Updated ${images.length} image paths for: ${fileName}`);
    } else {
      console.log(`ℹ️ No images found to process in: ${fileName}`);
    }
  } catch (err) {
    console.error(`❌ Error updating images for: ${resolvedFilepath}`, err);
  }
};

if (require.main === module) {
  const filepath = process.argv[2]; // run with this command: node docs-utils/update-images.js "{fullFilePath}"
  imageFetcher(filepath);
}

module.exports = { imageFetcher };
