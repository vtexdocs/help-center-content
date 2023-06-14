---
title: 'Quantity being modified in the wrong item with product-list component (IO/SF)'
id: jWaas8MOVv5NYSImgA9ao
status: PUBLISHED
createdAt: 2022-12-16T18:10:39.004Z
updatedAt: 2022-12-16T18:41:03.772Z
publishedAt: 2022-12-16T18:41:03.772Z
firstPublishedAt: 2022-12-16T18:22:18.673Z
contentType: knownIssue
productTeam: Store Framework
author: authors_84
tag: Store Framework
slug: quantity-being-modified-in-the-wrong-item-with-product-list-component-io-sf
locale: en
kiStatus: Backlog
internalReference: 402976
---

## Summary

In the ["vtex.product-list"](https://github.com/vtex-apps/product-list) component, used on the IO/SF Minicart ([vtex.minicart](https://github.com/vtex-apps/minicart) v2) or in "Cart v0" ([vtex.checkout-cart](https://github.com/vtex-apps/checkout-cart)), when a cart has the same item sliced in more than one occurrence (for example when it's needed for discounts apportionment or maybe when it has itemAttachments), to change the quantity for their second occurrence will call the API for their first occurrence, so the summed quantity for the item will be wrong.

Other side effects: this bug is changing the quantity for completely different items, or the item is going to a third line – which disappears after reloading the page, so seems somewhat related to the cart optimistic behavior.

## Simulation

Considering this cart: [https://checkoutio.myvtex.com/cart/add/?sku=282&qty=7&seller=1&sc=1](https://checkoutio.myvtex.com/cart/add/?sku=282&qty=7&seller=1&sc=1)
- the __7 units__ will be presented as `1+6` due to the promotion (which sliced the item to ensure their unitary price after being rounded).
- changing the __2nd__ item from 6 to 8 should result in `1+8`(__9 units__)
- this change is being applied on the 1st item, so behaving as from 1 to 8
- the final result is going as `8+6` (__14 units*__)

*\*the items will be regrouped by the API since the rounding is not a problem for the resulted price.*

If the cart has completely different SKUs, where both can be presented sliced (3un from SKU A as `1+2` and 3un from SKU B as `1+2`), to change the quantity for the second item or on their second occurrence will behave as the other bugs mentioned.

## Workaround

N/A

