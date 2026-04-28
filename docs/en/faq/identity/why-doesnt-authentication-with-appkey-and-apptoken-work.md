---
title: "Why authentication with appkey and apptoken doesn't work?"
id: 3oReWVLDgLjXoKsMrUSy4m
status: PUBLISHED
createdAt: 2019-03-12T21:06:30.165Z
updatedAt: 2023-03-28T20:26:16.769Z
publishedAt: 2023-03-28T20:26:16.769Z
firstPublishedAt: 2019-03-12T21:13:49.769Z
contentType: frequentlyAskedQuestion
productTeam: Identity
author: TAUXpa4XWCsIaUOoksGIE
slugEN: why-doesnt-authentication-with-appkey-and-apptoken-work
locale: en
legacySlug: untitled-entry-2019-03-12-at-09-06-30
---

At VTEX, authentications of [APIs](https://developers.vtex.com/vtex-developer-docs/docs/getting-started-list-of-rest-apis) are handled by [appKey and appToken](https://developers.vtex.com/vtex-developer-docs/docs/getting-started-authentication). There are however several scenarios in which an integration could fail due to errors related to these authentication keys. The following information will help you solve some of the common appKey and appToken authentication issues:

## AppKey and AppToken association

Configuring a [role](/en/docs/tutorials/roles) having different access levels on the platform is possible when accessing __Roles__, within the [Account settings](/en/docs/tutorials/account-settings-overview) menu.

When created, no pair of appKey and appToken is linked to a role. It's necessary to __link both keys to a desired role__.

One of the reasons for integration errors can be a lack of association of the created keys with the role. Another possible error is the link of the appKey and appToken to a profile that, although being registered, does not have enough access to perform that specific task on the platform.

> ℹ️ Only the [Sponsor user](/en/docs/tutorials/what-is-the-sponsor-user) has the necessary permission to edit the keys, meaning to create the appKey and appToken used in integrations with a store.

## Mistyping

Both keys should be filled out in their respective fields, without spacing and by respecting the __case sensitivity__. One small error while typing can impede the well-functioning of an integration.

Check for possible errors by accessing __Account Management__ and __[Users](/en/docs/tutorials/managing-admin-users)__.

> ℹ️ The appToken cannot be recovered, once it has been created and displayed to the user.

