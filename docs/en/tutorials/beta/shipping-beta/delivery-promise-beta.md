---
title: 'Delivery Promise (Beta)'
id: p9EJH9GgxL0JceA6dBswd
status: PUBLISHED
createdAt: 2024-08-22T15:58:58.240Z
updatedAt: 2025-08-07T15:12:10.078Z
publishedAt: 2025-08-07T15:12:10.078Z
firstPublishedAt: 2024-08-22T18:57:59.895Z
contentType: tutorial
productTeam: Post-purchase
author: 5l9ZQjiivHzkEVjafL4O6v
slugEN: delivery-promise-beta
legacySlug: delivery-promise-beta
locale: en
subcategoryId: 13sVE3TApOK1C8jMVLTJRh
---

<div class="alert alert-info">
This feature is in beta, which means that we are working to improve it. If you have any questions, please contact <a href= "https://help.vtex.com/en/support">our Support</a>.
</div>

**Delivery Promise (Beta)** is VTEX's new solution that allows customers to view only the products they can buy in their shopping experience, considering both the product availability and valid shipping methods for their delivery address.

With **Delivery Promise (Beta)**, your store can make a “delivery promise” to customers for all products they view, as shown in the video below:

<iframe width="560" height="315" src="https://www.youtube.com/embed/l8HU2qVpsBg" title="VTEX Vision Spring &#39;24: Delivery Promises" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>

<div class="alert alert-danger">
Currently, <b>Delivery Promise (Beta)</b> does not yet allow you to filter the product listing page by shipping time. To learn more about filters, see the <a href="#available-features">Available features</a> section.
</div>

The content is organized as follows:

* [Available features](#available-features)
* [Advantages](#advantages)
* [Requirements and restrictions](#requirements-and-restrictions)
* [Frequently Asked Questions (FAQ)](#frequently-asked-questions-faq)

## Available features

When the customer provides their address, an initial selection of products is made to display only products that can be delivered to that location or picked up at pickup points within a radius of up to 50 km from the provided address — a limit determined by Checkout.

Besides being able to buy all the products viewed, customers can filter the products on the product listing page to view only the results that meet certain criteria, as shown below. This allows customers to tailor their navigation experience to meet their needs:

* Products available for the desired postal code.
* Product delivery deadline.
* Products available in stores near the customer's location.
* Faster shipping method to deliver the order.
* [Pickup point](https://help.vtex.com/en/tutorial/pontos-de-retirada--2fljn6wLjn8M4lJHA6HP3R) where you want to pick up the order.

At this stage, **Delivery Promise (Beta)** allows your store's customers to filter the products displayed in the navigation by using these filters:

* **Deliver to**: Products available for delivery to the provided address.
* **Pickup:** Products available for pickup at pickup points within a radius of up to 50 km from the provided address. 
* **Pickup nearby:** Products available for pickup at pickup points within a radius of up to 10 km from the provided address. 
* **Pickup at {{name}}:** Products available for pickup at a given pickup point.

<div class = "alert alert-info">
The filters mentioned above are native components of Intelligent Search. If you want to develop custom components for your store, please contact your development team or an <a href="https://help.vtex.com/en/tracks/vtex-store-overview--eSDNk26pdvemF3XKM0nK9/4yPqZQyj0t675QpcG7H6yl#implementation-partners">implementation partner</a>.
</div>

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

### Learn more

* [Delivery Promise: FAQ](https://help.vtex.com/en/tutorial/delivery-promise-faq--2frHHK5uPsQrLK5XbYHALN)
* [Setting up Delivery Promise components (Beta)](https://developers.vtex.com/docs/guides/setting-up-delivery-promise-components)
* [Delivery promise for headless stores (Beta)](https://developers.vtex.com/docs/guides/delivery-promise-for-headless-stores)
* [Delivery Promise](https://developers.vtex.com/docs/guides/faststore/features-delivery-promise)

