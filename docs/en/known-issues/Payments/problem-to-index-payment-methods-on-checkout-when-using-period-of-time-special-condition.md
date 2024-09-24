---
title: 'Problem to index payment methods on checkout when using period of time special condition'
id: 1sM1ZtZw0GZ9TFuULg3Igd
status: PUBLISHED
createdAt: 2022-04-15T18:34:49.426Z
updatedAt: 2022-11-25T22:07:14.687Z
publishedAt: 2022-11-25T22:07:14.687Z
firstPublishedAt: 2022-04-15T18:34:50.048Z
contentType: knownIssue
productTeam: Payments
author: 2mXZkbi0oi061KicTExNjo
tag: Payments
slugEN: problem-to-index-payment-methods-on-checkout-when-using-period-of-time-special-condition
locale: en
kiStatus: Backlog
internalReference: 402857
---

## Summary


We have a problem to index payments methods on checkout. It happens with payment conditions which are configured with a period of time special conditions.

If a Payment Method has a single rule, and that rule was indexed outside of its valid time period, then the Payment Method will not appear in the index. It won't appear in the checkout UI form as well. It will remain absent until new indexing is triggered within its valid period.

If a Payment has a single rule, and that rule was indexed inside its valid time period, then the Payment Method will appear in the index, and by extension, in the Checkout UI form. Even if the rule later expires, but there is no new indexing triggered, then the index is not altered and the payment method will continue to appear in the Checkout UI form.

Worst still, if it is a Credit Card, then well the Checkout API requests the Instalment Options, the Gateway will notice the rule is outside its valid period and will return an empty array of options, which will bug the Checkout UI. It will remain in "calculating installments" even though the requests have already been returned.



## Simulation


The scenario can be reproduced by adding a new payment condition with a period of time special condition for a payments method that has no other payment conditions configured yet. In the valid period of the scheduling, the payment method will not appear on the checkout.

After that, you can configure another payment condition (as active) for the same payment method without scheduling and the first payment condition will appear on the checkout. After that, you can inactivate this secondary payment condition and the first one will still appear in checkout.

But this payment method will not disappear from checkout without another indexing help, even when it is out of the period settled in scheduling.



## Workaround


For a payment condition with a period of time special condition not appearing on checkout, the client can set another payment condition using the same payment method and it will appear on the checkout. But it doesn't solve all the problems, because if the scheduling is settled to an everyday period of time, the client would need to force indexing every time the payment method needs to appear and disappear on checkout.

