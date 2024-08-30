---
title: 'The order was split into packages with separate deliveries'
id: 3OCOC82543vOsc3Ex32XTY
status: PUBLISHED
createdAt: 2024-06-19T15:03:37.373Z
updatedAt: 2024-06-19T15:13:11.172Z
publishedAt: 2024-06-19T15:13:11.172Z
firstPublishedAt: 2024-06-19T15:13:11.172Z
contentType: tutorial
productTeam: Post-purchase
author: 5l9ZQjiivHzkEVjafL4O6v
slug: the-order-was-split-into-packages-with-separate-deliveries
locale: en
legacySlug: the-order-was-split-into-packages-with-separate-deliveries
subcategory: 2Q0IQjRcOqSgJTh6wRHVMB
---

**Tags / Keywords:** separate deliveries, order split, packages, shipping, pre-sale products.

On VTEX, customers may receive their orders split into several packages, regardless of whether the [order has been split](https://help.vtex.com/en/tutorial/divisao-de-pedidos-e-divisao-de-entregas--jQvzA6QgSd51e2p6bthoV) on the platform. Customers can receive their order items in separate packages in the following cases:

* **Order with different sellers:** An order is generated for each seller, resulting in at least one package per seller's delivery.
* **Selection of white label sellers:** Orders involving [white label sellers](https://help.vtex.com/en/tutorial/selecao-de-sellers-white-label--3MemNQ4pKkWCpMdzI27AHa) may be delivered in separate packages.
* **Seller with different SLAs for shipping items:** Even if a single seller fulfills the order, different product SLAs can cause the order to be split into multiple packages.
* **Pre-sale products:** Orders containing both [pre-sale](https://help.vtex.com/en/tutorial/cadastrar-um-produto-para-pre-venda--4o6cUJ4gIg0MQWW8WfN34K) and regular products will be delivered in separate packages.

When an order is generated, the estimated delivery date at checkout applies to both pre-sale and regular products. However, this is only a delivery estimate. Once payment is approved, the order is divided into different packages, one for pre-sale products and one for regular products. 

The delivery date for each package will be adjusted based on the `shippingEstimateDate` for each product, which can be checked via the [Get order](https://developers.vtex.com/docs/api-reference/orders-api#get-/api/oms/pvt/orders/-orderId-) endpoint.

## Solution

To avoid splitting packages in orders that include pre-sale products, you can configure [shipping groups](https://help.vtex.com/en/tutorial/como-funciona-a-remessa). This allows you to group all packages to be delivered by the same carrier and from the same [loading dock](https://help.vtex.com/en/tutorial/doca--5DY8xHEjOLYDVL41Urd5qj) into a single shipment.

>❗ By configuring shipping groups, this behavior will be applied to all orders with different delivery dates, not just those containing pre-sale products.

### Configuring shipping groups

To configure shipping groups in your store, follow the steps below: 

1. In the VTEX Admin, go to **Store Settings > Shipping > Settings**, or type **Shipping** in the search bar at the top of the page and select **Store Settings / Shipping**.
2. On the **General Settings** page, in the section **Delivery Groups**, enter the desired number of days for the [shipment](https://help.vtex.com/en/tutorial/como-funciona-a-remessa) in the field _Create shipping groups with intervals of {X} day(s)_.
3. Click **Save**.

