const path = require("path");
const fetchEntries = require("../fetch/entries");
const { fetchLinkedEntry } = require("../fetch/linkedEntry");
const fs = require("fs");
const { normalizeFolderName } = require("../utils/normalize");
const { writeJSON } = require("./fileWriter");

function s(v, fb = "") { return typeof v === "string" ? v.trim() : fb; }

async function hasTrackArticles(trackId) {
  const articles = await fetchEntries({
    contentTypes: ["trackArticle"],
    query: { "fields.trackId.sys.id": trackId }
  });
  return articles.length > 0;
}


function makeMetadata({ titleEN, titleLO, slugEN, slugLO, order }) {
  return {
    id: slugEN || normalizeFolderName(titleEN) || "untitled", // sempre EN
    name: titleLO || titleEN || "Untitled",
    slug: slugLO || slugEN || "untitled",
    order: Number.isFinite(order) ? order : 1,
  };
}

function getTrackRefsInTopicOrder(topic) {
  return (
    topic.fields?.tracks?.pt ||
    topic.fields?.tracks?.en ||
    topic.fields?.tracks ||
    []
  ).filter(Boolean);
}

async function buildTracksMetadata(locales) {
  const trackTopics = await fetchEntries({ contentTypes: ["trackTopic"] });
  console.log(`📦 trackTopic count: ${trackTopics.length}`);

  for (let topicIndex = 0; topicIndex < trackTopics.length; topicIndex++) {
    const topic = trackTopics[topicIndex];

    const orderTopic = topicIndex + 1;

    const orderedRefs = getTrackRefsInTopicOrder(topic);

    for (const locale of locales) {
      const topicTitleEN = s(topic.fields?.name?.en, "Untitled");
      const topicTitleLO = s(topic.fields?.name?.[locale], topicTitleEN);
      const topicSlugEN = normalizeFolderName(topicTitleEN);
      const topicSlugLO = normalizeFolderName(topicTitleLO);

      const topicFolder = path.join(__dirname, "..", "..", "docs", locale, "tracks", topicSlugLO);
      const topicMeta = makeMetadata({
        titleEN: topicTitleEN,
        titleLO: topicTitleLO,
        slugEN: topicSlugEN,
        slugLO: topicSlugLO,
        order: orderTopic,
      });
      await writeJSON(path.join(topicFolder, "metadata.json"), topicMeta);

      for (let j = 0; j < orderedRefs.length; j++) {
        const ref = orderedRefs[j];
        const trackId = ref?.sys?.id;
        if (!trackId) continue;

        // ⚠️ Checar se tem artigos
        const hasArticles = await hasTrackArticles(trackId);
        if (!hasArticles) {
          console.log(`⏭️  Pulando track ${trackId} (sem artigos)`);
          continue;
        }

        const trackEntry = await fetchLinkedEntry(trackId);
        if (!trackEntry) continue;

        const titleEN = s(trackEntry.fields?.title?.en, s(trackEntry.fields?.name?.en, "Untitled"));
        const titleLO = s(trackEntry.fields?.title?.[locale], s(trackEntry.fields?.name?.[locale], titleEN));

        const slugEN = normalizeFolderName(
          s(trackEntry.fields?.trackSlug?.en) ||
          s(trackEntry.fields?.slug?.en) ||
          titleEN
        );
        const slugLO = normalizeFolderName(
          s(trackEntry.fields?.trackSlug?.[locale]) ||
          s(trackEntry.fields?.slug?.[locale]) ||
          titleLO
        );

        const perTrackOrder =
          Number(trackEntry.fields?.order) ||
          Number(trackEntry.fields?.position) ||
          null;

        const order = Number.isFinite(perTrackOrder) ? perTrackOrder : (j + 1);

        const trackMeta = makeMetadata({
          titleEN,
          titleLO,
          slugEN,
          slugLO,
          order,
        });

        const trackFolder = path.join(topicFolder, slugLO);
        await writeJSON(path.join(trackFolder, "metadata.json"), trackMeta);
      }
    }
  }
}

module.exports = { buildTracksMetadata };
