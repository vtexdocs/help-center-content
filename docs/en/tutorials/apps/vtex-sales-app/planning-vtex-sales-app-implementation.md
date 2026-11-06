---
title: 'Planning a VTEX Sales App implementation'
createdAt: 2026-09-30T00:00:00.000Z
updatedAt: 2026-10-23T00:00:00.000Z
contentType: tutorial
productTeam: Shopping
slugEN: planning-vtex-sales-app-implementation
locale: en
---

The success of an operation with **VTEX Sales App** depends on business decisions made before the technical configuration. This article presents a roadmap to help your company understand the decisions and configurations of each step.

Before starting the implementation, go through these four steps:

| Step to be defined | Decisions |
| --- | --- |
| [Sales App use cases](#defining-sales-app-use-cases) | Main scenarios where **Sales App** will be used. |
| [Technical architecture](#defining-the-technical-architecture) | [Omnichannel](/en/docs/tracks/unified-commerce-101) strategies that will be adopted and their requirements, such as [franchise accounts](/en/docs/tutorials/what-is-a-franchise-account), pickup points, warehouses, and ERP integration. |
| [Sales operation](#defining-the-sales-operation) | Sales associates' access and use of **Sales App**, the actions they'll be able to perform, and how sales will be tracked. The commission model is an important point. In omnichannel operations, team engagement depends on how sales made in the store and delivered by the ecommerce website will be credited. |
| [Payment settings](#defining-the-payment-settings) | Payment methods that will be accepted, such as payment link, card, and cash. Some methods require getting and homologating specific providers and acquirers for the physical operation. |

> ℹ️ If the account architecture is complex or requires customized features, consider using VTEX Professional Services for more efficiency and security in the implementation. To get this service, open a ticket with [our sales support team](/en/docs/tutorials/opening-tickets-to-vtex-support#billing-and-sales-support).

## Defining Sales App use cases

The most common **Sales App** use cases are:

- **Stockout:** Sales App is used only when the product isn't available in the store, for selling it from other warehouses.
- **Inventory lookup and mobile sales:** Sales App is the first choice of sales associates for checking local and remote inventory and closing sales anywhere in the store.
- **Single tool of the store:** Sales App replaces the traditional point of sale (POS) for all sales made in the store.
- **Remote support:** Sales associates use Sales App to close assisted sales through digital channels.
- **Events and pop-up stores:** Sales App can be taken wherever the customer is, such as fairs or temporary kiosks.

> ℹ️ If you have a specific use case or want to expand your assisted sales, open a ticket with [VTEX Support](https://help.vtex.com/support). Our team will help you understand how **Sales App** can meet your business needs.

### Extensibility in Sales App

For features that **Sales App** doesn't offer natively, such as loyalty programs, additional services, or custom forms, consider using [VTEX Sales App Extensibility](/en/docs/tutorials/vtex-sales-app-extensibility-en). This resource allows your team or a partner to develop modules at strategic points in the sales journey.

## Defining the technical architecture

The technical architecture depends on the strategies your operation will adopt with **Sales App**. The following sections present the main strategies, including the decisions and settings required for each one.

### Endless aisle

[Endless aisle](/en/docs/tracks/endless-aisle) allows your customers to access your entire inventory, integrated across sales channels. In other words, a customer at a physical store can buy a product from the inventory of other physical stores or the ecommerce website, and the order can be shipped from any of those warehouses.

- **Target audience:** Companies looking for incremental sales, avoiding local stockouts by offering the ecommerce website catalog.
- **Decisions:** The warehouse model and store architecture, including whether there will be franchise accounts and [pickup points](#in-store-pickup).
- **Requirements:** Have Sales App installed on the main account and define the [sales channel](/en/docs/tutorials/how-trade-policies-work) it will use.

#### Configuring Endless Aisle

Choose the setting that corresponds to the operation architecture:

- **No [omnichannel architecture](/en/docs/tracks/unified-commerce-101):** Set up Sales App on the main account using the same sales channel and the same warehouses as the ecommerce website.
- **With omnichannel and multi-warehouse architecture:** Add each physical store as a warehouse on the main account. This option is recommended if you don't need separate price management per store.
- **With franchise accounts:** Create a franchise account for each store. Franchise accounts must have the same catalog as the main account but can have their own logistics settings.

### Ship From Store

[Ship From Store](/en/docs/tracks/configuring-ship-from-store) allows customers to have orders that contain products shipped from a physical store's warehouse delivered to their home. In other words, the store works as a distribution center.

- **Target audience:** Brands that want to reduce costs and shipping times by using the physical stores closest to the customer as the order's origin.
- **Decisions:** Which stores will deliver, which carriers will work with each store, and how to integrate the ERP so that the inventory of each store is always up to date.

#### Setting up Ship From Store

- **Franchise account architecture:** We recommend creating a [franchise account](/en/docs/tutorials/what-is-a-franchise-account) for each store so that each one has its own logistics.
- **Logistics setup:** In the franchise account, add the carrier as a [shipping policy](/en/docs/tutorials/shipping-policy), associate that policy with a loading dock, and set the dock as the origin of the store's warehouse.
- **ERP integration:** Mandatory to keep the store inventory always up to date.

### In-store pickup

With [in-store pickup](/en/docs/tracks/configuring-physical-stores-as-pickup-points), physical stores work as pickup points. In **Sales App**, this allows the sales associate to complete the sale at any store or ecommerce website, and the customer to pick up the order at their preferred physical store.

- **Target audience:** Brands with physical stores that want to give customers the option to pick up their order in-store, reducing shipping costs and generating more store visits.
- **Decisions:** Which stores will be pickup points, whether picked orders will come from the store's own warehouse or another warehouse, and how to keep the inventory of each store up to date. We recommend an ERP integration to do that.

#### Setting up in-store pickup

- **Franchise account architecture:** We recommend that each store functioning as a pickup point be a [franchise account](/en/docs/tutorials/what-is-a-franchise-account).
- **Logistics setup:** Create a [pickup point](/en/docs/tutorials/creating-pickup-points) and associate it with the store's warehouse by following the steps described in the [Physical stores as pickup points](/en/docs/tracks/configuring-physical-stores-as-pickup-points) article. Additionally, associate the pickup point with a [shipping policy](/en/docs/tutorials/shipping-policy).

### Selling from local inventory and mixed carts

[Selling from local inventory](/en/docs/tutorials/enabling-local-stock-sale-in-vtex-sales-app) allows the customer to take the product with them at the time of purchase in the physical store, in a "Get it now" (On Hands) type of sale. This strategy can be combined with mixed carts, when a single sale contains items the customer takes home immediately and items that will be delivered to them from another warehouse.

- **Target audience:** Physical stores that want to sell products from local stock and combine, in the same order, items to take home immediately and items for delivery.
- **Decisions:** How to integrate the store's ERP and tax system so that inventory is always up to date and the invoice is issued at the time of sale.

#### Setting up selling from local inventory and mixed carts

- **Franchise account architecture:** Uses the same base as [in-store pickup](#in-store-pickup), meaning a franchise account for each store with a pickup point that has the address of the physical store.
- **Logistics setup:** Follow the [selling from local inventory](/en/docs/tutorials/enabling-local-stock-sale-in-vtex-sales-app) instructions to link the pickup point to the store's warehouse and enable "Get it now" (On Hands) type sales. Selling from mixed carts is configured by default in VTEX stores.
- **Invoicing:** Integrate billing with the invoice system through the point of sale or the ERP to allow immediate product release.
- **Reconciliation:** Adjust the system and the reconciliation operation to ensure the correct invoicing flow, based on the definition of your financial department.

> ℹ️ To use in-store pickup and mixed carts, you need to enable **Checkout v6**. This version allows the customer to choose a pickup point and split an order between items that will be delivered at home and items that will be picked up in store. For more information, check the article [How to enable Checkout v6](/en/docs/tutorials/enable-checkout-v6).

## Defining the sales operation

After defining the architecture, decide how sales associates will use Sales App in their daily work and how sales will be tracked.

### Access to Sales App

- **Device:** Whether sales associates will use Sales App on a mobile device (phone or tablet), on a computer, or on both.
- **Login:** Whether there will be a single login per store or a login for each sales associate.
- **Sales associate code:** What the code format will be and whether it'll be required or optional in the sales flow.

With these definitions set, add the [physical stores](/en/docs/tracks/managing-physical-stores-in-vtex-sales-app) and the [sales associates](/en/docs/tracks/managing-sales-associates-in-vtex-sales-app).

### Sales associate permissions

You can activate or deactivate certain sales associate actions in Sales App. Each setting has its own way of being activated. The main ones are:

- Apply manual pricing.
- [Force local inventory](https://developers.vtex.com/docs/guides/force-stock-availability).
- Cancel an order.
- View my sales performance.
- View the sales performance of other sales associates.

### Performance and commissions

- **Tracking in the app:** Activate sales performance so sales associates can track their basic metrics directly in Sales App.
- **Integration with internal systems:** Use the order fields to submit sales data to your internal systems and calculate commissions. In [customData.customApps](https://developers.vtex.com/docs/guides/orderform-fields#customdata), Sales App `id` is `sales-app`.
- **Commission model:** Define with internal departments, owned stores, and franchises how omnichannel sales will count toward targets and payouts for stores, franchises, managers, and sales associates. This setting doesn't depend on VTEX settings, but it's important for the payout model and for the team's engagement with Sales App.

> ⚠️ **Sales App** doesn't calculate sales commissions. This calculation must be done by an external system based on the order data.

## Defining the payment settings

Determine the payment methods that will be available in **Sales App**. Some methods reuse settings from the ecommerce website, while others require partners or integrations:

- **Payment link (social selling):** Uses the checkout of the ecommerce website. To configure it, follow the tutorial [How to enable the Shareable Cart app (Social Selling)](/en/docs/tutorials/how-to-activate-the-shareable-cart-app).
- **Pix (Brazil):** Uses the same payment gateway as the ecommerce website.
- **Cash:** Payment is controlled outside the platform, and the order is recorded with the note payable method.
- **Approved acquirers:** Require using a partner available in your region, configuring the payment terminals and the provider on the main account, and running tests.
- **Non-integrated payments:** Use the note payable method and require integration with external systems, such as a point of sale or ERP, to receive payment confirmation. They're recommended for private label cards or payment methods previously established in the store.

> ℹ️ For more information, check the article [Setting up payment methods for VTEX Sales App](/en/docs/tracks/setting-up-payment-methods-for-vtex-sales-app).
