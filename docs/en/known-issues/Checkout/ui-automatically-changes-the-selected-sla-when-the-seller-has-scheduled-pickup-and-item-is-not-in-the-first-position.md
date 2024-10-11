---
title: 'UI automatically changes the selected SLA when the seller has scheduled pick-up and item is not in the first position'
id: 7Jcp2B8YnlWXHNqU4W0VfC
status: PUBLISHED
createdAt: 2023-06-13T23:59:24.235Z
updatedAt: 2023-06-13T23:59:24.804Z
publishedAt: 2023-06-13T23:59:24.804Z
firstPublishedAt: 2023-06-13T23:59:24.804Z
contentType: knownIssue
productTeam: Checkout
author: 2mXZkbi0oi061KicTExNjo
tag: Checkout
slugEN: ui-automatically-changes-the-selected-sla-when-the-seller-has-scheduled-pickup-and-item-is-not-in-the-first-position
locale: en
kiStatus: Backlog
internalReference: 843602
---

## Summary


In a cart where there are at least two products fulfilled by different sellers, if both sellers have scheduled pick-up and the 2nd item has several SLA options, the UI gets lost and automatically selects a different SLA and shows the message "There are no time slots available for this date.", not allowing to go to the payment step.


##

## Simulation



- Configure two sellers with scheduled pick-up;
- Assemble a cart where a seller fulfills the second item with at least two scheduled pick-ups;
- Select a window delivery for the first item in the cart; the message "There are no time slots available for this date." will be shown for the 2nd item;
- Try selecting another window delivery for the 2nd item; the UI will change and show the message again;


##

## Workaround


N/A




