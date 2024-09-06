---
title: 'Incomplete transactions appearing with Brazilian currency'
id: 7g0j3FGa5E8kNi9PM3kBOf
status: PUBLISHED
createdAt: 2024-04-01T13:37:35.197Z
updatedAt: 2024-04-01T13:37:36.114Z
publishedAt: 2024-04-01T13:37:36.114Z
firstPublishedAt: 2024-04-01T13:37:36.114Z
contentType: knownIssue
productTeam: Payments
author: 2mXZkbi0oi061KicTExNjo
tag: Payments
slug: incomplete-transactions-appearing-with-brazilian-currency
locale: en
kiStatus: Backlog
internalReference: 1007953
---

## Summary


Incomplete transactions ("No name" customer) can appear in Transactions section with R$ currency, those are result of creation error (payment data was not sent) but the orders are created correctly in local currency.

As these transactions are already lost there is no operational impact (visual bug).


##

## Simulation


When finishing a payment at checkout you can reload the page to "break" the process and check in UI if the complete transaction creation failed (looking for the "No name" one).


##

## Workaround


NA





