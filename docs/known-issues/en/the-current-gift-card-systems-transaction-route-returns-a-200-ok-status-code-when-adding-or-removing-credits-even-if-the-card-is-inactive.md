---
title: 'The current gift card system's /transaction route returns a 200 OK status code when adding or removing credits, even if the card is inactive.'
id: 4d5oeiLIvxLqmA1uHtZmrw
status: PUBLISHED
createdAt: 2023-04-24T20:31:14.640Z
updatedAt: 2023-05-08T17:54:43.745Z
publishedAt: 2023-05-08T17:54:43.745Z
firstPublishedAt: 2023-04-24T20:31:15.517Z
contentType: knownIssue
productTeam: Payments
author: 2mXZkbi0oi061KicTExNjo
tag: Payments
slug: the-current-gift-card-systems-transaction-route-returns-a-200-ok-status-code-when-adding-or-removing-credits-even-if-the-card-is-inactive
kiStatus: Backlog
internalReference: 795997
---

## Summary


Currently, our gift card system does not include a check to verify if a gift card is active before adding or removing credits. Although this route only concerns making gift card transactions, it's the only way to do so, thus it is expected that some validation will be done.

Therefore, to address this issue, it may be helpful to update the /transaction route to return a more informative status code, such as a 400 Bad Request or 404 Not Found, when attempting to add or remove credits to an inactive gift card. Additionally, providing clear error messages to the user can help prevent misunderstandings and ensure that transactions are accurately processed.


##

## Simulation


Make a request to /transaction route to add or remove credits using a deactivated gift card.


##

## Workaround


N/A





