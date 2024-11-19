const fs = require('fs');
const path = require('path');
const imageDownloader = require('image-downloader');

const baseURL = 'https://raw.githubusercontent.com/vtexdocs/help-center-content/refs/heads/main/';

const isValidExtension = (ext) => /^[a-zA-Z0-9]*$/.test(ext);

const getExtension = (url) => {
  let dotIndex = url.lastIndexOf('.');
  if (dotIndex < 0) return 'png'; // Default to 'png' if no extension
  const ext = url.substring(dotIndex + 1);
  return isValidExtension(ext) ? ext : 'png';
};

const updateImages = async (filepath) => {
  console.log('Running update-images.js');

  if (!filepath) {
    console.error('Received undefined filePath in updateImages');
    return;
  }

  const resolvedFilepath = path.resolve(filepath); // Ensure the path is absolute
  console.log(`Processing file: ${resolvedFilepath}`);

  if (!fs.existsSync(resolvedFilepath)) {
    console.error(`File not found: ${resolvedFilepath}`);
    return;
  }

  const content = fs.readFileSync(resolvedFilepath, 'utf-8');

  const images = [];
  let imageIndex = 1;

  const replaceURL = (match, extra, url) => {
    const isMarkdownBlock = match.startsWith('![');
    if (url.startsWith(baseURL)) return match;

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
''
    const encodedFilepath = encodeURI(path.relative('.', newFilepath).replace(/\\/g, "/"))

    console.log('ENCODEDFILEPATH:' + encodedFilepath)


    const newURL = `${baseURL}${encodedFilepath}`;
    imageIndex++;

    return isMarkdownBlock ? `![${extra}](${newURL})` : `<img ${extra}src="${newURL}"`;
  };

  const newContent = content
    .replace(/\!\[(.*)\]\((.*)\)/g, replaceURL)
    .replace(/<img (.*)src="(.*)"/g, replaceURL);

  try {
    for (const image of images) {
      await imageDownloader.image({
        url: image.url,
        dest: image.filepath,
      });
    }

    fs.writeFileSync(resolvedFilepath, newContent);
    console.log(`Updated file: ${resolvedFilepath}`);
  } catch (err) {
    console.error(`Error updating images for: ${resolvedFilepath}`, err);
  }
};

const filepath = process.argv[2] // run with this command: node docs-utils/update-images.js "{fullFilePath}"
updateImages(filepath)

module.exports = { updateImages };