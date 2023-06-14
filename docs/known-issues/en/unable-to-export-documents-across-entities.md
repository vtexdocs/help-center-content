---
title: Unable to export documents across entities
id: 5ed6rXDZNpVa5VOyAGrttf
status: PUBLISHED
createdAt: 2019-04-11T00:23:14.583Z
updatedAt: 2022-12-22T20:46:24.799Z
publishedAt: 2022-12-22T20:46:24.799Z
firstPublishedAt: 2019-04-11T21:57:42.707Z
contentType: knownIssue
productTeam: Master Data
author: 2mXZkbi0oi061KicTExNjo
tag: Master Data
slug: unable-to-export-documents-across-entities
kiStatus: Backlog
internalReference: 
---

## Summary

The user wants to export documents that are present in a separate entity. However, the cross entity exporting option was discontinued. 

In this example, we look at an user wanting to export emails from the address entity.


## Simulation



## Workaround

In order to achieve the same result, follow the following steps:

1. Export all relevant fields inside AD, including the userID.
2. Then, export the desired field from CL along with the userID.
3. With the two spreadsheets downloaded, merge the two datasets using the userID as key.

