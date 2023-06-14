---
title: 'OrderForm API preventing the shipping method selection for the same item under different sellers'
id: 4dEfq7lNqTLF7SFIOaRsc2
status: PUBLISHED
createdAt: 2023-01-27T21:56:04.190Z
updatedAt: 2023-01-27T22:03:21.165Z
publishedAt: 2023-01-27T22:03:21.165Z
firstPublishedAt: 2023-01-27T21:56:04.914Z
contentType: knownIssue
productTeam: Checkout
author: 2mXZkbi0oi061KicTExNjo
tag: Checkout
slug: orderform-api-preventing-the-shipping-method-selection-for-the-same-item-under-different-sellers
kiStatus: Backlog
internalReference: 742139
---

## Summary


Although an orderForm support the same SKU to be added multiple times through different sellers, it doesn't allow the shipping method (SLA) to be individually selected – where the logistic for a seller is completely independent of others.

Despite that, after informing the address or choosing a shipping method available only for a specific occurrence of the SKU, the other occurrences will be under a different SLA without it being a problem. So the issue is restricted to the request selecting the SLA between items in this scenario or via orderForm simulation.


##

## Simulation


In a cart with the same item added more than once but through different sellers, try selecting their shipping methods (SLAs) via the API using different options for each. The same scenario can also be tried through the simulation API, declaring a "selectedSlaId". The API will refuse the action presenting the message "Same item cannot have more than one SLA selected".


##

## Workaround


N/A




