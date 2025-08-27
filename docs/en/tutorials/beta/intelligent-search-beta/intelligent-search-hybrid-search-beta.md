---
title: 'Intelligent Search: Hybrid Search (Beta)'
id: 366JCdaoDVz8V3FFZZ2fUD
status: PUBLISHED
createdAt: 2025-06-13T14:11:56.694Z
updatedAt: 2025-06-27T20:31:06.145Z
publishedAt: 2025-06-27T20:31:06.145Z
firstPublishedAt: 2025-06-13T14:15:17.126Z
contentType: tutorial
productTeam: Marketing & Merchandising
author: 1malnhMX0vPThsaJaZMYm2
slugEN: intelligent-search-hybrid-search-beta
legacySlug: intelligent-search-hybrid-search-beta
locale: en
subcategoryId: 23WdCYqmn2V2Z7SDlc14DF
---

> ℹ️ This feature is in closed beta, and only participating customers can access it. If you're a VTEX client and want to adopt this feature for your business, please contact [Commercial Support](https://help.vtex.com/en/tracks/support-at-vtex--4AXsGdGHqExp9ZkiNq9eMy/3KQWGgkPOwbFTPfBxL7YwZ). Additional fees may apply. If you're not a VTEX client but are interested in this solution, please complete our [contact form](https://vtex.com/en-us/contact/).

The Intelligent Search hybrid search feature combines the precision of lexical techniques with the intelligence of semantic search models to provide a relevant and seamless experience that aligns with user intent.

This strategy improves product discovery, increases conversions, and reduces interaction friction, especially in large and varied catalogs.

## Key concepts

Hybrid search combines two key concepts:

* **Lexical search**: Is based on direct keyword match.  
* **Semantic search**: Focuses on interpreting the meaning and intent behind a query.

Both concepts are described in more detail in the following sections.

### Lexical search

The lexical layer of the search works based on a direct match between the query terms and the details that are indexed in the catalog — like product name, description, technical attributes, and others. This approach works well when the customer uses exact keywords or searches by product code.

**Example:**

* **Query:** `Nike Air Max 90 sneakers`  
* The lexical search only returns the products that have that name in the catalog.

### Semantic search

The semantic layer, based on **Natural Language Processing (NLP)** and **machine learning models**, interprets the meaning of words and the context in which they are used. It recognizes synonyms, relates similar terms, and identifies user intention even when the query doesn't mention exact words in the catalog.

**Example:**

* **Query**: `shoes for running a marathon`  
* The semantic search understands that the user is looking for shoes focused on long-distance performance, and prioritizes products tailored for endurance running, even if they don't have 'marathon' in the description.

**Query**: `clothes for cold weather workouts`

* **Lexical**: May not find a direct match with 'cold weather workouts'.  
* **Semantic**: Understands that the user is searching for sportswear with thermal protection, and prioritizes items like thermal pants and long-sleeve shirts.

## Hybrid search approach

The Intelligent Search hybrid search feature dynamically combines these two strategies. The platform uses semantic models trained for the retail context and enhances this interpretation with the established lexical structure of Intelligent Search.

The hybrid model considers:

* Structured fields in the catalog (lexical)  
* Relationships between terms and synonyms (semantic)  
* Search context and user behavior  
* Statistical relevance and machine learning

The result is a search system that provides results that are more aligned with what consumers really want to find, even when using natural or ambiguous language.

For example, a technology ecommerce website can get specific searches for 'SSD A400 480GB', where lexical search is ideal, or informal searches like 'best storage for gaming', where semantic search is better. Hybrid search handles both queries efficiently.

In practice, if a customer types '16GB memory', for example, the lexical part identifies the exact capacity (16 GB) while the semantic component understands that 'memory' may refer to both RAM and memory cards, and prioritizes both categories for the most relevant products based on previous user behavior.

## Advantages

The main advantages for consumer experience and store performance are:

* **Increased conversion:** Delivering more relevant results reduces product discovery time, which can accelerate purchase decisions.  
* **Natural language comprehension:** Customers can search using everyday language, including full questions, vague terms, or informal language. For example, a customer can search `what are the best hiking shoes?` and the search understands that they are looking for shoes with specific features, such as waterproof and good grip.  
* **Support for complex discovery cases:** Ideal for catalogs that have products with more subjective descriptions (example: fashion, beauty, home decor), where the exact attribute may not explicitly be present, but user intent can be inferred.
