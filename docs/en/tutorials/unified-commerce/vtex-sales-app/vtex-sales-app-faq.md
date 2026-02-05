---
title: 'VTEX Sales App: FAQ'
id: 3CRKQHzflSW0DXenEHUpP5
status: PUBLISHED
createdAt: 2025-02-06T21:18:46.773Z
updatedAt: 2025-08-26T16:58:45.240Z
publishedAt: 2025-08-26T16:58:45.240Z
firstPublishedAt: 2025-02-07T18:17:39.626Z
contentType: tutorial
productTeam: Shopping
author: 5l9ZQjiivHzkEVjafL4O6v
slugEN: vtex-sales-app-faq
legacySlug: vtex-sales-app-faq
locale: en
subcategoryId: 4T6qfa6gNO6g4sAUIa6s2G
---

[VTEX Sales App](/en/tracks/instore-primeiros-passos-e-configuracoes--zav76TFEZlAjnyBVL5tRc) is the solution that enables merchants to integrate physical and digital sales, reduce friction in sales, and optimize operation management.

This article answers frequently asked questions about **VTEX Sales App**, divided into four main sections:

**[Account architecture](#account-architecture):**

  [1 - How many trade policies can be used in VTEX Sales App?](#1-how-many-trade-policies-can-be-used-in-vtex-sales-app)

  [2 - Are there any account architecture conditions required to use VTEX Sales App, such as franchise accounts or white label sellers?](#2-are-there-any-account-architecture-conditions-required-to-use-vtex-sales-app-such-as-franchise-accounts-or-white-label-sellers)

  [3 - What is needed to make local inventory available via VTEX Sales App?](#3-what-is-needed-to-make-local-inventory-available-via-vtex-sales-app)

  [4 - Is VTEX Sales App equally strategic for all business models?](#4-is-vtex-sales-app-equally-strategic-for-all-business-models)

  [5 - Can VTEX Sales App be used in a B2B business model?](#5-can-vtex-sales-app-be-used-in-a-b2b-business-model)

**[Management](#management):**

  [6 - Is VTEX Sales App a self-service solution for in-store customers?](#6-is-vtex-sales-app-a-self-service-solution-for-in-store-customers)

  [7 - Can sales goals be managed through VTEX Sales App?](#7-can-sales-goals-be-managed-through-vtex-sales-app)

  [8 - Can VTEX Sales App process sales for SKUs that are unavailable in the system but available in local inventory?](#8-can-vtex-sales-app-process-sales-for-skus-that-are-unavailable-in-the-system-but-available-in-local-inventory)

  [9 - Are there any device limitations for using VTEX Sales App, such as mobile-only access?](#9-are-there-any-device-limitations-for-using-vtex-sales-app-such-as-mobile-only-access)

  [10 - Does VTEX Sales App require an internet connection?](#10-does-vtex-sales-app-require-an-internet-connection)

  [11 - Can non-VTEX clients use VTEX Sales App?](#11-can-non-vtex-clients-use-vtex-sales-app)

**[Offers](#offers):**

  [12 - How do I activate custom display in the Offers section of VTEX Sales App?](#12-how-do-i-activate-custom-display-in-the-offers-section-of-vtex-sales-app)

  [13 - Can banners and customizations be included in the Offers section of VTEX Sales App?](#13-can-banners-and-customizations-be-included-in-the-offers-section-of-vtex-sales-app)

**[Payments](#payments):**

  [14 - What payment methods does the VTEX Sales App support?](#14-what-payment-methods-does-the-vtex-sales-app-support)

  [15 - What payment connectors act as acquirers for card purchases in VTEX Sales App?](#15-what-payment-connectors-act-as-acquirers-for-card-purchases-in-vtex-sales-app)

  [16 - Can the physical store have different payment connectors from the online store with VTEX Sales App?](#16-can-the-physical-store-have-different-payment-connectors-from-the-online-store-with-vtex-sales-app)

  [17 - Are franchise accounts or white label sellers required for split payments?](#17-are-franchise-accounts-or-white-label-sellers-required-for-split-payments)

  [18 - Does VTEX Sales App support accounts using store cards (private label)?](#18-does-vtex-sales-app-support-accounts-using-store-cards-private-label)

> ℹ️ For more information, see the track [VTEX Sales App - Getting started and setting up](/en/tracks/instore-primeiros-passos-e-configuracoes--zav76TFEZlAjnyBVL5tRc) or watch a [demo video](https://www.youtube.com/watch?v=zE8A3SWgP-s).

## Account architecture

### 1. How many trade policies can be used in VTEX Sales App?

**VTEX Sales App** supports a single [trade policy](/en/docs/tutorials/how-trade-policies-work). Merchants can choose to use their main trade policy or [request an additional one](/en/docs/tutorials/requesting-an-additional-trade-policy).

### 2. Are there any account architecture conditions required to use VTEX Sales App, such as franchise accounts or white label sellers?

Some **VTEX Sales App** features require specific architectural configurations:

* **Selling local inventory (*on hands*):** We recommend that the store have a [franchise account](/en/docs/tutorials/what-is-a-franchise-account) for better organization and operational management.  This allows merchants to manage different warehouses and prices for franchise accounts.
* **Selling remote inventory (endless aisle):** There are multiple architectural models to support [endless aisle](/en/tracks/estrategias-de-comercio-unificado--3WGDRRhc3vf1MJb9zGncnv/40KMlmGI5tN0r0KPCDWgGn):
    * The store can use franchise accounts or [white label sellers](/en/docs/tutorials/white-label-seller).
    * The store can operate with a [multi-store architecture](/en/docs/tutorials/choosing-between-a-multistore-architecture-or-an-additional-environment) to manage multiple warehouses.

Merchants looking to offer a large inventory and optimize delivery logistics can use the same trade policy as the distribution center in **VTEX Sales App**.

> ℹ️ Learn more in the article [Prerequisites for using VTEX Sales App](/en/tracks/instore-primeiros-passos-e-configuracoes--zav76TFEZlAjnyBVL5tRc/1wtAanSRA3g2316dw7bw8u).

### 3. What is needed to make local inventory available via VTEX Sales App?

To sell local inventory (on hands), the store must meet the following criteria:

* Set up a [pickup point](/en/docs/tutorials/pickup-points).
* Have an integration with a billing system, ideally the store ERP or point-of-sale (POS) system. This ensures VTEX sends orders to the store system for [fulfillment](/en/docs/tutorials/fulfillment-logistics-vtex) and issuing the invoice. The merchant is responsible for implementing this integration.

This integration between the VTEX platform and the store system provides customers with a mixed cart experience, allowing them to purchase both local and remote inventory items in a single order and financial transaction.

> ℹ️ To make local inventory available, follow the steps in the article [Enabling local inventory sales in VTEX Sales App](/en/tutorial/habilitar-venda-de-estoque-local-do-vtex-sales-app--54eQN4rOH5yBYPGG2w8v9q?&utm_source=autocomplete).

### 4. Is VTEX Sales App equally strategic for all business models?

Currently, the solution doesn't support the sale of fractional products or orders with a large number of SKUs. As a result, the benefits of **VTEX Sales App** are more limited in segments such as [groceries](https://vtex.com/en-us/grocery/).

### 5. Can VTEX Sales App be used in a B2B business model?

This is not possible yet. If you're interested in using it for [B2B](/en/docs/tutorials/b2b-overview), contact VTEX through your account success manager.

## Management

### 6. Is VTEX Sales App a self-service solution for in-store customers?

No, **VTEX Sales App** was designed for the store's sales team to assist customers and manage operations. For example, it enables sellers and managers to track sales through [Sales performance](/en/docs/tutorials/sales-app-sales-performance).

> ⚠️ To some extent, customers can use **VTEX Sales App** via devices like touchscreen kiosks at the POS. However, the role of sales associates in this experience remains essential to ensure efficient service and information security.

### 7. Can sales goals be managed through VTEX Sales App?

**VTEX Sales App** doesn't support goal management, but it offers the [Sales performance](/en/docs/tutorials/sales-app-sales-performance) feature so that sales associates and managers can view the sales results.

For a specialized goal management service, we recommend [Indeva](https://vtex.com/br-pt/indeva/) (Brazil only), a VTEX solution designed to help merchants boost sales by setting goals per sales associate, managing team performance in an omnichannel environment, incorporating gamification to motivate sales associates, and more.

### 8. Can VTEX Sales App process sales for SKUs that are unavailable in the system but available in local inventory?

Yes, the sales associate just needs to use the **Force stock** feature. Learn more in our documentation for developers [Force stock availability](https://developers.vtex.com/docs/guides/force-stock-availability). 

> ℹ️ To understand why a product available in local inventory may appear as unavailable in the system, see these articles:<ul><li>[Why is the product not visible on the website?](/en/faq/why-is-the-product-not-visible-on-the-website)</li><li>[Which logistics settings can impact the product availability in the cart?](/en/docs/tutorials/which-logistics-settings-can-impact-the-product-availability-in-the-cart)</li></ul>

### 9. Are there any device limitations for using VTEX Sales App, such as mobile-only access?

No, **VTEX Sales App** can be used on various devices, such as tablets, computers, smartphones, and touchscreen kiosks.

### 10. Does VTEX Sales App require an internet connection?

Yes, internet connection is required to use the solution, and the signal quality directly impacts the customer experience. A faster connection speed provides a better experience.

> ℹ️ To learn about the conditions for using the solution, see the article [Prerequisites for using VTEX Sales App](/en/tracks/instore-primeiros-passos-e-configuracoes--zav76TFEZlAjnyBVL5tRc/1wtAanSRA3g2316dw7bw8u).

### 11. Can non-VTEX clients use VTEX Sales App?

You must be a VTEX client to use **VTEX Sales App**, as it leverages the VTEX platform structure as a whole, including modules such as Order Management System (OMS), Catalog, Logistics, Payments, and more.

## Offers

### 12. How do I activate custom display in the Offers section of VTEX Sales App?

Merchants need to follow a few steps to activate the **custom display**. The instructions are detailed in the article [VTEX Sales App Offers](/en/docs/tutorials/ads-from-vtex-sales-app).

### 13. Can banners and customizations be included in the Offers section of VTEX Sales App?

No, [VTEX Sales App Offers](/en/docs/tutorials/ads-from-vtex-sales-app) can't be customized as it follows standardized layouts. To learn about possible changes to the experience, see the article [How to customize VTEX Sales App](/en/tracks/instore-primeiros-passos-e-configuracoes--zav76TFEZlAjnyBVL5tRc/Rby973h1l9tEM4C1YrzwZ).

## Payments

### 14. What payment methods does the VTEX Sales App support?

The solution supports the following [payment methods](/en/docs/tutorials/difference-between-payment-methods-and-payment-conditions):

* Credit and debit cards ([list of payment providers by country](/en/docs/tutorials/list-of-payment-providers-by-country))
* [Pix](/en/docs/tutorials/setting-up-pix-as-a-payment-method) (Brazil only)
* Boleto (Brazil only)
* [Note payable](/en/docs/tutorials/setting-up-payments-with-notes-payable)
* [Gift card](/en/docs/tutorials/gift-card) (customers can use a partial or full amount)

If you want to use a payment method configured in your ecommerce website that isn't listed in **VTEX Sales App**, there's a workaround. Sales associates can complete the sale using the [shared cart (social selling)](/en/tracks/instore-usando-o-app--4BYzQIwyOHvnmnCYQgLzdr/6deiffo22iKkY27PkfstXy) to send a payment link to customers. Orders paid via links aren't processed by the **VTEX Sales App** checkout; they're processed by the ecommerce website checkout, allowing the store to use all the payment methods configured for the ecommerce website.

> ❗ The **VTEX Sales App** doesn't support cash payments in the physical store. Learn more in the article [VTEX Sales App - Payments](/en/tracks/instore-pagamentos--43B4Nr7uZva5UdwWEt3PEy/2liigRors32hzqBNs2M1Oa).

### 15. What payment connectors act as acquirers for card purchases in VTEX Sales App?

With [acquirer](/en/tracks/pagamentos--6GAS7ZzGAm7AGoEAwDbwJG#adquirente) services, stores can offer customers flexible payment options for credit or debit card purchases, including installment payments. This applies to both ecommerce stores and payment terminals in physical stores.

**VTEX Sales App** supports the following payment connectors:

* [Adyen](/en/tutorial/configurar-pagamento-com-adyenv3--7xAz67E2Eg63LWCQNjVdwv) (doesn't support [payout split](/en/docs/tutorials/split-payment))
* [Mercado Pago](/en/docs/tutorials/configuring-payment-with-mercado-pago-in-vtex-sales-app) (accepts an exclusive contract for **VTEX Sales App** and doesn't support payout split)
* [Cielo](/en/docs/tutorials/configuring-payment-with-cielo-in-vtex-sales-app) (accepts an exclusive contract for **VTEX Sales App** and doesn't support payout split)
* PagarMe (accepts payout split)

### 16. Can the physical store have different payment connectors from the online store with VTEX Sales App?

Yes, you can configure exclusive connectors and payment methods for **VTEX Sales App**, completely independently from online sales.

### 17. Are franchise accounts or white label sellers required for split payments?

Yes, having [franchise accounts](/en/docs/tutorials/what-is-a-franchise-account) or [white label sellers](/en/docs/tutorials/white-label-seller) is a condition for the store to use [payout split](/en/docs/tutorials/split-payment). This feature is especially relevant in marketplace scenarios with orders fulfilled by multiple sellers.

> ⚠️ The only connector that supports split payments in **VTEX Sales App** is PagarMe.

### 18. Does VTEX Sales App support accounts using store cards (private label)?

Although VTEX Sales App doesn't currently support configuring the [store cards (private label)](/en/docs/tutorials/setting-up-private-label-payments) payment method, there's a workaround. Sales associates can complete sales from **VTEX Sales App** using the shared cart (social selling) to send a payment link to customers. Orders paid via links aren't processed by the **VTEX Sales App** checkout but by the ecommerce website checkout, which was configured to accept private label cards.

An additional benefit of completing orders with a shared cart is that they go through the [anti-fraud solution](/en/docs/tutorials/what-is-anti-fraud) flow, which isn't currently supported in **VTEX Sales App** payment **settings**.

