const fs = require('fs')
const path = require('path')
// const frontmatter = require('front-matter')
const imageDownloader = require('image-downloader')

const baseURL = 'https://raw.githubusercontent.com/vtexdocs/help-center-content/refs/heads/main/'

const isValidExtension = (ext) => {
  return /^[a-zA-Z0-9]*$/.test(ext)
}

const getExtension = (url) => {
  let dotIndex = url.length - 1
  while (dotIndex >= 0 && url[dotIndex] !== '.') {
    dotIndex--
  }

  const ext = url.substring(dotIndex + 1)
  if (dotIndex < 0 || !isValidExtension(ext)) return 'png'
  return ext
}

const updateImages = async (filepath) => {

  console.log ('Running update-images.js')
  if (!filepath) {
    console.error('Received undefined filePath in updateImages');
    return; // Early return if filePath is undefined
  }
  const content = fs.readFileSync(filepath, 'utf-8')
  
  const images = []
  let imageIndex = 1
  const replaceURL = (match, extra, url) => {
    const isMarkdownBlock = match.startsWith('![')
    if (url.startsWith(baseURL)) return match

    if (url.startsWith('//')) {
      url = `https:${url}`
    }

    let newURL = ''
    const ext = getExtension(url)
    
    const newfilepath = `${filepath.split('.')[0]}_${imageIndex}.${ext}`
    images.push({
      filepath: path.resolve(newfilepath),
      url
    })
    
    newURL = `${baseURL}${filepath.split('.')[0]}_${imageIndex}.${ext}`
    imageIndex++
    
    return isMarkdownBlock ? `![${extra}](${newURL})` : `<img ${extra}src="${newURL}"`
  }

  const newContent = content
    .replace(/\!\[(.*)\]\((.*)\)/g, replaceURL)
    .replace(/<img (.*)src="(.*)"/g, replaceURL)

  try {
    for (let i = 0; i < images.length; i++) {
      await imageDownloader.image({
        url: images[i].url,
        dest: images[i].filepath
      })
    }
  
    fs.writeFileSync(filepath, newContent)
  } catch (err) {
    console.log("Couldn't download some of the images, leaving file as it is...\n\t",filepath)
  }
}

const filepath = process.argv[2]
updateImages(filepath)

module.exports = { updateImages };