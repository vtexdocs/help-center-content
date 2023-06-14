---
title: How to change items in an order
id: 7jekq618QxgbsOxKkXBjE8
status: DRAFT
createdAt: 2020-12-28T21:11:48.378Z
updatedAt: 2023-03-31T22:07:17.538Z
publishedAt: 
firstPublishedAt: 2020-12-28T21:20:33.832Z
contentType: tutorial
productTeam: Post-purchase
author: 0QBQws7rk0t5Mnu8fgfUv
slug: how-to-change-order-items
legacySlug: how-to-change-order-items-beta
subcategory: 3VNOhxDrvYxJThhuJClrYZ
---

On the **Order Details** page, retailers can track specific products’ life-cycle by analyzing their interactions, data, and context. Learn more about the new [Order Details](https://help.vtex.com/en/tutorial/order-details-page-beta--2Y75n54Cc9VizrlG1N6ZNl) page. 

There are two ways to make a change to an order:

* [Via VTEX Admin:](#how-to-change-order-items) it is only possible if the order status is `Preparing delivery`.
* [Via order change API:](https://developers.vtex.com/docs/api-reference/orders-api#post-/api/oms/pvt/orders/-orderId-/changes) in addition to changing items, you can create discounts and change the order price. You can only change it if the order status in the order API is `handling` or `waiting-for-fulfillment`.

<div class="alert alert-warning">
After it has been changed, the customer will receive an email notification if the <code>Change of information</code> template (<a href="https://help.vtex.com/en/tutorial/order-transactional-email-templates--3g2S2kqBOoSGcCaqMYK2my">transactional email template related to the order</a>) is enabled in Message Center. The customer receives the messages with the information that was filled in the item change form.
</div>

You can edit order items provided they have not been invoiced yet. To add or remove an item or change its number, please follow the step-by-step instructions below.

<div class = "alert alert-info">
To edit the order, its status must be <code> Handling shipping</code> which is equivalent to the <code>handling</code> status in the <a href="https://developers.vtex.com/docs/api-reference/orders-api#post-/api/oms/pvt/orders/-orderId-/changes">API</a>.  Read our article <a href="https://help.vtex.com/en/tutorial/order-status-table-oms--frequentlyAskedQuestions_773">Order status table </a>to learn more.
Check the <a href="https://help.vtex.com/en/tutorial/alteracao-de-itens-de-um-pedido-finalizado--tutorials_190#restrictions">Restrictions</a> section for the conditions for using the feature.
</div>

1. In the VTEX Admin, go to **Orders > All Orders**, or type **All Orders** in the search bar at the top of the page.    
2. Search for the order by using the search bar [or the filters](https://help.vtex.com/en/tutorial/como-filtrar-pedidos--tutorials_192) and select the desired order.    
3. Click the order to access the **Order Details Page**.       
4. In the Items to invoice section, click on **Change**. 

    > You can only change the order status if the order is in the Awaiting fulfillment status. Only change the order status after getting confirmation from your ecommerce operation. If your order is not Awaiting fulfillment, in the Order Status section, click **Start handling** > select the checkboxes > click **Proceed with status**. 

5. Fill out the form with the desired changes.
<ul>
<li><b>To add new products</b>, type the SKU name in the search bar.</li>
<li><b>To change product quantities</b> adjust the control by increasing or decreasing it.</li>
<li><b>To change the value</b> select Discount or Increase, and enter the updated value.</li>
<li>Comment the <b>Reason for changes</b> The comment entered in this field is recorded in the History of modified items. We advise you to describe what the customer who requested the change communicated.</li>
</ul>
6. Click on `Send`.    

Changes to the order will be updated in the *Items to invoice* and *History of changed items* sections.

### Partial invoices

When [changing or removing items from an order](https://help.vtex.com/en/tutorial/alteracao-de-itens-de-um-pedido-finalizado--tutorials_190), the order total changes. In this case, you have to [invoice the order](https://help.vtex.com/en/tracks/orders--2xkTisx4SXOWXQel8Jg8sa/2WgQrlHTyVo4hLjhUs1LMT) by sending the [partial invoice](https://help.vtex.com/en/tracks/pedidos--2xkTisx4SXOWXQel8Jg8sa/q9GPspTb9cHlMeAZfdEUe) corresponding to the amount that will be settled for the order after the change. 

The order total will be updated once the invoice is added, corresponding to what is captured by the VTEX payment gateway. The VTEX Payments system will automatically refund the customer if an item is returned.

<div class = "alert alert-info">
The partial invoices feature is available to all VTEX stores, but the partial settlement in the gateway is in beta. Besides, for partial invoices to trigger partial settlements in the transaction, it is necessary to use a connector with the <a href="https://help.vtex.com/en/tutorial/payment-provider-protocol--RdsT2spdq80MMwwOeEq0m">Payment Provider Protocol</a>. Legacy connectors do not support the functionality.
</div>
