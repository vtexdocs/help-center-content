---
title: Is it possible to change data directly in a master workspace?
id: 4T7uB5tv9m8ciAEcK8WCEg
status: DRAFT
createdAt: 2017-11-21T19:36:56.054Z
updatedAt: 2020-03-13T21:24:57.344Z
publishedAt: 
firstPublishedAt: 2019-05-16T17:47:39.017Z
contentType: tutorial
productTeam: VTEX IO
author: authors_24
slug: is-it-possible-to-change-data-directly-in-a-master-workspace
legacySlug: is-it-possible-to-change-data-directly-in-a-master-workspace
subcategory: Z46a6rHVAaAucoiW0skQQ
---

__You can not make changes to a master workspace__. A master workspace is in production, that is, it corresponds to the version that is available to the end user.

Instead, work on the new code in another workspace, then change the status of that workspace to `production true` and then promote it.
