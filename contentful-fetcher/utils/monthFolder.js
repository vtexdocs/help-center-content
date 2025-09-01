const LOCALE_MAP = {
  en: "en-US",
  pt: "pt-BR",
  es: "es-ES",
};

function getYearAndMonthName(dateISO, locale = "en") {
  const d = new Date(dateISO);
  const year = String(d.getFullYear());
  const intlLocale = LOCALE_MAP[locale] || locale || "en-US";
  const monthName = new Intl.DateTimeFormat(intlLocale, {
    month: "long",
  }).format(d).toLowerCase();
  return { year, monthName };
}

module.exports = { getYearAndMonthName };
