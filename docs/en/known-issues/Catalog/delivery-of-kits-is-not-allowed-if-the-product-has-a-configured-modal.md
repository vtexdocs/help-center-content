---
title: "Delivery of kits is not allowed if the product has a configured modal"
id: 30tszbOaxDdBnw9zkKCK44
status: PUBLISHED
createdAt: 2025-04-07T20:53:57.169Z
updatedAt: 2025-04-07T20:53:58.151Z
publishedAt: 2025-04-07T20:53:58.151Z
firstPublishedAt: 2025-04-07T20:53:58.151Z
contentType: knownIssue
productTeam: Catalog
author: 2mXZkbi0oi061KicTExNjo
tag: Catalog
slugEN: delivery-of-kits-is-not-allowed-if-the-product-has-a-configured-modal
locale: en
kiStatus: Backlog
internalReference: 296045
---

## Summary



Currently the delivery of a kit is not allowed if the product has a configured modal.


##

## Simulation



1-Configure a carrier to accept only deliveries of a specific modal.

2-Configure this modal in a kit SKU and also in its component SKUs.

3-Try to make a purchase of this kit to be delivered by the carrier that has the modal.


##

## Workaround


Configure the shipping policy so that it also delivers undefined modals.

 ![](https://vtexhelp.zendesk.com/attachments/token/deeIRFGCxJEMdfXegOHTI8nuP/?name=inline923958570.png)
Obs: This workaround is only available if ALL components inside the KIT has the modal configured,





