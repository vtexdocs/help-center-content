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

Below are some frequently asked questions about **[Delivery Promise (Beta)](/docs/tutorials/delivery-promise-beta)**:

## 1. What are the requirements for a product to be displayed on the product listing page?

The merchant must ensure that the following product aspects are correctly configured:

* Product and SKU levels in the catalog.
* Pricing.
* A [shipping strategy](/docs/tutorials/shipping-strategy) that enables the order to be shipped to the address provided by the customer.
* Product count in the [inventory](/docs/tutorials/managing-stock-items), unlimited inventory, or the option to show when the product is out of stock.
* [CMS](/docs/tracks/what-is-the-cms) templates of the store storefront.

> ℹ️ For more information, see the article [Why is the product not visible on the website?](/faq/why-is-the-product-not-visible-on-the-website).

## 2. Does Delivery Promise (Beta) guarantee that all my products will be displayed on the product listing page?

When the required configurations for displaying a product on the product listing page are set correctly, **Delivery Promise (Beta)** displays your entire product assortment and their sellers on the product listing page. If a product is unavailable due to incorrect settings or a stockout, it won't be displayed on the product listing page, even with this feature. To learn more, see the article [Why is the product not visible on the website?](/faq/why-is-the-product-not-visible-on-the-website).

## 3. Regarding product availability, how can I ensure the product will be displayed on the product listing page?

There are three ways to do this:

* Keep the product [inventory](/docs/tutorials/managing-stock-items) with stock available for sale. Remember that [reserved](/docs/tutorials/how-does-reservation-work) items aren't available for sale.
* Enable the [unlimited inventory](/docs/tutorials/managing-stock-items) configuration for the product.
* Configure the product to be displayed on the product listing page even when it's out of stock. To do this, go to **Catalog > Products and SKUs** in the VTEX Admin and, on the product configuration page, in the Product tab, check **Yes** in the `Show when out of stock` field.

## 4. To use Delivery Promise (Beta), do I need to request the customer's location?

**Delivery Promise (Beta)** only works when the customer provides their address or when VTEX infers their location. This identification can be done in the following ways:

* When the customer accepts the browser plugin to share their location, the address is automatically captured.
* The customer provides their address in the Delivery Promise postal code component.

In all these options, the customer can provide their address or a different one at any time.

## 5. In the Delivery Promise (Beta) context, what happens if the customer refuses to share their location and VTEX can't identify it?

In this case, the merchant can use one of the following strategies:

* Define [comprehensive sellers](/docs/tutorials/comprehensive-seller), so products from these sellers can be displayed to customers who don't provide their location.
* Set a default postal code or [geocoordinates](/docs/tutorials/registering-geolocation) for customers who don't provide their location. We suggest setting this near a [warehouse](docs/tutorials/warehouse) that stores a large quantity of products, or near the region with the highest sales volume.

## 6. Where do I configure which stores cover specific postal codes?

Even for those using **Delivery Promise (Beta)**, you still configure this using the [shipping rate template](/docs/tutorials/shipping-rate-template) of the sellers' [shipping policies](/docs/tutorials/shipping-policy).

## 7. What happens if I use the Region feature?

**Delivery Promise (Beta)** replaces all existing features in [Region V1](/docs/tutorials/configure-seller-regionalization) and V2, improving performance, the shopping experience, and adding new features. Since **Delivery Promise** is in beta, seller regionalization is still being used by customers who aren't participating in the beta phase.

## 8. Can I display free shipping filters and tags with Delivery Promise (Beta)?

The current beta phase doesn't include free shipping components. For now, we provide filter options and other storefront components by delivery target, delivery method (pickup or shipping), and pickup point.

## 9. What if I don't want to use Delivery Promise (Beta)?

Using Delivery Promise (Beta) is optional. If you don't want to request the customer's location, you can continue using the current customer navigation solution without a defined location and choose whether to link it to [comprehensive sellers](/docs/tutorials/comprehensive-seller). However, we recommend using **Delivery Promise (Beta)** to provide the best shopping experience on the product listing page.

## 10. Do Delivery Promise (Beta) filters apply to external sellers?

The filters (by postal code, shipping method, delivery target, pickup point) and other components apply to products from VTEX sellers, [Seller Portal](https://help.vtex.com/docs/tutorials/seller-portal-getting-started-for-the-marketplace) sellers, and external sellers.
