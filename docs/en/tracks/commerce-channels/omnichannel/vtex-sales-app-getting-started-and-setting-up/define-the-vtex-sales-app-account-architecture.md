---
title: 'Defining VTEX Sales App account architecture'
createdAt: 2026-09-25T00:00:00.000Z
updatedAt: 2026-10-21T00:00:00.000Z
contentType: trackArticle
productTeam: Shopping
slugEN: define-the-vtex-sales-app-account-architecture
locale: en
trackSlugEN: vtex-sales-app-getting-started-and-setting-up
order: 3
---

Before installing **VTEX Sales App**, define which [omnichannel](/en/docs/tracks/unified-commerce-101) strategies your operation will adopt. This choice determines the account requirements for the next steps in this track, such as [franchise accounts](/en/docs/tutorials/what-is-a-franchise-account), [pickup points](/en/docs/tutorials/pickup-points), and ERP integration. To learn what to configure for each strategy, see [Planning a VTEX Sales App implementation](/en/docs/tutorials/planning-vtex-sales-app-implementation).

## Defining the technical architecture

The account architecture depends on the strategies you adopt:

- **[Endless Aisle](/en/docs/tracks/endless-aisle):** Customers can access your entire inventory, integrated across sales channels. This means a customer in a physical store can buy a product from the inventory of other physical stores or the ecommerce store, and the order can be delivered from any of these warehouses. Learn more in [Configuring Endless Aisle](/en/docs/tutorials/planning-vtex-sales-app-implementation#configuring-endless-aisle).
- **[Ship From Store](/en/docs/tracks/configuring-ship-from-store):** Customers receive orders at home with products shipped from a physical store's warehouse, so the store works as a distribution center. Learn more in [Setting up Ship From Store](/en/docs/tutorials/planning-vtex-sales-app-implementation#setting-up-ship-from-store).
- **[In-store pickup](/en/docs/tracks/configuring-physical-stores-as-pickup-points):** Physical stores serve as pickup points, allowing sales associates to make sales at any store or through the ecommerce website while giving customers the flexibility to pick up their orders at their preferred store. Learn more in [Setting up in-store pickup](/en/docs/tutorials/planning-vtex-sales-app-implementation#setting-up-in-store-pickup).
- **[Selling from local inventory and mixed carts](/en/docs/tutorials/enabling-local-stock-sale-in-vtex-sales-app):** Customers take the product with them at the time of purchase in the physical store, which allows "Get it now" (On Hands) sales. This strategy can be combined with mixed carts, where a single sale includes items the customer takes right away and items that will be delivered to their address from another warehouse. Learn more in [Setting up selling from local inventory and mixed carts](/en/docs/tutorials/planning-vtex-sales-app-implementation#setting-up-selling-from-local-inventory-and-mixed-carts).

## Creating franchise accounts

If the chosen strategy requires franchise accounts, create at least one before proceeding with the **Sales App** installation and initial tests. All accounts must be created before the store go-live and before setting up the inventory and store teams. To create franchise accounts, open a ticket with [VTEX Support](https://help.vtex.com/support).

Each franchise account represents a physical store, has its own VTEX Admin and independent logistics, and inherits the catalog from the main account. **Sales App** is installed only on the main account and retrieves each store's inventory and delivery information from the franchise accounts.

> ⚠️ Each franchise account must have a different company registration number (CNPJ in Brazil) for order payments to work correctly.

## Sales App extensibility

For features that **Sales App** doesn't offer natively, such as loyalty programs, additional services, or custom forms, see [VTEX Sales App Extensibility](/en/docs/tutorials/vtex-sales-app-extensibility-en). Your team or a partner can use it to develop modules at specific points in the sales journey.
