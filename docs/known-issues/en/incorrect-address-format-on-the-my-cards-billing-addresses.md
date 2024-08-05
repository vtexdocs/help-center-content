---
title: "Incorrect address format on the 'My Cards' billing addresses"
id: 25QxVtMOazrxugHZqFrhSG
status: PUBLISHED
createdAt: 2023-04-17T17:40:24.795Z
updatedAt: 2023-04-17T17:40:25.411Z
publishedAt: 2023-04-17T17:40:25.411Z
firstPublishedAt: 2023-04-17T17:40:25.411Z
contentType: knownIssue
productTeam: Payments
author: 2mXZkbi0oi061KicTExNjo
tag: Payments
slug: incorrect-address-format-on-the-my-cards-billing-addresses
locale: en
kiStatus: Backlog
internalReference: 791779
---

## Summary


When adding a new Billing Address on vtex.my-cards, the incorrect address format is displayed. This happens when the user is trying to add a new credit card, and it occurs only when the new address the user is trying to type is from a different country. What happens, for example, is that the user chooses a new address from USA, while the others are from Canada, all Canada addresses will be formatted as a USA address.


##

## Simulation


1. Click on "Add a new card" on the credit card page
2. Choose a different saved address in the “Card's billing address” section
3. When we choose a Canadian address all address is displayed as Canada even if its a USA address
4. When we choose the USA address all address is displayed as USA even if it Canadian address


##

## Workaround


N/A





