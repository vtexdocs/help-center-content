---
title: 'How the integration with Carrefour works'
id: UbtveAQnoQGKOkQIYG0uQ
status: PUBLISHED
createdAt: 2018-09-26T13:35:41.191Z
updatedAt: 2023-09-22T20:09:43.231Z
publishedAt: 2023-09-22T20:09:43.231Z
firstPublishedAt: 2018-10-11T20:58:12.080Z
contentType: tutorial
productTeam: Channels
author: 245tA425AIeioKAk2eaiwS
slugEN: how-the-carrefour-integration-works
locale: en
legacySlug: how-the-integration-with-carrefour-works
subcategoryId: 4uqMnZjwBO04uWgCom8QiA
---

This article aims to describe the integration flow between VTEX and __Carrefour__. By explaining how it works, it will become easier to understand the expected behavior of each step:

1. [Products](#1-products)
2. [Inventory](#2-stock)
3. [Price](#3-price)
4. [Benefits](#4-benefits)
5. [Order](#5-order)

## 1. Products

### Product Submission
Products are sent automatically, aproximately 8 hours after the [integration setup](https://help.vtex.com/en/tracks/configurar-integracao-com-o-carrefour--2wYlj07cNuA8k8mmwY86K2) has been successfully completed. For this, it is based on the registered sales policy and sends the first package of products.

Product and SKU fields are sent together in a separate batch from the offers one (which gathers SKU inventory and price information). Both batches can be uploaded at the same time - Carrefour will validate them.

### The fields that are sent
For products to be displayed in Carrefour, the integration sends the following _product_ and _SKU_ fields:

| Product | SKU |
| ---------- | ---------- |
| Name* | Name* |
| Description* | EAN* |
| Brand (depending on the choice in the integration setting, the information will be added in the product title) | Weight* |
| Specifications | Height* |
| - | Width* |
| - | Length* |
| - | Images* |
| - | Specifications |

_Caption:_
`*` Required fields.<br />

>⚠️ Carrefour does not accept products with variations (more than one SKU).

### Product display
Since batches of products and offers are sent successfully and validated by Carrefour, all variations/SKUs of the same product are displayed together in the same group.

>ℹ️ Ex: Blue Shirt (product) | S, M, L (variations/SKUs)

### Product status
With all products correctly processed and cataloged by Carrefour, offers can have the following statuses:

- __Active:__ available for sale;
- __Inactive:__ unavailable for sale (when the product runs out of inventory), but it still appears in the search results.

### Product updates
When sent successfully for the first time, the products undergo an internal cataloging process inside Carrefour. If that goes well, integration does not update product information: this would undo the ones that have already been registered.

For example, if the product description is changed, the integration will not update it in the marketplace. To make a change, you will need to contact Carrefour directly.

>⚠️ **NOTE:** a product can not be deleted in the Carrefour panel. If this happens, the integration will not be able to send it again.

## 2. Inventory
When a product is sent for the first time, the inventory is sent as well. However, it is discarded by Carrefour, as they only accept inventories for products already cataloged. This policy exists so that the inventory available in the marketplace is always the most up-to-date.

However, when cataloging is complete, Carrefour does not notify VTEX. This means that our integration has no way of knowing when you can send inventories again, becoming dependent on updates made directly to the Inventory & shipping (VTEX module). As soon as Carrefour confirms the cataloging of your products, the marketplace will ask VTEX to send the inventories. But you can force this information to be sent by simply changing any stock in each of your SKUs.

Once products receive the first inveentory load, the update is made SKU by SKU whenever the inventory undergoes some change inside VTEX. This update is sent in batches every 6 minutes, which means the integration gathers all the updates from your store during 6 minutes and then sends everything at once. If the inventory update is taking longer than expected, there is probably a lot of information in queue to be updated.

## 3. Price
When a product is first sent, the price is sent as well. However, it is discarded by Carrefour, as they only accept prices of products that have already been cataloged. This policy exists so that the price available in the marketplace is always the most up-to-date.

However, Carrefour does not notify VTEX when everything has been approved. This means that our integration has no way of knowing when it's possible to send prices again, becoming dependent on updates made directly into VTEX Prices module. As soon as Carrefour confirms the cataloging of your products, the marketplace will ask VTEX to send the prices. But you can force this information by simply making price changes on each of your SKUs.

Once products receive the first price load, the upgrade is made SKU by SKU whenever prices undergo any changes inside VTEX. This update is sent in batches every 6 minutes, which means the integration gathers all the updates from your store during 6 minutes and then sends everything at once. If the price update is taking longer than expected, there is probably a lot of information in queue to be updated.

>⚠️ Note that for prices with expiration date the system does not notify affiliates when the date expires. Thus, the base price will only be sent at the next price load.

For each SKU, the integration sends only the final price, based on the response of the fulfillment simulation. In a standard scenario, the price sent will always be determined considering the sales policy associated with the integration. However, there are factors that can influence the final price, such as benefits and fixed prices.

_`Example 1`: A promotion that offers a 10% discount for a certain category._

_`Example 2`: In the sales policy used in Carrefour, an SKU is priced at $ 10 with a fixed price of $ 15. The value that the integration sends to the marketplace is $ 15._

>⚠️ **Attention:** As the payment method is given in the marketplace, payment rules are also determined by it. Because of this, the integration can not send differentiated prices according to the payment method.
>
>
> 
> *Ex: If the interest rate for installment payments is configured in VTEX, the price that is sent will still be the one that was returned by the fulfillment simulation.*

## 4. Benefits
Unlike a benefit used for your store's website, a marketplace benefit only discounts the value of the product, but without indicating that it is a benefit. That is, the price sent is already modified and there is no benefit tag.

The integration between VTEX and Carrefour only applies benefits that can be calculated in the fulfillment simulation. In these cases, the following conditions apply:

| Discount Type | Items | Conditions |
| ---------- | ---------- | ---------- |
| Percentage | Categories | Min/max Order value |
| Nominal | Brands | Min/max Item value |
| Nominal Shipping | Collections | Price from/for |
| Percentage Shipping | Products | Zip Code |
| Maximum Shipping | - | Type of Shipping |
| Free Shipping | - | - |

## 5. Order
### 5.1 - Ordering
Order details are directly influenced by factors such as delivery, price and availability.

#### Shipping
At the time of ordering, Carrefour querries the shipping table registered in VTEX. Our platform returns to them the available shipping options, according to the mapping informed in the integration settings. It's important to keep in mind that the query is only possible if the Shipping API is registered in the Carrefour panel.

>⚠️ If none of the fields in the mapping is filled correctly, it will not be possible to simulate shipping in VTEX. With this, orders placed on Carrefour will not be integrated.

If the Shipping API is not registered, Carrefour will use a __contingency table__ to do the calculation. In this case, Carrefour sends the order information and the integration tries to make a _match_ of the shipping calculated with the carrier that best fits within VTEX (we use the __type__ of carrier as a parameter). If there is no match, there will be an error in the order integration. To solve this, you will need to do the shipping mapping first and then reprocess the order.

#### Price/Availability:
At the time the order is made, Carrefour __does not check in real time__ the product's price or inventory availability in VTEX. The marketplace considers only the latest information sent about _price_ and _inventory_.

### 5.2 - Integrating the order
Orders placed at Carrefour have their own statuses. In the table below you will find an explanation of each of them and the correspondence with the order status in VTEX.

| Status in VTEX | Status in Carrefour | Carrefour status description |
| ---------- | ---------- | ---------- |
| Waiting authorization to ship | STAGING | New order for which payment has not yet been approved |
| Grade for cancellation / Ready for Handling / Preparing Delivery | SHIPPING | Payment Approved |
| Invoiced | SHIPPED / CLOSED | Invoice issued |
| Invoiced | SHIPPED / CLOSED | Order shipped |
| Invoiced | No Status | Order delivered |
| Canceled | Canceled | Order canceled |

VTEX reads the Carrefour order feed and integrates those that have __Staging__ status in the marketplace. Orders that have any other status __are not integrated__ and __do not appear in the order integration logs__ (Integrations section in VTEX Admin).

During this process, the order may not be integrated for some reason. You can check what went wrong by clicking _Orders_, which is below the _Integrations_ item in the _Marketplace_ section of the Admin side menu. To solve the problem, find out what should be done for each of the [main order integration errors in Carrefour](/en/faq/erros-de-pedidos-no-bridge-como-resolver--3LmQY3zPfiMYy4m2M0Ak2y#carrefour) and take the necessary action. After everything is OK, just reprocess the order.

After the integration takes place, orders continue to be treated with the same ID used in Carrefour.

>⚠️ Orders with some kind of incident are not integrated. If the incident happens after the order is integrated, a warning will be displayed on the Tracking tab in VTEX Admin.

### 5.3 Order interaction
Once the order has been successfully integrated, you can interact with it both through VTEX Admin and through the Carrefour admin panel. However, some actions may or may not be applied on both sides.

#### Actions that are reflected on both VTEX and Carrefour:
- Cancellation of order in Carrefour (integration alto cancels it in VTEX);
- Order invoiced in VTEX (the integration invoices and updates the order status in Carrefour, as explained below in item `D`).

#### Actions that are not reflected on both platforms:
- Cancellation of order in VTEX (the integration __can not cancel it__ in Carrefour as well);
- Order invoiced in Carrefour (the integration __can not invoice it__ in VTEX as well).

### 5.4 Invoicing the order
When an order that came from Carrefour is invoiced in VTEX, the integration upgrades the status in the marketplace to __Shipped__, and finally includes a field that corresponds to `order delivered`. But for that to happen, specific fields need to be filled. You can see more details about filling them in our [ERP Integration Guide](https://developers.vtex.com/docs/erp-integration-set-up-order-processing).

__1-__ To change the status to __Shipped__, you will need:
`invoiceKey`, `invoiceNumber`, `trackingUrl`, `trackingNumber`, `courier`, `issuanceDate`.

__2-__ To change the order with the information __delivered to the customer__, you will need:
`courierStatus`: this field can be populated automatically (via [tracking updates in the carriers themselves](/en/faq/quais-transportadoras-disponibilizam-o-rastreio-de-frete)) or manually, via API or the Orders interface (formerly Orders Management). When the field returns `finished=true`, the integration sends the information to the marketplace. If the field returns `finished=false`, the order will not be changed with the delivery information.
