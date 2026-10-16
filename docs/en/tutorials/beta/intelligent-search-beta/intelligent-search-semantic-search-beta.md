---
title: 'Intelligent Search: Semantic search (Beta)'
id: 366JCdaoDVz8V3FFZZ2fUD
status: PUBLISHED
createdAt: 2025-06-13T14:11:56.694Z
updatedAt: 2026-09-22T15:17:07.000Z
publishedAt: 2025-10-29T21:46:04.706Z
firstPublishedAt: 2025-06-13T14:15:17.126Z
contentType: tutorial
productTeam: Marketing & Merchandising
author: 1malnhMX0vPThsaJaZMYm2
slugEN: intelligent-search-semantic-search-beta
legacySlug: intelligent-search-hybrid-search-beta
locale: en
subcategoryId: 23WdCYqmn2V2Z7SDlc14DF
---

> ℹ️ Semantic search is available exclusively as part of the Search Optimizer Agent, an additional search optimization service.
> 
> This feature is in closed beta, and only participating customers can access it. If you're a VTEX client and want to adopt Search Optimizer Agent for your business, contact our [Commercial Support](https://help.vtex.com/en/docs/tracks/commercial-support). Additional fees may apply. If you're not a VTEX client but are interested in this solution, please complete our [contact form](https://vtex.com/en-us/contact/).

Intelligent Search combines the precision of lexical techniques with the intelligence of semantic search models to provide a relevant and seamless experience that aligns with user intent.

This strategy improves product discovery, increases conversions, and reduces friction in interactions, especially in large, different catalogs.

## Key concepts

Intelligent Search combines two key concepts:

* **Lexical search**: Based on direct keyword match.
* **Semantic search**: Interprets the meaning and intent behind a query.

Both concepts are described in more detail in the following sections.

### Lexical search

The lexical layer of the search works based on a direct match between the query terms and the details that are indexed in the catalog — like product name, description, technical attributes, and others. This approach works well when the customer uses exact keywords or searches by product code.

**Example:**

* **Query:** `Nike Air Max 90 sneakers`

   * The lexical search returns only products with that name in the catalog.

### Semantic search

The semantic layer, based on **Natural Language Processing (NLP)** and **machine learning models**, interprets the meaning of words and their context. It recognizes synonyms, relates similar terms, and identifies user intention even when the query doesn't mention exact words in the catalog.

**Example:**

* **Query**: `shoes for running a marathon`

   * The semantic search understands that the user is looking for shoes optimized for long-distance performance and prioritizes products tailored for endurance running, even if they don't include 'marathon' in the description.

* **Query**: `clothes for cold weather workouts`

   * **Lexical**: May not find a direct match with 'cold weather workouts'.
   * **Semantic**: Understands that the user is searching for sportswear with thermal protection and prioritizes items like thermal pants and long-sleeve shirts.

## Intelligent Search approach

The Intelligent Search dynamically combines these two strategies. The platform uses semantic models trained for the retail context and enhances this interpretation with the established lexical structure of Intelligent Search.

This model considers:

* Structured fields in the catalog (lexical)
* Relationships between terms and synonyms (semantic)
* Search context and user behavior
* Statistical relevance and machine learning

The result is a search system that provides results that are more aligned with what consumers really want to find, even when using natural or ambiguous language.

For example, a technology ecommerce website can get specific searches for 'SSD A400 480GB', where lexical search is ideal, or informal searches like 'best storage for gaming', where semantic search is better. Intelligent Search handles both queries efficiently.

In practice, if a customer types '16GB memory', for example, the lexical part identifies the exact capacity (16 GB) while the semantic component understands that 'memory' may refer to both RAM and memory cards, and prioritizes both categories for the most relevant products based on previous user behavior.

## Advantages

The main advantages for consumer experience and store performance are:

* **Increased conversion:** Delivering more relevant results reduces product discovery time, which can accelerate purchase decisions.
* **Natural language comprehension:** Customers can search using everyday language, including full questions, vague terms, or informal language. For example, a customer might search `what is the best hiking shoe?`, and the search understands they're looking for shoes with specific features, such as a lug sole and water resistance.
* **Support for complex discovery cases:** Ideal for catalogs that have products with more subjective descriptions (example: fashion, beauty, home decor), where the exact attribute may not explicitly be present, but user intent can be inferred.

## How to test semantic search

Before applying semantic search to all customers in your store, you can test it to compare results with and without this feature. The testing method depends on your store's architecture.

### Store Framework stores

For stores using [Store Framework](https://help.vtex.com/en/docs/tracks/frontend#store-framework), VTEX can create a test workspace and, if needed, configure an A/B test with VTEX's internal solution to compare results with and without Semantic search. To do this, contact [Support](https://help.vtex.com/en/docs/tutorials/how-does-vtex-support-work).

### Headless or FastStore stores

For Headless stores or those using [FastStore](https://help.vtex.com/en/docs/tracks/frontend#faststore), Semantic search can be tested by adding a parameter to the URL of the call to the [Intelligent Search API](https://developers.vtex.com/docs/api-reference/intelligent-search-api-v1#get-/product-search/-facets-), without changing any store configuration.

A *query string* is the part that appears after the `?` symbol at the end of a URL. It's used to send additional information to the server without changing the rest of the address, in the format `parameter=value`. When there's more than one parameter, they're separated by the `&` symbol.

To test Semantic search in a specific call, add the `semanticRatio` parameter to the *query string* of the search URL, in the format `?semanticRatio={weightValue}`. This parameter accepts values between `0` and `1`, which define how the search works:

* `0`: Uses only lexical search. This is also the default behavior when the parameter isn't provided.
* `1`: Uses only semantic search.
* `0.5`: Combines both models. Any value between `0` and `1` behaves like `0.5`.

**Example:**

* Without semantic search:
   `https://{accountName}.vtexcommercestable.com/api/intelligent-search/v1/product-search?query=baby%20formula`
* With semantic search:
   `https://{accountName}.vtexcommercestable.com/api/intelligent-search/v1/product-search?query=baby%20formula&semanticRatio=0.5`

Since the parameter is only added to the test call's URL, it doesn't change the store's configuration or affect other calls. This allows you to compare both versions side by side or use this URL in your own A/B testing tool to direct part of the traffic to the version with semantic search.

### Direct activation in production

You can also activate semantic search directly for all calls made to the API, without needing to include the `semanticRatio` parameter in each request. This activation must be requested from [Support](https://help.vtex.com/en/docs/tutorials/how-does-vtex-support-work), and since it applies the change to all customers in the production store, it isn't recommended for testing.
