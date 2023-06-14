---
title: Product Highlights doesn't work into a product list
id: 7lh3YMj55vQvs3EEQFUas1
status: PUBLISHED
createdAt: 2022-03-21T17:34:16.526Z
updatedAt: 2022-11-25T21:58:31.156Z
publishedAt: 2022-11-25T21:58:31.156Z
firstPublishedAt: 2022-03-21T17:34:17.170Z
contentType: knownIssue
productTeam: Intelligent Search
author: 2mXZkbi0oi061KicTExNjo
tag: Intelligent Search
slug: product-highlights-doesnt-work-into-a-product-list
kiStatus: Backlog
internalReference: 546844
---

## Summary


When there is a promotion with highlight enabled and the product, which is included in this promotion, is inside a list, such as a shelf, the badge that informs the promotion is not displayed.

Product Highlight component: https://developers.vtex.com/vtex-developer-docs/docs/vtex-product-highlights



## Simulation


Create a featured-enabled promotion and insert a product, included in the promotion, into a list context within a page.



## Workaround


Create a collection with the promotion name and enable the flag Add collection tag;
Add the Product Highlight in the list context with type: collection;

Creating Collections: https://help.vtex.com/tutorial/creating-collections-beta--yJBHqNMViOAnnnq4fyOye

