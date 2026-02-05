---
title: 'Why after signing in to the administrative panel I am redirected to my store?'
id: 3JOlJmgmacAqCQEe0kwGwg
status: PUBLISHED
createdAt: 2017-10-01T03:35:33.165Z
updatedAt: 2021-04-06T20:20:56.407Z
publishedAt: 2021-04-06T20:20:56.407Z
firstPublishedAt: 2017-10-01T03:43:27.490Z
contentType: frequentlyAskedQuestion
productTeam: Identity
author: authors_4
slugEN: why-after-signing-in-to-the-administrative-panel-i-am-redirected-to-my-store
locale: en
legacySlug: why-after-signing-in-to-the-administrative-panel-i-am-redirected-to-my-store
---

This scenario happens when the email used to log in to the Admin has access to some Callcenter feature configured through [roles](/en/docs/tutorials/roles) in __Account management__.

Callcenter profiles block access to the __Catalog__, that is, the user can not add a new product, for example. If he or she must access this module, the user must work with two different logins.

If the role has permission for callcenter and also other modules, the access must be done directly through the module's URL. For the Orders management, for example, it would be: `https://{AccountName}.myvtex.com/admin/checkout`
