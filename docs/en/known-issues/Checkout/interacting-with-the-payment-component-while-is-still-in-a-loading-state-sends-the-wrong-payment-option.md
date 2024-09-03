---
title: 'Interacting with the payment component while is still in a loading state sends the wrong payment option'
id: 4kSvM6fti8YfgcUyl4qFJs
status: PUBLISHED
createdAt: 2023-12-12T22:07:58.762Z
updatedAt: 2023-12-12T22:07:59.474Z
publishedAt: 2023-12-12T22:07:59.474Z
firstPublishedAt: 2023-12-12T22:07:59.474Z
contentType: knownIssue
productTeam: Checkout
author: 2mXZkbi0oi061KicTExNjo
tag: Checkout
slug: interacting-with-the-payment-component-while-is-still-in-a-loading-state-sends-the-wrong-payment-option
locale: en
kiStatus: Backlog
internalReference: 952086
---

## Summary


When the shopper changes the payment method while the payment component is still loading on the page, if the payment method has options, the payment sent to the orderForm is wrong. When this behavior happen, the order is not created and a message to review the payment information is shown.


##

## Simulation



- Add items to the cart and move until payment data;
- Click on a different payment method while the page is loading and select another option inside the component;
- The payment sent to the orderForm is wrong, being the first option.


##

## Workaround


N/A




