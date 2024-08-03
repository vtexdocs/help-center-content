---
title: 'Lead time: Shipping time at SKU level'
id: 16yv5Mkj6bTyWR1hCN2f4B
status: PUBLISHED
createdAt: 2023-09-22T00:32:26.416Z
updatedAt: 2023-09-22T13:32:38.292Z
publishedAt: 2023-09-22T13:32:38.292Z
firstPublishedAt: 2023-09-22T01:35:53.577Z
contentType: tutorial
productTeam: Post-purchase
author: 5l9ZQjiivHzkEVjafL4O6v
slug: lead-time-shipping-time-at-sku-level
locale: en
legacySlug: lead-time-shipping-time-at-sku-level
subcategory: 3PQwnyOcNyYgawy06oe6gE
---

Lead time is an optional configuration for shipping time at SKU level. This means that you can set a shipping period for a [warehouse](https://help.vtex.com/en/tutorial/estoque--6oIxvsVDTtGpO7y6zwhGpb) SKU, and this time will be added to the order's total shipping time.

Lead time configuration is done within [inventory management](https://help.vtex.com/en/tutorial/gerenciar-inventario--tutorials_139) as it relates to items in a warehouse that are available for sale.

This article covers the following:

- [Total shipping time:](#total-shipping-time) How lead time affects the order's shipping time.
- [Main use cases:](#main-use-cases) Scenarios where lead time can optimally apply.
- [SKU availability:](#sku-availability) How the platform behaves when the SKU is unavailable for sale.
- [Configuring lead time:](#configuring-lead-time) How to configure lead time through the VTEX Admin.
- [Configuring lead time calculation in calendar days:](#configuring-lead-time-calculation-in-calendar-days-optional) Optional step for the lead time calculation to be in calendar days, not business days (default).

<div class = "alert alert-info">
To configure lead time via API, see <a href="https://developers.vtex.com/docs/api-reference/logistics-api#put-/api/logistics/pvt/inventory/skus/-skuId-/warehouses/-warehouseId-">Update inventory by SKU and warehouse</a>.
</div>

## Total shipping time

When configured, the lead time is an additional time comprising the shipping time for the order displayed to the customer at checkout. The image below shows how the total time is calculated:

![lead_time_image_total_time_EN](https://images.ctfassets.net/alneenqid6w5/WDlW2CzaAKl3KtzzsgGwc/8a3f64f6c30a7a513bb98d0c97b355a3/lead_time_image_total_time_EN.png)

- **Lead time:** The amount of time that can be configured for a warehouse SKU. For example, this period could correspond to the item's handling or manufacturing time. This configuration is optional and, by default, is set as zero days
- [Warehouse time:](https://help.vtex.com/en/tutorial/gerenciar-estoque--tutorials_137) Time the SKU takes to leave a warehouse and arrive at a [loading dock](https://help.vtex.com/en/tutorial/doca--5DY8xHEjOLYDVL41Urd5qj). This configuration is required, but you can set the time to zero.
- [Loading dock time:](https://help.vtex.com/en/tutorial/gerenciar-doca--7K3FultD8I2cuuA6iyGEiW) Time the SKU takes to leave the loading dock, the point between the warehouse and the [carrier](https://help.vtex.com/en/tutorial/transportadoras-na-vtex--7u9duMD5UQa2QQwukAWMcE), and be shipped to the customer. This configuration is required, but you can set the time to zero.
- [Shipping policy:](https://help.vtex.com/en/tutorial/politica-de-envio--tutorials_140) Gathers the rules and conditions displayed to customers at checkout, including:
    - [Shipping rates](https://help.vtex.com/en/tutorial/planilha-de-frete--tutorials_127)
    - Carrier business hours
    - Delivery windows
    - Delivery capacity
    - Types of deliverable products (modals)

## Main use cases

Here are some use cases where the lead time setting is particularly useful.

### Third-party suppliers

Easily manage the time a third-party supplier, such as a factory or manufacturer, takes to produce, handle, ship, or deliver a product.

### Large and customizable products

For operations that sell large products, such as furniture or customizable products, lead time enables them to manage product handling time, contributing to warehouse and dock management efficiency.

### Dropshipping

In dropshipping — when the supplier ships the product directly to the customer — configuring shipping time at SKU level means having more flexibility to set deadlines for handling and shipping the product from third-parties.

## SKU availability

The VTEX platform will behave differently depending on SKU availability, and these are the possible scenarios:

- <i class="far fa-check-circle"></i> **SKU is in stock:** You set the SKU lead time, the time considered in the order shipping calculation, and the total time will be displayed to the customer at checkout.
- <i class="fas fa-times"></i> **SKU is out of stock:** You set the SKU lead time, but the SKU is not considered valid because there are no units available for sale.
- <i class="far fa-check-circle"></i> **Infinite inventory:** You set the SKU lead time, the time considered in the order's shipping calculation, and the total time will be displayed to the customer at checkout. As long as inventory is enabled as infinite, the SKU will always be valid for sales.

## Configuring lead time

Lead time is set to zero, and the limit is 365 days. By default, the calculation is made in business days, considering public holidays and other [shipping policy](https://help.vtex.com/en/tutorial/politica-de-envio--tutorials_140) conditions, but you can change the [calculation to calendar days](#configuring-lead-time-calculation-in-calendar-days-optional).

To configure the lead time for a SKU, follow the steps below:

1. In the VTEX Admin, go to **Catalog > Inventory > Inventory Management**, or type **Inventory Management** in the search bar at the top of the page.
2. Select the SKU you want to configure. You can use the search bar and filters.
3. In the SKU row and the **Lead time (days)** column, enter the days you want.
  ![lead_time_inventory_management_EN](https://images.ctfassets.net/alneenqid6w5/mfWUVzj7tgHMQxJTnVjGX/34a3c9f845038312b1b3cdb273102562/lead_time_inventory_management_EN.png)
4. Click `Save` at the bottom of the page.

<div class = "alert alert-info">
In the VTEX Admin, lead time is always configured in days, but you can configure it in hours, minutes, and seconds using the Update inventory by SKU and warehouse endpoint.
</div>

## Configuring lead time calculation in calendar days (optional)

If you want the lead time to be calculated in calendar days, follow the steps below:

1. In the VTEX Admin, go to **Shipping > Shipping Strategy > Shipping Policies**, or type **Shipping Policies** in the search bar at the top of the page.
2. Find the shipping policy you want. You can use the search bar and filters.
    > To create a new shipping policy, read the [Shipping Policy](https://help.vtex.com/en/tutorial/politica-de-envio--tutorials_140) article.
3. In the shipping policy row, click the <i class="fas fa-ellipsis-v"></i> menu icon and select `Edit`.
4. In the **Weekends and Holidays** section, activate the desired toggles:
    - <i class="fas fa-toggle-on"></i> **Saturday delivery**
    - <i class="fas fa-toggle-on"></i> **Sunday delivery**
    - <i class="fas fa-toggle-on"></i> **Holiday delivery**

5. Click `Save Changes`.

