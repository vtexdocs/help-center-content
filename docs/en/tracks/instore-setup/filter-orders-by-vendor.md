---
title: 'Filter orders by sales representative'
id: 3cx02v6OPY20Mue4KKokEM
status: ARCHIVED
createdAt: 2018-06-28T16:17:22.135Z
updatedAt: 2020-08-03T19:59:26.945Z
publishedAt: 
firstPublishedAt: 2018-06-28T16:55:25.065Z
contentType: trackArticle
productTeam: Shopping
slug: filter-orders-by-vendor
locale: en
trackId: t3DOYAJjWgqAMeAKq2MWS
trackSlugEN: instore-setup
---

With inStore you can see the listing of all completed orders in a store:

![pedidos finalizados](https://images.ctfassets.net/alneenqid6w5/2bBNpiFuswIAqsc2EGuAMe/ee70cebba8bef3fe609f31dd5a7d905c/pedidos_finalizados.png)

However, sometimes it makes sense for a sales representative to see only the orders made by him. To enable this option you need to edit the `checkout-instore-custom.js` file in the Portal Admin. Because it is a JavaScript present in several streams of application use, it's important that you have programming knowledge before changing it, to avoid breaking other features.

Inside the file you need to find the `window.INSTORE_CONFIG` object and add the code snippet available below:

```json
window.INSTORE_CONFIG = {
  OMSFilters: {
    'f_UtmSource': '{{ vendor.storeId }}',
    'CallCenterOperatorEmail': '{{ vendor.username }}',
  },
}
```

With that we will be filtering the orders to display only those made by the seller currently logged into inStore.

__IMPORTANT__: Do not remove any of the other properties present in the `window.INSTORE_CONFIG` object, to avoid breaking other features.

After reloading inStore the result should be as follows:

![pedidos finalizados filtrados por vendedor](https://images.ctfassets.net/alneenqid6w5/HhNBrdQZA2YAWQa8aUm6U/4f71b847a38caabe9b708bc070fda396/pedidos_finalizados_filtrados_por_vendedor.png)
