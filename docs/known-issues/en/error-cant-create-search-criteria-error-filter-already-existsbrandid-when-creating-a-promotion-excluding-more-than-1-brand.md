---
title: "Error "can't create search criteria! error: filter already exists:"brandId"" when creating a promotion excluding more than 1 brand."
id: 6s6cvYpImIBEH0SLqE3J2U
status: PUBLISHED
createdAt: 2022-09-22T15:53:15.001Z
updatedAt: 2022-11-25T22:11:53.363Z
publishedAt: 2022-11-25T22:11:53.363Z
firstPublishedAt: 2022-09-22T15:53:16.277Z
contentType: knownIssue
productTeam: Pricing & Promotions
author: 2mXZkbi0oi061KicTExNjo
tag: Pricing & Promotions
slug: error-cant-create-search-criteria-error-filter-already-existsbrandid-when-creating-a-promotion-excluding-more-than-1-brand
kiStatus: Backlog
internalReference: 663698
---

## Summary


When creating a promotion the customer can decide to which items the promotion will be applied.

One of the possibilities is to select the items by brand, including or excluding.

When trying to exclude more than 1 brand the following error appears on the UI:
`can't create search criteria! error: filter already exists:"brandId"`

At the end the promotion will be created correctly and will be applying correctly on cartlinks, this error message is just a warning about the search on the catalog not being made as expected.




## Simulation



1. Create or enter a promotion;
2. Go to step 2 of the promotion and try to exclude more than 1 brand;
3. Verify the error message will appear.



## Workaround


Since this error has no side effects, except visual while saving the promotion, there is no need for workaround.

