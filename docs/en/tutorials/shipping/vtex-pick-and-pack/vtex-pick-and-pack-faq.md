---
title: 'VTEX Pick and Pack: FAQ'
createdAt: 2025-05-16T16:11:28.033Z
updatedAt: 2026-10-23T00:00:00.000Z
contentType: tutorial
productTeam: Post-purchase
slugEN: vtex-pick-and-pack-faq
locale: en
hidden: false
---

This guide aims to address the most frequently asked questions about VTEX Pick and Pack. This article is divided into the following sections:

- [General settings](#general-settings)
  - [Is VTEX Pick and Pack enabled by default in my store?](#is-vtex-pick-and-pack-enabled-by-default-in-my-store)
  - [Who can access VTEX Pick and Pack in the VTEX Admin?](#who-can-access-vtex-pick-and-pack-in-the-vtex-admin)
  - [Will all orders from the store go through VTEX Pick and Pack?](#will-all-orders-from-the-store-go-through-vtex-pick-and-pack)
  - [Will pickers handle one order at a time, or multiple orders simultaneously?](#will-pickers-handle-one-order-at-a-time-or-multiple-orders-simultaneously)
- [Picking](#picking)
  - [Can the picker change the order during picking?](#can-the-picker-change-the-order-during-picking)
  - [If the picker can add, replace, or remove items, do these actions require administrator approval?](#if-the-picker-can-add-replace-or-remove-items-do-these-actions-require-administrator-approval)
  - [If order changes are allowed, will there be a threshold on the changes that can be made?](#if-order-changes-are-allowed-will-there-be-a-threshold-on-the-changes-that-can-be-made)
  - [How does the picker locate items for picking?](#how-does-the-picker-locate-items-for-picking)
- [Packing](#packing)
  - [What sizes and types of packaging can be used?](#what-sizes-and-types-of-packaging-can-be-used)
  - [Who prints package labels?](#who-prints-package-labels)
- [Delivery and pickup](#delivery-and-pickup)
  - [How does the customer confirm order pickup in the store?](#how-does-the-customer-confirm-order-pickup-in-the-store)
  - [Can I add new carriers in Last Mile?](#can-i-add-new-carriers-in-last-mile)
  - [Can Last Mile be used without Pick and Pack?](#can-last-mile-be-used-without-pick-and-pack)
- [Integrations](#integrations)
  - [Can the invoicing process be automated with Pick and Pack?](#can-the-invoicing-process-be-automated-with-pick-and-pack)
  - [Can I provide the customer with more details about order handling?](#can-i-provide-the-customer-with-more-details-about-order-handling)

## General settings

### Is VTEX Pick and Pack enabled by default in my store?

No. **VTEX Pick and Pack** isn't activated by default in the VTEX Admin. To use it in your store, contact [VTEX Support](https://support.vtex.com/hc/en-us/), which will activate the feature and guide you through the next configuration steps.

To explore the solution's pages and features before requesting activation, see the [VTEX Pick and Pack](/en/docs/tutorials/vtex-pick-and-pack) article.

### Who can access VTEX Pick and Pack in the VTEX Admin?

Pickers added to the **Users** tab on the **Settings** page have access only to the [Pick and Pack mobile app](/en/docs/tutorials/vtex-pick-and-pack-mobile). Users who monitor the operation in the VTEX Admin depend on [roles](/en/docs/tutorials/roles) and [License Manager resources](/en/docs/tutorials/license-manager-resources), and aren't managed in this tab.

We recommend creating a dedicated role for fulfillment operations and assigning it to the users who handle them. For these users to view the [Insights](/en/docs/tutorials/vtex-pick-and-pack-insights) page, the role must include the **Insights Metrics** resource from the **Insights** product. For more information, see [Accessing VTEX Pick and Pack in the VTEX Admin](/en/docs/tutorials/vtex-pick-and-pack-settings#accessing-vtex-pick-and-pack-in-the-vtex-admin).

### Will all orders from the store go through VTEX Pick and Pack?

No. As a native VTEX solution, VTEX Pick and Pack receives orders directly from the platform, with no external integrations required. However, once it's enabled in your store, only orders that match the configured filters are sent to it. To set these filters, follow the steps below:

1. In the VTEX Admin, go to **Shipping > Pick and Pack > Settings** or type **Settings** in the search bar at the top of the page.
2. Go to **Orders > General**.
3. Complete the available [filters](/en/docs/tutorials/vtex-pick-and-pack-settings#filters).
4. Click `Save`.

### Will pickers handle one order at a time, or multiple orders simultaneously?

You can define whether the worksheet flow is handled one order at a time or multiple orders simultaneously. To configure how orders will be handled, follow these steps:

1. In the VTEX Admin, go to **Shipping > Pick and Pack > Settings** or type **Settings** in the search bar at the top of the page.
2. Go to **Worksheets > General**.
3. Choose the option you want to configure:
   - **Single order:** Individual handling of each order.
   - **Multiple orders:** Handling multiple orders at the same time, more efficiently and conveniently.
4. Click `Save`.

## Picking

### Can the picker change the order during picking?

The picker can add, replace, and reject items in the order, as well as increase item quantities or adjust an item's price. However, you'll need to enable the permissions for the picker to perform these actions. To configure permissions in the [Picking](/en/docs/tutorials/vtex-pick-and-pack-settings#picking) tab, follow these steps:

1. In the VTEX Admin, go to **Shipping > Pick and Pack > Settings** or type **Settings** in the search bar at the top of the page.
2. Go to **Worksheets > Picking**.
3. Select the actions the picker can perform:
   - **Allow item notes**
   - **Ask for confirmation to pick items**
   - **Allow adding items**
   - **Allow item replacements**
   - **Allow item rejections**
   - **Allow item price changes**
   - **Allow item quantity changes**
4. Click `Save`.

### If the picker can add, replace, or remove items, do these actions require administrator approval?

Administrator approval isn't required when updating an order, but it can be enabled in the [Picking](/en/docs/tutorials/vtex-pick-and-pack-settings#picking) tab. To do so, follow these steps:

1. In the VTEX Admin, go to **Shipping > Pick and Pack > Settings** or type **Settings** in the search bar at the top of the page.
2. Go to **Worksheets > Picking**.
3. Activate the **Activate approval flow** option.
4. Click `Save`.

With the approval flow enabled, picker requests that require authorization are displayed in the **Approvals** tab of the [worksheet details](/en/docs/tutorials/vtex-pick-and-pack-worksheets#approvals).

### If order changes are allowed, will there be a threshold on the changes that can be made?

Yes. In the [Picking](/en/docs/tutorials/vtex-pick-and-pack-settings#picking) tab, each type of change has its own percentage threshold, defined on a slider from −100% to 100%, calculated based on the item's original price, the item's original quantity, or the order's original value, depending on the type. The control is only displayed when the corresponding option is activated:

- **Threshold for changes to item prices:** Maximum percentage of variation in an item's price. Displayed when the **Allow item price changes** option is activated.
- **Threshold for changes to quantity of items:** Maximum percentage of variation in the number of units or the weight of the item, as applicable. The same threshold defines how much the picker can increase or decrease the units or weight of the item. Displayed when the **Allow item quantity changes** option is activated.
- **Threshold for total changes to an order:** Percentage of variation allowed in the total order value, which defines the minimum and maximum thresholds for the final amount. The picker can make multiple changes, as long as the total order value stays within these limits. Displayed when the **Limit order total changes** option is activated.

To set a threshold, follow the steps below:

1. In the VTEX Admin, go to **Shipping > Pick and Pack > Settings** or type **Settings** in the search bar at the top of the page.
2. Go to **Worksheets > Picking**.
3. Activate the option corresponding to the threshold you want to apply.
4. Drag the slider to the desired percentage.
5. Click `Save`.

### How does the picker locate items for picking?

Item location refers to the specific place where each item is stored in inventory, helping streamline the picking process. To activate item location, follow the steps below:

1. In the VTEX Admin, go to **Shipping > Pick and Pack > Settings** or type **Settings** in the search bar at the top of the page.
2. Go to **Items > General**.
3. Activate the option **Activate item location**.
4. Click `Save`.

After activating the option, add each SKU's location per warehouse using the [Create bin location](https://developers.vtex.com/docs/api-reference/pick-and-pack-order-changes-api#post-/-skuId-/warehouses/-warehouseId-) endpoint from the Pick and Pack Order Changes API.

## Packing

### What sizes and types of packaging can be used?

The types and sizes of packaging used by the store must be added in the [Packing](/en/docs/tutorials/vtex-pick-and-pack-settings#packing) tab of the **Settings** page. To add packaging, follow these steps:

1. In the VTEX Admin, go to **Shipping > Pick and Pack > Settings** or type **Settings** in the search bar at the top of the page.
2. Go to **Worksheets > Packing > Packaging types**.
3. Click `Create packaging type`.
4. Complete the form with the packaging information, such as name, type, description, code, dimensions, and maximum weight.
5. Click `Save`.

> ℹ️ The available packaging type options are `Box`, `Bag`, `Envelope`, `Tape`, `Paper`, and `Other`.

### Who prints package labels?

Package label printing is done by the picker in the [Pick and Pack mobile app](/en/docs/tutorials/vtex-pick-and-pack-mobile#packing), not by the merchant or the VTEX Admin operator. During packing, the picker accesses the **Packed items** tab, clicks the <i class="fas fa-ellipsis-v"></i> menu of the desired package, and selects `Print labels`.

To make the label available to the picker, activate it in the [Packing](/en/docs/tutorials/vtex-pick-and-pack-settings#packing) tab and define the information to be displayed on it. Follow the steps below:

1. In the VTEX Admin, go to **Shipping > Pick and Pack > Settings** or type **Settings** in the search bar at the top of the page.
2. Go to **Worksheets > Packing > General**.
3. Activate the **Activate packing labels** option.
4. In the **Print** section, select and complete all the information you want to display on the label.
5. Click `Save`.

> ℹ️ The packing label is different from the tracking label, which is generated by Last Mile and downloaded by the merchant in the [service details panel](/en/docs/tutorials/vtex-pick-and-pack-last-mile#viewing-service-details). The tracking label template can't be customized in the VTEX Admin. Through an integration, you can receive a label with the carrier's template.

## Delivery and pickup

### How does the customer confirm order pickup in the store?

For orders with in-store pickup, [Last Mile](/en/docs/tutorials/vtex-pick-and-pack-last-mile#confirming-in-store-pickup) generates a six-digit code that authenticates the delivery to the customer. The flow works as follows:

1. The order is picked and packed, and the pickup service is created.
2. VTEX Pick and Pack sends the customer an email with the pickup code.
3. The customer goes to the store and provides the code.
4. The store operator validates the code in the service and completes the pickup.
5. The service moves to the `Delivered` status, with the confirmation date recorded. Once this happens, invoicing can be triggered automatically, depending on the configured integration.

The email is sent by [Message Center](/en/docs/tutorials/understanding-the-message-center), using a dedicated template for the pickup code. If the customer didn't receive the message, you can [send a new code by email](/en/docs/tutorials/vtex-pick-and-pack-last-mile#sending-a-new-code-by-email) from the service details panel.

### Can I add new carriers in Last Mile?

Yes. To add a new carrier, open a ticket with [VTEX Support](https://support.vtex.com/hc/en-us/) to request credential registration and provide integration details. There's no additional cost for this registration.

### Can Last Mile be used without Pick and Pack?

Currently, you can't use the Last Mile module without Pick and Pack. We're assessing interest in offering Last Mile as a standalone module. To submit your feedback, open a ticket with [VTEX Support](https://support.vtex.com/hc/en-us/).

## Integrations

### Can the invoicing process be automated with Pick and Pack?

Yes. You can use the Pick and Pack [webhook](/en/docs/tutorials/vtex-pick-and-pack-settings#webhook) to identify when the process is complete in the app and integrate it with an existing automation. This automation must be implemented by the merchant.

### Can I provide the customer with more details about order handling?

Yes. The [webhook](/en/docs/tutorials/vtex-pick-and-pack-settings#webhook) returns order status updates during the picking, packing, and delivery stages. When Last Mile is active, the level of detail in delivery information depends on the carrier's system. The merchant can use this data to create notification flows for the customer.

## Learn more

- [VTEX Pick and Pack](/en/docs/tutorials/vtex-pick-and-pack)
- [VTEX Pick and Pack: Settings](/en/docs/tutorials/vtex-pick-and-pack-settings)
- [VTEX Pick and Pack: Worksheets](/en/docs/tutorials/vtex-pick-and-pack-worksheets)
- [VTEX Pick and Pack: Last Mile](/en/docs/tutorials/vtex-pick-and-pack-last-mile)
- [VTEX Pick and Pack Mobile](/en/docs/tutorials/vtex-pick-and-pack-mobile)
