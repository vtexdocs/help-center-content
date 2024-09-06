---
title: 'Understanding the price change rule'
id: tutorials_752
status: ARCHIVED
createdAt: 2017-04-27T21:58:25.042Z
updatedAt: 2021-05-26T15:26:54.825Z
publishedAt: 
firstPublishedAt: 2017-04-27T23:03:42.161Z
contentType: tutorial
productTeam: Marketing & Merchandising
author: authors_84
slug: understanding-the-price-change-rule
locale: en
legacySlug: understanding-the-price-change-rule
subcategoryId: 3O1NvPgBPqE0qU88MSQaie
---

Changing the prices of your store is a delicate task that can be made in several ways. To increase the safety of this action, in addition to the alteration logs, it is possible to set up an acceptable percentage of changes in the price of an item. This function ensures that the price of products will not be changed and harm the operation of your store.

By default, this price variation limit is set up for a maximum price increase of 70% and a decrease of 30%.
Considering the original settings, for example, an SKU with a value of R$100.00 may have its price increased to a maximum value of R$170.00 (70% of 100) or reduced to a minimum value of R$70.00 (30% of 100).

In case the price of the SKU is outside this range, the **REST API** will return the following message: `“The price is outside the range set, sku: 123, original price: 100.0000, maximum price: 170.0000, minimun price:70.0000″`

All other options to update prices will also be blocked.

The price limits percentages can be removed or redefined by accessing the __Settings__ tab on the __Prices__ module. 

![trava-variação-preço en](https://images.ctfassets.net/alneenqid6w5/7q0Dp7AIQokuGIGcIKOmqm/e1798e4757cba658c2dd5b5bde1a69bf/trava-varia____o-pre__o_en.png)

Some marketplaces also have this price variation limit. If you wish to change prices beyond the limit ranges, contact the marketplace asking for the change.
