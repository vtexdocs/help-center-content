---
title: 'Legacy collection schedule does not respect SC Timezone.'
id: 6f0P1Fe9ha1hLQZq80QYOL
status: PUBLISHED
createdAt: 2022-01-23T02:35:26.292Z
updatedAt: 2022-11-25T22:10:37.553Z
publishedAt: 2022-11-25T22:10:37.553Z
firstPublishedAt: 2022-03-16T16:46:49.804Z
contentType: knownIssue
productTeam: Portal
author: 2mXZkbi0oi061KicTExNjo
tag: Portal
slug: legacy-collection-schedule-does-not-respect-sc-timezone
locale: en
kiStatus: Backlog
internalReference: 316054
---

## Summary


Legacy collection schedule does not respect SC Timezone.



## Simulation


- In the Legacy Collections application, create a new collection and use the scheduling time to activate or deactivate the collection. This schedule will consider UTC-0, and not the Timezone set on the Sales Channel Account Configuration.



## Workaround


Use the collection schedule considering the timezone UTC-0.

