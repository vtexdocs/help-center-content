---
title: 'cart item.deliveryType is missing sent by checkout in AdditionalData'
id: lV8VxXUPOzO9cSMgNV4fj
status: PUBLISHED
createdAt: 2024-03-19T12:59:17.599Z
updatedAt: 2024-09-10T18:34:54.909Z
publishedAt: 2024-09-10T18:34:54.909Z
firstPublishedAt: 2024-03-19T12:59:18.450Z
contentType: knownIssue
productTeam: Checkout
author: 2mXZkbi0oi061KicTExNjo
tag: Checkout
slugEN: cart-itemdeliverytype-is-missing-sent-by-checkout-in-additionaldata
locale: en
kiStatus: Backlog
internalReference: 1002115
---

## Summary


When there's a quantity split in the `priceDefinition` due to rounding for the unit multiplier, the gateway can receive no value for `deliveryType` in the cart object. So, this might cause the payment provider to deny the payment if they use this field..


##

## Simulation



- Place an order with a cart with a quantity split in the `priceDefinition` field in the orderForm;
- Check the "miniCart.Items", it may not have have ``deliveryType`.


##

## Workaround


N/A



