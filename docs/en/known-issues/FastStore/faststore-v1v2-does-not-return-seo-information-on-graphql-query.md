---
title: "Faststore V1/V2 does not return SEO information on Graphql query"
id: 4nZnX8sj9J90xtkNpYIgZ4
status: PUBLISHED
createdAt: 2023-11-01T17:08:35.090Z
updatedAt: 2025-05-12T14:03:41.681Z
publishedAt: 2025-05-12T14:03:41.681Z
firstPublishedAt: 2023-11-01T17:08:35.767Z
contentType: knownIssue
productTeam: FastStore
author: 2mXZkbi0oi061KicTExNjo
tag: FastStore
slugEN: faststore-v1v2-does-not-return-seo-information-on-graphql-query
locale: en
kiStatus: No Fix
internalReference: 929029
---

## Summary


We have a product query when accessing the Graphql playground to run queries on Faststore V1 and V2. The documentation states that the SEO field of that query should return the SEO information, but this is not happening.


##

## Simulation



- access your store using the Graphql playground
- run the product query with the SEO fields
-

compare with the SEO product information on the catalog, you'll see that the returned value will be the title and description from the product itself, not from the SEO field

You can also see this happening on the final domain when checking the SEO information on the elements tab.



##

## Workaround


You can retrieve the other fields from the StoreSEO by extending the GraphQL Schema, as the doc explains:
https://v1.faststore.dev/reference/api/objects/#storeseo
 ![](https://vtexhelp.zendesk.com/attachments/token/qtLb0Xc4mlmkq0AXngefRrPiF/?name=image.png)

But the `title` and `description` information will still present the issue.





