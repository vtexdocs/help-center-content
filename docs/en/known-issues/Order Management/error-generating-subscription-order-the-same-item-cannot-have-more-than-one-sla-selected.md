---
title: "Error generating subscription order ''The same item cannot have more than one SLA selected'"
id: 2aBMa8ncalkqSm2s868i1q
status: PUBLISHED
createdAt: 2022-09-29T13:31:57.984Z
updatedAt: 2022-11-25T22:01:16.295Z
publishedAt: 2022-11-25T22:01:16.295Z
firstPublishedAt: 2022-09-29T13:32:01.838Z
contentType: knownIssue
productTeam: Order Management
author: 2mXZkbi0oi061KicTExNjo
tag: Order Management
slugEN: error-generating-subscription-order-the-same-item-cannot-have-more-than-one-sla-selected
locale: en
kiStatus: Backlog
internalReference: 658185
---

## Summary


In subscription order scenarios where the same purchase item ends up divided into different entries, such as the purchase of 10 units of the same item being presented as 7 units (A) and 3 units (B), the execution flow of the subscription cycle may eventually choose different delivery methods between item A and B, even if they are the same SKU.
In this situation, the error "The same item cannot have more than one SLA selected" will be generated.
This cross-selection can happen when evaluating which is the cheapest delivery method for each item (A and B, separately).



## Simulation


Simulating this scenario requires a very complex combination of variables between the systems involved in the purchase flow.



## Workaround


N/A

