---
title: 'Change the price of an item in the shopping cart'
id: 7Cd37aCAmtL1qmoZJJvjNf
status: PUBLISHED
createdAt: 2022-05-23T18:57:04.527Z
updatedAt: 2022-10-27T12:21:17.571Z
publishedAt: 2022-10-27T12:21:17.571Z
firstPublishedAt: 2022-05-23T22:23:55.815Z
contentType: tutorial
productTeam: Shopping
author: 6DODK49lJPk3yvcoe6GB6g
slugEN: change-the-price-of-an-item-in-the-shopping-cart
legacySlug: change-the-price-of-an-item-in-the-shopping-cart
locale: en
subcategoryId: 6XAvmMxp7yyY06ewYMuggs
---

At VTEX, stores can manually set the price of an item (SKU) available in the Checkout cart. This feature is called **Manual Price** and can only be performed by people who have the following access and permission profiles registered in VTEX Admin:

- **Access Profile**: Owner (Admin Super) or Call Center Operator (Telesales) 
- **Permission**: Shopping Cart Full Access

> ⚠️ The steps below must be performed on the *myvtex* domain of each store ({accountName}.myvtex.com.br).

## Changing the item price

After [enabling the functionality](https://developers.vtex.com/vtex-rest-api/docs/enable-the-manual-price) in your store, the price of a product can be manually configured in the cart, as follows:

1. In the cart, select the desired product.
2. Double click on the displayed price value.
3. Change the price to the desired value and press `ENTER`.
4. Click `Close order`.

![manualprice](https://cdn.statically.io/gh/vtexdocs/help-center-content/refs/heads/main/docs/en/tutorials/checkout/checkout-settings/change-the-price-of-an-item-in-the-shopping-cart_1.gif)

In addition to the configuration on the Checkout screen, the price of a product can also be modified through the [Change Price](https://developers.vtex.com/vtex-rest-api/reference/pricechange) API, learn more in [Setting the price of an item manually](https://developers.vtex.com/vtex-rest-api/docs/enable-the-manual-price#setting-the-price-of-an-item-manually).

## Change control

The operational security of this functionality is based on controlling the access of people who have specific profiles (mentioned above), without which the price of an item cannot be manually modified. In addition, all price changes made are recorded and traceable. Learn more at [Recording manual changes to item prices](https://developers.vtex.com/vtex-rest-api/docs/enable-the-manual-price#recording-manual-changes-to-item-prices).

After the order is closed, the manual price entered needs to be approved by the store administrator or a user with permission in the [Order Authorization system](/en/docs/tutorials/how-order-authorization-works).

> ℹ️ Once the manual price value has been validated, the order follows the normal invoicing flow.

