---
title: "cart item.value is incorrectly sent by checkout in AdditionalData"
id: 60ZOoWOF1XNulbQ9aGdSsO
status: PUBLISHED
createdAt: 2024-12-05T20:02:47.963Z
updatedAt: 2024-12-05T20:02:48.774Z
publishedAt: 2024-12-05T20:02:48.774Z
firstPublishedAt: 2024-12-05T20:02:48.774Z
contentType: knownIssue
productTeam: Checkout
author: 2mXZkbi0oi061KicTExNjo
tag: Checkout
slugEN: cart-itemvalue-is-incorrectly-sent-by-checkout-in-additionaldata
locale: en
kiStatus: Backlog
internalReference: 640386
---

## Summary


When there's a quantity split in the priceDefinition due to rounding for the unit multiplier, the gateway can receive a different `value` and `quantity` in the cart object. So, this might cause the gateway to perform a request where the miniCart.Items has the sum of the items different from the total payment amount.


##

## Simulation



- Place an order with a cart with a quantity split in the priceDefinition field in the orderForm.
- Compare the "miniCart.Items" from transaction and "priceDefinition.sellingPrices" from orders, they may have different values and quantities


##

## Workaround


N/A



