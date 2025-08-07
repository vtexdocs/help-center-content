//GENERATE TRACKS MARKDOWN FILES
function generateTrackMarkdown(entry, locale = 'en') {
  const { fields, sys } = entry;

  const title = fields.title?.[locale] || 'Untitled';
  const slug = fields.slug?.[locale] || 'untitled';
  const trackSlug = fields.trackSlug?.[locale] || 'untitled-track';
  const trackId = fields.trackId?.pt?.sys?.id || ''; // Always stored in pt?
  const productTeam = fields.xpTeam?.pt || 'unknown'; // Usually only in pt
  const status = getEntryStatus(sys);

  const content = `---
title: ${title.includes("'") ? `"${title}"` : `'${title}'`}
id: ${sys.id}
status: ${status}
createdAt: ${sys.createdAt || ''}
updatedAt: ${sys.updatedAt || ''}
publishedAt: ${sys.publishedAt || ''}
firstPublishedAt: ${sys.firstPublishedAt || ''}
contentType: ${sys.contentType.sys.id}
productTeam: ${productTeam}
slugEN: ${slug}
locale: ${locale}
trackId: ${trackId}
trackSlugEN: ${trackSlug}
---

${fields.text?.[locale] || ''}
`;

  return { content, slug, trackSlug };
}

//GENERATE TUTORIALS MARKDOWN FILES
function generateTutorialMarkdown(entry, locale = 'en', categoryName = 'uncategorized', subcategoryName = '') {
  const { fields, sys } = entry;

  const title = fields.title?.[locale] || 'Untitled';
  const slug = fields.slug?.[locale] || 'untitled';
  const legacySlug = fields.legacySlug?.[locale] || '';
  const productTeam = fields.xpTeam?.pt || 'unknown';
  const author = fields.author?.pt?.[0]?.sys?.id || '';
  const subcategoryId = fields.subcategory?.pt?.sys?.id || '';
  const status = getEntryStatus(sys);

  const content = `---
title: ${title.includes("'") ? `"${title}"` : `'${title}'`}
id: ${sys.id}
status: ${status}
createdAt: ${sys.createdAt || ''}
updatedAt: ${sys.updatedAt || ''}
publishedAt: ${sys.publishedAt || ''}
firstPublishedAt: ${sys.firstPublishedAt || ''}
contentType: ${sys.contentType.sys.id}
productTeam: ${productTeam}
author: ${author}
slugEN: ${slug}
legacySlug: ${legacySlug}
locale: ${locale}
subcategoryId: ${subcategoryId}
---

${fields.text?.[locale] || ''}
`;

  return { content, slug, categoryName, subcategoryName };
}

function getEntryStatus(sys) {
  if (!!sys.archivedVersion) return 'ARCHIVED';
  if (!sys.publishedVersion) return 'DRAFT';
  if (sys.version >= sys.publishedVersion + 2) return 'CHANGED';
  if (sys.version === sys.publishedVersion + 1) return 'PUBLISHED';
  return 'UNKNOWN';
}

module.exports = {
  generateTrackMarkdown,
  generateTutorialMarkdown
};
