const contentful = require("contentful-management");
const fs = require("fs");
const path = require("path");
require("dotenv").config();

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
    slugPrefix: 'docs/tracks',
    categories: []
  },
  {
    documentation: 'Tutorials & Solutions',
    slugPrefix: 'docs/tutorial',
    categories: []
  },
  {
    documentation: 'News',
    slugPrefix: 'announcements',
    categories: []
  },
  {
    documentation: 'FAQs',
    slugPrefix: 'faq',
    categories: []
  }
] };

function getTutorialEndpoints(endpointIds) {
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
    const titleMatch = content.match(/(?:^|\n)title:\s*["'](.*?)["']/);
    const title = titleMatch[1];
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

  return newsCategories;
}

function getFaq() {
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

async function getEntries() {
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
        if ((type != 'trackTopic' && !file.fields.slug) || file.sys.archivedAt || !file.sys.publishedAt) continue;

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
          tutorialCategories.push({ 
              ...endpointObj,
              type: 'category',
              children: [],
              subcategories: file.fields.subcategories.pt
            });
        }
      }
      skip += limit;
    } while (skip < totalCount)

    navigation.navbar[0].categories = getTrackTopics();

    navigation.navbar[1].categories = getTutorialCategories();

    navigation.navbar[2].categories = getNews();

    navigation.navbar[3].categories = getFaq();

    fs.writeFile('errorDocs.json', JSON.stringify(errorDocs), (err) => console.error(err));
    fs.writeFile('navigation.json', JSON.stringify(navigation), (err) => console.error(err));
  } catch (error) {
    console.log("Error occurred while fetching entry:", error);
  }
}

getEntries();