---
title: "Field 'reference' always set as null"
id: 6Tq4zip0lfUm7vVJdwfZWx
status: PUBLISHED
createdAt: 2023-04-26T22:31:38.892Z
updatedAt: 2023-05-08T18:19:35.696Z
publishedAt: 2023-05-08T18:19:35.696Z
firstPublishedAt: 2023-04-26T22:31:39.458Z
contentType: knownIssue
productTeam: Checkout
author: 2mXZkbi0oi061KicTExNjo
tag: Checkout
slug: field-reference-always-set-as-null
locale: en
kiStatus: Backlog
internalReference: 797989
---

## Summary


The field `reference` from the pickup point's address is always set as null even though it's registered in the pickup point API.


##

## Simulation



- Register a pickup point via API, including the field `address.reference`;
- Add an item to the cart;
- Perform a Get Order and check the field `pickupPoints.reference`, it's null.


##

## Workaround


N/A




