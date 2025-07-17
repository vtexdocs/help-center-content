---
title: "Order with no subscription Created and no email of New Orders on Cases related to payment method using conectors like Payment App or Redirect."
id: 747TGL3sy1mmM1LnVkEjuO
status: PUBLISHED
createdAt: 2022-02-21T20:54:35.174Z
updatedAt: 2024-02-16T20:23:42.061Z
publishedAt: 2024-02-16T20:23:42.061Z
firstPublishedAt: 2022-05-18T18:43:19.767Z
contentType: knownIssue
productTeam: Order Management
author: 2mXZkbi0oi061KicTExNjo
tag: Order Management
slugEN: order-with-no-subscription-created-and-no-email-of-new-orders-on-cases-related-to-payment-method-using-conectors-like-payment-app-or-redirect
locale: en
kiStatus: No Fix
internalReference: 529143
---

## Summary


For orders with payment method using conectors like payment app or redirect there is no GatewayCallback to Checkout who is responsible to create the subscription and send a new-order email.
And because of that Checkout are not sending the event Finished Order Group, thats indicates the order as completed.


So for orders using this kind of payments connectors method, there are two scenarios or one inclunding both.

1 - Commun Order - No email from new-order template will be sent.
2 - Order responsible to generate the subscription  - Will not create the subscription and dont send the first new-order email.




## Simulation



## Workaround



