---
title: "Early Capture wrongfully competing with Automatic Capture on AuthorizeDotNet"
id: 2IDoJIBiGzhkVZGHurLsnj
status: PUBLISHED
createdAt: 2023-07-20T18:08:30.934Z
updatedAt: 2023-07-20T18:08:31.479Z
publishedAt: 2023-07-20T18:08:31.479Z
firstPublishedAt: 2023-07-20T18:08:31.479Z
contentType: knownIssue
productTeam: Payments
author: 2mXZkbi0oi061KicTExNjo
tag: Payments
slugEN: early-capture-wrongfully-competing-with-automatic-capture-on-authorizedotnet
locale: en
kiStatus: Backlog
internalReference: 866068
---

## Summary


In order for us to understand this behavior, first we need to comprehend the difference between automatic capture and early capture:

**Automatic Capture:** It will call the settlement request automatically once the date is reached, no matter if the transaction is or isn't approved by the acquirer and the antifraud.

**Early Capture:** It will call the settlement request after the antifraud approves the transaction, once the amount of days configured is reached.

In this connector, the automatic capture is hard coded to happen after 4 days, while the early capture can be configured to a maximum of 10 days after antifraud approval. They end up competing with each other, and if the early capture is configured to a value bigger than 4 days the automatic capture will always occur sooner, so it will always be called first.

This makes the values allowed in the early capture to be useless if they are bigger than 4 days.


##

## Simulation




1. Configure the AuthorizeDotNet connector in your store;
2. Set the field "Early Capture" to an amount higher than 4 days;
3. Make a test transaction;
4. Go to the Transaction UI and see as the schedule value for the automatic capture is called first.


##

## Workaround


N/A





