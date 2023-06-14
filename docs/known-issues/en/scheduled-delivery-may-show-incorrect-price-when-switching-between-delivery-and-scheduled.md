---
title: 'Scheduled delivery may show incorrect price when switching between delivery and scheduled'
id: 1Jue9hi3G4ryML88dqWz4E
status: PUBLISHED
createdAt: 2023-03-13T20:40:19.424Z
updatedAt: 2023-03-13T20:40:20.098Z
publishedAt: 2023-03-13T20:40:20.098Z
firstPublishedAt: 2023-03-13T20:40:20.098Z
contentType: knownIssue
productTeam: Checkout
author: 2mXZkbi0oi061KicTExNjo
tag: Checkout
slug: scheduled-delivery-may-show-incorrect-price-when-switching-between-delivery-and-scheduled
locale: en
kiStatus: Backlog
internalReference: 770250
---

## Summary


When it's configured a shipping maximum value promotion, if you start changing between standard delivery and scheduled delivery several times, there may be a different scheduled delivery price in the UI


##

## Simulation



- Create a shipping maximum value promotion;
- Assemble a cart that has standard and scheduled delivery;
- Select the standard delivery;
- Select the scheduled delivery;
- Keep alternating it, and at some point, the scheduled delivery price may be different from the API


##

## Workaround


N/A



