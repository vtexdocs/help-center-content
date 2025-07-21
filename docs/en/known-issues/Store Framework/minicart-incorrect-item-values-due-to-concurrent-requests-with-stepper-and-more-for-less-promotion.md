---
title: "Minicart Incorrect Item Values Due to Concurrent Requests with Stepper and More for Less Promotion"
id: 6bUHjmbccywPYoCEa0hxVW
status: PUBLISHED
createdAt: 2025-02-25T14:49:00.909Z
updatedAt: 2025-02-25T14:49:18.538Z
publishedAt: 2025-02-25T14:49:18.538Z
firstPublishedAt: 2025-02-25T14:49:01.581Z
contentType: knownIssue
productTeam: Store Framework
author: 2mXZkbi0oi061KicTExNjo
tag: Store Framework
slugEN: minicart-incorrect-item-values-due-to-concurrent-requests-with-stepper-and-more-for-less-promotion
locale: en
kiStatus: Backlog
internalReference: 1185655
---

## Summary


Checkout sync issue occurs when the minicart, using the stepper method (with the quantity selector set to the mode property as "stepper"), sends multiple requests. Items involved in a "Buy More Save More" promotion result in incorrect item values due to item splitting, causing multiple requests to be sent and leading to discrepancies in the checkout API response.


##

## Simulation



1. Add items eligible for the "Buy More Save More" promotion to the minicart.
2. Ensure the quantity selector has the mode property set to "stepper".
3. Use the stepper method to update the quantity of multiple items at once in the minicart.
4. Observe that the item values returned by the checkout API are incorrect due to multiple requests being sent from the minicart after item splits.


##

## Workaround


Use the quantity selector as default.





