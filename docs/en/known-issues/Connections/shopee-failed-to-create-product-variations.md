---
title: '[Shopee] Failed to create product variations'
id: 5IKAkqtm8eejg2IhzrCgSz
status: PUBLISHED
createdAt: 2022-10-25T16:29:19.572Z
updatedAt: 2024-02-16T20:24:45.182Z
publishedAt: 2024-02-16T20:24:45.182Z
firstPublishedAt: 2022-10-25T16:29:20.906Z
contentType: knownIssue
productTeam: Connections
author: 2mXZkbi0oi061KicTExNjo
tag: Connections
slugEN: shopee-failed-to-create-product-variations
locale: en
kiStatus: No Fix
internalReference: 685160
---

## Summary



Even with price and stock correctly registered in the VTEX catalog, some products have an error in the integration `Failed to create product variations. mpsku_model.InitTierVariationRequest.Model: []*mpsku_model.RequestTierVariationModel: mpsku_model.RequestTierVariationModel.OriginalPrice: readNumberAsString: invalid number, error found in #10 byte of`


##

## Simulation



**Marketplace:** Shopee
**Product Root Cause:** Catalog Integration
**Error:** Failed to create product variations. mpsku_model.InitTierVariationRequest.Model: []*mpsku_model.RequestTierVariationModel

Admin > Installed APP > Shopee > Manage Products > Product Sync Status

 ![](https://raw.githubusercontent.com/vtexdocs/help-center-content/refs/heads/main/docs/en/known-issues/Connections/shopee-failed-to-create-product-variations_1.png)



##

## Workaround


If resending the product does not resolve it, it's necessary to wait for analysis and investigation of this KI.

