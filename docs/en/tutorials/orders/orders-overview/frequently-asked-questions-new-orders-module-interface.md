---
title: 'Frequently asked questions about the new orders module interface'
id: 1mgSrqT2X3lxIkccEv8bLW
status: PUBLISHED
createdAt: 2022-12-08T18:26:26.850Z
updatedAt: 2025-09-25T11:26:48.912Z
publishedAt: 2025-09-25T11:26:48.912Z
firstPublishedAt: 2023-01-05T13:24:51.496Z
contentType: tutorial
productTeam: Post-purchase
author: 5l9ZQjiivHzkEVjafL4O6v
slugEN: frequently-asked-questions-new-orders-module-interface
legacySlug: frequently-asked-questions-about-the-new-orders-module-interface
locale: en
subcategoryId: 3VNOhxDrvYxJThhuJClrYZ
---

The VTEX Admin **All Orders** module has been redesigned to provide a more intuitive and complete experience. Among the latest improvements, you can now [search for orders without date limitation](/en/tutorial/como-filtrar-pedidos--tutorials_192), no longer restricted to searching only within the last six months. 

From February 1st, 2023, the new interface will be the default for all VTEX stores, and you will not be able to switch back to the old version. We have created this documentation, answering the following questions to help you through this transition:

* [What happened to the six-month search filter?](#what-happened-to-the-six-month-search-filter)
* [How to view the order flow diagram?](#how-to-view-the-order-flow-diagram)
* [How do I invoice an order?](#how-do-i-invoice-an-order)
* [How to resend an email to the customer?](#how-to-resend-an-email-to-the-customer)

You can see the sections and fields correspondence between the old version of the **Order Details** page and the new version in the image below:

![board_comparativo_interface_pedido_v2_en](https://cdn.statically.io/gh/vtexdocs/help-center-content/refs/heads/main/docs/en/tutorials/orders/orders-overview/frequently-asked-questions-new-orders-module-interface_1.png)

## What happened to the six-month search filter?

The six-month filter is now replaced by an unlimited date search that returns all orders related to the criteria used, regardless of their creation date. You can, for example, view a customer's full purchase history using the customer's name, email, or document. Read the article [Filter orders on All Orders](/en/tutorial/como-filtrar-pedidos--tutorials_192) to learn more. 

> ℹ️ The search in All Orders cannot be combined with other filters. So, once you remove the date limit from the search, any active filters become inactive. However, you can combine filters and select the custom period of six months, for example.

Enter the desired term in the search bar to search all orders. This will make the <i class="fas fa-toggle-off"></i> `Remove date limit` option visible. Then, activate it to search.

![busca_sem_limite_data_all_en](https://cdn.statically.io/gh/vtexdocs/help-center-content/refs/heads/main/docs/en/tutorials/orders/orders-overview/frequently-asked-questions-new-orders-module-interface_2.png)

## How to view the order flow diagram?

By default, in the new interface, a timeline with the **Order status** events is displayed, as in the image below:

![timeline_pedido_en](https://cdn.statically.io/gh/vtexdocs/help-center-content/refs/heads/main/docs/en/tutorials/orders/orders-overview/frequently-asked-questions-new-orders-module-interface_3.png)

If you want to see the **Order diagram** as in the old interface, click `View diagram` and a modal like the one in the image below will display: 

![diagrama_pedido_en](https://cdn.statically.io/gh/vtexdocs/help-center-content/refs/heads/main/docs/en/tutorials/orders/orders-overview/frequently-asked-questions-new-orders-module-interface_4.png)

## How do I invoice an order?

In the **Items to invoice** section of the new interface, you can access all invoicing-related actions through the `Invoice` button, displayed in this section and at the top of the screen. When you click `Invoice`, the following options are shown:

* **Submit invoice referencing items: **This option is exclusive to the new interface. It allows you to issue the invoice for all or specific items identified by SKU, inventory, and price. The following image shows an example:

![faturar_referenciar_pedidos_final_en](https://cdn.statically.io/gh/vtexdocs/help-center-content/refs/heads/main/docs/en/tutorials/orders/orders-overview/frequently-asked-questions-new-orders-module-interface_5.png)

* **Submit single invoice:** This option corresponds to the old _Submit invoice_ and allows you to invoice the full or partial order amount. The page layout is different, but the fields remain the same.

Follow the steps below to invoice an order:

1. In the **Items to invoice** section or at the top of the **Order Details** page, click `Invoice`. 
2. Select an option:
    * Submit invoice referencing items
    * Submit single invoice
3. Fill in the fields.
4. Click `Save invoice`.

## How to resend an email to the customer?

In the new interface, in the **Order history** section, there is a timeline with events related to the order, including sent emails, which are identified with the <i class="fas fa-envelope"></i> icon. 

To resend an email to the client, click the sent email event or the arrow icon <i class="fas fa-angle-right"></i> to see the event details, which will display as in the following image:

![enviar_email_en](https://cdn.statically.io/gh/vtexdocs/help-center-content/refs/heads/main/docs/en/tutorials/orders/orders-overview/frequently-asked-questions-new-orders-module-interface_6.png)

Click the `Resend Email` button, and it will be immediately sent to the customer, and the following confirmation message should be displayed: _Email was successfully resent to the customer_.

> ⚠️ Due to safety measures, you can only resend emails for up to 15 minutes after the order has been invoiced.
