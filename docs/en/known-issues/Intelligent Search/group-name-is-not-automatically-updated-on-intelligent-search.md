---
title: 'Group name is not automatically updated on Intelligent Search'
id: 1GKDLtbKdYA0hq9YUhF2Bt
status: PUBLISHED
createdAt: 2023-05-08T19:00:44.637Z
updatedAt: 2023-05-08T19:00:45.207Z
publishedAt: 2023-05-08T19:00:45.207Z
firstPublishedAt: 2023-05-08T19:00:45.207Z
contentType: knownIssue
productTeam: Intelligent Search
author: 2mXZkbi0oi061KicTExNjo
tag: Intelligent Search
slugEN: group-name-is-not-automatically-updated-on-intelligent-search
locale: en
kiStatus: Backlog
internalReference: 821481
---

## Summary


Currently, there are 2 distinct collection modules:

1) The New Collections Module
2) The legacy CMS Module

This difference is detailed here: https://help.vtex.com/en/tracks/catalogo-101--5AF0XfnjfWeopIFBgs3LIQ/3moFonW33dgOYDrU21Z1X0

The legacy module has two distict data clusters, the collection (A) and the group name (B)

 ![](https://raw.githubusercontent.com/vtexdocs/help-center-content/refs/heads/main/docs/en/known-issues/Intelligent Search/group-name-is-not-automatically-updated-on-intelligent-search_1.png)

However, the new collections module nly displaus the collection name, not its GroupName:

 ![](https://raw.githubusercontent.com/vtexdocs/help-center-content/refs/heads/main/docs/en/known-issues/Intelligent Search/group-name-is-not-automatically-updated-on-intelligent-search_2.png)

The Intelligent Search result are based on the Group Name, which is why, on cases that updates are done only on the new UI, the results are not reflected on the front end and the search queries.




##

## Simulation


1 - create a collection using either UI
2 - update the collection on the new application only, making no changes to the legacy.
3 - check the search results and see it'll not be updated.




##

## Workaround


Manually update the GroupName on the legacy UI and click "Save Group" to reindex the collection.





