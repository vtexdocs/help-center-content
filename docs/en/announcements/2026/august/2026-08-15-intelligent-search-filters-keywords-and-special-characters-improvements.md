---
title: 'Intelligent Search: Facets, keywords, and special character improvements'
slug: '2026-08-15-intelligent-search-filters-keywords-and-special-characters-improvements'
hidden: false
createdAt: 2026-08-15T00:00:00.000Z
updatedAt: 2026-08-15T00:00:00.000Z
contentType: updates
productTeam: Intelligent Search
slugEN: 2026-08-15-intelligent-search-filters-keywords-and-special-characters-improvements
locale: en
announcementSynopsisEN: 'Intelligent Search received improvements to facet visibility, keyword generation, and special character handling, along with a fix for a bug in the English-language parser.'
tags:
  - Improvement
  - Intelligent Search
---

[Intelligent Search](/pt/docs/tracks/visao-geral-intelligent-search) received a set of improvements that increase the relevance and accuracy of search results, along with a fix for a bug in the English language parser. These improvements aren't applied automatically. To enable any of them for your account, contact [VTEX Support](https://supporticket.vtex.com/support).

## What has changed?

### Minimum result coverage for facets

You can now hide facets that affect only a small share of search results. Large catalogs often contain facets created from specifications shared by only a few products, cluttering the facet panel with low-coverage options.

With minimum coverage enabled, facets in which no option reaches the defined minimum percentage of total search results are automatically hidden. You can exclude specific facets from this rule so they're always displayed, regardless of the configuration.

Consider a search for "shirt" that returns 1,000 products, with minimum coverage set to 5%:

- The **Color** facet covers 1,000 products (100%) and is displayed.
- The **Size** facet covers 600 products (60%) and is displayed.
- The **Fabric** facet covers only 30 products (3%) and is automatically hidden because its options don't reach the minimum percentage.

Learn more in [Search configuration](https://help.vtex.com/docs/tutorials/search-configuration).

### Keyword generation from any product specification

In addition to the product name and brand, you can configure product specifications to generate keywords. When a specification is set to generate a keyword, the values entered are treated as product keywords and given the same weight as keywords extracted from the product name or brand.

This improvement is especially useful for catalogs where information relevant to search is recorded in specifications rather than in the product name, for example, when the name doesn't describe the item's type, function, or other core attribute.

Consider a search for "frost free":

- **Duplex Refrigerator 400L** (specification "Defrost technology": Frost Free, set to generate keywords) has high relevance, since the specification value matches the search and generates the same bonus as a keyword match, even if the term doesn't appear in the product name.
- **Refrigerator 400L** (specification "Defrost technology": Cyclic) has low relevance, since neither the name nor the specification value matches "frost free".

Learn more in [How search results relevance works](https://help.vtex.com/docs/tutorials/intelligent-search-how-search-result-relevance-works#keywords-from-specifications).

### Special character handling

The processing of symbols such as `®`, `@`, and `&` in search has been improved. When you enable this feature, these characters are ignored during indexing, allowing products with symbols in their names to be found even when customers leave those symbols out of their search queries.

For example, the product `Brand® Multipurpose & Copier Bond Paper` can be found when customers search for `brand bond paper`.

Learn more in [Search behavior](https://help.vtex.com/docs/tutorials/search-behavior).

### Bug fix: English language analyzer stemming

Intelligent Search uses a language analyzer to normalize search terms, unifying singular and plural forms of the same word into a single stem. For example, in English-language stores, a search for `sneaker` also returns products that contain `sneakers`.

We fixed stemming inconsistencies in the English language analyzer for terms such as `sticks`, `sharpies`, `its`, `bags`, `boards`, `books`, `bowls`, `cards`, `crackers`, `dividers`, `games`, `glue-sticks`, `k-cups`, `knives`, `nuts`, `rolls`, `shelves`, and `supplies`, whose plural forms weren't correctly mapped to the singular stem. This fix is available only for accounts operating in English.

Learn more in [Search behavior](https://help.vtex.com/docs/tutorials/search-behavior#stemming) and in [How search results relevance works](https://help.vtex.com/docs/tutorials/intelligent-search-how-search-result-relevance-works).

## What needs to be done?

None of the improvements listed are applied automatically. To enable any of them in your account, contact [VTEX Support](https://supporticket.vtex.com/support) and specify which improvement you want to enable. The stemming fix is available only for accounts operating in English.
