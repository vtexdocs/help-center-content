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
---

The shipping options offered to the customer at the checkout of your store are calculated by the **Inventory & shipping** module. These options depend on the location of the customer and your store's [shipping strategy](https://help.vtex.com/en/tutorial/shipping-strategy--58vLBDbjYVQzJ6rRc5QNz3). 

The shipping strategy defines how warehouses, loading docks, and shipping policies interact to meet the needs of your customers and your business. 

![Estrategia EnvioEN](https://raw.githubusercontent.com/vtexdocs/help-center-content/refs/heads/main/docs/en/tracks/logistics-101/shipping-strategies_1.png)

The shipping strategy is defined by three logistics entities:

* [Shipping policy](https://help.vtex.com/en/tutorial/shipping-policy--tutorials_140): rules agreed upon between stores and [carriers](https://help.vtex.com/en/tutorial/carries-on-vtex--7u9duMD5UQa2QQwukAWMcE). The delivery conditions offered by the carriers must be registered in the shipping policy. With this information, the platform determines which carriers meet the conditions of the order and displays it to the customer. The shipping policy is also used to configure [pickup points](https://help.vtex.com/en/tutorial/pickup-points--2fljn6wLjn8M4lJHA6HP3R).
* [Loading dock](https://help.vtex.com/en/tutorial/loading-dock--5DY8xHEjOLYDVL41Urd5qj): location where items will be picked up. The stores use the loading dock to configure the collection of packages. The carriers pick up the packages from the loading docks.
* [Warehouse](https://help.vtex.com/en/tutorial/warehouse--6oIxvsVDTtGpO7y6zwhGpb): location where the items are stored. The shipping policy is not the only variable for choosing the delivery; it is also necessary to consider in which warehouse the products are stored.

>ℹ️ There are other possible scenarios for using loading docks. To learn about use cases, read the article Loading docks. To learn more about the flow of deliveries, see the article [ How does the delivery flow work](https://help.vtex.com/en/tutorial/como-funciona-o-fluxo-de-entregas--4ku3QKWfxmUO8UgA0yqgUq).

Please note that:

* A package is the parcel that contains the items of an order;
* A warehouse is the place where goods are stored;
* A loading dock is the intermediate point between shipping and storing the packages;
* Inventory items can be managed in the [Inventory](https://help.vtex.com/en/tutorial/managing-stock-items--tutorials_139) module.
* Shipping includes both delivery and pickup.
* Delivery is a type of shipping where the customer receives the items purchased on the ecommerce at their address.

### Configuration

For proper operation, we suggest configuring the [shipping strategies](https://help.vtex.com/en/tutorial/shipping-strategy--58vLBDbjYVQzJ6rRc5QNz3) following the order below.

1. [Shipping policy](https://help.vtex.com/en/tutorial/shipping-policy--tutorials_140)
2. [Loading dock](https://help.vtex.com/en/tutorial/managing-loading-docks--7K3FultD8I2cuuA6iyGEiW)
3. [Warehouse](https://help.vtex.com/en/tutorial/managing-warehouses--tutorials_137)

## Pickup points

For cases where a store offers [pickup points](https://help.vtex.com/en/tutorial/pickup-points--2fljn6wLjn8M4lJHA6HP3R) where the customers can pick up their orders, the store must configure the pickup point and the shipping strategy for this type of delivery. This is because the platform also calculates the available pickup points based on the customer's location, checking the warehouses, loading docks, and transportation to prepare the product for pickup. 

The pickup point is displayed at checkout as a shipping option. The customer can choose between **delivery** and **pickup**.

>ℹ️ The shipping strategy can also be configured via API. You can use the following APIs:
> <body>
>
> <li>[Loading docks API](https://developers.vtex.com/vtex-rest-api/reference/docks);
> <li>[Warehouses API](https://developers.vtex.com/vtex-rest-api/reference/createupdatewarehouse);
> <li>[Shipping policies API](https://developers.vtex.com/vtex-rest-api/reference/get_logistics-pvt-shipping-policies-id);
> <li>[Pickup points API](https://developers.vtex.com/vtex-rest-api/reference/listallpickupppoints).
>
> </body>

### Configuration

When configuring [shipping strategies](https://help.vtex.com/en/tutorial/shipping-strategy--58vLBDbjYVQzJ6rRc5QNz3) that use pickup points, we recommend following the order below:

1. [Pickup points](https://help.vtex.com/en/tutorial/pickup-points--2fljn6wLjn8M4lJHA6HP3R); 
2. [Shipping policies](https://help.vtex.com/en/tutorial/shipping-policy--tutorials_140);
3. [Shipping rate template](https://help.vtex.com/en/tutorial/shipping-rate-template--tutorials_127);
4. [Loading docks](https://help.vtex.com/en/tutorial/managing-loading-docks--7K3FultD8I2cuuA6iyGEiW); 
5. [Warehouses](https://help.vtex.com/en/tutorial/managing-warehouses--tutorials_137);
6. [Geolocation](https://help.vtex.com/en/tutorial/registering-geolocation--tutorials_138);
7. Configuration of the pickup points available at checkout.

>⚠️ For more information, please refer to the article [Configuring pickup points.](https://help.vtex.com/en/tutorial/pontos-de-retirada--2fljn6wLjn8M4lJHA6HP3R#setup)

## Shipping time and holidays

When the customer has items in the cart and enters the location data at checkout, the platform estimates the shipping time for the order. This estimate (also called SLA) is calculated considering the following criteria:

* The times [configured for the inventories](https://help.vtex.com/en/tutorial/managing-warehouses--tutorials_137#campos-de-cadastro).
* The times [configured for the loading dock](https://help.vtex.com/en/tutorial/managing-loading-docks--7K3FultD8I2cuuA6iyGEiW#campos-de-cadastro).
* The times [configured for the shipping policy](https://help.vtex.com/en/tutorial/shipping-policy--tutorials_140#adding-a-shipping-policy), in the fields **Pickup time** and **Hours of operation**. 
* The registered holidays.

For more details about the SLA calculation, read the article [How is the delivery time calculated?](https://help.vtex.com/en/tutorial/how-is-the-order-delivery-deadline-calculated--1TOuKCIjGQmqOqQkEqCg82).

### Holidays

Holidays are important in determining the shipping time, as they are directly related to the delivery time of your store's orders. VTEX considers holidays to be days when the store does not operate.

>⚠️ We recommended that you register holidays after configuring the [shipping strategies](https://help.vtex.com/en/tutorial/shipping-strategy--58vLBDbjYVQzJ6rRc5QNz3).

To register holidays on the platform, you can:

* Use the [Holidays](https://help.vtex.com/en/tutorial/registering-holidays--2ItOthSEAoyAmcwsuiO6Yk) section in the VTEX Admin.
* Use the [Holidays API](https://developers.vtex.com/vtex-rest-api/reference/holidays).

You can register delivery times for scheduled deliveries from carriers and pickup points. The **[Scheduled delivery](https://help.vtex.com/en/tutorial/scheduled-delivery--22g3HAVCGLFiU7xugShOBi)** feature allows stores to offer delivery windows to their customers.

>ℹ️ Shipping also depends on the [shipping cost](https://help.vtex.com/en/tutorial/total-shipping-cost--5bwhIO108VA5Y2YOpef9lV) that your store offers to customers. This subject will be covered in the following articles. For more information about how carriers are chosen to for deliveries, read the article [ How shipping is calculated](https://help.vtex.com/en/tutorial/hoy-shipping-calculation-works--tutorials_116).

