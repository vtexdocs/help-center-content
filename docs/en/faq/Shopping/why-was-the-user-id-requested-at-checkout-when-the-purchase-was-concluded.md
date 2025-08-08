---
title: 'Why was my client requested to log in when attempting to finalize their purchase?'
id: frequentlyAskedQuestions_2705
status: PUBLISHED
createdAt: 2017-04-27T22:25:14.581Z
updatedAt: 2022-05-13T16:37:34.897Z
publishedAt: 2022-05-13T16:37:34.897Z
firstPublishedAt: 2017-04-27T23:02:37.271Z
contentType: frequentlyAskedQuestion
productTeam: Shopping
author: authors_3
slugEN: why-was-the-user-id-requested-at-checkout-when-the-purchase-was-concluded
locale: en
legacySlug: why-was-the-user-id-requested-at-checkout-when-the-purchase-was-concluded
---

A security rule exists at checkout, regarding SmartCheckout purchase facility.

Since with SmartCheckout purchases can be closed just with the email and with the CVV of the card, where the customer has already completed the purchase before, we restrict the number of unsuccessful attempts to conclude the purchase to 3 before asking the customer for their user ID.

![LoginEN](https://raw.githubusercontent.com/vtexdocs/help-center-content/refs/heads/main/docs/en/faq/Shopping/why-was-the-user-id-requested-at-checkout-when-the-purchase-was-concluded_1.png)

In other words, if the customer concludes the purchase using only the email and the CVV of the credit card, and if the operator’s approval does not occur after 3 consecutive attempts, a user ID screen is displayed so that the customer can continue trying to purchase. This countdown starts again when the customer logs in and successfully completes their purchase.

> ⚠️ Requiring a new authentication is only related to the established limit of 3 unsuccessful purchase attempts with the same card. This means that, ** regardless of the time interval between each attempt, authentication will be requested when the customer tries for the third time to end a purchase without success.**

This measure is aimed at the security of customer data against counter-attacks and attempts at fraud.

For more information about data protection, visit [SmartCheckout Security](https://help.vtex.com/en/tutorial/seguranca-do-smartcheckout--3SrJuuhrqwePUg1rp1exfB#).
