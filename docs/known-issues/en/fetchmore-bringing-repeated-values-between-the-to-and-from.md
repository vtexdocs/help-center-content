---
title: FetchMore bringing repeated values between the to and from
id: 1Vx0YekKCDaf8t6hocU1iv
status: PUBLISHED
createdAt: 2023-05-31T16:39:58.224Z
updatedAt: 2023-05-31T16:39:58.728Z
publishedAt: 2023-05-31T16:39:58.728Z
firstPublishedAt: 2023-05-31T16:39:58.728Z
contentType: knownIssue
productTeam: Intelligent Search
author: 2mXZkbi0oi061KicTExNjo
tag: Intelligent Search
slug: fetchmore-bringing-repeated-values-between-the-to-and-from
kiStatus: Scheduled
internalReference: 835396
---

## Summary


The fetchMore function is bringing between the first and the second page some duplicated values and this causes the page display repeatedly some of the products.


##

## Simulation



In some accounts the Button that Fetches more products is bringing repeated values, this happens because the component passes 12 items (0 to 11) and the query made on GraphQL considers 18 products so 6 products may be shown repeatedly.

The show more is using different infos to bring the number of products to the screen.


##

## Workaround


Is there a workaround for this bug? If yes, describe it here. If not, write "N/A" or "There is no workaround available.". Do not remove this section if there is no workaround, please.





