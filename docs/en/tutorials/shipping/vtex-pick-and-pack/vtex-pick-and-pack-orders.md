---
title: 'VTEX Pick and Pack: Orders'
id: 3rGbJlyedHdbWjvZ52p95b
status: PUBLISHED
createdAt: 2023-12-14T17:26:02.135Z
updatedAt: 2026-06-26T00:00:00.000Z
publishedAt: 2024-01-05T17:31:16.218Z
firstPublishedAt: 2023-12-19T15:00:12.093Z
contentType: tutorial
productTeam: Shopping
author: 2o8pvz6z9hvxvhSoKAiZzg
slugEN: vtex-pick-and-pack-orders
legacySlug: vtex-pick-and-pack-orders
locale: en
subcategoryId: 7Kllu6CmeLNV3tYXlCFvOt
---

**Orders** is the page that displays information about orders created and managed by [VTEX Pick and Pack](https://help.vtex.com/docs/tutorials/vtex-pick-and-pack). To access it, in the VTEX Admin, go to **Shipping > Pick and Pack > Orders**. On this page, you can do the following:

- [View orders](#view-orders)
- [Search orders](#search-orders)
- [Filter orders](#filter-order)

![pick-and-pack-pedidos-PT](https://cdn.statically.io/gh/vtexdocs/help-center-content/refs/heads/main/docs/pt/tutorials/envio/vtex-pick-and-pack/vtex-pick-and-pack-pedidos_1.png)

The page displays the following information in a table:

| Table field | Description                                                                                                          |
| ----------- | -------------------------------------------------------------------------------------------------------------------- |
| Status      | Step in the order fulfillment process.                                                               |
| Order ID    | Order identification number. It also indicates the date the order was created.       |
| Invoices    | Order invoice status, which can be **Invoiced** or **Not invoiced**.                                 |
| Items       | Number of order items.                                                                               |
| Shipping    | Shipping method of the order, with possible values **Delivery to customer** and **In-store pickup**. |
| Payment     | Payment method used to place the order.                                                              |
| Facilities  | Indicates the store or distribution center for picking and handling the order.                       |
| Tags        | Tags related to the order, such as UTM or coupons.                                                   |
| Due date    | Delivery or pickup due date.                                                                         |

## Viewing orders
You can optimize order search by using the following tabs:

- **All:** All orders placed.
- **Pending:** Orders that are pending, ready for picking and were picked.
- **To Ship:** Orders awaiting shipping.
- **Delivered:** Orders delivered to the customer via in-store pickup or carrier.
- **Canceled:** Canceled orders.
- **Rejected:** Rejected orders.

You can find more detailed information about each order by clicking the respective order in the table.

![pick-and-pack-pedidos-2-PT](https://cdn.statically.io/gh/vtexdocs/help-center-content/refs/heads/main/docs/pt/tutorials/envio/vtex-pick-and-pack/vtex-pick-and-pack-pedidos_2.png)

By selecting the desired order, you'll see the following information:

- **Order summary**: Displays the ID, sequence, current status, handling time, and estimated shipping date.
- **Items**: Lists items in the order. You can also click **Worksheet** to view more details.
  Notes: Displays notes added to the order.
- **Order flow**: Visually indicates the current step in the fulfillment process within VTEX Pick and Pack, which has its own operational flow, independent of the order workflow in the Order Management System (OMS).
- **Packages**: Displays information about shipping packages, when applicable. In the upper right corner of the package window, click (<i class="fas fa-ellipsis-v" aria-hidden="true"></i>) to perform the following actions:

  - **Print**: Generates the package label for the shipping process.
  - **Set location**: Allows you to link a physical location to the package for logistics control. When you select this option, the package location screen is displayed, where you can:
    - View the **Facility** handling the package.
    - Enter or scan the **location BIN code** in the available field.
    - Click `Scanner` to read the code using a scanner.
    - Click `Save` to save the package location.

## Searching orders

You can search for an order using the search bar. To do so, enter the order ID in the search bar, for example, `SLR-1341470502250-01`.

## Filtering orders

You can refine the search and view orders by using the following filters:

- **Created date:** Select the order created date.
- **Delivery date:** Select the shipping date.
- **Order status:** Select one or more operational status values for the order.
- **Categories:** Select the category that the order items belong to.
- **Payment methods:** Select the payment method used for the order.
- **Shipping strategy:** Select the shipping strategy used for the order.
- **Shipment type:** Select the shipment type used for the order.
- **Facilities**: Select one or more facilities responsible for processing the order.

## Configuring automatic removal of invoiced orders

In the Pick and Pack **Settings** section, you can define how orders that change to Invoiced in the OMS after being downloaded to the app are handled.

With this option enabled, orders that meet the following criteria will be automatically removed from the app:

- Already downloaded to Pick and Pack.
- Not yet processed.
- Changed to **Invoiced** in the OMS before the handling step.

To configure this rule, follow the steps below:

1. In the VTEX Admin, go to **Shipping > Pick and Pack > Settings**, or type **Settings** in the search bar at the top of the page.
2. In the **Orders** tab, click `General`.
3. In the **If an order becomes Invoiced in the OMS** section, enable the **Remove from Pick and Pack** option.
4. Click `Save`.

![pick-and-pack-pedidos-3-PT](https://cdn.statically.io/gh/vtexdocs/help-center-content/refs/heads/main/docs/pt/tutorials/envio/vtex-pick-and-pack/vtex-pick-and-pack-pedidos_3.png)