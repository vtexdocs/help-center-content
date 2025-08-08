function normalizeFileName(str) {
  return str
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "") // remove diacritics
    .replace(/[^\w\-\.]/g, "-") // replace non-word characters
    .replace(/-+/g, "-") // collapse multiple dashes
    .replace(/^-|-$/g, "") // trim leading/trailing dashes
    .toLowerCase();
}

function normalizeFolderName(name) {
  return name.trim().toLowerCase().replace(/\s+/g, "-").replace(":", "");
}

module.exports = { normalizeFileName, normalizeFolderName };
