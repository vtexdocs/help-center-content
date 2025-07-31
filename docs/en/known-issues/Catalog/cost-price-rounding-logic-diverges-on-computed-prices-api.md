---
title: "Cost Price Rounding Logic diverges on Computed Prices API"
id: 744fWEh7fgMHwvidFEhlV
status: PUBLISHED
createdAt: 2023-06-12T17:15:06.190Z
updatedAt: 2023-06-12T17:15:06.890Z
publishedAt: 2023-06-12T17:15:06.890Z
firstPublishedAt: 2023-06-12T17:15:06.890Z
contentType: knownIssue
productTeam: Catalog
author: 2mXZkbi0oi061KicTExNjo
tag: Catalog
slugEN: cost-price-rounding-logic-diverges-on-computed-prices-api
locale: en
kiStatus: Backlog
internalReference: 842336
---

## Summary


Currently, the computed price API has a prop named 'cost price' that on specific scenarios might show a 1 cent difference between its value on the UI and the computed prices API https://developers.vtex.com/docs/api-reference/pricing-api#get-/pricing/prices/-itemId-/computed/-priceTableId-


##

## Simulation


Set a product with a cost price of 67.82 and no markup.

Check the pricing UI and the response from this API, which should deliver:

 ![](https://vtexhelp.zendesk.com/attachments/token/r33X4C7mwiOwq9GkcB72ngCur/?name=image.png)

Even though the correct value is 67.82


##

## Workaround


Setting fixed prices or a price rounding fixes it.





