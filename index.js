// retrieve entries from contentful
const contentful = require("contentful-management");

const client = contentful.createClient({
  accessToken: "CFPAT-7nG-G6E-h51qLhX1O2A57e5f_cnRFio5DoxoRdzzmLE",
});

async function getEntries() {
  try {
    const space = await client.getSpace("alneenqid6w5");
    const environment = await space.getEnvironment("master");
    const entries = await environment.getEntries();
    return entries.items;
  } catch (error) {
    console.log("Error occurred while fetching entries:", error);
  }
}

function createMarkdownFile(entry) {

  // extract information from each entry

  let sys = entry.sys;
  let fields = entry.fields;
  console.log(fields);

  let entryId = sys.id;
  let entryType = sys.type;
  let createdAt = sys.createdAt || '';
  let updatedAt = sys.updatedAt || '';
  let publishedAt = sys?.publishedAt || '';
  let firstPublishedAt = sys?.firstPublishedAt || '';
  let archivedAt = sys?.archivedAt || '';
  let contentType = sys.contentType.sys.id;
  let productTeam = fields.xpTeam.pt;
  let subcategory = fields.subcategory?.pt.sys.id || '';
  let titleEN = fields.title.en;
  let titleES = fields.title.es;
  let titlePT = fields.title.pt;
  let author = fields.author?.pt[0].sys.id || '';
  let tag = fields.tag?.pt || '';
  let slugEN = fields.slug.en;
  let slugES = fields.slug.es;
  let slugPT = fields.slug.pt;
  let legacySlugEN = fields.legacySlug?.en || '';
  let legacySlugES = fields.legacySlug?.es || '';
  let legacySlugPT = fields.legacySlug?.pt || '';
  let textEN = fields.text?.en || '';
  let textES = fields.text?.es || '';
  let textPT = fields.text?.pt || '';

  let kiStatusEN = fields.status?.pt[0] || '';
  let kiStatusES = fields.status?.pt[0] || '';
  let kiStatusPT = fields.status?.pt[0] || '';
  let kiSummaryEN = fields.summary?.en || '';
  let kiSummaryES = fields.summary?.es || '';
  let kiSummaryPT = fields.summary?.pt || '';
  let kiSimulationEN = fields.simulation?.en || '';
  let kiSimulationES = fields.simulation?.es || '';
  let kiSimulationPT = fields.simulation?.pt || '';
  let kiWorkaroundEN = fields.workaround?.en || '';
  let kiWorkaroundES = fields.workaround?.es || '';
  let kiWorkaroundPT = fields.workaround?.pt || '';
  let internalReference = fields.internalReference?.pt || '';

  let trackId = fields.trackId?.pt.sys.id || '';
  let trackSlugEN = fields.trackSlug?.en || '';
  let trackSlugES = fields.trackSlug?.es || '';
  let trackSlugPT = fields.trackSlug?.pt || '';

  let announcementImageID = fields.image?.pt.id || '';
  let announcementSynopsisEN = fields.synopsis?.en || '';
  let announcementSynopsisES = fields.synopsis?.es || '';
  let announcementSynopsisPT = fields.synopsis?.pt || '';

  // create .md files in locale folders for each item

  console.log(contentType);

  const fs = require("fs");

  let fileNameEN = `${slugEN}.md`;
//  let fileNameES = `${slugES}.md`;
//  let fileNamePT = `${slugPT}.md`;

  let fileContentEN = "";
  let fileContentES = "";
  let fileContentPT = "";
  let fileFolders = "";

  const locales = ["en", "es", "pt"];

  if (contentType === 'knownIssue') {
    fileContentEN = `---
title: ${titleEN}
id: ${entryId}
createdAt: ${createdAt}
updatedAt: ${updatedAt}
publishedAt: ${publishedAt}
firstPublishedAt: ${firstPublishedAt}
contentType: ${contentType}
productTeam: ${productTeam}
author: ${author}
tag: ${tag}
slug: ${slugEN}
status: ${kiStatusEN}
internalReference: ${internalReference}
---

## Summary

${kiSummaryEN}

## Simulation

${kiSimulationEN}

## Workaround

${kiWorkaroundEN}

`;
    fileContentES = `---
title: ${titleES}
id: ${entryId}
createdAt: ${createdAt}
updatedAt: ${updatedAt}
publishedAt: ${publishedAt}
firstPublishedAt: ${firstPublishedAt}
contentType: ${contentType}
productTeam: ${productTeam}
author: ${author}
tag: ${tag}
slug: ${slugES}
status: ${kiStatusES}
internalReference: ${internalReference}
---

## Sumario

${kiSummaryES}

## Simulación

${kiSimulationES}

## Workaround

${kiWorkaroundES}

`;
    fileContentPT = `---
title: ${titlePT}
id: ${entryId}
createdAt: ${createdAt}
updatedAt: ${updatedAt}
publishedAt: ${publishedAt}
firstPublishedAt: ${firstPublishedAt}
contentType: ${contentType}
productTeam: ${productTeam}
author: ${author}
tag: ${tag}
slug: ${slugPT}
status: ${kiStatusPT}
internalReference: ${internalReference}
---

## Sumário

${kiSummaryPT}

## Simulação

${kiSimulationPT}

## Workaround

${kiWorkaroundPT}

`;
    fileFolders = "known-issues";
  } else if (contentType === 'tutorial') {
    fileContentEN = `---
title: ${titleEN}
id: ${entryId}
createdAt: ${createdAt}
updatedAt: ${updatedAt}
publishedAt: ${publishedAt}
firstPublishedAt: ${firstPublishedAt}
contentType: ${contentType}
productTeam: ${productTeam}
author: ${author}
slug: ${slugEN}
legacySlug: ${legacySlugEN}
subcategory: ${subcategory}
---

${textEN}
`;
    fileContentES = `---
title: ${titleES}
id: ${entryId}
createdAt: ${createdAt}
updatedAt: ${updatedAt}
publishedAt: ${publishedAt}
firstPublishedAt: ${firstPublishedAt}
contentType: ${contentType}
productTeam: ${productTeam}
author: ${author}
slug: ${slugES}
legacySlug: ${legacySlugES}
subcategory: ${subcategory}
---

${textES}
`;
    fileContentPT = `---
title: ${titlePT}
id: ${entryId}
createdAt: ${createdAt}
updatedAt: ${updatedAt}
publishedAt: ${publishedAt}
firstPublishedAt: ${firstPublishedAt}
contentType: ${contentType}
productTeam: ${productTeam}
author: ${author}
slug: ${slugPT}
legacySlug: ${legacySlugPT}
subcategory: ${subcategory}
---

${textPT}
`;
    fileFolders = "tutorials";
  } else if (contentType === 'trackArticle') {
    fileContentEN = `---
title: ${titleEN}
id: ${entryId}
createdAt: ${createdAt}
updatedAt: ${updatedAt}
publishedAt: ${publishedAt}
firstPublishedAt: ${firstPublishedAt}
contentType: ${contentType}
productTeam: ${productTeam}
slug: ${slugEN}
trackId: ${trackId}
trackSlugEN: ${trackSlugEN}
---

${textEN}
`;
    fileContentES = `---
title: ${titleES}
id: ${entryId}
createdAt: ${createdAt}
updatedAt: ${updatedAt}
publishedAt: ${publishedAt}
firstPublishedAt: ${firstPublishedAt}
contentType: ${contentType}
productTeam: ${productTeam}
slug: ${slugES}
trackId: ${trackId}
trackSlugES: ${trackSlugES}
---

${textES}
`;
    fileContentPT = `---
title: ${titlePT}
id: ${entryId}
createdAt: ${createdAt}
updatedAt: ${updatedAt}
publishedAt: ${publishedAt}
firstPublishedAt: ${firstPublishedAt}
contentType: ${contentType}
productTeam: ${productTeam}
slug: ${slugPT}
trackId: ${trackId}
trackSlugPT: ${trackSlugPT}
---

${textPT}
`;
    fileFolders = `tracks/${trackSlugEN}`;
  } else if (contentType === 'frequentlyAskedQuestion') {
    fileContentEN = `---
title: ${titleEN}
id: ${entryId}
createdAt: ${createdAt}
updatedAt: ${updatedAt}
publishedAt: ${publishedAt}
firstPublishedAt: ${firstPublishedAt}
contentType: ${contentType}
productTeam: ${productTeam}
author: ${author}
slug: ${slugEN}
legacySlug: ${legacySlugEN}
---

${textEN}
`;
    fileContentES = `---
title: ${titleES}
id: ${entryId}
createdAt: ${createdAt}
updatedAt: ${updatedAt}
publishedAt: ${publishedAt}
firstPublishedAt: ${firstPublishedAt}
contentType: ${contentType}
productTeam: ${productTeam}
author: ${author}
slug: ${slugES}
legacySlug: ${legacySlugES}
---

${textES}
`;
    fileContentPT = `---
title: ${titlePT}
id: ${entryId}
createdAt: ${createdAt}
updatedAt: ${updatedAt}
publishedAt: ${publishedAt}
firstPublishedAt: ${firstPublishedAt}
contentType: ${contentType}
productTeam: ${productTeam}
author: ${author}
slug: ${slugPT}
legacySlug: ${legacySlugPT}
---

${textPT}
`;
    fileFolders = "faq";
  } else if (contentType === "updates") {
    fileContentEN = `---
title: ${titleEN}
id: ${entryId}
createdAt: ${createdAt}
updatedAt: ${updatedAt}
publishedAt: ${publishedAt}
contentType: ${contentType}
productTeam: ${productTeam}
author: ${author}
slug: ${slugEN}
legacySlug: ${legacySlugEN}
announcementImageID: ${announcementImageID}
announcementSynopsisEN: ${announcementSynopsisEN}
---

${textEN}
`;
    fileContentES = `---
title: ${titleES}
id: ${entryId}
createdAt: ${createdAt}
updatedAt: ${updatedAt}
publishedAt: ${publishedAt}
contentType: ${contentType}
productTeam: ${productTeam}
author: ${author}
slug: ${slugES}
legacySlug: ${legacySlugES}
announcementImageID: ${announcementImageID}
announcementSynopsisES: ${announcementSynopsisES}
---

${textES}
`;
    fileContentPT = `---
title: ${titlePT}
id: ${entryId}
createdAt: ${createdAt}
updatedAt: ${updatedAt}
publishedAt: ${publishedAt}
contentType: ${contentType}
productTeam: ${productTeam}
author: ${author}
slug: ${slugPT}
legacySlug: ${legacySlugPT}
announcementImageID: ${announcementImageID}
announcementSynopsisPT: ${announcementSynopsisPT}
---

${textPT}
`;
    fileFolders = `announcements`;
  } else if (contentType === "category") {
    console.log('Content type not supported.')
  } else if (contentType === "subcategory") {
    console.log('Content type not supported.')
  } else if (contentType === "track") {
    console.log('Content type not supported.')
  } else if (contentType === "trackTopic") {
    console.log('Content type not supported.')
  } else if (contentType === "author") {
    console.log('Content type not supported.')
  } else {
    console.log('Content type not identified.')
  }

  let fileContents = [fileContentEN, fileContentES, fileContentPT];
 
  for (let i = 0; i < locales.length; i++) {
    const localeFolderName = `./docs/${locales[i]}`;
    try {
      if (!fs.existsSync(localeFolderName)) {
        fs.mkdirSync(localeFolderName);
      }
    } catch (err) {
      console.log("Error creating folder", err);
    }
    const folderName = `./docs/${locales[i]}/${fileFolders}`;
    try {
      if (!fs.existsSync(folderName)) {
        fs.mkdirSync(folderName);
      }
    } catch (err) {
      console.log("Error creating folder", err);
    }
    let filePath = `./docs/${locales[i]}/${fileFolders}/${fileNameEN}`;
    fs.writeFile(filePath, fileContents[i], (err) => {
      if (err) {
        console.log(`Error occurred while creating file ${filePath}:`, err);
      } else {
        console.log(`File ${filePath} created successfully.`);
      }
    });
  }
};

for (let j = 0; j < items.length; j++) {
getEntries()
  .then((items) => {
    createMarkdownFile(items[j]);
  })
  .catch((error) => console.log("Error occurred:", error));
}

/* to test a single entry, replace the `for` loop above with:
getEntries()
  .then((items) => {
    createMarkdownFile(items[46]);
  })
  .catch((error) => console.log("Error occurred:", error));
*/