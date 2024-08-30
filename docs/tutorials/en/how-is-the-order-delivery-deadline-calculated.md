---
title: 'How is the order delivery deadline calculated?'
id: 1TOuKCIjGQmqOqQkEqCg82
status: PUBLISHED
createdAt: 2018-01-12T12:56:52.805Z
updatedAt: 2023-09-23T00:34:19.034Z
publishedAt: 2023-09-23T00:34:19.034Z
firstPublishedAt: 2018-01-12T14:42:26.502Z
contentType: tutorial
productTeam: Post-purchase
author: authors_24
slug: how-is-the-order-delivery-deadline-calculated
locale: en
legacySlug: how-is-the-order-delivery-deadline-calculated
subcategory: 7fTH6bP0C4IaM8qWi0kkQC
---

The shipping time calculation for an order takes into account the following aspects:

- [Lead time](https://help.vtex.com/en/tutorial/lead-time-tempo-de-envio-a-nivel-de-sku--16yv5Mkj6bTyWR1hCN2f4B)
- [Warehouse](https://help.vtex.com/en/tutorial/estoque--6oIxvsVDTtGpO7y6zwhGpb)
- [Dock](https://help.vtex.com/en/tutorial/doca--5DY8xHEjOLYDVL41Urd5qj)
- [Shipping policy](https://help.vtex.com/en/tutorial/politica-de-envio--tutorials_140)

![lead_time_image_total_time_EN](https://images.ctfassets.net/alneenqid6w5/WDlW2CzaAKl3KtzzsgGwc/8a3f64f6c30a7a513bb98d0c97b355a3/lead_time_image_total_time_EN.png)

You configure e time frame for each one of them and what your customer sees at checkout is a shipping time calculated adding those configurationn.

The __carriers__ shipping time is defined in the [freight table](https://help.vtex.com/pt/tutorial/planilha-de-frete--tutorials_127), which has to be associated to your shipping strategy through a [shipping policy](https://help.vtex.com/en/tutorial/politica-de-envio--tutorials_140).

To configure shipping policies, warehouses an docks, go to your VTEX Admin, in **Shipping > Shipping Strategy**. In this page, there a tab for each. If you want to configure lead time, go to **Catalog > Inventory Management**.

### Know more

- [Shipping Simulator](https://help.vtex.com/en/tutorial/politica-de-envio--tutorials_140)
- [Checking how an order delivery deadline was calculated](https://help.vtex.com/en/tutorial/verificar-como-o-prazo-de-entrega-de-um-pedido-foi-calculado).
