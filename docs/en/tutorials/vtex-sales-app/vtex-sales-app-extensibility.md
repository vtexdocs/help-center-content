---
title: 'Extensibility in VTEX Sales App'
createdAt: 2026-05-18T19:46:33.357Z
updatedAt: 2026-05-18T19:46:33.357Z
contentType: tutorial
productTeam: Shopping
slugEN: extensibility-in-vtex-sales-app
locale: en
---

> ℹ️ This feature is in beta, which means we're working on improving it. If you have any questions, contact our [Support team](https://help.vtex.com/en/support).

**Extensibility** is a feature that allows you to customize the default sales journey in VTEX Sales App by adding capabilities aligned with the store's business model. Stores can use it to integrate custom experiences at specific points of the interface without building a solution from scratch.

This article provides an overview of the feature, extension use cases, and implementation guidance.

> ❗ Merchants and partners are responsible for implementing Sales App Extensibility. To do so, we recommend following our [developer documentation](https://developers.vtex.com/docs/guides/sales-app-extensions-implementation).

## How extensibility works

Extensibility is a native solution that allows stores to securely integrate with external APIs and interact with data from other applications. The feature uses predefined extension points to render components and add features without changing the main Sales App flow.

Sales App has eight extension points:

- `cart.cart-list.after`
- `cart.cart-item.after`
- `cart.order-summary.after`
- `pdp.sidebar.before`
- `pdp.sidebar.after`
- `pdp.content.after`
- `menu.item`
- `menu.drawer-content`

> ℹ️ Learn more in [Exploring Sales App extensions](https://developers.vtex.com/docs/guides/exploring-sales-app-extensions).

Each extension point allows users to interact with specific data and functions, and they're available in the following contexts of the sales journey:

- Shopping cart (`cart.cart-item.after`, `cart.cart-list.after`) and checkout (`cart.order-summary.after`):

  ![Entrega agendada Fastcheckout](https://cdn.statically.io/gh/vtexdocs/help-center-content/refs/heads/main/docs/pt/tutorials/vtex-sales-app/extensibilidade_vtex_sales_app_1_cart_checkout_PT.png)

- Product details page (`pdp.sidebar.before`, `pdp.sidebar.after`, `pdp.content.after`):

  ![operational_capacity_image_1_PT](https://cdn.statically.io/gh/vtexdocs/help-center-content/refs/heads/main/docs/pt/tutorials/vtex-sales-app/extensibilidade_vtex_sales_app_4_pdp_PT.png)

- Menu (`menu.item`) and side modal (`menu.drawer-content`):

  ![operational_capacity_image_1_PT](https://cdn.statically.io/gh/vtexdocs/help-center-content/refs/heads/main/docs/pt/tutorials/vtex-sales-app/extensibilidade_vtex_sales_app_2_menu_PT.png)

  ![operational_capacity_image_1_PT](https://cdn.statically.io/gh/vtexdocs/help-center-content/refs/heads/main/docs/pt/tutorials/vtex-sales-app/extensibilidade_vtex_sales_app_3_drawer_PT.png)

  > ℹ️ When users click the menu extension component, Sales App opens a side modal on the left. This allows developers to create multiple internal navigation flows.

## Extension security and stability

As a native solution, Extensibility avoids unexpected behavior and keeps store operations running smoothly. The main goals of this feature are:

- **Security:** Increases security for developers when implementing code.
- **Stability:** Keeps the application stable, even when customizations fail.
- **Compatibility:** Ensures that Sales App updates don't compromise store customizations.

## Extension use cases

The following table shows how merchants benefit from Extensibility:

| Context | Description |
| :- | :- |
| Integration with external services or data | Integration with loyalty programs, the sale of additional services (such as warranties or insurance), the application of discounts in exchange for products, internal commissions or financing, among others. In general, these are integrations with external data and services already used in ecommerce or physical stores. |
| Integration with VTEX data | Integration with VTEX solutions that aren't part of the standard Sales App journey, such as the marketplace ecosystem or some payment solutions. |
| Centralization of representative's tasks | Centralizing representative's daily tasks, such as lead capturing and viewing store management data, in a single platform to increase speed and efficiency. |

## Before you begin

We recommend developers install the Sales App Extensions Skill, which helps with project definition and implementation. Learn more in [VTEX Sales App Extensions Skill](https://developers.vtex.com/docs/guides/vtex-sales-app-extensions-skill).

## Planning the project scope

The first step is planning, in which the merchant or partner should outline the scope of what'll be implemented.

**Example:** A store sells construction materials and the scope of its project is to add a calculator to the product details page (PDP) that measures the amount of material needed per square meter (m²). Customers can then see exactly how much material they need to buy — for instance, 4 kilograms (kg) of mortar per square meter.

## Mapping user experience and technical requirements

The second step is to map in detail the user experience (UX) flows and technical requirements for this implementation.

> ⚠️ If the project has very complex flows and requirements, we recommend assigning a specialist to this stage, such as a designer or product manager.

**Example:** In the construction materials store, in simple terms, the mapping would include how the user accesses the calculator in the purchase flow, how it's displayed in the interface, and what calculations are available to users. The mapping of technical requirements would involve describing how this calculator interacts with the store Checkout, Catalog, and Inventory systems during implementation.

> ℹ️ When the feature is already implemented in the ecommerce website, the user experience in the Sales App should be as similar as possible to maintain consistency across the store's sales channels.

## Checking technical feasibility

The third step is to validate the technical feasibility of the project. The developer must verify that the mapped requirements and integrations are compatible with the specifications of the extension points, as described in the [Extensibility developer documentation](https://developers.vtex.com/docs/guides/sales-app-extensions-implementation).

> ⚠️ If a required function or configuration is missing, contact [VTEX Support](https://help.vtex.com/en/support) and describe your use case and the limitations you've encountered.

## Implementing the project

Finally, the developer implements the extensions, as described in the [Extensibility developer documentation](https://developers.vtex.com/docs/guides/sales-app-extensions-implementation). We recommend validating the implementation with local tests before making the extensions available to store customers.

> ℹ️ The **Extensions Skill** can help during the project implementation stage. Learn more in [VTEX Sales App Extensions Skill](https://developers.vtex.com/docs/guides/vtex-sales-app-extensions-skill).
