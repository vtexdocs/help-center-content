---
title: '<vtex.cmc ProductGifts/> does not work before acessing checkout'
id: 3blfXfhPvY2cNEzBYGEmAo
status: PUBLISHED
createdAt: 2024-05-08T17:11:51.770Z
updatedAt: 2024-05-08T17:11:52.715Z
publishedAt: 2024-05-08T17:11:52.715Z
firstPublishedAt: 2024-05-08T17:11:52.715Z
contentType: knownIssue
productTeam: Catalog
author: 2mXZkbi0oi061KicTExNjo
tag: Catalog
slug: vtexcmc-productgifts-does-not-work-before-acessing-checkout
locale: en
kiStatus: Backlog
internalReference: 1029719
---

## Summary


Currenlty, the <vtex.cmc ProductGifts> legacy controller doesn't load the expected gifts before an user first accesses a store's checkout.

In other words, it is necessary to first go to the cart for the gifts to properly render on the checkout and then, in this given session, the user would have to return to the product page for these gifts to be exhibited in the controller.


##

## Simulation


1 - Create a product page using the <vtex.cmc ProductGifts> controller.
2 - Create a Buy One, Get One promotion to lead the related gifts.
3 - Load the product page, no gifts will be rendered.
4 - Go to the checkout page and the gifts will load.
5 - Return to the product page and then the gifts will be loading in the product page.


##

## Workaround


Use other cross selling controllers to customize and display items as gifts, such as similar, suggestions and accessories





