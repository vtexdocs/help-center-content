---
title: 'Delivery Promise (Beta)'
id: p9EJH9GgxL0JceA6dBswd
status: PUBLISHED
createdAt: 2024-08-22T15:58:58.240Z
updatedAt: 2024-09-02T22:29:17.194Z
publishedAt: 2024-09-02T22:29:17.194Z
firstPublishedAt: 2024-08-22T18:57:59.895Z
contentType: tutorial
productTeam: Post-purchase
author: 5l9ZQjiivHzkEVjafL4O6v
slug: delivery-promise-beta
locale: en
legacySlug: delivery-promise-beta
subcategoryId: 13sVE3TApOK1C8jMVLTJRh
---

>ℹ️ This feature is in beta, which means that we are working to improve it. If you have any questions, please contact <a href= "https://help.vtex.com/en/support">our Support</a>.

**Delivery Promise (Beta)** is VTEX's new solution that allows customers to view only the products they can buy in their shopping experience, considering both the product availability and valid shipping methods for their delivery address.

With **Delivery Promise (Beta)**, your store can make a “delivery promise” to customers for all products they view, as shown in the video below:

<iframe width="560" height="315" src="https://www.youtube.com/embed/l8HU2qVpsBg" title="VTEX Vision Spring &#39;24: Delivery Promises" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>

>❗ Currently, **Delivery Promise (Beta)** does not yet allow you to filter the product listing page by shipping time. To learn more about filters, see the [Available features](#available-features) section.

The content is organized as follows:

* [Available features](#available-features)
* [Advantages](#advantages)
* [Requirements and restrictions](#requirements-and-restrictions)
* [Frequently Asked Questions (FAQ)](#frequently-asked-questions-faq)

## Available features

Besides being able to buy all the products viewed, customers can filter the products on the product listing page to view only the results that meet certain criteria, as shown below. This allows customers to tailor their navigation experience to meet their needs:

* Products available for the desired postal code.
* Product delivery deadline.
* Products available in stores near the customer's location.
* Faster shipping method to deliver the order.
* [Pickup point](https://help.vtex.com/en/tutorial/pontos-de-retirada--2fljn6wLjn8M4lJHA6HP3R) where you want to pick up the order.

At this stage, **Delivery Promise (Beta)** allows your store's customers to filter the products displayed in the navigation by the following criteria:

* Location provided by the customer.
* Shipping or pickup.
* Pickup point of their choice.

>ℹ️ The filters mentioned above are native components of Intelligent Search. If you want to develop custom components for your store, please contact your development team or an [implementation partner](https://help.vtex.com/en/tracks/vtex-store-overview--eSDNk26pdvemF3XKM0nK9/4yPqZQyj0t675QpcG7H6yl#implementation-partners).

## Advantages

**Delivery Promise (Beta)** is suitable for all types of operations, as the solution provides many advantages for any business model. Learn about the store architecture requirements for participating in the current beta phase in the [Requirements and restrictions](#requirements-and-restrictions) section.

For [omnichannel](https://help.vtex.com/en/tracks/estrategias-de-comercio-unificado--3WGDRRhc3vf1MJb9zGncnv) operations, the greater the coverage of the logistics network and the number of sellers and [franchise accounts](https://help.vtex.com/en/tutorial/o-que-e-conta-franquia--kWQC6RkFSCUFGgY5gSjdl) associated with the operation, the greater the benefits gained. The table below shows the main advantages:

| **Advantage** | **Details** |
| :---: | :--- |
| Fewer abandoned carts | <p>Customers often abandon an order after entering their location in the cart step when they find out it can't be shipped to their location or that the shipping time doesn't meet their expectations.</p><p>With <b>Delivery Promise (Beta)</b>, the availability and delivery feasibility of each product the customer sees on the product listing page are considered based on the customer's location. Besides this, shipping information is displayed from the beginning of the customer's buying journey.</p> |
| Increased product assortment on the product listing page | <p>Without <b>Delivery Promise (Beta)</b>, the product assortment displayed on the product listing page may not reflect all available products from sellers due to limitations in features such as <a href="https://help.vtex.com/en/tutorial/configurar-a-regionalizacao-de-sellers--32t6wLpQCEnumoh8TjT5fw">seller regionalization</a>, <a href="https://help.vtex.com/en/tutorial/seller-abrangente--5Qn4O2GpjUIzWTPpvLUfkI">comprehensive seller</a> and the <a href="https://help.vtex.com/en/tutorial/algoritmo-de-selecao-de-sellers-white-label--3MemNQ4pKkWCpMdzI27AHa">seller selection algorithm</a>.</p><p>With the <b>Delivery Promise (Beta)</b>, the customer can view the complete product assortment of all sellers, provided that:<ul><li>They are correctly configured.</li><li>They are available in stock.</li><li>Have a valid shipping method to the address entered by the customer.</li></ul></p> |
| Improved shopping experience | <p><b>Delivery Promise (Beta)</b> promotes a better shopping experience for the customer as a whole:<ul><li>It eliminates any frustration at checkout when they find it impossible to place an order.</li><li>It allows customers to view more products.</li><li>It allows customers to browse the storefront in a way that meets their needs, whether they prioritize the type of shipment or choose to place an order in a physical store.</li></ul></p> |
| Promotion of physical stores sales | <b>Delivery Promise (Beta)</b> gives customers confidence in finding certain products in physical stores, which encourages them to go to the stores and increases sales opportunities. |

## Requirements and restrictions

**Delivery Promise (Beta)** requires the customer's location from the beginning of the buying journey, ensuring that only products with valid shipping methods are displayed on the product listing page. To do this, you must install the [Intelligent Search](https://help.vtex.com/en/tracks/vtex-intelligent-search--19wrbB7nEQcmwzDPl1l4Cb/3qgT47zY08biLP3d5os3DG), which requires the customer's location.

To join the current phase of **Delivery Promise (Beta)**, you must meet the following conditions:

* <i class="far fa-check-circle"></i> **Requirement:** Use [Intelligent Search](https://help.vtex.com/en/tracks/vtex-intelligent-search--19wrbB7nEQcmwzDPl1l4Cb/3qgT47zY08biLP3d5os3DG).
* <i class="far fa-check-circle"></i> **Requirement:** Have implemented the [Store Framework](https://help.vtex.com/en/tracks/vtex-store-overview--eSDNk26pdvemF3XKM0nK9/67SCtUreXxKYWhZh8n0zvZ#store-framework) frontend.
* <i class="fas fa-times"></i> **Restriction:** The store cannot act as a marketplace for [Seller Portal](https://help.vtex.com/en/tracks/vtex-store-overview--eSDNk26pdvemF3XKM0nK9/4yPqZQyj0t675QpcG7H6yl#vtex-account-types) accounts or external sellers.

## Frequently Asked Questions (FAQ)

Below are some frequently asked questions about **Delivery Promise (Beta)**:

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
* [Shipping strategy](https://help.vtex.com/en/tutorial/estrategia-de-envio--58vLBDbjYVQzJ6rRc5QNz3) for shipping the order to the customer address.
* Product count in the [inventory](https://help.vtex.com/en/tutorial/gerenciar-inventario--tutorials_139) for sales, unlimited inventory, or the option to display the product when sold out is activated.
* [CMS](https://help.vtex.com/en/tracks/cms--2YcpgIljVaLVQYMzxQbc3z/6OCY6S9tqBXPD5mgpbBInC) templates for the store frontend.

>ℹ️ For more information, see the article [Why is the product not visible on the website?](https://help.vtex.com/en/faq/por-que-o-produto-nao-aparece-no-site--frequentlyAskedQuestions_382).

### 2. Does Delivery Promise (Beta) guarantee that all my products will be displayed on the product listing page?

When the necessary settings for displaying the product on the product listing page are correct, **Delivery Promise (Beta)** displays the complete assortment of products and their respective sellers on the product listing page. If a product is unavailable due to incorrect settings or a lack of stock, it will not be displayed on the product listing page, even with the new feature. For more information, see the article [Why is the product not visible on the website?](https://help.vtex.com/en/faq/por-que-o-produto-nao-aparece-no-site--frequentlyAskedQuestions_382).

### 3. Regarding product availability, how can I ensure the product will be displayed on the product listing page?

There are three ways to do this:

* Keep the [inventory](https://help.vtex.com/en/tutorial/gerenciar-inventario--tutorials_139) with the product available for sale (remember that [reserved](https://help.vtex.com/en/tutorial/como-a-reserva-funciona--tutorials_92) items are not available for sale).
* Activate the [unlimited inventory](https://help.vtex.com/en/tutorial/gerenciar-inventario--tutorials_139) option for the product.
* Configure the product to be displayed on the product listing page even when it is out of stock. To do this, go to **Catalog > Products & SKUs** in the VTEX Admin and, on the product configuration page, in the Product tab, check the **Yes** option in the `Show when out of stock` field.

### 4. To use Delivery Promise (Beta), do I need to request the customer's location?

**Delivery Promise (Beta)** only works when the customer provides their address or when VTEX identifies it. This identification can be done in the following ways:

* When the customer accepts the browser plugin to share their location, the address is automatically captured.
* If the browser doesn't have the plugin mentioned above or the customer refuses to share their location, the address will be identified based on the IP address of the customer's device.

In all the mentioned options, the customer can provide their address or a different one at any time.

### 5. In the Delivery Promise (Beta) context, what happens if the customer refuses to share their location and VTEX can't identify it?

In this case, the merchant can use one of the following strategies:

* Define [comprehensive sellers](https://help.vtex.com/en/tutorial/seller-abrangente--5Qn4O2GpjUIzWTPpvLUfkI), which allows products from these sellers to be displayed to customers who do not provide a location.
* Set a default postal code or [geolocation](https://help.vtex.com/en/tutorial/gerenciar-geolocalizacao--tutorials_138) for customers who do not provide their location. We suggest setting it near to a [warehouse](https://help.vtex.com/en/tutorial/estoque--6oIxvsVDTtGpO7y6zwhGpb) that stores a large number of products or close to the region with the highest sales volume.

### 6. Where should I configure which stores cover specific postal codes?

Even if you use **Delivery Promise (Beta)**, this configuration continues to be made in the [shipping rate templates](https://help.vtex.com/en/tutorial/planilha-de-frete--tutorials_127) of the sellers' [shipping policies](https://help.vtex.com/en/tutorial/politica-de-envio--tutorials_140).

### 7. What happens if I use the Region feature?

**Delivery Promise (Beta)** replaces all existing features in [Region V1](https://help.vtex.com/en/tutorial/configurar-a-regionalizacao-de-sellers--32t6wLpQCEnumoh8TjT5fw) and V2, as well as adding improvements in performance, shopping experience, and new features. As the solution is still under development, seller regionalization is still being used as usual by customers who haven't joined **Delivery Promise (Beta)**.

### 8. Can free shipping filters and tags be displayed with Delivery Promise (Beta)?

In the current beta phase, there will be no free shipping filters. For now, we'll provide filter and tag options by type of shipping (pickup or delivery) and by pickup point. The product listing page will display the sellers' products that are available for sale.

### 9. What if I don't want to use Delivery Promise (Beta)?

You can choose whether or not to use the **Delivery Promise (Beta)**. If you don't want to request the customer's location, you can continue using the current customer navigation solution without setting a location and associate it or not with [comprehensive sellers](https://help.vtex.com/en/tutorial/seller-abrangente--5Qn4O2GpjUIzWTPpvLUfkI). However, the best shopping experience for customers using the product listing page is achieved with **Delivery Promise (Beta)**, which is VTEX's recommendation.

