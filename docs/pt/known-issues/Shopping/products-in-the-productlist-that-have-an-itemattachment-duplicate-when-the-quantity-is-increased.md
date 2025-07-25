---
title: 'Products in the `product-list` that have an `itemAttachment` duplicate when the quantity is increased'
id: 2rKPKD21uXZ8iSIq8wNiVf
status: PUBLISHED
createdAt: 2021-09-17T14:25:17.638Z
updatedAt: 2022-12-22T20:41:07.695Z
publishedAt: 2022-12-22T20:41:07.695Z
firstPublishedAt: 2021-09-17T14:30:26.084Z
contentType: knownIssue
productTeam: Shopping
author: 2mXZkbi0oi061KicTExNjo
tag: Checkout,VTEX IO
slugEN: products-in-the-productlist-that-have-an-itemattachment-duplicate-when-the-quantity-is-increased
locale: en
kiStatus: Backlog
internalReference: 
---

## Summary

If a store uses the [`product-list`](https://developers.vtex.com/vtex-developer-docs/docs/vtex-product-list) component of [Store Framework](https://developers.vtex.com/vtex-developer-docs/docs/getting-started-3), used in the [`minicart`](https://vtex.io/docs/components/all/vtex.minicart@2.61.1/), cart items may be duplicated when increasing the quantity of an item that has an [attachment](https://help.vtex.com/en/tutorial/adding-an-attachment--7zHMUpuoQE4cAskqEUWScU#) (`itemAttachment`).

This is because the default `noSplitItem` behavior of the API request that updates cart items is `false`.

## Simulation

1. In your store, add to the cart an item that has an attachment option;
2. Include an attachment to the item added to the cart;
3. Increase the quantity of this item with the cart item update request by sending the following body:
    ```json
    {
        "orderItems": [
            {
                "index": 0,
                "quantity": 2
            }
        ]
    }
    ```
4. Notice that the API returns the list of items with the duplicate product, instead of increasing the quantity.

## Workaround

Currently, there is no workaround.

