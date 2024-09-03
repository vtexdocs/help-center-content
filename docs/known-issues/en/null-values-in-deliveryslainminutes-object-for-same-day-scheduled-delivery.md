---
title: 'Null values in deliverySlaInMinutes object for same day scheduled delivery'
id: 3iSfWDl8hMtuRaYxFKWjPI
status: PUBLISHED
createdAt: 2024-08-12T20:58:03.483Z
updatedAt: 2024-08-12T20:58:04.450Z
publishedAt: 2024-08-12T20:58:04.450Z
firstPublishedAt: 2024-08-12T20:58:04.450Z
contentType: knownIssue
productTeam: Checkout
author: 2mXZkbi0oi061KicTExNjo
tag: Checkout
slug: null-values-in-deliveryslainminutes-object-for-same-day-scheduled-delivery
locale: en
kiStatus: Backlog
internalReference: 1079981
---

## Summary


Orders created with scheduled delivery for the same day they were made return `items.deliverySlaInMinutes: null` inside the cart object.


##

## Simulation



- Configure a store with shceduled delivery with availability for the same day;
- Complete a purchase with delivery scheduled for the same day;
- The `items.deliverySlaInMinutes` field inside the cart object in the transaction will be `null`.


##

## Workaround


N/A





