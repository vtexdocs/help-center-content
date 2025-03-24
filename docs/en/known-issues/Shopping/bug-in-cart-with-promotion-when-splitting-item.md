---
title: 'Bug in Cart with promotion when splitting item'
id: 26EY5QcY4wcGm88okke8SY
status: PUBLISHED
createdAt: 2017-05-24T20:20:57.562Z
updatedAt: 2019-12-31T15:17:20.897Z
publishedAt: 2019-12-31T15:17:20.897Z
firstPublishedAt: 2017-05-26T19:35:05.050Z
contentType: knownIssue
productTeam: Shopping
author: authors_37
tag: Catalog
slugEN: bug-in-cart-with-promotion-when-splitting-item
locale: en
kiStatus: Fixed
internalReference: 
---

## Summary

In the Cart, according to the selected quantity of the same item and the selection of a service - packaging or warranty, for example - associated with this item, the item split occurs, ie, it shows the same item two times, one with service and another one without service.

The Promotions module is not considering this "splited" item to add to the value of the cart in the promotions that have the criterion "Minimum Order Value", thus not giving the expected benefit to the customer in this specific scenario.

## Simulation

- Create promotion with Cart criterion "Minimum Order Value"
- Associate SKU with a service: packaging or extended warranty, for example
- In your site, insert the SKU in the Cart
- Increase its quantity to 2
- Select the Service option
- Verify that the same item now appears twice
- Verify that the benefit is not given, since the total sum of the Cart, without considering the item "splited", does not reach the criterion set in the promotion

## Workaround

Temporarily remove the SKU service option until the Rates and Benefits team resolves the bug.

