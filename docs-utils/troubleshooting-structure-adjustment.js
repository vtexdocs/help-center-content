const fs = require('fs');
const path = require('path');

const locales = ['en', 'pt', 'es']

function moveContent() {
for (locale of locales) {
      const oldPath = path.resolve(`../help-center-content/docs/${locale}/tutorials/troubleshooting`)
      const newPath = path.resolve(`../help-center-content/docs/${locale}/troubleshooting`)
      fs.renameSync(oldPath, newPath)
  }
}

function moveArticleTagsToFrontmatter() {

    const testingPath = path.resolve(`../help-center-content/docs/en/troubleshooting/Integrations/integration-errors-in-amazon-orders.md`)

    const fileContent = fs.readFileSync(testingPath, 'utf-8')

    const tags = fileContent.split('**Tags:**')[1].split('\n')[0]
    const frontMatter = fileContent.split('---')[1]
    const text = fileContent.split('---')[2].replace(/^.*Tags:.*$/m, '').trim()

    // Assemble everything
    const newContent = '---'+frontMatter+`tags: ${tags}\n---\n\n`+text

    console.log(newContent)
}

function moveAllTags() {}

// moveContent()
// moveAllTags()
moveArticleTagsToFrontmatter()