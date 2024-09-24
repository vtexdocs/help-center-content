---
title: 'Luhn algorithm for credit and debit cards at checkout'
id: 22hAb6KVWUitIG9OzFzgi2
status: PUBLISHED
createdAt: 2023-09-19T15:43:01.350Z
updatedAt: 2023-09-19T16:47:51.216Z
publishedAt: 2023-09-19T16:47:51.216Z
contentType: updates
productTeam: Financial
author: 6DODK49lJPk3yvcoe6GB6g
slugEN: luhn-algorithm-for-credit-and-debit-cards-at-checkout
locale: en
legacySlug: luhn-algorithm-for-credit-and-debit-cards-at-checkout
announcementImageID: ''
announcementSynopsisEN: 'Reduce the percentage of declined transactions due to invalid card number'
---

VTEX now allows validating credit and debit card numbers with the Luhn algorithm at checkout.

## What has changed?

Previously, when a customer entered the card number at checkout, it was not possible to identify whether it was a valid card. When there were typing errors, the transaction was created but then canceled during authorization.

Now, the Luhn algorithm will ensure that only a valid card number can be used for payment, which will reduce the percentage of declined transactions due to invalid card numbers.

If a customer enters an incorrect number, an error message is displayed at checkout. In such cases, the customer must check and correct the number to complete the purchase.

![algoritmo_luhn_en](//images.ctfassets.net/alneenqid6w5/5HN1Iu9vKUmeglMLOV46Rd/ccd302d3086caaeca01c5725bdbd8b2d/algoritmo_luhn_en.PNG)

## Why did we make this change?

Having a payment transaction declined due to an invalid card number could lead customers to give up on buying again, as they would have to enter the card number again. So, this improvement in the shopping experience aims to increase your store conversion rate.

## What needs to be done?

No action is required. The Luhn algorithm is already active in all VTEX stores.

>⚠️ The Luhn algorithm does not prevent fraud through card testing attacks. Its purpose is to detect typing errors in card numbers.
