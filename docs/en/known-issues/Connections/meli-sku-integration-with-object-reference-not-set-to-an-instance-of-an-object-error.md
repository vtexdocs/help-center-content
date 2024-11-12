---
title: "[Meli] SKU integration with 'Object reference not set to an instance of an object' error."
id: 3GNnAidwvASTP223ncqsiV
status: PUBLISHED
createdAt: 2022-12-07T11:59:25.793Z
updatedAt: 2022-12-07T11:59:26.634Z
publishedAt: 2022-12-07T11:59:26.634Z
firstPublishedAt: 2022-12-07T11:59:26.634Z
contentType: knownIssue
productTeam: Connections
author: 2mXZkbi0oi061KicTExNjo
tag: Connections
slugEN: meli-sku-integration-with-object-reference-not-set-to-an-instance-of-an-object-error
locale: en
kiStatus: Fixed
internalReference: 657515
---

## Summary


Some skus in the Mercado Livre are logging error: "Object reference not set to an instance of an object".


##

## Simulation



 ![](https://vtexhelp.zendesk.com/attachments/token/ZGOJZmpO93pL3HqOVp0dDmzKh/?name=image.png)

_**Validations and tests:**_
- Sku isn't registered in Meli;
- FFT simulation with debugger;
- CHK simulation;
- I re-indexed the sku;
- I searched the log for "Object reference not set to an instance of an object"


##

## Workaround


n/a

