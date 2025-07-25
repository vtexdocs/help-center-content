---
title: 'Shipping strategy'
id: 58vLBDbjYVQzJ6rRc5QNz3
status: PUBLISHED
createdAt: 2021-07-15T17:04:23.563Z
updatedAt: 2024-11-05T17:35:31.468Z
publishedAt: 2024-11-05T17:35:31.468Z
firstPublishedAt: 2021-07-15T17:27:37.590Z
contentType: tutorial
productTeam: Post-purchase
author: 30TBnJ838LXSZvdJFlcB8H
slugEN: shipping-strategy
locale: en
legacySlug: shipping-strategy, what-is-the-difference-between-inventory-and-warehouse-dock
subcategoryId: 7fTH6bP0C4IaM8qWi0kkQC
---

The shipping strategy refers to the relationship between inventory, loading dock and shipping policy. The way they communicate will define the structure combination for shipping your customers’ orders. 

![shipping_strategy_EN](https://raw.githubusercontent.com/vtexdocs/help-center-content/refs/heads/main/docs/en/tutorials/Shipping/Shipping%20Strategy/shipping-strategy_1.png)

<table class="w-100 center mv7 bb b--gray" style="border-spacing: 0px; border-collapse: collapse;">
   <tr class="bb b--muted-3">
            <td class="t-body pa5" style="min-width: 15rem;">
                <b><a href="https://help.vtex.com/en/tutorial/estoque--6oIxvsVDTtGpO7y6zwhGpb">Warehouse</a></b>
            </td>
            <td class="t-body pa5" style="min-width: 15rem;">Goods stored in a warehouse or store. It works as a tool to control the availability of products.
            </td>
    </tr>
    <tr class="bb b--muted-3">
            <td class="t-body pa5" style="min-width: 15rem;">
                <b><a href="https://help.vtex.com/en/tutorial/loading-dock--5DY8xHEjOLYDVL41Urd5qj">Loading dock</a></b>
            </td>
            <td class="t-body pa5" style="min-width: 15rem;">Where goods are loaded onto trucks to be delivered or distributed. Operates as a product storage area.
            </td>
    </tr>
    <tr class="bb b--muted-3">
            <td class="t-body pa5" style="min-width: 15rem;">
                <b><a href="https://help.vtex.com/en/tutorial/politica-de-envio--tutorials_140">Shipping policy</a></b>
            </td>
            <td class="t-body pa5" style="min-width: 15rem;">A set of rules that define the shipping options and conditions that will be displayed to the customer at checkout. 
            </td>
    </tr>
</table>

## Initial logistics settings

You can configure initial settings through the VTEX Admin or via API. If you are starting to configure your shipping strategy, we recommend the following order:

| **Topic** | **Configuration via VTEX Admin** | **Configuration via API** |
| :--- | :--- | :--- |
| 1. [Shipping policy](/en/tutorial/politica-de-envio--tutorials_140) | [Creating a shipping policy](/en/tutorial/criar-uma-politica-de-envio--66rJO4LKBdyMJOH6Z3dsaT) | [Create shipping policy](https://developers.vtex.com/docs/api-reference/logistics-api#post-/api/logistics/pvt/shipping-policies) |
| 2. [Loading dock](/en/tutorial/doca--5DY8xHEjOLYDVL41Urd5qj) | [Managing loading docks](/en/tutorial/gerenciar-doca--7K3FultD8I2cuuA6iyGEiW) | [Create/update dock](https://developers.vtex.com/docs/api-reference/logistics-api#post-/api/logistics/pvt/configuration/docks) |
| 3. [Warehouse](/en/tutorial/estoque--6oIxvsVDTtGpO7y6zwhGpb) | [Managing warehouses](/en/tutorial/gerenciar-estoque--tutorials_137) | [Create/update warehouse](https://developers.vtex.com/docs/api-reference/logistics-api#post-/api/logistics/pvt/configuration/warehouses) |
