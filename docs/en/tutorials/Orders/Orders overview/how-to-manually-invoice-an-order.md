---
title: 'How to invoice an order'
id: 7p1h852V5t54KyscpgxE2v
status: PUBLISHED
createdAt: 2020-12-28T20:50:42.445Z
updatedAt: 2025-03-25T17:09:59.402Z
publishedAt: 2025-03-25T17:09:59.402Z
firstPublishedAt: 2020-12-28T21:01:55.107Z
contentType: tutorial
productTeam: Post-purchase
author: 30TBnJ838LXSZvdJFlcB8H
slugEN: how-to-manually-invoice-an-order
locale: en
legacySlug: how-to-manually-invoice-an-order-beta
subcategoryId: 3VNOhxDrvYxJThhuJClrYZ
---

The [Order Details](/en/tutorial/pagina-de-detalhes-do-pedido-interface--2Y75n54Cc9VizrlG1N6ZNl) page gathers the data of a particular order and allows the retailer to follow the detailed order flow. 

It is also on this page that the store can manually add and check the [order invoice](/en/tracks/pedidos--2xkTisx4SXOWXQel8Jg8sa/2WgQrlHTyVo4hLjhUs1LMT). You can also send a [partial invoice](/en/tracks/pedidos--2xkTisx4SXOWXQel8Jg8sa/q9GPspTb9cHlMeAZfdEUe) when there is a change in the order's cost, items, or when items are returned.

To invoice the order on the VTEX platform, you need to add the items' invoice to the **Orders** module. You must invoice the order so that the invoice is available to the customer and the [order flow](/en/tutorial/order-flow-on-the-oms--tutorials_196) is complete. The invoice can be sent:

* Via [API](https://developers.vtex.com/docs/api-reference/orders-api#post-/api/oms/pvt/orders/-orderId-/invoice).
* Via VTEX Admin.

<div class = "alert alert-info">
You can change the <a href="https://help.vtex.com/en/tutorial/transportadoras-na-vtex--7u9duMD5UQa2QQwukAWMcE">carrier</a> associated with the order when invoicing it. To do so, in the <b>Order Tracking</b> section, click <i>Carrier</i> and select the desired option.
</div>

To send the invoice via VTEX Admin, follow the steps below:

1. In the VTEX Admin, go to **Orders > All orders**, or type **All orders** in the search bar at the top of the page.  
2. Search for the order by using the search bar [or the filters](/en/tutorial/como-filtrar-pedidos--tutorials_192).  
3. Click the desired order.     
4. Scroll down to the Invoice to items section, and click on the arrow icon <i class="fas fa-chevron-right"></i> to expand.  
![Itens faturarEN](https://raw.githubusercontent.com/vtexdocs/help-center-content/refs/heads/main/docs/en/tutorials/Orders/Orders%20overview/how-to-manually-invoice-an-order_1.png)
5. Click the `Invoice` button. 
6. Click the desired billing option:      
    * **Submit invoice referencing items:** to invoice the order referencing the package items.  
    * **Submit single invoice:** to invoice specific items of the package. If any [changes are made to the order](/en/tutorial/how-to-change-order-items--7jekq618QxgbsOxKkXBjE8), you need to enter partial invoices.  
    * **Request Invoice:** allows you to notify your store's ERP to generate an invoice.      
7. Fill in the corresponding form fields:
    * Fields of the **Submit invoice referencing items** form.
        * Invoice Number: numerical identifier of the invoice. Do not enter more than one invoice with the same number.
        * Invoice URL: web address of the invoice.
        * Access key: for consulting the electronic invoice (NF-e) on the internet. This field must be filled in only for NF-e cases.
        * Issue date: Issue date of the invoice.
        * Order tracking: tracking identification code.
        * Extra values: extra values of the invoice, such as interest, taxes, and shipping prices.
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

![FaturaEN](https://raw.githubusercontent.com/vtexdocs/help-center-content/refs/heads/main/docs/en/tutorials/Orders/Orders%20overview/how-to-manually-invoice-an-order_2.png)

For [partial invoices](/en/tracks/pedidos--2xkTisx4SXOWXQel8Jg8sa/q9GPspTb9cHlMeAZfdEUe), when [changing or removing items from an order](/en/tutorial/how-to-change-order-items--7jekq618QxgbsOxKkXBjE8), the order total will be updated after invoicing and will correspond to what is captured by the VTEX payment gateway.

Orders with [partial invoices](/en/tracks/pedidos--2xkTisx4SXOWXQel8Jg8sa/q9GPspTb9cHlMeAZfdEUe) cannot be [canceled](/en/tutorial/como-cancelar-pedido--tutorials_186). If the customer wants to replace or remove items from the order, it is possible to [change the order](/en/tutorial/alteracao-de-itens-de-um-pedido-finalizado--tutorials_190).
