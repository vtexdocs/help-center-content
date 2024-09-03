---
title: "SKU variations doesn't return in the PLP"
id: 6AOmkZe06SmXpVqwQqTZdp
status: PUBLISHED
createdAt: 2022-10-19T12:20:41.544Z
updatedAt: 2022-11-25T21:57:22.673Z
publishedAt: 2022-11-25T21:57:22.673Z
firstPublishedAt: 2022-10-19T12:20:42.317Z
contentType: knownIssue
productTeam: Intelligent Search
author: 2mXZkbi0oi061KicTExNjo
tag: Intelligent Search
slug: sku-variations-doesnt-return-in-the-plp
locale: en
kiStatus: Backlog
internalReference: 569563
---

## Summary


The presentation of SKU variations in the PLP is limited to the variations available regardless of the skusFilter prop setting. According to our analysis, search-graphql is not delivering all variations as per the API return, so the ProductContextProvider does not receive all variations.



## Simulation


- Access the PLP and find a product that has some variations that are not available;
- Check if the components that perform the SKU filtering are correctly configured with the skusFilter prop, with the value “ALL";
- Access the PDP of the product in question and view all variations returning in the ProductContextProvider



## Workaround


N/A

