---
title: 'Matcher converting Height, Width, Weight and Length to 0.1'
id: j3rz875eWVHFMLYxcYsDL
status: PUBLISHED
createdAt: 2023-08-23T13:38:55.976Z
updatedAt: 2023-08-23T20:01:37.842Z
publishedAt: 2023-08-23T20:01:37.842Z
firstPublishedAt: 2023-08-23T13:38:58.327Z
contentType: knownIssue
productTeam: Marketplace
author: 2mXZkbi0oi061KicTExNjo
tag: Marketplace
slug: matcher-converting-height-width-weight-and-length-to-01
locale: en
kiStatus: Fixed
internalReference: 886168
---

## Summary


When the Matcher process the skus on the suggestions module of the marketplace the infos of Height, Width, Weight and Length are being set to 0.1 instead of respecting the values sent by the seller.


##

## Simulation



1. Seller sends the sku to marketplace with Height, Width, Weight and Length with normal values;
2. Sku gets to the marketplace and is processed by the matcher;
3. Check on the following API if the Matcher object has the fields Height, Width, Weight and Length set as 0.1
https://developers.vtex.com/docs/api-reference/marketplace-apis-suggestions#get-/suggestions/-sellerId-/-sellerSkuId-
 ![](https://vtexhelp.zendesk.com/attachments/token/vCdMBFKEJ0243C9Ew7PPFDgp3/?name=image.png)


##

## Workaround


N/A





