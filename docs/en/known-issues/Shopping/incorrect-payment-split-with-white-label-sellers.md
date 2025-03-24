---
title: 'Incorrect payment split with white label sellers'
id: 4ONWSOeG3mmSKyawq8SYCQ
status: PUBLISHED
createdAt: 2018-07-24T18:27:44.066Z
updatedAt: 2022-12-22T15:08:03.011Z
publishedAt: 2022-12-22T15:08:03.011Z
firstPublishedAt: 2018-07-24T18:33:19.288Z
contentType: knownIssue
productTeam: Shopping
author: authors_41
tag: Checkout,Order Management,Payments
slugEN: incorrect-payment-split-with-white-label-sellers
locale: en
kiStatus: Backlog
internalReference: 
---

## Summary

In a buy closing scenario in the marketplace, an order goes without payment.

After analysis, it is verified that this order is contained in the `orderGroup` (property of the order that groups the information of the orders from the sellers) with three other orders. The sum of the transactions is correct, which means that the customer paid the correct amount.

The problem happens in payment split on orders with white label sellers. In scenarios where the `orderGroup` has one order from the main marketplace, another order from a seller white label A, and another order from a seller white label B, one of the seller's orders goes without a transaction.

## Expected behavior

Due to the split, four transactions should have been created:
1. Transaction with the total amount.
2. Transaction with the value of the item purchased from the marketplace.
3. Transaction with the value of the item purchased from Seller A.
4. Transaction with the value of the item purchased from Seller B.

## Current behavior

Three transactions are created:
1. Transaction with the total amount.
2. Transaction with the value of the item purchased from the marketplace.
3. Transaction with the value of the item purchased from Seller B.

The order from Seller A has the status `NO-PAYMENT`. Even so, the sum of transactions is equal to the value of the complete transaction. What happens is that the transaction related to Seller A is distributed among the other three transactions that were created.

## Simulation

Make a purchase, with 4 items, one of which is from seller 1, one from seller A, one from seller B and one from seller C. Items from seller 1 and C are to be paid on the main merchant (1), the one from A on merchant A and the one from B on merchant B.

## Workaround

There is currently no workaround for this issue.

