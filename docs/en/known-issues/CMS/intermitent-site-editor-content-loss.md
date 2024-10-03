---
title: 'Intermitent Site Editor content loss'
id: 3a5MlAoD2Z7Gu6HDS8wihD
status: PUBLISHED
createdAt: 2022-07-05T17:07:24.733Z
updatedAt: 2024-10-03T15:25:39.202Z
publishedAt: 2024-10-03T15:25:39.202Z
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


Every content change in Site Editor inserts changes to the content.json file, stored in a bucket on AWS S3 and on the content_render.js. Some customers have reported a loss of Site Editor content after some standard procedures, such as workspace promotion.

The content from the workspace is not taken into the master environment after the promotion process. Since the default promotion policy for handling conflicts is `masterWins` the workspace content is not taken to production on conflict cases.


##

## Simulation


The scenario is intermittent. However, it has been reported in two different scenarios:

**1. When promoting a production workspace to master:**
This is the step to step where normally this issue occurs:

1.1 Creation of a production workspace;

1.2 Update the workspace content. A new reference to this content is created, pointing to a file on S3 that is separated from the master;

1.3 Update the master; this will create a conflict. The reference created above starts pointing to the master, so the problem occurs. It only goes back to normal after the conflict resolution;

1.4 Make the promotion process on the workspace. It will still point to the master content but invalidate the workspace content.



Remember that in this case, the `content.json` file and the `content_render.js `file can have different information, so the content will only be "lost" after updating something on the site editor. This means the content will not necessarily be lost right after promoting the workspace.

**2. When installing a new version in a test workspace:**
Customers reported that when installing a new theme version in a test workspace, the content of the category pages was deleted.

_Update: This scenario was solved due to a fix made on the_ `pages-graphql`_app_


##

## Workaround


N/A





