---
title: MELI integration missing BillingAddress
id: 7xYni5vYpSn6bicq4e6f2K
status: PUBLISHED
createdAt: 2023-03-15T13:06:41.866Z
updatedAt: 2023-03-15T13:06:42.285Z
publishedAt: 2023-03-15T13:06:42.285Z
firstPublishedAt: 2023-03-15T13:06:42.285Z
contentType: knownIssue
productTeam: Connections
author: 2mXZkbi0oi061KicTExNjo
tag: Connections
slug: meli-integration-missing-billingaddress
kiStatus: Backlog
internalReference: 771418
---

## Summary



Currently in our native Mercado Livre integration, we are not bringing the BillingAddress provided by MELI. Some sellers need that information inside the OMS Get Orders, in order to send the correct values to MELI in the invoice flow.


##

## Simulation



Inside OMS GET Order we are currently only bringing the shippingAddress, and not the BillingAddress, this can be seen inside the GET Order API


##

## Workaround


n/a





