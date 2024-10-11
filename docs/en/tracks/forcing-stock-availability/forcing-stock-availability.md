---
title: 'Forcing stock availability'
id: 2SgRUekV8FO4lg2aO6YTmh
status: ARCHIVED
createdAt: 2020-06-28T19:07:00.903Z
updatedAt: 2021-11-25T14:00:08.281Z
publishedAt: 
firstPublishedAt: 2020-06-28T19:11:02.443Z
contentType: trackArticle
productTeam: Shopping
slugEN: forcing-stock-availability
locale: en
trackId: 1z9kBm12oBPyVNDo1ivVc2
trackSlugEN: forcing-stock-availability
---

>❗ The configuration to force stock availability, explained in this article, involves changing the `checkout-instore-custom.js` file. This operation should only be performed by people with programming experience. Incorrect changes to this file can cause critical errors.

By default, if an SKU has zero stock in the store catalog, it is not possible to sell that SKU with inStore.

However, there are cases where - even if the stock is zeroed - the SKU exists and is available in the physical store. And you may want to give your salespeople the ability to sell SKUs in this situation.

InStore allows this through a configuration performed in the `checkout-instore-custom.js` file that enables the __Force Stock Availability__ feature.

To activate this feature, you need to include the `sellWithoutStockInHands` property in the `window.INSTORE_CONFIG` object, with the value `true`.

The code should look something like the example below:

```json
window.INSTORE_CONFIG = {
  sellWithoutStockInHands: true,
}
```

>❗ Do not remove any of the other properties present in the `window.INSTORE_CONFIG` object, to avoid breaking other functionalities.
