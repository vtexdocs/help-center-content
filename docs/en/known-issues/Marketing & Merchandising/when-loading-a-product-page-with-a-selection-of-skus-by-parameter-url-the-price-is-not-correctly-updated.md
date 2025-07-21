---
title: "When loading a product page with a selection of SKUs by parameter (URL), the price is not correctly updated"
id: 4PAYx8WD2MIce8YMAaK2yk
status: PUBLISHED
createdAt: 2017-08-17T00:24:35.581Z
updatedAt: 2022-12-22T20:45:30.700Z
publishedAt: 2022-12-22T20:45:30.700Z
firstPublishedAt: 2017-08-17T00:43:47.906Z
contentType: knownIssue
productTeam: Marketing & Merchandising
author: 2mXZkbi0oi061KicTExNjo
tag: Portal (CMS)
slugEN: when-loading-a-product-page-with-a-selection-of-skus-by-parameter-url-the-price-is-not-correctly-updated
locale: en
kiStatus: Backlog
internalReference: 
---

## Summary

When you access a product page with a change (more than one SKU) with the querystring parameter "idsku={{idSku}}", the system marks the SKU as selected (in the skuRichSelection and skuSelection control). 

However if the SKU selected (from the parameter) is unavailable (out of stock / not deliverable), when the user selects another available SKU in the SKU selector, price details are not shown.

![Price not updated on selection of SKU](https://raw.githubusercontent.com/vtexdocs/help-center-content/refs/heads/main/docs/en/known-issues/Marketing%20&%20Merchandising/when-loading-a-product-page-with-a-selection-of-skus-by-parameter-url-the-price-is-not-correctly-updated_1.gif)

## Simulation

1. Access the page of a product with a change in SKU, supplying the parameter "idsku" in the URL (QueryString). Select an unavailable SKU.
2. In the SKU selection control (`skuSelection` or `skuRichSelection`), select another available SKU.
3. The price of this second SKU will not be rendered correctly.


## Workaround

1. Create an SKU selection control using JavaScript (without using our native control).
2. Never use selection by parameter (querystring) for an unavailable SKU.

