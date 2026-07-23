---
title: 'Search behavior'
id: B9o3JbV6utAinBJ1ETujs
status: PUBLISHED
createdAt: 2024-06-27T17:30:43.356Z
updatedAt: 2026-04-23T12:00:00.000Z
publishedAt: 2025-06-24T19:21:01.124Z
firstPublishedAt: 2024-06-27T17:33:21.153Z
contentType: tutorial
productTeam: Marketing & Merchandising
author: 1malnhMX0vPThsaJaZMYm2
slugEN: search-behavior
legacySlug: search-behavior
locale: en
subcategoryId: 30Kdgc6wJkMWgcXLB8mGr7
---

The Search Engine is the core of VTEX Intelligent Search's intelligence. It interprets the search term and displays a filtered and ordered list of products. This tool enables more precise search results by indexing and processing catalog data.

This feature is included by default in VTEX Intelligent Search and covers the vast majority of scenarios. However, you can also adjust the Search Engine to improve search results. This guide covers the following:

- [Standard search behavior](#standard-search-behavior)
- [Search behavior configuration](#search-behavior-configuration)
- [Alternative ways to search](#alternative-ways-to-search)

## Standard search behavior

The following are characteristics of Intelligent Search's standard behavior.

### Autocorrect

Users can make spelling mistakes when searching. The tool interprets these misspellings and shows similar products.

The search engine automatically corrects each search result based on items added to the catalog. For each search term, a specific number of wrong characters is allowed. The number of accepted misspellings is called *fuzzy*.

The *fuzzy* value varies depending on the length of the search term. By default, if the term is 3 to 5 characters long, the *fuzzy* applied will be 1, which means that 1 misspelled character is allowed. For terms of 6 characters or more, the *fuzzy* applied will be 2.

The types of misspellings accepted when *fuzzy* = 1 include:

- Add 1 more character.
- Remove 1 character.
- Change 1 character.
- Swap 2 characters that are next to each other.

Example: Suppose a customer wants to search for the term `ball`. Using the default configuration (*fuzzy* = 1 for terms of 3 to 5 characters), the search engine will return results for `ball` in any search that contains accepted errors, such as:

- `bawll` (add 1 more character)
- `bal` (remove 1 character)
- `balk` (change 1 character)
- `abll` (swap 2 characters next to each other)

> ℹ️ Blank spaces aren't accounted for in *fuzzy* matching, so `base ball` won't be corrected to `baseball`. We recommend using [synonyms](/en/docs/tutorials/synonyms) for such cases.

### Minimum result

The minimum number of results displayed for any search is 1. If a search doesn't meet this minimum, [autocorrect](#autocorrect) is applied.

In a search with multiple terms, the following logic applies:

1. If the minimum result isn't reached even after the initial autocorrect, the search starts to include more comprehensive results containing any of the search terms. For example, if a user searches for "nike sneakers" and the catalog doesn't have any products matching that name, the search will return products with only the term "sneakers" instead.
2. If the comprehensive search doesn't return the minimum result, the process will be repeated, applying autocorrect again to each term.

> ⚠️ Searches with multiple terms are more efficient when customers sort the results by relevance, as such sorting can return more results than the initial search. When sorted by relevance, items with multiple terms are prioritized. However, with other sorting criteria, such as price or bestsellers, the result ranking is based on these numerical values and doesn't necessarily prioritize items that match more search terms.

### Pagination limit

VTEX Intelligent Search limits search results to 50 pages, encouraging customers to use filters and creating a more relevant, focused experience.

## Search behavior configuration

There's a set of settings that change the listing and sorting of products displayed in search results. In the following sections, you'll see the main definitions that affect search behavior.

### Defining searchable fields

This setting determines which product information is searchable. Based on this configuration, every search in the search bar checks the content of these fields to generate search results. Check the following table to understand which information is searchable by default and the other configuration options:

| Information | Configuration |
| - | - |
| <ul><li>Product name</li><li>Brand</li><li>Product ID (`ProductID`)</li><li>Product reference code (`ProductRefID`)</li><li>SKU ID (`SKUID`)</li><li>SKU reference code (`SKURefID`)</li><li>EAN</li></ul> | Information that is searchable by default in VTEX Intelligent Search. To remove any of this information, please contact our [Support](https://supporticket.vtex.com/support). |
| <ul><li>Product specifications</li><li>SKU specifications</li><li>Department</li><li>Category</li><li>Subcategory</li></ul> | To include the desired specifications as searchable fields, you must configure the **Searchable specifications** option in the VTEX Admin, under **Intelligent Search > Search Settings**.<br /><br /> For example, if a shirt doesn't have color information in the product name or SKU, by default, Intelligent Search won't identify this attribute in a search for "blue shirt", displaying shirts of different colors as results. However, if the color specification is configured as searchable, the search will likely return blue shirts at the top of the search results.<br /><br /> For more details about defining searchable specifications, see the [Search configuration](/en/docs/tutorials/search-configuration#general-settings) guide. Learn more about specifications in [Product and SKU specifications](/en/docs/tracks/specifications-concept-definition). |
| Manufacturer code (`ManufactureID`) | Contact our [Support](https://supporticket.vtex.com/support) to set these fields as searchable. |

Example: The "color" specification is set as searchable and the product was added with the name "Nike Total 90 Sneakers" and the color "black". If a customer searches for "Black Sneakers", the tool will return products that have the term "sneakers" and the color "black" at the top of search results.

You can include special characters (`-` and `/`) when searching for a product.

> ℹ️ You can enable symbol support in search, such as `®`, `@`, and `&`, by contacting [VTEX Support](https://supporticket.vtex.com/support). When this feature is enabled, these characters are ignored during indexing, allowing products with symbols in their names to be found even when customers leave those symbols out of their search queries. For example, the product `Brand® Multipurpose & Copier Bond Paper` can be found when customers search for `brand bond paper`.

> ⚠️ Choosing the search fields affects the [merchandising rule](/en/docs/tutorials/merchandising-rules) options, as only searchable fields can be used to configure the rules. For example, if you set only the **`SKUID`** field as searchable, you can't promote a **`ProductID`** or a **`ProductRefID`** using merchandising rules.

### Defining and sorting filter fields

In all search results, users can select filters. Some filters are available by default, but you can also create more filters to meet store needs. The display order is also customizable. Example: In a search results list, there can be filters for Price, Categories, and Brand.

### Configuring relevance

Relevance is the ordering principle of search results. In this section, you can assign weights and prioritize certain criteria in the Search Engine, such as popularity, release date, and promotions. The relevance of a product is determined by the combination of weights and priorities defined by each merchant.

_Example_: A merchant configured "promotion" to have greater relevance than other criteria. When a customer searches for "t-shirt", the tool might display the t-shirts on sale at the top of search results, depending on the weights assigned to other criteria.

For more information on how to customize the order of results to meet your store's needs, see [Relevance settings](/en/docs/tutorials/relevance-rules).

> ℹ️ When using Intelligent Search, two options define the sorting order of your collections. By using the `map=productClusterIds` command, you're setting the order of your collections to be the one pre-defined by the merchant, with its relevance criteria. If you choose to use `productClusterNames`, you're indicating that your collections should follow Intelligent Search's own relevance standards.

## Alternative ways to search

You can search by the ID of one or more items in the search bar or by adding search parameters (_query_) in the store URL.

### Partial match

By entering the exact first digits of the product ID (`ProductID`), product reference code (`ProductRefID`), SKU ID (`SKUID`), SKU reference code (`SKURefID`), or EAN in the search bar, Intelligent Search will partially match products and SKUs active in the store, adding them to the search results.

Example: If the product ID is `123456789` and you search for `123`, it will be listed in the search results. However, the product won't be displayed if the search is `234` and doesn't include any of the first ID numbers.

### URL

To search from your store URL, add search parameters (_query_) at the end of the store URL, respecting one of the following structures:

- Example for searching an item: `[account address]/[id type]:[id_1]?q=[id type]&map=ft`
- Example for searching a list: `[account address]/[id type]:[id_1];[id_2];[id_3]?q=[id type]:[id_1];[id_2];[id_3]&map=ft`

The possible value types for the ID type field are `product.id`, `sku.id`, `sku.ean`, `sku.reference`, or `id` (ProductID, ProductRefID, SKUID, SKURefID, and EAN). All searched IDs should be of the same type.

- **Search by SKU ID:**  `?q=sku.id:<id>` or `?q=sku:<id>`
- **Search by EAN:**  `?q=sku.ean:<id>`
- **Search by reference ID:**  `?q=sku.reference:<id>`
- **Search by slug:**  `?q=product.link:<link>`
- **Search by product ID:**  `?q=product:<id>` or `?q=product.id:<id>`
