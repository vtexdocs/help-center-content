---
title: 'Returning order items'
id: tutorials_191
status: DRAFT
createdAt: 2017-04-27T22:15:14.398Z
updatedAt: 2023-03-23T00:37:04.248Z
publishedAt: 
firstPublishedAt: 2017-04-27T23:00:47.176Z
contentType: tutorial
productTeam: Post-purchase
author: authors_84
slug: returning-order-items
locale: en
legacySlug: returning-order-items
subcategory: 2t00bBkcAwIkgSCGKsMOwY
---

Customers can request to exchange or return items from an order. The **Return items** feature allows you to remove items from an order in order to return them.

<div class = "alert alert-info">
See the article <a href="https://help.vtex.com/en/tutorial/como-devolver-itens-do-pedido-beta--2bSNWwD0g8fcUmuupLao9i">How to return items from an order (Beta)</a> and learn how to use this feature in Admin V4.
</div>

To return order items, follow the steps below:

1. In the VTEX Admin, go to **ORDERS > Orders management**.
2. In **All orders**, select the desired order. You can use [order filters](https://help.vtex.com/en/tutorial/como-filtrar-pedidos--tutorials_192) to do that.
3. In the **Invoice** section, click <i class="fas fa-ellipsis-v"></i> three dots menu.
4. Choose the `Return items` option.
5. Fill in the fields with the following information:
    * The SKUs that will be returned.
    * The return invoice number.
    * Additional amount to refund, if any.
6. Click `Request refund`.

![Returning order items](https://drive.google.com/uc?export=download&id=1T8YBwjDEQh3sGnpAybVkpuYqKjPy8zjQ)

<div class="alert alert-warning">
Please note that:
<ul>
<li>Returning a SKU in the Orders management module does not update its available inventory quantity. The store must update the number of items in <a href="https://help.vtex.com/en/tutorial/gerenciar-itens-em-estoque--tutorials_139">Inventory management</a>.</li>
<li>The number of the return invoice must be different from the sales invoice. </li>
<li>Once the order is returned, the platform notifies the payment system to <a href="https://help.vtex.com/en/tutorial/como-funciona-estorno-quando-ha-devolucao-do-item">refund</a> the order.</li>
<li>You can only return orders that contain at least one invoice on the platform.</li>
</ul>
</div>
