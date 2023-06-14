---
title: Why doesn’t the payment method appear on the order on VTEX?
id: frequentlyAskedQuestions_695
status: PUBLISHED
createdAt: 2017-04-27T22:29:28.700Z
updatedAt: 2019-12-31T14:24:53.813Z
publishedAt: 2019-12-31T14:24:53.813Z
firstPublishedAt: 2017-04-27T23:02:33.099Z
contentType: frequentlyAskedQuestion
productTeam: Financial
author: authors_3
slug: why-doesnt-the-payment-method-appear-on-the-order-on-vtex
legacySlug: why-doesnt-the-payment-method-appear-on-the-order-on-vtex
---

When a purchase is made on the marketplace, [in the case of most integrations](http://vtex.github.io/docs/integracao/marketplace/index.html), payment takes place on the marketplace for subsequent transfer to the seller. In this flow, payment is made using the payment methods registered on the marketplace, that is, the payment process does not involve VTEX.

That is why, when the order is integrated, the information about the payment method is not passed on to VTEX, since it is not something that will affect the order flow on VTEX.

