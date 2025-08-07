---
title: 'Warehouse'
id: 6oIxvsVDTtGpO7y6zwhGpb
status: PUBLISHED
createdAt: 2021-08-25T20:44:37.199Z
updatedAt: 2024-11-05T18:01:30.919Z
publishedAt: 2024-11-05T18:01:30.919Z
firstPublishedAt: 2021-08-26T16:51:57.435Z
contentType: tutorial
productTeam: Post-purchase
author: 30TBnJ838LXSZvdJFlcB8H
slugEN: warehouse
locale: en
legacySlug: warehouse
subcategoryId: 7fTH6bP0C4IaM8qWi0kkQC
---


On the VTEX platform, warehouses are physical storage spaces for goods sold by the ecommerce business. The shipping logistics process starts at the warehouse. Items are stored, separated, sent to [loading docks](/pt/tutorial/gerenciar-doca--7K3FultD8I2cuuA6iyGEiW) and then delivered to customers by carriers.

It is important to pay attention to the inventory logistics and how the settings on the VTEX platform affect order delivery. From the warehouse, orders are sent to loading docks, where they are picked up by the carriers. 

![EstrategiaEnvio_EN](https://images.ctfassets.net/alneenqid6w5/91iqVknOpCjUKO1XQaYvq/950f5a0342bba5b62dcd0bee100e8a71/Frame_2__3_.svg)

<div class="alert alert-info">
The carrier that will deliver a certain order is defined by the <a href="https://help.vtex.com/en/tutorial/politica-de-envio--tutorials_140">shipping policy</a>. For a carrier to be selected to deliver the order, its shipping policy must meet the conditions required for the delivery of the order. The shipping policy is linked to the warehouse by the Loading dock.
</div>

On the VTEX platform, you can add the name of the warehouse, add items to the warehouse, [configure the loading docks](/pt/tutorial/gerenciar-doca--7K3FultD8I2cuuA6iyGEiW) where products will be sent to, configure how long it takes for the order to be prepared before it is sent to the loading dock and the amount charged for its handling. 

After adding a warehouse, you can add the products available there. You can have multiple warehouses and add specific items to each of them, and that will be reflected in your logistics configuration. 

<div class="alert alert-info">
To add products to a warehouse, they must be previously added to your <a href="https://help.vtex.com/en/tracks/catalogo-101--5AF0XfnjfWeopIFBgs3LIQ/7kz4uWVq6NoaOdUpiJv4PR">catalog</a>. This way you can link them to the warehouse via the <a href="https://help.vtex.com/en/tutorial/gerenciar-itens-em-estoque--tutorials_139">Inventory Management</a> page in the Admin. 
</div>

The availability of products in your store represents items from different warehouses. This means that for the end customer, the items that are available during navigation in the store refer to all warehouses. Thus, it is possible that a single purchase includes products from different warehouses. For more information about inventory flow control and product availability, read the article on [Inventory Management](/pt/tutorial/gerenciar-itens-em-estoque--tutorials_139).

Learn more about how to manage logistics components on the VTEX platform: 

* To learn how to create, modify, and monitor warehouses, see the article [Warehouse management](/pt/tutorial/gerenciar-estoque--tutorials_137). 
* To monitor and manage inventory items, read the article [Inventory management](/pt/tutorial/gerenciar-itens-em-estoque--tutorials_139). 
* To configure and manage the relationship between warehouses and order pickup see the article on [Loading dock management.](/pt/tutorial/gerenciar-doca--7K3FultD8I2cuuA6iyGEiW)

<div class="alert alert-warning">
For the logistics system to work as expected, we suggest that you configure it in the following order:
<body>
<ol>
<li><a href="https://help.vtex.com/en/tutorial/politica-de-envio--tutorials_140">Shipping policy</a></li>
<li><a href="https://help.vtex.com/en/tutorial/loading-dock--5DY8xHEjOLYDVL41Urd5qj">Loading dock</a></li>
<li>Warehouse</li>
</ol>
</body>
</div>
