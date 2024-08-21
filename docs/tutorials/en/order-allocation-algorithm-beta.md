---
title: 'Order Allocation Algorithm (Beta)'
id: 1zLCAyEdnVe3EsE9Kz88xA
status: DRAFT
createdAt: 2022-07-12T23:39:25.008Z
updatedAt: 2023-08-14T17:29:11.705Z
publishedAt: 
firstPublishedAt: 2022-07-12T23:51:23.186Z
contentType: tutorial
productTeam: Others
author: 5l9ZQjiivHzkEVjafL4O6v
slug: order-allocation-algorithm-beta
locale: en
legacySlug: order-allocation-algorithm-beta
subcategory: 13sVE3TApOK1C8jMVLTJRh
---

>ℹ️ This feature is in beta, which means that we are working to improve it. If you have any questions, please contact <a href= "https://support.vtex.com/hc/en-us/requests">our Support</a>.

**Order Allocation Algorithm** is the VTEX platform algorithm that aims to select the seller that will ship orders at the lowest cost given by their configured [carrier's shipping rate templates](https://help.vtex.com/en/tutorial/transportadoras-na-vtex--7u9duMD5UQa2QQwukAWMcE).

The **Order Allocation Algorithm** works differently for pickup and delivery shipping, as shown in the following table:

| **Delivery** | **Pickup** |
| ---------- | ---------- |
| 1. After the consumer enters their location in the shopping cart stage, the algorithm identifies the address. | 1. Same. |
| 2. The algorithm checks which [shipping zone](https://help.vtex.com/en/tutorial/order-allocation-algorithm-beta--1zLCAyEdnVe3EsE9Kz88xA#shipping-zones) covers the address. | 2. Same. |
| 3. The algorithm identifies which [shipping options](https://help.vtex.com/en/tutorial/order-allocation-algorithm-beta--1zLCAyEdnVe3EsE9Kz88xA#shipping-options) are associated with these shipping zones. | 3. Same. |
| 4. The algorithm checks the delivery estimates (or SLA) for each of these shipping options. | 4. Same. |
| 5. For each delivery estimate, the algorithm calculates which [fulfillment points](https://help.vtex.com/en/tutorial/order-allocation-algorithm-beta--1zLCAyEdnVe3EsE9Kz88xA#fulfillment-points) and [shipping policies](https://help.vtex.com/en/tutorial/politica-de-envio--tutorials_140) combine to cover the items in the cart seeking the lowest cost possible. This cost is calculated according to the [shipping rate template](https://help.vtex.com/en/tutorial/planilha-de-frete--tutorials_127). | 5. For each shipping estimate, the algorithm sorts the [fulfillment points](https://help.vtex.com/en/tutorial/order-allocation-algorithm-beta--1zLCAyEdnVe3EsE9Kz88xA#fulfillment-points) with items in the cart in stock according to the distance between the [pickup point](https://help.vtex.com/en/tutorial/pontos-de-retirada--2fljn6wLjn8M4lJHA6HP3R) and the consumer's location, sorting from the shortest distance to the greatest. If there are pickup points with the same distance, the tie-breaker is done by the cost of the [shipping rate template](https://help.vtex.com/en/tutorial/planilha-de-frete--tutorials_127). |
| 6. For each applicable shipping option, the algorithm calculates the rate that will be displayed to the consumer at checkout according to the pricing rule set in the shipping option. | 6. The algorithm calculates the rate that will be displayed to the consumer at checkout, according to the pricing rule configured in the shipping option. |
| 7. At checkout, the shipping options selected are displayed to the consumer, with the estimated time and delivery cost. | 7. At checkout, all the pickup points that cover the items in the cart are displayed to the consumer. |

<div class = "alert alert-info">
The priority criterion of the <a href="https://help.vtex.com/en/tutorial/algoritmo-de-selecao-de-sellers-white-label--3MemNQ4pKkWCpMdzI27AHa">current algorithm</a> is to find the lowest package split of the order. The <b>Order Allocation Algorithm</b> main criterion is to seek the lowest shipping cost for the retailer.
</div>

The next sections give details on how the algorithm works and are divided in:

- [Shipping zones](https://help.vtex.com/en/tutorial/order-allocation-algorithm-beta--1zLCAyEdnVe3EsE9Kz88xA#shipping-zones)
- [Shipping options](https://help.vtex.com/en/tutorial/order-allocation-algorithm-beta--1zLCAyEdnVe3EsE9Kz88xA#shipping-options)
- [Fulfillment points](https://help.vtex.com/en/tutorial/order-allocation-algorithm-beta--1zLCAyEdnVe3EsE9Kz88xA#fulfillment-points)

## Shipping zones

A shipping zone is a geographical boundary that establishes the region for which certain shipping options are valid. A shipping option has always the same conditions, even for different shipping zones. Here is an example of how the shipping options are related to the shipping zones:

> Example: For shipping zone A, there are two shipping options, one called _Express_, with 2-business-day delivery, and one called _Standard_, with 5-business-days delivery. For shipping zone B, the shipping options are _Super Express_, with a 1-business-day delivery, and _Standard_, with a 5-business-days delivery.

From the moment the consumer enters their location in the cart, the **Order Allocation Algorithm** identifies which shipping zones cover that location and the [shipping options](https://help.vtex.com/en/tutorial/order-allocation-algorithm-beta--1zLCAyEdnVe3EsE9Kz88xA#shipping-options) configured by the retailer are valid for the region.

## Shipping options

A [shipping option](https://help.vtex.com/en/tutorial/shipping-options-beta--7gsdck3519Z3VPqzwFFHJL) is the configuration of a shipping method valid for a shipping zone. Through the **Shipping Options** module, the retailer uses a single environment to create and manage the shipping options. In the shipping option configuration, the retailer defines:

- The shipping option name the consumer sees at checkout.
- The shipping type, such as delivery or pickup.
- The shipping deadline.
- The shipping zones for which the shipping option is valid.
- The shipping rate the consumer will be charged.

After the **Order Allocation Algorithm** identifies the valid shipping options available for the consumer's location, it calculates which of the store's[ fulfillment point](https://help.vtex.com/en/tutorial/order-allocation-algorithm-beta--1zLCAyEdnVe3EsE9Kz88xA#fulfillment-points) combinations will meet the order on time.

## Fulfillment points

A fulfillment point is a physical space with products that can be shipped to fulfill the consumer's order. Stores and distribution centers are some examples.

The store's logistics network allows an order to be fulfilled by multiple combinations of fulfillment points. The **Order Allocation Algorithm** aims to select the combinations with the lowest cost to the retailer.

When analyzing fulfillment point combinations, the algorithm considers:

- The location where the order item will be shipped from.
- The [shipping policy](https://help.vtex.com/en/tutorial/politica-de-envio--tutorials_140) being used.

Through the shipping policy, the **Order Allocation Algorithm** simulates the combinations of fulfillment points seeking to meet the order at the lowest cost to the retailer. The process is done by querying the [shipping rate template](https://help.vtex.com/en/tutorial/planilha-de-frete--tutorials_127) and analyzing the [carrier](https://help.vtex.com/en/tutorial/transportadoras-na-vtex--7u9duMD5UQa2QQwukAWMcE) costs.

<div class = "alert alert-info">
In the <a href="https://help.vtex.com/en/tutorial/selecao-de-sellers-white-label--3MemNQ4pKkWCpMdzI27AHa">current algorithm</a>, the retailer often sets up the <a href="https://help.vtex.com/en/tutorial/planilha-de-frete--tutorials_127">shipping rate template</a> with the values they want to display to the customer at checkout rather than the real carrier cost. With the Order Allocation Algorithm, the retailer does not need to consider how the cost in the shipping rate template reflects on the shopping experience, as the <a href="https://help.vtex.com/en/tutorial/shipping-options-beta--7gsdck3519Z3VPqzwFFHJL">shipping option</a> configuration determines it. In addition, the Order Allocation Algorithm becomes more accurate by referencing the real carrier cost.
</div>

After analyzing the possible simulations, the **Order Allocation Algorithm** determines for each shipping option possible fulfillment point combinations. At checkout, the customer gets all the shipping options with at least one valid combination of fulfillment points available for the order.
