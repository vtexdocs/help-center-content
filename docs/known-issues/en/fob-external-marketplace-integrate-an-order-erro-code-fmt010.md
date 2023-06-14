---
title: 'FOB External Marketplace integrate an order (Erro code: "FMT010")'
id: 3qzV4zJRkPIwQnAZuK5dWu
status: PUBLISHED
createdAt: 2022-02-25T16:33:49.641Z
updatedAt: 2022-11-25T22:00:10.646Z
publishedAt: 2022-11-25T22:00:10.646Z
firstPublishedAt: 2022-02-25T16:33:50.398Z
contentType: knownIssue
productTeam: Logistics
author: 2mXZkbi0oi061KicTExNjo
tag: Logistics
slug: fob-external-marketplace-integrate-an-order-erro-code-fmt010
locale: en
kiStatus: Backlog
internalReference: 532377
---

## Summary


External Marketplace (partner) when trying to integrate FOB orders are getting the error:
`"code": "FMT010",`
"message": "The selected SLA for item <Description_SKU_Id> is not available"

What is FOB, follow documentation with the description:
https://help.vtex.com/en/tutorial/como-funciona-o-frete-when-o-marketplace-faz-a-entrega--EY1l6tYW3IUquwwwcQqwQ?&utm_source=autocomplete




## Simulation


It is possible to perform the simulation when trying to integrate with an (external) partner, with a Shipping Policy "Delivery" enabled, we will be successful, but when disabling this Shipping Policy we will have the error: "code": "FMT010".




## Workaround


For this case we have a Workaround which is the need to configure a Shipping Policy "Delivery".

