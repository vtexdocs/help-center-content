---
title: 'Gift card expiration date does not match with the date chosen when it was created'
id: 57GeuSubkdDkQNwzL3nmup
status: PUBLISHED
createdAt: 2022-03-27T14:08:35.577Z
updatedAt: 2022-11-25T22:07:21.976Z
publishedAt: 2022-11-25T22:07:21.976Z
firstPublishedAt: 2022-03-27T14:08:36.056Z
contentType: knownIssue
productTeam: Payments
author: 2mXZkbi0oi061KicTExNjo
tag: Payments
slug: gift-card-expiration-date-does-not-match-with-the-date-chosen-when-it-was-created
kiStatus: Backlog
internalReference: 378436
---

## Summary


Customers are receiving an error when trying to pay with Gift Cards when the date of the purchase matches with the expiration date.



## Simulation


1. Create a gift card that expires the next day you create it.
2. Wait until UTC marks 0:00h. For example, in Chile, it would be at 8:00 pm (UTC-4).



## Workaround


The client needs to create the gift card using the API https://developers.vtex.com/vtex-rest-api/reference/gift-card#creategiftcard-1 and then manually chooses the date and hour.

