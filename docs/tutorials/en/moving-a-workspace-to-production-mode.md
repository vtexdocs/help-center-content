---
title: Moving a workspace to production mode
id: 20rRlimYVKSsk6gwAaEceY
status: DRAFT
createdAt: 2018-02-22T01:36:37.169Z
updatedAt: 2020-03-13T21:24:57.591Z
publishedAt: 
firstPublishedAt: 2018-02-22T01:41:19.074Z
contentType: tutorial
productTeam: VTEX IO
author: authors_24
slug: moving-a-workspace-to-production-mode
legacySlug: moving-a-workspace-to-production-mode
subcategory: Z46a6rHVAaAucoiW0skQQ
---

Once the developer is sure of his changes to the code, that is, if your app already was [installed](https://help.vtex.com/en/tutorial/installing-an-app) and tested, they can put the workspace in production mode. 

This means that from now on that workspace will be ready to receive traffic.

The main difference caused by the production mode in the IO behavior is the way to serve some static files. For example, JavaScript is minified to gain efficiency, but in this mode the hot module replacement is disabled.

To do this, use the command below:

`vtex workspace production true`
