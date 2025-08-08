---
title: 'Omitting a payment condition'
id: 5f8aZrc7y8oiu0KOmaOy0e
status: PUBLISHED
createdAt: 2019-01-24T20:45:50.203Z
updatedAt: 2019-12-31T15:26:32.553Z
publishedAt: 2019-12-31T15:26:32.553Z
firstPublishedAt: 2019-01-24T22:12:17.899Z
contentType: tutorial
productTeam: Financial
author: authors_35
slugEN: how-does-one-omit-a-payment-condition
legacySlug: how-does-one-omit-a-payment-condition
locale: en
subcategoryId: 6XAvmMxp7yyY06ewYMuggs
---

Since VTEX allows multiple Gateways, Acquirers and their corresponding association with payment means to be registered easily and quickly, some users may want to include promotions, or even partnerships, with an exclusive means of payment.

One way of segregating a payment condition is through sales policies.

For example, a storeowner wants to apply different prices for each UTM and to have the purchase made with a single, specific means of payment. It will be necessary to create a new commercial policy, and the UTM defined will have to load this policy on to the site. Setting up the payment condition with a specific commercial policy can be done in the connector itself, i.e. in the Payments.

Another perhaps simpler way is to customize the Checkout so that the CSS will omit the means of payment for the UTM in question. But remember that __VTEX does not recommend customizing the Checkout__, since SmartCheckout exists to maximize efficiency in the purchase closing flow.
