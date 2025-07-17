---
title: "Price Table rules not persisted when creating multiple rules without refreshing the page"
id: 3ytvnLRltsfrNWpNVaCLr2
status: PUBLISHED
createdAt: 2025-07-08T12:48:18.889Z
updatedAt: 2025-07-08T12:57:31.528Z
publishedAt: 2025-07-08T12:57:31.528Z
firstPublishedAt: 2025-07-08T12:48:19.786Z
contentType: knownIssue
productTeam: Pricing & Promotions
author: 2mXZkbi0oi061KicTExNjo
tag: Pricing & Promotions
slugEN: price-table-rules-not-persisted-when-creating-multiple-rules-without-refreshing-the-page
locale: en
kiStatus: Backlog
internalReference: 1256473
---

## Summary


When creating multiple price rules for **Price Tables**, the interface fails to reload existing rules properly. This may result in previously created rules disappearing from the UI, and in some cases, being overwritten when new rules are added, leading to data loss. This behavior does not occur when rules are associated with Trade Policies, only with price tables.

###

##

## Simulation



- Access the admin of any account
- Go to Price Rules screen
- Create a price rule associated with a **Price Table** (not a Trade Policy).
- Without refreshing the page, create a second and third rule for the same price table.
- Observe that:
  - The first and second rules may disappear from the UI.
  - After adding the second rule, the first one is **no longer persisted**.
- Reproduce this a few times and confirm that only the last rule remains saved, while the others are lost.


##

## Workaround


Refresh the page (F5) after creating each price rule for Price Tables. This ensures that the UI reloads all existing rules before a new one is added, avoiding inconsistencies and loss of previously saved rules.




