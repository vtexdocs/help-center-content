---
title: 'Lead time: Configuring shipping time at SKU level'
id: 39Q8TeXaDCbmTXFtwpNXlf
status: PUBLISHED
createdAt: 2023-09-22T14:07:20.464Z
updatedAt: 2023-09-28T17:47:25.398Z
publishedAt: 2023-09-28T17:47:25.398Z
contentType: updates
productTeam: Post-purchase
author: 5l9ZQjiivHzkEVjafL4O6v
slugEN: 2023-09-22-lead-time-configuring-shipping-time-at-sku-level
locale: en
legacySlug: lead-time-configuring-shipping-time-at-sku-level
announcementImageID: ''
announcementSynopsisEN: 'Global launch of lead time, an optional SKU-level shipping time setting.'
---

VTEX has made [lead time](/en/tutorial/lead-time-tempo-de-envio-a-nivel-de-sku--16yv5Mkj6bTyWR1hCN2f4B), a shipping time setting for inventory SKUs, available to all stores. In other words, you can set an additional shipping time at SKU level when calculating the shipping promises displayed to customers at checkout.

![lead_time_image_total_time_EN](https://raw.githubusercontent.com/vtexdocs/help-center-content/refs/heads/main/docs/en/announcements/2023-09-22-lead-time-configuring-shipping-time-at-sku-level_1.png)

The store's shipping will remain unchanged when not configured, as lead time is optional. Note that the checkout consolidation rules are maintained, calculating the total shipping time of the order based on the longest shipping time among the items.

## What has changed?

Previously, the order [shipping calculation](/en/tutorial/como-funciona-o-calculo-de-envio--tutorials_116) considered the periods configured in your shipping strategy at different levels:

- [Inventory](/en/tutorial/estoque--6oIxvsVDTtGpO7y6zwhGpb)
- [Loading dock](/en/tutorial/gerenciar-doca--7K3FultD8I2cuuA6iyGEiW)
- [Shipping policy](/en/tutorial/politica-de-envio--tutorials_140)

Now, you can also configure the shipping time at SKU level with the new lead time column on the [Inventory Management](/en/tutorial/gerenciar-inventario--tutorials_139) page, which can be found in your VTEX Admin under **Catalog > Inventory > Inventory Management**, as shown in the image below:

![lead_time_inventory_management_EN](https://raw.githubusercontent.com/vtexdocs/help-center-content/refs/heads/main/docs/en/announcements/2023-09-22-lead-time-configuring-shipping-time-at-sku-level_2.png) 

<div class="alert alert-warning">
In the VTEX Admin, the lead time is configured in days, with a 365-day limit. By default, the days are calculated in business days, but you can configure your shipping policy to <a href="https://help.vtex.com/en/tutorial/lead-time-tempo-de-envio-a-nivel-de-sku--16yv5Mkj6bTyWR1hCN2f4B#configuring-lead-time-calculation-in-calendar-days-optional">calculate them in calendar days</a>. You need to use the <a href="https://developers.vtex.com/docs/api-reference/logistics-api#put-/api/logistics/pvt/inventory/skus/-skuId-/warehouses/-warehouseId-">Update inventory by SKU and warehouse</a> endpoint to configure periods in hours, minutes, and seconds.
</div>

## Why did we make this change?

These are the main advantages:

- **More flexibility in inventory management**; especially useful for businesses with on-demand products and _dropshipping_ scenarios, in which the provider sends the product directly to the customer.
- **More accurate shipping time configuration**, making it easier for you to manage your inventory.
- **More accurate shipping promise calculations** for customers, leading to better shopping experiences.

## What needs to be done?

The [Inventory Management](/en/tutorial/gerenciar-inventario--tutorials_139) page of the VTEX Admin was updated with the lead time column in all stores, and no action is required from you. Using the new field is optional, so if you don't configure it, the shipping time for your orders will remain unchanged.
