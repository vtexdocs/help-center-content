---
title: "RoundingMode changes do not work for percentual discounts"
id: yFJqHZeZu98rZfUnAVtR3
status: PUBLISHED
createdAt: 2025-03-12T16:53:44.101Z
updatedAt: 2025-03-12T16:53:45.144Z
publishedAt: 2025-03-12T16:53:45.144Z
firstPublishedAt: 2025-03-12T16:53:45.144Z
contentType: knownIssue
productTeam: Catalog
author: 2mXZkbi0oi061KicTExNjo
tag: Catalog
slugEN: roundingmode-changes-do-not-work-for-percentual-discounts
locale: en
kiStatus: Backlog
internalReference: 1192809
---

## Summary


Currently, when an user wishes to change the behaviour of how their promotions round the discount, the VTEX platform offers 3 options:

**Precise** --> no rounding is used
**Ceiling** --> nominal discounts are rounded up (i.e. 14,56 turns into 14,6)
**Floor** --> nominal discounts are rounded down (i.e. 14,56 turns into 14,5)

However, these rounding were expected to also work for percentual discount, but they do not.


##

## Simulation


A rounding mode change must be requested to the VTEX support team at first.

After that, create a promotion scenario as described above, testing for both a nominal discount (in which you'll see the rounding take effect) and a percentual discount (in which the rounding will not take any effect).


##

## Workaround


none





