---
title: 'Intelligent Search: how search result relevance works'
createdAt: 2026-07-07T00:00:00.000Z
updatedAt: 2026-07-07T00:00:00.000Z
contentType: tutorial
productTeam: Marketing & Merchandising
slugEN: intelligent-search-how-search-result-relevance-works
locale: en
---
Relevance is the core mechanism of [Intelligent Search](https://help.vtex.com/docs/tutorials/intelligent-search-overview). It defines which products display in search results and in what order. The goal is to ensure that the products most relevant to each query are displayed first, considering a series of automatic and configurable factors.

The process happens in two main steps:

1. Find the products that match the search.
2. Sort the products by relevance.

## Step 1: How Intelligent Search finds results

Intelligent Search tries to find products that match the search in sequential groups. As soon as a group returns results, the following groups aren't evaluated.

| Group | Logic | Description | Priority |
| :---- | :---- | :---- | :---- |
| Group 1 | [AND without fuzzy](#operators-and-fuzzy-matching) | Searches products that contain **all** the query words exactly as typed, with no tolerance for variations or typos. | Highest priority |
| Group 2 | [AND with fuzzy](#operators-and-fuzzy-matching) | Searches products with **all** the words but accepts small variations (example: typos, diacritical mark differences). |  |
| Group 3 | [OR without fuzzy](#operators-and-fuzzy-matching) | Accepts products that contain **any** of the searched words, but requires an exact match. |  |
| Group 4 | [OR with fuzzy](#operators-and-fuzzy-matching) | Last resort: accepts products with **any** of the words, with tolerance for variations. | Lowest priority |

### Operators and fuzzy matching

* **AND and OR operators:** The operator defines whether the product needs to contain all the words in the search or just one of them. With AND, a search for "nike sneakers" only returns products that have both terms. With OR, it returns any product that contains "nike" or "sneakers", which can significantly broaden the results.

* **Fuzzy:** Defines the tolerance for typos. Intelligent Search tries to correct what the user typed based on the items in the catalog. By default, terms with three to five characters accept one error, and terms with six or more characters accept two errors.

  The errors considered with fuzzy = 1 are: inserting an extra character, removing a character, changing a character, or swapping two adjacent characters. Blank spaces aren't considered in fuzzy matching. For these cases, we recommend using [synonyms](https://help.vtex.com/docs/tutorials/synonyms).

> ℹ️ Intelligent Search automatically chooses the operator and the fuzzy level. The merchant doesn't control this behavior. The system starts with the most restrictive group (AND without fuzzy) and moves on to more permissive groups only if the previous one doesn't return results. For more details, see [Search behavior](https://help.vtex.com/docs/tutorials/search-behavior#autocorrect).

### Decision flow

- If Group 1 returns results → display and stop.
- If Group 1 doesn't return results → try Group 2.
- If Group 2 doesn't return results → try Group 3.
- If Group 3 doesn't return results → try Group 4.
- If no group returns results → the search returns no results.

**Practical example:** A search for "ibuprofen 200mg" first tries to find products with exactly those words (Group 1). If nothing is found, it tries fuzzy matching (Group 2) and may return "ibuprofen 200mg tablets" or variations with similar spelling. If there's still no result, it moves to OR and may return products with just "ibuprofen" or just "200mg".

## Step 2: How Intelligent Search sorts results

After identifying matching products, Intelligent Search applies a scoring algorithm to define the display order. The table below lists the factors in descending order of priority:

| # | Factor | Description | Example |
| :---- | :---- | :---- | :---- |
| 1 | Product promoted by a merchandising rule | Product explicitly prioritized by the merchant via a merchandising rule. | A rule promoting "Stayfree Overnight" → Displays at the top even if another pad matches the search better. |
| 2 | Product added by a merchandising rule | Product forced to display in the results even without a direct match with the searched term. | "vitamin C" search → Displays "immunity bundle with vitamin C and zinc" due to a rule, even though it doesn't directly match the query. |
| 3 | Full ID match | The buyer searched for the exact product ID. | "123456" search → Displays the product with that ID with high priority. |
| 4 | Partial ID match | The buyer typed part of the product ID. | "123" search → Displays products like "123456" or "123789". |
| 5 | All words + keyword | The product contains all searched words and there's a match with the product's keyword. | "facial sunscreen SPF 50" search → A product with the keyword "sunscreen" fully matches. |
| 6 | All words (no keyword) | The product contains all the words, but there's no match with the keyword. | "protector sunscreen SPF 50" search → "body sunscreen protector SPF 50" matches the words, but without a keyword match. |
| 7 | Product demoted by a merchandising rule | Product with reduced visibility set by the merchant via a merchandising rule. It still displays, but with less prominence. | A rule demoting flu products outside of the season → Displays the product below others in searches for "flu products". |
| 8 | Product unavailable (out of stock) | Product out of stock, set to display anyway. Displayed at the end of the results. | "ibuprofen 200mg" search → Displays a product that's out of stock last, with an unavailability notification. |

> ℹ️ The exact scores assigned to each factor aren't disclosed publicly, as they're part of the intellectual property of the Intelligent Search relevance algorithm.

## Important concepts

### Keyword

The keyword is the main word that defines the product. Intelligent Search automatically identifies it based on the store's language:

- **Portuguese and Spanish:** First word of the product name.
- **English:** Last word of the product name.
- The brand is always treated as a keyword, regardless of its position in the name and the language.

**Examples:**

| Language | Product name | Keyword | Rule |
| :---- | :---- | :---- | :---- |
| Portuguese | Protetor solar facial FPS 50 | protetor | 1st word |
| Spanish | Protector solar facial FPS 50 | protector | 1st word |
| English | Facial SPF 50 sunscreen | sunscreen | last word |
|  |  |  |  |
| Portuguese | Shampoo anticaspa Head and Shoulders | shampoo | 1st word |
| Spanish | Champú anticaspa Head and Shoulders | champú | 1st word |
| English | Head and Shoulders anti-dandruff shampoo | shampoo | last word |
|  |  |  |  |
| Portuguese | Ibuprofeno 400mg genérico | ibuprofeno | 1st word |
| Spanish | Ibuprofeno 400mg genérico | ibuprofeno | 1st word |
| English | Generic 400mg ibuprofen | ibuprofen | last word |
|  |  |  |  |
| Portuguese | Vitamina C 1000mg efervescente | vitamina | 1st word |
| Spanish | Vitamina C 1000mg efervescente | vitamina | 1st word |
| English | Effervescent 1000mg vitamin C | vitamin C | last word |

The product name keyword match and the brand match are cumulative: a product that matches both at the same time gets the highest possible score. Having just one of the two already gives an advantage over products with no keyword match at all.

### Merchandising rules

[Merchandising rules](https://help.vtex.com/docs/tutorials/merchandising-rules) are manual configurations set by the merchant to adjust search results. They have the highest priority in the algorithm and allow three actions:

- **Promote:** Pushes a product to the top results.
- **Add:** Includes a product in the results even if it doesn't match the search.
- **Demote:** Reduces product visibility, keeping it at the end of the list.

### Synonyms

Intelligent Search allows you to configure [synonyms](https://help.vtex.com/docs/tutorials/synonyms) to expand search coverage. For example, mapping "pain reliever" to "acetaminophen".

#### Low-relevance synonyms

> ⚠️ This feature is only available to a limited number of accounts. Contact [VTEX Support](https://supporticket.vtex.com/support) to check availability for your store.

The low-relevance synonyms feature penalizes products that appeared in the results via a synonym compared to products with a direct match to the searched term.

The penalty isn't absolute. When the feature is enabled, the keyword weight is higher than the synonym weight, which defines the following relevance hierarchy:

1. Natural match + keyword: Highest score.
2. Match via synonym + keyword: Surpasses a natural match without a keyword.
3. Natural match without a keyword.
4. Match via synonym without a keyword: Lowest score.

A product returned by a synonym but that has a keyword match will be more relevant than a product with a natural match that doesn't have a keyword.

## Tie-breaking criteria

When two or more products have a similar relevance score, Intelligent Search uses the criteria from the [relevance rules](https://help.vtex.com/docs/tutorials/relevance-rules) configured by the merchant to break the tie. The available criteria are:

| Criterion | Description |
| :---- | :---- |
| Discount | Products with a higher discount percentage get priority. |
| Release date | Newer products are prioritized. |
| Best sellers | Sorted by order volume. |
| Best sellers by revenue | Sorted by total generated in sales. |
| Popularity | Based on product interactions and views. |
| Promotion | Products with an active promotion receive a higher score. |
| Catalog score | Score set directly in the store's catalog. |
| Available matrix variety | Products with more variations in stock are prioritized. |

The impact of each criterion is determined by the weight configured by the merchant. If a priority criterion is set (example: "Best sellers"), it gets more priority in the tie-break. Otherwise, the system uses the normalized weighted sum of all active criteria.

## Practical examples

### Search: "tylenol"

| Product (brand) | Relevance | Reason |
| :---- | :---- | :---- |
| Reliever Tylenol 24 ct (Tylenol) | High | Keyword from the name "Tylenol" + brand "Tylenol": Double cumulative match, higher score. |
| Tylenol PM Caplets 24 ct (Tylenol) | Tie\* | Only brand match "Tylenol": one keyword match. |
| Pain Reliever Caplets Tylenol 24 ct (ValueMed) | Tie\* | Only keyword match from the name "Tylenol": one keyword match. Tie broken by the configured relevance criteria. |

\* Tie in relevance score. Both have exactly one keyword match. The final order between them is determined by the configured relevance criteria (example: best sellers, discount, release date).

### Search: "minoxidil"

| Product (brand) | Relevance | Reason |
| :---- | :---- | :---- |
| 5% Hair Regrowth Treatment Minoxidil (Minoxidil) | High | Keyword from the name "Minoxidil" + brand "Minoxidil": double cumulative match. |
| Minoxidil Foam Extra Strength 3-Month Supply (Minoxidil) | Tie\* | Only brand match "Minoxidil": one keyword match. |
| 5% Hair Regrowth Treatment Minoxidil (Kirkland Signature) | Tie\* | Only keyword match from the name "Minoxidil": one keyword match. Tie broken by the configured relevance criteria. |
| Minoxidil Hair Growth Shampoo (HairCare Plus) | Low | Keyword from the name is "Shampoo" and the brand is "HairCare Plus": no keyword or brand match, despite the word "Minoxidil" in the name. |

\* Tie in relevance score. Both have exactly one keyword match. The final order between them is determined by the configured relevance criteria (example: best sellers, discount, release date).
