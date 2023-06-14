---
title: 'Outdated Mastercard Debit regex is causing us to misidentify some BINs'
id: 5gx4dSY2P5gGE0JI661hGL
status: PUBLISHED
createdAt: 2022-08-20T00:03:11.640Z
updatedAt: 2022-11-25T22:04:24.418Z
publishedAt: 2022-11-25T22:04:24.418Z
firstPublishedAt: 2022-08-20T00:03:12.490Z
contentType: knownIssue
productTeam: Payments
author: 2mXZkbi0oi061KicTExNjo
tag: Payments
slug: outdated-mastercard-debit-regex-is-causing-us-to-misidentify-some-bins
kiStatus: Backlog
internalReference: 642136
---

## Summary


Some BINs are not being identified correctly at checkout. The card brand is determined by a regex that may eventually be out of date, causing the card brand to be unidentified or misidentified.



## Simulation



1. Configure two Payment Conditions one for Mastercard Debit
2. Add a random item to your cart in the store and choose to pay it by debit card
3. Fill in the card number with the Mastercard Debit BIN 551898 and complete it with random numbers
4. Fill the rest card information with fake data
5. As the card could not be identified, the checkout will ask to confirm the card number and the card brand can be already selected as another card brand



## Workaround


There's no workaround.

