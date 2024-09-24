---
title: 'Ean field as string being ignored when approved on Received Skus'
id: 3ubVdtlt8ElWzQGFM9OTTq
status: PUBLISHED
createdAt: 2023-09-11T16:37:06.258Z
updatedAt: 2023-11-28T16:54:04.790Z
publishedAt: 2023-11-28T16:54:04.790Z
firstPublishedAt: 2023-09-11T16:37:07.098Z
contentType: knownIssue
productTeam: Marketplace
author: 2mXZkbi0oi061KicTExNjo
tag: Marketplace
slugEN: ean-field-as-string-being-ignored-when-approved-on-received-skus
locale: en
kiStatus: Backlog
internalReference: 897301
---

## Summary


The seller sends the sku with all fields declared on this article (https://developers.vtex.com/docs/api-reference/marketplace-apis-suggestions#put-/suggestions/-sellerId-/-sellerSkuId-) for the marketplace to approve on the Received Skus module.

The ean field is declared as string type on the above article. However, despite appearing on the Received Skus UI, is being ignored by the matcher backend system and also by the catalog module, meaning the sku is being created with this field empty.


##

## Simulation


1. Send a sku to the marketplace with the ean field set as string: `"ean": "123456"`
2. Approve the sku as a new product on the marketplace's Received Skus module;
3. Check that on the catalog this field is set as empty.

##

## Workaround


**Before this issue is fixed and the system is working according to our docs**, the format that is currently working is sending the ean field as an array:
`"ean": ["123456"]`

Another way is to set this field manually on the catalog side once the sku is approved.


