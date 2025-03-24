---
title: 'Canonical tags are not applied after 3rd category level'
id: 6HU8WLT5yVRBqeBmGgYRsi
status: PUBLISHED
createdAt: 2023-11-08T13:31:23.182Z
updatedAt: 2024-10-10T14:50:38.058Z
publishedAt: 2024-10-10T14:50:38.058Z
firstPublishedAt: 2023-11-08T13:31:24.275Z
contentType: knownIssue
productTeam: Store Framework
author: 2mXZkbi0oi061KicTExNjo
tag: Store Framework
slugEN: canonical-tags-are-not-applied-after-3rd-category-level
locale: en
kiStatus: Backlog
internalReference: 932349
---

## Summary


Canonical tags are not applied after 3rd category level when having a category tree with more than 3 levels (department, category and subcategory), the other above levels aren't displayed in canonical. The only exception is when the routes are stored in rewriter.


##

## Simulation



1. Create any 4th level subcategory
2. Access the page created
3. Check the Canonical for it on the console, it will not show anything after the 3rd level. Only 3rd and bellow.


##

## Workaround


Run the bootstrap query on rewriter vtex.routes-bootstrap@0.x:


    {bootstrap{categories}}

