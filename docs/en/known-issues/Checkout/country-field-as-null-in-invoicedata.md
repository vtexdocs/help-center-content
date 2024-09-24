---
title: 'Country field as null in invoiceData'
id: 6TbzOvnKw5Uhcr1C5Jrneb
status: PUBLISHED
createdAt: 2023-12-13T15:53:26.073Z
updatedAt: 2023-12-19T21:22:09.038Z
publishedAt: 2023-12-19T21:22:09.038Z
firstPublishedAt: 2023-12-13T15:53:26.800Z
contentType: knownIssue
productTeam: Checkout
author: 2mXZkbi0oi061KicTExNjo
tag: Checkout
slugEN: country-field-as-null-in-invoicedata
locale: en
kiStatus: Fixed
internalReference: 382175
---

## Summary


Country field in invoiceData can be null if sent via API or there is an invoice address in the Profile System with the country as null, so orders will be created with incomplete data in invoiceData.


##

## Simulation



- Assemble a cart with items;
- Sends the invoiceData without the country field filled via API;
- Finish the purchase.


##

## Workaround


N/A



