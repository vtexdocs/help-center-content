---
title: 'OrderByBestDiscount returns the wrong sorting order'
id: 4w9qSs9jUTty4e77iD1bIT
status: PUBLISHED
createdAt: 2021-08-24T16:33:08.218Z
updatedAt: 2022-12-22T20:41:14.306Z
publishedAt: 2022-12-22T20:41:14.306Z
firstPublishedAt: 2021-09-03T14:53:03.469Z
contentType: knownIssue
productTeam: Marketing & Merchandising
author: 2mXZkbi0oi061KicTExNjo
tag: Portal (CMS)
slug: orderbybestdiscount-returns-the-wrong-sorting-order
locale: en
kiStatus: Backlog
internalReference: 
---

## Summary

The `OrderByBestDiscount` sorting is affected by the lowest [list price](https://help.vtex.com/en/tracks/prices-101--6f8pwCns3PJHqMvQSugNfP/3XcXp0r5WrJvogB8KIX4Kx#list-price) and [base price](https://help.vtex.com/en/tracks/prices-101--6f8pwCns3PJHqMvQSugNfP/3XcXp0r5WrJvogB8KIX4Kx) among all available trade policies. 

For more sorting-related errors, see [this documentation](https://help.vtex.com/pt/known-issues/problema-ordenacao-produtos-vitrine--7JlXcIcicgQwkOkCuce4Ow#).

## Simulation

1. Configure at least two [trade policies listed](https://help.vtex.com/en/tutorial/creating-a-sales-policy--563tbcL0TYKEKeOY4IAgAE) in your store.
2. Create a [base price](https://help.vtex.com/en/tracks/prices-101--6f8pwCns3PJHqMvQSugNfP/3XcXp0r5WrJvogB8KIX4Kx) for a SKU.
3. Create a [list price](https://help.vtex.com/en/tracks/prices-101--6f8pwCns3PJHqMvQSugNfP/3XcXp0r5WrJvogB8KIX4Kx#list-price) for the same SKU.
4. Configure the `<vtex.cmc:searchResult/>` control on the product page.

## Workaround

There is no workaround in the Portal. However, you can add [VTEX Intelligent Search](https://help.vtex.com/tracks/vtex-intelligent-search--19wrbB7nEQcmwzDPl1l4Cb/3qgT47zY08biLP3d5os3DG#) to your store.

