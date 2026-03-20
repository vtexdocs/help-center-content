# Troubleshooting Categorization and Filtering Strategy

This document describes the recommended categorization and filtering structure for the Troubleshooting section in the Help Center.

## Overview

Based on the analysis of **32 articles** in `docs/pt/troubleshooting`, this strategy proposes:

- **6 primary categories** for sidebar navigation
- **19 domain filters** for product or area discovery
- **7 symptom filters** for problem-type refinement

## 1. Primary categories (navigation sidebar)

| Menu | Description |
| --- | --- |
| **Integrations and Channels** | Integration and synchronization issues with marketplaces, affiliates, and external connectors |
| **Merchandising and Search** | Offer and discoverability issues, including catalog setup, indexing, search, pricing, and promotions |
| **Orders and Fulfillment** | Post-order operations after order creation, including status progression, fulfillment, reservation consumption or release, shipment, dispatch, and cancellation handling |
| **Data access and security** | Admin operations, data flows, notifications, permissions, and technical security or configuration topics |
| **Checkout and Financial** | Order-placement and transaction issues, including checkout validation, pricing-total consistency, payment authorization or capture, and settlement-related failures |
| **B2B Commerce** | B2B organization structure, company-level permissions, and negotiation-specific flows |

---

## 2. Domain filters (tags)

| Domain filter | Troubleshooting usage |
| --- | --- |
| **Checkout** | Checkout completion issues, validation, session, and cart behavior |
| **Catalog** | Product and SKU setup, attributes, and indexing |
| **Payments** | Payment flow, authorization, capture, gateway, and settlement behavior |
| **Orders** | Order creation, updates, statuses, and OMS behavior |
| **Promotions** | Promotion rules and context-based applicability |
| **Prices** | Price tables, fixed or computed pricing, and price divergence |
| **Marketplace** | Marketplace Network and channel operations |
| **Intelligent Search** | Search behavior, relevance, and product exposure |
| **Storefront** | Storefront rendering and shopper-facing behavior issues |
| **Master Data** | Entities, schemas, triggers, and data behavior |
| **Audit** | Action and event traceability, when applicable |
| **Identity** | Users, roles, authentication, and permissions |
| **Logistics** | Delivery, SLA, carriers, stock reservation, and logistics inventory |
| **B2B** | Organizations, cost centers, and B2B rules |
| **Integrations** | Third-party connector and integration issues |
| **VTEX Shield** | Application security and data protection topics |
| **VTEX Ads** | Ads-related catalog or operation topics |
| **VTEX Sales App** | In-store app sales flow issues |
| **Admin** | Admin access, navigation, page loading, and back-office configuration issues |

---

## 3. Symptom filters (tags)

| Symptom filter | Description |
| --- | --- |
| **Sync issue** | Failed integrations or synchronization between systems, channels, or connectors |
| **Loading issue** | Pages, products, content, or metrics not appearing or not loading correctly |
| **Flow interruption** | Statuses, steps, or operational flows that do not progress as expected |
| **Validation error** | Schema, header, spreadsheet, API, or input validation failures |
| **Access restriction** | Permission, authorization, profile, or restricted-access problems |
| **Misconfiguration** | Incorrect setup, missing settings, or misconfigured policies and rules |
| **Notification issue** | Email delivery, alerts, reports, or notification-related failures |

---

## 4. Filter governance

1. Keep **Domain filters** as the primary discovery axis for troubleshooting articles.
2. Use **Symptom filters** as the secondary refinement axis to narrow the problem type.
3. Treat the **Primary category** as the broad navigation layer, not as the main retrieval mechanism.
4. Promote niche domain filters such as `VTEX Ads` or `Audit` only when recurring article volume justifies them.
5. For hybrid articles, prioritize:
   1. the product or area the user is most likely to associate with the error as the main domain filter,
   2. the dominant symptom as the main troubleshooting refinement,
   3. additional domain filters only when they materially improve discovery.

---

## 5. Taxonomy governance for scale

To support the planned growth of the knowledge base, follow the guidelines below when classifying troubleshooting content.

### 5.1 Assignment guidelines

For each troubleshooting article, the following taxonomy structure is recommended:

- Primary category: exactly **1** per article
- Domain filters: typically **1 to 3** per article
- Symptom filters: usually **1 to 2** per article

Examples of recommended assignments:

1. `help-center-content/docs/en/troubleshooting/Integrations/my-orders-in-mercado-libre-have-errors.md`
   - Primary category: **Integrations and Channels**
   - Domain filters: **Marketplace**, **Integrations**
   - Symptom filters: **Sync issue**, **Misconfiguration**
2. `help-center-content/docs/en/troubleshooting/store-operations/i-cant-view-a-page-in-the-admin.md`
   - Primary category: **Data access and security**
   - Domain filters: **Identity**, **Admin**
   - Symptom filters: **Access restriction**, **Loading issue**
3. `help-center-content/docs/en/troubleshooting/store-operations/i-cant-import-the-price-table.md`
   - Primary category: **Merchandising and Search**
   - Domain filters: **Prices**, **Catalog**
   - Symptom filters: **Validation error**

### 5.2 Editorial decision guidelines

When classifying troubleshooting content, consider the following guidelines:

1. Prioritize the user's mental model over internal team ownership or root-cause attribution.
2. Write and classify articles based on the context in which users are most likely to look for the issue.
3. Apply the filter governance rules defined in Section 4 for domain, symptom, and hybrid-article decisions.
