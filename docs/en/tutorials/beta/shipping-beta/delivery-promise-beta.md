---
title: 'Delivery Promise (Beta)'
id: p9EJH9GgxL0JceA6dBswd
status: PUBLISHED
createdAt: 2024-08-22T15:58:58.240Z
updatedAt: 2025-11-04T20:48:04.877Z
publishedAt: 2025-11-04T20:48:04.877Z
firstPublishedAt: 2024-08-22T18:57:59.895Z
contentType: tutorial
productTeam: Post-purchase
author: 5l9ZQjiivHzkEVjafL4O6v
slugEN: delivery-promise-beta
legacySlug: delivery-promise-beta
locale: en
subcategoryId: 13sVE3TApOK1C8jMVLTJRh
---

> ℹ️ This feature is in beta, which means that we are working to improve it. If you have any questions, please contact [our Support](https://help.vtex.com/en/support).

**Delivery Promise (Beta)** is a new VTEX solution that allows customers to view only the products they can purchase during their shopping experience, based on product availability and valid shipping methods for their address.

With **Delivery Promise (Beta)**, your store can make a delivery promise to customers for all products viewed and filter the displayed products.

## Available features

When customers enter their address, an initial selection is shown with only the products available for delivery to that locale or pickup at eligible points within a [configured radius](https://help.vtex.com/pt/docs/tutorials/cadastro-de-pontos-de-retirada#campos-de-cadastro) or [up tothe default limit of 50 km from the locale](https://help.vtex.com/pt/tutorial/pontos-de-retirada--2fljn6wLjn8M4lJHA6HP3R?&utm_source=autocomplete#como-funcionam-pontos-de-retirada).

In addition to viewing available products, customers can use filters on the product listing page to view only those that meet specific criteria. This allows customers to tailor their navigation experience to meet their needs:

- Products available for the desired postal code.  
- Faster shipping methods.  
- Preferred [pickup points](https://help.vtex.com/en/docs/tutorials/pickup-points).

Filtering by postal code, shipping method, delivery target, pickup point, and tags and badges apply to products from VTEX sellers, [Seller Portal](https://help.vtex.com/en/docs/tutorials/seller-portal-getting-started-for-the-marketplace), and external sellers.  

> ⚠️ External sellers must configure the [Delivery Promise Notification API](https://developers.vtex.com/docs/api-reference/delivery-promise-notification-api#put-/delivery-promises/external-sellers/-sellerId-/products) to notify Delivery Promise of product availability.

### Filters

**Delivery Promise (Beta)** allows your customers to filter the products displayed during navigation using the following filters:

- **Ship to:** Products available for delivery at the provided address.  
- **Pickup:** Products available at pickup points within a [configured radius](https://help.vtex.com/en/docs/tutorials/creating-pickup-points#fields) or up to the default distance of [50 km](https://help.vtex.com/en/docs/tutorials/pickup-points#how-pickup-points-work) from the address.  
- **Pickup nearby:** Products available for pickup at pickup points within up to 10 km from the provided address.  
- **Pickup at {{nome}}:** Products available at the selected [pickup point](https://help.vtex.com/en/docs/tutorials/creating-pickup-points).  
- **Shipping time ([Delivery options](https://help.vtex.com/en/docs/tutorials/delivery-options-beta))**: Products available based on the deadline, shipping method, and geographic zones configured by the merchant in the [**Delivery options**](https://help.vtex.com/en/docs/tutorials/delivery-options-beta) module.  
- **Dynamic shipping time**: Products available based on dynamic timeframes (**Same day** and **Next day**), which consider the customer browsing time and the timeframes configured in the [**Delivery options**](https://help.vtex.com/en/docs/tutorials/delivery-options-beta) of the store's main account for delivery and pickup.

In addition to filters, **Delivery Promise (Beta)** provides components that can be displayed on the product listing page and storefront, including shipping options and dynamic shipping times, as well as details of available delivery and pickup methods for each product.

![delivery-promise-beta_1](https://cdn.statically.io/gh/vtexdocs/help-center-content/refs/heads/main/docs/en/tutorials/beta/shipping-beta/delivery-promise-beta_1.png)

![delivery-promise-beta_2](https://cdn.statically.io/gh/vtexdocs/help-center-content/refs/heads/main/docs/en/tutorials/beta/shipping-beta/delivery-promise-beta_2.png)

![delivery-promise-beta_3](https://cdn.statically.io/gh/vtexdocs/help-center-content/refs/heads/main/docs/en/tutorials/beta/shipping-beta/delivery-promise-beta_3.png)

> ℹ️ Some of the filters mentioned above are native components of [FastStore](https://developers.vtex.com/docs/guides/faststore/features-delivery-promise) v3 or [Store Framework](https://developers.vtex.com/docs/guides/setting-up-delivery-promise-components). If you want to [develop custom components for your store filters and address selection](https://developers.vtex.com/docs/guides/delivery-promise-for-headless-stores) or implement components that display shipping information, contact your development team or an [implementation partner](https://help.vtex.com/en/docs/tracks/accounts-and-architecture#implementation-partners).

## Advantages

Delivery Promise (Beta) is suitable for all types of operations, as it offers many advantages across any business model. See the store architecture requirements for participating in the current beta phase in the [Requirements](https://help.vtex.com/en/docs/tutorials/delivery-promise-beta) section.

For [omnichannel](https://help.vtex.com/en/docs/tracks/unified-commerce-101) operations, the benefits increase as the logistics network coverage and the number of sellers or [franchise accounts](https://help.vtex.com/en/docs/tutorials/what-is-a-franchise-account) grow. See the main advantages in the table below:

| Advantage | Details |
| ----- | ----- |
| Fewer abandoned carts | Customers often abandon a purchase at the cart step after entering their location when they discover shipping isn't available to their location or the delivery target doesn't meet their expectations. <br><br>With Delivery Promise (Beta), customers can browse the product listing page based on their preferences, such as preferred shipping method, delivery time, or in-store pickup. For each product displayed on the product listing page, inventory availability and delivery feasibility are determined based on the provided location. Additionally, shipping information is displayed from the beginning of the customer buying journey. |
| Full assortment visibility | With Delivery Promise (Beta), customers can view the complete assortment from all sellers that meet two conditions, provided they are properly configured: <ul><br> <li>Available in stock. <li>Valid shipping method for the address entered by the customer.</ul> |
| Improved shopping experience | Delivery Promise (Beta) promotes a better shopping experience for customers as a whole: <ul><br> <li>It eliminates frustration by ensuring orders can be completed at checkout. <li>It allows customers to view more products.</ul> |
| Promotion of physical stores sales | Delivery Promise (beta) gives buyers confidence in finding specific products in physical stores by filtering by pickup point, encouraging visits to stores, and increasing sales opportunities for stores and franchisees. |

## Requirements

**Delivery Promise (Beta)** requires the customer location from the beginning of the buying journey, ensuring that only products with valid shipping methods are displayed on the product listing page. To do this, you must install [Intelligent Search](https://help.vtex.com/en/docs/tracks/overview-intelligent-search), which requests the customer address.

To participate in the current phase of **Delivery Promise (Beta)**, contact [our Support](https://supporticket.vtex.com/support) and make sure you meet the following conditions:

- Use [Intelligent Search](https://help.vtex.com/en/docs/tracks/overview-intelligent-search).  
- External sellers must comply with the notification protocol of the [Delivery Promise Notification API](https://developers.vtex.com/docs/api-reference/delivery-promise-notification-api).

## Learn more

- [Delivery Promise: FAQ](https://help.vtex.com/en/docs/tutorials/delivery-promise-faq)  
- [Setting up Delivery Promise components (Beta)](https://developers.vtex.com/docs/guides/setting-up-delivery-promise-components) (Store Framework)  
- [Delivery promise for headless stores (Beta)](https://developers.vtex.com/docs/guides/delivery-promise-for-headless-stores)  
- [Implementing Delivery Promise (FastStore)](https://developers.vtex.com/docs/guides/faststore/delivery-promise-implementation)