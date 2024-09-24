---
title: 'Facets from the Segment affecting breadcrumbs, page title, and additional filters'
id: 3lBgcsjxiZxoDvnPhbMXgo
status: PUBLISHED
createdAt: 2024-06-27T22:57:42.875Z
updatedAt: 2024-06-27T22:57:43.965Z
publishedAt: 2024-06-27T22:57:43.965Z
firstPublishedAt: 2024-06-27T22:57:43.965Z
contentType: knownIssue
productTeam: Intelligent Search
author: 2mXZkbi0oi061KicTExNjo
tag: Intelligent Search
slugEN: facets-from-the-segment-affecting-breadcrumbs-page-title-and-additional-filters
locale: en
kiStatus: Backlog
internalReference: 1057254
---

## Summary


The "facets" property stored at the Segment/Session for a navigation context works to limit search results to predefined filters. For example, it is used by "B2B Organizations" to restrict what a user can see in the store.

These facets may affect the behavior for page titles and breadcrumbs by generating unexpected values that are not part of the filters applied on the page. All filters are considered while generating these values, not only the explicit filters from the page, which should ignore the facets from Segment.

It can also affect the page URL as you apply additional filters, which will be merged with the facets from Segment.


##

## Simulation



- Attach a user to a B2B Organization that is limited to some product collections (A);
- Create a landing page which shows a different collection (B);
- The breadcrumbs and page title may show the name of collection A instead of collection B
- Select additional search filters in the landing page, as a category or brand;
- Notice that the URL (and also breadcrumbs and page title) will also show collection A instead of staying limited to collection B.


##

## Workaround


N/A

