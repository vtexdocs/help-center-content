---
title: 'A special time period condition may not behave as expected when having it as a single payment rule'
id: 5bPV3FFGvHL0a8UyMuBxrc
status: DRAFT
createdAt: 2022-12-07T19:20:30.062Z
updatedAt: 2022-12-08T13:36:56.085Z
publishedAt: 
firstPublishedAt: 2022-12-07T19:20:30.655Z
contentType: knownIssue
productTeam: Payments
author: 2mXZkbi0oi061KicTExNjo
tag: Payments
slug: a-special-time-period-condition-may-not-behave-as-expected-when-having-it-as-a-single-payment-rule
locale: en
kiStatus: Backlog
internalReference: 712575
---

## Summary


All caching combined with the Expiration Date feature can cause very odd behavior for our shoppers during Checkout. The biggest problems come from the way the Gateway indexes the Payment Methods:


- If a Payment Method has a single rule, and that rule was indexed outside of its valid time period, then the Payment Method will **not** appear in the index. It won't appear in the checkout UI form as well. It will remain absent until a new indexing is triggered within its valid period.


- If a Payment has a single rule, and that rule was indexed within its valid time period, then the Payment Method will appear in the index, and by extension, in the Checkout UI form. Even if the rule later expires, but there is no new indexing triggered, then the index is not altered and the payment method will continue to appear in the Checkout UI form.


##

## Simulation



Create a single payment rule for any payment method and then add a special time period condition. Make sure it's within the valid period, then wait until the next day outside the period, you'll notice that this payment method will still be showing up at checkout.


##

## Workaround



Avoid having a single payment rule with special time period conditions.

