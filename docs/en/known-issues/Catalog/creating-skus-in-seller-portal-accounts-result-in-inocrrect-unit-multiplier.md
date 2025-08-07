---
title: "Creating SKUs in seller portal accounts result in inocrrect unit multiplier"
id: 3PqHY1apthTNSxLcSAfQof
status: PUBLISHED
createdAt: 2025-02-26T13:53:02.321Z
updatedAt: 2025-02-26T13:53:03.341Z
publishedAt: 2025-02-26T13:53:03.341Z
firstPublishedAt: 2025-02-26T13:53:03.341Z
contentType: knownIssue
productTeam: Catalog
author: 2mXZkbi0oi061KicTExNjo
tag: Catalog
slugEN: creating-skus-in-seller-portal-accounts-result-in-inocrrect-unit-multiplier
locale: en
kiStatus: Backlog
internalReference: 1186329
---

## Summary


Currently, when using a "seller portal" type of VTEX account, when an user creates an SKU, its unit multiplier is always set to 1, regardless of the initially inserted value, when using the admin's UI.


##

## Simulation


1 - Using a seller portal account, create a sku
2 - In the sku's setting, insert any number, aside from 1, in the unit multiplier field
3 - Create the sku, hit save
4 - The unit multiplier will have been overwritten to 1


##

## Workaround


After the incorrect creating, update the unit multiplier field to the desired value.





