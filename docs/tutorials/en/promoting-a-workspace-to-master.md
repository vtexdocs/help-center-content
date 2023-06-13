---
title: Promoting a workspace to master
id: EZrGbVVY1ECcEC0YE0aA8
status: DRAFT
createdAt: 2017-09-12T21:37:03.530Z
updatedAt: 2020-03-13T21:24:57.603Z
publishedAt: 
firstPublishedAt: 2019-05-16T17:44:09.660Z
contentType: tutorial
productTeam: VTEX IO
author: authors_24
slug: promoting-a-workspace-to-master
legacySlug: promoting-a-workspace-to-master
subcategory: Z46a6rHVAaAucoiW0skQQ
---

If your workspace is already in production mode, it can be promoted to master. When we promote a workspace to master, all changes made in it become available to the end user, that is, your app finally becomes available to its public.

After the developer has already tested the workspace configuration and is sure that everything is OK, he can promote this workspace to master.

To do this, enter the workspace and use the following command:

`vtex workspace promote`

The status of a workspace that is in master is `production true`.

