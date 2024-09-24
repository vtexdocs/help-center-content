---
title: 'Intermitent Site Editor content loss'
id: 3a5MlAoD2Z7Gu6HDS8wihD
status: PUBLISHED
createdAt: 2022-07-05T17:07:24.733Z
updatedAt: 2024-03-21T20:37:27.369Z
publishedAt: 2024-03-21T20:37:27.369Z
firstPublishedAt: 2022-07-05T17:07:25.091Z
contentType: knownIssue
productTeam: CMS
author: 2mXZkbi0oi061KicTExNjo
tag: CMS
slugEN: intermitent-site-editor-content-loss
locale: en
kiStatus: Scheduled
internalReference: 610533
---

## Summary


Every content change in Site Editor inserts changes to the content.json file, which is stored in a bucket on AWS S3. Some customers have reported a loss of Site Editor content after some common procedures of theme updates.


##

## Simulation


The scenario is intermittent, however, it has been reported in two different scenarios:

**1. When promoting a production workspace to master:**
Customers reported that when promoting a production workspace, containing changes in components, to the master environment, there was a loss of content in other workspaces.

**2. When installing a new version in a test workspace:**
Customers reported that when installing a new theme version in a test workspace, the content of the category pages was deleted.


##

## Workaround


N/A





