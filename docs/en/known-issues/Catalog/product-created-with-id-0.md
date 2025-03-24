---
title: 'Product Created with ID = 0.'
id: 5eMPxXAxxdJUKWMi1i8tWl
status: PUBLISHED
createdAt: 2022-05-04T15:30:22.045Z
updatedAt: 2022-11-25T21:45:57.621Z
publishedAt: 2022-11-25T21:45:57.621Z
firstPublishedAt: 2022-05-04T15:30:22.868Z
contentType: knownIssue
productTeam: Catalog
author: 2mXZkbi0oi061KicTExNjo
tag: Catalog
slugEN: product-created-with-id-0
locale: en
kiStatus: Backlog
internalReference: 335840
---

## Summary


It is possible to create products with ID = 0 if they use our API or WebService.

The product with ID = 0 will never index and will break the flow to create new products using the interface or using suggestions.



## Simulation


- Create a product with ID = 0 using API or web service.



## Workaround


To correct the flow of new products creation, the user should create another product using API or WebService but this time, using a valid ID. The next product created by interface or suggestion will be created correct.

