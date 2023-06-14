---
title: Giftcard HUB setting "R$" as the automatic currency on the UI
id: 2ODtc4t1GSo3iUjT9Gk0uk
status: PUBLISHED
createdAt: 2022-11-03T12:57:31.895Z
updatedAt: 2022-11-25T22:03:58.981Z
publishedAt: 2022-11-25T22:03:58.981Z
firstPublishedAt: 2022-11-03T12:57:32.512Z
contentType: knownIssue
productTeam: Payments
author: 2mXZkbi0oi061KicTExNjo
tag: Payments
slug: giftcard-hub-setting-r-as-the-automatic-currency-on-the-ui
kiStatus: Backlog
internalReference: 690794
---

## Summary



On the transaction UI page on the admin, we can see the list of all the transactions made on the account. We can see that all the payment methods show the correct currency from the account's country, except in cases of the Giftcards, from the GiftcardHUB connector. If the transaction is made with Giftcard + another payment method, the correct currency is applied. The bug only occurs when the transaction is made exclusively with Giftcard. In this scenario, the currency shown is the Brazilian Real currency (R$), regardless of the country of the account.

This bug doesn't impact on the transactional flow. This means that the transactions made with giftcard are still able to be authorized, approved, captured and finished without problem. It is only a UI problem that can cause confusion to the user of the admin (merchant).



## Simulation



Enter the Transaction UI page and filter by Giftcard.



## Workaround





As far as we were able to see, there is no workaround for this situation

