# AI Retrieval — IA Constraints

The VTEX Help Center uses hybrid search (BM25 keyword + vector similarity). AI retrieval does not browse the sidebar — it retrieves indexed chunks directly. This means section naming and terminology decisions in the IA have a direct impact on retrieval quality, independently of article structure.

> Article-level authoring rules for AI retrieval (heading structure, chunk size, front-matter, self-containment) are out of scope for this proposal and should be addressed as a separate authoring guidelines document.

---

## Canonical terminology

The BM25 component relies on exact term matching. Synonym sprawl — the same concept referred to by different names across articles — directly degrades keyword retrieval. The IA proposal must enforce one canonical name per concept, matching the label used in the VTEX Admin UI.

| Canonical name (use this) | Synonyms to stop using |
| --- | --- |
| VTEX Admin | Admin Panel, Back-office, BO, Dashboard |
| Order Management | OMS, Order Management System |
| Intelligent Search | IS, VTEX Search, Search module |
| Master Data | MD, CRM module |
| Trade Policy | Sales policy, Commercial policy |
| SKU | Product variant, Item variant |

The section names proposed in `03-consolidation-map.md` follow this same principle — they use the Admin UI label as the canonical form. See `06-section-naming-rationale.md` for cases where the canonical name diverges from the Developer Portal label.

---

## IA anti-patterns that degrade AI retrieval

| Anti-pattern | Impact | Fix |
| --- | --- | --- |
| Synonym sprawl (same concept, many names) | BM25 keyword matching fails; recall drops | Enforce canonical terminology across all articles in the section |
| Cross-portal terminology drift | HC and Dev Portal use different names for the same product; both surface in search with inconsistent labels | Align on canonical name; document intentional divergences in `06-section-naming-rationale.md` |
| Sections too broad in scope | Embedding vectors average over too many topics; retrieval precision drops | Keep section scope narrow enough that articles within it share a coherent topic cluster |
