---
title: 'Enabling product recommendations'
id: 321NRjb9YjABQPReJJ5wr2
status: ARCHIVED
createdAt: 2020-06-28T18:47:06.689Z
updatedAt: 2021-11-25T13:59:58.252Z
publishedAt: 
firstPublishedAt: 2020-06-28T18:55:50.482Z
contentType: trackArticle
productTeam: Shopping
slugEN: enabling-product-recommendations
locale: en
trackId: 1z9kBm12oBPyVNDo1ivVc2
trackSlugEN: enabling-product-recommendations
---

>❗ The enablement of the product recommendation settings in inStore, explained in this article, involves changing the `checkout-instore-custom.js` and `checkout-instore-custom.css` files. This operation should only be performed by people with programming experience. Incorrect changes to these files can cause critical errors.

By default, inStore shows a list of suggested products to the salesperson in two stages of the order:
- In the cart
- On the product page

If you want to hide these recommendations, you need to edit the files `checkout-instore-custom.css` and `checkout-instore-custom.js`.

## Editing the CSS file

Like the inStore customization JavaScript file, `checkout-instore-custom.css` must be accessed through the VTEX administrative panel (as explained in the [inStore Customizations article](https://help.tex.com/tracks/instore-customizations--1z9kBm12oBPyVNDo1ivVc2/4mwdBrFsmE2EPE0FzgX28b)).

![25. Enable product recommendations - 1 - EN.png?h=250](//images.ctfassets.net/alneenqid6w5/tPaSFJCJ0k3mk1GJh14r0/339b836008564c70f192820041a9df62/25._Enable_product_recommendations_-_1_-_EN.png_h_250)

In the `checkout-instore-custom.css` file, include the following CSS rule:

```json
#recommendation-shelf {
  display: none;
}
```

This rule hides the product recommendation component from the front-end.

Don't forget to save the file.

## Editing the JavaScript file

In addition to editing the CSS file, it is necessary to make a change to the `checkout-instore-custom.js` file. Open this file in the VTEX Admin and, inside the `window.INSTORE_CONFIG` object, add the `recommendationsEnabled` property, with the value `false`. The code block should look like this:

```json
window.INSTORE_CONFIG = {
  recommendationsEnabled: false, // hiding recommendations (the default to display is true)
}
```

Save the file with the change, then open the inStore app menu and update the data by clicking the __Reset app local data__ button. Once this is done, the salespeople will no longer see product recommendations.

>❗ Do not remove any of the other properties present in the `window.INSTORE_CONFIG` object, to avoid breaking other functionalities.
