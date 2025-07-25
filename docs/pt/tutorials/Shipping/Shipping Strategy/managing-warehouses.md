---
title: 'Managing Warehouses'
id: tutorials_137
status: PUBLISHED
createdAt: 2017-04-27T22:16:29.061Z
updatedAt: 2023-05-31T14:45:13.291Z
publishedAt: 2023-05-31T14:45:13.291Z
firstPublishedAt: 2017-04-27T23:00:45.952Z
contentType: tutorial
productTeam: Post-purchase
author: 30TBnJ838LXSZvdJFlcB8H
slugEN: managing-warehouses
locale: en
legacySlug: registering-a-stock, managing-warehouses
subcategoryId: 7fTH6bP0C4IaM8qWi0kkQC
---

Warehouses are physical storage facilities for the ecommerce business. On the VTEX platform, you can add items to the warehouses you have configured in your store. Then you will be able to track items, their availability and manage their shipping through [loading docks](https://help.vtex.com/en/tutorial/gerenciar-doca--7K3FultD8I2cuuA6iyGEiW) and [shipping policies](https://help.vtex.com/pt/tutorial/politica-de-envio--tutorials_140). 

>ℹ️ To better understand how the VTEX platform interprets and defines warehouse operations, check out our article [Warehouse](https://help.vtex.com/en/tutorial/estoque--6oIxvsVDTtGpO7y6zwhGpb).

In addition, you can add warehouses, the loading docks where products will be sent to, the processing time for transporting products from a warehouse to a loading dock, and the amount charged for handling them.

This article describes how to:

* [Add a warehouse](https://help.vtex.com/en/tutorial/managing-warehouses--tutorials_137#adding-a-warehouse).  
* [Fill in warehouse fields](https://help.vtex.com/en/tutorial/managing-warehouses--tutorials_137#filling-in-warehouse-fields).  
* [Edit a warehouse](https://help.vtex.com/en/tutorial/managing-warehouses--tutorials_137#editing-a-warehouse).  
* [Delete a warehouse](https://help.vtex.com/en/tutorial/managing-warehouses--tutorials_137#editing-a-warehouse).

>⚠️ For the logistics system to work as expected, we suggest that you configure it in the following order:
> <body>
>
> [Trade policy;](https://help.vtex.com/en/tutorial/como-funciona-uma-politica-comercial--6Xef8PZiFm40kg2STrMkMV)
>
> 2. [Shipping policy;](https://help.vtex.com/en/tutorial/politica-de-envio--tutorials_140)
>
> 3. [Loading dock;](https://help.vtex.com/pt/tutorial/gerenciar-doca--7K3FultD8I2cuuA6iyGEiW)
>
> Warehouse.
>
> </body>

## Adding a warehouse

1. In the VTEX Admin, go to **Shipping > Shipping Strategy**, or type *Shipping Strategy* in the search bar at the top of the page.  
2. Go to the `Warehouses` tab.  
3. Click on the `Create warehouse` button.  
4. Check if the <i class="fas fa-toggle-on"></i> button is set to **Active** in the upper right corner. If not, toggle the button to **Active**.
5. Fill in the
[fields](#filling-in-warehouse-fields).
6. Then `Save changes`.

### Filling in warehouse fields

* **Name**: the name of the warehouse.
* **ID** (optional): the warehouse identifier. If this field is left empty, an ID will be created automatically.
* **Origin**: associates the warehouse with a loading dock. Select a [loading dock](https://help.vtex.com/en/tutorial/gerenciar-doca--7K3FultD8I2cuuA6iyGEiW). 
    * Click on `Add loading dock`.
    * Select one or more loading docks using <i class="fas fa-check-square"></i>.
    * Click on `Save changes`.
    * Once loading docks are selected, fill in the **Processing days and hours** field. Configure the time (in days and hours) for handling and transporting orders from the warehouse to the loading dock. Select the number of days by clicking <i class="fas fa-minus"></i> and <i class="fas fa-plus"></i> and the minutes or hours in the <i class="far fa-clock"></i> field.
    * Fill in the **Extra fee** field if you want to charge any additional costs of handling orders from the warehouse to the loading dock.
    * Click on `Save changes`.
* **VTEX Sales App warehouse**: toggle the <i class="fas fa-toggle-on"></i> button to `Active` to associate a warehouse with a VTEX Sales App physical store. To associate [pickup points](https://help.vtex.com/en/tutorial/configurar-pontos-de-retirada-pickup-points--2R5ClQiwe4KoSQgsuiOw4E), they already must be listed in your store. Learn more about how to use this feature in the article [Physical stores as pickup points](https://help.vtex.com/en/tracks/estrategias-de-comercio-unificado--3WGDRRhc3vf1MJb9zGncnv/4hXfgqXxS1lwAfnxgja3xW). To learn more about how to use this feature, check out the article [Unified commerce strategies](https://help.vtex.com/en/tracks/estrategias-de-comercio-unificado--3WGDRRhc3vf1MJb9zGncnv/4hXfgqXxS1lwAfnxgja3xW).  

## Editing a warehouse

1. In the VTEX Admin, go to **Shipping > Shipping Strategy**, or type *Shipping Strategy* in the search bar at the top of the page.    
2. Go to the `Warehouses` tab.
3. Select which warehouse you want to edit.
4. Click on <i class="fas fa-ellipsis-v"></i>.
5. Select `Edit`.
6. Change the [fields](#filling-in-warehouse-fields) you want.
7. Click on `Save changes`.

## Deleting a warehouse

1. In the VTEX Admin, go to **Shipping > Shipping Strategy**, or type *Shipping Strategy* in the search bar at the top of the page.  
2. Go to the `Warehouses` tab.
3. On the card of the warehouse you want to delete, select <i class="fas fa-ellipsis-v"></i>.
4. Click on `Delete`.

>⚠️ To add items to a warehouse, first, they must be listed in your catalog. Once you have listed them in your [catalog](https://help.vtex.com/en/tracks/catalogo-101--5AF0XfnjfWeopIFBgs3LIQ/7kz4uWVq6NoaOdUpiJv4PR) and added a warehouse, you must associate items with the warehouse on the [Inventory management page](https://help.vtex.com/en/tutorial/gerenciar-itens-em-estoque--tutorials_139).
