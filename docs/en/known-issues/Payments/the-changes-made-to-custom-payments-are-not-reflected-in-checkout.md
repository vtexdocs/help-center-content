---
title: "The changes made to Custom payments are not reflected in checkout"
id: 22ot22mIyR9v8b2vXYn8VW
status: PUBLISHED
createdAt: 2022-03-27T17:59:14.988Z
updatedAt: 2022-11-25T22:05:21.028Z
publishedAt: 2022-11-25T22:05:21.028Z
firstPublishedAt: 2022-03-27T17:59:15.384Z
contentType: knownIssue
productTeam: Payments
author: 2mXZkbi0oi061KicTExNjo
tag: Payments
slugEN: the-changes-made-to-custom-payments-are-not-reflected-in-checkout
locale: en
kiStatus: Backlog
internalReference: 276250
---

## Summary


When the customer tries to modify the settings made for custom payments that already have an associated payment rule, the changes are not reflected at checkout.
The problem happens because of a cache that needs to be overwritten by the changes made in Custom payment configuration.



## Simulation



1. Go to the VTEX **Admin**.
2. Set up a Custom payment.
3. Set up a Payment condition for process the Custom payment.
4. Go back to the Custom payment setup and change the description there.
5. Go to checkout and note that the update did not reflect the changes you made.



## Workaround


You can work around this issue by saving the Payment condition that is associated with the Custom payment

