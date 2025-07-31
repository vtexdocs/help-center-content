---
title: "Transaction settling while Giftcard payment stuck in authorized status after autosettle error"
id: 3IMj58gMkwdWb6ZcRWdYQ
status: PUBLISHED
createdAt: 2025-03-28T15:40:05.734Z
updatedAt: 2025-07-24T17:49:53.748Z
publishedAt: 2025-07-24T17:49:53.748Z
firstPublishedAt: 2025-03-28T15:40:06.313Z
contentType: knownIssue
productTeam: Payments
author: 2mXZkbi0oi061KicTExNjo
tag: Payments
slugEN: transaction-settling-while-giftcard-payment-stuck-in-authorized-status-after-autosettle-error
locale: en
kiStatus: Backlog
internalReference: 1201336
---

## Summary


The Giftcard payments get stuck in `authorized` status after any autosettle error in GiftcardHub's request.
Even after a retry and successful settlement, the payment status doesn't change.

The message in the transaction interactions is:


    Message: Unknown Error on AutoSettleA chamada a 'https://janus-payments-link.vtex.com.br//giftcardproviders//giftcards//transactions//settlements' retornou o status HTTP '()'.


This doesn't depend on the HTTP status returned.


##

## Simulation


N/A


##

## Workaround


Open a ticket soliciting the status update.





