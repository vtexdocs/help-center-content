---
title: "Why doesn't the payment method appear on the order on VTEX?"
excerpt: "Marketplace orders are usually paid on the marketplace. That payment method is not sent to VTEX because it does not affect the VTEX order flow."
id: frequentlyAskedQuestions_695
status: PUBLISHED
createdAt: 2017-04-27T22:29:28.700Z
updatedAt: 2026-10-07T00:00:00.000Z
publishedAt: 2019-12-31T14:24:53.813Z
firstPublishedAt: 2017-04-27T23:02:33.099Z
contentType: frequentlyAskedQuestion
productTeam: Payments
author: authors_3
slugEN: why-doesnt-the-payment-method-appear-on-the-order-on-vtex
locale: en
legacySlug: why-doesnt-the-payment-method-appear-on-the-order-on-vtex
---

In [most marketplace integrations](/en/docs/tutorials/payments-in-vtex-marketplaces), the customer pays on the marketplace, and the marketplace later transfers the amount to the seller. Payment uses the methods registered on the marketplace, so VTEX is not part of that payment process.

When the order is integrated, the payment method is not sent to VTEX, because it does not change the order flow on VTEX.

> ℹ️ In the VTEX Admin, [VTEX Copilot](/en/docs/tutorials/vtex-copilot-in-the-vtex-admin) can check the order. Provide the order number, and VTEX Copilot will show the registered payment information and whether the purchase was paid for on the marketplace, which would explain why the payment method isn't displayed.

