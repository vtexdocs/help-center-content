const getEnvironment = require("./client");

async function fetchEntries({ contentTypes = [], limit = 100 }) {
  const environment = await getEnvironment();

  let allEntries = [];
  let skip = 0;
  let total = 0;

  do {
    const response = await environment.getEntries({ skip, limit });
    const filtered = contentTypes.length
      ? response.items.filter((entry) =>
          contentTypes.includes(entry.sys.contentType.sys.id)
        )
      : response.items;

    allEntries.push(...filtered);
    total = response.total;
    skip += limit;
  } while (skip < total);

  return allEntries;
}

module.exports = fetchEntries;
