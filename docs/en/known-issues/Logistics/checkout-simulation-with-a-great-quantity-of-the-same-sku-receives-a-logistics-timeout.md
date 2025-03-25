---
title: 'Checkout simulation with a great quantity of the same sku receives a Logistics timeout'
id: 753MDZbcyN9BTHAaSTpOlY
status: PUBLISHED
createdAt: 2024-06-18T12:42:44.404Z
updatedAt: 2024-06-18T12:42:45.419Z
publishedAt: 2024-06-18T12:42:45.419Z
firstPublishedAt: 2024-06-18T12:42:45.419Z
contentType: knownIssue
productTeam: Logistics
author: 2mXZkbi0oi061KicTExNjo
tag: Logistics
slugEN: checkout-simulation-with-a-great-quantity-of-the-same-sku-receives-a-logistics-timeout
locale: en
kiStatus: No Fix
internalReference: 330775
---

## Summary


We have an error in the Logistics service when trying to simulate a purchase with thousands of units of the same SKU. That error happens because the request to split the package takes too long.

The error detail in the API is: "The operation was canceled."


##

## Simulation



1. Try to make a **Checkout Simulation** or a simulation in the **Shopping Cart** with thousands of units of the same SKU (like 50k)
2. Review the details in the response of the API, and you probably see an error when processing that request (**timeout**)


##

## Workaround


We recommend increasing the carrier's package limits to accommodate the units in a single package. It would provide a faster request and would not return a timeout.






