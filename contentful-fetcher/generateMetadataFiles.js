const path = require("path");
const minimist = require("minimist");
const { getYearAndMonthName } = require("./utils/monthFolder");
const { buildTracksMetadata } = require("./writers/buildTracksMetadata");
const { normalizeFolderName } = require("./utils/normalize");
const { writeJSON } = require("./writers/fileWriter");

const fetchEntries = require("./fetch/entries");

// ---------- utils ----------
function safeStr(v, fb = "") {
  return typeof v === "string" ? v.trim() : fb;
}

// Constrói objeto metadata
function makeMetadata({ titleEN, titleLocale, slugEN, slugLocale, order }) {
  return {
    id: slugEN || normalizeFolderName(slugEN) || "untitled",
    name: titleLocale || titleEN || "Untitled",
    slug: slugLocale || slugEN || "untitled",
    order: Number.isFinite(order) ? order : 1,
  };
}

// ---------- TUTORIALS (category & subcategory) ----------
async function buildTutorialsMetadata(locales) {
  const categories = await fetchEntries({ contentTypes: ["category"] });
  const subcategories = await fetchEntries({ contentTypes: ["subcategory"] });

  const subsByCategoryId = new Map();
  for (const sub of subcategories) {
    const catId =
      sub.fields?.category?.pt?.sys?.id ||
      sub.fields?.category?.en?.sys?.id ||
      sub.fields?.category?.sys?.id; // fallback se já vier plano
    if (!catId) continue;
    if (!subsByCategoryId.has(catId)) subsByCategoryId.set(catId, []);
    subsByCategoryId.get(catId).push(sub);
  }

  for (const locale of locales) {
    // Ordenar categories pelo título no locale
    const sortedCats = [...categories].sort((a, b) => {
      const aTitle = safeStr(
        a.fields?.title?.[locale],
        safeStr(a.fields?.title?.en)
      );
      const bTitle = safeStr(
        b.fields?.title?.[locale],
        safeStr(b.fields?.title?.en)
      );
      return aTitle.localeCompare(bTitle, locale, { sensitivity: "base" });
    });

    // Escrever metadata de cada categoria
    for (let i = 0; i < sortedCats.length; i++) {
      const cat = sortedCats[i];
      const catTitleEN = safeStr(cat.fields?.title?.en, "Untitled");
      const catTitleLO = safeStr(cat.fields?.title?.[locale], catTitleEN);

      const catSlugEN = normalizeFolderName(catTitleEN);
      const catSlugLO = normalizeFolderName(catTitleLO);

      const catMeta = makeMetadata({
        titleEN: catTitleEN,
        titleLocale: catTitleLO,
        slugEN: catSlugEN,
        slugLocale: catSlugLO,
        order: i + 1,
      });

      const catFolder = path.join(
        __dirname,
        "..",
        "docs",
        locale,
        "tutorials",
        catSlugLO
      );
      await writeJSON(path.join(catFolder, "metadata.json"), catMeta);

      // Subcategorias dessa categoria
      const subs = subsByCategoryId.get(cat.sys.id) || [];

      // Ordena subcategorias pelo título no locale
      const sortedSubs = subs.sort((a, b) => {
        const aTitle = safeStr(
          a.fields?.title?.[locale],
          safeStr(a.fields?.title?.en)
        );
        const bTitle = safeStr(
          b.fields?.title?.[locale],
          safeStr(b.fields?.title?.en)
        );
        return aTitle.localeCompare(bTitle, locale, { sensitivity: "base" });
      });

      for (let j = 0; j < sortedSubs.length; j++) {
        const sub = sortedSubs[j];
        const subTitleEN = safeStr(sub.fields?.title?.en, "Untitled");
        const subTitleLO = safeStr(sub.fields?.title?.[locale], subTitleEN);

        const subSlugEN = normalizeFolderName(subTitleEN);
        const subSlugLO = normalizeFolderName(subTitleLO);

        const subMeta = makeMetadata({
          titleEN: subTitleEN,
          titleLocale: subTitleLO,
          slugEN: subSlugEN,
          slugLocale: subSlugLO,
          order: j + 1,
        });

        const subFolder = path.join(catFolder, subSlugLO);
        await writeJSON(path.join(subFolder, "metadata.json"), subMeta);
      }
    }
  }
}

// ---------- TROUBLESHOOTING ----------
async function buildTroubleshootingMetadata(locales = ["en", "pt", "es"]) {
  // puxa todas as categorias e subcategorias
  const categories = await fetchEntries({ contentTypes: ["category"] });
  const subcategories = await fetchEntries({ contentTypes: ["subcategory"] });

  // acha a categoria Troubleshooting (match por qualquer locale; case-insensitive)
  const isTroubleshootingCat = (cat) => {
    const t = cat?.fields?.title || {};
    return ["en", "pt", "es"].some(
      (loc) =>
        typeof t?.[loc] === "string" &&
        t[loc].trim().toLowerCase() === "troubleshooting"
    );
  };
  const troubleCat = categories.find(isTroubleshootingCat);
  if (!troubleCat) {
    console.log("⚠️ Categoria 'Troubleshooting' não encontrada.");
    return;
  }

  // subcategorias ligados a essa categoria (geralmente em sub.fields.category.pt.sys.id)
  const troubleSubcats = subcategories.filter((sub) => {
    const catId =
      sub.fields?.category?.pt?.sys?.id ||
      sub.fields?.category?.en?.sys?.id ||
      sub.fields?.category?.sys?.id;
    return catId === troubleCat.sys.id;
  });

  // dados base da categoria
  const catTitleEN = safeStr(troubleCat.fields?.title?.en, "Troubleshooting");
  const catSlugEN = normalizeFolderName(catTitleEN);

  for (const locale of locales) {
    const catTitleLO = safeStr(troubleCat.fields?.title?.[locale], catTitleEN);
    const catSlugLO = normalizeFolderName(catTitleLO);

    // pasta raiz de troubleshooting nesse locale
    const baseFolder = path.join(
      __dirname,
      "..",
      "docs",
      locale,
      "troubleshooting"
    );

    // metadata.json da categoria Troubleshooting (na raiz de troubleshooting do locale)
    const catMeta = makeMetadata({
      titleEN: catTitleEN,
      titleLocale: catTitleLO,
      slugEN: catSlugEN,
      slugLocale: catSlugLO,
      order: 1, // raiz; se preferir, pode omitir ou deixar 0
    });
    await writeJSON(path.join(baseFolder, "metadata.json"), catMeta);
    console.log(
      `🧭 Escrito metadata da categoria Troubleshooting em ${locale}`
    );

    // ordenar subcategorias por título no locale
    const sortedSubs = [...troubleSubcats].sort((a, b) => {
      const aTitle = safeStr(
        a.fields?.title?.[locale],
        safeStr(a.fields?.title?.en)
      );
      const bTitle = safeStr(
        b.fields?.title?.[locale],
        safeStr(b.fields?.title?.en)
      );
      return aTitle.localeCompare(bTitle, locale, { sensitivity: "base" });
    });

    // escrever metadata.json de cada subcategoria
    for (let i = 0; i < sortedSubs.length; i++) {
      const sub = sortedSubs[i];
      const subTitleEN = safeStr(sub.fields?.title?.en, "Untitled");
      const subTitleLO = safeStr(sub.fields?.title?.[locale], subTitleEN);

      const subSlugEN = normalizeFolderName(subTitleEN);
      const subSlugLO = normalizeFolderName(subTitleLO);

      const subMeta = makeMetadata({
        titleEN: subTitleEN,
        titleLocale: subTitleLO,
        slugEN: subSlugEN,
        slugLocale: subSlugLO,
        order: i + 1,
      });

      const subFolder = path.join(baseFolder, subSlugLO);
      await writeJSON(path.join(subFolder, "metadata.json"), subMeta);
      console.log(`🗂️  ${locale}/troubleshooting/${subSlugLO}/metadata.json`);
    }
  }

  console.log("✅ metadata de Troubleshooting finalizado.");
}

// ---------- FAQ ----------
async function buildFaqMetadata(locales = ["en", "pt", "es"]) {
  // Pega todos os FAQs
  const faqs = await fetchEntries({
    contentTypes: ["frequentlyAskedQuestion"],
  });
  console.log(`📦 FAQ entries: ${faqs.length}`);

  // Agrupa por productTeam (vem geralmente em fields.xpTeam?.pt ou string simples)
  const groups = new Map();
  for (const faq of faqs) {
    const productTeamRaw =
      safeStr(faq.fields?.xpTeam?.pt) || // origem mais comum
      safeStr(faq.fields?.xpTeam?.en) ||
      safeStr(faq.fields?.xpTeam) ||
      "Others";
    const key = productTeamRaw; // chave canônica do grupo

    if (!groups.has(key)) groups.set(key, []);
    groups.get(key).push(faq);
  }

  for (const locale of locales) {
    // ordena grupos alfabeticamente por “name” (no nosso caso, productTeam não é localizado;
    // então usamos o próprio nome do grupo para EN e locale)
    const sortedGroupKeys = [...groups.keys()].sort((a, b) =>
      a.localeCompare(b, locale, { sensitivity: "base" })
    );

    for (let i = 0; i < sortedGroupKeys.length; i++) {
      const groupName = sortedGroupKeys[i];

      // id (EN) → slug normalizado do nome do grupo em "EN" (como não há localization para XP team, usamos o mesmo)
      const slugEN = normalizeFolderName(groupName);
      // slug (locale) → aqui também fica igual (não há localization do productTeam)
      const slugLO = slugEN;
      const nameLO = groupName;

      const meta = makeMetadata({
        titleEN: groupName,
        titleLocale: nameLO,
        slugEN,
        slugLocale: slugLO,
        order: i + 1,
      });

      const folder = path.join(__dirname, "..", "docs", locale, "faq", slugLO);
      await writeJSON(path.join(folder, "metadata.json"), meta);
    }
  }
}

// ---------- ANNOUNCEMENTS ----------
// scripts/buildAnnouncementsMetadata.js
const MONTHS_EN = [
  "january",
  "february",
  "march",
  "april",
  "may",
  "june",
  "july",
  "august",
  "september",
  "october",
  "november",
  "december",
];


async function buildAnnouncementsMetadata(locales = ["en", "pt", "es"]) {
  const updates = await fetchEntries({ contentTypes: ["updates"] });
  // agrupa por ano->mesIndex (1..12)
  const byYear = new Map();
  for (const e of updates) {
    const iso =
      e.sys?.createdAt || e.sys?.publishedAt || e.sys?.firstPublishedAt;
    if (!iso) continue;
    const d = new Date(iso);
    const year = String(d.getUTCFullYear());
    const mIdx = d.getUTCMonth() + 1; // 1..12
    if (!byYear.has(year)) byYear.set(year, new Set());
    byYear.get(year).add(mIdx);
  }

  const years = [...byYear.keys()].sort((a, b) => Number(b) - Number(a));

  for (const locale of locales) {
    for (let yIdx = 0; yIdx < years.length; yIdx++) {
      const year = years[yIdx];
      // metadata do ano
      writeJSON(
        path.join(
          __dirname,
          "..",
          "docs",
          locale,
          "announcements",
          year,
          "metadata.json"
        ),
        { id: year, name: year, slug: year, order: yIdx + 1 }
      );

      // meses (ordenados 1..12)

      const months = [...(byYear.get(year) || [])].sort((a, b) => b - a);
      for (const m of months) {
        // nome do mês no locale (usa seu util para manter compatibilidade com a pasta)
        const monthDateISO = `${year}-${String(m).padStart(
          2,
          "0"
        )}-01T00:00:00.000Z`;
        const { monthName } = getYearAndMonthName(monthDateISO, locale);

        // id EN sempre (para month): ex. "july"
        const idEN = MONTHS_EN[m - 2];
        const slugLO = normalizeFolderName(monthName);

        writeJSON(
          path.join(
            __dirname,
            "..",
            "docs",
            locale,
            "announcements",
            year,
            monthName,
            "metadata.json"
          ),
          { id: idEN, name: monthName, slug: slugLO, order: m - 1 }
        );
      }
    }
  }
}

// ---------- CLI ----------
async function main() {
  const args = minimist(process.argv.slice(2));
  const scope = args.scope.toLowerCase(); // tracks | tutorials
  const locales = (
    args.locales ? args.locales.split(",") : ["en", "pt", "es"]
  ).map((s) => s.trim());

  console.log(`🌐 Locales: ${locales.join(", ")}`);
  console.log(`🎯 Scope: ${scope}`);
  if (scope === "tracks") {
    await buildTracksMetadata(locales);
  }

  if (scope === "troubleshooting") {
    await buildTroubleshootingMetadata(locales);
  }

  if (scope === "tutorials") {
    await buildTutorialsMetadata(locales);
  }

  if (scope === "faq") {
    await buildFaqMetadata(locales);
  }

  if (scope === "announcements") {
    await buildAnnouncementsMetadata(locales);
  }
  console.log("✅ metadata.json concluído.");
}

main().catch((err) => {
  console.error("❌ Erro ao gerar metadata:", err);
  process.exit(1);
});
