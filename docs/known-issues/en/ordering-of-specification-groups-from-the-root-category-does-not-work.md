---
title: 'Ordering of specification groups from the root category does not work'
id: 5iuLxVdAuK70VMYGts7CzJ
status: PUBLISHED
createdAt: 2022-08-09T00:46:23.102Z
updatedAt: 2024-02-16T20:25:08.305Z
publishedAt: 2024-02-16T20:25:08.305Z
firstPublishedAt: 2022-08-09T00:46:23.684Z
contentType: knownIssue
productTeam: Catalog
author: 2mXZkbi0oi061KicTExNjo
tag: Catalog
slug: ordering-of-specification-groups-from-the-root-category-does-not-work
locale: en
kiStatus: No Fix
internalReference: 634129
---

## Summary


Currently, when specification groups are created in the root category, it is not possible to reorder them by Admin or API



## Simulation



1. Create two specification groups in the root category
2. See that you cannot change the order by Admin, despite the message that it is possible
3. Try changing the order using the Update Specification Group route (`api/catalog_system/pvt/specification/group`)
4. Note that the position field in the response is not changed



## Workaround


N/A

