# Announcements Filter Strategy

This document outlines the recommended filter structure for the Help Center Announcements section at https://help.vtex.com/announcements.

## Overview

Based on analysis of **392 announcement files** in `docs/es/announcements`, this strategy proposes **25 strategic filter options** organized into three categories.

---

## 1. VTEX Core Services (12 options)

| Filter Value | Description |
|--------------|-------------|
| **Checkout** | Checkout API, validation, reCAPTCHA, cart functionality |
| **Catalog** | Product catalog, categories, SKUs, specifications |
| **Payments** | Gateway, Payment Provider Protocol, payment methods |
| **Orders** | Order Management System (OMS), order processing |
| **Promotions** | Discounts, coupons, campaigns, pricing rules |
| **Marketplace** | Marketplace Network, seller management, channels |
| **Intelligent Search** | Search functionality, merchandising rules |
| **CMS** | Headless CMS, Site Editor, Store Framework, content management |
| **Master Data** | Data entities, triggers, customer data |
| **Identity** | License Manager, permissions, authentication, API keys |
| **Logistics** | Shipping, inventory, fulfillment, carriers |
| **Integrations** | Third-party connectors (Amazon, Mercado Libre, Google Shopping) |

---

## 2. VTEX Main Products (8 options)

| Filter Value | Description |
|--------------|-------------|
| **VTEX Sales App** | Point of sale, in-store sales, mobile commerce |
| **VTEX Shield** | Security Monitor, Data Protection Plus, WAF |
| **FastStore** | Headless storefront, performance-optimized stores |
| **VTEX IO** | Store Framework, app development platform |
| **VTEX Pick and Pack** | Fulfillment solution, last-mile delivery |
| **VTEX Ad Network** | Advertising, sponsored products |
| **B2B Suite** | B2B Buyer Portal, organizations, cost centers |
| **Conversational Commerce** | Weni by VTEX, messaging, customer communication |

---

## 3. Announcement Tags (5 options)

| Filter Value | Description |
|--------------|-------------|
| **New feature** | New functionality, modules, or capabilities |
| **Improvement** | Enhancements, optimizations, UX improvements |
| **Breaking change** | API changes, behavior modifications requiring action |
| **Deprecation** | End-of-life notices, discontinued features |
| **Security** | Security updates, compliance, vulnerability fixes |

---

## Summary

| Category | Count |
|----------|-------|
| Core Services | 12 |
| Main Products | 8 |
| Announcement Tags | 5 |
| **Total** | **25 options** |

---

## Implementation Recommendations

### Proposed Frontmatter Schema

Add a new `tags` field to announcement files:

```yaml
---
title: 'Announcement Title'
status: PUBLISHED
createdAt: 2026-02-25T12:00:00.000Z
updatedAt: 2026-02-25T12:00:00.000Z
publishedAt: 2026-02-25T12:00:00.000Z
contentType: updates
productTeam: Shopping
author: 2AhArvGNSPKwUAd8GOz0iU
tags:
  - Checkout
  - New feature
slugEN: announcement-slug
locale: es
---
```

### Mapping from Existing `productTeam` Values

| Current `productTeam` | Suggested Core Service Mapping |
|-----------------------|--------------------------------|
| Shopping | Checkout, Orders |
| Channels | Marketplace, Integrations |
| Marketing & Merchandising | Promotions, Intelligent Search |
| Identity | Identity |
| Post-purchase | Orders, Logistics |
| VTEX IO | VTEX IO, CMS |
| Financial | Payments |
| Management | Identity |
| Master Data | Master Data |
| Billing | Payments |
| Apps | VTEX IO |
| Others | (Requires manual classification) |

### Filter Behavior

- Allow **multiple selections** within each category
- Support **cross-category filtering** (e.g., "Checkout" + "New feature")
- Consider adding a **date range filter** using existing `publishedAt` field

---

## File Analysis Summary

- **Total announcement files:** 392
- **Date range:** 2017 - February 2026
- **Organization:** `docs/es/announcements/{YEAR}/{MONTH}/`
- **Filename pattern:** `YYYY-MM-DD-{slug}.md`
