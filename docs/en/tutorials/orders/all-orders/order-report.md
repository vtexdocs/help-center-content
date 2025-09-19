---
title: 'Order report'
id: 31m1ewsmsEe0WS4So2aGMY
status: PUBLISHED
createdAt: 2019-01-24T20:45:42.311Z
updatedAt: 2024-08-06T15:12:56.223Z
publishedAt: 2024-08-06T15:12:56.223Z
firstPublishedAt: 2019-01-24T22:03:18.967Z
contentType: tutorial
productTeam: Post-purchase
author: 1malnhMX0vPThsaJaZMYm2
slugEN: order-report
legacySlug: orders-worksheet
locale: en
subcategoryId: 2t00bBkcAwIkgSCGKsMOwY
---

When you export an order report on the [All Orders](/en/tutorial/todos-os-pedidos--2QTduKHAJMFIZ3BAsi6Pi) page, the system generates a report in `.csv` format containing details about the orders placed in your store.

Each row in the spreadsheet refers to a [SKU](/en/tutorial/o-que-e-um-sku--1K75s4RXAQyOuGUYKMM68u). For example, if an order contains 3 SKUs, it will be listed in 3 rows of the report, each dedicated to data of one SKU.

> ℹ️ The order report link is available for download for six hours.

Each column corresponds to specific information, as described below.

*    **Origin**: indicates if the order comes from a [marketplace or fulfillment](/en/tutorial/estrategias-de-marketplace-na-vtex--tutorials_402).
*    **Order**: the order ID, which appears on the order attributes page, in the Orders management module.
*    **Sequence**: numeric sequence of the order transaction.
*    **Creation Date**: date and time when the customer placed the order.
*    **Client Name**: first name of the customer who placed the order.
*    **Client Last Name**: the surname of the customer who placed the order.
*    **Client Document**: Taxpayer Registration Number of the customer who placed the order.
*    **Email**: email of the customer who placed the order.
*    **Phone**: phone number of the customer who placed the order.
*    **UF**: state, province or region of the customer who placed the order.
*    **City**: city of the customer who placed the order.
*    **Address Identification**: delivery address ID.
*    **Address Type**: type of delivery address (residential or pickup).
*    **Receiver Name**: name of the person who will receive the order.
*    **Street**: delivery address street name. 
*   **Number**: delivery address number.
*   **Complement**: additional info about the delivery address.
*   **Neighborhood**: delivery address neighborhood.
*   **Reference**: reference for the delivery address.
*    **Postal Code:** ZIP code of the delivery address.
*   **SLA Type**: type of delivery (regular, store pickup, fast delivery).
*    **Courier**: carrier responsible for the delivery.
*    **Estimate Delivery Date**: the date the order is expected to be delivered.
*    **Delivery Deadline**: total time to deliver the order to the customer in business days (5bd = 5 business days).
*    **Status**: order status when the spreadsheet was exported.
*    **Last Change Date**: last date and time when the order status changed.
*    **UtmMedium**: utm_medium of the order, if any.
*    **UtmSource**: utm_source of the order, if any.
*    **UtmCampaign**: utm_campaign of the order, if any.
*    **Coupon**: order coupon ID, if any.
*    **Payment System Name**: payment method used for the purchase.
*    **Installments**: number of installments in which the order was paid.
*    **Payment Value**: the order price paid by the customer, with discounts and promotions applied.
*    **Quantity_SKU**: number of items of the same SKU.
*    **ID_SKU**: SKU ID.
*    **Category Ids Sku**: IDs of the categories in which the SKU is included. This information is organized according to the department/category/subcategory tree. For example, if the value is /1000003/1000016/, it means that the SKU is included in the category 1000016, which is part of the department 1000003.
*    **Reference Code**: the SKU reference code.
*    **SKU Name**: name of the SKU as it appears in the catalog.
*    **SKU Value**: the price added for the SKU.
*    **SKU Selling Price**: price at which the SKU was actually sold, with discounts and promotions applied.
*    **SKU Total Price**: total value of the SKU in the order, considering all items of the SKU.
*    **SKU Path**: URL where the SKU is stored in the VTEX system.
*    **Item Attachments**: attachments to the SKU.
*    **List Id**: ID of the list that the SKU is in, if any.
*    **List Type Name**: name of the list type that the SKU is in, if any.
*    **Service (Price / Selling Price)**: service linked to the SKU in the order, if any.
*    **Shipping List Price**: shipping cost per SKU.
*    **Shipping Value**: shipping cost per SKU actually applied to the order.
*    **Total Value**: total price of the order. Warning: it refers to the total price of the order, not the SKU price. If there are other SKUs in the same order, their prices are also considered in that total.
*    **Discounts Totals:** total amount of discounts applied to the order.
*    **Discounts Names**: promotions applied to the order.
*    **Call Center Email**: email of the telesales operator who placed the order, if applicable.
*    **Call Center Code**: ID of the telesales operator who placed the order, if applicable.
*    **Tracking Number**: unique code assigned to the order package, which allows you to track it.
*    **Host**: host who received the order, configured in License Manager.
*    **GiftRegistry ID**: Gift card ID of the order, if any.
*    **Seller Name**: name of the seller of the order.
*    **Status TimeLine**: timeline that displays the order statuses, from the order creation to the moment of exporting the spreadsheet.
*    **Note**: note included in the order by the customer, if any.
*    **UtmiPart**: the UTM utmi_pc for tracking the website's internal traffic. For example, to track the origin of a given click on a banner in the store.
*    **UtmiCampaign**: the UTM utmi_cp for tracking the website's internal traffic. For example, to track the origin of a given click on a banner in the store.
*    **UtmiPage**: the UTM utmi_p for tracking the website's internal traffic. For example, to track the origin of a given click on a banner in the store.
*    **Seller Order Id**: the order ID on the seller, in case the sale was made through a marketplace.
*   **Acquirer**: acquirer involved in the transaction.
*   **Authorization Id**: authorization ID.
*    **TID**: [transaction ID](/en/tutorial/como-achar-nsu-e-tid-do-pedido--frequentlyAskedQuestions_477) of the order.
*    **NSU:** order's [unique number sequence](/en/tutorial/como-achar-nsu-e-tid-do-pedido--frequentlyAskedQuestions_477)
*    **Card First Digits**: the first six digits of the card used to make the purchase.
*    **Card Last Digits**: the last four digits of the card used to make the purchase.
*    **Payment Approved By**: email of the person that approved the payment (applicable when the approval was made manually).
*    **Cancelled By**: email of the user who requested the order cancellation.
*    **Cancellation Reason**: corresponds to the `cancelReason` field in the [Orders API](https://developers.vtex.com/docs/api-reference/orders-api#post-/api/oms/pvt/orders/-orderId-/cancel). This column contains only null values. Please refer to the **Cancellation Data** column for more information about the cancellation.
*    **Gift Card Name**: name of the gift card applied to the order, if any.
*    **Gift Card Caption**: description of the gift card, if any.
*    **Authorized Date**: date and time when the order transaction was authorized.
*    **Corporate Name**: legal business name, in case the order was placed by a company.
*    **Corporate Document**: company registration number, in case the order was placed by a company.
*    **TransactionId**: transaction ID.
*    **PaymentId**: payment ID.
*    **SalesChannel**: ID of the applicable trade policy.
*    **marketingTags**: field that can be used by the store system to track different marketing-related activities. The VTEX recurrence system populates this field with the vtexrecurrence value.
*    **Delivered**: indicates if the order has already been delivered (true) or not (false). This applies to stores that send this information to the VTEX system.
*    **SKU RewardValue**: points for that SKU in the store's reward program.
*    **Is Marketplace certified:** indicates if the order was placed through a certified marketplace (true) or not (false).
*    **Is checked in:** indicates if the order was placed in a physical store through VTEX Sales App (true) or not (false).
*    **Currency Code:** the three-letter ISO code assigned to the currency in which the sale was made (for example, BRL or USD).
*    **Taxes:** the sum of the values defined as Tax and CustomTax, the taxes applied to the SKU. If those values do not exist, the column will be empty.
*    **Invoice Numbers:** the order's invoice number.
*    **Country:** country in which the order was placed.
*    **Input Invoices Numbers:** number of an invoice of Output type, which means that it refers to a purchase.
*    **Output Invoices Numbers:** number of an invoice of Input type, which means that it refers to a return.
*    **Status raw value (temporary):** the raw status value of an order. For example, the status of an order can be displayed on the interface as `Handling` while in this field it would be `handling`.
*   **Cancellation Data**: the reason given by the end-customer for canceling the order, as shown in the `Reason` field of the `cancellationData` object in the [Orders API](https://developers.vtex.com/docs/api-reference/orders-api#post-/api/oms/pvt/orders/-orderId-/cancel). If the user does not fill in this field when canceling the order, this column will be empty in the report.
