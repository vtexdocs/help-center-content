---
title: 'Is it possible to change data in a master workspace?'
id: 5sDRHWvEcgaCOkYU24QAU6
status: DRAFT
createdAt: 2018-02-22T02:12:27.733Z
updatedAt: 2020-03-06T13:56:18.388Z
publishedAt: 
firstPublishedAt: 2018-02-22T02:14:13.962Z
contentType: frequentlyAskedQuestion
productTeam: VTEX IO
author: authors_24
slug: is-it-possible-to-change-data-in-a-master-workspace
legacySlug: is-it-possible-to-change-data-in-a-master-workspace
---

__No__. A master workspace is in production, that is, it corresponds to the version that is available to the end user.

The status of a workspace that's in master is `production true`.

You can not make changes to this workspace.

Instead, work the new code on another workspace, then change the status of that workspace to `production true` and then promote it.

<div class="alert alert-warning">
You can not make changes to a master workspace.
</div>
