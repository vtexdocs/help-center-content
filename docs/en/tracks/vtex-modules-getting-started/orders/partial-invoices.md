---
title: 'Partial Invoices'
id: q9GPspTb9cHlMeAZfdEUe
status: PUBLISHED
createdAt: 2022-06-20T20:13:46.342Z
updatedAt: 2024-04-01T17:51:08.329Z
publishedAt: 2024-04-01T17:51:08.329Z
firstPublishedAt: 2022-06-20T20:21:34.641Z
contentType: trackArticle
productTeam: Post-purchase
slugEN: partial-invoices
locale: en
trackId: 2xkTisx4SXOWXQel8Jg8sa
trackSlugEN: orders
order: 7
---

When managing orders in **Orders** module, adding the invoice to the order is a required step for its status to change to `Invoiced` — which indicates that the order has been successfully completed. However, the amount which appears on the invoice does not always match the initial order amount. This may occur in the following scenarios: 

* When the order amount changes due to discounts or additions.  
* When [order items are changed](/en/docs/tutorials/changing-items-from-a-complete-order).  
* When order items are returned.    

In each of these cases, you must add a partial invoice, i.e., more than one invoice, to reach the total order amount.   

## Partial invoice behavior 

Partial invoices generate the following actions in the **Orders** module and other VTEX systems:

* Partial invoices added to orders also result in partial settlements in the transaction. The total order amount will be updated after adding the invoice, and it corresponds to the amount settled in the VTEX payment gateway.   
* The customer is automatically refunded in case there is a chargeback.  
* In case an item and its value have to be removed from an order, the retailer can change the order, discounting the item's value — only if the previous invoices settle the corresponding amounts and keep the rest of the settled amount open.  
* As the partial invoice only settles the amount corresponding to the invoice, requesting changes to the order amount is possible. A partial invoice keeps the transaction open.
* Orders with partial invoices cannot be [canceled](/en/docs/tutorials/canceling-orders). If the customer wants to replace or remove items from the order, it is possible to [change the order](/en/docs/tutorials/changing-items-from-a-complete-order).

> ℹ️ The partial invoices feature is available to all VTEX stores, but the partial settlement in the gateway is in beta. Besides, for partial invoices to trigger partial settlements in the transaction, it is necessary to use a connector with the [Payment Provider Protocol](/en/docs/tutorials/payment-provider-protocol). Legacy connectors do not support the functionality.

## Sending a partial invoice

To send a partial invoice through the VTEX Admin, follow the steps below:

1. In the VTEX Admin, go to **Orders > All Orders**, or type **All Orders** in the search bar at the top of the page.
2. Search for the order by using the search bar [or the filters](/en/docs/tutorials/filtering-all-orders).
3. Click the order to access the **Order details page**.   
4. Click `Invoice`.  
5. Click **Submit single invoice**.  
6. In the **Amount** field, select `Amount`.  
7. Fill in the updated amount in the field below.
8. Fill in the **Billing Details** information.
9. Click `Save Invoice`.  

> After invoicing, proceed to [change the order](/en/docs/tutorials/changing-items-from-a-complete-order). 

Once order changes have been made, you can view all the transaction events by clicking [See transaction details](/en/docs/tracks/viewing-transaction-details).

> ℹ️ The same actions can also be done using our Orders API. To do so, check out these endpoints: [Register Change on Order](https://developers.vtex.com/vtex-rest-api/reference/registerchange), [Invoice notification](https://developers.vtex.com/vtex-rest-api/reference/invoicenotification), [Retrieve Payment transaction](https://developers.vtex.com/vtex-rest-api/reference/getpaymenttransaction), and [Update order's partial invoice (send tracking number)](https://developers.vtex.com/vtex-rest-api/reference/updatepartialinvoicesendtrackingnumber).

## Learn more

- [Order details page](/en/docs/tutorials/order-details-page)
- [Changing items from a completed order](/en/docs/tutorials/changing-items-from-a-complete-order)
- [Changing the total cost of the order](/en/docs/tutorials/changing-the-total-cost-of-the-order)  
- [How to invoice an order](/en/docs/tutorials/how-to-manually-invoice-an-order)
