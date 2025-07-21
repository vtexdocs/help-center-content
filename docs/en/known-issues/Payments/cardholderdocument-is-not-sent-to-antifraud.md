---
title: "cardholderDocument is not sent to anti-fraud."
id: 4KiYd2Duw9Njxl96zuIOIX
status: PUBLISHED
createdAt: 2023-05-22T18:24:46.148Z
updatedAt: 2023-05-22T18:24:46.652Z
publishedAt: 2023-05-22T18:24:46.652Z
firstPublishedAt: 2023-05-22T18:24:46.652Z
contentType: knownIssue
productTeam: Payments
author: 2mXZkbi0oi061KicTExNjo
tag: Payments
slugEN: cardholderdocument-is-not-sent-to-antifraud
locale: en
kiStatus: Backlog
internalReference: 829864
---

## Summary



When creating the payload to send for anti-fraud analysis, we are not instantiating the cardholderDocument according to data from the doc, Send Antifraud Data, even if the configuration in the manifest is done according to our documentation, the shopper will be obliged to put it in the checkout if so configured in the affiliation of anti-fraud, but under no circumstances will inform about the cardholder's document be sent to the anti-fraud provider in the risk analysis.



##

## Simulation



1. Configure the "Cardholder document field" dropdown as mandatory or optional;
2. Register a rule with configured anti-fraud;
3. Make a purchase by filling in the CPF information on the card-UI at checkout
4. Check that in the Send Anti-fraud Data body, the cardholderDocument is not sent.


##

## Workaround


There is no workaround available





