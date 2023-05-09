---
title: How to invoice an order
id: 7p1h852V5t54KyscpgxE2v
createdAt: 2020-12-28T20:50:42.445Z
updatedAt: 2023-04-28T23:34:09.232Z
publishedAt: 2023-04-28T23:34:09.232Z
firstPublishedAt: 2020-12-28T21:01:55.107Z
contentType: tutorial
productTeam: Post-purchase
author: 30TBnJ838LXSZvdJFlcB8H
slug: how-to-manually-invoice-an-order
legacySlug: how-to-manually-invoice-an-order-beta
subcategory: 3VNOhxDrvYxJThhuJClrYZ
---

The [Order Details](https://help.vtex.com/en/tutorial/pagina-de-detalhes-do-pedido-interface--2Y75n54Cc9VizrlG1N6ZNl) page gathers the data of a particular order and allows the retailer to follow the detailed order flow. 

It is also on this page that the store can manually add and check the [order invoice](https://help.vtex.com/en/tracks/pedidos--2xkTisx4SXOWXQel8Jg8sa/2WgQrlHTyVo4hLjhUs1LMT). You can also send a [partial invoice](https://help.vtex.com/en/tracks/pedidos--2xkTisx4SXOWXQel8Jg8sa/q9GPspTb9cHlMeAZfdEUe) when there is a change in the order's cost, items, or when items are returned.

To invoice the order on the VTEX platform, you need to add the items' invoice to the **Orders** module. You must invoice the order so that the invoice is available to the customer and the [order flow](https://help.vtex.com/en/tutorial/order-flow-on-the-oms--tutorials_196) is complete. The invoice can be sent:

* Via [API](https://developers.vtex.com/docs/api-reference/orders-api#post-/api/oms/pvt/orders/-orderId-/invoice) 
* Via VTEX Admin.

<div class = "alert alert-info">
You can change the <a href="https://help.vtex.com/en/tutorial/transportadoras-na-vtex--7u9duMD5UQa2QQwukAWMcE">carrier</a> associated with the order when invoicing it. To do so, in the <b>Order Tracking</b> section, click <i>Carrier</i> and select the desired option.
</div>

To send the invoice via VTEX Admin, follow the steps below:

1. In the VTEX Admin, go to **Orders > All orders**, or type **All orders** in the search bar at the top of the page.  
2. Search for the order by using the search bar [or the filters](https://help.vtex.com/en/tutorial/como-filtrar-pedidos--tutorials_192).  
3. Click the desired order.     
4. Scroll down to the Invoice to items section, and click on the arrow icon <i class="fas fa-chevron-right"></i> to expand.  
![Itens faturarEN](//images.ctfassets.net/alneenqid6w5/2wScKr5ZaHShpyntCuN0jy/c88e7dc843b651ed6b703ed4cd05ba3c/Itens_faturarEN.png)
5. Click the `Invoice` button. 
6. Click the desired billing option:      
    * **Submit invoice referencing items:** to invoice the order referencing the package items.  
    * **Submit single invoice:** to invoice specific items of the package. If any [changes are made to the order](https://help.vtex.com/en/tutorial/how-to-change-order-items--7jekq618QxgbsOxKkXBjE8), you need to enter partial invoices.  
    * **Request Invoice:** allows you to notify your store's ERP to generate an invoice.      
7. Fill in the corresponding form fields:
    * Fields of the **Submit invoice referencing items** form.
        * Invoice Number: numerical identifier of the invoice. Do not enter more than one invoice with the same number.
        * Invoice URL: web address of the invoice.
        * Access key: for consulting the electronic invoice (NF-e) on the internet. This field must be filled in only for NF-e cases.
        * Issue date: Issue date of the invoice.
        * Order tracking: tracking identification code.
        * Extra values: extra values of the invoice.
        * Value: full amount of the invoice.
        * Use the plus <i class="fas fa-plus"></i> and minus icons <i class="fas fa-minus"></i> to add/remove invoice items.
    * Fields of the **Submit single invoice** form.
        * Value: full amount of the invoice.
        * Invoice Number: numerical identifier of the invoice. Do not enter more than one invoice with the same number.
        * Invoice URL: web address of the invoice.
        * Access key: for consulting the electronic invoice (NF-e) on the internet. This field must be filled in only for NF-e cases.
        * Issue date: Issue date of the invoice.
        * Order tracking: tracking identification code.
    * Fields of the **Request invoice** form. This form should only be used for stores that use inStore.
        * Observations: field used to notify an external billing system.
        * Value: full amount of the invoice.
8. After adding all the information, click `Save Invoice` or `Request invoice`, depending on the option you chose.

After the order is `Invoiced`, go to the **Invoice** section to check the invoices added, as shown in the image below:

![FaturaEN](//images.ctfassets.net/alneenqid6w5/24K1rMqn970zgeKxK81f3Z/1f68c545e4a42383d85aa82b7dd6ba96/FaturaEN.png)

For [partial invoices](https://help.vtex.com/en/tracks/pedidos--2xkTisx4SXOWXQel8Jg8sa/q9GPspTb9cHlMeAZfdEUe), when [changing or removing items from an order](https://help.vtex.com/en/tutorial/how-to-change-order-items--7jekq618QxgbsOxKkXBjE8), the order total will be updated after invoicing and will correspond to what is captured by the VTEX payment gateway.

