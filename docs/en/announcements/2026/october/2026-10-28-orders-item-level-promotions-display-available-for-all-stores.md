---
title: 'Orders: Item-level promotions display available for all stores'
createdAt: 2026-10-28T12:00:00.000Z
updatedAt: 2026-10-28T12:00:00.000Z
contentType: updates
productTeam: Orders
slugEN: 2026-10-28-orders-item-level-promotions-display-available-for-all-stores
locale: en
announcementSynopsisEN: 'The item-level promotion view on order details exits open beta and is now available for all VTEX stores.'
tags:
  - New feature
  - Admin
  - Orders
---

The item-level promotion view in the **Orders** module of the VTEX Admin is now in general availability for all stores, in all regions. The feature, [launched in open beta](https://help.vtex.com/en/announcements/2026-07-31-orders-new-item-level-promotions-display-open-beta) in July 2026, shows the promotions applied to each item in an order and the cart benefits those items triggered, directly on the order details screen.

## What has changed?

During the open beta, the item-level promotion view needed to be activated upon request to VTEX Support. Now, it's active by default in all VTEX accounts, with no need to open a support ticket.

With this feature, for each item in the order, you can now see:

- **Promotion badge:** A green badge next to the product row that indicates one or more promotions were applied. When there are multiple promotions, the badge displays the quantity. Gift items (from Buy One Get One promotions) display a Gift badge.
- **Promotions popover:** Hovering over the badge opens a breakdown with the type, name, and discount amount of each promotion, plus the total discount when more than one promotion is applied. Promotions are organized into two sections: **Promotions applied to the item** and **Promotions applied to the cart**.
- **Strikethrough price:** The original full price appears crossed out next to the effective (discounted) price.

The view appears in product line items in suggested bundles, issued invoices, returned items, and ERP notification bundles, as well as in the **All items** modal and in the invoice creation flow. It supports the following promotion types: Regular, Progressive Discount, Buy Together, More for Less, Buy One Get One, and Campaign Promotion.

> ℹ️ The **Orders** module displays the result of promotions already applied during checkout. It doesn't create or manage promotions. To configure promotions, use the [Promotions](https://help.vtex.com/en/docs/tracks/how-promotions-work) module.

## Why did we make this change?

The open beta period allowed us to validate the feature with different types of stores and refine the experience before rolling it out to all accounts. With general availability, all store operations now have complete visibility into how discounts affect an order without leaving the details screen. The main benefits are:

- A breakdown of which promotions apply to each item and how much each one discounts.
- A clear view of cart benefits, such as shipping discounts, triggered by order items.
- Faster verification of an order's effective price before issuing invoices or processing returns.

## What needs to be done?

No action is needed. The item-level promotion view is now available in all VTEX stores. To check it out, in the VTEX Admin, go to **Orders** > **All orders**, open an order, and hover over the promotion badge next to a discounted item.

To learn more about order details, see [Order details](https://help.vtex.com/en/docs/tutorials/order-details-page).
