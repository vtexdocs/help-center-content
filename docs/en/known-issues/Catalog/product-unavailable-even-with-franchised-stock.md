---
title: 'Product unavailable even with franchised stock'
id: 58KRJl4MFOaeb5KUYGmH8G
status: PUBLISHED
createdAt: 2022-01-25T12:17:33.680Z
updatedAt: 2022-11-25T21:44:25.997Z
publishedAt: 2022-11-25T21:44:25.997Z
firstPublishedAt: 2022-07-21T09:49:53.469Z
contentType: knownIssue
productTeam: Catalog
author: 2mXZkbi0oi061KicTExNjo
tag: Catalog
slug: product-unavailable-even-with-franchised-stock
locale: en
kiStatus: Backlog
internalReference: 404499
---

## Summary


If the product is out of stock in the marketplace, on any other regular sellers and the **show out of stock** flag is unchecked, the product will be displayed out of stock on the portal even though it has stock in franchises accounts. It is possible to add the product to the cart.

    Show out of stock? 

    - False -> 404
    - True -> regionalization -> check stocks from franchise accounts


## Simulation


Put stock in the franchise account
Set the flag **`Show out of stock`** as **`no`**
See the product not available on the front



## Workaround


Set **`Show out of stock`** as **`yes`** in the marketplace account

