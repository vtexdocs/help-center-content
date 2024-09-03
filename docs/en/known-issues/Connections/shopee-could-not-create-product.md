---
title: '[Shopee] Could not create product.'
id: 4h5FLGm6vI7VPn48agVX6X
status: PUBLISHED
createdAt: 2022-10-25T16:14:49.143Z
updatedAt: 2023-02-07T12:57:43.870Z
publishedAt: 2023-02-07T12:57:43.870Z
firstPublishedAt: 2022-10-25T16:14:50.455Z
contentType: knownIssue
productTeam: Connections
author: 2mXZkbi0oi061KicTExNjo
tag: Connections
slug: shopee-could-not-create-product
locale: en
kiStatus: Fixed
internalReference: 685149
---

## Summary



_**Update correct description:**_ Even with price and stock correctly registered in the VTEX catalog, some products have an error
in the integration `Could not create product. {"error":"product.error_param","message":"mpsku_item.AddItemRequest.SellerStock: []*openapiv2_common.StockByLocation: decode slice: expect [ or n, but found 5, error found in #10 byte of ...|r_stock\":56,\"logisti|..., bigger context ...|age_width\":9},\"item_sku\":\"104028\",\"seller_stock\":56,\"logistic_info\":[{\"enabled\":true,\"logistic_id\":9|...","request_id":"2bd1150a865d26c243f465152084b1b6"} `


##

## Simulation



**Marketplace:** Shopee
**Product Root Cause:** Catalog Integration
**Error:** Could not create product {"error":"product.error_param","message":"mpsku_item.AddItemRequest.SellerStock: []*openapiv2_common.StockByLocation: decode slice: expect

Admin > Installed APP > Shopee > Manage Products > Product Sync Status

 ![](https://vtexhelp.zendesk.com/attachments/token/t5CjjlTerPxIk72GBrQXTbuzh/?name=image.png)



##

## Workaround


If resending the product does not resolve it, it's necessary to wait for analysis and investigation of this KI.

