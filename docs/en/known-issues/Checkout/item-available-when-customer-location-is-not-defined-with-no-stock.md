---
title: 'Item available when customer location is not defined with no stock'
id: 7vDywP0WtfpJ4bCiNkXNfw
status: PUBLISHED
createdAt: 2024-07-30T22:51:30.425Z
updatedAt: 2024-07-30T22:54:29.056Z
publishedAt: 2024-07-30T22:54:29.056Z
firstPublishedAt: 2024-07-30T22:51:31.764Z
contentType: knownIssue
productTeam: Checkout
author: 2mXZkbi0oi061KicTExNjo
tag: Checkout
slugEN: item-available-when-customer-location-is-not-defined-with-no-stock
locale: en
kiStatus: Backlog
internalReference: 1073363
---

## Summary


When customer location is not defined, items appear available even when no stock is available and no seller white label is comprehensive. This happens only if the SKU has stock in the white label seller in a warehouse associated with a different sales channel than the one registered in the seller's fulfillment endpoint.


##

## Simulation



- No stock for seller 1;
- No comprehensive seller configured;
- Stock in a white label seller in a different sales channel than fulfillment endpoint, for example:
Fulfillment endpoint with sc=1;
Stock in the seller for sc=2.


##

## Workaround


N/A




