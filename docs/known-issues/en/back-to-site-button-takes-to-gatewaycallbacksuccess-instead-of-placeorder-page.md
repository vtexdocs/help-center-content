---
title: '"Back to site" button takes to gatewayCallback//Success instead of placeOrder page'
id: 7Hp6yYCblhbhrN3jHHigUC
status: PUBLISHED
createdAt: 2023-04-10T15:18:58.986Z
updatedAt: 2023-04-10T15:18:59.672Z
publishedAt: 2023-04-10T15:18:59.672Z
firstPublishedAt: 2023-04-10T15:18:59.672Z
contentType: knownIssue
productTeam: Checkout
author: 2mXZkbi0oi061KicTExNjo
tag: Checkout
slug: back-to-site-button-takes-to-gatewaycallbacksuccess-instead-of-placeorder-page
kiStatus: Backlog
internalReference: 786685
---

## Summary


When the customer closes a purchase using a giftcard and the MercadoPago payment app, the “return to the site” button does not take them to the place order page, but to `/gatewayCallback//Success`


##

## Simulation



1. Put the GC of any value
2. Select the method of payment "mercadoPago"
3. Inside the payment app, make a purchase with Efectivo => OXXO
4. Click on “Back to website”


##

## Workaround


_There is no workaround_




