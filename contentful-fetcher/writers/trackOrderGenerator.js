const fs = require("fs");
const path = require("path");

function writeTrackOrderFile(baseFolder, trackOrder) {
  const orderFilePath = path.join(baseFolder, "order.json");
  const jsonContent = JSON.stringify({ order: trackOrder }, null, 2);

  fs.writeFileSync(orderFilePath, jsonContent, "utf8");
  //console.log(`Track: ${baseFolder} Position: ${JSON.stringify(trackOrder)}`);
}

module.exports = { writeTrackOrderFile };
