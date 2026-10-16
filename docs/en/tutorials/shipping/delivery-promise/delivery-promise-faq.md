---
title: 'Delivery Promise: FAQ'
id: 2frHHK5uPsQrLK5XbYHALN
status: PUBLISHED
createdAt: 2025-08-07T14:54:46.418Z
updatedAt: 2025-08-07T15:03:08.816Z
publishedAt: 2025-08-07T15:03:08.816Z
firstPublishedAt: 2025-08-07T15:03:08.816Z
contentType: tutorial
productTeam: Post-purchase
author: 2o8pvz6z9hvxvhSoKAiZzg
slugEN: delivery-promise-faq
legacySlug: delivery-promise-faq
locale: en
subcategoryId: 13sVE3TApOK1C8jMVLTJRh
---

Below are some frequently asked questions about **[Delivery Promise](/en/docs/tutorials/delivery-promise)**:

## 1. What are the requirements for a product to be displayed on the product listing page?

The merchant must make sure the following product settings are configured correctly:

* Product and SKU registration in the catalog.
* Price registration.
* A [shipping strategy](/en/docs/tutorials/shipping-strategy) that makes it possible to ship the order to the address provided by the customer.
* Product count in the [inventory](/en/docs/tutorials/managing-stock-items) available for sales, configured unlimited inventory, or the option enabled to display the product when it's out of stock.
* [CMS](/en/docs/tracks/what-is-the-cms) templates configured for the store frontend.

> ℹ️ For more information, see the article [Why is the product not visible on the website?](/en/faq/why-is-the-product-not-visible-on-the-website).

## 2. Does Delivery Promise guarantee that all my products will be displayed on the product listing page?

**Delivery Promise** displays products only when all the [display requirements](#1-what-are-the-requirements-for-a-product-to-be-displayed-on-the-product-listing-page) are configured correctly. If a product is unavailable because of incorrect settings or because that product is out of stock, it won't be displayed on the product listing page, even with the new feature. To learn more, see the article [Why is the product not visible on the website?](/en/faq/why-is-the-product-not-visible-on-the-website).

## 3. Regarding product inventory, how can I make sure the product will be displayed on the product listing page?

There are three ways to do this:

* Keep the product [inventory](/en/docs/tutorials/managing-stock-items) with a stock count for sales. Remember that [reserved](/en/docs/tutorials/how-does-reservation-work) items aren't available for sale.
* Enable the [unlimited inventory](/en/docs/tutorials/managing-stock-items) configuration for the product.
* Configure the product to appear on the product listing page even when it's out of stock. To do this, in the VTEX Admin go to **Catalog > All products** and, on the product configuration page, on the Product tab, select **Yes** in the `Show when out of stock` field.

## 4. To use Delivery Promise, do I need to request the customer's location?

Yes. **Delivery Promise** only works when the customer provides their address or when VTEX infers their location. This inference can be done in the following ways:

* The customer's address is captured automatically when they accept the browser plugin to share their location.
* If the browser doesn't have that plugin, or the customer declines to share their location, the address is inferred from the IP address of the customer's device.

In all of the options above, the customer can provide their address, or a different address, at any time.

## 5. In the context of Delivery Promise, what happens if the customer declines to share their location and VTEX can't infer their address?

In this case, the merchant can define [comprehensive sellers](/en/docs/tutorials/comprehensive-seller), which allows products from these sellers to be displayed to customers who don't provide a location.

## 6. Where do I configure which stores cover specific postal codes?

Configure this in the [shipping rate templates](/en/docs/tutorials/shipping-rate-template) of the sellers' [shipping policies](/en/docs/tutorials/shipping-policy).

## 7. What happens if I use the Region feature?

**Delivery Promise** replaces all existing features in [Region V1](/en/docs/tutorials/configure-seller-regionalization) and V2, and adds improvements in performance, shopping experience, and new features. Seller regionalization remains available for stores that haven't activated **Delivery Promise**.

## 8. With Delivery Promise, will it be possible to display free shipping filters and tags?

No. **Delivery Promise** doesn't offer free shipping filters. The available filters include shipping time, shipping type (pickup or delivery), and pickup point.

## 9. What if I don't want to use Delivery Promise?

Yes. Using the feature is optional. If you don't want to request the customer's location, you can keep using the current customer navigation solution without a defined location, and you can choose whether to associate it with [comprehensive sellers](/en/docs/tutorials/comprehensive-seller).

However, VTEX recommends using **Delivery Promise** to offer a better shopping experience in search and browsing.

## 10. Do Delivery Promise filters apply to external sellers?

Yes. The filter experience (by postal code, shipping method, shipping time, and pickup point) and other components apply to products from VTEX sellers, [Seller Portal](https://help.vtex.com/en/docs/tutorials/seller-portal-getting-started-for-the-marketplace) sellers, and external sellers.
