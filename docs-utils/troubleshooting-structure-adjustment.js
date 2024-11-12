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
        } else {
            console.log('FOLDER')
            moveAllTags(dir)
        }
    }
}

async function adjustTroubleshootingContent() {
    console.log('Adjusting troubleshooting content...')
    for (locale of locales) {
        const oldPath = path.resolve(`/docs/${locale}/tutorials/troubleshooting`)
        const newPath = path.resolve(`/docs/${locale}/troubleshooting`)
        fs.renameSync(oldPath, newPath)
        moveAllTags(newPath)
    }
}

module.exports = { adjustTroubleshootingContent }
