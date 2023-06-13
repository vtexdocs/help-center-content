---
title: [Shopee] Failed to create product variations
id: 5IKAkqtm8eejg2IhzrCgSz
status: PUBLISHED
createdAt: 2022-10-25T16:29:19.572Z
updatedAt: 2023-02-07T12:56:37.721Z
publishedAt: 2023-02-07T12:56:37.721Z
firstPublishedAt: 2022-10-25T16:29:20.906Z
contentType: knownIssue
productTeam: Connections
author: 2mXZkbi0oi061KicTExNjo
tag: Connections
slug: shopee-failed-to-create-product-variations
kiStatus: Fixed
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

 ![](https://vtexhelp.zendesk.com/attachments/token/Avfj0Y3n0mu4RHD9oZfkdYcti/?name=image.png)



##

## Workaround


If resending the product does not resolve it, it's necessary to wait for analysis and investigation of this KI.

