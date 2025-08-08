const fetchEntries = require("./fetch/entries");
const minimist = require("minimist");
const {
  generateTrackMarkdown,
  generateTutorialMarkdown,
  generateAnnouncementMarkdown,
  generateFaqMarkdown,
} = require("./writers/markdownGenerator");
const { writeMarkdown } = require("./writers/fileWriter");
const { fetchLinkedEntry } = require("./fetch/linkedEntry");
const { isArchived } = require("./utils/entryStatus");
const { normalizeFolderName } = require("./utils/normalize");
const { convertInlineHtmlToMarkdown } = require("./utils/markdownUtils");
const { updateImages } = require("./utils/updateImages");

async function main() {
  const args = minimist(process.argv.slice(2));
  let contentTypes = args.contentType?.split(",") ?? [
    "trackArticle",
    "tutorial",
  ];
  const skipImages = args.skipImages;

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

  const locales = ["en", "pt", "es"];

  const troubleshootingMode = contentTypes.includes("troubleshooting");

  if (troubleshootingMode) {
    contentTypes = contentTypes.map((type) =>
      type === "troubleshooting" ? "tutorial" : type
    );
  }

  const entries = await fetchEntries({ contentTypes });

  //CREATE FILES
  for (const entry of entries) {
    if (isArchived(entry)) {
      console.log(`⏭️ Skipping archived entry ${entry.sys.id}`);
      continue;
    }

    const type = entry.sys.contentType.sys.id;

    for (const locale of locales) {
      if (type === "trackArticle") {
        const { content, slug, trackSlug } = generateTrackMarkdown(
          entry,
          locale
        );
        const fixedContent = convertInlineHtmlToMarkdown(content);

        await writeMarkdown({
          content: fixedContent,
          slug,
          locale,
          folder: "tracks",
          subfolder: normalizeFolderName(trackSlug),
        });
      } else if (type === "tutorial") {
        const subcatRef = entry.fields.subcategory?.pt?.sys?.id;

        let categoryTitle = "uncategorized";
        let subcategoryTitle = "unknown-subcategory";

        if (subcatRef) {
          const subcategoryEntry = await fetchLinkedEntry(subcatRef);
          //subcategoryTitle =
          //  subcategoryEntry?.fields?.title?.[locale] || subcategoryTitle;
          subcategoryTitle =
            subcategoryEntry?.fields?.title?.en || subcategoryTitle; //subcategoryFolder sempre em inglês

          const catRef = subcategoryEntry?.fields?.category?.pt?.sys?.id;
          if (catRef) {
            const categoryEntry = await fetchLinkedEntry(catRef);
            //categoryTitle =
            //  categoryEntry?.fields?.title?.[locale] || categoryTitle;
            categoryTitle = categoryEntry?.fields?.title?.en || categoryTitle; //subfolder sempre em inglês
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
            ? normalizeFolderName(subcategoryTitle)
            : normalizeFolderName(categoryTitle),
          subcategoryFolder: isTroubleshooting
            ? ""
            : normalizeFolderName(subcategoryTitle),
        });
      } else if (type === "updates") {
        const { content, slug, year } = generateAnnouncementMarkdown(
          entry,
          locale
        );

        const fixedContent = convertInlineHtmlToMarkdown(content);

        await writeMarkdown({
          content: fixedContent,
          slug,
          locale,
          folder: "announcements",
          subfolder: String(year),
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
          subfolder: normalizeFolderName(productTeam),
        });
      }
    }
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
      console.log(`🧼 Running image update for: ${folder}`);
      await updateImages(folder);
    }
  }
}

main();
