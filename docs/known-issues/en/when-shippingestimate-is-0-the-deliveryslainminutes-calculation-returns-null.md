---
title: 'When shippingEstimate is = 0, the deliverySlaInMinutes calculation returns null'
id: UGk2WYb3w3ZWH4pL07TNg
status: PUBLISHED
createdAt: 2022-02-01T13:04:45.737Z
updatedAt: 2022-11-25T21:51:01.802Z
publishedAt: 2022-11-25T21:51:01.802Z
firstPublishedAt: 2022-02-01T13:04:46.164Z
contentType: knownIssue
productTeam: Checkout
author: 2mXZkbi0oi061KicTExNjo
tag: Checkout
slug: when-shippingestimate-is-0-the-deliveryslainminutes-calculation-returns-null
locale: en
kiStatus: Backlog
internalReference: 514835
---

## Summary


In the checkout flow `deliverySlaInMinutes` delivery checkout along with the transaction details to the gateway, this data is calculated based on the `shippingEstimate` delivered by logistics, however when this value delivered by logistics is = 0 the checkout response for `deliverySlaInMinutes` is 0 null, when the correct one would be 0; however this ends up directly affecting the flow developed by the gateway for anti-fraud;



## Simulation


1- Create an order with Pick up
2- The `shippingEstimate` must be 0
3- Check the transaction data and see that the `deliverySlaInMinutes` is = null;




## Workaround


There is no direct workaround, however, if it is possible to avoid that the `shippingEstimate` delivered by logistic calculation, being equal to 0, it is possible to mitigate the scenario;

