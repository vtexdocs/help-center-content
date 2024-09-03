---
title: 'How Change order works (Beta)'
id: 56TO0bOFXsfmpc7YZ3wIUZ
status: PUBLISHED
createdAt: 2023-11-27T14:51:09.723Z
updatedAt: 2024-04-09T17:58:34.469Z
publishedAt: 2024-04-09T17:58:34.469Z
firstPublishedAt: 2023-11-27T22:39:50.675Z
contentType: tutorial
productTeam: Post-purchase
author: 5l9ZQjiivHzkEVjafL4O6v
slug: how-change-order-works-beta
locale: en
legacySlug: how-change-order-works-beta
subcategoryId: 3LQ1Tl0u4frEOd45BkjFAm
---

>ℹ️ This feature is in beta, which means that we are working to improve it. If you wish to use **Change order (Beta)**, please contact [our Support](https://help.vtex.com/en/support) and provide the [account name(s)](https://help.vtex.com/en/tutorial/what-is-an-account-name--i0mIGLcg3QyEy8OCicEoC) in which to activate it.

The **Change order (beta)** feature allows you to edit an order in different ways, either due to customer requests, product unavailability, or other reasons. These are the main order changes that can be made:

- **Add:** Increase the number of items or add new products.
- **Remove:** Remove the partial or total number of items.
- **Weight change:** Adjust the weight assigned to items.
- **Replace items:** Replace items, including those priced by weight.
- **Price change:** Change the order total amount.

For detailed instructions on each action, read the [How to change orders (Beta)](https://help.vtex.com/en/tutorial/como-alterar-pedidos-beta--7btlG91rb6sHpW1dkd2kBw) documentation. This article covers other aspects of **Change order (beta)** and is structured as follows:

- [Changes through the VTEX Admin and API](#changes-through-the-vtex-admin-and-api)
- [General characteristics](#general-characteristics)
- [Price changes](#price-changes)

## Changes through the VTEX Admin and API

You can change an order in two ways; see details in the table below:

| **How to change** | **Description** | **Changeable status** |
|:---:|:--- |:--- |
| Via the VTEX Admin | <p>Changes are made from the <a href="https://help.vtex.com/en/tutorial/pagina-de-detalhes-do-pedido--2Y75n54Cc9VizrlG1N6ZNl">order details page</a>, which can be accessed under <b>Orders > All orders</b>, by selecting the desired order.</p><p>You can also access the order using the search bar at the top of the VTEX Admin. To do this, click the bar, select the <b>Orders</b> option, and use any of the following criteria:</p><p><ul><li>Order ID</li><li>Customer name</li><li>Customer email</li><li>Customer document</li></ul></p><p><b>Help Center article:</b> <a href="https://help.vtex.com/en/tutorial/como-alterar-pedidos-beta--7btlG91rb6sHpW1dkd2kBw">How to change orders (beta)</a></p> | <p><ul><li><code>handling</code></li></ul></p> |
| Via API | <p>Changes using the endpoints:</p><p><ul><li><a href="https://developers.vtex.com/docs/api-reference/orders-api#patch-/api/order-system/orders/-changeOrderId-/changes">Create order change</a></li><li><a href="https://developers.vtex.com/docs/api-reference/orders-api#post-/api/order-system/orders/-changeOrderId-/changes/preview">Preview order change</a></li><li><a href="https://developers.vtex.com/docs/api-reference/orders-api#get-/api/order-system/orders/-changeOrderId-/changes/-changeRequestId-">Get order change detail</a></li><li><a href="https://developers.vtex.com/docs/api-reference/orders-api#get-/api/order-system/orders/-changeOrderId-/changes">Get order change history</a></li><li><a href="https://developers.vtex.com/docs/api-reference/orders-api#post-/api/order-system/orders/-changeOrderId-/changes/-changeRequestId-/retry">Retry order change</a></li><li><a href="https://developers.vtex.com/docs/api-reference/orders-api#post-/api/order-system/orders/-changeOrderId-/changes/-changeRequestId-/cancel">Cancel order change</a></li></ul></p> | <p><ul><li><code>ready-for-handling</code></li><li><code>handling</code></li><li><code>waiting-for-fulfillment</code></li><li><code>ready for invoicing</code></li></ul></p> |

The order's change history is recorded on its [details page](https://help.vtex.com/en/tutorial/pagina-de-detalhes-do-pedido--2Y75n54Cc9VizrlG1N6ZNl) in the **History of changed items section**. To view this information via API, use the [Get order change history](https://developers.vtex.com/docs/api-reference/orders-api#get-/api/order-system/orders/-changeOrderId-/changes) endpoint.

## General characteristics

**Change order (beta)** has specific characteristics, as shown in the table below:

| **Characteristic** | **Description** |
|:---:|:--- |
| Number of order changes | There is no limit to how many times an order can be changed. |
| Incomplete orders | You cannot change <a href="https://help.vtex.com/en/tutorial/entendendo-os-pedidos-incompletos--tutorials_294">incomplete orders</a> — those lacking necessary information to be processed by the VTEX platform. |
| Franchise accounts | You can change orders where the seller is a franchise account. |
| VTEX marketplace, certified, partner and external marketplaces | <p>Changing orders works differently across various marketplace scenarios on VTEX:</p><p><ul><li>You can change orders from stores that act as both a <a href="https://help.vtex.com/en/tutorial/estrategias-de-marketplace-na-vtex--tutorials_402#being-a-vtex-seller">VTEX seller</a> and a <a href="https://help.vtex.com/en/tutorial/estrategias-de-marketplace-na-vtex--tutorials_402#being-a-vtex-marketplace">VTEX marketplace</a>.</li><li>You can change <a href="https://help.vtex.com/en/tutorial/multilevel-omnichannel-inventory--7M1xyCZWUyCB7PcjNtOyw4">Multilevel Omnichannel Inventory (MOI)</a> orders placed on <a href="https://developers.vtex.com/docs/guides/change-orders-multilevel-omnichannel-inventory-external-marketplaces">external marketplaces</a>.</li><li>You cannot change orders placed on <a href="https://help.vtex.com/en/tutorial/estrategias-de-marketplace-na-vtex--tutorials_402#integrating-with-a-certified-marketplace">certified marketplaces</a> and <a href="https://help.vtex.com/en/tutorial/estrategias-de-marketplace-na-vtex--tutorials_402#integrating-with-marketplaces-partners">marketplaces partners</a>.</li></ul></p> |
| Reservation | In change order scenarios, item <a href="https://help.vtex.com/en/tutorial/how-does-reservation-work--tutorials_92">reservation</a> is automatic. |
| Inventory update | When you change an order, the store's <a href="https://help.vtex.com/en/tutorial/inventory-management--tutorials_139">inventory</a> is not updated automatically. The store must update the inventory in the VTEX Admin under <b>Catalog > Inventory > Inventory Management</b> or via API, using the <a href="https://developers.vtex.com/docs/api-reference/logistics-api#put-/api/logistics/pvt/inventory/skus/-skuId-/warehouses/-warehouseId-">Update inventory by SKU and warehouse</a> endpoint. |
| License Manager permission | <p>For a user to be able to change orders, their <a href="https://help.vtex.com/en/tutorial/roles--7HKK5Uau2H6wxE1rH5oRbc">role</a> must be associated with at least one of the following <a href="https://help.vtex.com/en/tutorial/license-manager-resources--3q6ztrC8YynQf6rdc6euk3">Licence Manager resources</a>:</p><p><ul><li><code>Orders Full Access</code></li><li><code>Change order</code></li></ul></p> |

## Price changes

When a change to an order item increases or decreases the original amount of the purchase, the **Orders** module automatically communicates with **Payments** as follows:

- **Lower price after a change:** A notification is sent to the payment [gateway](https://help.vtex.com/en/tracks/payments--6GAS7ZzGAm7AGoEAwDbwJG/kdPbEIWf8Xq8tESQvViMB#gateway) to refund the customer.
- **Higher price after a change:** A notification is sent to the payment gateway to request the customer to pay the additional amount.

See the table below for more information on payment and invoicing when changing orders:

| **Characteristic** | **Description** |
|:---:|:--- |
| Conditions for increasing the order amount | <p>You can only increase the amount of an order when it meets the following criteria:</p><p><ul><li>The order was placed using credit card, <a href="https://help.vtex.com/en/tutorial/setting-up-payments-notes--5pW7avTwtyQcMu4uiW8quQ">notes payable</a> or <a href="https://help.vtex.com/en/tutorial/customer-credit-overview--1uIqTjWxIIIEW0COMg4uE0">customer credit</a>.</li><li>The order <a href="https://help.vtex.com/en/tutorial/what-is-an-acquirer--7N1oRTG8dGmOiIugC0cs4E">acquirer</a> allows transactions without the CVV code.</li><li>The order acquirer allows two billing transactions for the same order.</li></ul></p><p>If the <a href="https://help.vtex.com/en/tutorial/o-que-e-conector--3lze0Cu0bmyC6u2o2iaeEA">connector</a> does not allow changes for higher amounts, a new transaction will be processed for the excess value, and the transaction will not be linked to the original order.</p> |
| Change of settled order | <p>In the <a href="https://help.vtex.com/en/tracks/payments--6GAS7ZzGAm7AGoEAwDbwJG/1xjzgJZvqwaI1rfxLMCC3Y">transaction flow</a>, the order can be changed to <code>settled</code>, provided it meets the following conditions:</p><p><ul><li>The order was placed using a credit card.</li><li>Payment is settled before the order is <a href="https://help.vtex.com/en/tutorial/como-faturar-um-pedido--7p1h852V5t54KyscpgxE2v">invoiced</a>.</li><li>The payment connector is configured to allow partial refunds. <a href="https://help.vtex.com/en/tutorial/configuring-payment-with-adyenv3--7xAz67E2Eg63LWCQNjVdwv">Adyen</a> is currently the only payment connector that supports this operation.</li></ul></p><p>Orders with the transaction status <code>finished</code> cannot be changed.</p> |
| Shared transaction betweensellers and marketplace | You can change orders with more than one seller and payment in marketplaces, i. e., in <a href="https://help.vtex.com/en/tutorial/split-de-pagamento--6k5JidhYRUxileNolY2VLx">split payment</a> scenarios. |
| Discounts | You cannot change an order by applying discounts greater than or equal to the total amount of the original order. |
| Invoice | <p>For <a href="https://help.vtex.com/en/tracks/orders--2xkTisx4SXOWXQel8Jg8sa/2WgQrlHTyVo4hLjhUs1LMT">invoices</a>, order changes behave as follows:</p><p><ul><li>If the order has already been <a href="https://help.vtex.com/en/tutorial/como-faturar-um-pedido--7p1h852V5t54KyscpgxE2v">invoiced</a> in full, it can no longer be changed.</li><li>Orders not yet invoiced or only <a href="https://help.vtex.com/en/tracks/pedidos--2xkTisx4SXOWXQel8Jg8sa/q9GPspTb9cHlMeAZfdEUe">partially invoiced</a> can be changed.</li><li>The amount of partial invoices for the changed order must be equal to or greater than the amount of an invoice already issued.</li><li>If the total amount of the changed order is lower than the amount of an invoice that has already been issued, it cannot be changed.</li></ul></p><p>In general, it is the invoicing of the order that triggers payment settlement. However, this behavior is different for stores with <a href="https://help.vtex.com/en/tutorial/configuring-maximum-automatic-payment-settlement-time-frame--7dwcaxrcgcFJUk7umqPBw2">automatic settlement</a> configured.</p> |

