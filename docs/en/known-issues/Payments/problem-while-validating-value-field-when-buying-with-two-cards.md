---
title: "Problem while validating value field when buying with two cards"
id: 6dr0p9WQPSHLkFaSbjI9J7
status: PUBLISHED
createdAt: 2022-03-28T01:05:19.734Z
updatedAt: 2024-07-01T18:48:07.379Z
publishedAt: 2024-07-01T18:48:07.379Z
firstPublishedAt: 2022-03-28T01:05:20.361Z
contentType: knownIssue
productTeam: Payments
author: 2mXZkbi0oi061KicTExNjo
tag: Payments
slugEN: problem-while-validating-value-field-when-buying-with-two-cards
locale: en
kiStatus: No Fix
internalReference: 460683
---

## Summary


When a buyer decides to pay with two credit cards and also want to change the amount payed for each card, It turns out that when typing non numbers characters in the value field, our validation has different behavior depending on where the user inserts this character.

- If we try to type a character other than number at the end of the value= Our validation only prevents that character
- If we try to enter a character other than number in the middle of the value= Our validation erases numbers, changes the entered value.
- If we try to type a character other than a number at the beginning of the value= We overwrite it with an "undefined" and display the following error



## Simulation


Go to any store checkout and choose to pay with two cards and you will be able to make these tests



## Workaround


N/A

