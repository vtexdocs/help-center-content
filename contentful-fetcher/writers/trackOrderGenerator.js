const fs = require("fs");
const path = require("path");
const getEnvironment = require("../fetch/client");

async function fetchTracksIndex() {
  const env = await getEnvironment();
  let skip = 0, limit = 100, total = 0;
  const index = new Map();

  do {
    const res = await env.getEntries({ content_type: 'track', skip, limit });
    total = res.total;

    for (const item of res.items) {
      const id = item.sys.id;
      const slugEN = item.fields.trackSlug?.en || 'untitled-track';
      const order = item.fields.order ?? 999;
      const titleEN = item.fields.title?.en || '';
      index.set(id, { slugEN, order, titleEN });
    }

    skip += limit;
  } while (skip < total);

  return index;
}


function writeTrackOrderFile(baseFolder, trackOrder) {
  const orderFilePath = path.join(baseFolder, "order.json");
  const jsonContent = JSON.stringify({ order: trackOrder }, null, 2);

  fs.writeFileSync(orderFilePath, jsonContent, "utf8");
  //console.log(`Track: ${baseFolder} Position: ${JSON.stringify(trackOrder)}`);
}

module.exports = { writeTrackOrderFile, fetchTracksIndex };
