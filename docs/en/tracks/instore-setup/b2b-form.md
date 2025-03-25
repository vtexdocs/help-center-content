---
title: 'B2B Form'
id: 2o7cyfIWtmAEE2y8KkYQcM
status: ARCHIVED
createdAt: 2018-06-28T17:07:01.490Z
updatedAt: 2020-08-03T20:00:05.795Z
publishedAt: 
firstPublishedAt: 2018-06-28T19:07:28.945Z
contentType: trackArticle
productTeam: Shopping
slugEN: b2b-form
locale: en
trackId: t3DOYAJjWgqAMeAKq2MWS
trackSlugEN: instore-setup
---

This article is for those who wish to accept legal entities as clients.

The __B2B Form__ feature allows a purchase to be made by legal entities - optionally (individuals keep being accepted as well) or mandatory (B2B only).

To activate the __B2B Form__ in inStore, you will need to edit the `checkout-instore-custom.js` file in the Portal admin. Because it is a JavaScript present in several streams of application use, __it's very important that you have programming knowledge before changing it__, to avoid breaking other functionalities.

Inside the file you need to find the `window.INSTORE_CONFIG` object and add the `customerProfile.isCorporate` property with the value `{optional: true}` to enable the __B2B__ Form as optional and thus accept both individuals and legal entities as clients; or `{optional: false}` to allow only legal entities as clients.

Do not remove any of the other properties present in this object. The result should be something like:

For legal entities to be optional:
```
window.INSTORE_CONFIG = {
  customerProfile: {
    isCorporate: {optional: true},
  },
}
```

For legal entities to be mandatory:
```
window.INSTORE_CONFIG = {
  customerProfile: {
    isCorporate: {optional: false},
  },
}
```

Examples of how the form with legal entity is presented in inStore:

__B2B Form__ - optional and closed:

![b2b-opcional-fechado](https://raw.githubusercontent.com/vtexdocs/help-center-content/refs/heads/main/docs/en/tracks/instore-setup/b2b-form_1.png)

__B2B Form__ - optional and open:

![b2b-opcional-aberto](https://raw.githubusercontent.com/vtexdocs/help-center-content/refs/heads/main/docs/en/tracks/instore-setup/b2b-form_2.png)

__B2B Form__ - mandatory (all fields come already open):

![b2b-obrigatorio](https://raw.githubusercontent.com/vtexdocs/help-center-content/refs/heads/main/docs/en/tracks/instore-setup/b2b-form_3.png)
