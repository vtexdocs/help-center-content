---
title: 'Outdated Elo regex is causing us to misidentify some BINs'
id: 45vx88VCQ0yZynkVxGqSq8
status: PUBLISHED
createdAt: 2024-04-10T17:25:57.376Z
updatedAt: 2024-04-10T17:25:58.309Z
publishedAt: 2024-04-10T17:25:58.309Z
firstPublishedAt: 2024-04-10T17:25:58.309Z
contentType: knownIssue
productTeam: Payments
author: 2mXZkbi0oi061KicTExNjo
tag: Payments
slugEN: outdated-elo-regex-is-causing-us-to-misidentify-some-bins
locale: en
kiStatus: Backlog
internalReference: 1015043
---

## Summary


Some BINs are not being correctly identified at checkout. The card brand is determined by a regex that could become outdated, leading to unidentified or misidentified card brands.


##

## Simulation



1. Configure two Payment Conditions one for Elo
2. Add a random item to your cart in the store and choose to pay for it by Credit Card
3. Fill in the card number with the Elo BIN 65057000 and complete it with random numbers
4. Fill the rest of the card information with fake data
5. As the card could not be identified, the checkout will ask to confirm the card number and the card brand can be already selected as another card brand


##

## Workaround



The user should change the selected card brand at checkout by clicking on the right brand.




