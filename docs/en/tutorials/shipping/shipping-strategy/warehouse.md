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
legacySlug: warehouse
locale: en
subcategoryId: 7fTH6bP0C4IaM8qWi0kkQC
---


On the VTEX platform, warehouses are physical storage spaces for goods sold by the ecommerce business. The shipping logistics process starts at the warehouse. Items are stored, separated, sent to [loading docks](/en/tutorial/gerenciar-doca--7K3FultD8I2cuuA6iyGEiW) and then delivered to customers by carriers.

It is important to pay attention to the inventory logistics and how the settings on the VTEX platform affect order delivery. From the warehouse, orders are sent to loading docks, where they are picked up by the carriers. 

![EstrategiaEnvio_EN](https://raw.githubusercontent.com/vtexdocs/help-center-content/refs/heads/main/docs/en/tutorials/shipping/shipping-strategy/warehouse_1.svg)

> ℹ️ The carrier that will deliver a certain order is defined by the [shipping policy](/en/tutorial/politica-de-envio--tutorials_140). For a carrier to be selected to deliver the order, its shipping policy must meet the conditions required for the delivery of the order. The shipping policy is linked to the warehouse by the Loading dock.

On the VTEX platform, you can add the name of the warehouse, add items to the warehouse, [configure the loading docks](/en/tutorial/gerenciar-doca--7K3FultD8I2cuuA6iyGEiW) where products will be sent to, configure how long it takes for the order to be prepared before it is sent to the loading dock and the amount charged for its handling. 

After adding a warehouse, you can add the products available there. You can have multiple warehouses and add specific items to each of them, and that will be reflected in your logistics configuration. 

> ℹ️ To add products to a warehouse, they must be previously added to your [catalog](/en/tracks/catalogo-101--5AF0XfnjfWeopIFBgs3LIQ/7kz4uWVq6NoaOdUpiJv4PR). This way you can link them to the warehouse via the [Inventory Management](/en/tutorial/gerenciar-itens-em-estoque--tutorials_139) page in the Admin.

The availability of products in your store represents items from different warehouses. This means that for the end customer, the items that are available during navigation in the store refer to all warehouses. Thus, it is possible that a single purchase includes products from different warehouses. For more information about inventory flow control and product availability, read the article on [Inventory Management](/en/tutorial/gerenciar-itens-em-estoque--tutorials_139).

Learn more about how to manage logistics components on the VTEX platform: 

* To learn how to create, modify, and monitor warehouses, see the article [Warehouse management](/en/tutorial/gerenciar-estoque--tutorials_137). 
* To monitor and manage inventory items, read the article [Inventory management](/en/tutorial/gerenciar-itens-em-estoque--tutorials_139). 
* To configure and manage the relationship between warehouses and order pickup see the article on [Loading dock management.](/en/tutorial/gerenciar-doca--7K3FultD8I2cuuA6iyGEiW)

> ⚠️ For the logistics system to work as expected, we suggest that you configure it in the following order: <body> <ol> <li>[Shipping policy](/en/tutorial/politica-de-envio--tutorials_140)</li> <li>[Loading dock](/en/tutorial/loading-dock--5DY8xHEjOLYDVL41Urd5qj)</li> <li>Warehouse</li> </ol> </body>
