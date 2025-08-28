const fetchEntries = require("../fetch/entries");

function getTrackCategoryByTrackId(map, locale, trackId) {
  const byLocale = map[locale] || {};
  for (const [topicFolderName, trackIds] of Object.entries(byLocale)) {
    if (trackIds?.includes(trackId)) {
      return topicFolderName;
    }
  }
  return null;
}

async function getTrackSteps() {
  const tracks = await fetchEntries({ contentTypes: ["track"] });
  const map = {};
  for (const track of tracks) {
    const id = track.sys.id;
    const stepIds = (track.fields.steps?.pt || track.fields.steps?.en || track.fields.steps?.es || [])
      .map(s => s.sys.id);
    map[id] = stepIds;
  }
  return map;
}


module.exports = { getTrackCategoryByTrackId, getTrackSteps };
