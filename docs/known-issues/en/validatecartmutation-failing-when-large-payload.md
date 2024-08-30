---
title: 'ValidateCartMutation failing when large payload'
id: 5YmPMVGsi92owcmICg3CY3
status: PUBLISHED
createdAt: 2024-02-21T15:23:44.054Z
updatedAt: 2024-02-21T15:23:44.919Z
publishedAt: 2024-02-21T15:23:44.919Z
firstPublishedAt: 2024-02-21T15:23:44.919Z
contentType: knownIssue
productTeam: FastStore
author: 2mXZkbi0oi061KicTExNjo
tag: FastStore
slug: validatecartmutation-failing-when-large-payload
locale: en
kiStatus: Backlog
internalReference: 985867
---

## Summary



When adding several products in minicart, depending on the information associated with those products, if we receive a payloadTooLarge error, the product will be added to the cart but will not pass to orderForm correctly


##

## Simulation




- Add products to the cart till you receive a 413 Payload Too Large error


##

## Workaround


N/A





