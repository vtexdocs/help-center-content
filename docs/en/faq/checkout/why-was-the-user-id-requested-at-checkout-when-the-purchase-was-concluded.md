---
title: 'Why was the customer asked to log in when completing a purchase?'
excerpt: "After three failed SmartCheckout attempts with email and CVV, checkout asks for a full login as a security measure."
id: frequentlyAskedQuestions_2705
status: PUBLISHED
createdAt: 2017-04-27T22:25:14.581Z
updatedAt: 2022-05-13T16:37:34.897Z
publishedAt: 2022-05-13T16:37:34.897Z
firstPublishedAt: 2017-04-27T23:02:37.271Z
contentType: frequentlyAskedQuestion
productTeam: Checkout
author: authors_3
slugEN: why-was-the-user-id-requested-at-checkout-when-the-purchase-was-concluded
locale: en
legacySlug: why-was-the-user-id-requested-at-checkout-when-the-purchase-was-concluded
---

Checkout applies a security rule to SmartCheckout purchases.

Returning customers can complete a SmartCheckout purchase with only their email address and card CVV. After three unsuccessful attempts, checkout asks the customer to log in.

![LoginEN](https://cdn.statically.io/gh/vtexdocs/help-center-content/refs/heads/main/docs/en/faq/checkout/why-was-the-user-id-requested-at-checkout-when-the-purchase-was-concluded_1.png)

If three consecutive attempts with email and CVV are not approved by the card operator, a login screen is displayed so the customer can keep trying. The counter resets after the customer logs in and completes a purchase.

> ⚠️ A new login is required only after three unsuccessful attempts with the same card. The time between attempts does not matter. After the third failed attempt, checkout asks the customer to authenticate.

This protects customer data against attacks and fraud.

For more information, see [SmartCheckout Security](/en/docs/tutorials/smartcheckout-security).
