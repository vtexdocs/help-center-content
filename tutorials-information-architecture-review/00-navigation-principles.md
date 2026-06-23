# Navigation Best Practices — Key Principles and References

This document summarizes the evidence-based principles that underpin the VTEX Help Center IA design decisions. Each principle links to peer-reviewed research or widely adopted industry standards. Use this as a reference when discussing IA choices with colleagues or stakeholders.

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
| 7 | Breadcrumbs | Every page must show its location in the hierarchy, especially for users arriving from search | [NN/g](https://www.nngroup.com/articles/breadcrumbs/) |
| 8 | Search + Browse | Search and navigation are complementary, not alternatives; design both deliberately | [NN/g](https://www.nngroup.com/articles/is-navigation-useful/) |
| 9 | Diátaxis (for documentation) | Separate tutorials, how-to guides, reference, and explanation — they serve distinct user needs | [diataxis.fr](https://diataxis.fr/) |
| 10 | AI Retrieval (LLMs) | Structure articles for chunked retrieval: self-contained H2 sections, descriptive headings, complete front-matter | [Firecrawl 2026](https://www.firecrawl.dev/blog/best-chunking-strategies-rag) |

---

## 1. Information Scent

**What it is:** Users scan navigation labels and predict whether a given path will lead them to their goal. If the label accurately predicts the content, users follow it confidently. If it misleads them, they abandon the path and lose trust in the navigation.

**Evidence:** Peter Pirolli and Stuart Card's Information Foraging Theory (PARC, 1999) established that users act like foragers — they follow the highest-scent cue available. NN/g found that poor information scent is the leading cause of navigation failure: users repeatedly choose wrong sections because label language does not match the content inside.

**Applied to VTEX:** Section labels like `operational`, `other`, and `about-the-admin` emit no scent — users cannot predict what they contain. Replacing them with `Getting Started`, `Account Management`, and `Infrastructure & Data` restores predictive power.

> **Reference:** Nielsen Norman Group — [Information Scent: How Users Decide Where to Go Next](https://www.nngroup.com/articles/information-scent/)

---

## 2. Task-Based Organization

**What it is:** Content should be organized around what users need to accomplish, not around internal team structures, product ownership, or feature categories. Task-based navigation endures organizational changes and reduces cognitive effort because it matches how users think about their goals.

**Evidence:** NN/g's analysis of 56 intranets found that task-based structures outlasted department-based structures through reorganizations, and that users completed tasks faster. By 2014, 86% of high-performing intranets had adopted task-based or topic-based IA. Shopper and merchant-facing portals (Shopify, HubSpot, Zendesk) all organize by workflow, not by internal team.

**Applied to VTEX:** Sections like `beta`, `operational`, and `billing` (as standalone sections) reflect internal VTEX team structures. Users never think "I need to find something under Operational" — they think "I need to configure my shipping" or "I need to manage my users". The consolidated 15-section structure is organized entirely around merchant workflows.

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

**What it is:** Rather than showing all content at once, reveal information in stages — primary content first, secondary content only when requested. In sidebar navigation, this means collapsing inactive sections so users see only the section they are in, reducing visual noise without hiding content.

**Evidence:** NN/g defines progressive disclosure as one of the most effective tools for reducing interface complexity. Applied to navigation, it means the sidebar of a large documentation portal should not display all articles from all sections simultaneously — that overwhelms users with 1,000+ items when they need 10.

**Applied to VTEX:** The current 36 flat sections visible in the sidebar simultaneously violate progressive disclosure. The new structure collapses inactive sections and shows only the current section's categories, matching how Stripe, Zendesk, and HubSpot handle large documentation sets.

> **Reference:** Nielsen Norman Group — [Progressive Disclosure](https://www.nngroup.com/articles/progressive-disclosure/)

---

## 5. Cognitive Load

**What it is:** Every navigation decision consumes mental effort. Long menus, deep trees, ambiguous labels, and inconsistent patterns all push users from automatic (System 1) thinking into effortful (System 2) thinking — which leads to errors, frustration, and abandonment. George Miller's classic research suggested a working memory limit of 7±2 items; more recent studies place it closer to 4.

**Evidence:** NN/g identified four dangerous navigation patterns that reliably increase cognitive strain: too many choices per level, redundant links on routing pages, visual noise that obscures structure, and menus that require hover to activate. All four push users into cognitive strain.

**Applied to VTEX:** Reducing 36 top-level sections to 15 directly reduces the cognitive load of the first navigation decision. Keeping L2 groups to 3–8 items per section and L3 articles to named, predictable categories ensures no single navigation step demands excessive effort.

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

## 7. Breadcrumbs

**What it is:** Every page must show the user's location in the hierarchy — both to orient users who arrived via search (bypassing the homepage) and to provide a path back to broader content. Breadcrumbs have been a NN/g recommendation since 1995 and deliver significant navigation value at minimal UI cost.

**Evidence:** NN/g's breadcrumb research shows that users frequently arrive at deep pages through external search engines, skipping all intermediate navigation levels. Without breadcrumbs, these users are disoriented and cannot assess whether other articles in the same section might be more relevant. Breadcrumbs are especially critical when content is indexed by AI and served directly in AI-generated answers.

**Applied to VTEX:** All tutorial articles must display full breadcrumbs: `Help Center > [Section] > [Category] > [Article]`. This is both a navigation requirement for human users and a retrieval context signal for AI systems (the breadcrumb path supplements the AI's heading path for chunk citation).

> **Reference:** Nielsen Norman Group — [Breadcrumbs: 11 Design Guidelines for Desktop and Mobile](https://www.nngroup.com/articles/breadcrumbs/)

---

## 8. Search and Browse Are Complementary

**What it is:** Search and navigation are not alternatives — they serve different modes of user intent. Navigation serves users who are exploring or learning; search serves users who know exactly what they want. A well-designed documentation portal optimizes both, because users switch between modes depending on their familiarity with the content.

**Evidence:** NN/g's research on navigation usefulness found that browse-based navigation helps users discover unexpected but relevant content and understand the scope of what a product covers — something search alone cannot provide. However, for experienced users with a specific goal, search is faster than browsing. Intercom and Stripe design around search-first for experienced users while maintaining clean browse navigation for new users.

**Applied to VTEX:** The Help Center should feature search prominently on the homepage (above the category grid) and optimize sidebar navigation for browsing discovery. Reducing 36 sections to 15 also makes the browse path significantly faster for users who prefer not to type.

> **Reference:** Nielsen Norman Group — [Is Navigation Useful?](https://www.nngroup.com/articles/is-navigation-useful/)

---

## 9. Diátaxis — Four Content Types for Documentation

**What it is:** Daniele Procida's Diátaxis framework identifies four fundamentally distinct types of documentation, each serving a different user need at a different point in their relationship with a product:

| Type | User need | Action-oriented? | Practical? |
|---|---|---|---|
| **Tutorial** | Learning | Yes | Yes |
| **How-to guide** | Accomplishing a specific task | Yes | Yes |
| **Reference** | Looking up information | No | Yes |
| **Explanation** | Understanding a concept | No | No |

**Evidence:** Adopted by Gatsby, Django, Python, Ubuntu, and hundreds of other documentation projects. Procida demonstrates that mixing these types in the same article systematically confuses users because each type requires a different reading mode, different prior knowledge, and different depth of engagement.

**Applied to VTEX:** VTEX Help Center tutorials are primarily **how-to guides** (task-oriented, practical, outcome-focused) with some tutorial content for onboarding flows. Articles that are currently written as explanations without actionable steps should be refactored into the correct type. This framework also governs the content type boundary between the Help Center (how-to guides) and the Developer Portal (how-to guides + reference + explanation).

> **References:**
> - Diátaxis — [diataxis.fr](https://diataxis.fr/)
> - Tom Johnson — [What is Diátaxis?](https://idratherbewriting.com/blog/what-is-diataxis-documentation-framework)

---

## 10. AI Retrieval — Structural Requirements for LLM-Based Search

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

---

## Testing and Validation Methods

No IA should be implemented without validation. The two standard methods are:

**Card sorting** — Participants organize topic names into groups that make sense to them, revealing their mental model of how content should be organized. Use open card sorting to discover categories; use closed card sorting to validate proposed category names. Results directly inform section label choices.

**Tree testing** — Participants are given the proposed navigation structure (text only, no UI) and asked to find specific articles. Success rates reveal whether the IA hierarchy is working. Target >70% success rate on critical tasks; below 60% indicates the structure needs revision.

> **Reference:** Nielsen Norman Group — [Low Findability and Discoverability: Four Testing Methods](https://www.nngroup.com/articles/navigation-ia-tests/)

---

## Further Reading

| Resource | Why it matters |
|---|---|
| [Nielsen Norman Group — IA and Navigation](https://www.nngroup.com/topic/ia-and-navigation/) | The most comprehensive publicly available UX research library on navigation |
| [Rosenfeld, Morville & Arango — *Information Architecture for the Web and Beyond* (O'Reilly, 2015)](https://www.oreilly.com/library/view/information-architecture-4th/9781491913529/) | The definitive textbook for IA practitioners |
| [Steve Krug — *Don't Make Me Think* (New Riders, 3rd ed., 2014)](https://sensible.com/dont-make-me-think/) | The most widely read book on web usability; covers navigation clarity in plain language |
| [Diátaxis — diataxis.fr](https://diataxis.fr/) | Framework specifically for technical documentation structure |
| [W3C WCAG — Consistent Navigation (Success Criterion 3.2.3)](https://www.w3.org/WAI/WCAG21/Understanding/consistent-navigation.html) | Accessibility requirement: navigation that appears on multiple pages must appear in the same order |
