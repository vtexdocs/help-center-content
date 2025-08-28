const getEnvironment = require('./client');

const entryCache = new Map(); // key: entry ID, value: full entry

async function fetchLinkedEntry(id) {
  if (entryCache.has(id)) {
    return entryCache.get(id);
  }

  try {
    const environment = await getEnvironment();
    const entry = await environment.getEntry(id);
    entryCache.set(id, entry); // cache it
    return entry;
  } catch (err) {
    console.warn(`⚠️ Failed to resolve linked entry ${id}:`, err.message);
    return null;
  }
}

module.exports = { fetchLinkedEntry };
