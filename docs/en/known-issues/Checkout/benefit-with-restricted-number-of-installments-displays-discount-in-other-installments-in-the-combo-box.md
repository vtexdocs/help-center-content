---
title: 'Benefit with restricted number of installments displays discount in other installments in the combo box'
id: 6izb0iLwbLstdJIxF9lPOw
status: DRAFT
createdAt: 2022-01-24T20:33:57.542Z
updatedAt: 2023-03-31T23:07:20.021Z
publishedAt: 
firstPublishedAt: 
contentType: knownIssue
productTeam: Checkout
author: 2mXZkbi0oi061KicTExNjo
tag: Checkout
slugEN: benefit-with-restricted-number-of-installments-displays-discount-in-other-installments-in-the-combo-box
locale: en
kiStatus: Backlog
internalReference: 323525
---

## Summary


When registering a benefit for card payments, with limited installments quantity (for example, "10% cash"), the discount is presented after selecting that amount of installments at the checkout. However, this discounted value becomes the new total value, on which the other installments will be based to present values. Then, in the selection field the other installments which are calculated based on the total value **with the discount** are displayed among the options. When you select a different installment, however, the displayed value becomes the correct one.

This scenario only happens for card discount and at the time of selection. The purchase **is never closed with the wrong value**.


##

## Simulation



1. Create a benefit with restricted amount of installments;
2. Access the store and create a new cart, proceeding to checkout;
3. Select the number of installments in which the benefit is applied;
4. Note that when you open the installments selection field one more time, the other options also display the discount;
5. Select another installment and see that the value is adjusted.


##

## Workaround


There's a fix available for this scenario as a "beta" feature. You can reach the support team through a ticket to get more details.




