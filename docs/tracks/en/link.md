---
title: 'Link'
id: 1dEVfBkRxoO62i0Ge6mYoG
status: DRAFT
createdAt: 2018-06-14T16:08:28.920Z
updatedAt: 2020-03-13T21:24:44.380Z
publishedAt: 
firstPublishedAt: 2018-06-14T16:13:34.130Z
contentType: trackArticle
productTeam: VTEX IO
slug: link
trackId: 2qYWraccosS2ayg2kusaUo
trackSlugEN: vtex-io-getting-started
---

To [link](http://help.vtex.com/en/faq/what-does-linking-an-app-mean) your app and start seeing changes in your code in real time, type the following command in the terminal:

`vtex link` or `vtex link --verbose`

After that, we will deploy your app and perform a series of tasks until you see the "Available routes" or "App running" messages printed in the console.

To confirm that it works, you can simply click on one of the "Available routes". You can also go to the browser and access the following URL:

`https://{Workspace}--{AccountName}.myvtex.com/*`

The asterisk (`*`) must be replaced with any path declared by the app.

If your app utilizes __GraphQL__, there will be a message in the console with a link to the __GraphiQL__, an in-browser IDE for testing your __Queries__ and __Mutations__.

Now open the `index.js` file in your local project and change something. Save and check out the changes in the browser!
