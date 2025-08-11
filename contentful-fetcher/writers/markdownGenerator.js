const { getEntryStatus } = require("../utils/entryStatus");
const { toISODate } = require("../utils/markdownUtils");
const { yamlSafeString } = require("../utils/normalize");

//GENERATE TRACKS MARKDOWN FILES
function generateTrackMarkdown(entry, locale = "en") {
  const { fields, sys } = entry;

  const title = fields.title?.[locale] || "Untitled";
  const slugLocalized = fields.slug?.[locale] || "untitled";
  const slugEN = fields.slug?.en || "untitled";
  const trackSlug = fields.trackSlug?.[locale] || "untitled-track";
  const trackId = fields.trackId?.pt?.sys?.id || ""; // Always stored in pt?
  const productTeam = fields.xpTeam?.pt || "unknown"; // Usually only in pt
  const status = getEntryStatus(sys);
  const text = fields.text?.[locale] || "";

  const content = `---
title: ${title.includes("'") ? `"${title}"` : `'${title}'`}
id: ${sys.id}
status: ${status}
createdAt: ${sys.createdAt || ""}
updatedAt: ${sys.updatedAt || ""}
publishedAt: ${sys.publishedAt || ""}
firstPublishedAt: ${sys.firstPublishedAt || ""}
contentType: ${sys.contentType.sys.id}
productTeam: ${productTeam}
slugEN: ${slugEN}
locale: ${locale}
trackId: ${trackId}
trackSlugEN: ${trackSlug}
---

${text}
`;

  return { content, slug: slugLocalized, trackSlug };
}

//GENERATE TUTORIALS MARKDOWN FILES
function generateTutorialMarkdown(
  entry,
  locale = "en",
  categoryName = "uncategorized",
  subcategoryName = "",
  isTroubleshooting = false
) {
  const { fields, sys } = entry;

  const title = fields.title?.[locale] || "Untitled";
  const slugLocalized = fields.slug?.[locale] || "untitled";
  const slugEN = fields.slug?.en || "untitled";
  const legacySlug = fields.legacySlug?.[locale] || "";
  const productTeam = fields.xpTeam?.pt || "unknown";
  const author = fields.author?.pt?.[0]?.sys?.id || "";
  const subcategoryId = fields.subcategory?.pt?.sys?.id || "";
  const status = getEntryStatus(sys);

  let text = fields.text?.[locale] || "";

  // Extract tags if it's a troubleshooting article
  let tags = [];
  if (isTroubleshooting) {
    const tagMatch = text.match(/\*\*Tags:\*\*\s*(.+)/i);
    if (tagMatch) {
      const tagList = tagMatch[1]
        .split(",")
        .map((tag) => tag.trim())
        .filter(Boolean);
      tags = tagList;

      // Remove the tags line from the text body
      text = text.replace(tagMatch[0], "").trimStart();
    }
  }

  const tagYaml =
    tags.length > 0 ? `tags:\n${tags.map((t) => `  - ${t}`).join("\n")}\n` : "";

  const content = `---
title: ${title.includes("'") ? `"${title}"` : `'${title}'`}
id: ${sys.id}
status: ${status}
createdAt: ${sys.createdAt || ""}
updatedAt: ${sys.updatedAt || ""}
publishedAt: ${sys.publishedAt || ""}
firstPublishedAt: ${sys.firstPublishedAt || ""}
contentType: ${sys.contentType.sys.id}
productTeam: ${productTeam}
author: ${author}
slugEN: ${slugEN}
legacySlug: ${legacySlug}
locale: ${locale}
subcategoryId: ${subcategoryId}
${tagYaml}---

${text}
`;

  return { content, slug: slugLocalized, categoryName, subcategoryName };
}

//GENERATE ANNOUNCEMENT MARKDOWN FILES
function generateAnnouncementMarkdown(entry, locale = "en") {
  const { fields, sys } = entry;

  const dateISO = toISODate(sys.createdAt);

  const title = fields.title?.[locale] || "Untitled";
  const slugLocalized = `${dateISO}-${fields.slug?.[locale]}` || "undefined";
  const slugEN = `${dateISO}-${fields.slug?.en}` || "undefined";
  const productTeam = fields.xpTeam?.pt || "unknown";
  const author = fields.author?.pt?.[0]?.sys?.id || "undefined";
  const legacySlug = fields.legacySlug?.[locale] || "undefined";
  const announcementImageID =
    fields.image?.[locale]?.id ?? fields.image?.pt?.id ?? "undefined";
  const synopsis = yamlSafeString(fields.synopsis?.[locale]) || "";
  const status = getEntryStatus(sys);
  const year = new Date(sys.createdAt).getFullYear();
  const synopsisKey = `announcementSynopsis${locale.toUpperCase()}`;
  const text = fields.text?.[locale] || "";

  const content = `---
title: ${title.includes("'") ? `"${title}"` : `'${title}'`}
id: ${sys.id}
status: ${status}
createdAt: ${sys.createdAt}
updatedAt: ${sys.updatedAt}
publishedAt: ${sys.publishedAt}
contentType: ${sys.contentType.sys.id}
productTeam: ${productTeam}
author: ${author}
slugEN: ${slugEN}
locale: ${locale}
legacySlug: ${legacySlug}
announcementImageID: '${announcementImageID}'
${synopsisKey}: ${synopsis}
---

${text}
`;

  return { content, slug: slugLocalized, year };
}

//GENERATE FAQ MARKDOWN FILES
function generateFaqMarkdown(entry, locale = "en") {
  const { fields, sys } = entry;

  const title = fields.title?.[locale] || "Untitled";
  const slugLocalized = fields.slug?.[locale] || "untitled";
  const slugEN = fields.slug?.en || "untitled";
  const legacySlug = fields.legacySlug?.[locale] || "";
  const productTeam = fields.xpTeam?.pt || "unknown";
  const author = fields.author?.pt?.[0]?.sys?.id || "";
  const status = getEntryStatus(sys);
  const text = fields.text?.[locale] || "";

  const content = `---
title: ${title.includes("'") ? `"${title}"` : `'${title}'`}
id: ${sys.id}
status: ${status}
createdAt: ${sys.createdAt || ""}
updatedAt: ${sys.updatedAt || ""}
publishedAt: ${sys.publishedAt || ""}
firstPublishedAt: ${sys.firstPublishedAt || ""}
contentType: ${sys.contentType.sys.id}
productTeam: ${productTeam}
author: ${author}
slugEN: ${slugEN}
locale: ${locale}
legacySlug: ${legacySlug}
---

${text}
`;

  return { content, slug: slugLocalized, productTeam };
}

module.exports = {
  generateTrackMarkdown,
  generateTutorialMarkdown,
  generateAnnouncementMarkdown,
  generateFaqMarkdown,
};
