---
title: 'How to add a custom text in the printout of the order'
id: 41o8JT6hYQUqQWm0QkmUC6
status: ARCHIVED
createdAt: 2018-12-27T18:32:05.579Z
updatedAt: 2021-08-24T20:47:12.698Z
publishedAt: 
firstPublishedAt: 2018-12-27T19:45:31.137Z
contentType: trackArticle
productTeam: Shopping
slugEN: how-to-add-a-custom-text-in-the-printout-of-the-order
locale: en
trackId: t3DOYAJjWgqAMeAKq2MWS
trackSlugEN: instore-setup
---

By default, the printout of the order does not come with any custom text.

If you want to add some extra text to the order print, you need to edit the `checkout-instore-custom.js` file in the Portal admin. Because they are files used in various usage flows of the application, it is important that you know program before changing them to avoid breaking other functionality.

In the `checkout-instore-custom.js` file you need to find the` window.INSTORE_CONFIG` object and add the available code snippet below:

```
window.INSTORE_CONFIG = {
  printedOrderExtraText: 'Write here your custom text,
}
```

> __IMPORTANT__: Do not remove any of the other properties present in the `window.INSTORE_CONFIG` object, to avoid breaking other features.

After reloading the inStore, when you print an order you will see that extra text in the printout.

Quick Example:

Before adding the extra text we would have an impression as follows:
![inStore recommended text before](https://raw.githubusercontent.com/vtexdocs/help-center-content/refs/heads/main/docs/en/tracks/instore-setup/how-to-add-a-custom-text-in-the-printout-of-the-order_1.png)

By changing the `checkout-instore-custom.js` file by putting the following extra text:

```
window.INSTORE_CONFIG = {
  printedOrderExtraText: 'Essa nota não tem validade fiscal',
}
```

Now when the order is printed, we will have:
![inStore recommended text after](https://raw.githubusercontent.com/vtexdocs/help-center-content/refs/heads/main/docs/en/tracks/instore-setup/how-to-add-a-custom-text-in-the-printout-of-the-order_2.png)
