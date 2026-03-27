# Troubleshooting Categorization and Filtering Strategy

This document describes the recommended categorization and filtering structure for the Troubleshooting section in the Help Center.

## Overview

Based on the analysis of **32 articles** in `docs/pt/troubleshooting`, this strategy proposes:

- **6 primary categories** (journey/topic navigation)
- **7 symptom filters** (problem-type navigation)
- **18 domain filters** (similar to Announcements - product/area navigation)


---

## 1. Primary categories (navigation sidebar)

| Category                                                      | Description                                                                                                 |
| ------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------- |
| **Integrations and Channels**                           | Integration/synchronization issues with marketplaces, affiliates, and external connectors                   |
| **Merchandising and Search** | Offer and discoverability issues (catalog setup, indexing, search, pricing, promotion)                      |
| **Orders and Fulfillment**                            | Post-order operations after order creation: status progression, invoicing, fulfillment, reservation consumption/release, shipment/dispatch, delivery tracking, and cancellation handling            |
| **Data access and security**                              | Admin access/operations, Master Data, notifications, and technical security/configuration topics |
| **Checkout and Financial**                  | Order-placement and transaction issues: cart/checkout validation, pricing-total consistency, payment authorization/capture, anti-fraud outcomes, and financial settlement-related failures            |
| **B2B**                  |    B2B organization structure, company-level permissions, and negotiation-specific flows         |
---

## 2. Symptom filters (tags)

| Symptom filter                           | Description                                                              |
| ---------------------------------------- | ------------------------------------------------------------------------ |
| **Sync issue** | Failed integrations or synchronization between systems, channels, or connectors                            |
| **Loading error**   | Pages, products, content, or metrics not appearing or not loading correctly                              |
| **Flow interruption**           | Statuses, steps, or operational flows that do not progress as expected                    |
| **Validation error**     | Schema, header, spreadsheet, API, or input validation failures                 |
| **Access restriction**           | Permission, authorization, profile, or restricted-access problems |
| **Misconfiguration**                  | Incorrect setup, missing settings, or misconfigured policies and rules       |
| **Notification issue**       | Email delivery, alerts, reports, or notification-related failures                 |

---

## 3. Domain filters (tags)

| Domain filter                       | Troubleshooting usage                                  |
| ----------------------------------- | ------------------------------------------------------ |
| **Checkout**                  | Checkout completion issues, validation, session/cart   |
| **Catalog**                   | Product/SKU setup, attributes, indexing                |
| **Payments**                  | Payment flow, capture, authorization, gateway          |
| **Orders**                    | Order creation, updates, and statuses                  |
| **Promotions**                | Promotion rules and context-based applicability        |
| **Prices**                    | Price tables, fixed/computed pricing, price divergence |
| **Marketplace**               | Marketplace Network/channel operations                 |
| **Intelligent Search**        | Search behavior, relevance, product exposure           |
| **Storefront**                | Storefront rendering and behavior issues               |
| **Master Data**               | Entities, schemas, triggers, and data behavior         |
| **Audit**                     | Action/event traceability (when applicable)            |
| **Identity**                  | Users, roles, authentication, and permissions          |
| **Logistics**                 | Delivery, SLA, carriers, logistics stock               |
| **B2B**                       | Organizations, cost centers, and B2B rules             |
| **Integrations**              | Third-party connector/integration issues               |
| **VTEX Shield**               | Application security and data protection topics        |
| **VTEX Ads**                  | Ads-related catalog/operation topics                   |
| **VTEX Sales App**            | In-store app sales flow issues                         |

---

## 4. Filter governance

1. Keep Domain filters as the primary discovery axis for troubleshooting articles.
2. Use Symptom filters as the secondary refinement axis to narrow the problem type.
3. Treat the Primary category as the broad navigation layer, not as the main retrieval mechanism.
4. Promote niche domain filters (e.g., VTEX Ads, Audit) only when the recurring article volume justifies them.
5. For hybrid articles, prioritize:
    1. The product or area the user is most likely to associate with the error as the main domain filter,
    2. The dominant symptom is the main troubleshooting refinement,
    3. Additional domain filters should be used only when they materially improve discovery.


---

## 5. Taxonomy governance for scale

To support the planned growth of the knowledge base, follow the guidelines below when classifying troubleshooting content.

### 6.1 Assignment guidelines

For each troubleshooting article, the following taxonomy structure is recommended:

- Primary category: typically **1** per article.
- Symptom filters: usually **1 to 2** per article.
- Domain filters: typically **1 to 3** per article.

Examples of recommended assignments:

1. `help-center-content/docs/en/troubleshooting/Integrations/my-orders-in-mercado-libre-have-errors.md`

   - Primary category: **Integrations and Channels**
   - Symptom filters: **Sync issue**, **Misconfiguration**
   - Domain filters: **Marketplace**, **Integrations**
     
2. `help-center-content/docs/en/troubleshooting/store-operations/i-cant-view-a-page-in-the-admin.md`

   - Primary category: **Data access and security**
   - Symptom filters: **Access restriction**, **Loading issue**
   - Domain filters: **Identity**, **Admin**
     
3. `help-center-content/docs/en/troubleshooting/store-operations/i-cant-import-the-price-table.md`

   - Primary category: **Merchandising and Search**
   - Symptom filters: **Validation error**
   - Domain filters: **Prices**, **Catalog**


### 6.2 Editorial decision guidelines

When classifying troubleshooting content, consider the following guidelines:

1. Classify the article based on the user’s likely entry point, rather than internal team ownership.
2. For cross-product issues, use the dominant user symptom as a tie-breaker.
3. Use domain filters to refine the scope, rather than as a replacement for symptom filters.
