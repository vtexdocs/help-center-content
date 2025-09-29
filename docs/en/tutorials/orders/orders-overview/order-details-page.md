---
title: 'Order details page'
id: 2Y75n54Cc9VizrlG1N6ZNl
status: PUBLISHED
createdAt: 2020-12-28T15:51:29.428Z
updatedAt: 2023-12-21T14:06:02.509Z
publishedAt: 2023-12-21T14:06:02.509Z
firstPublishedAt: 2020-12-28T19:33:51.059Z
contentType: tutorial
productTeam: Post-purchase
author: 30TBnJ838LXSZvdJFlcB8H
slugEN: order-details-page
legacySlug: order-details-page-beta
locale: en
subcategoryId: 3VNOhxDrvYxJThhuJClrYZ
---

> ℹ️ You can only access information from orders created in the last two years, and that same period is valid for customers through [My Account](/en/tutorial/how-my-account-works--2BQ3GiqhqGJTXsWVuio3Xh).

The order details page allows you to view all the information of an order and manage it in a single place. To access it, in the VTEX Admin, go to **Orders > [All orders](/en/tutorial/lista-de-pedidos-beta--2QTduKHAJMFIZ3BAsi6Pi)**, and click the desired order.

You can also search for orders from any page in the VTEX Admin using the global search bar at the top bar. By default, the search is configured as `Pages`. To search for an order, click on the bar, select `Orders`, and use one of the following criteria:

- Order ID
- Customer name
- Customer email
- Customer document

On the order details page, you can:

* Check in which stage of the order flow the order is (order status).
* View the entire change history of the order.
* View the payment method used.
* Check the promotions applied to the order (if any).
* Send and track emails sent to the customer.
* Send the order invoice.
* Change items in the order.
* Manage package returns.
* Cancel the order.

The order details page is divided into blocks that group information or features together. See below the sections of the page and their respective functions.

To learn more about order flow and status, please check out the article [Order flow and status](/en/tutorial/fluxo-e-status-de-pedidos--tutorials_196).

> ℹ️ You will find below a list of all possible sections for the **Order details page**, but please note that only the sections that apply to the order in question will be visible.

## Top bar

![BarrasuperiorEN](https://raw.githubusercontent.com/vtexdocs/help-center-content/refs/heads/main/docs/en/tutorials/orders/orders-overview/order-details-page_1.jpg)

The top bar contains the following information and actions:

* **Order number:** Numerical identification of the order.
* **Order status:** The status of the order is in the order flow. For more information, read the article [Order flow and status](/en/tutorial/order-flow-and-status--tutorials_196).
* **Actions:** Menu that allows you to access quick actions for the order.
    * <i class="fas fa-print"></i> **Print order:** Allows you to print the order information.
    * **Cancel order:** this button allows you to cancel an order which is not in `Invoiced` status.
    * **Invoice:** this button allows you to [invoice an order](/en/tutorial/como-faturar-um-pedido-manualmente--7p1h852V5t54KyscpgxE2v). This option applies to orders that have not yet been invoiced.
* **Navigation between orders:** You can quickly navigate between orders using the arrows <i class="fas fa-chevron-left"></i> and <i class="fas fa-chevron-right"></i>.

## General information 

![Informacao geraisEN](https://raw.githubusercontent.com/vtexdocs/help-center-content/refs/heads/main/docs/en/tutorials/orders/orders-overview/order-details-page_2.jpg)

General order information is displayed at the top of the page, just below the top bar, and includes:

* **Date and time:** Date and time when the order was placed.
* **Sold by:** Name of seller responsible for the sale.
* **Customer:** Personal information of the customer, including:
  - Name  
  - Taxpayer registration number  
  - Contact details (mobile number and email)  
* **Delivery/Pickup:** address details and recipient name for shipping by carrier or for pickup by customer.  

> ℹ️ Click on the <i class="fas fa-chevron-right"></i> icon to enlarge the block.

### Order status

This block shows the current status of the order in the VTEX order flow. Here you can [see history](#order-history), viewing all order activity and interactions that took place within the order.  

To learn more about the order flow and when to handle an order, read the article [Order flow and status](/en/tutorial/fluxo-e-status-de-pedidos--tutorials_196).

### Items to invoice

![Itens faturarEN](https://raw.githubusercontent.com/vtexdocs/help-center-content/refs/heads/main/docs/en/tutorials/orders/orders-overview/order-details-page_3.png)

The block **Items to Invoice** contains packages with items for which payment has been approved but not yet [invoiced](/en/tracks/pedidos--2xkTisx4SXOWXQel8Jg8sa/2WgQrlHTyVo4hLjhUs1LMT), i.e. their invoices have not been uploaded to the platform.

The package is the wrapping or box that contains the items of a delivery. Please note that a single order may include more than one package if it consists of items from different sellers or different warehouses. For more information about package split, check out the article [Order split and delivery split](/en/tutorial/divisao-de-pedidos-e-divisao-de-entregas--jQvzA6QgSd51e2p6bthoV).

In the top left corner, the following actions are available:

* **Change:** you can change the items in an order. Please note that [changing items](/en/tutorial/como-alterar-itens-do-pedido--7jekq618QxgbsOxKkXBjE8) is different from [replacing orders](/en/tutorial/substituicao-de-pedidos--2IK9mwQjBKseQmE8K8saO8). When replacing an order, the customer requests changes to the order, and when changing items, the store modifies the order.
* **Invoice:** you can generate the order invoice. Learn more about sending invoices in the article [How invoice an order](/en/tutorial/como-faturar-um-pedido-manualmente--7p1h852V5t54KyscpgxE2v).

###  Invoices

![FaturaEN](https://raw.githubusercontent.com/vtexdocs/help-center-content/refs/heads/main/docs/en/tutorials/orders/orders-overview/order-details-page_4.png)

This block displays the invoiced items with their respective invoices and the packages that make up the deliveries.

In this block, the retailer can:

* **Return items:** By clicking on `Return items`, a new page with the return information is displayed. For more information, read the article [How to return items from an order](/en/tutorial/how-to-return-order-items--2bSNWwD0g8fcUmuupLao9i).
* **Track order delivery:** By clicking on `View tracking`, a new page will display the delivery details.
* **Confirm delivery:** Confirm that the order has been delivered to the recipient. To confirm the delivery, click <i class="fas fa-ellipsis-v"></i> `Actions` and select <i class="fas fa-check"></i> `Confirm delivery`. The delivery confirmation does not change the order status or [order flow](/en/tutorial/order-flow-on-the-oms--tutorials_196). The information is used only to indicate to the store and the customer that the delivery has been completed.  
* **[Changing tracking data](/en/tutorial/changing-tracking-data--63c2hG3fBSCnchiMBOR5Ck):** Enter and edit tracking information for store and customer use.

### Returned items

![Itens devolvidosEN](https://raw.githubusercontent.com/vtexdocs/help-center-content/refs/heads/main/docs/en/tutorials/orders/orders-overview/order-details-page_5.png)

The block **Returned Items** is displayed when order items are returned. See the information and actions available in this block:

* <i class="far fa-check-circle"></i> **Confirm delivery:** Confirm that the returned package has been received. For more information about returning items, read the article [How to return items from an order](/en/tutorial/how-to-return-order-items--2bSNWwD0g8fcUmuupLao9i).  
* **Package information:** Information about the package containing returned items.  
    * **Incoming invoice:** Invoice number of the arrival to the inventory, after the return.  
    * **Issue date:** issue date of the incoming invoice, when the return occurred.  
    * **Amount:** Invoice amount.  
* **Returned items:** A list of returned items with SKU information, unit price, number of items, additional transaction costs (if any), and total amount.  
* **Total refunded:** The total amount refunded to the customer for the returned items.  

### History of changed items

![Historico Itens alteradosEN](https://raw.githubusercontent.com/vtexdocs/help-center-content/refs/heads/main/docs/en/tutorials/orders/orders-overview/order-details-page_6.png)

This block is displayed when changes are made to order items. The **History of changed items** displays the details of the changes made, such as which items were added or removed, the date the change occurred, and the prices of the products (the price of the returned item, the price of the added item, and the difference between the two).

If there are changes in the final amount of the order, the difference will be displayed in the item **Cost of changes** at the bottom of the section. 

### Order history

![Historico pedidoEN](https://raw.githubusercontent.com/vtexdocs/help-center-content/refs/heads/main/docs/en/tutorials/orders/orders-overview/order-details-page_7.jpg)

This block displays all the order activity and  interactions that took place within the order, with date and time information. 

By clicking on `See interactions`, you can see the communication with VTEX systems and external systems, such as ERP, and payment gateways.

In **Order history**, you can start preparing the order by clicking on `Start Handling` (if available). By clicking on `Start handling`, the order status is changed. This way, you indicate that the items are ready for shipping. A modal will appear on screen asking you to confirm this action. To proceed, select the checkboxes and click **Proceed with status**. 

For more information on when to handle an order, read the article [Order flow and status](/en/tutorial/order-flow-on-the-oms--tutorials_196).

You can also view details of notifications emailed to the customer by clicking on the <i class="fas fa-chevron-right"></i> arrow. You can resend any of the emails by clicking the `Resend email` button.

### Comments

![ComentariosEN](https://raw.githubusercontent.com/vtexdocs/help-center-content/refs/heads/main/docs/en/tutorials/orders/orders-overview/order-details-page_8.png)

This section allows you to add internal comments with remarks about the order. To do this, you can type in the text box and click on `Send`.

Comments are recorded on the order details page with the date, time, and email address of the user. They are not visible to customers, only to VTEX Admin users with access to the **All Orders** page in your store.

## Financial details

![Lateral](https://raw.githubusercontent.com/vtexdocs/help-center-content/refs/heads/main/docs/en/tutorials/orders/orders-overview/order-details-page_9.png)

On the right side of the page, you can view the financial details of the order. This information is updated automatically as the order progresses. 

* **Total cost of the order:** The total amount charged for the order, i.e., the total cost of the items, shipping, and additional services, if any. 
    * [Change final cost](/en/tutorial/changing-the-total-cost-of-the-order--2asq4BmxvSD8Tw9xpfZuMo): Allows you to modify the total amount charged.   
    * **Promos and partnerships:** Promotions applied to the order, if any. They are divided into:  
        * **Promotions:** A gift card or promotional code applied at checkout.  
        * **Marketing:** Marketing campaign promotions.  
* **Payment:** The payment method used for the purchase. This information depends on how the payment was made, and can be:  
    * **Credit card:** Information on the credit card used for the purchase (transaction ID, gateway, installments, transaction code, authorization date, and seller).  
    * **Boleto bancário:** The boleto bancário (Brazilian payment method) file. To view the boleto, click on <i class="fas fa-external-link-alt"></i> `View boleto bancário`.  
    * **Gift card:** Details of the gift card used.  

    To see more details about the transaction, click on the button `See details` <i class="fas fa-external-link-alt"></i> .   

    If the order has the status `Pending payment`, you can manually approve the payment by clicking on `Approve payment`.

## Learn more

* [How to change items in an order](/en/tutorial/como-alterar-itens-do-pedido--7jekq618QxgbsOxKkXBjE8)  
* [How to return items from an order](/en/tutorial/como-devolver-itens-do-pedido--2bSNWwD0g8fcUmuupLao9i)  
* [How to invoice an order](/en/tutorial/como-faturar-um-pedido-manualmente--7p1h852V5t54KyscpgxE2v)  
