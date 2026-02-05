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

Below are some frequently asked questions about **[Delivery Promise (Beta)](/en/docs/tutorials/delivery-promise-beta)**:

[1. What are the requirements for a product to be displayed on the product listing page?](#1-what-are-the-requirements-for-a-product-to-be-displayed-on-the-product-listing-page)

[2. Does Delivery Promise (Beta) guarantee that all my products will be displayed on the product listing page?](#2-does-delivery-promise-beta-guarantee-that-all-my-products-will-be-displayed-on-the-product-listing-page)

[3. Regarding product availability, how can I ensure the product will be displayed on the product listing page?](#3-regarding-product-availability-how-can-i-ensure-the-product-will-be-displayed-on-the-product-listing-page)

[4. To use Delivery Promise (Beta), do I need to request the customer's location?](#4-to-use-delivery-promise-beta-do-i-need-to-request-the-customers-location)

[5. In the Delivery Promise (Beta) context, what happens if the customer refuses to share their location and VTEX can't identify it?](#5-in-the-delivery-promise-beta-context-what-happens-if-the-customer-refuses-to-share-their-location-and-vtex-cant-identify-it)

[6. Where should I configure which stores cover specific postal codes?](#6-where-should-i-configure-which-stores-cover-specific-postal-codes)

[7. What happens if I use the Region feature?](#7-what-happens-if-i-use-the-region-feature)

[8. Can free shipping filters and tags be displayed with Delivery Promise (Beta)?](#8-can-free-shipping-filters-and-tags-be-displayed-with-delivery-promise-beta)

[9. What if I don't want to use Delivery Promise (Beta)?](#9-what-if-i-dont-want-to-use-delivery-promise-beta)

### 1. What are the requirements for a product to be displayed on the product listing page?

The merchant must ensure that the following product aspects are correctly configured:

* Product and SKU levels in the catalog.
* Pricing.
* [Shipping strategy](/en/docs/tutorials/shipping-strategy) for shipping the order to the customer address.
* Product count in the [inventory](/en/docs/tutorials/managing-stock-items) for sales, unlimited inventory, or the option to display the product when sold out is activated.
* [CMS](/en/tracks/cms--2YcpgIljVaLVQYMzxQbc3z/6OCY6S9tqBXPD5mgpbBInC) templates for the store frontend.

> ℹ️ For more information, see the article [Why is the product not visible on the website?](/en/faq/why-is-the-product-not-visible-on-the-website).

### 2. Does Delivery Promise (Beta) guarantee that all my products will be displayed on the product listing page?

When the necessary settings for displaying the product on the product listing page are correct, **Delivery Promise (Beta)** displays the complete assortment of products and their respective sellers on the product listing page. If a product is unavailable due to incorrect settings or a lack of stock, it will not be displayed on the product listing page, even with the new feature. For more information, see the article [Why is the product not visible on the website?](/en/faq/why-is-the-product-not-visible-on-the-website).

### 3. Regarding product availability, how can I ensure the product will be displayed on the product listing page?

There are three ways to do this:

* Keep the [inventory](/en/docs/tutorials/managing-stock-items) with the product available for sale (remember that [reserved](/en/docs/tutorials/how-does-reservation-work) items are not available for sale).
* Activate the [unlimited inventory](/en/docs/tutorials/managing-stock-items) option for the product.
* Configure the product to be displayed on the product listing page even when it is out of stock. To do this, go to **Catalog > Products & SKUs** in the VTEX Admin and, on the product configuration page, in the Product tab, check the **Yes** option in the `Show when out of stock` field.

### 4. To use Delivery Promise (Beta), do I need to request the customer's location?

**Delivery Promise (Beta)** only works when the customer provides their address or when VTEX identifies it. This identification can be done in the following ways:

* When the customer accepts the browser plugin to share their location, the address is automatically captured.
* If the browser doesn't have the plugin mentioned above or the customer refuses to share their location, the address will be identified based on the IP address of the customer's device.

In all the mentioned options, the customer can provide their address or a different one at any time.

### 5. In the Delivery Promise (Beta) context, what happens if the customer refuses to share their location and VTEX can't identify it?

In this case, the merchant can use one of the following strategies:

* Define [comprehensive sellers](/en/docs/tutorials/comprehensive-seller), which allows products from these sellers to be displayed to customers who do not provide a location.
* Set a default postal code or [geolocation](/en/docs/tutorials/registering-geolocation) for customers who do not provide their location. We suggest setting it near to a [warehouse](/en/docs/tutorials/warehouse) that stores a large number of products or close to the region with the highest sales volume.

### 6. Where should I configure which stores cover specific postal codes?

Even if you use **Delivery Promise (Beta)**, this configuration continues to be made in the [shipping rate templates](/en/docs/tutorials/shipping-rate-template) of the sellers' [shipping policies](/en/docs/tutorials/shipping-policy).

### 7. What happens if I use the Region feature?

**Delivery Promise (Beta)** replaces all existing features in [Region V1](/en/docs/tutorials/configure-seller-regionalization) and V2, as well as adding improvements in performance, shopping experience, and new features. As the solution is still under development, seller regionalization is still being used as usual by customers who haven't joined **Delivery Promise (Beta)**.

### 8. Can free shipping filters and tags be displayed with Delivery Promise (Beta)?

In the current beta phase, there will be no free shipping filters. For now, we'll provide filter and tag options by type of shipping (pickup or delivery) and by pickup point. The product listing page will display the sellers' products that are available for sale.

### 9. What if I don't want to use Delivery Promise (Beta)?

You can choose whether or not to use the **Delivery Promise (Beta)**. If you don't want to request the customer's location, you can continue using the current customer navigation solution without setting a location and associate it or not with [comprehensive sellers](/en/docs/tutorials/comprehensive-seller). However, the best shopping experience for customers using the product listing page is achieved with **Delivery Promise (Beta)**, which is VTEX's recommendation.
