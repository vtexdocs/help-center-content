---
title: 'Install an app from a private Registry'
id: 1Tkvy9EXlK0uuyiykGWg6a
status: DRAFT
createdAt: 2017-11-22T14:02:21.883Z
updatedAt: 2020-03-06T13:58:06.135Z
publishedAt: 
firstPublishedAt: 
contentType: tutorial
productTeam: Others
author: 
slug: install-an-app-from-a-private-registry
legacySlug: install-an-app-from-a-private-registry
subcategory: 
---

By default, when you install an app using the `vtex install` command, what you're doing is fetching that app from the public Registry, which is accessible to any user.

But you can also install an app from a private Registry.

To do this, simply use one of the two commands below, replacing `{account}` with the name of the desired Registry account.

`vtex install -r {account}` or `vtex install --registry {account}`
