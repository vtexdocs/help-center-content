---
title: 'Orders: New item-level promotion view (open beta)'
createdAt: 2026-07-31T00:00:00.000Z
updatedAt: 2026-07-31T00:00:00.000Z
contentType: updates
productTeam: Orders
slugEN: 2026-07-31-orders-new-item-level-promotions-display-open-beta
locale: en
announcementSynopsisEN: 'The Orders module now shows which promotions were applied to each order item. This feature is available in open beta upon request.'
tags:
  - Beta
  - Orders
  - Promotions
---

We're launching a new promotion view in the Orders module that shows which promotions were applied to each order item, along with the cart benefits those items triggered. With this update, store operators can view a detailed breakdown of discounts directly on the order details page, without leaving the order details page or checking promotions elsewhere. This feature is available globally in open beta and needs to be enabled upon request.

## What has changed?

Previously, the order details page didn't show how promotions were applied to each order item. Now, the Orders module displays promotion details for each order item, allowing you to see exactly which promotions were applied and their impact.

The promotion view is available in different areas of the Orders module:

- **Product line items** in suggested packages, issued invoices, returned items, and ERP notification packages.
- **All items modal**, the complete item listing accessed from the order details sidebar.
- **Invoice creation flow**, where each item displays a breakdown of promotions.

The view supports the following promotion types: Regular, Progressive Discount, Buy Together, More for Less, Buy One Get One, and Campaign Promotion.

You'll see the following elements:

- **Promotion badge:** A green badge next to the product row indicating that one or more promotions have been applied. When there are multiple promotions, the badge displays the quantity. Gift items (from Buy One Get One promotions) display a Gift badge.
- **Promotion popover:** Hovering over the badge opens a breakdown with two sections. Each row shows the promotion type, name, and discount amount, plus a Total Discount when multiple promotions are applied. The two sections are as follows:
  - **Promotions applied to the item**: Discounts at the item level.
  - **Promotions applied to the cart**: Shipping discounts and other discounts at the cart level.
- **Strikethrough price:** The original full price appears crossed out next to the effective (discounted) price.

> ℹ️ The Orders module in the Admin displays the result of promotions already applied during checkout. It doesn't create or manage promotions. To configure promotions, use the [Promotions](/en/docs/tutorials/how-promotions-work--tutorials_2298) module.

## Why did we make this change?

This update gives you complete visibility into how discounts affect an order, without leaving the order details page. Key benefits include:

- A breakdown of which promotions apply to each item and how much each one discounts.
- A clear view of cart benefits, such as shipping discounts, triggered by order items.
- Faster verification of an order's effective price before issuing invoices or processing returns.

## What needs to be done?

This feature is already available in open beta. To test it, open a ticket with [VTEX Support](/en/docs/tutorials/opening-tickets-to-vtex-support) requesting access.
