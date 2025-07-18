const contentful = require("contentful-management");
const fs = require("fs");
const path = require("path");
require("dotenv").config();

console.log('Generating navigation...')

const client = contentful.createClient({
  accessToken: process.env.CONTENTFUL_ACCESS_TOKEN,
});

const tutorialCategories = [];
const tutorialSubcategories = {};
const tutorialEndpoints = {};

const trackTopics = [];
const tracks = {};
const trackArticles = {};

const errorDocs = {
  docs: []
};

const navigation = { navbar: [
  {
    documentation: 'Start here',
    name: {
      en: 'Start here',
      es: 'Comece aqui',
      pt: 'Comece aqui'
    },
    slugPrefix: 'docs/tracks',
    categories: []
  },
  {
    documentation: 'Tutorials',
    name: {
      en: 'Tutorials',
      es: 'Tutoriales',
      pt: 'Tutoriais'
    },
    slugPrefix: 'docs/tutorials',
    categories: []
  },
  {
    documentation: 'News',
    name: {
      en: 'News',
      es: 'Anuncios',
      pt: 'Comunicados'
    },
    slugPrefix: 'announcements',
    categories: []
  },
  {
    documentation: 'FAQs',
    name: {
      en: 'Frequently asked questions',
      es: 'Preguntas frecuentes',
      pt: 'Perguntas frequentes'
    },
    slugPrefix: 'faq',
    categories: []
  },
  {
    documentation: 'Known Issues',
    name: {
      en: 'Known issues',
      es: 'Problemas Conocidos',
      pt: 'Problemas conhecidos'
    },
    slugPrefix: 'known-issues',
    categories: []
  },
  {
    documentation: 'Troubleshooting',
    name: {
      en: 'Troubleshooting',
      es: 'Troubleshooting',
      pt: 'Troubleshooting'
    },
    slugPrefix: 'troubleshooting',
    categories: []
  }
] };

function getTutorialEndpoints(endpointIds) {
  console.log('Getting tutorial endpoints...')
  const children = [];
  for (let i = 0; i < endpointIds.length; i++) {
    const id = endpointIds[i].sys.id;
    if(Object.hasOwn(tutorialEndpoints, id)) {
      children.push(tutorialEndpoints[id]);

    }
  }
  return children;
}

function getTutorialSubcategories(subcategoriesIds) {
  console.log('Getting tutorial subcategories...')
  const children = [];
  for (let i = 0; i < subcategoriesIds.length; i++) {
    const id = subcategoriesIds[i].sys.id;
    if(Object.hasOwn(tutorialSubcategories, id)) {
      const { endpoints, ...obj } = tutorialSubcategories[id];
      const endpointChildren = getTutorialEndpoints(endpoints);

      if(endpointChildren.length > 0)
        children.push({
          ...obj,
          children: endpointChildren
        });
    }
  }
  return children;
}

function getTutorialCategories() {
  console.log('Getting tutorial categories...')
  const categories = [];
  for (let i = 0; i < tutorialCategories.length; i++) {
    const { subcategories, ...obj } = tutorialCategories[i];

    const children = getTutorialSubcategories(subcategories);
    categories.push({
      ...obj,
      children
    });
  }

  return categories;
}

function getTrackArticles(steps) {
  console.log('Getting track articles...')
  const children = [];
  for (let i = 0; i < steps.length; i++) {
    const id = steps[i].sys.id;
    if(Object.hasOwn(trackArticles, id)) {
      children.push(trackArticles[id]);
    }
  }

  return children;
}

function getTracks(trackIds) {
  console.log('Getting tracks...')
  const children = [];
  for (let i = 0; i < trackIds.length; i++) {
    const id = trackIds[i].sys.id;
    if(Object.hasOwn(tracks, id)) {
      const { steps, ...obj } = tracks[id];
      const stepsChildren = getTrackArticles(steps);
      children.push({
        ...obj,
        children: stepsChildren
      });
    }
  }

  return children;
}

function getTrackTopics() {
  console.log('Getting track topics...')
  const categories = [];
  for (let i = 0; i < trackTopics.length; i++) {
    const { trackChildren, ...obj } = trackTopics[i];
    const children = getTracks(trackChildren);
    categories.push({
      ...obj,
      children
    });
  }

  return categories;
}

function getNews() {
  console.log('Getting news...')

  const months = [
    { en: 'January', es: 'Enero', pt: 'Janeiro' },
    { en: 'February', es: 'Febrero', pt: 'Fevereiro' },
    { en: 'March', es: 'Marzo', pt: 'Março' },
    { en: 'April', es: 'Abril', pt: 'Abril' },
    { en: 'May', es: 'Mayo', pt: 'Maio' },
    { en: 'June', es: 'Junio', pt: 'Junho' },
    { en: 'July', es: 'Julio', pt: 'Julho' },
    { en: 'August', es: 'Agosto', pt: 'Agosto' },
    { en: 'September', es: 'Septiembre', pt: 'Setembro' },
    { en: 'October', es: 'Octubre', pt: 'Outubro' },
    { en: 'November', es: 'Noviembre', pt: 'Novembro' },
    { en: 'December', es: 'Diciembre', pt: 'Dezembro' },
  ];

  const enDir = 'docs/en/announcements';
  const ptDir = 'docs/pt/announcements';
  const esDir = 'docs/es/announcements';

  const enFiles = fs.readdirSync(enDir)
  const ptFiles = fs.readdirSync(ptDir)
  const esFiles = fs.readdirSync(esDir)

  const news = {};

  enFiles.forEach(file => {

    if (path.extname(file) === '.md') {

      const filePath = enDir + '/' + file;
//    console.log("File path:" + filePath);
      const content = fs.readFileSync(filePath, 'utf8');
//    console.log("Content:" + content);
      const fileDate = new Date(file.substring(0, 10)); // Extract date from file name prefix
      const year = fileDate.getUTCFullYear();
      const month = fileDate.getUTCMonth();

      if (!news[year]) {
        news[year] = months.map((month) => ({
          name: month,
          slug: `announcements-${year}-${month.en}`,
          origin: '',
          type: 'category',
          children: []
        }));
      }

      const enSlug = file.replace('.md', '');
//    console.log(enSlug)
      const titleMatch = content.match(/(?:^|\n)title:\s*["'](.*?)["']/)
      const title = titleMatch[1]
//    console.log("Title:" + title)

      const ptFile = ptFiles.find(f => {
        const ptContent = fs.readFileSync((ptDir + '/' + f), 'utf8');
        const slugMatch = ptContent.match(/^slugEN:\s*(\S+)$/m);
        if (slugMatch) {
          const slugENTrimmed = slugMatch[1].trim().toLowerCase();
          const enSlugTrimmed = enSlug.trim().toLowerCase();
          return slugENTrimmed === enSlugTrimmed;
        }
        else {
          return false;
        }
      });

      const esFile = esFiles.find(f => {
        const esContent = fs.readFileSync((esDir + '/' + f), 'utf8');
        const slugMatch = esContent.match(/^slugEN:\s*(\S+)$/m);
        if (slugMatch) {
          const slugENTrimmed = slugMatch[1].trim().toLowerCase();
          const enSlugTrimmed = enSlug.trim().toLowerCase();
          return slugENTrimmed === enSlugTrimmed;
        }
        else {
          return false;
        }
      });

      news[year][month].children.push({
        name: {
          en: title,
          pt: ptFile ? fs.readFileSync((ptDir + '/' + ptFile), 'utf8').match(/(?:^|\n)title:\s*["'](.*?)["']/)[1] : '',
          es: esFile ? fs.readFileSync((esDir + '/' + esFile), 'utf8').match(/(?:^|\n)title:\s*["'](.*?)["']/)[1] : '',
        },
        slug: {
          en: enSlug,
          pt: ptFile ? ptFile.replace('.md', '') : '',
          es: esFile ? esFile.replace('.md', '') : ''
        },
        origin: '',
        type: 'markdown',
        children: []
      });
    }
  });

  const newsCategories = [];
  for (const year in news) {
    newsCategories.push({
      name: {
        "en": `${year}`,
        "es": `${year}`,
        "pt": `${year}`
      },
      slug: `announcements-${year}`,
      origin: '',
      type: 'category',
      children: news[year].filter((e) => e.children.length > 0)
    });
  }

  // Sort years from most recent to oldest
  newsCategories.sort((a, b) => b.name.en - a.name.en);

  // Sort months within each year from most recent to oldest
  newsCategories.forEach(yearCategory => {
    yearCategory.children.sort((a, b) => months.findIndex(m => m.en === b.name.en) - months.findIndex(m => m.en === a.name.en));
  });

  return newsCategories;
}

function getFaq() {
  console.log('Getting FAQs...')
  const enDir = 'docs/en/faq';
  const ptDir = 'docs/pt/faq';
  const esDir = 'docs/es/faq';

  const enCategories = fs.readdirSync(enDir, { withFileTypes: true }).filter(dirent => dirent.isDirectory());
  const faq = {};

  enCategories.forEach(category => {
    const enCategoryPath = path.join(enDir, category.name);
    const ptCategoryPath = path.join(ptDir, category.name);
    const esCategoryPath = path.join(esDir, category.name);

    const enFiles = fs.readdirSync(enCategoryPath);
    const ptFiles = fs.existsSync(ptCategoryPath) ? fs.readdirSync(ptCategoryPath) : [];
    const esFiles = fs.existsSync(esCategoryPath) ? fs.readdirSync(esCategoryPath) : [];

    faq[category.name] = [];

    enFiles.forEach(file => {
      const filePath = path.join(enCategoryPath, file);
      const content = fs.readFileSync(filePath, 'utf8');
      const enSlug = file.replace('.md', '');
      const titleMatch = content.match(/(?:^|\n)title:\s*["'](.*?)["']/);
      const title = titleMatch ? titleMatch[1] : '';

      const ptFile = ptFiles.find(f => {
        const ptContent = fs.readFileSync(path.join(ptCategoryPath, f), 'utf8');
        const slugMatch = ptContent.match(/^slugEN:\s*(\S+)$/m);
        return slugMatch && slugMatch[1].trim().toLowerCase() === enSlug.trim().toLowerCase();
      });

      const esFile = esFiles.find(f => {
        const esContent = fs.readFileSync(path.join(esCategoryPath, f), 'utf8');
        const slugMatch = esContent.match(/^slugEN:\s*(\S+)$/m);
        return slugMatch && slugMatch[1].trim().toLowerCase() === enSlug.trim().toLowerCase();
      });

      faq[category.name].push({
        name: {
          en: title,
          pt: ptFile ? fs.readFileSync(path.join(ptCategoryPath, ptFile), 'utf8').match(/(?:^|\n)title:\s*["'](.*?)["']/)[1] : '',
          es: esFile ? fs.readFileSync(path.join(esCategoryPath, esFile), 'utf8').match(/(?:^|\n)title:\s*["'](.*?)["']/)[1] : '',
        },
        slug: {
          en: enSlug,
          pt: ptFile ? ptFile.replace('.md', '') : '',
          es: esFile ? esFile.replace('.md', '') : ''
        },
        origin: '',
        type: 'markdown',
        children: []
      });
    });
  });

  const faqCategories = [];
  for (const category in faq) {
    faqCategories.push({
      name: {
        en: category,
        pt: category,
        es: category
      },
      slug: `faq/${category}`,
      origin: '',
      type: 'category',
      children: faq[category]
    });
  }

  return faqCategories;
}

function getKnownIssues() {
  console.log('Getting Known Issues...')
  const enDir = 'docs/en/known-issues';
  const ptDir = 'docs/pt/known-issues';
  const esDir = 'docs/es/known-issues';

  const enCategories = fs.readdirSync(enDir, { withFileTypes: true }).filter(dirent => dirent.isDirectory());
  const knownIssues = {};

  enCategories.forEach(category => {
    const enCategoryPath = path.join(enDir, category.name);
    const ptCategoryPath = path.join(ptDir, category.name);
    const esCategoryPath = path.join(esDir, category.name);

    const enFiles = fs.readdirSync(enCategoryPath);
    const ptFiles = fs.existsSync(ptCategoryPath) ? fs.readdirSync(ptCategoryPath) : [];
    const esFiles = fs.existsSync(esCategoryPath) ? fs.readdirSync(esCategoryPath) : [];

    knownIssues[category.name] = [];

    enFiles.forEach(file => {
      const filePath = path.join(enCategoryPath, file);
      const content = fs.readFileSync(filePath, 'utf8');
      const enSlug = file.replace('.md', '');
      const titleMatch = content.match(/(?:^|\n)title:\s*["'](.*?)["']/);
      const title = titleMatch ? titleMatch[1] : '';

      const ptFile = ptFiles.find(f => {
        const ptContent = fs.readFileSync(path.join(ptCategoryPath, f), 'utf8');
        const slugMatch = ptContent.match(/^slugEN:\s*(\S+)$/m);
        return slugMatch && slugMatch[1].trim().toLowerCase() === enSlug.trim().toLowerCase();
      });

      const esFile = esFiles.find(f => {
        const esContent = fs.readFileSync(path.join(esCategoryPath, f), 'utf8');
        const slugMatch = esContent.match(/^slugEN:\s*(\S+)$/m);
        return slugMatch && slugMatch[1].trim().toLowerCase() === enSlug.trim().toLowerCase();
      });

      knownIssues[category.name].push({
        name: {
          en: title,
          pt: ptFile ? fs.readFileSync(path.join(ptCategoryPath, ptFile), 'utf8').match(/(?:^|\n)title:\s*["'](.*?)["']/)[1] : '',
          es: esFile ? fs.readFileSync(path.join(esCategoryPath, esFile), 'utf8').match(/(?:^|\n)title:\s*["'](.*?)["']/)[1] : '',
        },
        slug: {
          en: enSlug,
          pt: ptFile ? ptFile.replace('.md', '') : '',
          es: esFile ? esFile.replace('.md', '') : ''
        },
        origin: '',
        type: 'markdown',
        children: []
      });
    });
  });

  const knownIssuesCategories = [];
  for (const category in knownIssues) {
    knownIssuesCategories.push({
      name: {
        en: category,
        pt: category,
        es: category
      },
      slug: `known-issues/${category}`,
      origin: '',
      type: 'category',
      children: knownIssues[category]
    });
  }

  return knownIssuesCategories;
}

function getTroubleshooting() {
  const tutorialsContent = navigation.navbar[1].categories
  const troubleshootingIndex = tutorialsContent.findIndex(category => category.name.en === 'Troubleshooting')
  const troubleshootingContent = tutorialsContent[troubleshootingIndex].children
  
  // Remove the troubleshooting category from the tutorials categories array
  navigation.navbar[1].categories.splice(troubleshootingIndex, 1) 

  return troubleshootingContent
}

async function getEntries() {
  console.log('Getting entries...')
  try {
    const space = await client.getSpace("alneenqid6w5");
    const environment = await space.getEnvironment("master");

    let skip = 0;
    let limit = 100;
    let totalCount = 0;

    do {
      const response = await environment.getEntries({ skip, limit });
      const entries = response;
      totalCount = response.total;

      for (let j = 0; j < entries.items.length; j++) {
        const file = entries.items[j];
        const type = file.sys.contentType.sys.id;

        console.log('Processing file:', file.sys.id, 'Type:', type);
        console.log('Published version:', file.sys.publishedVersion, 'Current version:', file.sys.version);

        // Skip files that are not published
        if (!(file.sys.publishedVersion &&
    file.sys.version == file.sys.publishedVersion + 1)) {
          // This file is not published yet, skip it
          if (file.fields.title) {
            console.log(`Skipping unpublished file: ${JSON.stringify(file.fields.title)}`);
          }
          continue;
        }

        if ((type != 'trackTopic' && !file.fields.slug) || file.sys.archivedAt || !file.sys.publishedAt) continue;

        // Debugging log to check what files are being processed in this specific loop
        if (file.fields.title) {
            console.log(`Processing file: ${JSON.stringify(file.fields.title)}`);
        }

        const endpointObj = {
          name: file.fields.title,
          slug: file.fields.slug,
          origin: ''
        };

        if (type === 'trackArticle') {
          trackArticles[file.sys.id] = { ...endpointObj, type: 'markdown', children: [] };
        } else if (type === 'track') {
          tracks[file.sys.id] = {
            ...endpointObj,
            type: 'category',
            children: [],
            steps: file.fields.steps.pt
          };
        } else if (type === 'trackTopic') {
          if(!file.fields.tracks) {
            errorDocs.docs.push(file);
            continue;
          } else {
            trackTopics.push({
              ...endpointObj,
              name: file.fields.name,
              slug: `track-topic-${file.fields.name.en}`,
              type: 'category',
              children: [],
              trackChildren: file.fields.tracks.pt
            });
          }
        } else if(type === 'tutorial') {
          tutorialEndpoints[file.sys.id] = { ...endpointObj, type: 'markdown', children: [] }
        } else if(type === 'subcategory') {
          if(!file.fields.tutorials) {
            errorDocs.docs.push(file);
            continue;
          } else {
            tutorialSubcategories[file.sys.id] = {
              ...endpointObj,
              type: 'category',
              children: [],
              endpoints: file.fields.tutorials.pt,
            };
          }
        } else if(type === 'category') {
          if(!file.fields.subcategories) {
            errorDocs.docs.push(file);
            continue;
          }
          // Add the "category-" prefix only to category slugs, not subcategories
          const updatedCategory = {
            ...endpointObj,
            type: 'markdown',
            children: [],
            subcategories: file.fields.subcategories.pt,  // Does not modify subcategory slugs
            slug: {  // Add "category-" to category slugs
              en: `category-${file.fields.slug.en}`,
              es: `categoria-${file.fields.slug.es}`,
              pt: `categoria-${file.fields.slug.pt}`
            }
          };

          tutorialCategories.push(updatedCategory);
        }
      }
      skip += limit;
    } while (skip < totalCount)

    navigation.navbar[0].categories = getTrackTopics();

    navigation.navbar[1].categories = getTutorialCategories();

    navigation.navbar[2].categories = getNews();

    navigation.navbar[3].categories = getFaq();

    navigation.navbar[4].categories = getKnownIssues();

    navigation.navbar[5].categories = getTroubleshooting();

    fs.writeFile('errorDocs.json', JSON.stringify(errorDocs), (err) => console.error(err));
    fs.writeFile('navigation.json', JSON.stringify(navigation), (err) => console.error(err));
  } catch (error) {
    console.log("Error occurred while fetching entry:", error);
  }
}

getEntries();