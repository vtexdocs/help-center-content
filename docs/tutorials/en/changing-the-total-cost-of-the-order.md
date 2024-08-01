---
title: 'Changing the total cost of the order'
id: 2asq4BmxvSD8Tw9xpfZuMo
status: PUBLISHED
createdAt: 2021-12-15T18:43:55.480Z
updatedAt: 2023-03-29T15:59:48.297Z
publishedAt: 2023-03-29T15:59:48.297Z
firstPublishedAt: 2021-12-15T19:49:57.726Z
contentType: tutorial
productTeam: Post-purchase
author: 30TBnJ838LXSZvdJFlcB8H
slug: changing-the-total-cost-of-the-order
locale: en
legacySlug: changing-the-total-cost-of-the-order-beta
subcategory: 3VNOhxDrvYxJThhuJClrYZ
---

The [Order Details page](https://help.vtex.com/en/tutorial/order-details-page-beta--2Y75n54Cc9VizrlG1N6ZNl) allows you to change the final cost of orders that have not yet been invoiced. This occurs when there are discounts or additions to the order total.

<div class="alert alert-warning">
Remember that this feature is only available for orders whose status is <code>Preparing delivery</code>.
</div>

To make the change, follow the steps below:

1. In the VTEX Admin, go to **Orders > All Orders**, or type **All Orders** in the search bar at the top of the page.    
2. Search for the order by using the search bar [or the filters](https://help.vtex.com/en/tutorial/como-filtrar-pedidos--tutorials_192) and select the desired order.    
3. Click the order to access the **Order details page**.        
4. Go to the **Total cost of the order** section on the right side of the Order Details page.    
5. Click `Change final cost`.    
![valorfinalEN](//images.ctfassets.net/alneenqid6w5/5VwpodKoIiDSWBwYQs2rDc/22a8836f14fd64c2f17257c60e711a8a/valorfinalEN__1_.png)  
6. On the **Change value** page, fill in the required fields.  
7. Fill in the required fields:  
    * **Value:** Select Discount or Increase and enter the amount corresponding to what you want to change.    
    * **Reason:** indicate why you are making this change.  
8. On the right side of the page click `Submit`.  
![Alterar valorEN](//images.ctfassets.net/alneenqid6w5/15TldKoBz42ds5fJswW13O/91ea6db5cdf47879f616f2a17e31c542/Alterar_valorEN.png)

Changes to the order cost will be updated in the "Items to invoice" and "Order History" sections. Note that the order total will also change.

### Partial invoices

When changing or removing items from an order, the order total changes. In this case, you have to [invoice the order](https://help.vtex.com/en/tracks/orders--2xkTisx4SXOWXQel8Jg8sa/2WgQrlHTyVo4hLjhUs1LMT) by sending the [partial invoice](https://help.vtex.com/en/tracks/pedidos--2xkTisx4SXOWXQel8Jg8sa/q9GPspTb9cHlMeAZfdEUe) corresponding to the amount that will be settled for the order after the change. 

The order total will be updated once the invoice is added, corresponding to what is captured by the VTEX payment gateway. The VTEX Payments system will automatically refund the customer if an item is returned.

<div class = "alert alert-info">
The partial invoices feature is available to all VTEX stores, but the partial settlement in the gateway is in beta. Besides, for partial invoices to trigger partial settlements in the transaction, it is necessary to use a connector with the <a href="https://help.vtex.com/en/tutorial/payment-provider-protocol--RdsT2spdq80MMwwOeEq0m">Payment Provider Protocol</a>. Legacy connectors do not support the functionality.
</div>
