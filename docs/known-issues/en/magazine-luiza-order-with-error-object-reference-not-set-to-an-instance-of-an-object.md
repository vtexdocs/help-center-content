---
title: [Magazine Luiza] Order with error "Object reference not set to an instance of an object"
id: 72w2GWNOlosoOHhs1ip4dl
status: PUBLISHED
createdAt: 2023-03-23T20:11:55.897Z
updatedAt: 2023-03-23T20:11:56.534Z
publishedAt: 2023-03-23T20:11:56.534Z
firstPublishedAt: 2023-03-23T20:11:56.534Z
contentType: knownIssue
productTeam: Connections
author: 2mXZkbi0oi061KicTExNjo
tag: Connections
slug: magazine-luiza-order-with-error-object-reference-not-set-to-an-instance-of-an-object
kiStatus: Backlog
internalReference: 777298
---

## Summary


Some orders were not created in OMS+Bridge and in the log it shows error: `"Object reference not set to an instance of an object"`

Marketplace: Magazine Luiza
Product Root Cause: Orders
Impact:  happens with few requests/exceptions


##

## Simulation


It could even be an error in the customer's request, where some mandatory field was missing and apparently the flow didn't predict that it would come "null" in some field.

 ![](https://vtexhelp.zendesk.com/attachments/token/eAXF9lNpZblveDVQvGYdP8TXE/?name=image.png)


##

## Workaround


proceed with the direct order on the Marketplace




