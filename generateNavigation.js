const contentful = require("contentful-management");

const client = contentful.createClient({
  accessToken: "INSERT TOKEN HERE",
});

const fs = require("fs");

const tutorialCategories = [];
const tutorialSubcategories = {};
const tutorialEndpoints = {};

const trackTopics = [];
const tracks = {};
const trackArticles = {};

const news = [];

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
    documentation: 'Announcements',
    slugPrefix: 'announcements',
    categories: []
  },
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
  news.sort((a, b) => b.year - a.year);
  news.forEach((yearCategory) => {
    yearCategory.children.sort((a, b) => b.publishedAt - a.publishedAt)
  });
  const newsCategories = [];
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

  for (let i = 0; i < news.length; i++) {
    const value = news[i];
    const monthCategories = months.map((month) => {
      return {
        name: month,
        slug: `news-category-${value.year}-${month.en}`,
        origin: '',
        type: 'category',
        children: []
      }
    });

    value.children.forEach(({ name, slug, publishedAt }) => {
      const fileDate = new Date(publishedAt);
      const month = fileDate.getUTCMonth();
      monthCategories[month].children.push({
        name,
        slug,
        origin: '',
        type: 'markdown',
        children: []
      });
    })

    const newsCategory = {
      name: {
        "en": `${value.year}`,
        "es": `${value.year}`,
        "pt": `${value.year}`
      },
      slug: `news-category-${value.year}`,
      origin: '',
      type: 'category',
      children: monthCategories.filter((e) => e.children.length > 0)
    };

    newsCategories.push(newsCategory);
  }

  newsCategories.forEach((cat) => cat.children.reverse());

  return newsCategories;
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
          slug: file.fields.slug ? file.fields.slug.en: '',
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
        } else if (type === 'updates') {
          const fileDate = new Date(file.sys.publishedAt);
          const fileYear = fileDate.getUTCFullYear();
          const yearIndex = news.findIndex((e) => e.year === fileYear);
          if(yearIndex >= 0) {
            news[yearIndex].children.push({
              ...endpointObj,
              publishedAt:file.sys.publishedAt
            });
          } else {
            news.push({
              year: fileYear,
              children: [{ ...endpointObj, type: 'markdown', children: [], publishedAt:file.sys.publishedAt }]
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

    // Tracks
    navigation.navbar[0].categories = getTrackTopics();

    // Tutorial
    navigation.navbar[1].categories = getTutorialCategories();

    // News
    navigation.navbar[2].categories = getNews();

    fs.writeFile('errorDocs.json', JSON.stringify(errorDocs), (err) => console.error(err));
    fs.writeFile('navigation.json', JSON.stringify(navigation), (err) => console.error(err));
  } catch (error) {
    console.log("Error occurred while fetching entry:", error);
  }
}

getEntries();