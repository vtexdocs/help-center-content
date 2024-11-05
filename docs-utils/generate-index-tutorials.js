const fs = require('fs');
const path = require('path');
const https = require('https');

const updatedAt = new Date().toISOString(); // Current date and time
const locales = ['pt', 'en', 'es']; // List of locales

// Initiate a GET request to the specified URL
async function getNavigation() {
  return new Promise((resolve, reject) => {
    https.get('https://raw.githubusercontent.com/vtexdocs/helpcenter/refs/heads/main/public/navigation.json', (res) => {
      let data = '';

      // 'data' event is triggered when a chunk of data is received from the server
      res.on('data', (chunk) => {
        // Append each chunk of data to the 'data' variable
        data += chunk;
      });

      // 'end' event is triggered when the entire response has been received
      res.on('end', () => {
        try {
          // Parse the data and resolve the promise
          resolve(JSON.parse(data));
        } catch (err) {
          // If there's an error parsing the JSON, reject the promise
          reject(new Error('Error parsing JSON: ' + err.message));
        }
      });
    }).on('error', (err) => {
      // If there's an error with the request, reject the promise
      reject(err);
    });
  });
}

getNavigation()
  .then((navigation) => {
    createCategoyIndexes(navigation)
  })
  .catch((error) => {
    console.error(error);
  });

function createCategoyIndexes(navigation) {

  for (locale of locales) {

    const categoriesData = navigation.navbar[1].categories
    for (category of categoriesData) {

      let categoryNameEn = category.name.en

      // Make sure it doesn't end with a space.
      if (categoryNameEn.endsWith(' ')) {
        categoryNameEn = categoryNameEn.substring(0, categoryNameEn.length-1)
      }

      // Exclude troubleshooting content, which will be moved to another part of the navigation structure.
      if (categoryNameEn === 'Troubleshooting') continue

      const catSlug = category.slug[locale]
      const filePath = `docs/${locale}/tutorials/${categoryNameEn}/${catSlug}.md`
      const absoluteFilePath = path.resolve(filePath)
      
      let markdown = `---\n` +
      `title: '${category.name[locale]}'\n` +
      `id: ${category.slug.en}\n` +
      `status: PUBLISHED\n` +
      `createdAt: 2024-11-05T19:06:37.704Z\n` +
      `updatedAt: ${updatedAt}\n`+
      `contentType: tutorial\n` +
      `productTeam: ${category.name[locale]}\n` +
      `slugEN: ${category.slug.en}\n` +
      `locale: ${locale}\n` +
      `---\n\n`

      const subcategoriesData = category.children  
      for (subcategory of subcategoriesData) {
        
        const subcategoryName = subcategory.name[locale]
        
        markdown += `## ${subcategoryName}\n\n`

        const articleData = subcategory.children
        for (article of articleData) {
          
          const articleName = article.name[locale]
        
          markdown += `- [${articleName}](https://help.vtex.com/${locale}/docs/tutorials/${article.slug[locale]})\n`

        }

        markdown += `\n`

      }
      
      fs.writeFileSync(absoluteFilePath, markdown, 'utf-8')
  
    }
  }
}