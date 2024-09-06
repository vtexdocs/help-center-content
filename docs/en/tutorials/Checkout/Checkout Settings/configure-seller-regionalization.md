---
title: 'Configure seller regionalization'
id: 32t6wLpQCEnumoh8TjT5fw
status: PUBLISHED
createdAt: 2022-08-26T13:58:10.648Z
updatedAt: 2023-07-17T12:11:40.614Z
publishedAt: 2023-07-17T12:11:40.614Z
firstPublishedAt: 2022-08-26T18:34:14.924Z
contentType: tutorial
productTeam: Shopping
author: 6DODK49lJPk3yvcoe6GB6g
slug: configure-seller-regionalization
locale: en
legacySlug: configure-seller-regionalization
subcategoryId: 6XAvmMxp7yyY06ewYMuggs
---

**Region** is the functionality responsible for searching the [white label sellers](https://help.vtex.com/en/tutorial/seller-white-label--5orlGHyDHGAYciQ64oEgKa#) of a marketplace according to delivery regions and defining which of them are able to fulfill the customer's order according to their location. In addition, through it it is also possible to filter prices and the availability of items in stock regionally.

When the customer accesses the store pages, their location is recorded by the [VTEX Session](https://help.vtex.com/en/tutorial/vtex-session-visao-geral-do-sistema-de-sessoes--6C4Edou6bYqqEAOCAg2MQQ#). This data is forwarded to Checkout, which in turn generates a list of sellers enabled for that delivery region, called regionId.

To check which sellers have been considered for a particular region in your store, go to the [Get sellers by region](https://developers.vtex.com/vtex-rest-api/reference/getsellersbyregion) endpoint.

## Differences between availability and price

The items and prices shown in a store's window are based on the [catalog](https://help.vtex.com/en/tracks/catalogo-101--5AF0XfnjfWeopIFBgs3LIQ/3rA2tTpIoEXdv2nzC27zxR#) registration carried out by the retailer. During the purchase process, situations may occur in which one or more items have differences in delivery availability and prices (including promotions) between the store's window and the cart at Checkout.

A delivery availability divergence (item available in the store's window, but indicated as “Sold Out” in the cart), occurs when:

1. There are no sellers that deliver the item in that region.
2. There is no available stock of the item at sellers serving that region.

The price/promotion divergence (different values ​​between the store's window and the cart) can occur when the sellers selected for delivery (due to a greater quantity of items in the cart in stock or for logistical optimization reasons) have different specific commercial conditions (price/promotion) from the marketplace and comprehensive sellers.

With the use of **Region**, if the customer logs in to the store during the selection process of the items in the window, the following changes occur:
- **Availability divergence**: there will not be this divergence. Only those items that have availability for delivery (stock) at your address will be displayed as “Available”.
- **Price divergence**: decrease or elimination of divergence. There will only be a difference in price/promotion if the seller with the best logistical optimization is chosen in relation to the one with the largest stock of the item.

## Activate Region

To activate **Region** in your store, you need to perform the following steps:

1. [Setting up price and availability of SKUs by Region](https://help.vtex.com/en/tutorial/setting-up-price-and-availability-of-skus-by-region--12ne58BmvYsYuGsimmugoc#)
2. [Enable Region functionality](https://developers.vtex.com/docs/guides/enable-the-region-for-skus)

>ℹ️ **Region** is currently available for use in all VTEX stores in v2. Learn more in <a href="https://developers.vtex.com/vtex-developer-docs/changelog/region-v2-release">Region v2<a/>.
