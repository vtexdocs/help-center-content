const contentful = require("contentful-management");
const fs = require("fs");
const path = require("path");
require("dotenv").config();
const matter = require("gray-matter");

console.log("Generating navigation...");

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
  docs: [],
};

const navigation = {
  navbar: [
    {
      documentation: "tracks",
      name: {
        en: "Start here",
        es: "Comece aqui",
        pt: "Comece aqui",
      },
      slugPrefix: "docs/tracks",
      categories: [],
    },
    {
      documentation: "tutorials",
      name: {
        en: "Tutorials",
        es: "Tutoriales",
        pt: "Tutoriais",
      },
      slugPrefix: "docs/tutorials",
      categories: [],
    },
    {
      documentation: "announcements",
      name: {
        en: "News",
        es: "Anuncios",
        pt: "Comunicados",
      },
      slugPrefix: "announcements",
      categories: [],
    },
    {
      documentation: "faq",
      name: {
        en: "Frequently asked questions",
        es: "Preguntas frecuentes",
        pt: "Perguntas frequentes",
      },
      slugPrefix: "faq",
      categories: [],
    },
    {
      documentation: "known-issues",
      name: {
        en: "Known issues",
        es: "Problemas Conocidos",
        pt: "Problemas conhecidos",
      },
      slugPrefix: "known-issues",
      categories: [],
    },
    {
      documentation: "troubleshooting",
      name: {
        en: "Troubleshooting",
        es: "Troubleshooting",
        pt: "Troubleshooting",
      },
      slugPrefix: "troubleshooting",
      categories: [],
    },
  ],
};

function getTutorialEndpoints(endpointIds) {
  console.log("Getting tutorial endpoints...");
  const children = [];
  for (let i = 0; i < endpointIds.length; i++) {
    const id = endpointIds[i].sys.id;
    if (Object.hasOwn(tutorialEndpoints, id)) {
      children.push(tutorialEndpoints[id]);
    }
  }
  return children;
}

function getTutorialSubcategories(subcategoriesIds) {
  console.log("Getting tutorial subcategories...");
  const children = [];
  for (let i = 0; i < subcategoriesIds.length; i++) {
    const id = subcategoriesIds[i].sys.id;
    if (Object.hasOwn(tutorialSubcategories, id)) {
      const { endpoints, ...obj } = tutorialSubcategories[id];
      const endpointChildren = getTutorialEndpoints(endpoints);

      if (endpointChildren.length > 0)
        children.push({
          ...obj,
          children: endpointChildren,
        });
    }
  }
  return children;
}

function getTutorialCategories() {
  console.log("Getting tutorial categories...");
  const categories = [];
  for (let i = 0; i < tutorialCategories.length; i++) {
    const { subcategories, ...obj } = tutorialCategories[i];

    const children = getTutorialSubcategories(subcategories);
    categories.push({
      ...obj,
      children,
    });
  }

  return categories;
}

function getTrackArticles(steps) {
  console.log("Getting track articles...");
  const children = [];
  for (let i = 0; i < steps.length; i++) {
    const id = steps[i].sys.id;
    if (Object.hasOwn(trackArticles, id)) {
      const article = { ...trackArticles[id] };

      // Prefix article name with index + 1
      article.name = {
        en: `${i + 1}. ${article.name.en}`,
        pt: article.name.pt ? `${i + 1}. ${article.name.pt}` : "",
        es: article.name.es ? `${i + 1}. ${article.name.es}` : "",
      };

      children.push(article);
    }
  }
  return children;
}

function getTracks(trackIds) {
  console.log("Getting tracks...");
  const children = [];
  for (let i = 0; i < trackIds.length; i++) {
    const id = trackIds[i].sys.id;
    if (Object.hasOwn(tracks, id)) {
      const { steps, ...obj } = tracks[id];
      const stepsChildren = getTrackArticles(steps);
      children.push({
        ...obj,
        children: stepsChildren,
      });
    }
  }

  return children;
}

function getTrackTopics() {
  console.log("Getting track topics...");
  const categories = [];
  for (let i = 0; i < trackTopics.length; i++) {
    const { trackChildren, ...obj } = trackTopics[i];
    const children = getTracks(trackChildren);
    categories.push({
      ...obj,
      children,
    });
  }

  return categories;
}
function listAllMarkdownFiles(dir) {
  const entries = fs.readdirSync(dir, { withFileTypes: true });
  const files = [];
  for (const entry of entries) {
    const full = path.join(dir, entry.name);
    if (entry.isDirectory()) {
      files.push(...listAllMarkdownFiles(full));
    } else if (entry.isFile() && path.extname(entry.name) === ".md") {
      files.push(full);
    }
  }
  return files;
}

function getNews() {
  console.log("Getting news...");

  const months = [
    { en: "January", es: "Enero", pt: "Janeiro" },
    { en: "February", es: "Febrero", pt: "Fevereiro" },
    { en: "March", es: "Marzo", pt: "Março" },
    { en: "April", es: "Abril", pt: "Abril" },
    { en: "May", es: "Mayo", pt: "Maio" },
    { en: "June", es: "Junio", pt: "Junho" },
    { en: "July", es: "Julio", pt: "Julho" },
    { en: "August", es: "Agosto", pt: "Agosto" },
    { en: "September", es: "Septiembre", pt: "Setembro" },
    { en: "October", es: "Octubre", pt: "Outubro" },
    { en: "November", es: "Noviembre", pt: "Novembro" },
    { en: "December", es: "Diciembre", pt: "Dezembro" },
  ];

  const enDir = "docs/en/announcements";
  const ptDir = "docs/pt/announcements";
  const esDir = "docs/es/announcements";

  const enFiles = listAllMarkdownFiles(enDir);
  const ptFiles = listAllMarkdownFiles(ptDir);
  const esFiles = listAllMarkdownFiles(esDir);

  const news = {}; // { [year]: [ {monthCat}, ... ] }

  for (const filePath of enFiles) {
    const fileName = path.basename(filePath); // ex.: 2025-07-03-nova-regra-....
    if (path.extname(fileName) !== ".md") continue;

    const content = fs.readFileSync(filePath, "utf8");

    // data vem do prefixo YYYY-MM-DD no NOME do arquivo
    const fileDate = new Date(fileName.substring(0, 10));
    if (isNaN(fileDate)) {
      console.warn(`⚠️ Ignorando arquivo sem data válida: ${filePath}`);
      continue;
    }

    const year = fileDate.getUTCFullYear();
    const monthIdx = fileDate.getUTCMonth();

    if (!news[year]) {
      news[year] = months.map((m) => ({
        name: m,
        slug: `announcements-${year}-${m.en}`,
        origin: "",
        type: "category",
        children: [],
      }));
    }

    const enSlug = fileName.replace(".md", "");
    const { title } = safeExtractFrontmatter(content);

    // localizar correspondentes pt/es pelo slugEN no conteúdo
    const findBySlugEN = (filesArr, baseDir) => {
      for (const f of filesArr) {
        const c = fs.readFileSync(f, "utf8");
        const m = c.match(/^slugEN:\s*(\S+)$/m);
        if (m && m[1].trim().toLowerCase() === enSlug.toLowerCase()) {
          return f; // caminho completo
        }
      }
      return null;
    };

    const ptMatchPath = findBySlugEN(ptFiles, ptDir);
    const esMatchPath = findBySlugEN(esFiles, esDir);

    const getTitleFrom = (fullPath) => {
      if (!fullPath) return "";
      const c = fs.readFileSync(fullPath, "utf8");
      const t = c.match(/(?:^|\n)title:\s*["'](.*?)["']/);
      return t ? t[1] : "";
    };

    news[year][monthIdx].children.push({
      name: {
        en: title,
        pt: getTitleFrom(ptMatchPath),
        es: getTitleFrom(esMatchPath),
      },
      slug: {
        // usamos somente o nome do arquivo como slug (sem extensão)
        en: enSlug,
        pt: ptMatchPath ? path.basename(ptMatchPath, ".md") : "",
        es: esMatchPath ? path.basename(esMatchPath, ".md") : "",
      },
      origin: "",
      type: "markdown",
      children: [],
    });
  }

  const newsCategories = [];
  for (const year in news) {
    newsCategories.push({
      name: { en: `${year}`, es: `${year}`, pt: `${year}` },
      slug: `announcements-${year}`,
      origin: "",
      type: "category",
      children: news[year].filter((e) => e.children.length > 0),
    });
  }

  // 📅 anos desc
  newsCategories.sort((a, b) => Number(b.name.en) - Number(a.name.en));

  // 📅 meses desc e posts dentro do mês desc (alfabético pelo slug -> equivale a data desc)
  newsCategories.forEach((yearCategory) => {
    yearCategory.children.sort(
      (a, b) =>
        months.findIndex((m) => m.en === b.name.en) -
        months.findIndex((m) => m.en === a.name.en)
    );

    yearCategory.children.forEach((monthCategory) => {
      monthCategory.children.sort(
        (a, b) => b.slug.en.localeCompare(a.slug.en) // desc: mais novo → mais antigo
      );
    });
  });

  return newsCategories;
}

function getFaq() {
  console.log("Getting FAQs...");
  const enDir = "docs/en/faq";
  const ptDir = "docs/pt/faq";
  const esDir = "docs/es/faq";

  const enCategories = fs
    .readdirSync(enDir, { withFileTypes: true })
    .filter((dirent) => dirent.isDirectory());
  const faq = {};

  enCategories.forEach((category) => {
    const enCategoryPath = path.join(enDir, category.name);
    const ptCategoryPath = path.join(ptDir, category.name);
    const esCategoryPath = path.join(esDir, category.name);

    const enFiles = fs.readdirSync(enCategoryPath);
    const ptFiles = fs.existsSync(ptCategoryPath)
      ? fs.readdirSync(ptCategoryPath)
      : [];
    const esFiles = fs.existsSync(esCategoryPath)
      ? fs.readdirSync(esCategoryPath)
      : [];

    faq[category.name] = [];

    enFiles.forEach((file) => {
      const filePath = path.join(enCategoryPath, file);
      const content = fs.readFileSync(filePath, "utf8");
      const enSlug = file.replace(".md", "");
      const { title } = safeExtractFrontmatter(content);

      const ptFile = ptFiles.find((f) => {
        const ptContent = fs.readFileSync(path.join(ptCategoryPath, f), "utf8");
        const slugMatch = ptContent.match(/^slugEN:\s*(\S+)$/m);
        return (
          slugMatch &&
          slugMatch[1].trim().toLowerCase() === enSlug.trim().toLowerCase()
        );
      });

      const esFile = esFiles.find((f) => {
        const esContent = fs.readFileSync(path.join(esCategoryPath, f), "utf8");
        const slugMatch = esContent.match(/^slugEN:\s*(\S+)$/m);
        return (
          slugMatch &&
          slugMatch[1].trim().toLowerCase() === enSlug.trim().toLowerCase()
        );
      });

      faq[category.name].push({
        name: {
          en: title,
          pt: ptFile
            ? fs
                .readFileSync(path.join(ptCategoryPath, ptFile), "utf8")
                .match(/(?:^|\n)title:\s*["'](.*?)["']/)[1]
            : "",
          es: esFile
            ? fs
                .readFileSync(path.join(esCategoryPath, esFile), "utf8")
                .match(/(?:^|\n)title:\s*["'](.*?)["']/)[1]
            : "",
        },
        slug: {
          en: enSlug,
          pt: ptFile ? ptFile.replace(".md", "") : "",
          es: esFile ? esFile.replace(".md", "") : "",
        },
        origin: "",
        type: "markdown",
        children: [],
      });
    });
  });

  const faqCategories = [];
  for (const category in faq) {
    faqCategories.push({
      name: {
        en: category,
        pt: category,
        es: category,
      },
      slug: `faq/${category}`,
      origin: "",
      type: "category",
      children: faq[category],
    });
  }

  return faqCategories;
}

function getTroubleshooting() {
  const tutorialsContent = navigation.navbar[1].categories;
  const troubleshootingIndex = tutorialsContent.findIndex(
    (category) => category.name.en === "Troubleshooting"
  );

  if (troubleshootingIndex === -1) return [];

  const troubleshootingCategory = tutorialsContent[troubleshootingIndex];
  const troubleshootingSubcategories = troubleshootingCategory.children || [];

  const updatedSubcategories = troubleshootingSubcategories.map(
    (subcategory) => {
      return {
        ...subcategory,
        type: "category",
        slug:
          subcategory.slug.en ||
          subcategory.name.en.toLowerCase().replace(/\s+/g, "-"), // single string slug
        children: (subcategory.children || []).map((article) => ({
          ...article,
          type: "markdown", // keep article type
        })),
      };
    }
  );

  // Remove the troubleshooting category from the tutorials categories array
  navigation.navbar[1].categories.splice(troubleshootingIndex, 1);

  return updatedSubcategories;
}

async function getEntries() {
  console.log("Getting entries...");
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

        // Skip files that are not published (or changed)
        if (
          !file.sys.publishedVersion ||
          file.sys.archivedAt ||
          !file.sys.publishedAt
        ) {
          console.warn(
            `❌ Skipping unpublished entry: ${
              file.fields?.title?.en || file.sys.id
            }`
          );
          continue;
        }

        if (
          (type != "trackTopic" && !file.fields.slug) ||
          file.sys.archivedAt ||
          !file.sys.publishedAt
        )
          continue;

        const endpointObj = {
          name: file.fields.title,
          slug: file.fields.slug,
          origin: "",
        };

        if (type === "trackArticle") {
          trackArticles[file.sys.id] = {
            ...endpointObj,
            type: "markdown",
            children: [],
          };
        } else if (type === "track") {
          tracks[file.sys.id] = {
            name: file.fields.title,
            slug: file.fields.slug.en,
            origin: "",
            type: "category",
            children: [],
            steps: file.fields.steps.pt,
          };
        } else if (type === "trackTopic") {
          if (!file.fields.tracks) {
            errorDocs.docs.push(file);
            continue;
          } else {
            trackTopics.push({
              name: file.fields.name,
              slug: `track-topic-${file.fields.name.en}`,
              origin: "",
              type: "category",
              children: [],
              trackChildren: file.fields.tracks.pt,
            });
          }
        } else if (type === "tutorial") {
          tutorialEndpoints[file.sys.id] = {
            ...endpointObj,
            type: "markdown",
            children: [],
          };
        } else if (type === "subcategory") {
          if (!file.fields.tutorials) {
            errorDocs.docs.push(file);
            continue;
          } else {
            tutorialSubcategories[file.sys.id] = {
              name: file.fields.title,
              slug: {
                en: `category-${file.fields.slug.en}`,
                pt: `category-${file.fields.slug.pt}`,
                es: `category-${file.fields.slug.es}`,
              },
              origin: "",
              type: "category",
              children: [],
              endpoints: file.fields.tutorials.pt,
            };
          }
        } else if (type === "category") {
          if (!file.fields.subcategories) {
            errorDocs.docs.push(file);
            continue;
          }
          // Add the "category-" prefix only to category slugs, not subcategories
          const updatedCategory = {
            name: file.fields.title,
            slug: file.fields.slug,
            type: "category",
            children: [],
            subcategories: file.fields.subcategories.pt, // Does not modify subcategory slugs
            slug: {
              en: `category-${file.fields.slug.en}`,
              pt: `category-${file.fields.slug.pt}`,
              es: `category-${file.fields.slug.es}`,
            },
          };

          tutorialCategories.push(updatedCategory);
        }
      }
      skip += limit;
    } while (skip < totalCount);

    navigation.navbar[0].categories = getTrackTopics();

    navigation.navbar[1].categories = getTutorialCategories();

    navigation.navbar[2].categories = getNews();

    navigation.navbar[3].categories = getFaq();

    navigation.navbar[5].categories = getTroubleshooting();

    fs.writeFile("errorDocs.json", JSON.stringify(errorDocs), (err) =>
      console.error(err)
    );
    fs.writeFile(
      "navigation.json",
      JSON.stringify(navigation, null, 2),
      (err) => {
        if (err) {
          console.error("❌ Failed to write navigation.json:", err);
        } else {
          console.log("✅ navigation.json successfully written");
        }
      }
    );
  } catch (error) {
    console.log("Error occurred while fetching entry:", error);
  }
}

function safeExtractFrontmatter(content) {
  try {
    const { data } = matter(content);
    return {
      title: data.title || "",
      slugEN: data.slugEN || "",
      // Add more fields if needed
    };
  } catch (err) {
    console.warn(`⚠️ Invalid YAML frontmatter: ${err.message}`);
    // Fallback to regex-based extraction
    const fallback = {};

    const titleMatch = content.match(/^title:\s*['"]?(.+?)['"]?\s*$/m);
    if (titleMatch) fallback.title = titleMatch[1].trim();

    const slugMatch = content.match(/^slugEN:\s*['"]?(.+?)['"]?\s*$/m);
    if (slugMatch) fallback.slugEN = slugMatch[1].trim();

    return {
      title: fallback.title || "",
      slugEN: fallback.slugEN || "",
    };
  }
}

getEntries();
