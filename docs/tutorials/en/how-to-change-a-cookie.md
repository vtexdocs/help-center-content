---
title: 'Changing a Cookie'
id: 37m4zqneEUaOmAKokqWS6w
status: PUBLISHED
createdAt: 2019-01-24T20:45:50.039Z
updatedAt: 2019-12-31T15:19:43.194Z
publishedAt: 2019-12-31T15:19:43.194Z
firstPublishedAt: 2019-01-24T22:03:00.444Z
contentType: tutorial
productTeam: Others
author: authors_35
slug: how-to-change-a-cookie
locale: en
legacySlug: how-to-change-a-cookie
subcategory: 1luKrYptdi8WoMYckakUaM
---

Some cookies are generated directly by the VTEX Database. These you cannot change. The cookies generate externally and entered via JavaScript such as Google Tag Manager can be edited. Editing can be done in JavaScript, as in the generic case below where the time of validity is defined.

`document.cookie = "username=John Doe; expires=Thu, 18 Dec 2013 12:00:00 UTC; path=/";`

You must remember that VTEX will not recognize cookies with special characters. Whenever this happens, the user will not be able to load another page on the store (blank screen).
