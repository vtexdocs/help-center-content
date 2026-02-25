# Announcements Filter Strategy

This document outlines the recommended filter structure for the Help Center Announcements section at https://help.vtex.com/announcements.

## Overview

Based on analysis of **392 announcement files** in `docs/es/announcements`, this strategy proposes **25 strategic filter options** organized into two groups.

---

## 1. Filter tags (20 options)

| Filter Value | Description |
|--------------|-------------|
| **Checkout** | Validation, reCAPTCHA, cart functionality |
| **Catalog** | Product catalog, categories, SKUs, specifications |
| **Payments** | Gateway, Payment Provider Protocol, payment methods |
| **Orders** | Order Management System (OMS), order processing |
| **Promotions** | Discounts, coupons, campaigns, pricing rules |
| **Prices** | Price tables, fixed prices, computed prices, price rules |
| **Marketplace** | Marketplace Network, seller management, channels |
| **Intelligent Search** | Search functionality, merchandising rules |
| **CMS** | Headless CMS, Site Editor, Store Framework, content management |
| **Master Data** | Data entities, triggers, customer data |
| **Identity** | License Manager, permissions, authentication |
| **Logistics** | Shipping, inventory, fulfillment, carriers |
| **B2B** | B2B commerce features, buyer organizations, cost centers |
| **Integrations** | Third-party connectors |
| **VTEX Shield** | Security Monitor, Data Protection Plus, WAF |
| **VTEX Ads** | Advertising, sponsored products |
| **B2B Buyer Portal** | B2B storefront for buyer organizations |
| **VTEX Sales App** | Point of sale, in-store sales, mobile commerce |
| **Amazon integration** | Product listing, order sync, fulfillment with Amazon |
| **Mercado Libre integration** | Product listing, order sync, fulfillment with Mercado Libre |

---

## 2. Badges (5 options)

| Filter Value | Description |
|--------------|-------------|
| **New feature** | New functionality, modules, or capabilities |
| **Improvement** | Enhancements, optimizations, UX improvements |
| **Breaking change** | API changes, behavior modifications requiring action |
| **Deprecation** | End-of-life notices, discontinued features |
| **Security** | Security updates, compliance, vulnerability fixes |

---

### Mapping from Existing `productTeam` Values

| Current `productTeam` | Suggested Core Service Mapping |
|-----------------------|--------------------------------|
| Shopping | Checkout, Orders |
| Channels | Marketplace, Integrations |
| Marketing & Merchandising | Promotions, Intelligent Search, Catalog |
| Identity | Identity |
| Post-purchase | Orders, Logistics |
| VTEX IO | CMS |
| Financial | Payments |
| Management | Identity |
| Master Data | Master Data |
| Billing | Payments |
| Apps | Integrations |
| Others | (Requires manual classification) |
