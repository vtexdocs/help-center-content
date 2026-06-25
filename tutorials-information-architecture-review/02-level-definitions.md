# Level Definitions — VTEX Tutorials

This document specifies the best practices for each level of the VTEX Help Center Tutorials hierarchy.

---

## Hierarchy Overview

```
Tutorials (root)
  └── Level 1: Topic (section)
        └── Level 2: Category (group)
              └── Level 3: Article (leaf node)
```

**Rule:** No article should be nested more than 3 levels deep, and no folder nesting beyond Level 2.

---

## Level 1 — Topic (section)

Level 1 is the top-level navigation entry in the sidebar. It represents a broad, user-recognizable workflow area of the platform.

### L1 appearance in sidebar

- Displayed as a top-level collapsible label
- Short, no verbs, uses platform terminology that merchants already know
- Clicking expands the section to reveal Level 2 categories

### What L1 covers

- A coherent user goal domain that users can identify before entering the docs
- Good examples: `Payments`, `Catalog`, `Shipping`
- Current bad examples: `about-the-admin`, `other`, `operational`, `beta` (internal logic, not user intent)

### How L1 is organized

- Sections covering store setup and daily operations should appear before advanced/specialized topics

### L1 label rules

| Rule | Specification |
| :--- | :--- |
| Max words | 3 words |
| Max characters | 20 characters |
| Language | Noun phrase, no verbs |
| Stability | Labels may change when article grouping changes, but avoid unnecessary renames and update localized labels together |

### L1 quantity target

- **Current count:** 36 (must be reduced through consolidation)
- **New count:** 15 sections
- **Maximum:** 16 sections

### L1 mandatory first article

Every Level 1 section must have an overview/hub article as its first and pinned entry. This article must:

- Summarize what the section covers
- Describe the audience and prerequisites for using this section

### L1 nesting rules

- No folder nesting beyond Level 2.
- No article may be nested more than 3 levels deep.
- Choose a clear structure for the section: either place articles directly under Level 1, or group all articles under Level 2 categories when grouping meaningfully reduces navigation complexity.

> ⚠️ Avoid mixing direct articles with Level 2 categories within the same section, because that increases visual complexity and navigation complexity.

---

## Level 2 — Category (group)

Level 2 is a collapsible group within a Level 1 section that clusters related articles by feature, task, or sub-domain.

### L2 appearance in sidebar

Displayed as a collapsible sub-label under its parent Level 1 section, which expands on click to reveal Level 3 articles.

> ℹ️ Level 2 is optional, because when the section has few articles and is small enough, the articles can be displayed directly under Level 1 without the need of a group. However, don't mix Level 2 with Level 3 under the same section.

### What L2 covers

A specific feature area or task cluster within the parent section.

> Examples within **Catalog**: `Products & SKUs`, `Categories`, `Brands`, `Collections`.

### How L2 is organized

- Ordered by onboarding sequence where logical: overview/getting-started groups appear first, advanced/settings groups appear last.
- Groups that contain an overview article should surface that article first.

### L2 label rules

| Rule | Specification |
| :--- | :--- |
| Max words | 4 words |
| Max characters | 30 characters |
| Language | Noun phrase preferred; adjective + noun also acceptable |
| Stability | Labels may change when article grouping changes, but avoid unnecessary renames. |

> Examples: `Products & SKUs` (Catalog), `Checkout Settings` (Checkout), `Payment Overview` (Payments), `B2B Organizations` (B2B).

### L2 quantity per section

| Count | Rule |
| :--- | :--- |
| 1–3 articles | Avoid creating a Level 2 group unless the grouping is essential; merge with a related group or keep articles directly under Level 1. |
| 4–12 articles | Ideal range for a Level 2 group in the current Tutorials structure. |
| 13–20 articles | Acceptable for broad or high-traffic categories, but review ordering and scanability. |
| More than 20 articles | Review whether the group should be split, renamed, or redistributed across clearer categories. |

---

## Level 3 — Article (Tutorial Page)

Level 3 is the individual tutorial article. It is always a leaf node — it never contains sub-levels.

### L3 appearance in sidebar
- Displayed as an indented item under its Level 2 category (or directly under Level 1 if no Level 2 groups are used)
- Active article is visually highlighted
- Sidebar label is derived from the article's title, truncated with ellipsis if it exceeds the character limit

### What L3 covers
- One specific task or concept, never a mix of unrelated topics
- A user can complete the task described without needing to read other articles in sequence (self-contained)
- Exception: a series of articles forming a step-by-step setup flow is acceptable, but each article must be useful on its own

### L3 title rules
| Rule | Specification |
|---|---|
| Format | Verb-first noun phrase (imperative): "Configure X", "Set up Y", "Manage Z" |
| Sidebar max words | 6 words |
| Sidebar max characters | 45 characters (truncated with ellipsis beyond this) |
| Full page title | May be longer than the sidebar label but must start with a verb |
| Language | Plain language using terms from the VTEX Admin interface |
| Avoid | "Overview of X", "Introduction to X" as titles (use the content inside the article, not as a standalone article unless it is a section hub page) |

### How L3 articles are ordered within a group
| Content type | Ordering rule |
|---|---|
| Setup/configuration flow | Order by user journey: basic → advanced; first-time setup steps → optional configuration |
| Reference articles (lists, connectors, etc.) | Alphabetical |
| Troubleshooting articles | Most common issue first |
| Mixed content within a group | Overview first, then task articles by frequency of use, then advanced/edge case articles last |

### L3 article template (mandatory structure)
Every tutorial article must follow this structure:

1. **Goal summary** (1–2 sentences at the top): what the user will accomplish
2. **Prerequisites** (if any): what the user needs before starting
3. **Numbered steps**: the actual procedure
4. **Screenshots**: at least one per major UI step
5. **Related articles**: 3–5 links at the bottom (mandatory)

### L3 length guidelines
| Type | Target length |
|---|---|
| Short how-to (single task) | 400–800 words |
| Standard tutorial | 800–1,500 words |
| Complex multi-step guide | 1,500–2,500 words |
| Over 2,500 words | Review: should this be split into multiple articles? |

---

## Depth Decision Tree

Use this tree to decide the correct level for any piece of content:

```
Is this a broad user goal domain (e.g., Payments, Catalog)?
├── YES → Level 1 (Topic/Section)
│         Does this section have more than 15 articles?
│         ├── YES → Add Level 2 groups
│         └── NO  → Use Level 1 → Level 3 directly (skip Level 2)
└── NO  → Is this a cluster of related articles within a section (e.g., "Products & SKUs")?
          ├── YES → Level 2 (Category/Group)
          │         Does this group have 5–20 articles?
          │         ├── YES → Valid Level 2 group
          │         └── NO  → Merge (< 5) or split (> 20)
          └── NO  → Level 3 (Article)
```

---

## Anti-patterns to Avoid

| Anti-pattern | Problem | Fix |
|---|---|---|
| Org-chart sections | `operational`, `about-the-admin`, `beta` reflect internal structure, not user goals | Redistribute to user-intent sections |
| Micro-sections | Sections with 2–5 articles at the top level (e.g., `suggestions`, `store-settings`, `dashboards`) | Merge into a relevant parent section |
| 4-level nesting | `b2b > b2b-suite > organization-details > article` | Flatten by removing one level |
| Verb-less group labels | `visión-de-conjunto` (overview) as a group name | Use `Overview` as the first article in a group, not a separate level |
| Duplicate parallel sections | `integrations` + `projects-and-integrations` with unclear boundary | Define clear scope and merge |
| Orphaned articles | Articles at the root of a section with no Level 2 parent when siblings have Level 2 groups | Assign to the most appropriate group |
| Unstable labels | Renaming a section every time a product rebrands | Define labels by user need, not product name |

---

## LLM and AI Retrieval Requirements

VTEX Help Center tutorials are indexed for hybrid search (BM25 keyword + vector similarity). This means the IA and article structure must be optimized for two audiences simultaneously: **human sidebar navigation** and **AI chunk retrieval**. The rules in this section are in addition to — not instead of — the human-navigation rules above.

### Why this matters

When an LLM or semantic search answers "how do I configure shipping in VTEX?", it does not browse the sidebar. It retrieves chunks from the index. The quality of those chunks depends entirely on how the article is structured. A well-structured article in the wrong sidebar position is still retrievable; a poorly-structured article in the right sidebar position is not.

The VTEX indexer uses document-aware splitting: Markdown `##` boundaries are the primary chunk split points. This means each H2 section becomes an independent retrieval unit. IA decisions must account for this.

---

### Self-containment rule (critical)

Every article must be understandable as a standalone document, with no assumed prior context from adjacent articles. This applies to both the article as a whole and to each H2 section within it.

**Required:**
- The **first paragraph** of every article states: (1) what the user will accomplish, (2) which section of the VTEX Admin they will use, and (3) any prerequisites
- All cross-references use explicit links — never "see above", "as shown earlier", "in the next article", or "as mentioned previously"
- Technical terms (SKU, OMS, PDP, SLA) are expanded on their first appearance in every article, not assumed from a previous article the user may not have read

**Rationale:** A retrieved chunk from the middle of an article must still answer the user's question. If that chunk depends on context defined three paragraphs earlier in the same article, the AI answer will be incomplete or wrong.

---

### Heading structure for AI chunking

H2 headings are the primary chunk boundaries. H3 headings create sub-chunks within a parent H2. Heading quality directly determines whether the indexer can produce semantically coherent chunks.

| Level | Rule | Good example | Bad example |
|---|---|---|---|
| H1 (article title) | Verb-first, full goal statement | "Configure payment methods in VTEX" | "Payment methods" |
| H2 (major section) | Descriptive action or concept, 4–8 words | "Access the Payment Settings page" | "Step 1" |
| H3 (sub-section) | More specific action within the H2 scope | "Set the payment condition for credit cards" | "Configuration" |

**Chunk size target per H2 section: 300–700 words (≈ 400–900 tokens)**
- Below 200 words: the chunk lacks enough context to be retrievable on its own — merge with adjacent H2 or expand the content
- Above 800 words: the embedding vector averages over too many topics, reducing precision — split into two H2 sections

**Never use:**
- Sequential H2 labels: "Step 1", "Step 2", "Step 3" — these are not semantically indexed
- Single-word H2 labels: "Overview", "Settings", "Notes" — too generic to help retrieval
- H2 labels that are identical across articles: if three articles all have an H2 called "Prerequisites", the chunks are nearly identical and rank poorly

---

### Canonical terminology

The BM25 (keyword) component of the VTEX hybrid search relies on exact term matching. Synonym sprawl — where the same concept is called by different names in different articles — directly degrades keyword retrieval.

**Rules:**
- Each VTEX concept has exactly **one canonical name** — the label used in the VTEX Admin UI
- All articles use that canonical name; synonyms are not used as substitutes
- If a concept was previously known by a different name (product renamed), use the current canonical name throughout; mention the legacy name once with a note: "Previously called X"

**Common synonym problems to resolve:**

| Canonical name (use this) | Synonyms to stop using |
|---|---|
| VTEX Admin | Admin Panel, Back-office, BO, Dashboard |
| Order Management | OMS, Order Management System |
| Intelligent Search | IS, VTEX Search, Search module |
| Master Data | MD, CRM module |
| Trade Policy | Sales policy, Commercial policy |
| SKU | Product variant, Item variant |

---

### Front-matter completeness

Every tutorial article must have all front-matter fields populated. Missing fields degrade AI retrieval in two ways: (1) the indexer cannot correctly assign ownership or freshness scores, and (2) the content type classifier misfires, causing the article to surface in wrong contexts.

**Required fields — all must be present on every article:**

| Field | Used for AI | Consequence if missing |
|---|---|---|
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

### Section context in article body

Because AI retrieval returns individual articles (and sometimes individual H2 chunks) without sidebar context, the article body itself must ground the reader in the product and section:

- **Opening sentence pattern:** "In the VTEX Admin, go to **[Section] > [Sub-section]** to [accomplish goal]."
- **First paragraph** must answer: what is this? why does it matter? who should do this?
- **Do not rely on breadcrumbs** to convey location — breadcrumbs are navigation UI, not content; they are stripped during indexing

**Example of a grounded opening:**

> In the VTEX Admin, go to **Payments > Settings** to configure the payment methods available to customers at checkout. This article explains how to add a payment condition, set up installment rules, and activate a payment connector.

**Example of an ungrounded opening (avoid):**

> This article shows you how to do it. First, open the module and select the option.

---

### Retrieval anti-patterns for LLMs

| Anti-pattern | Impact on AI retrieval | Fix |
|---|---|---|
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
