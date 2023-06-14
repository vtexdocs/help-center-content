---
title: 'Adding a new address on Invoice Address returns null API results'
id: 43eiz4YORQv1u4yDahZdvC
status: PUBLISHED
createdAt: 2023-02-07T13:15:36.832Z
updatedAt: 2023-02-07T13:15:52.825Z
publishedAt: 2023-02-07T13:15:52.825Z
firstPublishedAt: 2023-02-07T13:15:37.293Z
contentType: knownIssue
productTeam: Checkout
author: 2mXZkbi0oi061KicTExNjo
tag: Checkout
slug: adding-a-new-address-on-invoice-address-returns-null-api-results
kiStatus: Backlog
internalReference: 748668
---

## Summary


When there is more than one address registered in the Profile System, there is a "null" request to the zip code service if you add a new address on "Invoice Address".


##

## Simulation



- Have more than 1 address registered in the Profile System;
- Select a pickup point;
- Click on "Deliver to another address" to add a new address on "Invoice Address" without selecting any other option.

The request was `/api/checkout/pub/postal-code/null/postalcodenumber`, so it returns the 500 error. Due to this return, it doesn't autocomplete the address using the zip code service.


##

## Workaround


Select an option already registered before adding a new address




