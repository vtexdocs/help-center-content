function normalizeFileName(str) {
  return str
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "") // remove diacritics
    .replace(/[^\w\-\.]/g, "-") // replace non-word characters
    .replace(/-+/g, "-") // collapse multiple dashes
    .replace(/^-|-$/g, "") // trim leading/trailing dashes
    .toLowerCase();
}

function normalizeFolderName(name, locale = "en") {
  const and = locale === "pt" ? "e" : locale === "es" ? "y" : "and";
  return name
    .trim()
    .toLowerCase()
    .replace(/\s+/g, "-")
    .replace(":", "")
    .replace("(", "")
    .replace(")", "")
    .replace(/&/g, and);
}

function yamlSafeString(value) {
  // Remove aspas simples, duplas ou crases no início e no fim
  value = value.trim().replace(/^['"`](.*)['"`]$/, "$1");

  const hasSingle = value.includes("'");
  const hasDouble = value.includes('"');

  if (hasSingle && hasDouble) {
    // Aspas simples e duplas → usa aspas duplas externas e escapa as internas
    return `"${value.replace(/"/g, '\\"')}"`;
  } else if (hasSingle) {
    // Apenas aspas simples → usa aspas duplas
    return `"${value.replace(/"/g, '\\"')}"`;
  } else if (hasDouble) {
    // Apenas aspas duplas → usa aspas simples (escapando duplicando)
    return `'${value.replace(/'/g, "''")}'`;
  } else {
    // Sem aspas → usa aspas simples
    return `'${value}'`;
  }
}

module.exports = { normalizeFileName, normalizeFolderName, yamlSafeString };
