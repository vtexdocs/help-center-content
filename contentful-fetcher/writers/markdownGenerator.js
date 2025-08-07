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

${fields.text?.[locale] || ""}
`;

  return { content, slug: slugLocalized, trackSlug };
}

//GENERATE TUTORIALS MARKDOWN FILES
function generateTutorialMarkdown(
  entry,
  locale = "en",
  categoryName = "uncategorized",
  subcategoryName = ""
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
---

${fields.text?.[locale] || ""}
`;

  return { content, slug: slugLocalized, categoryName, subcategoryName };
}

//GENERATE ANNOUNCEMENT MARKDOWN FILES
function generateAnnouncementMarkdown(entry, locale = 'en') {
  const { fields, sys } = entry;

  const title = fields.title?.[locale] || 'Untitled';
  const slugLocalized = fields.slug?.[locale] || 'untitled';
  const slugEN = fields.slug?.en || 'untitled';
  const productTeam = fields.xpTeam?.pt || 'unknown';
  const author = fields.author?.pt?.[0]?.sys?.id || '';
  const legacySlug = fields.legacySlug?.[locale] || '';
  const announcementImageID = fields.image?.pt?.id || '';
  const synopsis = fields.synopsis?.[locale] || '';
  const status = getEntryStatus(sys);
  const year = new Date(sys.createdAt).getFullYear();
  const synopsisKey = `announcementSynopsis${locale.toUpperCase()}`;

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
${synopsisKey}: ${synopsis.includes("'") ? `"${synopsis}"` : `'${synopsis}'`}
---

${fields.text?.[locale] || ''}
`;

  return { content, slug: slugLocalized, year };
}

function getEntryStatus(sys) {
  if (!!sys.archivedVersion) return "ARCHIVED";
  if (!sys.publishedVersion) return "DRAFT";
  if (sys.version >= sys.publishedVersion + 2) return "CHANGED";
  if (sys.version === sys.publishedVersion + 1) return "PUBLISHED";
  return "UNKNOWN";
}

module.exports = {
  generateTrackMarkdown,
  generateTutorialMarkdown,
  generateAnnouncementMarkdown
};
