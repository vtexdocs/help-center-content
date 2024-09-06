---
title: 'Hide product suggestions (recommendation)'
id: 7027gOkloW6sC0yuCCkkcK
status: ARCHIVED
createdAt: 2018-12-17T17:48:42.456Z
updatedAt: 2020-08-03T20:01:06.502Z
publishedAt: 
firstPublishedAt: 2018-12-17T18:35:36.153Z
contentType: trackArticle
productTeam: Shopping
slug: hide-product-suggestions-recommendation
locale: en
trackId: t3DOYAJjWgqAMeAKq2MWS
trackSlugEN: instore-setup
---

By default inStore includes a list of suggested products in the cart and in the product page.

![inStore recommendation](https://images.ctfassets.net/alneenqid6w5/5hN8l2xFTGMU4Gw8YGq0E8/dc9f7e8e4f02db0ae31dd50b08cacd31/inStore_recommendation.png)

If you want to hide the recommendations, you need to edit the `checkout-instore-custom.css` and `checkout-instore-custom.js` files in the Portal admin. This files are used across the application, so it is important that you have some programming knowledge before editing them, to avoid breaking other functionalities.

In the `checkout-instore-custom.css` file include the rule:

```
# recommendation-shelf {
  display: none;
}
```

In the `checkout-instore-custom.js` file you need to find the `window.INSTORE_CONFIG` object and add the code snippet below:

```
window.INSTORE_CONFIG = {
  recommendationsEnabled: false, // hiding recommendations (default is to show: true)
}
```

> __IMPORTANT__: Do not remove any of the other properties present in the `window.INSTORE_CONFIG` object, to avoid breaking other features.
 
After reloading inStore you will no longer see the list of suggestions.
