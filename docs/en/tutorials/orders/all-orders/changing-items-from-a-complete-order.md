---
title: 'Changing items from a completed order'
id: tutorials_190
status: PUBLISHED
createdAt: 2017-04-27T22:15:22.411Z
updatedAt: 2024-11-11T19:08:14.645Z
publishedAt: 2024-11-11T19:08:14.645Z
firstPublishedAt: 2017-04-27T23:00:47.264Z
contentType: tutorial
productTeam: Post-purchase
author: 30TBnJ838LXSZvdJFlcB8H
slugEN: changing-items-from-a-complete-order
legacySlug: altering-items-skus-in-the-order, changing-completed-orders
locale: en
subcategoryId: 2t00bBkcAwIkgSCGKsMOwY
---

**Changing items** is a feature that allows retailers to modify the items from an order. With this feature, the store can handle eventual changes in orders motivated by customer mistakes, product unavailability and the inclusion of discounts, among other things.

There are two ways to make a change to an order:

* [VTEX Admin:](#how-to-change-order-items) it is only possible if the order status is `Handling Shipping`.
* [Order change API:](https://developers.vtex.com/docs/api-reference/orders-api#post-/api/oms/pvt/orders/-orderId-/changes) in addition to changing items, you can create discounts and change the order price. You can only change it if the order status in the order API is `handling` or `waiting-for-fulfillment`.

> ⚠️ After it has been changed, the customer will receive an email notification if the `Change of information` template ([transactional email template related to the order](https://help.vtex.com/en/tutorial/order-transactional-email-templates--3g2S2kqBOoSGcCaqMYK2my)) is enabled in Message Center. The customer receives the messages with the information that was filled in the item change form.

## Restrictions

Before making changes to the order, be aware of the restrictions of this feature:

* You can only change [Multilevel Omnichannel Inventory](https://help.vtex.com/en/tutorial/multilevel-omnichannel-inventory--7M1xyCZWUyCB7PcjNtOyw4) orders when they are mare in [external marketplaces](https://developers.vtex.com/docs/guides/change-orders-multilevel-omnichannel-inventory-external-marketplaces).
* You cannot change [incomplete orders](https://help.vtex.com/pt/tutorial/entendendo-os-pedidos-incompletos--tutorials_294).
* An order can be changed up to 50 times.
* You cannot apply discounts that are equal to or greater than the order value. 
* The request for change only occurs if there are changes in the number of items or replacement of at least one SKU in the order.
* Changing items that are not from the marketplace itself or a franchise account is not allowed.
* The [acquirer](https://help.vtex.com/pt/tutorial/o-que-e-um-adquirente--7N1oRTG8dGmOiIugC0cs4E) must accept the new transaction value for the change to occur.
* Additional amounts are only allowed if the order was paid using the **Promissory** or **CardPromissory** payment conditions (available in the Admin in **Store Settings > Payment > Settings > Payment Conditions**), [cash](https://help.vtex.com/tutorial/how-to-configure-a-custom-payment--tutorials_451) or [credit control](https://help.vtex.com/tutorial/customer-credit-overview--1uIqTjWxIIIEW0COMg4uE0). In addition, the [acquirer](https://help.vtex.com/pt/tutorial/what-is-an-acquirer--7N1oRTG8dGmOiIugC0cs4E) must allow transactions without the CVV code and two charging transactions in the same order.
* The [reservation](https://help.vtex.com/pt/tutorial/how-does-reservation-work--tutorials_92) of the items in the inventory is not automatic. You must manually update the number of items that are still available in the [inventory](https://help.vtex.com/pt/tutorial/managing-stock-items--tutorials_139).
* Orders with [partial invoices](https://help.vtex.com/en/tracks/pedidos--2xkTisx4SXOWXQel8Jg8sa/q9GPspTb9cHlMeAZfdEUe) cannot be [canceled](https://help.vtex.com/en/tutorial/como-cancelar-pedido--tutorials_186). If the customer wants to replace or remove items from the order, it is possible to change the order.
* It is not possible to change an order when its transaction is finalized. For changes to the discounted order value, for example, the OMS considers that you can still change the transaction value if the status in Transaction Details is other than `Finished`, even if the value has already been settled.  
* You cannot make changes to orders coming from [marketplaces integrated with VTEX](https://help.vtex.com/pt/tutorial/marketplace-strategies-at-vtex--tutorials_402) (either by native connectors or partner connectors).
* You can only change orders that are being prepared for delivery.
* For changes in which the final order value is higher than the initial value:
    * If the [connector](https://help.vtex.com/pt/tutorial/what-is-the-connector--3lze0Cu0bmyC6u2o2iaeEA)does not allow changes to the order value (for higher values), a new transaction will be performed with the remaining value. This way, the transaction will not be linked to the original order. If it is necessary, search for transactions by value, change date or customer name.
    * The settlement of the additional values occurs only after the order is invoiced. Therefore, be careful with this type of transaction. Since the additional amounts will only be settled later, it is more susceptible to fraud.

## How to change order items

To make changes to items, follow the steps below:

1. In the VTEX Admin, go to **Orders > All Orders**, or type **All Orders** in the search bar at the top of the page.    
2. Search for the order by using the search bar [or the filters](https://help.vtex.com/en/tutorial/como-filtrar-pedidos--tutorials_192) and select the desired order.    
3. Click the order to access the **Order Details Page**.       
4. In the Items to invoice section, click on **Change**. 

    > You can only change the order status if the order is in the Awaiting fulfillment status. Only change the order status after getting confirmation from your ecommerce operation. If your order is not Awaiting fulfillment, in the Order Status section, click **Start handling** > select the checkboxes > click **Proceed with status**. 

5. Fill out the form with the desired changes.
<ul>
<li>**To add new products**, type the SKU name in the search bar.</li>
<li>**To change product quantities** adjust the control by increasing or decreasing it.</li>
<li>**To change the value** select Discount or Increase, and enter the updated value.</li>
<li>Comment the **Reason for changes** The comment entered in this field is recorded in the History of modified items. We advise you to describe what the customer who requested the change communicated.</li>
</ul>
6. Click on `Send`.    

Changes to the order will be updated in the *Items to invoice* and *History of changed items* sections.  

### Partial invoices

When changing or removing items from an order, the order total changes. In this case, you have to [invoice the order](https://help.vtex.com/en/tracks/orders--2xkTisx4SXOWXQel8Jg8sa/2WgQrlHTyVo4hLjhUs1LMT) by sending the [partial invoice](https://help.vtex.com/en/tracks/pedidos--2xkTisx4SXOWXQel8Jg8sa/q9GPspTb9cHlMeAZfdEUe) corresponding to the amount that will be settled for the order after the change. 

The order total will be updated once the invoice is added, corresponding to what is settled by the VTEX payment gateway. The VTEX Payments system will automatically refund the customer if an item is returned.

> ℹ️ The partial invoices feature is available to all VTEX stores, but the partial settlement in the gateway is in beta. Besides, for partial invoices to trigger partial settlements in the transaction, it is necessary to use a connector with the [Payment Provider Protocol](https://help.vtex.com/en/tutorial/payment-provider-protocol--RdsT2spdq80MMwwOeEq0m). Legacy connectors do not support the functionality.
