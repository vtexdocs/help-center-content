---
title: 'Delivery at Home (endless aisle)'
id: 3361eYHJpKIIQkQYCmqYiO
status: ARCHIVED
createdAt: 2018-06-22T14:34:27.644Z
updatedAt: 2020-08-03T19:55:44.552Z
publishedAt: 
firstPublishedAt: 2018-06-22T14:36:44.545Z
contentType: trackArticle
productTeam: Shopping
slugEN: delivery-at-home-endless-aisle
locale: en
trackId: t3DOYAJjWgqAMeAKq2MWS
trackSlugEN: instore-setup
---

If you have set up your store using the __Easy Setup__ flow (first step of this track) your inStore is already running in the __Delivery at Home__ mode, allowing you to sell products from your e-commerce inventory.

Otherwise, you will need to make a change to the inStore settings.

Today this configuration is present in the Portal admin, more specifically in the file `checkout-instore-custom.js` and because it is a JavaScript present in several streams of application use, it is important that you have programming knowledge before changing it, to avoid breaking other features.

To enable __Delivery at home__ you need to find the `window.INSTORE_CONFIG` object present in this file and add the `shouldCheckIn` property with the `false` value so that inStore starts to consider the e-commerce inventory.

Do not remove any of the other properties present in this object, but the result should be something like:

```
window.INSTORE_CONFIG = {
  shouldCheckIn: false, // Allow delivery to home flow
}
```

## Multiple deliveries

In the __Delivery at Home__ scenario it is possible to enable __Multiple deliveries__ in the inStore, ie, when finalizing a purchase it is possible to define different types of delivery (economic, normal,...) for each product of the order.

This is a new feature that, in addition to being dependent on the __Checkout V6__, requires an internal configuration, so if you want to enable it in a store, contact VTEX.
