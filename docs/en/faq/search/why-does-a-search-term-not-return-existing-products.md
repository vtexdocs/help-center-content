---
title: "Why doesn't a search term return available products?"
excerpt: "If Legacy Search rules do not explain the empty result, the term is likely on the engine's blocked-words list."
id: frequentlyAskedQuestions_6363
status: PUBLISHED
createdAt: 2017-04-27T22:22:33.606Z
updatedAt: 2020-11-27T19:39:37.145Z
publishedAt: 2020-04-20T15:06:29.554Z
firstPublishedAt: 2017-04-27T23:02:45.884Z
contentType: frequentlyAskedQuestion
productTeam: Search
author: authors_31
slugEN: why-does-a-search-term-not-return-existing-products
locale: en
legacySlug: why-does-a-search-term-not-return-existing-products
---

> ⚠️ VTEX has two search options: VTEX Search (Legacy) and VTEX Intelligent Search. This article refers to VTEX Search (Legacy). To learn more about VTEX Intelligent Search, see the [VTEX Intelligent Search](/en/tracks/vtex-intelligent-search--19wrbB7nEQcmwzDPl1l4Cb) track.

The article [How does VTEX Search (Legacy) work?](/en/docs/tutorials/how-does-vtex-search-legacy-work) explains the main rules the search engine uses to display and prioritize products based on a search term.

If your case does not match the scenarios in that article, the search term is likely on the blocked-words list of the VTEX Search (Legacy) engine.

Shoppers often include pronouns, articles, and adverbs in search queries. Some of these words are not useful for matching products in the catalog.

For example, if a shopper searches for "A pair of Nike sneakers", the engine treats "A" and "of" as unimportant and searches using "sneakers" and "Nike".

The VTEX Search (Legacy) engine uses a list of blocked (unimportant) words to optimize results, as in the example above.

If you need product terms that the engine might ignore, you can:

- Use a product specification and redirect the search term to the filter.
- Use a collection and redirect the search term to a landing page.
- Redirect the search term to a relevant search context (category, brand, or the product itself).

Learn how to set up the redirection in [URL Mapping (301 Redirect)](/en/docs/tutorials/url-mapping-301-redirect).
