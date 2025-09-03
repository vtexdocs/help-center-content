const fetchEntries = require("./fetch/entries");
const minimist = require("minimist");
const {
  generateTrackMarkdown,
  generateTutorialMarkdown,
  generateAnnouncementMarkdown,
  generateFaqMarkdown,
} = require("./writers/markdownGenerator");
const { getYearAndMonthName } = require("./utils/monthFolder");
const {
  getTrackCategoryByTrackId,
  getTrackSteps,
} = require("./filters/getTrackCategoryByTrackId");
const { writeMarkdown } = require("./writers/fileWriter");
const { fetchLinkedEntry } = require("./fetch/linkedEntry");
const { isArchived } = require("./utils/entryStatus");
const { normalizeFolderName } = require("./utils/normalize");
const { convertInlineHtmlToMarkdown } = require("./utils/markdownUtils");
const { updateImages } = require("./utils/updateImages");
const { isDraft } = require("contentful-management");
const fs = require("fs");
const path = require("path");

async function main() {
  const args = minimist(process.argv.slice(2));
  const cleanDocs = !!args.cleanDocs;
  let contentTypes = args.contentType?.split(",") ?? [
    "trackArticle",
    "tutorial",
  ];
  const skipImages = args.skipImages;
  const skipWrite = args.skipWrite;

  const allowedTypes = [
    "trackArticle",
    "tutorial",
    "updates",
    "frequentlyAskedQuestion",
    "troubleshooting",
  ];
  const invalidTypes = contentTypes.filter((t) => !allowedTypes.includes(t));

  if (invalidTypes.length > 0) {
    console.error(
      `⛔ Invalid content type(s): ${invalidTypes.join(", ")}\n` +
        `✅ Allowed types are: ${allowedTypes.join(", ")}`
    );
    return;
  }

  const supportedLocales = ["en", "pt", "es"];
  let locales = supportedLocales;

  if (args.locale) {
    if (!supportedLocales.includes(args.locale)) {
      console.error(
        `⛔ Invalid locale: ${args.locale}\n` +
          `✅ Allowed locales are: ${supportedLocales.join(", ")}`
      );
      return;
    }
    locales = [args.locale];
  }

  // Optionally clean docs folder before fetching content
  const docsPath = path.join(__dirname, "..", "docs");
  if (cleanDocs && fs.existsSync(docsPath)) {
    console.log("🧹 Cleaning docs folder...");
    fs.rmSync(docsPath, { recursive: true, force: true });
    console.log("✅ Docs folder cleaned successfully.");
  }

  const troubleshootingMode = contentTypes.includes("troubleshooting");

  if (troubleshootingMode) {
    contentTypes = contentTypes.map((type) =>
      type === "troubleshooting" ? "tutorial" : type
    );
  }

  console.log(
    `📚 Fetching entries for content types: ${contentTypes.join(", ")}`
  );

  const trackTopicMap = [];
  let trackStepsMap = [];
  if (contentTypes.includes("trackArticle")) {
    const trackTopics = await fetchEntries({ contentTypes: ["trackTopic"] });
    console.log(`📄 Found ${trackTopics.length} tracks.`);
    trackTopics.forEach(async (trackTopic, i) => {
      for (const locale of locales) {
        const folderName = normalizeFolderName(
          trackTopic.fields.name?.[locale],
          locale
        );
        const folderPath = path.join(
          __dirname,
          "..",
          "docs",
          locale,
          "tracks",
          folderName
        );

        if (!fs.existsSync(folderPath)) {
          fs.mkdirSync(folderPath, { recursive: true });
        }

        const trackIds =
          trackTopics[i].fields.tracks?.pt?.map((t) => t.sys.id) || [];
        if (!trackTopicMap[locale]) {
          trackTopicMap[locale] = {};
        }

        trackTopicMap[locale][folderName] = trackIds;

        //console.log(locale, folderName, trackIds);
      }
    });
    trackStepsMap = await getTrackSteps();
  }
  //console.log(trackStepsMap);

  const entries = await fetchEntries({ contentTypes });
  console.log(`📄 Found ${entries.length} entries to process.`);

  //CREATE FILES
  if (!skipWrite) {
    for (const entry of entries) {
      if (isArchived(entry) || isDraft(entry)) {
        console.log(`⏭️ Skipping archived/draft entry ${entry.sys.id}`);
        continue;
      }

      const type = entry.sys.contentType.sys.id;

      for (const locale of locales) {
        if (type === "trackArticle") {
          const trackId = entry.fields.trackId?.pt?.sys?.id;

          const stepIds = trackStepsMap?.[trackId] || [];
          const idx = stepIds.indexOf(entry.sys.id);
          const order = idx !== -1 ? idx + 1 : "undefined";
          const { content, slug, trackSlug } = generateTrackMarkdown(
            entry,
            locale,
            order
          );
          const trackCategory = getTrackCategoryByTrackId(
            trackTopicMap,
            locale,
            trackId
          );
          const folder = trackCategory ? `tracks/${trackCategory}` : "tracks";
          const fixedContent = convertInlineHtmlToMarkdown(content);

          await writeMarkdown({
            content: fixedContent,
            slug,
            locale,
            folder: folder,
            subfolder: normalizeFolderName(trackSlug, locale),
          });
        } else if (type === "tutorial") {
          const subcatRef = entry.fields.subcategory?.pt?.sys?.id;

          let categoryTitle = "uncategorized";
          let subcategoryTitle = "unknown-subcategory";

          if (subcatRef) {
            const subcategoryEntry = await fetchLinkedEntry(subcatRef);
            subcategoryTitle =
              subcategoryEntry?.fields?.title?.[locale] ||
              subcategoryEntry?.fields?.title?.en ||
              subcategoryTitle;
            //subcategoryTitle = subcategoryEntry?.fields?.title?.en || subcategoryTitle; //subcategoryFolder sempre em inglês

            const catRef = subcategoryEntry?.fields?.category?.pt?.sys?.id;
            if (catRef) {
              const categoryEntry = await fetchLinkedEntry(catRef);
              categoryTitle =
                categoryEntry?.fields?.title?.[locale] ||
                categoryEntry?.fields?.title?.en ||
                categoryTitle;
              //categoryTitle = categoryEntry?.fields?.title?.en || categoryTitle; //subfolder sempre em inglês
            }
          }

          const isTroubleshooting =
            categoryTitle.toLowerCase() === "troubleshooting";
          if (troubleshootingMode && !isTroubleshooting) continue;

          if (!troubleshootingMode && isTroubleshooting) continue;

          const { content, slug } = generateTutorialMarkdown(
            entry,
            locale,
            categoryTitle,
            subcategoryTitle,
            isTroubleshooting
          );

          const fixedContent = convertInlineHtmlToMarkdown(content);
          await writeMarkdown({
            content: fixedContent,
            slug,
            locale,
            folder: isTroubleshooting ? "troubleshooting" : "tutorials",
            subcategoryFolder: isTroubleshooting ? "" : subcategoryTitle,
            subfolder: isTroubleshooting
              ? normalizeFolderName(subcategoryTitle, locale)
              : normalizeFolderName(categoryTitle, locale),
            subcategoryFolder: isTroubleshooting
              ? ""
              : normalizeFolderName(subcategoryTitle, locale),
          });
        } else if (type === "updates") {
          const { content, slug } = generateAnnouncementMarkdown(entry, locale);

          const fixedContent = convertInlineHtmlToMarkdown(content);
          const { year, monthName } = getYearAndMonthName(
            entry.sys.createdAt,
            locale
          );

          await writeMarkdown({
            content: fixedContent,
            slug,
            locale,
            folder: "announcements",
            subfolder: path.join(year, monthName),
          });
        } else if (type === "frequentlyAskedQuestion") {
          const { content, slug, productTeam } = generateFaqMarkdown(
            entry,
            locale
          );

          const fixedContent = convertInlineHtmlToMarkdown(content);

          await writeMarkdown({
            content: fixedContent,
            slug,
            locale,
            folder: "faq",
            subfolder: normalizeFolderName(productTeam, locale),
          });
        }
      }
    }
    console.log("🚀 Markdown files generation completed.");
  }
  //FETCH AND UPDATE IMAGES
  if (!skipImages) {
    const folderMap = {
      trackArticle: "tracks",
      tutorial: "tutorials",
      troubleshooting: "troubleshooting",
      updates: "announcements",
      frequentlyAskedQuestion: "faq",
    };

    const requestedTypes = args.contentType?.split(",") ?? [];
    const foldersToUpdate = requestedTypes
      .map((type) => folderMap[type])
      .filter(Boolean);

    for (const folder of foldersToUpdate) {
      console.log(`🖼️ Starting image update process for ${folder}`);
      await updateImages(folder);
    }
  }
}

main();
