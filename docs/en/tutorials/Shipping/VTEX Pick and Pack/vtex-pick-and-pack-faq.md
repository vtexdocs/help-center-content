---
title: 'VTEX Pick and Pack: FAQ'
id: 2Rvf9vTS35vmOhkE2i0xcs
status: PUBLISHED
createdAt: 2025-05-16T16:11:28.033Z
updatedAt: 2025-05-16T17:08:31.224Z
publishedAt: 2025-05-16T17:08:31.224Z
firstPublishedAt: 2025-05-16T17:06:40.015Z
contentType: tutorial
productTeam: Post-purchase
author: 2o8pvz6z9hvxvhSoKAiZzg
slugEN: vtex-pick-and-pack-faq
locale: en
legacySlug: vtex-pick-and-pack-faq
subcategoryId: 7Kllu6CmeLNV3tYXlCFvOt
---

This guide aims to address the most frequently asked questions about VTEX Pick and Pack.

## Table of Contents

- [General configuration](#general-configuration)
  - [Will all orders from the store go through VTEX Pick and Pack?](#will-all-orders-from-the-store-go-through-vtex-pick-and-pack)
  - [Will pickers handle one order at a time, or multiple orders simultaneously?](#will-pickers-handle-one-order-at-a-time-or-multiple-orders-simultaneously)
- [Picking configuration](#picking-configuration)
  - [Can the picker change the order during picking?](#can-the-picker-change-the-order-during-picking)
  - [Will these actions require administrator approval?](#if-the-picker-can-add-replace-or-remove-items-will-these-actions-require-administrator-approval)
  - [Is there a limit to how many changes can be made?](#if-changes-to-orders-are-allowed-is-there-a-limit-to-how-many-changes-can-be-made)
  - [How does the picker locate items for picking?](#how-does-the-picker-locate-items-for-picking)
- [Packing configuration](#packing-configuration)
  - [What sizes and types of packaging can be used?](#what-sizes-and-types-of-packaging-can-be-used)

## General configuration

### Will all orders from the store go through VTEX Pick and Pack?

The integration of VTEX Pick and Pack features with store orders isn't automatic. You'll need to set filters to define which characteristics should be present in orders fulfilled by Pick and Pack. To do this, follow the steps below:

1. In the VTEX Admin, go to **Shipping > Pick and Pack > Settings**, or type `Settings` in the search bar at the top of the page.
2. In the **Orders** section, click **General**.
3. Complete the [filters](/en/tutorial/vtex-pick-and-pack-settings--16cs3e7hWk7c4cSZqe10O9) on the **General** page.
4. Click **Save**.

### Will pickers handle one order at a time, or multiple orders simultaneously?

You can define whether the worksheet flow will be handled one order at a time or with multiple orders simultaneously. To configure how orders will be handled, follow these steps:

1. In the VTEX Admin, go to **Shipping > Pick and Pack > Settings**, or type `Settings` in the search bar at the top of the page.
2. In the **Orders** section, click **Worksheets**.
3. In the **Order handling** section, choose the option you want to configure:
   - **Single order** – one by one order handling.
   - **Multiple orders** – streamlines the process of handling multiple orders simultaneously, making it more efficient and convenient.
4. Click **Save**.

## Picking configuration

### Can the picker change the order during picking?

The picker can add, replace, and reject items in the order, as well as increase item quantities or adjust prices. However, you'll need to enable the appropriate permissions to allow these actions. To configure the permissions, follow these steps:

1. In the VTEX Admin, go to **Shipping > Pick and Pack > Settings**, or type `Settings` in the search bar at the top of the page.
2. In the **Worksheets** section, click **Picking**.
3. In the **[Picking](/en/tutorial/vtex-pick-and-pack-settings--16cs3e7hWk7c4cSZqe10O9#picking)** tab, select the actions the picker can perform:
   - Allow item notes  
   - Ask confirmation to pick items  
   - Allow to add items  
   - Allow item replacements  
   - Allow item rejections  
   - Allow item price changes  
   - Allow item quantity changes  
4. Click **Save**.

### If the picker can add, replace, or remove items, will these actions require administrator approval?

Approval from an administrator isn't required when changing an order, but you can enable it if you want to. To do so, follow these steps:

1. In the VTEX Admin, go to **Shipping > Pick and Pack > Settings**, or type `Settings` in the search bar at the top of the page.
2. In the **Worksheets** section, click **Picking**.
3. In the **[Picking](/en/tutorial/vtex-pick-and-pack-settings--16cs3e7hWk7c4cSZqe10O9#picking)** tab, enable the option **Enable approvals flow**.
4. Click **Save**.

### If changes to orders are allowed, is there a limit to how many changes can be made?

You can limit how many times item prices and quantities can be changed in an order. To do this, follow the steps below:

1. In the VTEX Admin, go to **Shipping > Pick and Pack > Settings**, or type `Settings` in the search bar at the top of the page.
2. In the **Worksheets** section, click **Picking**.
3. In the **[Picking](/en/tutorial/vtex-pick-and-pack-settings--16cs3e7hWk7c4cSZqe10O9#picking)** tab, set the change limit in **Max number of price changes in order items**.
4. Click **Save**.

### How does the picker locate items for picking?

Item location refers to the specific place where each item is stored in inventory, helping streamline the picking process. To enable item location, follow the steps below:

1. In the VTEX Admin, go to **Shipping > Pick and Pack > Settings**, or type `Settings` in the search bar at the top of the page.
2. In the **Items** section, click **General**.
3. Enable the option **Enable item location**.
4. Click **Save**.

## Packing configuration

### What sizes and types of packaging can be used?

The types and sizes of packaging used by the store must be added to Pick and Pack. To add packaging, follow these steps:

1. In the VTEX Admin, go to **Shipping > Pick and Pack > Settings**, or type `Settings` in the search bar at the top of the page.
2. In the **Worksheets** section, click **Packing**.
3. In the **[Packing](/en/tutorial/vtex-pick-and-pack-settings--16cs3e7hWk7c4cSZqe10O9#packing)** tab, click **Packaging types**.
4. Click the **Create packaging type** button and complete the form with the packaging details.
5. Click **Save**.

