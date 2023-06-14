---
title: 'Order refund email not getting sent when additional amount is refunded using new UI (OMS).'
id: 4nQanqQiHuAN6dT7iYYO26
status: PUBLISHED
createdAt: 2022-04-19T15:27:27.050Z
updatedAt: 2023-03-08T18:00:57.430Z
publishedAt: 2023-03-08T18:00:57.430Z
firstPublishedAt: 2022-04-19T15:27:27.634Z
contentType: knownIssue
productTeam: Order Management
author: 2mXZkbi0oi061KicTExNjo
tag: Order Management
slug: order-refund-email-not-getting-sent-when-additional-amount-is-refunded-using-new-ui-oms
locale: en
kiStatus: Fixed
internalReference: 563300
---

## Summary


When an order is returned by Marketplace through the "new UI" and an "additional" value is inserted into the "new UI", it generates a giftcard erroneously and with that, Checkout returns an error saying "that there is no value to be reversed and the email transactional "vtexcommerce-order-refunded" is not sent to the end customer.


##

## Simulation


To simulate this case, it is necessary to make a refund, adding an extra value through "New_UI".
The sending of the transactional email "vtexcommerce-order-refunded" to the end customer will not be identified.


##

## Workaround


In these cases where the refund occurred in "New_UI", we do not have a workaround. If it is necessary to make a refund, it is possible to do it through Old_UI.





