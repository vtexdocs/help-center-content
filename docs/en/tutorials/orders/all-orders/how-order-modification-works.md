---
title: 'How Order modifications works'
id: 56TO0bOFXsfmpc7YZ3wIUZ
status: PUBLISHED
createdAt: 2023-11-27T14:51:09.723Z
updatedAt: 2025-06-11T14:18:22.910Z
publishedAt: 2025-06-11T14:18:22.910Z
firstPublishedAt: 2023-11-27T22:39:50.675Z
contentType: tutorial
productTeam: Post-purchase
author: 5l9ZQjiivHzkEVjafL4O6v
slugEN: how-order-modification-works
legacySlug: how-change-order-works-beta
locale: en
subcategoryId: 2t00bBkcAwIkgSCGKsMOwY
---

The **Order modifications** feature allows you to edit an order in different ways, either due to customer requests, product unavailability, or other reasons. These are the main order modifications that can be made:

- **Add:** Increase the number of items or add new products.
- **Remove:** Remove the partial or total number of items.
- **Weight change:** Adjust the weight assigned to items.
- **Replace items:** Replace items, including those priced by weight.
- **Price change:** Change the order total amount.

For detailed instructions on each action, read the [How to modify orders](/en/docs/tutorials/how-to-modify-orders) documentation. This article covers other aspects of **Order modifications** and is structured as follows:

- [Modifications through the VTEX Admin and API](#modifications-through-the-vtex-admin-and-api)
- [General characteristics](#general-characteristics)
- [Price changes](#price-changes)

## Modifications through the VTEX Admin and API

You can modify an order in two ways; see details in the table below:

| **How to modify** | **Description** | **Changeable status** |
|:---:|:--- |:--- |
| Via the VTEX Admin | Modifications are made from the [order details page](/en/docs/tutorials/order-details-page), which can be accessed under **Orders > All orders**, by selecting the desired order.You can also access the order using the search bar at the top of the VTEX Admin. To do this, click the bar, select the **Orders** option, and use any of the following criteria:<ul><li>Order ID</li><li>Customer name</li><li>Customer email</li><li>Customer document</li></ul>**Help Center article:** [How to modify orders](/en/docs/tutorials/how-to-modify-orders) | <ul><li>`handling`</li></ul> |
| Via API | Modifications using the endpoints:<ul><li>[Create order modifications](https://developers.vtex.com/docs/api-reference/orders-api#patch-/api/order-system/orders/-changeOrderId-/changes)</li><li>[Preview order modifications](https://developers.vtex.com/docs/api-reference/orders-api#post-/api/order-system/orders/-changeOrderId-/changes/preview)</li><li>[Get order modifications detail](https://developers.vtex.com/docs/api-reference/orders-api#get-/api/order-system/orders/-changeOrderId-/changes/-changeRequestId-)</li><li>[Get order modifications history](https://developers.vtex.com/docs/api-reference/orders-api#get-/api/order-system/orders/-changeOrderId-/changes)</li><li>[Retry order modifications](https://developers.vtex.com/docs/api-reference/orders-api#post-/api/order-system/orders/-changeOrderId-/changes/-changeRequestId-/retry)</li><li>[Cancel order modifications](https://developers.vtex.com/docs/api-reference/orders-api#post-/api/order-system/orders/-changeOrderId-/changes/-changeRequestId-/cancel)</li><li>[Get Order modifications settings](https://developers.vtex.com/docs/api-reference/orders-api#get-/api/order-system/orders/changes/settings)</li><li>[Update Order modifications settings](https://developers.vtex.com/docs/api-reference/orders-api#put-/api/order-system/orders/changes/settings)</li></ul> | <ul><li>`handling`</li><li>`waiting-for-fulfillment`</li><li>`ready for invoicing`</li></ul> |

The order's change history is recorded on its [details page](/en/docs/tutorials/order-details-page) in the **History of changed items section**. To view this information via API, use the [Get order modifications history](https://developers.vtex.com/docs/api-reference/orders-api#get-/api/order-system/orders/-changeOrderId-/changes) endpoint.

## General characteristics

**Order modifications** has specific characteristics, as shown in the table below:

| **Characteristic** | **Description** |
|:---:|:--- |
| Number of order modifications | There is no limit to how many times an order can be modified. |
| Incomplete orders | You cannot modify [incomplete orders](/en/docs/tutorials/understanding-incomplete-orders) — those lacking necessary information to be processed by the VTEX platform. |
| Franchise accounts | You can modify orders where the seller is a franchise account. |
| VTEX marketplace, certified, partner and external marketplaces | Modifying orders works differently across various marketplace scenarios on VTEX:<ul><li>You can modify orders from stores that act as both a [VTEX seller](/en/tutorial/estrategias-de-marketplace-na-vtex--tutorials_402#being-a-vtex-seller) and a [VTEX marketplace](/en/tutorial/estrategias-de-marketplace-na-vtex--tutorials_402#being-a-vtex-marketplace).</li><li>You can modify [Multilevel Omnichannel Inventory (MOI)](/en/docs/tutorials/multilevel-omnichannel-inventory) orders placed on [external marketplaces](https://developers.vtex.com/docs/guides/change-orders-multilevel-omnichannel-inventory-external-marketplaces).</li><li>You cannot modify orders placed on [certified marketplaces](/en/tutorial/estrategias-de-marketplace-na-vtex--tutorials_402#integrating-with-a-certified-marketplace) and [marketplaces partners](/en/tutorial/estrategias-de-marketplace-na-vtex--tutorials_402#integrating-with-marketplaces-partners).</li></ul> |
| Reservation | In order modifications scenarios, item [reservation](/en/docs/tutorials/how-does-reservation-work) is automatic. |
| Inventory update | When you modify an order, the store's [inventory](/en/docs/tutorials/managing-stock-items) is not updated automatically. The store must update the inventory in the VTEX Admin under **Catalog > Inventory > Inventory Management** or via API, using the [Update inventory by SKU and warehouse](https://developers.vtex.com/docs/api-reference/logistics-api#put-/api/logistics/pvt/inventory/skus/-skuId-/warehouses/-warehouseId-) endpoint. |
| License Manager permission | For a user to be able to modify orders, their [role](/en/docs/tutorials/roles) must be associated with at least one of the following [Licence Manager resources](/en/docs/tutorials/license-manager-resources):<ul><li>`Orders Full Access`</li><li>`Change order`</li></ul> |

## Price changes

When a modification to an order item increases or decreases the original amount of the purchase, the **Orders** module automatically communicates with **Payments** as follows:

- **Lower price after a modification:** The behavior depends on the payment status in the [transaction flow](/en/tracks/payments--6GAS7ZzGAm7AGoEAwDbwJG/1xjzgJZvqwaI1rfxLMCC3Y).
    - If the payment has already been settled (`settled` status), the payment [gateway](/en/tracks/payments--6GAS7ZzGAm7AGoEAwDbwJG/kdPbEIWf8Xq8tESQvViMB#gateway) is notified to reverse the amount that must be returned to the customer.
    - If the payment hasn't been settled yet, the gateway is notified to update the order total. 
- **Higher price after a modification:** A notification is sent to the payment gateway to request the customer to pay the additional amount.

See the table below for more information on payment and invoicing when modifying orders:

| **Characteristic** | **Description** |
|:---:|:--- |
| Conditions for increasing the order amount | You can only increase the amount of an order when it meets the following criteria:<ul><li>The order was placed using credit card, [notes payable](/en/docs/tutorials/setting-up-payments-with-notes-payable) or [customer credit](/en/docs/tutorials/customer-credit-overview).</li><li>The order [acquirer](/en/docs/tutorials/what-is-an-acquirer) allows transactions without the CVV code.</li><li>The order acquirer allows two billing transactions for the same order.</li></ul>If the [connector](/en/docs/tutorials/what-is-the-connector) does not allow modifications for higher amounts, a new transaction will be processed for the excess value, and the transaction will not be linked to the original order. |
| Modifications of settled order | In the [transaction flow](/en/tracks/payments--6GAS7ZzGAm7AGoEAwDbwJG/1xjzgJZvqwaI1rfxLMCC3Y), the order can be modified to `settled`, provided it meets the following conditions:<ul><li>The order was placed using a credit card.</li><li>Payment is settled before the order is [invoiced](/en/docs/tutorials/how-to-manually-invoice-an-order).</li><li>The payment connector is configured to allow partial refunds. [Adyen](/en/tutorial/configuring-payment-with-adyenv3--7xAz67E2Eg63LWCQNjVdwv) is currently the only payment connector that supports this operation.</li></ul>Orders with the transaction status `finished` cannot be modified. |
| Shared transaction between sellers and marketplace | You can modify orders with more than one seller and payment in marketplaces, i.e., in [split payment](/en/docs/tutorials/split-payment) scenarios. |
| Discounts | You cannot modify an order by applying discounts greater than or equal to the total amount of the original order. |
| Invoice | For [invoices](/en/tracks/orders--2xkTisx4SXOWXQel8Jg8sa/2WgQrlHTyVo4hLjhUs1LMT), order modifications behave as follows:<ul><li>If the order has already been [invoiced](/en/docs/tutorials/how-to-manually-invoice-an-order) in full, it can no longer be modified.</li><li>Orders not yet invoiced or only [partially invoiced](/en/tracks/pedidos--2xkTisx4SXOWXQel8Jg8sa/q9GPspTb9cHlMeAZfdEUe) can be modified.</li><li>The amount of partial invoices for the modified order must be equal to or greater than the amount of an invoice already issued.</li><li>If the total amount of the modified order is lower than the amount of an invoice that has already been issued, it cannot be modified.</li></ul>In general, it is the invoicing of the order that triggers payment settlement. However, this behavior is different for stores with [automatic settlement](/en/docs/tutorials/configuring-maximum-automatic-payment-settlement-time-frame) configured. |

