---
title: 'How the reservation works'
id: tutorials_92
status: PUBLISHED
createdAt: 2017-04-27T22:19:56.753Z
updatedAt: 2024-09-03T17:29:38.830Z
publishedAt: 2024-09-03T17:29:38.830Z
firstPublishedAt: 2017-04-27T23:00:42.751Z
contentType: tutorial
productTeam: Post-purchase
author: 30TBnJ838LXSZvdJFlcB8H
slug: how-does-reservation-work
locale: en
legacySlug: how-does-reservation-work, analyze-a-products-reservations
subcategoryId: 3PQwnyOcNyYgawy06oe6gE
---

Reservation is a VTEX solution that prevents the same item from being sold more than once. After a purchase is completed, the purchased item is subtracted from the available inventory and its status is changed to **Reserved**.

>ℹ️ On the VTEX platform, warehouse refers to the physical location where items are stored. To identify at which warehouse items will be picked up by the carriers, you must add the warehouses to the platform. To learn more, please refer to the article [Warehouses.](https://help.vtex.com/en/tutorial/warehouse--6oIxvsVDTtGpO7y6zwhGpb)
> <p>Inventory is a list of the items your store has in stock. You can add and track the available items in your store on the Inventory management page. To learn more, please refer to the article [Inventory management](https://help.vtex.com/en/tutorial/managing-stock-items--tutorials_139).

After an item is sold, it goes through the following statuses in your store's inventory:

1. **[Authorized reservation](https://help.vtex.com/en/tutorial/how-does-reservation-work--tutorials_92#authorized-reservation)**: after the order is placed.
2. **[Confirmed reservation](https://help.vtex.com/en/tutorial/how-does-reservation-work--tutorials_92#confirmed-reservation):** after payment is approved.
3. **[Acknowledged reservation](https://help.vtex.com/en/tutorial/how-does-reservation-work--tutorials_92#acknowledged-reservation):** when the order status changes to **Handling shipping** in **Orders** module.
4. **[Removal from inventory](https://help.vtex.com/en/tutorial/how-does-reservation-work--tutorials_92#removal-from-inventoryy):** when the order is in transit.

You can track the reservation status in the VTEX Admin, [as described at the end of this article](https://help.vtex.com/en/tutorial/how-does-reservation-work--tutorials_92#how-to-track-reservation-status).

>⚠️ Adding products to the cart does not generate a reservation or priority. The Authorized reservation status is only displayed after the order is placed by the customer.

## Authorized reservation

After the order is placed by the customer, the purchased item will have the **Authorized reservation** status in your store's inventory. This status indicates internally that the inventory unit is reserved and cannot be sold again. At this stage, the item has not yet left the warehouse, and payment has not yet been approved.

The item remains with this status for a certain time, and if payment is not confirmed, it becomes available for sale again. The reservation expiration period is calculated as follows:

_Payment expiration period + inventory reservation period_

- **Payment expiration period:** the time period (in days) in which the payment must be made. You can configure this period in the **[Payments](https://help.vtex.com/en/tracks/pagamentos--6GAS7ZzGAm7AGoEAwDbwJG/kdPbEIWf8Xq8tESQvViMB)** module for payments with boleto (Brazilian offline payment method) or [notes payable](https://help.vtex.com/en/tutorial/setting-up-payments-with-notes-payable--5pW7avTwtyQcMu4uiW8quQ#notes-payable-setup). For other payment methods, such as credit card and wallet, no time limit for payment expiration can be specified. The payment flow starts right after checkout, and the payment can be approved or denied in different time periods, depending on the selected payment method.
- **Inventory reservation period:** is set automatically, following the rules below.
    - **four calendar days:** when the payment is due on a Sunday, Monday or Tuesday.
    - **five calendar days:** when the payment is due on a Wednesday, Thursday or Friday.
    - **six calendar days:** when the payment is due on a Saturday.

>❗ Incomplete orders can have a reservation period of 11 calendar days. To learn more, please refer to the article [How incomplete orders work.](https://help.vtex.com/en/tutorial/understanding-incomplete-orders--tutorials_294)

For an external marketplace, if the reservation period is sent by the `lockTTL` field, the reservation will not be calculated by VTEX platform but determined by the period in the field. This can be done using the [Place order](https://developers.vtex.com/docs/api-reference/checkout-api#put-/api/checkout/pub/orders) endpoint.

## Confirmed reservation

The status of the item changes to **Confirmed reservation** after the order payment is approved, which means that the reservation will no longer be subject to the expiration date.

If the order is canceled, the reservation will also be canceled and the item will be displayed as available in stock again.

## Acknowledged reservation

The **Acknowledged reservation** status occurs when the status of the order that generated the reservation changes from **Ready for handling** to **Handling shipping** in the **Order management** module, which means that the item has already been handled. At this stage, the item no longer exists in physical inventory, as it is with the carrier.

The VTEX platform does not subtract items from the inventory automatically. Sold items will remain with the **Acknowledged reservation** status until the retailer or ERP [updates the number of items in the inventory](#removal-from-inventory).

## Removal from inventory

Removing a unit from inventory updates the quantity of items available for sale. Only the retailer or the ERP can do this, in the [Inventory management](https://help.vtex.com/en/tutorial/gerenciar-itens-em-estoque--tutorials_139) module or via the [inventory update API](https://developers.vtex.com/docs/api-reference/logistics-api#put-/api/logistics/pvt/inventory/skus/-skuId-/warehouses/-warehouseId-).

VTEX does not update the quantity of items that a SKU has from the inventory update history.

Things to keep in mind when removing a unit from inventory:

- To remove a unit from inventory, you must update the total value of items in your inventory, always taking into account the physical stock available for sale.
- When the store updates the item quantity of a SKU, the reservations recognized for that particular SKU are updated to zero. 
- Therefore, it is important to pay attention to the timing of the inventory update. The reservations of orders with reserved SKUs can be dismissed if you update the inventory after the order has been handled (after the order changed to `Start handling` status). This happens because VTEX doesn't have control over the items handled by the store.  We recommended updating the item quantity after the order is invoiced.

### Example

A store's inventory holds three units of an item. A customer makes a purchase, and after the order is completed, one unit of the item changes to reserved status. From that moment, there are two available items and one reserved. After the payment is confirmed, the status of the item changes to **Confirmed reservation**. Once the handling has been initiated, the order appears as **Acknowledged reservation**.

When the retailer or the ERP updates the quantity of that item in the inventory, removing the sold quantity (updating it to two units), the platform updates the quantity of available items. Thus, this may be interpreted as a removal from inventory. Consequently, only two units of the item remain in the platform's inventory and no reserved units.

>❗ By confirming the order handling, the seller takes responsibility for reserving the order items. From that moment on, if there are any updates in the inventory, the VTEX platform dismisses these SKUs' reservation. Therefore, we recommended updating the SKU inventory for a specific order only after the order has been invoiced. By doing so, you avoid inventory discrepancies in the [integration with your store's backoffice](https://developers.vtex.com/vtex-rest-api/docs/erp-integration-guide).

## How to track reservation status

1. In the VTEX Admin, go to **Catalog > Inventory > Inventory Management**, or type **Inventory Management** in the search bar at the top of the page.
2. A list of the items in the store will be displayed. Choose the item you would like to view.
3. In the `Reserved` column, click the blue number. If there is no number in blue in this column, it means there are no reserved units for this item.
4. A new screen will show the reserved items of the same SKU. In the `Status` column, check the status of the reservation.

As explained above, removal from inventory is a consequence of the retailer updating the inventory. Therefore, it is not possible to view this status on the platform. It is only possible to view the number of items available for sale and the movement of items in the [Inventory Management](https://help.vtex.com/en/tutorial/managing-stock-items--tutorials_139) page.

>ℹ️ All the statuses described here are internal and exclusive to VTEX for item sales control.
> <p>The reservation status is a consequence of the order status. Some changes depend on buyers' actions, and others depend on manual or ERP updates.

