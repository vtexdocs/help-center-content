---
title: 'Missing 1x installment option on Checkout with multiple payment conditions and default configuration set to a different option'
id: 6xzCd4cSKl7ygcptvqwZs9
status: PUBLISHED
createdAt: 2023-05-11T17:23:35.529Z
updatedAt: 2023-05-11T17:23:36.035Z
publishedAt: 2023-05-11T17:23:36.035Z
firstPublishedAt: 2023-05-11T17:23:36.035Z
contentType: knownIssue
productTeam: Payments
author: 2mXZkbi0oi061KicTExNjo
tag: Payments
slug: missing-1x-installment-option-on-checkout-with-multiple-payment-conditions-and-default-configuration-set-to-a-different-option
locale: en
kiStatus: Backlog
internalReference: 709971
---

## Summary


When there is more than one payment condition configured for a payment system, and one payment condition other than the one with the 1x installment option is configured as the default, the 1x installment option does not appear on the checkout page. In such cases, only the 1x installment option is removed from checkout.


##

## Simulation


To simulate this issue, follow these steps:

1. Go to the admin panel and configure three payment conditions for a credit card payment system, for example, Visa. Payment condition A could have installments of 1x-3x, condition B with installments of 4x-8x, and condition C with installments of 9x-12x.

2. Next, go to the checkout page and notice that all installment options appear on the checkout page.

3. Then, set payment condition B or C as the default and go to the checkout page again. You'll notice that the 1x installment option disappears from the checkout page.

4. However, if you set payment condition A as the default again, the 1x installment option will reappear on the checkout page.


##

## Workaround


To resolve this issue, you can set the lowest installment payment rule option to default or remove the default configuration by deleting the payment condition with this configuration and configuring a new payment condition without the default flag.

