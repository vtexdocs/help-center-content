function convertCalloutToMarkdown(markdownContent) {
  const calloutMap = {
    info: "ℹ️",
    warning: "⚠️",
    danger: "❗",
  };

  return markdownContent.replace(
    /<div\s+[^>]*class\s*=\s*"alert alert-(info|warning|danger)"[^>]*>([\s\S]*?)<\/div>/gi,
    (_, type, inner) => {
      const emoji = calloutMap[type] || "";
      const collapsed = inner.trim().replace(/\s*\n\s*/g, " ");
      return `> ${emoji} ${collapsed}`;
    }
  );
}

// utils/convertInlineHtmlToMarkdown.js
function convertInlineHtmlToMarkdown(content) {
  content = convertCalloutToMarkdown(content);

  // Conversões inline globais
  return content
    .replace(/<(strong|b)>(.*?)<\/\1>/gi, "**$2**") // <strong> ou <b>
    .replace(/<(em|i)>(.*?)<\/\1>/gi, "*$2*") // <em> ou <i>
    .replace(/<code>(.*?)<\/code>/gi, "`$1`") // <code>
    .replace(/<a\s+href="([^"]+)"[^>]*>(.*?)<\/a>/gi, "[$2]($1)") // <a href="...">...</a>
    .replace(/<\/?p>/gi, ""); // <p> e </p>
}

module.exports = {
  convertInlineHtmlToMarkdown,
  convertCalloutToMarkdown,
};
