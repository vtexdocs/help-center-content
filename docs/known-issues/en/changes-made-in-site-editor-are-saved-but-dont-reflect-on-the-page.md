---
title: 'Changes made in Site Editor are saved but don't reflect on the page'
id: 2peoCL4YJTTike5XPwrxWT
status: PUBLISHED
createdAt: 2023-04-06T18:58:03.576Z
updatedAt: 2023-04-06T18:58:03.993Z
publishedAt: 2023-04-06T18:58:03.993Z
firstPublishedAt: 2023-04-06T18:58:03.993Z
contentType: knownIssue
productTeam: CMS
author: 2mXZkbi0oi061KicTExNjo
tag: CMS
slug: changes-made-in-site-editor-are-saved-but-dont-reflect-on-the-page
kiStatus: Backlog
internalReference: 786145
---

## Summary


When you create a new page on Pages and then change its path to something different, the routeId doesn't change. So when you create another page with the same path as the first one the routeId will remain the same. And then the site editor will have problems saving the content of these two pages due to conflict on their routes.


##

## Simulation


1 - Create a new page
2 - Change the path of this page
3 - Create another page with the same path as the first one (the original path, before you change it)
4 - Try to make changes on those pages in the site editor


##

## Workaround


Delete the older path and try not to change it again. If you need to change it, it is best to delete it and create a new one.





