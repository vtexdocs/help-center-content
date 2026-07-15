---
title: 'Discover the new VTEX Sales App Extensibility'
createdAt: 2026-07-01T00:00:00.000Z
updatedAt: 2026-07-01T00:00:00.000Z
contentType: updates
productTeam: Shopping
author: 5l9ZQjiivHzkEVjafL4O6v
slugEN: 2026-07-01-introducing-vtex-sales-app-extensibility
locale: en
announcementSynopsisPT: 'This feature allows merchants to customize the sales journey with extensions at predefined points in the interface.'
tags:
  - New feature
  - VTEX Sales App
---

[VTEX Sales App Extensibility](https://help.vtex.com/docs/tutorials/extensibility-in-vtex-sales-app) allows merchants to customize the default sales journey through extensions at predefined extension points in the interface, without having to build solutions from scratch. This feature is available in open beta for everyone using [Sales App](https://help.vtex.com/docs/tracks/what-is-vtex-sales-app) on VTEX.

To support the development and implementation of extensions, merchants can use the [VTEX Sales App Extensions Skill](https://developers.vtex.com/docs/guides/vtex-sales-app-extensions-skill), an AI-powered skill with built-in knowledge of the Sales App and the FastStore monorepo.

## What has changed?

**VTEX Sales App Extensibility** allows you to render components and add features at eight predefined extension points of Sales App. The main goals of this feature are:

- **Security:** Enhance developers' security when implementing code.
- **Stability:** Keep the application stable, even when customizations fail.
- **Compatibility:** Integrate with external APIs and interact with data from other applications while preserving extension compatibility with customizations.

Some use cases for VTEX Sales App Extensibility include integrating with loyalty programs, selling additional services such as warranties and insurance, integrating with VTEX solutions outside the default Sales App flow, and centralizing sales representatives' daily tasks on a single platform.

The images below show the extension points in the sales journey:

- Shopping cart (`cart.cart-item.after`, `cart.cart-list.after`) and checkout (`cart.order-summary.after`):

  ![extensibilidade_vtex_sales_app_1_cart_checkout_PT](https://cdn.statically.io/gh/vtexdocs/help-center-content/refs/heads/main/docs/pt/tutorials/vtex-sales-app/extensibilidade_vtex_sales_app_1_cart_checkout_PT.png)

- Product details page (`pdp.sidebar.before`, `pdp.sidebar.after`, `pdp.content.after`):

  ![extensibilidade_vtex_sales_app_4_pdp_PT](https://cdn.statically.io/gh/vtexdocs/help-center-content/refs/heads/main/docs/pt/tutorials/vtex-sales-app/extensibilidade_vtex_sales_app_4_pdp_PT.png)

- Menu (`menu.item`) and side modal (`menu.drawer-content`):

  ![extensibilidade_vtex_sales_app_2_menu_PT](https://cdn.statically.io/gh/vtexdocs/help-center-content/refs/heads/main/docs/pt/tutorials/vtex-sales-app/extensibilidade_vtex_sales_app_2_menu_PT.png)

  ![extensibilidade_vtex_sales_app_3_drawer_PT](https://cdn.statically.io/gh/vtexdocs/help-center-content/refs/heads/main/docs/pt/tutorials/vtex-sales-app/extensibilidade_vtex_sales_app_3_drawer_PT.png)

## What needs to be done?

Implementation of **VTEX Sales App Extensibility** is handled by merchants and partners. To do so, we recommend following the [Sales App Extensions implementation](https://developers.vtex.com/docs/guides/sales-app-extensions-implementation) technical documentation.

> ℹ️ Use the [VTEX Sales App Extensions Skill](https://developers.vtex.com/docs/guides/vtex-sales-app-extensions-skill) to help with the project's definition and implementation steps.