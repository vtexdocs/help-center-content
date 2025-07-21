const fs = require('fs');
const path = require('path');
const imageDownloader = require('image-downloader');
const sharp = require('sharp');

const baseURL = 'https://raw.githubusercontent.com/vtexdocs/help-center-content/refs/heads/main/';

const isValidExtension = (ext) => /^[a-zA-Z0-9]*$/.test(ext);

const getExtension = (url) => {
  let dotIndex = url.lastIndexOf('.');
  if (dotIndex < 0) return 'png'; // Default to 'png' if no extension
  const ext = url.substring(dotIndex + 1);
  return isValidExtension(ext) ? ext : 'png';
};

const checkAndCompressImage = async (filePath) => {
  try {
      // Ensure the file is a GIF
      const fileExt = path.extname(filePath).toLowerCase();
      if (fileExt !== '.gif') {
          console.log(`Skipping non-GIF file: ${filePath}`);
          return filePath; // Return original path if it's not a GIF
      }

      const stats = fs.statSync(filePath);
      const fileSizeInMB = stats.size / (1024 * 1024); // Convert bytes to MB

      if (fileSizeInMB > 100) { // If file exceeds 100MB
          console.log(`File ${filePath} is over 100MB (${fileSizeInMB.toFixed(2)} MB). Compressing...`);
          let compressedFilePath = filePath.replace(/(\.\w+)$/, '_compressed$1'); 

        // Add "_compressed" before the extension
        await sharp(filePath, {limitInputPixels: 0, animated: true })
          .resize(800) 
          .gif({ interFrameMaxError: 32 })
          .toFile(compressedFilePath);

        // Add a delay to ensure file handles are released
        await new Promise(res => setTimeout(res, 3000)); // 3 seconds

        // Delete original and rename compressed
        const retryFS = async (fn, args, retries = 20, delay = 2000) => {
          for (let i = 0; i < retries; i++) {
            try {
              return fn(...args);
            } catch (err) {
              if (i === retries - 1) throw err;
              if (err.code === 'EBUSY' || err.code === 'EPERM') {
                await new Promise(res => setTimeout(res, delay));
                console.warn(`Retrying due to error: ${err.message}. Attempt ${i + 1}/${retries}`);
              } else {
                throw err;
              }
            }
          }
        };
        
        try {
          if (fs.existsSync(filePath)) {
            await retryFS(fs.promises.unlink, [filePath]);
            console.log(`Original file deleted: ${filePath}`);
          }
          await retryFS(fs.promises.rename, [compressedFilePath, filePath]);
          console.log(`File renamed: ${filePath}`);
        } catch (fsErr) {
          console.error(`FS error during delete/rename:`, fsErr.message);
          // Clean up: if compressed exists but not renamed, leave as is
        }

        return filePath; // Return compressed file path

      } else {
        console.log(`File ${filePath} is within the size limit (${fileSizeInMB.toFixed(2)} MB).`);
        return filePath; // Return original file path if no compression needed
      }
  } catch (error) {
    console.error(`Error checking or compressing file ${filePath}:`, error.message);
    return filePath; // Return original path if there's an error
  }
};

const updateImages = async (filepath) => {
  if (!filepath) {
    console.error('Received undefined filePath in updateImages');
    return;
  }

  const resolvedFilepath = path.resolve(filepath); // Ensure the path is absolute
  console.log(`Processing images in this file: ${resolvedFilepath}`);

  if (!fs.existsSync(resolvedFilepath)) {
    console.error(`File not found: ${resolvedFilepath}`);
    return;
  }

  const content = fs.readFileSync(resolvedFilepath, 'utf-8');

  const images = [];
  let imageIndex = 1;

  const replaceURL = (match, extra, url) => {
    const isMarkdownBlock = match.startsWith('![');
    if (url.startsWith(baseURL)) return match; // Skip processing for already processed URLs

    if (url.startsWith('//')) {
      url = `https:${url}`;
    }

    const ext = getExtension(url);
    const parsedPath = path.parse(resolvedFilepath); // Safely parse the path
    const newFilepath = parsedPath.dir + '/' + `${parsedPath.name}_${imageIndex}.${ext}`; // Create new file path

    images.push({
      filepath: path.resolve(newFilepath),
      url,
    });

    const encodedFilepath = encodeURI(path.relative('.', newFilepath).replace(/\\/g, "/"));
    const newURL = `${baseURL}${encodedFilepath}`;

    imageIndex++;

    return isMarkdownBlock ? `![${extra}](${newURL})` : `<img ${extra}src="${newURL}"`;
  };

  let newContent = content
    .replace(/\!\[(.*)\]\((.*)\)/g, replaceURL)
    .replace(/<img (.*)src="(.*)"/g, replaceURL);

  try {
    for (const image of images) {
        console.log(`Downloading image from: ${image.url} to ${image.filepath}`);
        await imageDownloader.image({
            url: image.url,
            dest: image.filepath,
        });

        // Check and compress the image if needed
        let compressedFilePath = await checkAndCompressImage(image.filepath);
    }

    fs.writeFileSync(resolvedFilepath, newContent);
    console.log(`Updated file: ${resolvedFilepath}`);
  } catch (err) {
    console.error(`Error updating images for: ${resolvedFilepath}`, err);
  }
};

if (require.main === module) {
  const filepath = process.argv[2]; // run with this command: node docs-utils/update-images.js "{fullFilePath}"
  updateImages(filepath);
}

module.exports = { updateImages };