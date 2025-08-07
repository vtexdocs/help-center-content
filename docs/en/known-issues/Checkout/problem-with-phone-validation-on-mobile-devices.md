---
title: "Problem with phone validation on mobile devices"
id: 2KpjpNZEbAZ7PFFPvMvwNA
status: PUBLISHED
createdAt: 2024-01-12T14:24:34.604Z
updatedAt: 2024-01-12T14:24:56.084Z
publishedAt: 2024-01-12T14:24:56.084Z
firstPublishedAt: 2024-01-12T14:24:35.388Z
contentType: knownIssue
productTeam: Checkout
author: 2mXZkbi0oi061KicTExNjo
tag: Checkout
slugEN: problem-with-phone-validation-on-mobile-devices
locale: en
kiStatus: Backlog
internalReference: 964802
---

## Summary


The phone field validation on mobile devices is not behaving as intended. When the expected number of characters is reached, the validation correctly marks the field with a check. However, when additional characters are added and then removed one by one, the validation fails to recognize that the character count is still higher than expected, incorrectly marking the entry as valid. The validation also marks inputs with fewer characters than expected as valid.


##

## Simulation



1. Navigate to the checkout page by purchasing any random item.
2. During the profile step, input a phone number until the field is validated and marked with a check.
3. Experiment by adding more characters to the phone number and then removing them one by one, observing how the field retains the checkmark even with a reduced number of characters compared to the initial validation.


##

## Workaround


N/A





