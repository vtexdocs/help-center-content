---
title: 'Setting up price and availability of SKUs by Region'
id: 12ne58BmvYsYuGsimmugoc
status: PUBLISHED
createdAt: 2018-09-10T15:30:53.237Z
updatedAt: 2023-04-27T23:49:56.658Z
publishedAt: 2023-04-27T23:49:56.658Z
firstPublishedAt: 2018-09-10T22:03:44.263Z
contentType: tutorial
productTeam: Identity
author: authors_59
slugEN: setting-up-price-and-availability-of-skus-by-region
legacySlug:  setting-up-price-and-availability-of-skus-by-region
locale: en
subcategoryId: dajK0sARX2c0MISKKoGoc
---

The __Region__ feature allows a store's items (SKUs) to be displayed according to the customer's location region. This occurs by registering different prices and availability according to the regions served by __White Label Sellers__.

To regionalize SKU prices and availability, it is necessary:

1. Configure the Region feature, as described in [Enable the Region for SKUs](https://developers.vtex.com/docs/guides/enable-the-region-for-skus).
2. [White Label Sellers](https://help.vtex.com/en/faq/what-are-franchise-account-and-seller-white-label) can deliver orders from your store to determined ZIP code areas.
3. The user's session browsing the store contains information about their zip code and country of origin.

> ℹ️ In order to use this feature, a store must have installed the ([VTEX Session](https://help.vtex.com/pt/tutorial/vtex-session-visao-geral-do-sistema-de-sessoes--6C4Edou6bYqqEAOCAg2MQQ#)) system. The VTEX Session is native to all stores and you can confirm its instalation by checking the presence of the `vtex_session` and `vtex_segment` when browsing the store.

> ⚠️ In case of [Multilevel Omnichannel Inventory](https://help.vtex.com/en/tutorial/multilevel-omnichannel-inventory--7M1xyCZWUyCB7PcjNtOyw4#), a marketplace (level 1) cannot configure the display of prices and availability of White Label Seller products (level 3) with the regionalization feature.

> ℹ️ The feature **Region** works for both CMS Portal Legacy stores and stores developed using [VTEX IO](https://help.vtex.com/en/tracks/cms--2YcpgIljVaLVQYMzxQbc3z/6OCY6S9tqBXPD5mgpbBInC), but the feature [VTEX Intelligent Search](https://help.vtex.com/en/tracks/vtex-intelligent-search--19wrbB7nEQcmwzDPl1l4Cb/3qgT47zY08biLP3d5os3DG) is available only for stores using VTEX IO. As a result, stores with CMS Portal Legacy have a limitation in indexing regionalized data, and it is not possible to correctly order the sellers that serve the storefront of a RegionId based on the availability of items.

## Setting up delivery in Franchise Account/White Label Seller

The price and availability of SKUs in each region will be displayed in the main store according to your delivery configuration (zip code ranges indicated). The information on the zip codes is registered with the [Franchise Account](https://help.vtex.com/en/tutorial/o-que-e-conta-franquia--kWQC6RkFSCUFGgY5gSjdl#) carriers that act as the store's White Label Seller.

To configure delivery, follow the steps below:

1. Access the Admin of the __Franchise Account__ that acts as Seller White Label of your store.
2. In __Shipping__, click on __Shipping Strategy__.
3. In __Shipping Policies__, click on the button `Create Shipping Policy` to register a [carrier](https://help.vtex.com/en/tutorial/gerenciar-transportadora#). The ZIP codes operated by this carrier will be taken into account to display the price and availability by region in the main store.
4. Register a [Dock](https://help.vtex.com/en/tutorial/how-to-register-a-dock).
5. Register an [Inventory](https://help.vtex.com/en/tutorial/gerenciar-estoque--tutorials_137#).
6. [Add stock for SKUs](https://help.vtex.com/en/tutorial/managing-stock-items) that will be delivered through the configured route.

> ℹ️ For an SKU to appear as available for sale, it needs to have stock and price associated with it.
