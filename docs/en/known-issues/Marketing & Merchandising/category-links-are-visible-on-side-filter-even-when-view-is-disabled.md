---
title: 'Category links are visible on side filter even when view is disabled'
id: 5NwWyNDLtmKu6kCu6KYgs6
status: PUBLISHED
createdAt: 2018-05-03T17:37:48.868Z
updatedAt: 2022-12-22T20:45:19.537Z
publishedAt: 2022-12-22T20:45:19.537Z
firstPublishedAt: 2018-05-03T17:46:45.530Z
contentType: knownIssue
productTeam: Marketing & Merchandising
author: 2mXZkbi0oi061KicTExNjo
tag: Portal (CMS)
slugEN: category-links-are-visible-on-side-filter-even-when-view-is-disabled
locale: en
kiStatus: Backlog
internalReference: 
---

## Summary

Category links appear in the side filter even when the flags "__Category appears in the top menu and side menu of the Site__" and "__Category has an active link on the Site__" are disabled.

## Simulation

1. Access the catalog.
2. Acess __Categories__.
3. Select a category.
4. Click __Actions__ > __Change__.
5. Deselect the flags "__Category appears in the top menu and side menu of the Site__" and "__Category has an active link on the Site__".
6. Enter the category page one level above through the store.

## Workaround

To hide these unwanted categories on the front-end, the workaround would be to implement a script that hides the H4 tags that don't have an `A` tag as their child.

