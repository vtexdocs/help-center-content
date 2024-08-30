---
title: 'Enabling order filter by salesperson'
id: tbrE64fi2EvQeVpGtNpEo
status: DRAFT
createdAt: 2020-06-28T19:01:07.153Z
updatedAt: 2021-11-25T14:00:01.587Z
publishedAt: 
firstPublishedAt: 2020-06-28T19:06:04.684Z
contentType: trackArticle
productTeam: Shopping
slug: enabling-order-filter-by-salesperson
locale: en
trackId: 1z9kBm12oBPyVNDo1ivVc2
trackSlugEN: enabling-order-filter-by-salesperson
---

>❗ Changing the filter settings, as explained in this article, involves editing the `checkout-instore-custom.js` file. This operation should only be performed by people with programming experience. Incorrect changes to this file may cause critical errors.

In inStore, you can see the list of all orders completed in a store. However, it sometimes makes sense for a salesperson to see only the orders they have personally completed. To enable this option, it is necessary to edit the file `checkout-instore-custom.js`.

Inside this file, in the VTEX Admin, you must find the `window.INSTORE_CONFIG` object and add the `OMSFilters` object. The code should look like the example below:

```json
window.INSTORE_CONFIG = {
  OMSFilters: {
    'f_UtmSource': '{{ vendor.storeId }}',
    'CallCenterOperatorEmail': '{{ vendor.username }}',
  },
}
```

With that, the app filters orders to display only those made by the salesperson currently logged in inStore.

>❗ Do not remove any of the other properties present in the `window.INSTORE_CONFIG` object, to avoid breaking other functionalities.

After reloading the datain the inStore app, by clicking on the __Reset app local data__ button, the seller will see only the orders closed by him or her.
