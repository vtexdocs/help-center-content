---
title: "Intelligent Search cleanup intermitently failing"
id: 1ujQaIwtRG523r5tl9oYw7
status: PUBLISHED
createdAt: 2025-05-14T00:25:14.564Z
updatedAt: 2025-05-14T00:26:17.257Z
publishedAt: 2025-05-14T00:26:17.257Z
firstPublishedAt: 2025-05-14T00:25:15.418Z
contentType: knownIssue
productTeam: Intelligent Search
author: 2mXZkbi0oi061KicTExNjo
tag: Intelligent Search
slugEN: intelligent-search-cleanup-intermitently-failing
locale: en
kiStatus: Backlog
internalReference: 1225644
---

## Summary


The full clean-up from the Catalog Indexer also triggers the cleaning of the Intelligent Search. This action is intermittently failing, especially for stores with a greater number of products.


##

## Simulation


As an intermittent issue, it can't always be reproduced.


- Trigger a full clean-up of the Catalog Indexer.
-

Watch the products count at the Indexing History admin page and/or the number of products using the Intelligent Search API.



##

## Workaround


Open a support ticket requesting manual action.




