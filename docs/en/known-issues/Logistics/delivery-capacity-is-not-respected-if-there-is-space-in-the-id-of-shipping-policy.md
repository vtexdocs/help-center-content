---
title: 'Delivery capacity is not respected if there is space in the Id of Shipping Policy'
id: 1OyY54G05o15EI2zAmW4Vq
status: PUBLISHED
createdAt: 2023-07-14T21:25:50.522Z
updatedAt: 2024-03-19T19:26:55.344Z
publishedAt: 2024-03-19T19:26:55.344Z
firstPublishedAt: 2023-07-14T21:25:51.117Z
contentType: knownIssue
productTeam: Logistics
author: 2mXZkbi0oi061KicTExNjo
tag: Logistics
slug: delivery-capacity-is-not-respected-if-there-is-space-in-the-id-of-shipping-policy
locale: en
kiStatus: Backlog
internalReference: 862830
---

## Summary


If the delivery scheduling feature is in use and delivery capacity is enabled, there are two known scenarios that can make the window available even after it has reached its maximum configured capacity limit.
The scenarios are: Shipping policy id with a space or too many characters making up the string, `AccountName+ShippingPolicyId` cannot exceed 60 characters.


##

## Simulation


Create a shipping policy and, in its Id, insert a space, or `AccountName+ShippingPolicyId` resulting in more than 60 characters, configure scheduled delivery and delivery capacity.
Place orders by selecting the registered window, check that it will be possible to create more orders than the maximum configured in the delivery capacity.
At checkout, when the configured limit is reached, the window should not become unavailable, but will remain visible and can be selected.


##

## Workaround


Do not register any Id with a space in the shipping policy or with more than 60 characters adding together the characters in the `AccountName+ShippingPolicyId`.





