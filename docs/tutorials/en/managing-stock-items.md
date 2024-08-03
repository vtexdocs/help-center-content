---
title: 'Inventory management'
id: tutorials_139
status: PUBLISHED
createdAt: 2017-04-27T22:17:21.085Z
updatedAt: 2024-04-18T15:25:20.097Z
publishedAt: 2024-04-18T15:25:20.097Z
firstPublishedAt: 2017-04-27T23:00:44.889Z
contentType: tutorial
productTeam: Post-purchase
author: 30TBnJ838LXSZvdJFlcB8H
slug: managing-stock-items
locale: en
legacySlug: managing-stock-items
subcategory: 3PQwnyOcNyYgawy06oe6gE
---

At VTEX, [warehouse](https://help.vtex.com/en/tutorial/estoque--6oIxvsVDTtGpO7y6zwhGpb) is the physical location where the store products are stored, and inventory is the relationship between the warehouses and the SKUs available for sale. To view the SKUs registered in your [catalog](https://help.vtex.com/en/tracks/catalog-101--5AF0XfnjfWeopIFBgs3LIQ/3rA2tTpIoEXdv2nzC27zxR) and respective warehouses, in your VTEX Admin, access **Catalog > Inventory > Inventory Management**.

This article contains information about the **Inventory Management** page. Learn how:

* [The inventory information is divided](#inventory-information).
* [The search filters are organized to make it easier to find specific SKUs](#search-filters).

<div class="alert alert-info"> 
To access the inventory using SKUs, loading docks, or warehouses via API, use the <a href="https://developers.vtex.com/docs/api-reference/logistics-api#put-/api/logistics/pvt/inventory/skus/-skuId-/warehouses/-warehouseId-"> Inventory API</a>.
</div>

Other possible actions in the **Inventory Management** page are:

* [Tracking the item update history](https://help.vtex.com/en/tutorial/inventory-update-history--5AM7xbmMzmKSEQewakamc2).
* [Checking if the SKUs have reserved units](https://help.vtex.com/en/tutorial/how-does-reservation-work--tutorials_92#how-to-track-reservation-status). 
* [Updating the number of SKUs available for sale](https://help.vtex.com/en/tutorial/updating-the-quantity-of-items-in-inventory--2MDwYV1COA6YuoiY22AyGo).

## Inventory information

In the VTEX Admin, go to **Catalog > Inventory > Inventory Management**, or type **Inventory Management** in the search bar at the top of the page. A table will display the SKUs and their respective warehouses. The table is organized as follows:

* **Rows**: each row contains the information for one SKU and one warehouse. This allows you to check the details for each SKU and warehouse. 
* **Columns** identify different aspects of the SKU, and are divided into:
    * **Products:** the name of the product.
    * **Warehouse**: to which warehouse the SKU belongs to.
    * **SKU ID:** the identifier code for the SKU.
    * **Last Update**: most recent quantity of SKU units registered on the VTEX platform.<p><div class = "alert alert-info">If you click any number in the <b>Last Update</b> column, the <a href="https://help.vtex.com/en/tutorial/historico-de-movimentacoes-do-inventario--5AM7xbmMzmKSEQewakamc2">Update Logs</a> window will open with the changes registers. Each row corresponds to an update with the user who made the change, the date and the inventory quantity before an and after the update. You can only see the last 50 updates of a SKU.</div></p>
    * **Reserved:** reserved SKU units. Orders for these reservations have not yet been approved for payment.
    By clicking on the values in this column to see details about the SKU reservation data, you are redirected to the Order management page. To learn more about how to view a reservation, please refer to [How to track reservation status](https://help.vtex.com/en/tutorial/how-does-reservation-work--tutorials_92#como-acompanhar-o-status-da-reserva)
    * **Fulfilled:** shipped units of that SKU. The items in this column are from orders with `Payment approved`, `Preparing for delivery` or `Invoiced` status. <p>By clicking on the items to view details of shipped SKUs, you will be redirected to the Order management page.</p>
    * **Available:** SKU units available for sale.
    * **Update Count:** manual update of the available quantity of SKU items. To learn more about how to update the count, read the article [Updating the quantity of SKUs in stock](https://help.vtex.com/en/tutorial/atualizar-quantidade-de-skus-em-estoque--IKMWjOjMcMqKusSGko8c0).
    * **Infinite Inventory:** allows you to add infinite SKU units, making it always available for your store's checkout. This rules out the need to update the count for this SKU.
    * **Lead time (days):** Optional setting of shipping time at SKU level. When you define a time for the SKU of a warehouse, that is added to the [shipping time calculation](https://help.vtex.com/en/tutorial/como-funciona-o-calculo-de-envio--tutorials_116). By default, the [lead time](https://help.vtex.com/en/tutorial/lead_time-shipping-time-at-sku-level--16yv5Mkj6bTyWR1hCN2f4B) is set as zero days and counted as business days, but you can [change it to calendar days](https://help.vtex.com/en/tutorial/lead_time-shipping-time-at-sku-level--16yv5Mkj6bTyWR1hCN2f4B#configuring-lead-time-calculation-in-calendar-days-optional). To configure hours, minutes, and seconds, use the [Update inventory by SKU and warehouse endpoint](https://developers.vtex.com/docs/api-reference/logistics-api#put-/api/logistics/pvt/inventory/skus/-skuId-/warehouses/-warehouseId-).

<div class="alert alert-danger">
To ensure the items added to the inventory will be available for sale on the store, the <a href="https://help.vtex.com/en/tutorial/how-to-find-an-sku-id--4VQZsYeb3igGK2YowuEYWW">SKU ID</a> cannot contain <b>a leading zero</b>. For instance, the system does not read IDs with a <code>01</code>, <code>02</code>, <code>021</code> format because the expected format is <code>1</code>, <code>2</code>, <code>21</code>.
</div>

The total quantity of items on the **Inventory Management** page is updated in real-time, but it may take up to 1 hour to reflect in the [inventory history](https://help.vtex.com/en/tutorial/historico-de-movimentacoes-do-inventario--5AM7xbmMzmKSEQewakamc2).

### Search filters

In the **Inventory Management** page, to perform a search, simply type the name or SKU ID and click <i class="fa-solid fa-magnifying-glass"></i> the magnifying glass icon. To use filters, see the available oenions:

- **Last update:** shows the updated number of items in stock. You can enter a value `Greater than or equal to`, `Less than or equal to`, or `Between` two values. If you do not enter a value, `All` items will be displayed.
- **Reserved:** shows the reserved items. You can enter a value `Greater than or equal to`, `Less than or equal to`, or `Between` two values. If you do not enter a value, `All` items will be displayed.
- **Available:** shows the number of available items in stock. You can enter a value `Greater than or equal to`, `Less than or equal to`, or `Between` two values. If you do not enter a value, `All` items will be displayed.
- **Warehouse:** select one or more warehouses to see all the items stored in them.

<div class="alert alert-danger">
The inventory list is limited to ten thousand rows. This means that even if a SKU is not available in the list, it can be found using the filters. The row limit for inventory improves query performance. To access a SKU that is not available on the page, search or use the filters for more accuracy.
</div>

## Related articles

* [Updating the quantity of items in inventory](https://help.vtex.com/en/tutorial/updating-the-quantity-of-items-in-inventory--2MDwYV1COA6YuoiY22AyGo)
* [How reservations work](https://help.vtex.com/en/tutorial/how-does-reservation-work--tutorials_92)
* [SKU available in stock but unavailable for sale](https://help.vtex.com/en/faq/sku-com-unidades-positivas-no-inventario-mas-indisponivel-para-venda--6HIEgJSYM8S05IyWHnIcOn)
* [Why is my stock negative?](https://help.vtex.com/en/faq/por-que-meu-estoque-esta-negativo--frequentlyAskedQuestions_159)
