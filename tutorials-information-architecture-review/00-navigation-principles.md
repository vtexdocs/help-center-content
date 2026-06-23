# Navigation Best Practices — Key Principles and References

This document summarizes the evidence-based principles that underpin the VTEX Help Center Information Architecture (IA) design decisions. Each principle links to peer-reviewed research or widely adopted industry standards.

---

## Quick-Reference Summary

| # | Principle | In one sentence | Source |
|---|---|---|---|
| 1 | Information Scent | Navigation labels must let users predict what they will find before clicking | [NN/g](https://www.nngroup.com/articles/information-scent/) |
| 2 | Task-Based Organization | Group content by what users need to do, not by how your organization is structured | [NN/g](https://www.nngroup.com/articles/intranet-information-architecture-ia/) |
| 3 | Shallow Hierarchy | Three levels maximum; each extra level significantly reduces findability | [NN/g](https://www.nngroup.com/articles/flat-vs-deep-hierarchy/) |
| 4 | Progressive Disclosure | Show only what users need at each step; hide complexity until it is needed | [NN/g](https://www.nngroup.com/articles/progressive-disclosure/) |
| 5 | Cognitive Load | Limit menu options to 5–9 items per level; more choices increase errors and abandonment | [NN/g](https://www.nngroup.com/articles/navigation-cognitive-strain/) |
| 6 | Label Stability | Never rename navigation labels due to internal rebrands; stable labels build trust | [NN/g](https://www.nngroup.com/articles/intranet-ia-methods/) |
| 7 | AI Retrieval (LLMs) | Structure articles for chunked retrieval: self-contained H2 sections, descriptive headings, complete front-matter | [Firecrawl 2026](https://www.firecrawl.dev/blog/best-chunking-strategies-rag) |

---

## 1. Information Scent

**What it is:** Users scan navigation labels and predict whether a given path will lead them to their goal. If the label accurately predicts the content, users follow it confidently. If it misleads them, they abandon the path and lose trust in the navigation.

**Evidence:** Peter Pirolli and Stuart Card's Information Foraging Theory (PARC, 1999) established that users act like foragers — they follow the highest-scent cue available. NN/g found that poor information scent is the leading cause of navigation failure: users repeatedly choose wrong sections because label language does not match the content inside.

**Applied to VTEX:** Section labels like `operational`, `other`, and `about-the-admin` emit no scent — users cannot predict what they contain. Replacing them with `Getting Started`, `Account Management`, and `Infrastructure & Data` restores predictive power.

> **Reference:** Nielsen Norman Group — [Information Scent: How Users Decide Where to Go Next](https://www.nngroup.com/articles/information-scent/)

---

## 2. Task-Based Organization

**What it is:** Content should be organized around what users need to accomplish, not around internal team structures, product ownership, or feature categories. Task-based navigation endures organizational changes and reduces cognitive effort because it matches how users think about their goals.

**Evidence:** NN/g's analysis of 56 intranets found that task-based structures outlasted department-based structures through reorganizations, and that users completed tasks faster. By 2014, 86% of high-performing intranets had adopted task-based or topic-based IA. Merchant-facing portals (Shopify, HubSpot, Zendesk) all organize by workflow, not by internal team.

**Applied to VTEX:** Sections like `beta`, `operational`, and `billing` (as a standalone section) reflect internal VTEX team structures. Users never think "I need to find something under Operational" — they think "I need to configure my shipping" or "I need to manage my users". The consolidated 15-section structure is organized entirely around merchant workflows.

> **References:**
> - Nielsen Norman Group — [Intranet IA Trends: Task-Based Structures](https://www.nngroup.com/articles/intranet-information-architecture-ia/)
> - Nielsen Norman Group — [Intranet IA Methods](https://www.nngroup.com/articles/intranet-ia-methods/)

---

## 3. Shallow Hierarchy (Maximum 3 Levels)

**What it is:** Every level of nesting between the homepage and the target article increases cognitive effort and error rates. NN/g's research consistently shows that content more than 3 clicks from a starting point is significantly harder to find. The optimal structure for most documentation sites is: Section → Category → Article.

**Evidence:** NN/g established that flat hierarchies have better discoverability and that deep hierarchies cause disorientation. Their guidelines for navigation UI design confirm that a navigation sidebar can only accommodate 4 tiers before users lose their sense of location — and fewer tiers is always better if the hierarchy is well-organized.

**Applied to VTEX:** Four current nesting violations (e.g., `b2b > b2b-suite > organization-details > article`) mean some content is 4 clicks deep from the tutorials root — one click past the findability cliff. The IA plan eliminates all 4 violations by promoting or merging the offending folders.

> **References:**
> - Nielsen Norman Group — [Flat vs. Deep Website Hierarchies](https://www.nngroup.com/articles/flat-vs-deep-hierarchy/)
> - Nielsen Norman Group — [IA vs. Navigation](https://www.nngroup.com/articles/ia-vs-navigation/)

---

## 4. Progressive Disclosure

**What it is:** Rather than showing all content at once, reveal information in stages — primary content first, secondary content only when requested. In sidebar navigation, this means the number of top-level sections must be small enough that users can scan and orient themselves without scrolling through a wall of options.

**Evidence:** NN/g defines progressive disclosure as one of the most effective tools for reducing interface complexity. Applied to navigation, it means the sidebar of a large documentation portal should not display all articles from all sections simultaneously — that overwhelms users with 1,000+ items when they need 10.

**Applied to VTEX:** With 36 top-level sections, users face an initial scan of 36 options before they can begin navigating. The new structure reduces this to 15 sections — a scan users can complete in under 3 seconds, matching how Stripe, Zendesk, and HubSpot handle large documentation sets.

> **Reference:** Nielsen Norman Group — [Progressive Disclosure](https://www.nngroup.com/articles/progressive-disclosure/)

---

## 5. Cognitive Load

**What it is:** Every navigation decision consumes mental effort. Long menus, deep trees, ambiguous labels, and inconsistent patterns all push users from automatic (System 1) thinking into effortful (System 2) thinking — which leads to errors, frustration, and abandonment. George Miller's classic research suggested a working memory limit of 7±2 items; more recent studies place it closer to 4.

**Evidence:** NN/g identified four dangerous navigation patterns that reliably increase cognitive strain: too many choices per level, redundant links on routing pages, visual noise that obscures structure, and menus that require hover to activate. All four push users into cognitive strain.

**Applied to VTEX:** Reducing 36 top-level sections to 15 directly reduces the cognitive load of the first navigation decision. Keeping L2 groups to 3–8 items per section ensures no single navigation step demands excessive effort. The rule that L2 groups with fewer than 5 articles should be merged follows directly from this principle.

> **References:**
> - Nielsen Norman Group — [4 Dangerous Navigation Approaches that Can Increase Cognitive Strain](https://www.nngroup.com/articles/navigation-cognitive-strain/)
> - Rosenfeld, Morville & Arango — *Information Architecture for the Web and Beyond* (4th ed., O'Reilly, 2015) — [oreilly.com](https://www.oreilly.com/library/view/information-architecture-4th/9781491913529/)

---

## 6. Label Stability

**What it is:** Navigation labels are the most costly words in a documentation site — every label change forces every user to re-learn the navigation and damages trust. Labels must be defined by user need, not by internal product naming. When a product is rebranded, the label must not change unless the user-facing concept itself changes.

**Evidence:** NN/g explicitly warns against changing navigation labels to reflect "the latest buzzwords or corporate fashions", quantifying the cost as hundreds of thousands of dollars in lost user time for enterprise intranets. Users build mental maps of navigation structures; disrupting those maps resets their mental model from scratch.

**Applied to VTEX:** Labels like `Intelligent Search`, `Catalog`, `Payments`, and `Orders` must be treated as frozen — they survive internal product renames. The VTEX Admin UI is the authoritative source for canonical label names; internal team names (e.g., "CX Platform") are not automatically navigation labels.

> **Reference:** Nielsen Norman Group — [Intranet IA Methods](https://www.nngroup.com/articles/intranet-ia-methods/)

---

## 7. AI Retrieval — Structural Requirements for LLM-Based Search

**What it is:** As documentation is increasingly served via AI-powered search (RAG pipelines, LLM assistants), the structure of articles directly determines retrieval quality. Unlike human navigation, AI retrieval operates at the sub-article level: individual H2 sections are extracted, embedded, and retrieved independently. A poorly structured article is invisible to AI even if it is perfectly placed in the navigation hierarchy.

**Evidence:** The leading 2026 guidance on RAG chunking recommends document-aware splitting (using `##` Markdown headings as primary split boundaries), chunk sizes of 400–800 tokens per section, and metadata attachment (source URL, heading path, last-updated date) to every chunk. Chunks below 200 tokens lack enough context to be retrieved accurately; chunks above 800 tokens dilute the embedding vector across too many topics.

**Applied to VTEX:** Every tutorial article's H2 sections must be:
- **Descriptive** (not "Step 1" or "Overview")
- **Self-contained** (understandable without reading adjacent sections)
- **300–700 words each** (within the 400–800 token target)

Front-matter fields (`title`, `excerpt`, `slugEN`, `productTeam`, `updatedAt`) feed the indexer's metadata layer and must be complete on every article.

> **References:**
> - Firecrawl — [Best Chunking Strategies for RAG (and LLMs) in 2026](https://www.firecrawl.dev/blog/best-chunking-strategies-rag)
> - LLM Best Practices — [RAG Chunking](https://llmbestpractices.com/ai-agents/rag-chunking)
> - Atlan — [Chunking Strategies for RAG: Methods, Trade-offs & Best Practices](https://atlan.com/know/chunking-strategies-rag/)
