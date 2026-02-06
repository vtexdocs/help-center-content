---
title: 'How to invoice an order'
id: 7p1h852V5t54KyscpgxE2v
status: PUBLISHED
createdAt: 2020-12-28T20:50:42.445Z
updatedAt: 2025-07-28T19:41:56.286Z
publishedAt: 2025-07-28T19:41:56.286Z
firstPublishedAt: 2020-12-28T21:01:55.107Z
contentType: tutorial
productTeam: Post-purchase
author: 30TBnJ838LXSZvdJFlcB8H
slugEN: how-to-manually-invoice-an-order
legacySlug: how-to-manually-invoice-an-order-beta
locale: en
subcategoryId: 3VNOhxDrvYxJThhuJClrYZ
---

The [Order Details](/en/docs/tutorials/order-details-page) page gathers the data of a particular order and allows the retailer to follow the detailed order flow. 

It is also on this page that the store can manually add and check the [order invoice](/en/docs/tracks/invoicing-an-order). You can also send a [partial invoice](/en/docs/tracks/partial-invoices) when there is a change in the order's cost, items, or when items are returned.

To invoice the order on the VTEX platform, you need to add the items' invoice to the **Orders** module. You must invoice the order so that the invoice is available to the customer and the [order flow](/en/docs/tutorials/order-flow-and-status) is complete. The invoice can be sent:

* Via [API](https://developers.vtex.com/docs/api-reference/orders-api#post-/api/oms/pvt/orders/-orderId-/invoice).
* Via VTEX Admin.

> ℹ️ You can change the [carrier](/en/docs/tutorials/carriers-on-vtex) associated with the order when invoicing it. To do so, in the **Order Tracking** section, click *Carrier* and select the desired option.

To send the invoice via VTEX Admin, follow the steps below:

1. In the VTEX Admin, go to **Orders > All orders**, or type **All orders** in the search bar at the top of the page.  
2. Search for the order by using the search bar [or the filters](/en/docs/tutorials/filtering-all-orders).  
3. Click the desired order.     
4. Scroll down to the Invoice to items section, and click on the arrow icon <i class="fas fa-chevron-right"></i> to expand.  
![Itens faturarEN](https://cdn.statically.io/gh/vtexdocs/help-center-content/refs/heads/main/docs/en/tutorials/orders/orders-overview/how-to-manually-invoice-an-order_1.png)
5. Click the `Invoice` button. 
6. Click the desired billing option:      
    * **Submit invoice referencing items:** to invoice the order referencing the package items.  
    * **Submit single invoice:** to invoice specific items of the package. If any [changes are made to the order](/en/docs/tutorials/changing-items-from-a-complete-order), you need to enter partial invoices.  
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

![FaturaEN](https://cdn.statically.io/gh/vtexdocs/help-center-content/refs/heads/main/docs/en/tutorials/orders/orders-overview/how-to-manually-invoice-an-order_2.png)

For [partial invoices](/en/docs/tracks/partial-invoices), when [changing or removing items from an order](/en/docs/tutorials/changing-items-from-a-complete-order), the order total will be updated after invoicing and will correspond to what is settled by the VTEX payment gateway.

Orders with [partial invoices](/en/docs/tracks/partial-invoices) cannot be [canceled](/en/docs/tutorials/canceling-orders). If the customer wants to replace or remove items from the order, it is possible to [change the order](/en/docs/tutorials/changing-items-from-a-complete-order).
