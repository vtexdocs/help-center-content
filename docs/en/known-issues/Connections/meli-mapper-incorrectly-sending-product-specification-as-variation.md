---
title: "MELI Mapper incorrectly sending product specification as variation"
id: 6b49pUUxL3B3RtUWofLjL8
status: PUBLISHED
createdAt: 2023-06-27T11:20:49.475Z
updatedAt: 2023-06-27T11:20:50.484Z
publishedAt: 2023-06-27T11:20:50.484Z
firstPublishedAt: 2023-06-27T11:20:50.484Z
contentType: knownIssue
productTeam: Connections
author: 2mXZkbi0oi061KicTExNjo
tag: Connections
slugEN: meli-mapper-incorrectly-sending-product-specification-as-variation
locale: en
kiStatus: Backlog
internalReference: 851021
---

## Summary



We currently have an issue in MELI Mapper feature, which we decide to send a SKU as variation based on MELI's category attributes, and not based on what seller has mapped in VTEX, which means a product specification mapped in VTEX can be sent as variation to MELI.


##

## Simulation



Inside the mapper feature whenever the seller mapped an attribute that accepts variation in MELI it will be sent as variation, even if the seller mapped inside the product specification.


##

## Workaround


n/a




