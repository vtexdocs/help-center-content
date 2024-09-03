---
title: 'Discounts on recurring purchases (V1) being considered as Manual Price, creating improper authority limits for stores that have active authority limit and manual price'
id: 76a7i1rKyTwQIStPXgi23j
status: ARCHIVED
createdAt: 2019-03-28T17:12:52.959Z
updatedAt: 2020-02-03T22:56:10.552Z
publishedAt: 
firstPublishedAt: 2019-03-28T17:14:59.644Z
contentType: knownIssue
productTeam: Post-purchase
author: authors_41
tag: OMS
slug: discounts-on-recurring-purchases-v1-being-considered-as-manual-price
locale: en
kiStatus: Open
internalReference: 
---

## Summary

In V1 recurrence when orders have discounts being applied to the items, these discounts are being filled as manual price, creating improper authority limits.

For these orders to follow their flow, today they need to be approved through VTEX DO or the OMS.

__Important: this bug only happens for stores that have active authority limit and manual price.__

## Simulation

To simulate this scenario the store needs to have manual price and authority limit.

1. Create a promotion for recurring orders;
2. When the recurrence is generated (recurring order) the discount will be considered as a manual price, creating the authority limit.

## Workaround

Migrate to Subscriptions V2 system where the bug has been eliminated. V1 will soon be deprecated.

