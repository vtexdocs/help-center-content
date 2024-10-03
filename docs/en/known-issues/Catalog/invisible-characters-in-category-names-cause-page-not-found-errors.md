---
title: "Invisible Characters in Category Names Cause 'Page Not Found' Errors"
id: 4np2BZUF1EmlLmV0KTpnrf
status: PUBLISHED
createdAt: 2024-07-05T13:11:13.031Z
updatedAt: 2024-07-05T13:11:14.090Z
publishedAt: 2024-07-05T13:11:14.090Z
firstPublishedAt: 2024-07-05T13:11:14.090Z
contentType: knownIssue
productTeam: Catalog
author: 2mXZkbi0oi061KicTExNjo
tag: Catalog
slugEN: invisible-characters-in-category-names-cause-page-not-found-errors
locale: en
kiStatus: Backlog
internalReference: 1061149
---

## Summary


When creating categories via API or the admin panel, the category name is not properly validated, allowing invisible characters to be included. Since the category name is used to generate the category URL, these invisible characters are also included in the URL. This results in the category page not functioning correctly and returning a "Page Not Found" error.


##

## Simulation



1. Create a category with an invisible character in its name using the API or admin panel.
2. Access the API URL for this category.
3. Observe the "Page Not Found" error.


##

## Workaround



The workaround is to remove the invisible character from the category name, which will also update the URL of the page, resolving the issue.




