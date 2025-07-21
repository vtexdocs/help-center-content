---
title: "Benefit with restricted number of installments displays discount in other installments in the combo box"
id: 4oKJDg0ygC40oiOAx2lkdG
status: PUBLISHED
createdAt: 2019-03-18T14:30:33.359Z
updatedAt: 2022-12-22T20:46:18.368Z
publishedAt: 2022-12-22T20:46:18.368Z
firstPublishedAt: 2019-03-18T14:34:47.612Z
contentType: knownIssue
productTeam: Shopping
author: 2mXZkbi0oi061KicTExNjo
tag: Checkout
slugEN: benefit-with-restricted-number-of-installments-displays-discount-in-other-installments-in-the-combo-box
locale: en
kiStatus: Backlog
internalReference: 
---

## Summary

When registering a benefit for card payments, with limited installments quantity (for example, "10% cash"), the discount is presented after selecting that amount of installments at the checkout. However, this discounted value becomes the new total value, on which the other installments will be based to present values. Then, in the selection field the other installments which are calculated based on the total value __with the discount__ are displayed among the options. When you select a different installment, however, the displayed value becomes the correct one.

This scenario only happens for card discount and at the time of selection. The purchase __is never closed with the wrong value__.

## Simulation

1. Create a benefit with restricted amount of installments;
2. Access the store and create a new cart, proceeding to checkout;
3. Select the number of installments in which the benefit is applied;
4. Note that when you open the installments selection field one more time, the other options also display the discount;
5. Select another installment and see that the value is adjusted.

## Workaround

There is no workaround for this scenario.

