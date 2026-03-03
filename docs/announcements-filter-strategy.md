# Announcements Filter Strategy

This document outlines the recommended filter structure for the Help Center Announcements section at https://help.vtex.com/announcements.

## Overview

Based on analysis of **392 announcement files** in `docs/es/announcements`, this strategy proposes **25 strategic filter options** organized into two groups: filter tags and badges.

---

## 1. Filter tags (20 options)

| Filter tag | Description |
|--------------|-------------|
| **Checkout** | Validation, reCAPTCHA, cart functionality |
| **Catalog** | Products, categories, SKUs, specifications |
| **Payments** | Gateway, Payment Provider Protocol, payment methods |
| **Orders** | Order Management System (OMS), order processing |
| **Promotions** | Discounts, coupons, campaigns, pricing rules |
| **Prices** | Price tables, fixed prices, computed prices, price rules |
| **Marketplace** | Marketplace Network, integration, seller, channels |
| **Intelligent Search** | Search functionality, merchandising rules |
| **CMS** | Headless CMS, Site Editor, Store Framework, content management |
| **Audit** | Audit events |
| **Master Data** | Data entities, triggers, customer data |
| **Identity** | License Manager, permissions, authentication |
| **Logistics** | Shipping, inventory, fulfillment |
| **B2B** | B2B Suit, buyer organizations, cost centers |
| **Integrations** | Third-party connectors |
| **VTEX Shield** | VTEX Shield news |
| **VTEX Ads** | VTEX Ads news |
| **B2B Buyer Portal** | B2B Buyer Portal news |
| **VTEX Sales App** | VTEX Sales App news |
| **Amazon integration** | Amazon integration news |
| **Mercado Libre integration** | Mercado Libre integration news |

---

## 2. Badges (5 options)

| Badge | Description |
|--------------|-------------|
| **New feature** | New functionality, modules, or capabilities |
| **Improvement** | Enhancements, optimizations, UX improvements |
| **Breaking change** | Platform behavior modifications requiring action |
| **Deprecation** | Discontinued features and products |
| **Security** | Security updates, compliance, vulnerability fixes |

---

### General mapping from current `productTeam` values

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
