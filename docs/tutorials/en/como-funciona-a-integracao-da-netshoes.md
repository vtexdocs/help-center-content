---
title: 'How does Netshoes integration work?'
id: 4WnhtMXAw0EgmEwiqgaOIu
status: PUBLISHED
createdAt: 2018-07-09T13:24:54.048Z
updatedAt: 2021-02-01T17:26:34.657Z
publishedAt: 2021-02-01T17:26:34.657Z
firstPublishedAt: 2018-07-09T14:27:03.889Z
contentType: tutorial
productTeam: Channels
author: 1nsS1IgG3WWQ4cA8e2qsw6
slug: como-funciona-a-integracao-da-netshoes
legacySlug: como-funciona-a-integracao-da-netshoes
subcategory: 4uqMnZjwBO04uWgCom8QiA
---

This article aims to describe the entire flow of the integration with Netshoes so it will become clear how the integration works and what is the expected behavior in each step. The tutorial is divided into five stages:

1. Product Flow
2. Inventory
3. Prices
4. Promotions
5. Order Flow

## 1 - Product Flow

The integration sends product, inventory and prices in separate entities. Once the products are sent successfully, you can find them at Netshoes. The integration sends the following fields:
<br />

| Products | SKU |
| ---------- | ---------- |
| Name * | EAN |
| Description* | Weight* |
| Specifications¹ | Height* |
| - | Width* |
| - | Length* |
| - | Images* |
| - | Specifications¹ |

<br />

**Required fields are asterisked.**

*¹ Some specifications are required. To learn more, [click here](https://help.vtex.com/en/tracks/configurar-integracao-da-netshoes--5Ua87lhFg4m0kEcuyqmcCm/1UpQGBTJQw4wimCeYSe8yc#other-specifications).*

Specifications are sent if they conform to Netshoes' expected values. That is, when you submit a product, the integration scans its specifications. If they find any that matches the expected value of the product category in Netshoes, it sends the specification. If the specification does not have the expected value, the integration doesn't send the specification.

_`Ex:` for a shirt that has the specification "Material", the integration will send the values used in it._

_`Ex:` Material - Cotton_

When the specifications are successfully sent for the first time, Netshoes receives the products and performs an internal cataloging process. Once they are approved by Netshoes, the integration does not update the product information because it would undo the ones that have already been registered. If you want to make any changes to the product information, you need to make them directly in Netshoes.

_`Ex:` If the product description is changed, the integration will not update the description inside the marketplace._

<div class="alert alert-warning">
Note: The product can not be deleted in the Netshoes panel, so it may be sent by the integration again.
</div>

At Netshoes, products have two possible statuses:
- __Active:__ available for sale
- __Inactive:__ unavailable for sale, in which case the product isn't shown in the marketplace.

There they are grouped by a product that has several variations/SKUs.

_`Ex:` Blue shirt (product) | S, M, L (variations/SKUs)_

The category is sent according to the Department filled in the [mapping worksheet](https://help.vtex.com/en/tracks/configurar-integracao-da-netshoes--5Ua87lhFg4m0kEcuyqmcCm/1UpQGBTJQw4wimCeYSe8yc).

## 2 - Inventory

Netshoes only receives inventories for products that have already been successfully sent. Before this, stock sendings are rejected. 

Once the cataloging process is finished in Netshoes, the integration automatically sends the products inventory, as long as the __Approved Products API Notification__ is configured ([learn more here](https://help.vtex.com/en/tracks/configurar-integracao-da-netshoes--5Ua87lhFg4m0kEcuyqmcCm/4XEVWU4XIQimY4swYuaOoE#approved-products-notification-api).

After the products receive the first stock load, the update is made SKU by SKU whenever there's a stock change in VTEX.

<div class="alert alert-warning">
<strong>Note:</strong> The inventory data sent to Netshoes is registered to our system for only <strong>3 months</strong>.
</div>

## 3 - Prices

Netshoes only receives prices for products that have already been successfully sent. Before this, price sendings are rejected. 

Once the cataloging process is finished in Netshoes, the integration automatically sends the products' prices, provided that the __Approved Products API Notification__ is configured.

Once the products receive the first price load, the update is made SKU by SKU whenever there's a price change in VTEX. However, for prices with expiration dates, when the date expires the system does not notify the affiliates. So the base price will only be sent after the next price change.

The integration sends the __list prices__ and the __final price__ for each SKU. The final price is sent according to the return of the fulfillment simulation. In a standard scenario, the price that is sent will always be the one determined for the sales policy linked to the integration. However, there are factors that can influence the final price, such as __benefits__ and __fixed prices__.

_` Ex1:` benefit of 10% discount for a certain category_

_`Ex2:` SKU X is $ 10.00 in the sales policy used in Netshoes and has a fixed price of $ 15.00 for the same sales policy. The integration will send $ 15,00.

<div class="alert alert-warning">
Note: since the payment method is made in the marketplace, the payment rules are determined by it. Because of this, we can't send differentiated prices depending on the payment method.
<br />
<em>Ex: If there are interests for installment payments configured in VTEX, the price sent will still be the one returned by the fulfillment simulation.</em>
</div>

## 4 - Benefits

Only benefits that can be calculated in the fulfillment simulation are applied. In this case, the following conditions can be applied:

| Discount Type | Items | Conditions |
| ---------- | ---------- | ---------- |
| Percentage | Categories | Min/Max Order Value |
| Nominal | Brands | Min/Max Item Value |
| Nominal Shipping | Collections | Price from/for |
| Percentage Shipping | Products | CEP |
| Maximum Shipping | - | Type of Shipping |
| Free Shipping | - | - |

<div class="alert alert-info">
It is not possible to apply <strong>any</ strong> condition type in benefits whose fields were filled in as <strong>-</ strong>, that is, no condition will be taken into account in the integration.
</div>

## 5 - Order Flow

### 1º - Ordering

When an order is made in the marketplace there are some points that influence its details, such as delivery, price and availability.

#### Delivery:

In this integration there are two points that will influence the delivery: __Shipping Calculation__ and __Time of Shipping Preparation__. The sum of the two will be the __Total Delivery Time__.

<div class="alert alert-info">
Ex:
<br />
Normal Shipping = 3 days
<br />
Cost Time = 2 days
<br />
Total Delivery Time = 5 days
</div>

- __Shipping__

At the time of ordering, by default, Netshoes queries the shipping table registered in VTEX and we send them back the shipping options. It is worth mentioning that, in order to be able to perform the query, you must register the [Shipping API](https://help.vtex.com/en/tracks/configurar-integracao-da-netshoes--5Ua87lhFg4m0kEcuyqmcCm/4XEVWU4XIQimY4swYuaOoE#shipping-api) in the Netshoes panel.

The store can also register a __contingency table__ in Netshoes. Thus, if by any chance the integration is unable to query the shipping in VTEX or if the Shipping API is not registered in their panel, Netshoes uses the information in this table. In this case, Netshoes sends us the order and the integration tries to make a shipping *match* calculated with the carrier that best fits within VTEX (we use the carrier __type__ as a parameter). If the integration can not find an equal carrier type, we integrate the order using the cheapest carrier available.

- __Shipping preparation time__

The shipping preparation time is based on the sum of the `Cost Time` field in the Inventory and the `Cost Time` at the warehouse dock. We send in bulk the same preparation time for all products.

<div class="alert alert-info">
Ex:
<br />
<strong>Inventory A</strong>
<br />
- Warehouse Dock 1: Cost Time = 3 days
<br />
<strong>Inventory B</strong>
<br />
- Warehouse Dock 1: Cost Time = 5 days
<br />
<br />
<strong>Warehouse Dock 1:</strong>
<br />
- Cost Time = 2 days
<br />
<br />
An order with Shipping Time = 3 days will have a different Total Delivery Time depending on where the product will depart from.
<br />
<br />
<strong>Leaving Inventory A:</strong>
<br />
- Preparation time = 3 + 2 (warehouse dock 1) = 5 days
<br />
- Shipping time = 3 days
<br />
- Total delivery time = 8 days
<br />
<strong>Exiting inventory B:</strong>
<br />
- Preparation time = 5 + 2 (warehouse dock 1) = 7 days
<br />
- Shipping time = 3 days
<br />
- Total delivery time = 10 days
</div>

<div class="alert alert-warning">
Note: In case of using the contingency table to calculate shipping, Netshoes does not query VTEX. In this case, the only factor that will be taken into account for <strong>Total Delivery Time</strong>, will be the <strong>Shipping</ strong> provided by them, ignoring the <strong>Preparation Time</strong>. You should be careful about this, as it may lead to discrepancies in the <strong>Total Delivery Time</strong>.
</div>

#### Price/Availability:

At the time of ordering, Netshoes does not check the price of the product or if it has stock. Only the last price/stock sent is considered.

### 2º - Integrating the order

Netshoes orders have their own statuses. Here's an explanation of these statuses compared to the ones used by VTEX. [Learn more about the statuses of VTEX orders here.](/en/tutorial/order-flow-on-the-oms)
<br />

| Status VTEX | Status Netshoes | Netshoes Status Description |
| ---------- | ---------- | ---------- |
| Waiting for clearance to dispatch | Created | New order with payment not yet approved |
| Cancellation Grace / Ready for Handling / Preparing Delivery | Approved | Payment Approved |
| Billed | Invoiced | Invoice issued |
| Billed | Shipped | Order shipped |
| Billed | Delivered | Order delivered |
| Canceled | Canceled | Order canceled |

<br />

Netshoes notifies VTEX via the __Order Import API__ [(set up this API now!)](https://help.vtex.com/en/tracks/configurar-integracao-da-netshoes--5Ua87lhFg4m0kEcuyqmcCm/4XEVWU4XIQimY4swYuaOoE#orders-import-api) every time an order is made on their platform, and then we try to integrate it. 

Even if the API is not registered, VTEX reads an order feed at Netshoes to ensure there are no lost orders! But still, we suggest that the API be registered, because it guarantees a much faster integration of orders, reducing chances of a stock break.

We only integrate those which are in the __Created__ or __Approved__ statuses (be it a normal order or an exchange request). Any order that has already passed this status will not be integrated nor will it appear in order integration logs.

The orders are integrated with the same ID used in Netshoes. Exchange requests will have their ID supplemented with a `"T"` at the end.

_`Ex:` orignial order - 6704259 | exchange request - 6704259T_

If an application does not integrate on the first attempt, there is an automatic retry for errors not known by the integration or temporary errors (throttling, unavailable services 503, among others). 

If it's a mapped error, such as divergence in the value of the order, SLA errors, etc., the integration does not retry. For orders with these errors to be integrated, you will need to do some action ([see more about known Netshoes bugs here](/en/faq/errors-in-bridge-how-to-solve#netshoes)).

### 3º - Interactions in the order

Once the order is integrated, some interactions, either in the VTEX panel or in Netshoes itself, will happen on both sides. This applies to:

- Canceling an order in Netshoes - the integration cancels the order in VTEX
- Billing an order in VTEX - the integration will invoice and update the order status in Netshoes (as explained in topic 5.4)

However, other actions taken are not reflected between platforms:
- Canceling an order in VTEX - the integration does not cancel the order in Netshoes
- Billing the order in Netshoes - the integration will not invoice it in VTEX

### 4º - Billing the order

When you invoice the order in VTEX, the integration updates the status in Netshoes for __invoiced__, __shipped__, and finally __delivered__. However, for this to happen, some specific fields must be filled in according to each status. [Learn more about completing these fields here](https://developers.vtex.com/vtex-developer-docs/docs/erp-integration-guide).

- To change the status to __invoiced__ you will need:
  - `invoiceKey`, `invoiceNumber` and `issuanceDate`

- To change the status to __shipped__ you will need:
  - `trackingNumber`, `trackingUrl` and `courier`

- To change the status to __delivered__ you will need:
  - `courierStatus`: this is a field that can be automatically populated (via [carrier's tracking updates](https://help.vtex.com/en/tutorial/quais-transportadoras-disponibilizam-o-rastreio-de-frete)) or manually (via API or the OMS interface).
