# Troubleshooting Categorization and Filtering Strategy

This document describes the recommended categorization and filtering structure for the Troubleshooting section in the Help Center.

## Overview

Based on the analysis of **32 articles** in `docs/pt/troubleshooting`, this strategy proposes:

- **5 primary categories** (journey/topic navigation)
- **7 symptom filters** (problem-type navigation)
- **19 domain filters** (reused from Announcements - product/area navigation)

---

## 1. Primary categories (5 options)

| Category                                                      | Description                                                                                                 |
| ------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------- |
| **Integrations and Channels**                           | Integration/synchronization issues with marketplaces, affiliates, and external connectors                   |
| **Commercial: Catalog, Search, Prices, and Promotions** | Offer and discoverability issues (catalog setup, indexing, search, pricing, promotion)                      |
| **Orders and Post-purchase**                            | Order lifecycle after checkout (creation, status, cancellation, processing, invoicing, tracking)            |
| **Inventory and Dispatch**                              | Pre-delivery availability (reservation, stock balance, logistics SLA, dock, shipment, dispatch preparation) |
| **Administration, Data, and Security**                  | Admin access/operations, Master Data, notifications, and technical security/configuration topics            |

---

## 2. Symptom filters (7 options)

| Symptom filter                           | Description                                                              |
| ---------------------------------------- | ------------------------------------------------------------------------ |
| **Not integrating or not syncing** | Integration failure between systems/channels                             |
| **Not displayed or not loading**   | Content, page, product, or metric not shown                              |
| **Stuck status or flow**           | Process does not move forward or behaves unexpectedly                    |
| **Validation or import error**     | Schema, headers, spreadsheet, API, and validation errors                 |
| **Access or permission**           | Authorization/profile errors, such as 403 or access-based unavailability |
| **Configuration**                  | Issue caused by incorrect setup (policy, binding, affiliate, etc.)       |
| **Emails and notifications**       | Sending/receiving failures for notifications and reports                 |

---

## 3. Domain filters (19 options from Announcements, applied to Troubleshooting)

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
| **B2B Buyer Portal**          | B2B portal experience and operations                   |
| **VTEX Sales App**            | In-store app sales flow issues                         |

---

## 4. Mapping of the 32 articles by category (English names + links)

### Marketplace and Integrations (7)

- [My order was closed with the wrong price](https://help.vtex.com/en/troubleshooting/my-order-was-closed-with-the-wrong-price--5an0m7uLMwxWRlJlsyKxvl)
- [My orders in Mercado Libre have errors](https://help.vtex.com/en/troubleshooting/my-orders-in-mercado-libre-have-errors--170njWgSw9UQ5DG6NRl14d)
- [Integration errors in Amazon orders](https://help.vtex.com/en/troubleshooting/integration-errors-in-amazon-orders--1ukX1Gw4fVUs62IIpGgsZF)
- [Why don&#39;t marketplace orders integrate with my store?](https://help.vtex.com/en/troubleshooting/why-dont-marketplace-orders-integrate-with-my-store--275YvF8dyry5KmfY9epoET)
- [Why haven’t my product prices been sent to the marketplace?](https://help.vtex.com/en/troubleshooting/why-havent-my-product-prices-been-sent-to-the-marketplace--7LMjXNoYJXsgPyKFkk6I25)
- [My ad is not displayed on Mercado Libre](https://help.vtex.com/en/troubleshooting/my-ad-is-not-displayed-on-mercado-libre--2UpudfowEvG97e2lstj4qc)
- [Promotion not applied to the marketplace](https://help.vtex.com/en/troubleshooting/promotion-not-applied-to-the-marketplace--2pxlVpzgThuw2wTEISRwA2)

### Commercial: Catalog, Search, Prices, and Promotions (6)

- [Error when trying to import SKUs via spreadsheet in VTEX Admin](https://help.vtex.com/en/troubleshooting/error-when-trying-to-import-skus-via-spreadsheet-in-the-vtex-admin--1TDF87s7P1UJT1hNDGZsuk)
- [I can’t update the EAN of my SKUs via API](https://help.vtex.com/en/troubleshooting/i-cant-update-the-ean-of-my-skus-via-api--1gHfGo3TpSTHqb5ZNzwq3m)
- [I can’t import the price table](https://help.vtex.com/en/troubleshooting/i-cant-import-the-price-table--bglrzs7gLKWf97q8qRdRm)
- [I can’t index a product in the catalog](https://help.vtex.com/en/troubleshooting/i-cant-index-a-product-in-the-catalog--5ZKLTqnCyGbWEYGPTCBIxI)
- [I can’t view the product in the search results](https://help.vtex.com/en/troubleshooting/i-cant-view-the-product-in-the-search-results--2Ry55Fh6JW8v7oKBiB2pH3)
- [The promotion wasn’t applied to the customer cluster](https://help.vtex.com/en/troubleshooting/the-promotion-wasnt-applied-to-the-customer-cluster--1fQEKdmWwIAPfDQAbuP3Kr)

### Orders and Post-purchase (7)

- [Metrics are not displayed in the order dashboard](https://help.vtex.com/en/troubleshooting/metrics-are-not-displayed-in-the-order-dashboard--1B5OAicmK3AvnwPzs4iq7Z)
- [My store’s order is stuck in “Verifying invoice” status](https://help.vtex.com/en/troubleshooting/my-stores-order-still-has-the-status-verifying-invoice--2YY7ILOOd0lEjpiT7SSgag)
- [My store order was canceled](https://help.vtex.com/en/troubleshooting/my-store-order-was-canceled--6qOCSBno1vS9TmHWWveOc)
- [My store order was not created](https://help.vtex.com/en/troubleshooting/my-store-order-was-not-created--7xQZqkMHXkHCEEZl5UlX8I)
- [The order was split into packages with separate deliveries](https://help.vtex.com/en/troubleshooting/the-order-was-split-into-packages-with-separate-deliveries--3OCOC82543vOsc3Ex32XTY)
- [The order doesn’t progress after “Handling shipping” status](https://help.vtex.com/en/troubleshooting/the-order-doesnt-progress-after-the-status-handling-shipping--2yia6QhoLh204lHzEaIrnK)
- [The order doesn’t progress after “Ready for handling” status](https://help.vtex.com/en/troubleshooting/the-order-doesnt-progress-after-the-status-ready-for-handling--1Esx82dbr5RHYPOHgEjRGg)

### Inventory and Dispatch (2)

- [My inventory is negative](https://help.vtex.com/en/troubleshooting/my-inventory-is-negative--JSFHaWsASXbnrX9dgNEeP)
- [Product remains available in stock after the order has been invoiced](https://help.vtex.com/en/troubleshooting/product-remains-available-in-stock-after-the-order-has-been-invoiced--5kQ3sJTo7hxIjysT7f9EvD)

### Admin, Data, and Security (10)

- [Admin redirect search returns no results](https://help.vtex.com/en/troubleshooting/admin-redirect-search-returns-no-results--2u5cJhUSVM6bbEAFkgUww7)
- [Error installing custom SSL certificates](https://help.vtex.com/en/troubleshooting/error-installing-custom-ssl-certificates--6hgFzbcc96mcrqXZMmHCTr)
- [Customer and Address forms do not exist in multistores](https://help.vtex.com/en/troubleshooting/customer-and-address-forms-do-not-exist-in-multistores--46ETfuaGogKwaMau4ESAAM)
- [I can’t fix the schema error in B2B apps](https://help.vtex.com/en/troubleshooting/i-cant-fix-the-schema-error-in-b2b-apps--WkjJZSnGXCiqmLhg4b0OR)
- [I can’t view a page in Admin](https://help.vtex.com/en/troubleshooting/i-cant-view-a-page-in-the-admin--3U8TJMlAqHIM5Qs8rLwkwQ)
- [My store’s Site Editor is not working](https://help.vtex.com/en/troubleshooting/my-stores-site-editor-is-not-working--3A6Ois91zEZ8zpKJp1wsP2)
- [I can’t receive emails from VTEX](https://help.vtex.com/en/troubleshooting/i-cant-receive-emails-from-vtex--4M2uVZdtrJzgyAySuZ4OLg)
- [I haven’t received the email with the report exported from Master Data v1](https://help.vtex.com/en/troubleshooting/i-havent-received-the-email-with-the-report-exported-from-master-data-v1--1zUBgmgkgMZyHyy0veR7Oj)
- [Removing error message: “Request headers must only contain ASCII”](https://help.vtex.com/en/troubleshooting/removing-error-message-request-headers-must-only-contain-ascii--19psKZvLXrBqqK1bPaTIHG)
- [Trigger in Master Data v2 is not working](https://help.vtex.com/en/troubleshooting/trigger-in-master-data-v2-is-not-working--1WvpFuZUQmPrBlrlwX47Qd)

---

## 5. Filter governance

1. Keep **Symptom filters** as the primary troubleshooting axis.
2. Use **Domain filters** as a secondary refinement axis.
3. Promote niche domain filters (for example, `VTEX Ads`, `Audit`) only when recurring article volume justifies them.
4. For hybrid articles, prioritize:
   1. primary category by likely user entry point,
   2. dominant symptom,
   3. product/domain as refinement.

---

## 6. Taxonomy governance for scale

To support the planned growth (approximately 70 new troubleshooting articles), apply the rules below.

### 6.1 Assignment limits

- Primary category: exactly **1** per article.
- Symptom filters: **1 to 2** per article.
- Domain filters: **1 to 3** per article.

Examples (recommended assignment pattern):

1. `help-center-content/docs/en/troubleshooting/Integrations/my-orders-in-mercado-libre-have-errors.md`

   - Primary category: **Marketplace and Integrations**
   - Symptom filters: **Not integrating or not syncing**, **Configuration**
   - Domain filters: **Marketplace**, **Integrations**, **Mercado Libre integration**
2. `help-center-content/docs/en/troubleshooting/store-operations/i-cant-view-a-page-in-the-admin.md`

   - Primary category: **Administration, Data, and Security**
   - Symptom filters: **Access or permission**, **Not displayed or not loading**
   - Domain filters: **Identity**, **Storefront**
3. `help-center-content/docs/en/troubleshooting/store-operations/i-cant-import-the-price-table.md`

   - Primary category: **Commercial: Catalog, Search, Prices, and Promotions**
   - Symptom filters: **Validation or import error**
   - Domain filters: **Prices**, **Catalog**

### 6.2 Thresholds for taxonomy changes

- Create a new primary category only when:
  - it accumulates at least **15 active articles**, and
  - current categories create recurring navigation ambiguity.
- Promote a domain filter to top-level visibility only after at least **8 to 10 recurring articles**.

### 6.3 Review cadence

- Review taxonomy every **quarter**.
- Check category/filter distribution, search terms, and unresolved search intents.
- Merge, rename, or deprecate low-usage or overlapping filters.

### 6.4 Editorial decision rules

1. Classify by the user's likely entry point, not by internal team ownership.
2. Use the dominant symptom as tie-breaker for cross-product issues.
3. Use domain filters as refiners, not as replacement for symptom filters.
