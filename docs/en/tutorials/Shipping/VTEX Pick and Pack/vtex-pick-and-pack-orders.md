---
title: 'VTEX Pick and Pack: Orders'
id: 3rGbJlyedHdbWjvZ52p95b
status: PUBLISHED
createdAt: 2023-12-14T17:26:02.135Z
updatedAt: 2024-01-05T17:31:16.218Z
publishedAt: 2024-01-05T17:31:16.218Z
firstPublishedAt: 2023-12-19T15:00:12.093Z
contentType: tutorial
productTeam: Shopping
author: 2o8pvz6z9hvxvhSoKAiZzg
slugEN: vtex-pick-and-pack-orders
locale: en
legacySlug: vtex-pick-and-pack-orders
subcategoryId: 7Kllu6CmeLNV3tYXlCFvOt
---

<div class = "alert alert-info">
This feature is in closed beta, so only selected customers can access it now. If you want to implement it in the future, please complete our <a href="https://vtex.com/us-en/contact/">form</a> apontaby entering the product name in the <code>Comments</code> field.
</div>

**Orders** is a VTEX Admin page that displays information on orders placed and managed by VTEX Pick and Pack.

This page allows you to:

- [View orders](#viewing-orders)
- [Search for orders](#searching-for-an-order)
- [Filter orders](#filtering-orders)
- [Export orders](#exporting-orders)

![pick-and-pack-pedidos-EN](https://raw.githubusercontent.com/vtexdocs/help-center-content/refs/heads/main/docs/en/tutorials/Shipping/VTEX%20Pick%20and%20Pack/vtex-pick-and-pack-orders_1.png)

The page displays the following information in a table:

| Table field | Description                                                                    |
| ----------- | ------------------------------------------------------------------------------ |
| Order ID    | Order identification number. It also indicates the date the order was created. |
| Invoices    | Order invoice status, which can be **Invoiced** or **Not Invoiced**.                   |
| Items       | Number of order items.                                                         |
| Shipping    | Type of shipping, including **Delivery To Customer** and **In-store pickup**.          |
| Payment     | Payment method used to place the order.                                        |
| Tags        | Tags related to the order, such as UTM or coupons.                             |
| Due Date    | Delivery or pickup due date.                                                   |
| Status      | Step in the order fulfillment process.                                         |

## Viewing orders
You can optimize order search by using the following tabs:

- **All:** All orders placed.
- **Pending:** Orders that are pending, ready for picking and were picked.
- **To Ship:** Orders awaiting shipping.
- **Delivered:** Orders delivered to the customer via in-store pickup or carrier.
- **Canceled:** Canceled orders.
- **Rejected:** Rejected orders.

You can also find more detailed information about each order by clicking the respective order in the table.

![pick-and-pack-pedidos-2-EN](https://raw.githubusercontent.com/vtexdocs/help-center-content/refs/heads/main/docs/en/tutorials/Shipping/VTEX%20Pick%20and%20Pack/vtex-pick-and-pack-orders_2.png)

By selecting the desired order, you will see the following information:

- **Items:** The list of items in the order. You can search for an item by entering its SKU ID or name in the search bar. You can also click the item to view more details about it.
- **Order Notes:** Notes added by the merchant.
- **Shipping Information:** Shipping information, including the shipping status.
- **Payment Information:** Information related to the order payment.
- **Additional Information:** Extra information related to the order.
- **Logs:** Timeline with the order's update history.

## Searching for an order

You can search for an order by using the search bar. To do so, enter the order ID in the search bar, for example: `SLR-1341470502250-01`. 

## Filtering orders

You can refine the search and view orders by selecting the **Filter** option. Filter the orders by:

- **Created Data:** Select the order created date.
- **Delivery Date:** Select the order delivery date.
- **Categories:** Select the category from order items.
- **Payment Methods:** Select the payment method used for the order.
- **Shipping Strategy:** Select the shipping strategy used for the order.
- **Shipping Type:** Select the type of shipping chosen for the order.

Click `Clear All` to remove the selected filters.

## Exporting orders

You can export orders by following the steps below:

1. Click `Export`.
2. Select the information you want to export: `Package Report` or `Order Report`.
    * For the `Package Report`, select the date range you want to export, the shipping type, and the shipping method.
![pick-and-pack-pedidos-3-EN](https://raw.githubusercontent.com/vtexdocs/help-center-content/refs/heads/main/docs/en/tutorials/Shipping/VTEX%20Pick%20and%20Pack/vtex-pick-and-pack-orders_3.png)
3.  Click `Export`.
