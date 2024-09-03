// retrieve entries from contentful
const contentful = require("contentful-management");
require("dotenv").config();

const client = contentful.createClient({
  accessToken: process.env.CONTENTFUL_ACCESS_TOKEN ?? "",
});

const path = require("path");
const fs = require("fs");

let fileCount = 0;

let contentTypes = {
  authors: [],
  tracks: [],
  knownIssues: [],
  tutorials: [],
  trackArticles: [],
  trackTopics: [],
  faqs: [],
  announcements: [],
  categories: [],
  subcategories: [],
  adminV4docs: [], // deprecated
  topBar: [], // deprecated
  topQuestions: [], // deprecated
  concepts: [], // deprecated
  businessGuides: [], // deprecated
  unknownContentTypes: [],
};

let categories = [];
let subcategories = [];

async function getCategories() {
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

      for (let j = 0; j < entries.items.length ; j++) {
        let entry = entries.items[j];
        
        let contentType = entry.sys.contentType.sys.id;
        if (contentType === "category") {
          let categoryEN = entry.fields.title?.en || "Untitled category";
          let categoryPT = entry.fields.title?.pt || "Untitled category";
          let categoryES = entry.fields.title?.es || "Untitled category";
          let categoryId = entry.sys.id;
          let categorySubcategories = [];
          if ("subcategories" in entry.fields) {
            for (k = 0; k < entry.fields.subcategories.pt.length; k++) {
              categorySubcategories.push(entry.fields.subcategories.pt[k].sys.id);
            }
          }
          categories.push({"categoryEN": categoryEN, "categoryPT": categoryPT, "categoryES": categoryES, "categoryId": categoryId, "categorySubcategories": categorySubcategories})
        }
      }
      skip += limit;
    } while (skip < totalCount);
  } catch (error) {
    console.log("Error occurred while fetching category:", error);
  }
//  console.log(categories);
  return categories;
}

async function getSubcategories() {
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

      for (let j = 0; j < entries.items.length ; j++) {
        let entry = entries.items[j];
        getSubcategoryInfo(entry,categories);
      }
      skip += limit;
    } while (skip < totalCount);
  } catch (error) {
    console.log("Error occurred while fetching subcategory:", error);
  }

  // Cross-matching and updating categories
  categories.forEach(category => {
    const subcategoryNames = subcategories
      .filter(sub => sub.categoryId === category.categoryId)
      .map(sub => sub.subcategoryEN);

    category.subcategoryNames = subcategoryNames;
  });

  // Cross-matching and updating subcategories
  subcategories.forEach(subcategory => {
    const category = categories.find(cat => cat.categoryId === subcategory.categoryId);
    if (category) {
      subcategory.categoryName = category.categoryEN;
    }
  });

  return subcategories;
}

async function getEntries() {

  await getCategories();
  await getSubcategories();

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

      for (let j = 0; j < entries.items.length ; j++) {
        let entry = entries.items[j];
//      console.log(entry.fields)
        createMarkdownFile(entry, categories, subcategories);
      }
      skip += limit;
    } while (skip < totalCount);
    console.log(
      "Total amount of entries retrieved from Contentful:",
      totalCount
    );
    console.log("Authors:", contentTypes.authors.length);
    console.log("Tracks:", contentTypes.tracks.length);
    console.log("Known Issues:", contentTypes.knownIssues.length);
    console.log("Tutorials:", contentTypes.tutorials.length);
    console.log("Track Articles:", contentTypes.trackArticles.length);
    console.log("Track Topics:", contentTypes.trackTopics.length);
    console.log("FAQs:", contentTypes.faqs.length);
    console.log("Announcements:", contentTypes.announcements.length);
    console.log("Categories:", contentTypes.categories.length);
    console.log("Subcategories:", contentTypes.subcategories.length);
    console.log("Admin V4 docs (deprecated):", contentTypes.adminV4docs.length);
    console.log("TopBar (deprecated):", contentTypes.topBar.length);
    console.log("TopQuestions (deprecated):", contentTypes.topQuestions.length);
    console.log("Concepts (deprecated):", contentTypes.concepts.length);
    console.log(
      "Business Guides (deprecated):",
      contentTypes.businessGuides.length
    );
    console.log(
      "Unknown Content Type:",
      contentTypes.unknownContentTypes.length
    );
    console.log("Entries that generated files:", fileCount / 3); // fileCount divided by the amount of locales, since it creates one file per locale
    console.log(
      "Amount of errors (difference between total of entries, entries that generated files and correctly ignored entries):",
      totalCount -
        fileCount / 3 -
        contentTypes.authors.length -
        contentTypes.tracks.length -
        contentTypes.trackTopics.length -
        contentTypes.categories.length -
        contentTypes.subcategories.length -
        contentTypes.adminV4docs.length -
        contentTypes.topBar.length -
        contentTypes.topQuestions.length -
        contentTypes.concepts.length -
        contentTypes.businessGuides.length -
        contentTypes.unknownContentTypes.length
    );
  } catch (error) {
    console.log("Error occurred while fetching entry:", error);
  }
}

function isDraft(entry) {
  return !entry.sys.publishedVersion;
}

function isChanged(entry) {
  return (
    !!entry.sys.publishedVersion &&
    entry.sys.version >= entry.sys.publishedVersion + 2
  );
}

function isPublished(entry) {
  return (
    !!entry.sys.publishedVersion &&
    entry.sys.version == entry.sys.publishedVersion + 1
  );
}

function isArchived(entry) {
  return !!entry.sys.archivedVersion;
}

function getSubcategoryInfo(entry) {
  let contentType = entry.sys.contentType.sys.id;
  if (contentType === "subcategory") {
    let subcategoryEN = entry.fields.title?.en || "Untitled";
    let subcategoryPT = entry.fields.title?.pt || "Untitled";
    let subcategoryES = entry.fields.title?.es || "Untitled";
    let subcategoryId = entry.sys.id;
    let categoryId = entry.fields.category?.pt.sys.id || "";
    subcategories.push({"subcategoryEN": subcategoryEN, "subcategoryPT": subcategoryPT, "subcategoryES": subcategoryES, "subcategoryId": subcategoryId, "categoryId": categoryId});
    return subcategories;
  }
}

function createMarkdownFile(entry,categories,subcategories) {
  // extract information from each entry

  let status;

  if (isDraft(entry)) {
    status = "DRAFT";
  } else if (isChanged(entry)) {
    status = "CHANGED";
  } else if (isPublished(entry)) {
    status = "PUBLISHED";
  }
  
  if (isArchived(entry)) {
    status = "ARCHIVED";
  }

  let sys = entry.sys;
  let fields = entry.fields;
  //  console.log(fields);

  let entryId = sys.id;
  let entryType = sys.type;

  let createdAt = sys.createdAt || "";
  let updatedAt = sys.updatedAt || "";
  let publishedAt = sys?.publishedAt || "";
  let firstPublishedAt = sys?.firstPublishedAt || "";
  let archivedAt = sys?.archivedAt || "";
  let contentType = sys.contentType.sys.id;
  //  console.log(contentType);

  if (contentType === "author") {
    contentTypes.authors.push(entry);
    return;
  }

  let trackId = fields.trackId?.pt.sys.id || "";
  let trackSlugEN = fields.trackSlug?.en || "untitled-track";
  let trackSlugES = fields.trackSlug?.es || "untitled-track";
  let trackSlugPT = fields.trackSlug?.pt || "untitled-track";

  if (contentType === "track") {
    contentTypes.tracks.push(entry);
    return;
  } else if (
    contentType === "adminV4ContextualDocInAdmin" ||
    contentType === "av4article" ||
    contentType === "av4menuItem" ||
    contentType === "av4menuList" ||
    contentType === "adminV4LearnMoreList" ||
    contentType === "adminV4LearnMoreItem"
  ) {
    contentTypes.adminV4docs.push(entry);
    return;
  } else if (contentType === "topBar") {
    contentTypes.topBar.push(entry);
    return;
  } else if (contentType === "topQuestions") {
    contentTypes.topQuestions.push(entry);
    return;
  } else if (contentType === "concepts") {
    contentTypes.concepts.push(entry);
    return;
  } else if (contentType === "businessGuides") {
    contentTypes.businessGuides.push(entry);
    return;
  }

  let productTeam = fields.xpTeam?.pt || "unknown";
  let titleEN = fields.title?.en || "Untitled";
  let titleES = fields.title?.es || "Untitled";
  let titlePT = fields.title?.pt || "Untitled";
  let author = fields.author?.pt[0].sys.id || "";
  let tag = fields.tag?.pt || "";
  let slugEN = fields.slug?.en || "untitled";
  let slugES = fields.slug?.es || "untitled";
  let slugPT = fields.slug?.pt || "untitled";
  let legacySlugEN = fields.legacySlug?.en || "";
  let legacySlugES = fields.legacySlug?.es || "";
  let legacySlugPT = fields.legacySlug?.pt || "";
  let textEN = fields.text?.en || "";
  let textES = fields.text?.es || "";
  let textPT = fields.text?.pt || "";
  let subcategoryId = fields.subcategory?.pt.sys.id || "unknown-subcategory";

  // Initialize category and subcategory variables
  let subcategoryNameEN = "Untitled subcategory";
  let categoryNameEN = "Untitled category";

  // Find the matching subcategory
  let matchedSubcategory = subcategories.find(sub => sub.subcategoryId === subcategoryId);

  if (matchedSubcategory) {
    // Get the subcategory name
    subcategoryNameEN = matchedSubcategory.subcategoryEN;

    // Find the corresponding category for the subcategory
    let matchedCategory = categories.find(cat => cat.categoryId === matchedSubcategory.categoryId);

    if (matchedCategory) {
      // Get the category name
      categoryNameEN = matchedCategory.categoryEN
    }
  }

  let kiStatusEN = fields.status?.pt[0] || "";
  let kiStatusES = fields.status?.pt[0] || "";
  let kiStatusPT = fields.status?.pt[0] || "";
  let kiSummaryEN = fields.summary?.en || "";
  let kiSummaryES = fields.summary?.es || "";
  let kiSummaryPT = fields.summary?.pt || "";
  let kiSimulationEN = fields.simulation?.en || "";
  let kiSimulationES = fields.simulation?.es || "";
  let kiSimulationPT = fields.simulation?.pt || "";
  let kiWorkaroundEN = fields.workaround?.en || "";
  let kiWorkaroundES = fields.workaround?.es || "";
  let kiWorkaroundPT = fields.workaround?.pt || "";
  let internalReference = fields.internalReference?.pt || "";

  let announcementImageID = fields.image?.pt.id || "";
  let announcementSynopsisEN = fields.synopsis?.en || "";
  let announcementSynopsisES = fields.synopsis?.es || "";
  let announcementSynopsisPT = fields.synopsis?.pt || "";

  // create .md files in locale folders for each item

  let fileNameEN = `${slugEN}.md`;
  fileNameEN = fileNameEN.replace(/\?/g, ""); // remove all "?" characters
  //  let fileNameES = `${slugES}.md`;
  //  let fileNamePT = `${slugPT}.md`;

  let fileContentEN = "";
  let fileContentES = "";
  let fileContentPT = "";
  let fileFolders = "";
  let fileSubFolder = "";
  let fileSubcategoryFolder = "";

  const locales = ["en", "es", "pt"];

  if (contentType === "knownIssue") {
    fileContentEN = `---
title: ${titleEN.includes("'") ? `"${titleEN}"` :  `'${titleEN}'`}
id: ${entryId}
status: ${status}
createdAt: ${createdAt}
updatedAt: ${updatedAt}
publishedAt: ${publishedAt}
firstPublishedAt: ${firstPublishedAt}
contentType: ${contentType}
productTeam: ${productTeam}
author: ${author}
tag: ${tag}
slug: ${slugEN}
locale: en
kiStatus: ${kiStatusEN}
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
title: ${titleES.includes("'") ? `"${titleES}"` : `'${titleES}'`}
id: ${entryId}
status: ${status}
createdAt: ${createdAt}
updatedAt: ${updatedAt}
publishedAt: ${publishedAt}
firstPublishedAt: ${firstPublishedAt}
contentType: ${contentType}
productTeam: ${productTeam}
author: ${author}
tag: ${tag}
slug: ${slugES}
locale: es
kiStatus: ${kiStatusES}
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
title: ${titlePT.includes("'") ? `"${titlePT}"` : `'${titlePT}'`}
id: ${entryId}
status: ${status}
createdAt: ${createdAt}
updatedAt: ${updatedAt}
publishedAt: ${publishedAt}
firstPublishedAt: ${firstPublishedAt}
contentType: ${contentType}
productTeam: ${productTeam}
author: ${author}
tag: ${tag}
slug: ${slugPT}
locale: pt
kiStatus: ${kiStatusPT}
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
    fileSubFolder = productTeam;
    contentTypes.knownIssues.push(entry);
  } else if (contentType === "tutorial") {
    fileContentEN = `---
title: ${titleEN.includes("'") ? `"${titleEN}"` : `'${titleEN}'`}
id: ${entryId}
status: ${status}
createdAt: ${createdAt}
updatedAt: ${updatedAt}
publishedAt: ${publishedAt}
firstPublishedAt: ${firstPublishedAt}
contentType: ${contentType}
productTeam: ${productTeam}
author: ${author}
slug: ${slugEN}
locale: en
legacySlug: ${legacySlugEN}
subcategoryId: ${subcategoryId}
---

${textEN}
`;
    fileContentES = `---
title: ${titleES.includes("'") ? `"${titleES}"` : `'${titleES}'`}
id: ${entryId}
status: ${status}
createdAt: ${createdAt}
updatedAt: ${updatedAt}
publishedAt: ${publishedAt}
firstPublishedAt: ${firstPublishedAt}
contentType: ${contentType}
productTeam: ${productTeam}
author: ${author}
slug: ${slugES}
locale: es
legacySlug: ${legacySlugES}
subcategoryId: ${subcategoryId}
---

${textES}
`;
    fileContentPT = `---
title: ${titlePT.includes("'") ? `"${titlePT}"` : `'${titlePT}'`}
id: ${entryId}
status: ${status}
createdAt: ${createdAt}
updatedAt: ${updatedAt}
publishedAt: ${publishedAt}
firstPublishedAt: ${firstPublishedAt}
contentType: ${contentType}
productTeam: ${productTeam}
author: ${author}
slug: ${slugPT}
locale: pt
legacySlug: ${legacySlugPT}
subcategoryId: ${subcategoryId}
---

${textPT}
`;
    fileFolders = "tutorials"
    fileSubFolder = categoryNameEN
    fileSubcategoryFolder = subcategoryNameEN
    contentTypes.tutorials.push(entry);
  } else if (contentType === "trackArticle") {
    fileContentEN = `---
title: ${titleEN.includes("'") ? `"${titleEN}"` : `'${titleEN}'`}
id: ${entryId}
status: ${status}
createdAt: ${createdAt}
updatedAt: ${updatedAt}
publishedAt: ${publishedAt}
firstPublishedAt: ${firstPublishedAt}
contentType: ${contentType}
productTeam: ${productTeam}
slug: ${slugEN}
locale: en
trackId: ${trackId}
trackSlugEN: ${trackSlugEN}
---

${textEN}
`;
    fileContentES = `---
title: ${titleES.includes("'") ? `"${titleES}"` : `'${titleES}'`}
id: ${entryId}
status: ${status}
createdAt: ${createdAt}
updatedAt: ${updatedAt}
publishedAt: ${publishedAt}
firstPublishedAt: ${firstPublishedAt}
contentType: ${contentType}
productTeam: ${productTeam}
slug: ${slugES}
locale: es
trackId: ${trackId}
trackSlugES: ${trackSlugES}
---

${textES}
`;
    fileContentPT = `---
title: ${titlePT.includes("'") ? `"${titlePT}"` : `'${titlePT}'`}
id: ${entryId}
status: ${status}
createdAt: ${createdAt}
updatedAt: ${updatedAt}
publishedAt: ${publishedAt}
firstPublishedAt: ${firstPublishedAt}
contentType: ${contentType}
productTeam: ${productTeam}
slug: ${slugPT}
locale: pt
trackId: ${trackId}
trackSlugPT: ${trackSlugPT}
---

${textPT}
`;
    fileFolders = "tracks";
    fileSubFolder = trackSlugEN;
    contentTypes.trackArticles.push(entry);
  } else if (contentType === "frequentlyAskedQuestion") {
    fileContentEN = `---
title: ${titleEN.includes("'") ? `"${titleEN}"` : `'${titleEN}'`}
id: ${entryId}
status: ${status}
createdAt: ${createdAt}
updatedAt: ${updatedAt}
publishedAt: ${publishedAt}
firstPublishedAt: ${firstPublishedAt}
contentType: ${contentType}
productTeam: ${productTeam}
author: ${author}
slug: ${slugEN}
locale: en
legacySlug: ${legacySlugEN}
---

${textEN}
`;
    fileContentES = `---
title: ${titleES.includes("'") ? `"${titleES}"` : `'${titleES}'`}
id: ${entryId}
status: ${status}
createdAt: ${createdAt}
updatedAt: ${updatedAt}
publishedAt: ${publishedAt}
firstPublishedAt: ${firstPublishedAt}
contentType: ${contentType}
productTeam: ${productTeam}
author: ${author}
slug: ${slugES}
locale: es
legacySlug: ${legacySlugES}
---

${textES}
`;
    fileContentPT = `---
title: ${titlePT.includes("'") ? `"${titlePT}"` : `'${titlePT}'`}
id: ${entryId}
status: ${status}
createdAt: ${createdAt}
updatedAt: ${updatedAt}
publishedAt: ${publishedAt}
firstPublishedAt: ${firstPublishedAt}
contentType: ${contentType}
productTeam: ${productTeam}
author: ${author}
slug: ${slugPT}
locale: pt
legacySlug: ${legacySlugPT}
---

${textPT}
`;
    fileFolders = "faq";
    fileSubFolder = productTeam;
    contentTypes.faqs.push(entry);
  } else if (contentType === "updates") {
    fileNameEN = createdAt.split("T")[0] + "-" + fileNameEN;
    fileContentEN = `---
title: ${titleEN.includes("'") ? `"${titleEN}"` : `'${titleEN}'`}
id: ${entryId}
status: ${status}
createdAt: ${createdAt}
updatedAt: ${updatedAt}
publishedAt: ${publishedAt}
contentType: ${contentType}
productTeam: ${productTeam}
author: ${author}
slug: ${slugEN}
locale: en
legacySlug: ${legacySlugEN}
announcementImageID: '${announcementImageID}'
announcementSynopsisEN: ${announcementSynopsisEN.includes("'") ? `"${announcementSynopsisEN}"` : `'${announcementSynopsisEN}'`}
---

${textEN}
`;
    fileContentES = `---
title: ${titleES.includes("'") ? `"${titleES}"` : `'${titleES}'`}
id: ${entryId}
status: ${status}
createdAt: ${createdAt}
updatedAt: ${updatedAt}
publishedAt: ${publishedAt}
contentType: ${contentType}
productTeam: ${productTeam}
author: ${author}
slug: ${slugES}
locale: es
legacySlug: ${legacySlugES}
announcementImageID: '${announcementImageID}'
announcementSynopsisES: ${announcementSynopsisES.includes("'") ? `"${announcementSynopsisES}"` : `'${announcementSynopsisES}'`}
---

${textES}
`;
    fileContentPT = `---
title: ${titlePT.includes("'") ? `"${titlePT}"` : `'${titlePT}'`}
id: ${entryId}
status: ${status}
createdAt: ${createdAt}
updatedAt: ${updatedAt}
publishedAt: ${publishedAt}
contentType: ${contentType}
productTeam: ${productTeam}
author: ${author}
slug: ${slugPT}
locale: pt
legacySlug: ${legacySlugPT}
announcementImageID: '${announcementImageID}'
announcementSynopsisPT: ${announcementSynopsisPT.includes("'") ? `"${announcementSynopsisPT}"` : `'${announcementSynopsisPT}'`}
---

${textPT}
`;
    fileFolders = "announcements";
    contentTypes.announcements.push(entry);
  } else if (contentType === "category") {
    contentTypes.categories.push(entry);
    return;
  } else if (contentType === "subcategory") {
    contentTypes.subcategories.push(entry);
    return;
  } else if (contentType === "trackTopic") {
    contentTypes.trackTopics.push(entry);
    return;
  } else {
    contentTypes.unknownContentTypes.push(entry);
    return;
  }

  let fileContents = [fileContentEN, fileContentES, fileContentPT];
  for (let i = 0; i < locales.length; i++) {
    // Construct the paths
    const localeFolder = path.join('./docs', locales[i]);
    const baseFolder = path.join(localeFolder, fileFolders);
    const subFolder = fileSubFolder ? path.join(baseFolder, fileSubFolder).replace(": ", " - ") : null;
    const subcategoryFolder = fileSubcategoryFolder ? path.join(subFolder, fileSubcategoryFolder).replace(": ", " - ") : null;
    const filePath = fileSubcategoryFolder ? path.join(subcategoryFolder, fileNameEN).replace(": ", " - ") : fileSubFolder ? path.join(subFolder, fileNameEN).replace(": ", " - ") : path.join(baseFolder, fileNameEN).replace(": ", " - ");
  
    // Array of folders to create
    const foldersToCreate = [localeFolder, baseFolder, subFolder, subcategoryFolder].filter(Boolean);
  
    // Create each folder if it doesn't exist
    try {
      foldersToCreate.forEach(folder => {
        if (!fs.existsSync(folder)) {
          fs.mkdirSync(folder, { recursive: true });
        }
      });
    } catch (err) {
      console.error("Error creating folder:", err);
    }

  // Write the file
    fs.writeFile(filePath, fileContents[i], (err) => {
    if (err) {
      console.error(`Error occurred while creating file ${filePath}:`, err);
    } else {
      fileCount++;
    }
    });
  }
}

getEntries();
