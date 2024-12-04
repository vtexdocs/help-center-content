// We couldn't get this to work by being called at index.js. This has to be run manually
const fs = require('fs');
const path = require('path');

const locales = ['en', 'pt', 'es']

function moveArticleTagsToFrontmatter(filePath) {

    const fileContent = fs.readFileSync(filePath, 'utf-8')
    
    if (fileContent.includes('**Tags:**')) {
        const tags = fileContent.split('**Tags:**')[1].split('\n')[0]
        const frontMatter = fileContent.split('---')[1]
        const text = fileContent.split('---')[2].replace(/^.*Tags:.*$/m, '').trim()
    
        // Assemble everything
        const newContent = '---'+frontMatter+`tags: ${tags}\n---\n\n`+text
    
        fs.writeFileSync(filePath, newContent)
    } else {
        console.log('Tags already adjusted for this file.')
    }
}

function moveAllTags(folderPath) {
    
    console.log('Adjusting tags')
    const folderContent = fs.readdirSync(folderPath)
    for (dir of folderContent) {
        dir = `${folderPath}/${dir}`
        console.log(dir)
        if (fs.statSync(dir).isFile() && (dir.endsWith('.md') || dir.endsWith('.mdx'))) {
            console.log('FILE')
            moveArticleTagsToFrontmatter(dir)
        } else if (fs.statSync(dir).isDirectory()) {
            console.log('FOLDER')
            moveAllTags(dir)
        }
    }
}

async function adjustTroubleshootingContent() {
    console.log('Adjusting troubleshooting content...')
    for (locale of locales) {
        const oldPath = path.resolve(`../help-center-content/docs/${locale}/tutorials/troubleshooting`)
        const newPath = path.resolve(`../help-center-content/docs/${locale}/troubleshooting`)
        if (fs.existsSync(oldPath)) {
            console.log(`Changing ${locale} troubleshooting folder path.`)
            fs.renameSync(oldPath, newPath)
        } else {
            console.log(`${locale} troubleshooting folder already in correct path.`)
        }
        moveAllTags(newPath)
    }
}

adjustTroubleshootingContent()

module.exports = { adjustTroubleshootingContent }
