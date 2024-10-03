---
title: 'Set the store display texts'
id: 1lTwIvUzgIcs28QGCGK0Ag
status: PUBLISHED
createdAt: 2018-01-25T18:21:47.414Z
updatedAt: 2023-03-24T21:37:33.261Z
publishedAt: 2023-03-24T21:37:33.261Z
firstPublishedAt: 2018-01-25T19:53:01.303Z
contentType: tutorial
productTeam: Marketing & Merchandising
author: authors_24
slugEN: set-the-store-display-language
locale: en
legacySlug: set-the-store-display-language
subcategoryId: 7ogirQ8NClawO2X6xdgCKc
---

If you wish to change the display texts of your store, see the questions to consider in this article.

### Store Texts (XML Text)

Most of the texts that appear in the store are rendered from the variables that are in the __Store Texts__ section, inside the Catalog.

You can refer to these variables on the Admin VTEX menu by accessing **Store Settings > Storefront > Settings**, and then clicking the __STORE TEXTS__ tab.

### Checkout

The checkout language is defined by the trade policy.

Therefore, to translate it you need to change the value of the __Culture Info__ field in the trade policy registration screen.

If you want the language to be English for any scenario, for example, change the Culture Info of all store policies to `en-us`.

To do so, follow the steps below:

1. Still in **Store Settings**, go to **Channels** and click on __Trade Policies__.
2. Choose the desired trade policy and click __Edit__.
3. Change the __Locale__ field to the language you want.
4. Click `Save`.

### Front-end

Some store texts are not rendered by internal variables nor defined by the trade policy. For these cases, you need to manipulate the texts in the front-end with JavaScript or, preferably (because it's a simpler method), manipulating the CSS.
