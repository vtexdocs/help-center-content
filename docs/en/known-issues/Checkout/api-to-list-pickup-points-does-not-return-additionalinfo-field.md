---
title: 'API to list pickup points does not return additionalInfo field'
id: 5YY5srSA2ZRiOSZiMY9UF9
status: PUBLISHED
createdAt: 2022-09-02T12:09:09.980Z
updatedAt: 2024-02-16T20:24:50.684Z
publishedAt: 2024-02-16T20:24:50.684Z
firstPublishedAt: 2022-09-02T12:09:10.777Z
contentType: knownIssue
productTeam: Checkout
author: 2mXZkbi0oi061KicTExNjo
tag: Checkout
slugEN: api-to-list-pickup-points-does-not-return-additionalinfo-field
locale: en
kiStatus: No Fix
internalReference: 650714
---

## Summary


Our API to list pickup points by location is always returning `null ` in the `additionalInfo` field. However, as this data normally comes from the logistics API then this data is present in the orderForm when placing an order at checkout.



## Simulation


Firstly, create a pickup point in the store admin and fill in the additional information field (pickup instructions and tags). After that, perform a call to our API which lists the pickup points by location and there you can see this field with `null`.



## Workaround


No workaround available.

