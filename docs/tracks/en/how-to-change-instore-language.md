---
title: 'How to change inStore language'
id: 6fBUrqT2KIQ6WW2GIYiUI8
status: DRAFT
createdAt: 2018-09-14T21:00:24.112Z
updatedAt: 2020-08-03T20:00:39.626Z
publishedAt: 
firstPublishedAt: 2018-09-14T21:19:21.733Z
contentType: trackArticle
productTeam: Shopping
slug: how-to-change-instore-language
trackId: t3DOYAJjWgqAMeAKq2MWS
trackSlugEN: instore-setup
---

On portal V2, you'll find an inStore file designed for customizations. Just access the following link, replacing `{{AccountName}}` with your store's Account Name.

`https://{{AccountName}}.myvtex.com/admin/portal#/sites/default/code/files/checkout-instore-custom.js`

If inStore app is correctly installed in your store, you'll be able to locate the part of the file responsible for language settings.


```js
/* Locale configurations */

window.LOCALE_MESSAGES = {
  locale: 'en',
  messages: {
    en: {},
  },
}
```

By canging the locale property with values such as `pt`, `en` or `es`, you'll be setting up the language displayed on the app. Just make the necessary adjustments and save the file.

The next time you reload the app, the new language will be displayed on the screen.


### Available languages
The inStore app offers a fully translated interface on these languages:

- Portuguese: use the `pt` value.
- English: use the `en` value.
- Spanish (`coming soon`): use the `es` value.
