---
title: Checkout payment split may generate incorrect information in the "paymentData" of orders (NO-PAYMENT)
id: 1bZ5H0T0isc0DUtkIb38sQ
status: PUBLISHED
createdAt: 2022-01-24T20:37:23.861Z
updatedAt: 2023-01-02T14:34:42.667Z
publishedAt: 2023-01-02T14:34:42.667Z
firstPublishedAt: 2022-01-31T15:07:32.985Z
contentType: knownIssue
productTeam: Checkout
author: 2mXZkbi0oi061KicTExNjo
tag: 
slug: checkout-payment-split-may-generate-incorrect-information-in-the-paymentdata
kiStatus: Backlog
internalReference: 330802
---

## Summary


Payment information between different orders of the same "orderGroup" can be incorrect when more than one order is paid through the same "merchant" (account that transacts the payment). The amounts paid are correct, corresponding to the sum of each order in the group, but the amounts pertinent to each one of them are not present in the "paymentData" object of the order.

When this happens, one of the orders of the group is taken as a base and presents the sum of these values, while the other orders are left with an empty transaction, where its ID is "NO-PAYMENT".

The fulfillment order is not affected, as it never has specific data on the payment that took place on the marketplace and has the correct apportionment, along with the description of "amount assumed by the affiliate". The scenario is bad when the marketplace wants to consume all of the store's orders, including those sent by other sellers, and then account for each party's payment amounts (usually useful for reconciliation).

Note: this scenario is directly related to the payment split performed by the checkout itself.



## Simulation


In theory, any cart with multiple sellers, but where payment is made directly to the marketplace.



## Workaround


For order integration purposes, it is possible to search if there are more orders in the same "orderGroup" in order to check their values and be able to redistribute them among the orders of the same group.

