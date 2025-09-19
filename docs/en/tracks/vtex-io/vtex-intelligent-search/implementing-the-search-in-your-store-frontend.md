---
title: 'Implementing the search in your store frontend'
id: 9BRHYNfuS6bP4WG4pOmgb
status: PUBLISHED
createdAt: 2024-09-06T20:20:32.084Z
updatedAt: 2024-09-06T20:26:56.567Z
publishedAt: 2024-09-06T20:26:56.567Z
firstPublishedAt: 2024-09-06T20:26:56.567Z
contentType: trackArticle
productTeam: Marketing & Merchandising
slugEN: implementing-the-search-in-your-store-frontend
locale: en
trackId: 19wrbB7nEQcmwzDPl1l4Cb
trackSlugEN: vtex-intelligent-search
order: 4
---

To start using the search features, you need to add Intelligent Search components to your store's frontend based on the technology used to build your store: Store Framework or FastStore.

Contact your store's developer team to customize the frontend using the technology-specific components listed below.

> ℹ️ This step does not apply to headless implementation scenarios, in which VTEX does not provide the frontend technology. In these cases, you will need to implement the sending of search events. For more details, see [VTEX Intelligent Search Events API - Headless](https://developers.vtex.com/docs/api-reference/intelligent-search-events-api-headless).

## Store Framework

If your store was developed in the [Store Framework](https://developers.vtex.com/docs/guides/store-framework), use the components below to implement the search:

| Component | Description |
| :---- | :---- |
| [Search Result](https://developers.vtex.com/docs/guides/vtex-search-result)  | Processes the results obtained by the Intelligent Search API and displays them to users. This component exports all the store blocks expected on a search results page, such as filters and the product gallery. |
| [Search Bar](https://developers.vtex.com/docs/apps/vtex.store-components/SearchBar) | Displays a search bar and shows the corresponding products. |
| [Search](https://developers.vtex.com/docs/apps/vtex.search) | Provides interface elements that enhance the search experience, such as the autocomplete feature and other optional blocks. |
| ↪ [Autocomplete](https://developers.vtex.com/docs/apps/vtex.search/Autocomplete) | Suggests results as the user types. It displays previous search results based on current and previous searches, presented in four lists: Last searches. Search suggestions. Product suggestions. Most searched terms. Learn more about the behavior of this component in the [Autocomplete](/pt/tutorial/autocomplete--6qhP0ZQ4JqUBdgFnbnxS4a) guide. |
| ↪ [Suggestions](https://developers.vtex.com/docs/apps/vtex.search/suggestions) | Suggests search terms similar to the current one. |
| ↪ [Banner](https://developers.vtex.com/docs/apps/vtex.search/banner) | Displays banners on the customer's search results page, depending on the search context. |
| ↪ [DidYouMean](https://developers.vtex.com/docs/apps/vtex.search/didyoumean) | Suggests a possible misspelling correction for the current search. |

For more information about the available components, see the [Getting started guide for developers on Search](https://developers.vtex.com/docs/guides/search-overview).

## FastStore

If your store was developed using [FastStore](https://developers.vtex.com/docs/guides/faststore), use the components described in the [Search](https://developers.vtex.com/docs/guides/faststore/features-search) guide in the FastStore documentation to implement Intelligent Search.
