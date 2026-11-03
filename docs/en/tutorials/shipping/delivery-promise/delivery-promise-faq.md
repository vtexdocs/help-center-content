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

The merchant must ensure that the following product aspects are correctly configured:

- Product and SKU levels in the catalog.
- Price registration.
- [Shipping strategy](/en/docs/tutorials/shipping-strategy) that enables shipping the order to the address provided by the customer.
- Number of products available for sale in [inventory](/en/docs/tutorials/managing-stock-items), products configured with unlimited inventory, or products configured to be displayed when out of stock.
- [CMS](/en/docs/tracks/what-is-the-cms) templates of the store storefront.

> ℹ️ For more information, see the article [Why is the product not visible on the website?](/en/faq/why-is-the-product-not-visible-on-the-website).

## 2. Does Delivery Promise guarantee that all my products will be displayed on the product listing page?

**Delivery Promise** only displays products when all [display requirements](#1-what-are-the-requirements-for-a-product-to-be-displayed-on-the-product-listing-page) are correctly configured. If a product is unavailable due to incorrect settings or a lack of stock, it will not be displayed on the product listing page, even with the new feature. To learn more, see [Why is the product not visible on the website?](/en/faq/why-is-the-product-not-visible-on-the-website).

## 3. Regarding product availability, how can I ensure the product will be displayed on the product listing page?

There are three ways to do this:

- Make sure the product has [inventory](/en/docs/tutorials/managing-stock-items) available for sale. Remember that [reserved](/en/docs/tutorials/how-does-reservation-work) items aren't available for sale.
- Activate the [unlimited inventory](/en/docs/tutorials/managing-stock-items) setting for the product.
- Configure the product to be displayed on the product listing page even when it's out of stock. To do this, go to **Catalog > Products and SKUs** in the VTEX Admin and, on the product configuration page, in the Product tab, check **Yes** in the `Show when out of stock` field.

## 4. To use Delivery Promise, do I need to request the customer's location?

Yes. **Delivery Promise** only works when the customer provides their address or when VTEX infers their location. This identification can be done in the following ways:

- When the customer accepts the browser plugin to share their location, the address is automatically captured.
- If the browser doesn't have the plugin mentioned above or the customer refuses to share their location, the address will be identified based on the IP address of the customer's device.

In all the mentioned options, the customer can provide their address or a different one at any time.

## 5. In the Delivery Promise context, what happens if the customer refuses to share their location and VTEX can't identify it?

In this case, the merchant can define [comprehensive sellers](/en/docs/tutorials/comprehensive-seller), so products from these sellers can be displayed to customers who don't provide their location.

## 6. Where do I configure which stores cover specific postal codes?

This configuration must be done in the [shipping rate template](/en/docs/tutorials/shipping-rate-template) of the sellers' [shipping policies](/en/docs/tutorials/shipping-policy).

## 7. What happens if I use the Region feature?

**Delivery Promise** replaces all existing features in [Region V1](/en/docs/tutorials/configure-seller-regionalization) and V2, improving performance, the shopping experience, and adding new features. Seller regionalization remains available for stores that haven't activated **Delivery Promise**.

## 8. Can I display free shipping filters and tags with Delivery Promise?

No. **Delivery Promise** doesn't provide free shipping filters. The available filters include: Delivery target, delivery method (pickup or delivery), and pickup point.

## 9. Can I choose not to use Delivery Promise?

Yes. Using this feature is optional. If you don't want to request the customer's location, you can continue using the current customer navigation solution without a defined location and choose whether to link it to [comprehensive sellers](/en/docs/tutorials/comprehensive-seller).

However, we recommend using **Delivery Promise** to provide the best shopping experience on search and navigation.

## 10. Do Delivery Promise filters apply to external sellers?

Yes. The filter experience (by postal code, delivery method, target, pickup point) and other components apply to products from VTEX sellers, [Seller Portal](https://help.vtex.com/en/docs/tutorials/seller-portal-primeiros-passos-para-o-marketplace) sellers, and external sellers.
