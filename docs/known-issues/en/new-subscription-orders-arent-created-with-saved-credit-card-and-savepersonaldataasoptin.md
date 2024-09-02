---
title: "New subscription orders aren't created with saved credit card and savePersonalDataAsOptIn"
id: 5mMUYOzdXM9p69oythduOx
status: PUBLISHED
createdAt: 2024-08-27T17:54:38.067Z
updatedAt: 2024-08-27T17:54:59.938Z
publishedAt: 2024-08-27T17:54:59.938Z
firstPublishedAt: 2024-08-27T17:54:39.058Z
contentType: knownIssue
productTeam: Checkout
author: 2mXZkbi0oi061KicTExNjo
tag: Checkout
slug: new-subscription-orders-arent-created-with-saved-credit-card-and-savepersonaldataasoptin
locale: en
kiStatus: Backlog
internalReference: 1087876
---

## Summary


New orders with subscriptions can't be created using a saved credit card when "savePersonalDataAsOptIn" is active in the orderForm configuration.


##

## Simulation



- Activate "savePersonalDataAsOptIn" in the orderForm configuration;
- Assemble a cart with an item with a subscription;
- The message "Orders containing Subscriptions must have opt-in for 'Save Payment Data' and 'Save Personal Data'" will be shown when placing the order.


##

## Workaround


N/A




