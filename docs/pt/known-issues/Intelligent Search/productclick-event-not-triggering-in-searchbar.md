---
title: 'ProductClick event not triggering in searchbar'
id: Nk7Dkd4YoY5LXbxpWJIKz
status: PUBLISHED
createdAt: 2023-01-30T17:43:44.441Z
updatedAt: 2023-01-30T17:43:45.235Z
publishedAt: 2023-01-30T17:43:45.235Z
firstPublishedAt: 2023-01-30T17:43:45.235Z
contentType: knownIssue
productTeam: Intelligent Search
author: 2mXZkbi0oi061KicTExNjo
tag: Intelligent Search
slugEN: productclick-event-not-triggering-in-searchbar
locale: en
kiStatus: Backlog
internalReference: 742754
---

## Summary



ProductClick event is not being triggered in searchbar

https://github.com/vtex-apps/search/blob/8cf2cec70a2d6e1ac616343d07f10d75b45aa8ae/react/components/Autocomplete/components/TileList/TileList.tsx#L76

we should add productClick event the same as we have in product-summary block in productSummaryCustom:

https://github.com/vtex-apps/product-summary/blob/8ef1f2b397d35a03b2acaf448c0c70848600c4a5/react/ProductSummaryCustom.tsx

https://github.com/vtex-apps/product-summary/blob/45a6df2afeabd441d3c772b5ee1840206a8cf061/react/ProductSummaryList.tsx#L160-L174




##

## Simulation



Go to searchbar
Search for any term that has products
Click on the product
Check dataLayer event on console


##

## Workaround


No





