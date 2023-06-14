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
slug: why-doesnt-authentication-with-appkey-and-apptoken-work
legacySlug: untitled-entry-2019-03-12-at-09-06-30
---

At VTEX, authentications of [APIs](https://developers.vtex.com/vtex-developer-docs/docs/getting-started-list-of-rest-apis) are handled by [appKey and appToken](https://developers.vtex.com/vtex-developer-docs/docs/getting-started-authentication). There are however several scenarios in which an integration could fail due to errors related to these authentication keys. The following information will help you solve some of the common appKey and appToken authentication issues:

## AppKey and AppToken association

Configuring a [role](https://help.vtex.com/en/tutorial/roles--7HKK5Uau2H6wxE1rH5oRbc) having different access levels on the platform is possible when accessing __Roles__, within the [Account settings]( https://help.vtex.com/en/tutorial/visao-geral-configuracoes-da-conta--6USYxLuzNt4uAkvjdPF7I8) menu.

When created, no pair of appKey and appToken is linked to a role. It's necessary to __link both keys to a desired role__.

One of the reasons for integration errors can be a lack of association of the created keys with the role. Another possible error is the link of the appKey and appToken to a profile that, although being registered, does not have enough access to perform that specific task on the platform.

<div class="alert alert-info">
Only the <a href="https://help.vtex.com/tutorial/what-is-the-master-user--3oPr7YuIkEYqUGmEqIMSEy">Sponsor user</a> has the necessary permission to edit the keys, meaning to create the appKey and appToken used in integrations with a store.
</div>

## Mistyping

Both keys should be filled out in their respective fields, without spacing and by respecting the __case sensitivity__. One small error while typing can impede the well-functioning of an integration.

Check for possible errors by accessing __Account Management__ and __[Users](https://help.vtex.com/en/tutorial/managing-users--tutorials_512)__.

<div class="alert alert-info">
The appToken cannot be recovered, once it has been created and displayed to the user.
</div>

