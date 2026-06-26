# AI Retrieval Requirements — VTEX Tutorials

VTEX Help Center tutorials are indexed for hybrid search (BM25 keyword + vector similarity). This means the Information Architecture (IA) and article structure must be optimized for two audiences simultaneously: **human sidebar navigation** and **AI chunk retrieval**. The rules in this document are in addition to — not instead of — the human-navigation rules in [`02-level-definitions.md`](02-level-definitions.md).

## Why this matters

When an LLM or semantic search answers "how do I configure shipping in VTEX?", it does not browse the sidebar. It retrieves chunks from the index. The quality of those chunks depends entirely on how the article is structured. A well-structured article in the wrong sidebar position is still retrievable; a poorly-structured article in the right sidebar position is not.

The VTEX indexer uses document-aware splitting: Markdown `##` boundaries are the primary chunk split points. This means each H2 section becomes an independent retrieval unit. IA decisions must account for this.

---

## Self-containment rule (critical)

Every article must be understandable as a standalone document, with no assumed prior context from adjacent articles. This applies to both the article as a whole and to each H2 section within it.

**Required:**

- The **first paragraph** of every article states: (1) what the user will accomplish, (2) which section of the VTEX Admin they will use, and (3) any prerequisites
- All cross-references use explicit links — never "see above", "as shown earlier", "in the next article", or "as mentioned previously"
- Technical terms (SKU, OMS, PDP, SLA) are expanded on their first appearance in every article, not assumed from a previous article the user may not have read

**Rationale:** A retrieved chunk from the middle of an article must still answer the user's question. If that chunk depends on context defined three paragraphs earlier in the same article, the AI answer will be incomplete or wrong.

---

## Heading structure for AI chunking

H2 headings are the primary chunk boundaries. H3 headings create sub-chunks within a parent H2. Heading quality directly determines whether the indexer can produce semantically coherent chunks.

| Level | Rule | Good example | Bad example |
| --- | --- | --- | --- |
| H1 (article title) | Verb-first, full goal statement | "Configure payment methods in VTEX" | "Payment methods" |
| H2 (major section) | Descriptive action or concept, 4–8 words | "Access the Payment Settings page" | "Step 1" |
| H3 (sub-section) | More specific action within the H2 scope | "Set the payment condition for credit cards" | "Configuration" |

### Chunk size target per H2 section

Target: 300–700 words (≈ 400–900 tokens).

- Below 200 words: the chunk lacks enough context to be retrievable on its own — merge with adjacent H2 or expand the content
- Above 800 words: the embedding vector averages over too many topics, reducing precision — split into two H2 sections

**Never use:**

- Sequential H2 labels: "Step 1", "Step 2", "Step 3" — these are not semantically indexed
- Single-word H2 labels: "Overview", "Settings", "Notes" — too generic to help retrieval
- H2 labels that are identical across articles: if three articles all have an H2 called "Prerequisites", the chunks are nearly identical and rank poorly

---

## Canonical terminology

The BM25 (keyword) component of the VTEX hybrid search relies on exact term matching. Synonym sprawl — where the same concept is called by different names in different articles — directly degrades keyword retrieval.

**Rules:**

- Each VTEX concept has exactly **one canonical name** — the label used in the VTEX Admin UI
- All articles use that canonical name; synonyms are not used as substitutes
- If a concept was previously known by a different name (product renamed), use the current canonical name throughout; mention the legacy name once with a note: "Previously called X"

**Common synonym problems to resolve:**

| Canonical name (use this) | Synonyms to stop using |
| --- | --- |
| VTEX Admin | Admin Panel, Back-office, BO, Dashboard |
| Order Management | OMS, Order Management System |
| Intelligent Search | IS, VTEX Search, Search module |
| Master Data | MD, CRM module |
| Trade Policy | Sales policy, Commercial policy |
| SKU | Product variant, Item variant |

---

## Front-matter completeness

Every tutorial article must have all front-matter fields populated. Missing fields degrade AI retrieval in two ways: (1) the indexer cannot correctly assign ownership or freshness scores, and (2) the content type classifier misfires, causing the article to surface in wrong contexts.

**Required fields — all must be present on every article:**

| Field | Used for AI | Consequence if missing |
| --- | --- | --- |
| `title` | Primary retrieval signal; chunk title in citations | Article surfaces with no title in AI answers |
| `slugEN` | Cross-language deduplication; URL canonical identity | AI may index EN, ES, and PT as three separate competing documents |
| `productTeam` | Filter by product area in semantic search | Article not returned in product-scoped queries |
| `updatedAt` | Freshness ranking; LLMs prefer recent content | Stale articles may rank above updated ones |
| `locale` | Language-scoped retrieval | Article returned in wrong-language queries |
| `contentType` | Type-scoped retrieval (tutorial vs FAQ vs announcement) | Article surfaces in wrong content-type filters |

**Front-matter template for tutorial articles:**

```yaml
---
title: 'Configure payment methods in VTEX'
id: unique-article-id
status: PUBLISHED
createdAt: '2024-01-15T10:00:00.000Z'
updatedAt: '2025-06-01T14:00:00.000Z'
publishedAt: '2024-01-15T12:00:00.000Z'
contentType: tutorial
productTeam: Financial
slugEN: configure-payment-methods-in-vtex
locale: en
legacySlug: configure-payment-methods-in-vtex
subcategory: payment-settings-subcategory
---
```

---

## Section context in article body

Because AI retrieval returns individual articles (and sometimes individual H2 chunks) without sidebar context, the article body itself must ground the reader in the product and section:

- **Opening sentence pattern:** "In the VTEX Admin, go to **[Section] > [Sub-section]** to [accomplish goal]."
- **First paragraph** must answer: what is this? why does it matter? who should do this?
- **Do not rely on breadcrumbs** to convey location — breadcrumbs are navigation UI, not content; they are stripped during indexing

**Example of a grounded opening:**

> In the VTEX Admin, go to **Payments > Settings** to configure the payment methods available to customers at checkout. This article explains how to add a payment condition, set up installment rules, and activate a payment connector.

**Example of an ungrounded opening (avoid):**

> This article shows you how to do it. First, open the module and select the option.

---

## Retrieval anti-patterns for LLMs

| Anti-pattern | Impact on AI retrieval | Fix |
| --- | --- | --- |
| Implicit references ("see above", "as mentioned") | Retrieved chunk is incomplete; AI gives partial or wrong answer | Replace with explicit inline links to the referenced article or section |
| Synonym sprawl (same concept, many names) | BM25 keyword matching fails; recall drops | Enforce canonical terminology; update non-canonical uses |
| Non-descriptive H2 headings ("Step 1", "Notes") | Chunk is not meaningfully indexed; retrieval precision drops | Use action-based H2 headings |
| H2 sections under 200 words | Chunk lacks enough context to be independently useful | Merge with adjacent section or expand content |
| H2 sections over 800 words | Embedding vector is too diffuse; precision drops | Split into two focused H2 sections |
| Missing front-matter fields | Freshness, language, and product-scope filters fail | Audit and complete all required front-matter fields |
| No grounding in the first paragraph | Retrieved article lacks context for AI to synthesize an answer | Add location + goal + audience to the first paragraph of every article |
| Identical H2 headings across articles | Chunks compete semantically; wrong article may rank first | Differentiate H2 headings to reflect the specific scope of each article |
| Cross-portal terminology drift | Help Center calls a product "Intelligent Search" while the Developer Portal calls it "Search" — AI retrieval surfaces both with inconsistent labels | Align on the canonical name; document intentional divergences in `08-cross-portal-alignment.md` |
| Missing cross-portal links | An HC article covers the Admin side of a feature but does not link to the corresponding Developer Portal API guide — users who need to extend or integrate are stranded | Every HC article with a matching developer guide must end with a "For developers" link in the related articles section |
