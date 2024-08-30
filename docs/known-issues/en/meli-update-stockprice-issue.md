---
title: 'MELI Update Stock/Price issue'
id: 7LQ81vG5nsbBn4Wj7Z9VJe
status: PUBLISHED
createdAt: 2023-12-12T10:22:28.961Z
updatedAt: 2024-01-10T17:51:59.853Z
publishedAt: 2024-01-10T17:51:59.853Z
firstPublishedAt: 2023-12-12T10:22:29.656Z
contentType: knownIssue
productTeam: Connections
author: 2mXZkbi0oi061KicTExNjo
tag: Connections
slug: meli-update-stockprice-issue
locale: en
kiStatus: Fixed
internalReference: 939329
---

## Summary



We currently have a very specific scenario affecting few cases of SKUs not being able to update the stock on MELI.


##

## Simulation



What happens is that some cases the seller_custom_field which should be filled with the VTEX SKU, is actually blank, and so the integration is not able to update the MELI stock in this cases.


##

## Workaround


Fill the migration spreadsheet with this cases and send to product team to set our SKU inside seller_custom_field.





