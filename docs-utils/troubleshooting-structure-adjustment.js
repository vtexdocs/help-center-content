const fs = require('fs');
const path = require('path');

const locales = ['en', 'pt', 'es']

for (locale of locales) {
    const oldPath = path.resolve(`../help-center-content/docs/${locale}/tutorials/troubleshooting`)
    const newPath = path.resolve(`../help-center-content/docs/${locale}/troubleshooting`)
    console.log(oldPath)
    console.log(newPath)
    fs.renameSync(oldPath, newPath)
}