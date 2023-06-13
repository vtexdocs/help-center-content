---
title: Price mismatch error when integrating with select marketplaces
id: 2oKzaHhwrSeW282EOciSE2
status: PUBLISHED
createdAt: 2018-12-07T16:20:45.819Z
updatedAt: 2022-12-22T15:17:30.632Z
publishedAt: 2022-12-22T15:17:30.632Z
firstPublishedAt: 2018-12-07T17:31:14.631Z
contentType: knownIssue
productTeam: Channels
author: TnXcuQydAAOuwWACo864E
tag: Pricing & Promotions
slug: price-mismatch-error-when-integrating-with-select-marketplaces
kiStatus: Fixed
internalReference: 
---

## Summary

The user is able to successfully create a commercial policty and set a fix price for each integrated marketplace.  

Sometimes the marketplace is not notified of the price's expiration causing a mismatch between the account and marketplace's prices.  

Known marketplaces where this issue has occured:
- Amazon
- CNova
- Mercado Livre
- Walmart

## Simulation

This known issue occurs with accounts that are integrated normally to marketplaces with distinct commercial policies.

## Workaround

Open a ticket and request us to manually update and force indexation.  This solves the problem temporarily.

