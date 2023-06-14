---
title: 'Regex conflict causes us to misidentify the Cards Brand'
id: 338SA4RpmfHwaqoY62uRjS
status: PUBLISHED
createdAt: 2022-03-25T22:11:51.426Z
updatedAt: 2022-11-25T22:09:01.048Z
publishedAt: 2022-11-25T22:09:01.048Z
firstPublishedAt: 2022-03-25T22:11:51.852Z
contentType: knownIssue
productTeam: Payments
author: 2mXZkbi0oi061KicTExNjo
tag: Payments
slug: regex-conflict-causes-us-to-misidentify-the-cards-brand
kiStatus: Backlog
internalReference: 316213
---

## Summary



Regex conflict causes us to misidentify the Cards Brand



## Simulation



1. Configure two Payment Conditions one for Elo credit card processing and one for Mastercard credit card processing
2. Buy a random item in the store and chose to pay it by credit card.
3. Fill in the card number with the Elo BIN 506731 and complete with random numbers.
4. Fill the rest card information with fake data
5. Finish the purchase
6. Go to admin and search for the transaction already created and the payment will be identified as Mastercard instead of Elo




## Workaround



N/A

