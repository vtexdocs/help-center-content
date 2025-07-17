---
title: "Kit Creation API is not Calculating Component Prices"
id: 3yyIEv6o3CjIbUg4KoLOWT
status: PUBLISHED
createdAt: 2023-03-28T16:34:55.491Z
updatedAt: 2024-04-02T18:36:44.624Z
publishedAt: 2024-04-02T18:36:44.624Z
firstPublishedAt: 2023-03-28T16:34:55.990Z
contentType: knownIssue
productTeam: Catalog
author: 2mXZkbi0oi061KicTExNjo
tag: Catalog
slugEN: kit-creation-api-is-not-calculating-component-prices
locale: en
kiStatus: Backlog
internalReference: 739693
---

## Summary


Currently, the insert KIT API payload has a format requesting the components that this kit consists of and its according quantities and prices.

The expected price of a KIT should be a ponderated sum of its component prices * its needed quantities to compose the kit.

For instance, if I have a KIT which is:

Component (A) --> $10, 2 units
Component (B) --> $25, 1 unit

The kit Price should be: 10*2 + 25 === 45.

This is what happens on the KIT UI SkuKit.aspx.

However, the API https://developers.vtex.com/docs/api-reference/catalog-api#post-/api/catalog/pvt/stockkeepingunitkit is not making such price updates for components other than the 1st one added.



##

## Simulation


Create a kit using the following API with a component with a quantity of 2 or more https://developers.vtex.com/docs/api-reference/catalog-api#post-/api/catalog/pvt/stockkeepingunitkit and then check its price on the pricing module UI.





##

## Workaround


Insert the final price of the kit directly via pricing API.

