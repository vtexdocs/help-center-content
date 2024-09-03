---
title: 'Comprehensive seller'
id: 5Qn4O2GpjUIzWTPpvLUfkI
status: PUBLISHED
createdAt: 2021-09-27T17:51:50.695Z
updatedAt: 2023-02-23T15:06:08.007Z
publishedAt: 2023-02-23T15:06:08.007Z
firstPublishedAt: 2021-09-27T19:07:23.186Z
contentType: tutorial
productTeam: Post-purchase
author: 30TBnJ838LXSZvdJFlcB8H
slug: comprehensive-seller
locale: en
legacySlug: comprehensive-seller
subcategoryId: 5tlIjp0ZkAU4EIk4OgyEmm
---


VTEX stores are prepared to function natively as marketplaces to sell products from other stores, called sellers. In this model, products from different sellers are made available to the store's customers. VTEX has defined criteria to make products from multiple sellers available on your storefront.

One of the criteria used by VTEX is the region served by the seller, and it is called comprehensive seller. In this sense, the configuration of comprehensive sellers contributes to a better shopping experience for the customers of a marketplace.

This article will cover:
* [What is a comprehensive seller](#what-is-a-comprehensive-seller);

* [When to define a comprehensive seller](#when-to-define-a-comprehensive-seller);

* [How the VTEX platform uses this information](#how-the-vtex-platform-uses-this-information).

## What is a comprehensive seller

Comprehensive seller is the configuration that makes a seller's items available to customers who do not use location-defined navigation. This configuration prevents products from being displayed to customers who are outside the seller's coverage area.

For example, imagine your store has products from different sellers. Some sellers deliver anywhere in the country, others only in one city or region. If a customer browses your store's website without providing location information, products that cannot be delivered to the customer's zip code may be listed as available and the customer will only know that those items are not available at the end of the purchase.

## When to define a comprehensive seller

To define a seller as comprehensive, they must have a delivery area that is significant to your store operation. This is important because when the customer browses the store without informing their location, they will be shown the products of the main seller (seller 1) and the comprehensive sellers.

Thus, if the comprehensive sellers do not meet the delivery conditions of at least the majority of customers, the customers' expectations will not be met during the purchase.

We recommend using the comprehensive seller configuration for sellers that deliver nationwide.

## How the VTEX platform uses this information

When there is no customer location information set, the seller selection heuristic shows only the products of the main seller (seller 1) and the comprehensive sellers.

This occurs both during browsing and in the cart, in order to prevent the customer from seeing products from sellers that do not deliver to their address.

>ℹ️ Even if during browsing the customer's location information is captured and stored in the `regionId` field of the Session API, the location is not used in the cart. Only products from the main seller and comprehensive sellers will be available to the customer in the cart. Products from other sellers will only be available after the customer enters the delivery zip code at checkout.

In cases of more than one comprehensive seller, the checkout selects the one with the highest amount in stock for the item in question, among all comprehensive sellers. Know more in [White label sellers selection](https://help.vtex.com/en/tutorial/algoritmo-de-selecao-de-sellers-white-label--3MemNQ4pKkWCpMdzI27AHa). 

## Enabling a comprehensive seller

Enabling a comprehensive seller is done via API:

- When creating a seller, via the [creation API](https://developers.vtex.com/docs/api-reference/marketplace-apis#post-/-accountName-.-environment-.com.br/api/seller-register/pvt/sellers);
- Or when updating an existing seller, via the [update API](https://developers.vtex.com/docs/api-reference/marketplace-apis#patch-/-accountName-.-environment-.com.br/api/seller-register/pvt/sellers/-sellerId-).

In both cases, it is necessary to activate the `isBetterScope` property. When the property is enabled (`true`), the platform interprets that the seller delivers in the entire region covered by the store, which allows items to be displayed even if the customer's location is not defined.

