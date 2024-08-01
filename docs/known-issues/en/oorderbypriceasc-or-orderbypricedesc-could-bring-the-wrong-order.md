---
title: 'O=OrderByPriceASC (or OrderByPriceDESC) could bring the wrong order'
id: 2XCplZQutilKeD2bNnjYDx
status: PUBLISHED
createdAt: 2022-05-20T15:48:15.215Z
updatedAt: 2024-06-21T11:29:11.233Z
publishedAt: 2024-06-21T11:29:11.233Z
firstPublishedAt: 2022-05-20T15:48:16.089Z
contentType: knownIssue
productTeam: Portal
author: 2mXZkbi0oi061KicTExNjo
tag: Portal
slug: oorderbypriceasc-or-orderbypricedesc-could-bring-the-wrong-order
locale: en
kiStatus: Backlog
internalReference: 582861
---

## Summary


**O=OrderByPriceASC** (or **OrderByPriceDESC**) can use the wrong policy to order prices. Also, since the indexed price only has one decimal place, the second decimal place of the price will not be considered.

Additionally, the prices of non-comprehensive sellers are not considered in the sorting. As a result, regionalized stores on the Portal are unable to use the **orderByPrice** parameter.


##

## Simulation



- Enter more than one price on the product. Ex: two different list prices on different sellers
- Put page sorting by price (ex: O=OrderByPriceASC)
- See that the sorting is not in the order of the prices being displayed
or

- Search for two products with decimal prices. Ex: price 1 = 14.04 and price 2 = 14.01
- Put page sorting by price (ex: O=OrderByPriceASC)
- See that the sorting is not in the order of the prices being displayed


##

## Workaround


None on the Portal. However, the account can switch to Inteligente Search.





