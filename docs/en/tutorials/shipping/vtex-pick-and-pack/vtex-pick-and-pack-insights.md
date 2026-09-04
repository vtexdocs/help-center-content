---
title: 'VTEX Pick and Pack: Insights'
createdAt: 2024-01-05T17:27:08.558Z
updatedAt: 2026-08-21T00:00:00.000Z
contentType: tutorial
productTeam: Post-purchase
slugEN: vtex-pick-and-pack-insights
locale: en
hidden: false
---

**Insights** is the VTEX Admin page that displays information about your store performance regarding VTEX Pick and Pack. In the VTEX Admin, go to **Shipping > Pick and Pack > Insights**.

The page is organized into the following tabs:

- [General](#general)
- [Items](#items)

## General

The **General** tab displays the **Orders** and **Worksheets** charts in a single panel, along with cards showing processing times and performance indicators for your operation. All data considers the selected date range and units, defined by the date selector and the **Change facility** option. In the charts, the **Last** and **Current** options allow you to compare different periods.

![pick-pack-insights-en](https://cdn.statically.io/gh/vtexdocs/help-center-content/refs/heads/main/docs/en/tutorials/shipping/vtex-pick-and-pack/vtex-pick-and-pack-insights_1.png)

The **Orders** chart displays the total number of orders for the selected period, and the **Worksheets** chart displays the total number of [worksheets](https://help.vtex.com/docs/tutorials/vtex-pick-and-pack-worksheets) created in the same period.

### Processing times

Processing times indicate the duration of each step in the fulfillment process, measured in days, hours, or minutes:

|          Indicator          |                                 What it measures                                 |                                             How it's calculated                                             |
| :-------------------------: | :------------------------------------------------------------------------------: | :---------------------------------------------------------------------------------------------------------: |
|     **Order cycle time**    |     Time between order creation and delivery to the customer.    |     Σ (date in `Delivered` − date in `Ready for handling`) / total orders considered     |
|       **Picking time**      |                  Time required to pick an order.                 |  Σ (date in `Ready for packing` − date in `Ready for picking`) / total orders considered |
|       **Packing time**      |                  Time required to pack an order.                 | Σ (date in `Preparing shipping` − date in `Ready for packing`) / total orders considered |
|      **Shipping time**      |                  Time required to ship an order.                 |     Σ (date in `Delivered` − date in `Preparing shipping`) / total orders considered     |
| **Average processing time** | Time between the start of picking and the completion of packing. | Σ (date in `Preparing shipping` − date in `Ready for picking`) / total orders considered |

> ⚠️ The **Order cycle time** and **Shipping time** indicators are only calculated if your operation uses [VTEX Pick and Pack Last Mile](https://help.vtex.com/docs/tutorials/vtex-pick-and-pack-last-mile). Without this module enabled in your store, VTEX doesn't receive the order delivery confirmation, and these indicators display an error.
>
> ℹ️ For time indicators, only orders that have gone through both considered statuses are included in the calculation. See the description of each status in [Order flow and status](https://help.vtex.com/docs/tutorials/order-flow-and-status).

### Performance indicators

Performance indicators evaluate the results of orders processed in the operation:

|                   Indicator                   |                                           What it measures                                          |                                      How it's calculated                                      |                                                                                                         Scope                                                                                                        |
| :-------------------------------------------: | :-------------------------------------------------------------------------------------------------: | :-------------------------------------------------------------------------------------------: | :------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------: |
|             **Deadline accuracy**             | Orders delivered within the estimated deadline, considering the order created date. |          (orders delivered on time / total orders delivered) x 100         | Orders created during the selected period are included in the calculation, even if delivered after it. Compares the estimated deadline with the delivery date recorded in the order. |
|              **On-time shipping**             |     Orders delivered within the estimated target, considering the delivery date.    |          (orders delivered on time / total orders delivered) x 100         |  Orders delivered during the selected period are included in the calculation, even if created before it. Compares the estimated target with the exact moment of the delivery event.  |
| **OTIF (On-Time in Full)** |                Orders delivered on time and in the correct quantity.                |             (perfect orders / total orders in the period) x 100            |                                                               The denominator considers all orders in the period, regardless of status.                                                              |
|               **Accuracy rate**               |            Orders processed with the correct items and no discrepancies.            | (orders processed without replacements or rejections / total orders) x 100 |                                                                                                           -                                                                                                          |
|              **Fulfillment rate**             |              Share of received orders that were successfully fulfilled.             | (orders delivered without replacements or rejections / total orders) x 100 |                                                                                                           -                                                                                                          |
|               **Backorder rate**              |           Orders not fulfilled immediately due to insufficient inventory.           | (orders with items rejected due to lack of inventory / total orders) x 100 |                                                            Considers items rejected due to lack of inventory, regardless of order status.                                                            |
|                **Return rate**                |                    Share of processed orders that were returned.                    |                   (returned orders / total orders) x 100                   |                                                                                                           -                                                                                                          |
|                 **Pick rate**                 |                  Volume of items picked per hour in the operation.                  |                               total items picked / hours elapsed                              |                                                                                                           -                                                                                                          |
|                 **Pack rate**                 |                  Volume of items packed per hour in the operation.                  |                               total items packed / hours elapsed                              |                                                                                                           -                                                                                                          |

> ⚠️ The **Deadline accuracy**, **On-time delivery**, and **OTIF** indicators are only calculated if your operation uses [VTEX Pick and Pack Last Mile](https://help.vtex.com/docs/tutorials/vtex-pick-and-pack-last-mile). Without this module enabled in your store, VTEX doesn't receive the order delivery confirmation, and these indicators display an error.
>
> ℹ️ The OTIF denominator considers all orders in the period, including those still being processed, canceled, or rejected. Therefore, orders that aren't yet in the Delivered status lower the rate. Insights uses the order status on VTEX, which can be updated to Delivered by different systems and flows, such as the [Last Mile](https://help.vtex.com/docs/tutorials/vtex-pick-and-pack-last-mile) module.
>
> ℹ️ The **Backorder rate** only considers rejections whose reason includes the word "missing". To ensure the indicator reflects your operation, configure the rejection reason for lack of inventory using this term.

## Items

The **Items** tab displays the metrics for items processed in VTEX Pick and Pack over the period for the selected units.

![pick-pack-insights-2-pt](https://cdn.statically.io/gh/vtexdocs/help-center-content/refs/heads/main/docs/pt/tutorials/envio/vtex-pick-and-pack/vtex-pick-and-pack-insights_2.png)

The following indicators are available:

- **Top 10 handled items**: Items with the highest number of prepared units, orders, and service orders in the period.
- **Handled Distribution in**: Distribution of handled items based on the selected specification.
- **Top rejected items**: Items with the highest number of rejections or removals during the picking or packing processes in the period.
- **Rejection reasons**: Reasons why items were rejected or removed during order fulfillment.
- **Replacement reasons**: Reasons why items were replaced by others during order fulfillment.
- **Top fulfillment categories**: Catalog categories with the highest order fulfillment rate in the period.
- **Used categories**: Catalog categories to which items are associated.
- **Picked items**: Total items picked for order fulfillment in the period, compared to the previous period.
- **Packed items**: Total items included in packages in the period, compared to the previous period.
- **Transferred items**: Total items transferred between locations or warehouses in the period.
- **Packages**: Distribution of catalog items by package type.
- **Packages created**: Total packages created in the period, compared to the previous period.
- **Items per package**: Average items included per package in the period, compared to the previous period.
- **Packing efficiency**: Indicator of package utilization relative to available capacity.
