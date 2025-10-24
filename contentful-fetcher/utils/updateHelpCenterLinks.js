/**
 * Converte links absolutos de help.vtex.com em relativos e
 * garante o prefixo "/{locale}/" no caminho, exceto para a rota
 * https://help.vtex.com/pt/support (e variações ?/#/subpaths), que é mantida.
 *
 * @param {string} content
 * @param {string} locale - ex: "en", "pt-br", "es"
 */
function updateHelpCenterLinks(content, locale) {
    if (!content || typeof content !== "string") return content;
  
    const normLocale = String(locale || "").replace(/^\/+|\/+$/g, ""); // "en" | "pt-br"
  
    const ensureLocale = (p) => {
      let pathOnly = String(p).replace(/^\/+/, ""); // remove barras iniciais
      if (normLocale) {
        // remove um locale inicial diferente, se houver (opcional)
        pathOnly = pathOnly.replace(/^[a-z]{2}(?:-[a-z]{2})?\//i, "");
        pathOnly = `${normLocale}/${pathOnly}`;
      }
      return `/${pathOnly.replace(/^\/+/, "")}`;
    };
  
    // Não modificar exatamente /pt/support (+ ?query, #hash, ou subcaminhos)
    const shouldBypass = (rawPath) => {
      const p = String(rawPath).trim().replace(/^\/+/, "").toLowerCase();
      return (
        p === "pt/support" ||
        p.startsWith("pt/support?") ||
        p.startsWith("pt/support#") ||
        p.startsWith("pt/support/") ||
        p === "en/support" ||
        p.startsWith("en/support?") ||
        p.startsWith("en/support#") ||
        p.startsWith("en/support/") ||
        p === "es/support" ||
        p.startsWith("es/support?") ||
        p.startsWith("es/support#") ||
        p.startsWith("es/support/")
      );
    };
  
    let processed = content;
  
    // Markdown: [texto](https://help.vtex.com/<path>)
    const mdPattern = /\[([^\]]+)\]\(\s*(https?:\/\/help\.vtex\.com\/)([^)\s]+)\s*\)/gi;
    processed = processed.replace(mdPattern, (full, text, origin, pathPart) => {
      if (shouldBypass(pathPart)) return full; // mantém como está
      return `[${text}](${ensureLocale(pathPart)})`;
    });
  
    // HTML: <a href="https://help.vtex.com/<path>">texto</a>
    const htmlPattern = /<a\s+([^>]*?)href="(https?:\/\/help\.vtex\.com\/)([^"]+)"([^>]*)>([\s\S]*?)<\/a>/gi;
    processed = processed.replace(
      htmlPattern,
      (full, preAttrs, origin, pathPart, postAttrs, linkText) => {
        if (shouldBypass(pathPart)) return full; // mantém como está
        const left = preAttrs ? `${preAttrs.trim()} ` : "";
        const right = postAttrs ? ` ${postAttrs.trim()}` : "";
        return `<a ${left}href="${ensureLocale(pathPart)}"${right}>${linkText}</a>`;
      }
    );
  
    return processed;
  }
  
  module.exports = { updateHelpCenterLinks };
  