const getEnvironment = require("./client");

/**
 * @param {Object} params
 * @param {string[]} [params.contentTypes=[]] - ex.: ["tutorial", "trackArticle"]
 * @param {number}   [params.limit=100]
 * @param {string|Date} [params.updatedAfterDate] - ISO 8601 ou Date (opcional)
 * @returns {Promise<Array>}
 */
async function fetchEntries({ contentTypes = [], limit = 100, updatedAfterDate } = {}) {
  const environment = await getEnvironment();

  let updatedAfterISO;
  if (updatedAfterDate instanceof Date) {
    updatedAfterISO = updatedAfterDate.toISOString();
  } else if (typeof updatedAfterDate === "string" && updatedAfterDate.trim()) {
    const d = new Date(updatedAfterDate);
    if (!isNaN(d.getTime())) updatedAfterISO = d.toISOString();
  }
  console.log("Fetching entries updated after:", updatedAfterISO || "all");

  async function fetchAllPages(baseQuery) {
    let all = [];
    let skip = 0;
    let total = 0;

    do {
      const query = { ...baseQuery, skip, limit };
      const res = await environment.getEntries(query);
      all.push(...(res.items || []));
      total = res.total || 0;
      skip += limit;
    } while (skip < total);

    return all;
  }

  const base = {
    order: "-sys.updatedAt",
    ...(updatedAfterISO ? { "sys.updatedAt[gte]": updatedAfterISO } : {}),
  };

  if (contentTypes.length <= 1) {
    const q = {
      ...base,
      ...(contentTypes.length === 1 ? { content_type: contentTypes[0] } : {}),
    };
    return fetchAllPages(q);
  }

  const resultsPerType = await Promise.all(
    contentTypes.map((ct) => fetchAllPages({ ...base, content_type: ct }))
  );

  const seen = new Set();
  const merged = [];
  for (const list of resultsPerType) {
    for (const item of list) {
      const id = item?.sys?.id;
      if (!id || seen.has(id)) continue;
      seen.add(id);
      merged.push(item);
    }
  }

  merged.sort((a, b) => {
    const da = new Date(a.sys.updatedAt).getTime();
    const db = new Date(b.sys.updatedAt).getTime();
    return db - da;
  });

  return merged;
}

module.exports = fetchEntries;
