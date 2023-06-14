---
title: 'Linking your development app'
id: bKXgZWMLrUkimeUwWSy0u
status: DRAFT
createdAt: 2018-02-21T23:05:11.367Z
updatedAt: 2020-03-13T21:25:02.421Z
publishedAt: 
firstPublishedAt: 2018-02-21T23:06:21.883Z
contentType: tutorial
productTeam: VTEX IO
author: authors_24
slug: linking-your-development-app
legacySlug: linking-your-development-app
subcategory: Z46a6rHVAaAucoiW0skQQ
---

To link your app and start seeing changes in your code in real time, type the following command in the terminal:

`vtex link`

After that, IO performs a series of tasks on its own until the following message is displayed in the terminal, once everything goes OK:

__Build finished successfully__

To confirm that it works, go to the browser and access the following URL:

`https://{Workspace}--{AccountName}.myvtex.com/*`

- `{Workspace}` must be replaced by the name of your development workspace
- `{AccountName}` must be replaced with your store name
- Asterisk `*` must be replaced with any path known by the app

Enter the `index.js` file and change something. Save and check out the change in the browser!
