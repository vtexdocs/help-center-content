---
title: What to do with error when accessing Orders module
id: 4X1NvGRhzWsqeC0QIGaMWu
status: PUBLISHED
createdAt: 2017-12-19T01:13:12.248Z
updatedAt: 2023-03-31T14:59:05.634Z
publishedAt: 2023-03-31T14:59:05.634Z
firstPublishedAt: 2017-12-19T01:28:44.397Z
contentType: frequentlyAskedQuestion
productTeam: Identity
author: authors_24
slug: what-to-do-with-error-when-accessing-orders-module
legacySlug: error-accessing-oms
---

There's a common error of access to **Orders** module: when trying to enter the module directly, the user finds the following message: 

`Looks like something went wrong. We'll try again in xx seconds or you can try now.`

Usually, this error occurs when the user authentication has expired. Go to the store's admin homepage at:

`https://{AccountName}.myvtex.com/admin`

The system will probably request your login. In such case, authenticate and try to access Orders management once again.

If that doesn't solve your problem, it may be that the **Orders** module is experiencing a temporary unavailability, which may be confirmed on our [status page](http://status.vtex.com/).
