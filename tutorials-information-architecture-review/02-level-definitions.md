# Level Definitions — VTEX Tutorials

This document specifies the best practices for each level of the VTEX Help Center Tutorials hierarchy.

---

## Hierarchy Overview

```text
Tutorials (root)
  └── Level 1: Topic (section)
        └── Level 2: Category (group)
              └── Level 3: Article (tutorial)
```

**Rule:** No article should be nested more than 3 levels deep, and no folder nesting beyond Level 2.

---

## Level 1 — Topic (section)

Level 1 is the top-level navigation entry in the sidebar. It represents a broad, user-recognizable workflow area of the platform.

### L1 appearance in sidebar

- Displayed as a top-level collapsible label
- Short, no verbs, uses platform terminology that merchants already know
- Clicking expands the section to reveal Level 2 categories or direct Level 3 articles

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
| Stability | Labels should remain stable once published; rename only when the section scope changes significantly |

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

> ℹ️ Level 2 is optional, because when the section has few articles and is small enough, the articles can be displayed directly under Level 1 without the need of a group. Avoid mixing direct Level 3 articles with Level 2 categories under the same Level 1 section.

### What L2 covers

A specific feature area or task cluster within the parent section.

> Examples within **Catalog**: `Products & SKUs`, `Categories`, `Brands`, `Collections`.

### How L2 is organized

Ordered by onboarding sequence where logical: overview/getting-started groups appear first, advanced/settings groups appear last.

### L2 label rules

| Rule | Specification |
| :--- | :--- |
| Max words | 4 words |
| Max characters | 30 characters |
| Language | Noun phrase preferred; adjective + noun also acceptable |
| Stability | Labels may change when article grouping changes, but avoid unnecessary renames. |

> Examples: `Products & SKUs` (Catalog), `Checkout Settings` (Checkout), `Payment Overview` (Payments), `B2B Organizations` (B2B).

### L2 article count per group

| Count | Rule |
| :--- | :--- |
| 1–3 articles | Avoid creating a Level 2 group unless the grouping is essential; merge with a related group or keep articles directly under Level 1. |
| 4–12 articles | Ideal range for a Level 2 group in the current Tutorials structure. |
| 13–20 articles | Acceptable for broad or high-traffic categories, but review ordering and scanability. |
| More than 20 articles | Review whether the group should be split, renamed, or redistributed across clearer categories. |

---

## Level 3 — Article (tutorial)

Level 3 is the individual tutorial article and doesn't contain sub-levels.

### L3 appearance in sidebar

Displayed as an indented item under its Level 2 category (or directly under Level 1 if no Level 2 groups are used).

### What L3 covers

A tutorial should be a self-contained article focused on a specific task or concept.

### L3 title rules

| Rule | Specification |
| :--- | :--- |
| Sidebar max words | 6 words |
| Sidebar max characters | 45 characters |

> ℹ️ These values are meant as good practices, not strict rules.

### How L3 articles are ordered within a group

Overview first, then task articles by frequency of use, then advanced/edge case articles last.

---

## Depth Decision Tree

Use this tree to decide the correct level for any piece of content:

```text
Is this a broad user goal domain (e.g., Payments, Catalog)?
├── YES → Level 1 (Topic/Section)
│         Does this section have more than 15 articles?
│         ├── YES → Add Level 2 groups
│         └── NO  → Use Level 1 → Level 3 directly (skip Level 2)
└── NO  → Is this a cluster of related articles within a section (e.g., "Products & SKUs")?
          ├── YES → Level 2 (Category/Group)
          │         Does this group have 4–12 articles?
          │         ├── YES → Ideal Level 2 group
          │         └── NO  → Review if too small (1–3) or too large (> 20)
          └── NO  → Level 3 (Article)
```

---

## Structures to avoid

- ❌ 4-level nesting: fix by flattening by removing one level.
- ❌ Duplicated parallel sections/categories: fix by defining clear scope and merging them into a single section/category.
- ❌ Orphaned articles: fix by assigning it to the most appropriate group.
- ❌ Unnecessary label changes: keep labels as stable as possible, especially for Level 1 sections.
- ❌ Sections too broad in scope: when a section covers too many unrelated topics, embedding vectors average over them and AI retrieval precision drops. Each section's scope should be narrow enough that its articles share a coherent topic cluster.
