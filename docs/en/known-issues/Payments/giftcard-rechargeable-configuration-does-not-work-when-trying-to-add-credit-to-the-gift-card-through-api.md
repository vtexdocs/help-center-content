---
title: "Giftcard Rechargeable configuration does not work when trying to add credit to the gift card through API"
id: 3MXPd85Km51KpO4FNPqlDf
status: PUBLISHED
createdAt: 2022-05-23T14:21:10.608Z
updatedAt: 2024-02-16T20:25:54.496Z
publishedAt: 2024-02-16T20:25:54.496Z
firstPublishedAt: 2022-05-23T14:21:11.126Z
contentType: knownIssue
productTeam: Payments
author: 2mXZkbi0oi061KicTExNjo
tag: Payments
slugEN: giftcard-rechargeable-configuration-does-not-work-when-trying-to-add-credit-to-the-gift-card-through-api
locale: en
kiStatus: No Fix
internalReference: 583669
---

## Summary


When creating a Gift card, we configure whether it is rechargeable or not. However, the impediment of adding credit to a non-rechargeable Gift card happens only through the UI, through the API it is possible to add credit even if the Gift Card is not rechargeable.



## Simulation



1. Create a non-rechargeable Gift card
2. Go to admin Gift card page and the UI will not allow the recharge
3. Try to add credit through API and there will be no block to this action



## Workaround


N/A

