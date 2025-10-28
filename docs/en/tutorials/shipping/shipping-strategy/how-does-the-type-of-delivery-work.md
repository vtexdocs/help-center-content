---
title: 'How does the type of delivery work?'
id: tutorials_126
status: PUBLISHED
createdAt: 2017-04-27T22:18:17.250Z
updatedAt: 2023-11-13T15:00:10.346Z
publishedAt: 2023-11-13T15:00:10.346Z
firstPublishedAt: 2017-04-27T23:00:44.173Z
contentType: tutorial
productTeam: Post-purchase
author: authors_84
slugEN: how-does-the-type-of-delivery-work
legacySlug: how-does-the-type-of-delivery-work
locale: en
subcategoryId: 7fTH6bP0C4IaM8qWi0kkQC
---

The type of delivery is a feature of carrier registration that makes the grouping of carriers that offer the same price. It works as a category that will be displayed in the cart, during the checkout.

## Grouping by type

The shipping type will be used as an aggregator when more than one carrier offers the same type of delivery, that is, when different carriers have similar characteristics.

> Example: The carriers _CA Ground_, _FedEx Ground_, and _UK Ground_ perform the **Regular** type of delivery, while _FedEx Overnight_ and _Latam VTEX Sales App_ perform the **Express** type.

## Displaying the carriers at checkout

On the cart area, the delivery options are separated by shipping type, not by carrier name. So, it is essential for these types to have friendly names, and for each carrier to be related to a different category, otherwise only the carrier with the shortest delivery time and the lowest value for that shipping type will be displayed.

The following picture shows how the shipping options would be displayed on the checkout according to the example mentioned before: 

![Transportadoras Checkout EN](https://cdn.statically.io/gh/vtexdocs/help-center-content/refs/heads/main/docs/en/tutorials/shipping/shipping-strategy/how-does-the-type-of-delivery-work_1.png)

Notice that, even though five carriers are registered (in the **Regular** and **Express** categories), only two freight options are displayed to the customer. This is not because the other carriers do not fulfill the cart requirement, but because, within the same type of freight, only the carrier with the lowest price or the shortest delivery time will be displayed.

