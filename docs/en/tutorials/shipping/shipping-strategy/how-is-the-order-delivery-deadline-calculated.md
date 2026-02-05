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
slugEN: how-is-the-order-delivery-deadline-calculated
legacySlug: how-is-the-order-delivery-deadline-calculated
locale: en
subcategoryId: 7fTH6bP0C4IaM8qWi0kkQC
---

The shipping time calculation for an order takes into account the following aspects:

- [Lead time](/en/docs/tutorials/lead-time-shipping-time-at-sku-level)
- [Warehouse](/en/docs/tutorials/warehouse)
- [Dock](/en/docs/tutorials/loading-dock)
- [Shipping policy](/en/docs/tutorials/shipping-policy)

![lead_time_image_total_time_EN](https://cdn.statically.io/gh/vtexdocs/help-center-content/refs/heads/main/docs/en/tutorials/shipping/shipping-strategy/how-is-the-order-delivery-deadline-calculated_1.png)

You configure e time frame for each one of them and what your customer sees at checkout is a shipping time calculated adding those configurationn.

The __carriers__ shipping time is defined in the [freight table](/en/docs/tutorials/shipping-rate-template), which has to be associated to your shipping strategy through a [shipping policy](/en/docs/tutorials/shipping-policy).

To configure shipping policies, warehouses an docks, go to your VTEX Admin, in **Shipping > Shipping Strategy**. In this page, there a tab for each. If you want to configure lead time, go to **Catalog > Inventory Management**.

### Know more

- [Shipping Simulator](/en/docs/tutorials/shipping-policy)
- [Checking how an order delivery deadline was calculated](/en/tutorial/verificar-como-o-prazo-de-entrega-de-um-pedido-foi-calculado).
