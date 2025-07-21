---
title: "ValidateCart mutation returning 500 when customizations affects the availability of the product"
id: TmV61O5LTdZFGZ4zBjj5P
status: PUBLISHED
createdAt: 2025-07-11T14:18:35.610Z
updatedAt: 2025-07-11T18:49:40.369Z
publishedAt: 2025-07-11T18:49:40.369Z
firstPublishedAt: 2025-07-11T14:18:36.287Z
contentType: knownIssue
productTeam: FastStore
author: 2mXZkbi0oi061KicTExNjo
tag: FastStore
slugEN: validatecart-mutation-returning-500-when-customizations-affects-the-availability-of-the-product
locale: en
kiStatus: Backlog
internalReference: 1258650
---

## Summary


When a product is unavailable, our default behavior is to return the last valid cart and errors on the `cart.messages`. Products already added to the cart may become unavailable due to merchant manual customizations (e.g. manually changing pickup points/seller in the cart). This behavior can lead to a 500 error on the validateCart mutation, making the cart unavailable to customer actions, such as deleting the product from the cart.


##

## Simulation


It is not an easy context to simulate; it may involve customization on the store side.
But an example would be changing from a pickup point where the product was available to one where it is not anymore.


##

## Workaround


As a workaround, the team developed a feature flag to change the default cart behavior of returning errors from the server-side, allowing unavailable products in the cart and transferring the responsibility of handle error scenarios to the client-side through merchant customizations.
https://github.com/vtex/faststore/pull/2938





