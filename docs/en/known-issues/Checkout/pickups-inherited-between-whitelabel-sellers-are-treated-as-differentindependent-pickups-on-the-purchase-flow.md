---
title: 'Pickups inherited between whitelabel sellers are treated as different/independent pickups on the purchase flow'
id: mfLw2RDV0C7cXNic5CwoA
status: PUBLISHED
createdAt: 2022-05-12T14:52:12.808Z
updatedAt: 2022-11-25T21:52:15.347Z
publishedAt: 2022-11-25T21:52:15.347Z
firstPublishedAt: 2022-05-12T14:52:13.102Z
contentType: knownIssue
productTeam: Checkout
author: 2mXZkbi0oi061KicTExNjo
tag: Checkout
slug: pickups-inherited-between-whitelabel-sellers-are-treated-as-differentindependent-pickups-on-the-purchase-flow
locale: en
kiStatus: Backlog
internalReference: 438630
---

## Summary


There's a feature in the Logistics module to inherit pickup points between franchise accounts, and so between whitelabel sellers. While registered on a seller X, they'll appear as pickup options for a seller Y according to what is configured on the shipping strategy. Although they are the same, their ID will be different between each seller, and so they'll be seen as different and independent pickup options.

The issue is that the purchase experience will be compromised when the customer wants to get the items from their cart in this pickup, but they are coming from different sellers behind everything. They can be shown repeated times on the pickup points list (one per WL seller), and each one of them will cover only specific items (the ones provided by each WL seller).

Also, it's important to consider that the checkout's native frontend doesn't offer the option to select different pickup points for different items in the cart (although they were from different regular sellers, which doesn't apply to a SWL scenario). So you can't buy the entire cart on this "same" pickup point option. The remaining items, which aren't covered by the selected pickup, will be offered to be delivered to an address – if it's an available delivery channel for the context, otherwise, they'll be shown as "_selected another pickup or remove from the cart_".



## Simulation


There's no quick scenario to reproduce the issue, but you just need two items coming exclusively from two different sellers (can be the seller 1 and one of their SWLs), and there's a single pickup inherited from the SWL to the seller 1.



## Workaround


N/A

