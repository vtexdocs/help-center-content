---
title: Search doesn't work for a second folderlevel
id: 6oAmtEIyyWWciICgSuYC00
status: PUBLISHED
createdAt: 2017-04-11T22:25:02.223Z
updatedAt: 2022-12-22T20:43:21.872Z
publishedAt: 2022-12-22T20:43:21.872Z
firstPublishedAt: 2017-04-11T22:32:49.385Z
contentType: knownIssue
productTeam: Marketing & Merchandising
author: 2mXZkbi0oi061KicTExNjo
tag: Portal (CMS)
slug: search-doesnt-work-for-a-second-folderlevel
kiStatus: Backlog
internalReference: 
---

## Summary

<div class = "alert alert-warning">
  <strong>Warning</strong>: VTEX has two search options - VTEX search and VTEX Intelligent Search. This article refers to the VTEX search. To learn more about the VTEX Intelligent Search application, see <a href = "https://help.vtex.com/tracks/vtex-intelligent-search--19wrbB7nEQcmwzDPl1l4Cb">this track</a>.
</div>

In the [VTEX Search documentation](http://help.vtex.com/en/tutorial/how-does-vtex-search-work/), we have the following scenario:

According to the term sought, the system can render the contents of a layout if the folder has the name equal to the searched term.

If the searched term exactly matches the name of a folder configured in the Landing Page, this folder will be rendered. However for a portal structure where a landing page is inside another folder, this feature does not work:
`/folder1/folder2`
`http://www.yourstore.com/folder/landingpage`

## Simulation

Create a second folder level in the Portal.

1. Catalog > Portal > Web Sites > Select the Web Site > "/"
2. Within a folder, create a new folder
3. Assign a layout to this new folder
4. Search in your site for the name of the new folder - the result will be: 404 Page Not Found

## Workaround

Currently there is no workaround for this problem.

