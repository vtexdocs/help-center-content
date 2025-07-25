---
title: 'UI wrongly displaying the shipping price when packages are split for scheduled delivery'
id: 6HkjI7IwvvYaxHAqMS2aUv
status: PUBLISHED
createdAt: 2023-03-20T14:59:50.827Z
updatedAt: 2023-03-20T14:59:51.525Z
publishedAt: 2023-03-20T14:59:51.525Z
firstPublishedAt: 2023-03-20T14:59:51.525Z
contentType: knownIssue
productTeam: Checkout
author: 2mXZkbi0oi061KicTExNjo
tag: Checkout
slugEN: ui-wrongly-displaying-the-shipping-price-when-packages-are-split-for-scheduled-delivery
locale: en
kiStatus: Backlog
internalReference: 774155
---

## Summary


When there is a package split for scheduled delivery, the price for one of the packages may be incorrect in the UI, but the prices will be correct in the API.


##

## Simulation



- Add 2 items that have scheduled delivery and are from different carriers;
- Select the delivery windows for both packages;
- You will see that the sum shown in the UI doesn't match the shipping totalizer.


##

## Workaround


N/A



