---
title: 'How to return items from an order'
id: 2bSNWwD0g8fcUmuupLao9i
status: PUBLISHED
createdAt: 2020-12-28T21:23:42.045Z
updatedAt: 2024-06-10T23:02:44.957Z
publishedAt: 2024-06-10T23:02:44.957Z
firstPublishedAt: 2020-12-28T21:27:16.332Z
contentType: tutorial
productTeam: Post-purchase
author: 0QBQws7rk0t5Mnu8fgfUv
slugEN: how-to-return-order-items
locale: en
legacySlug: how-to-return-order-items-beta
subcategoryId: 3VNOhxDrvYxJThhuJClrYZ
---

On the **Order Details** page, retailers can track specific products’ life-cycle by analyzing their interactions, data, and context. Learn more about the new [Order Details](https://help.vtex.com/en/tutorial/order-details-page-interface--2Y75n54Cc9VizrlG1N6ZNl) page. 

You can return some items or all of them even when they were invoiced if your customer requests it, as long as the items are inserted in the invoice. A typical scenario for this action is when a customer in the fashion segment wants to return a clothing item and exchange it for one with a different size, for example. 

On the Order Details page, you can orchestrate this operation by completing the following steps: 

1. In VTEX Admin, access **Orders > All Orders**, or type **All Orders** in the search bar at the top of the page.
2. Select the desired order.
3. In the **Invoices** section, click `Return items`.
4. Select the checkbox of the items that you want to return.
5. Define the number of units of each item that you want to return.
6. Enter the additional value that you will reimburse your client in the `Additional value` field. This value is for the shipping cost of the returned order.<p>For example, if an order had a shipping cost of $20.00, you should fill this field with $20.00. If it is filled in with an amount less than the total shipping cost, the customer receives half of the filled in amount (**Additional Value**) as a reversal of the purchase, and the other half in giftcard. Following the example given, suppose that instead of $20.00 (which is the total shipping cost) the store has filled in the **Additional Value** as $12.00. The customer will receive this back in the form of a chargeback of US$6.00 plus a US$6.00 giftcard.</p> *It’s an optional field. Please fill in if the additional value is part of your store’s return policy.* 
7. Enter the reason for that added value in the `Referred to` field.
    > *It’s an optional field. Please fill in if the additional value is part of your store’s return policy.* 

8. Enter the number of the `Entrance Invoice`.
    > *This field refers to the return invoice, when the item returns back to your inventory. The invoice number must be different from the previous invoice.*

9. Inform the `Reason of return`.
10. Click `Request chargeback`.

After the refund is processed in the system, your returned items and information will be displayed in the **Returned items** section.

>ℹ️ You can change orders via API using the endpoint [Create order change](https://developers.vtex.com/docs/api-reference/orders-api#patch-/api/order-system/orders/-changeOrderId-/changes), and issue invoices after changes using the endpoint [Order invoice notification](https://developers.vtex.com/docs/api-reference/orders-api#post-/api/oms/pvt/orders/-orderId-/invoice).
