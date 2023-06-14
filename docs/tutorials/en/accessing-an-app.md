---
title: Accessing an app
id: 3ZTGx0IWsokiE2W6S2Ww6O
status: DRAFT
createdAt: 2018-02-22T02:04:08.027Z
updatedAt: 2020-03-13T21:24:58.133Z
publishedAt: 
firstPublishedAt: 2018-02-22T02:05:44.120Z
contentType: tutorial
productTeam: VTEX IO
author: authors_24
slug: accessing-an-app
legacySlug: accessing-the-app
subcategory: Z46a6rHVAaAucoiW0skQQ
---

Once an app is installed on a particular workspace, it becomes accessible by that workspace (and only by it).

You can access it directly through two different URLs: the __canonical URL__ and the __public route__.

### Canonical URL

The canonical URL can access any path to which the application responds, even if you don't declare any public route with that name.

All canonical URLs require access permission.

The format of the canonical URL is as follows:

`{app-name}`.`{vendor}`.vtex.io/`{account}`/`{workspace}`/*

- `{app-name}`: The name of your app.
- `{vendor}`: signature of the app developer.
- `{account}`: the store account.
- `{workspace}`: the workspace you are working on.
- The asterisk (\*) must be replaced by any path known to the app.

### Public route

Unlike canonical URLs, public routes must be explicitly declared.

In addition, they have no access control.

The public route has the following format:

`{workspace}`--`{account}`.myvtex.com/*

- `{workspace}`: the workspace you are working on.
- `{account}`: the store account.
