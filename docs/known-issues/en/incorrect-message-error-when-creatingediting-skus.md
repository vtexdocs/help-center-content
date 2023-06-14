---
title: 'Incorrect message error when creating/editing SKUs'
id: 19tQzBRYyVSI1MW2STZNFf
status: PUBLISHED
createdAt: 2023-03-20T19:50:11.591Z
updatedAt: 2023-03-20T19:50:12.021Z
publishedAt: 2023-03-20T19:50:12.021Z
firstPublishedAt: 2023-03-20T19:50:12.021Z
contentType: knownIssue
productTeam: Catalog
author: 2mXZkbi0oi061KicTExNjo
tag: Catalog
slug: incorrect-message-error-when-creatingediting-skus
kiStatus: Backlog
internalReference: 774518
---

## Summary


In order to create or edit an SKU is necessary to fill in the required fields, such as shipment weight, height, width, and length. However, when we leave one of these fields without a valid value and save the SKU, Admin returns a message error about specifications, even when there are no required specifications to be filled.



##

## Simulation



- Go to Catalog Module
- Add a new product and save it to create a new SKU
- Complete all the fields, except for shipment information - which is required
- Save the SKU and note that 2 messages will pop up: "Invalid parameters" and "Specifications not entered Check tab"


##

## Workaround


There is no workaround




