---
title: 'Bin sent does not match an associated Card brand'
id: 4GvoMVXIVOdFueGiNfcTvk
status: PUBLISHED
createdAt: 2022-03-26T14:46:51.930Z
updatedAt: 2022-11-25T22:09:12.062Z
publishedAt: 2022-11-25T22:09:12.062Z
firstPublishedAt: 2022-03-26T14:46:52.370Z
contentType: knownIssue
productTeam: Payments
author: 2mXZkbi0oi061KicTExNjo
tag: Payments
slug: bin-sent-does-not-match-an-associated-card-brand
kiStatus: Backlog
internalReference: 308896
---

## Summary


The platform allows you to send a BIN with another card brand flag. For example: A VISA BIN can be informed, but you can mark the Mastercard card brand flag.
However, clients may not have configured the card brand on the acquirer platform, causing an operational cost.



## Simulation



1. Go to checkout with a random item
2. buy it by Credit Card and fill in a Visa BIN in the card number field and then complete the card number with random numbers
3. fill the rest of card fields with random informations
4. change the card brand flag that appear in the card number field and close the purchase
5. Go to transaction admin and see the transaction already created with a wrong card brand information



## Workaround


N/A

