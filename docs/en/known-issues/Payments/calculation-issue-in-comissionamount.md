---
title: 'Calculation issue in comissionAmount'
id: 1E8DRneWHVncTu5bZ9hNtF
status: PUBLISHED
createdAt: 2024-03-15T21:13:28.729Z
updatedAt: 2024-03-15T21:13:29.705Z
publishedAt: 2024-03-15T21:13:29.705Z
firstPublishedAt: 2024-03-15T21:13:29.705Z
contentType: knownIssue
productTeam: Payments
author: 2mXZkbi0oi061KicTExNjo
tag: Payments
slugEN: calculation-issue-in-comissionamount
locale: en
kiStatus: Backlog
internalReference: 1001005
---

## Summary


This happens in a specific scenario of payout split with multiple payments and sellers (where both are accountable for payment processing charges and chargebacks). The sum of sellers `comissionAmount` is not equal to marketplace `amount` (rounding issue), this difference can cause a settlement denial by acquirer.


##

## Simulation


We were not able to simulate this as it involves several conditions.


##

## Workaround


NA




