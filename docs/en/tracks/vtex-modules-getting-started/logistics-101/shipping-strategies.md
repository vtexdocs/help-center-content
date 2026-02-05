---
title: 'Shipping strategies'
id: 4IPeNztIXsZI4oA5TyES9N
status: PUBLISHED
createdAt: 2022-03-07T17:45:18.081Z
updatedAt: 2024-11-05T17:58:52.520Z
publishedAt: 2024-11-05T17:58:52.520Z
firstPublishedAt: 2022-03-07T18:16:31.599Z
contentType: trackArticle
productTeam: Post-purchase
slugEN: shipping-strategies
locale: en
trackId: 13TFDwDttPl9ki9OXQhyjx
trackSlugEN: logistics-101
order: 2
---

The shipping options offered to the customer at the checkout of your store are calculated by the **Inventory & shipping** module. These options depend on the location of the customer and your store's [shipping strategy](/en/docs/tutorials/shipping-strategy). 

The shipping strategy defines how warehouses, loading docks, and shipping policies interact to meet the needs of your customers and your business. 

![Estrategia EnvioEN](https://cdn.statically.io/gh/vtexdocs/help-center-content/refs/heads/main/docs/en/tracks/vtex-modules-getting-started/logistics-101/shipping-strategies_1.png)

The shipping strategy is defined by three logistics entities:

* [Shipping policy](/en/docs/tutorials/shipping-policy): rules agreed upon between stores and [carriers](/en/docs/tutorials/carriers-on-vtex). The delivery conditions offered by the carriers must be registered in the shipping policy. With this information, the platform determines which carriers meet the conditions of the order and displays it to the customer. The shipping policy is also used to configure [pickup points](/en/docs/tutorials/pickup-points).
* [Loading dock](/en/docs/tutorials/loading-dock): location where items will be picked up. The stores use the loading dock to configure the collection of packages. The carriers pick up the packages from the loading docks.
* [Warehouse](/en/docs/tutorials/warehouse): location where the items are stored. The shipping policy is not the only variable for choosing the delivery; it is also necessary to consider in which warehouse the products are stored.

> ℹ️ There are other possible scenarios for using loading docks. To learn about use cases, read the article Loading docks. To learn more about the flow of deliveries, see the article [ How does the delivery flow work](/en/tutorial/como-funciona-o-fluxo-de-entregas--4ku3QKWfxmUO8UgA0yqgUq).

Please note that:

* A package is the parcel that contains the items of an order;
* A warehouse is the place where goods are stored;
* A loading dock is the intermediate point between shipping and storing the packages;
* Inventory items can be managed in the [Inventory](/en/docs/tutorials/managing-stock-items) module.
* Shipping includes both delivery and pickup.
* Delivery is a type of shipping where the customer receives the items purchased on the ecommerce at their address.

### Configuration

For proper operation, we suggest configuring the [shipping strategies](/en/docs/tutorials/shipping-strategy) following the order below.

1. [Shipping policy](/en/docs/tutorials/shipping-policy)
2. [Loading dock](/en/docs/tutorials/managing-loading-docks)
3. [Warehouse](/en/docs/tutorials/managing-warehouses)

## Pickup points

For cases where a store offers [pickup points](/en/docs/tutorials/pickup-points) where the customers can pick up their orders, the store must configure the pickup point and the shipping strategy for this type of delivery. This is because the platform also calculates the available pickup points based on the customer's location, checking the warehouses, loading docks, and transportation to prepare the product for pickup. 

The pickup point is displayed at checkout as a shipping option. The customer can choose between **delivery** and **pickup**.

> ℹ️ The shipping strategy can also be configured via API. You can use the following APIs: <body> <ul> <li>[Loading docks API](https://developers.vtex.com/vtex-rest-api/reference/docks); <li>[Warehouses API](https://developers.vtex.com/vtex-rest-api/reference/createupdatewarehouse); <li>[Shipping policies API](https://developers.vtex.com/vtex-rest-api/reference/get_logistics-pvt-shipping-policies-id); <li>[Pickup points API](https://developers.vtex.com/vtex-rest-api/reference/listallpickupppoints). </ul> </body>

### Configuration

When configuring [shipping strategies](/en/docs/tutorials/shipping-strategy) that use pickup points, we recommend following the order below:

1. [Pickup points](/en/docs/tutorials/pickup-points); 
2. [Shipping policies](/en/docs/tutorials/shipping-policy);
3. [Shipping rate template](/en/docs/tutorials/shipping-rate-template);
4. [Loading docks](/en/docs/tutorials/managing-loading-docks); 
5. [Warehouses](/en/docs/tutorials/managing-warehouses);
6. [Geolocation](/en/docs/tutorials/registering-geolocation);
7. Configuration of the pickup points available at checkout.

> ⚠️ For more information, please refer to the article [Configuring pickup points.](/en/tutorial/pontos-de-retirada--2fljn6wLjn8M4lJHA6HP3R#setup)

## Shipping time and holidays

When the customer has items in the cart and enters the location data at checkout, the platform estimates the shipping time for the order. This estimate (also called SLA) is calculated considering the following criteria:

* The times [configured for the inventories](/en/tutorial/managing-warehouses--tutorials_137#campos-de-cadastro).
* The times [configured for the loading dock](/en/tutorial/managing-loading-docks--7K3FultD8I2cuuA6iyGEiW#campos-de-cadastro).
* The times [configured for the shipping policy](/en/tutorial/shipping-policy--tutorials_140#adding-a-shipping-policy), in the fields **Pickup time** and **Hours of operation**. 
* The registered holidays.

For more details about the SLA calculation, read the article [How is the delivery time calculated?](/en/docs/tutorials/how-is-the-order-delivery-deadline-calculated).

### Holidays

Holidays are important in determining the shipping time, as they are directly related to the delivery time of your store's orders. VTEX considers holidays to be days when the store does not operate.

> ⚠️ We recommended that you register holidays after configuring the [shipping strategies](/en/docs/tutorials/shipping-strategy).

To register holidays on the platform, you can:

* Use the [Holidays](/en/docs/tutorials/registering-holidays) section in the VTEX Admin.
* Use the [Holidays API](https://developers.vtex.com/vtex-rest-api/reference/holidays).

You can register delivery times for scheduled deliveries from carriers and pickup points. The **[Scheduled delivery](/en/docs/tutorials/scheduled-delivery)** feature allows stores to offer delivery windows to their customers.

> ℹ️ Shipping also depends on the [shipping cost](/en/docs/tutorials/total-shipping-cost) that your store offers to customers. This subject will be covered in the following articles. For more information about how carriers are chosen to for deliveries, read the article [ How shipping is calculated](/en/docs/tutorials/how-shipping-calculation-works).

