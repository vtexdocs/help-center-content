---
title: "Promotions and taxes restricted by shipping method doesn't works for Whitelabel Sellers"
id: 3ue1kZdbX1mMFqPCkl0tC4
status: PUBLISHED
createdAt: 2023-08-09T13:25:02.168Z
updatedAt: 2023-08-09T13:26:13.874Z
publishedAt: 2023-08-09T13:26:13.874Z
firstPublishedAt: 2023-08-09T13:25:02.698Z
contentType: knownIssue
productTeam: Checkout
author: 2mXZkbi0oi061KicTExNjo
tag: Checkout
slug: promotions-and-taxes-restricted-by-shipping-method-doesnt-works-for-whitelabel-sellers
locale: en
kiStatus: Backlog
internalReference: 315485
---

## Summary


Promotions and taxes restricted by shipping methods don't work for Whitelabel Sellers. They won't be applied in the simulation request (used for the cart and checkout) because the marketplace request doesn't specify the `selectedSla`, and so their values won't be presented to the user.

But the order creation process will send this `selectedSla`, where the promotion/tax will be calculated and the values will change. But the divergence between the simulation and the order creation process can block the purchase from being finished since the customer will pay a value, calculated on the simulation request, different than the value calculated on the order creation.


##

## Simulation


- create a tax in the Whitelabel Seller that is restricted to some shipping method
- create a cart in the marketplace that will use this seller, and select the shipping method specified before

The value won't be presented and the order can't be created.


##

## Workaround


There's no known workaround to have a tax or promotion restricted by shipping method in a Whitelabel seller.

