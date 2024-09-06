---
title: 'Regex conflict causes us to misidentify Mastercard as Visa'
id: MzUm8xH6vDeGxWcj6GCbZ
status: PUBLISHED
createdAt: 2023-09-04T17:51:08.019Z
updatedAt: 2023-11-30T15:25:47.066Z
publishedAt: 2023-11-30T15:25:47.066Z
firstPublishedAt: 2023-09-04T17:51:09.705Z
contentType: knownIssue
productTeam: Payments
author: 2mXZkbi0oi061KicTExNjo
tag: Payments
slug: regex-conflict-causes-us-to-misidentify-mastercard-as-visa
locale: en
kiStatus: Backlog
internalReference: 893588
---

## Summary


Regex conflict causes us to misidentify the Cards Brand at the checkout.


##

## Simulation



1. Configure two Payment Conditions one for Visa credit card processing and one for Mastercard credit card processing
2. Buy a random item in the store and choose to pay it by credit card.
3. Fill in the card number with the Mastercard BIN 523431 and complete with random numbers.
4. Fill the rest card information with fake data
5. Finish the purchase
6. Go to admin and search for the transaction already created and the payment will be identified as Visa instead of Mastercard


##

## Workaround


N/a





