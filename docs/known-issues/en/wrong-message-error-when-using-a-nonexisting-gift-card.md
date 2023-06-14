---
title: 'Wrong message error when using a non-existing Gift card'
id: 6Bxu8UsBv4OE1pusXz0j7j
status: PUBLISHED
createdAt: 2022-05-23T19:32:47.312Z
updatedAt: 2022-11-25T22:06:02.961Z
publishedAt: 2022-11-25T22:06:02.961Z
firstPublishedAt: 2022-05-23T19:32:47.758Z
contentType: knownIssue
productTeam: Payments
author: 2mXZkbi0oi061KicTExNjo
tag: Payments
slug: wrong-message-error-when-using-a-nonexisting-gift-card
kiStatus: Backlog
internalReference: 584102
---

## Summary


there is an incorrect handling of one of the VTEX Gift Card System errors. When the user is filling in the Giftcard Redemption Code at checkout, if the user fills in a purchase code that does not exist, instead of being informed that the code is invalid, the following error will be displayed at checkout  "_A communication error with gift card system has occurred_". But actually, there is no connection problem, it's just that the voucher doesn't exist.



## Simulation



1. Go to the checkout page from a store already configured to process Gift cards as payment method
2. Select Gift card as the payment method and fill in a clearly not existing redemption code (Ex: aaaaa)
3. Close the purchase and the message error will be displayed on the checkout page



## Workaround


N/A

