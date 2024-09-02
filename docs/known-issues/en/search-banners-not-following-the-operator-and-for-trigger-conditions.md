---
title: "Search banners not following the operator 'AND' for trigger conditions"
id: 4nQLt5q3Mz2DxvBIyZknXj
status: PUBLISHED
createdAt: 2024-06-20T21:17:46.485Z
updatedAt: 2024-06-20T21:17:47.308Z
publishedAt: 2024-06-20T21:17:47.308Z
firstPublishedAt: 2024-06-20T21:17:47.308Z
contentType: knownIssue
productTeam: Intelligent Search
author: 2mXZkbi0oi061KicTExNjo
tag: Intelligent Search
slug: search-banners-not-following-the-operator-and-for-trigger-conditions
locale: en
kiStatus: Backlog
internalReference: 1053614
---

## Summary


Conditions for search banners (managed via "/admin/search/v4/banners/") don't support the operator "AND" as presented in their trigger rules. The UI is wrong, and the operator behaves as "OR" fixedly.

Any of the conditions filled there will be enough to present the banner on the page (PLP).

Be mindful that setting a department there (category level 1) will apply the banner on any of its subcategories, as this is part of the full category path.


##

## Simulation


Create a banner with the following trigger rules:

- where "department" is "appliances"
- **and**"category" is "refrigerators"

The banner will not be restricted to the full category path "/appliances/refrigerators?map=c,c". It will be applied in the department and its subcategories, and any category named "refrigerators", even if it's not part of this specific department.


##

## Workaround


N/A





