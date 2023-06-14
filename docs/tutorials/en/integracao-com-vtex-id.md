---
title: 'Integrating with VTEX ID'
id: 4wGcnjMDg5KpLc40o14dDd
status: DRAFT
createdAt: 2019-01-23T18:56:08.943Z
updatedAt: 2022-08-04T22:35:48.188Z
publishedAt: 
firstPublishedAt: 2019-01-23T19:43:43.591Z
contentType: tutorial
productTeam: Identity
author: authors_4
slug: integracao-com-vtex-id
legacySlug: integracao-com-vtex-id
subcategory: 14V5ezEX0cewOMg0o0cYM6
---

VTEX does not support integration with VTEX ID (our authentication and authorization system) inside third-party environments.

If you want an integrated login flow between different systems, the best way is to use an OAuth provider.

VTEX ID can be fully integrated to OAuth 2.0 services, which can be extended to the administrative environment. Read more about it here: [Creating an OAuth2 authentication](/en/faq/creating-an-oauth2-authentication)

As expected, the native flow delivered by VTEX ID will always be the shortest one possible, optimized for the best user experience, especially for e-commerce environments.

Therefore, the best alternative for a unified authentication experience is to use a _"web view"_ in the external service that brings VTEX ID to the user.

Whenever the user logs in, cookies containing the authorization token are created. From there, it will be identified by VTEX services and APIs, where it can take the actions that are pertinent only to identified users. Read more about it here: [Checking which user is currently authenticated](https://help.vtex.com/tutorial/checking-which-user-is-currently-authenticated--4vLALC0yrsJydfaY56Zshq).
