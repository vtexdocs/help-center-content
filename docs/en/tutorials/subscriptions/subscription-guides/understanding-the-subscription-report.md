---
title: 'Understanding the subscription report'
id: 3RtHQowB4Vjf6O19YwRLu1
status: PUBLISHED
createdAt: 2025-04-11T15:36:03.548Z
updatedAt: 2025-04-11T20:09:12.975Z
publishedAt: 2025-04-11T20:09:12.975Z
firstPublishedAt: 2025-04-11T15:41:29.370Z
contentType: tutorial
productTeam: Post-purchase
author: 4JJllZ4I71DHhIOaLOE3nz
slugEN: understanding-the-subscription-report
legacySlug: understanding-the-subscription-report
locale: en
subcategoryId: 1rA9wuuskW3PpjvMrhatAM
---

The subscription report is a document in `CSV` format that contains information about subscriptions, such as their creation date, customer email, and active SKU.

You can generate the report using the [Generate 
report](https://developers.vtex.com/docs/api-reference/subscriptions-api-v3?endpoint=post-/api/rns/pvt/reports/-reportName-/documents) endpoint.

The following types of reports are available:
- [Subscriptions with status](#subscriptions-with-status)
- [Subscriptions scheduled between dates](#subscriptions-scheduled-between-dates)
- [Subscriptions updated between dates](#subscriptions-updated-between-dates)
- [Subscriptions created between dates](#subscriptions-created-between-dates)
- [Subscriptions triggered between dates](#subscriptions-triggered-between-dates)

<div class="alert alert-info">
  <p>You can also use the endpoint <a href=https://developers.vtex.com/docs/api-reference/subscriptions-api-v3#get-/api/rns/pvt/reports>List report templates</a> to learn the types of reports you can generate.</p>
</div>

In this article, you’ll learn more about the data returned by each type of subscription report.

## Subscriptions with status
The `subscriptionsWithStatus` report returns subscription data based on the status of the cycle run.

The columns correspond to specific information about the subscription, as described below:

| **Field name** | **Description** |
| :---:  | :--- |
| ID | Subscription ID. |
| Customer Email | Email address of the customer. |
| Customer Id | The ID of the customer. |
| Status | <p> Status of the subscription when the report was created. </p> <p> `TRIGGERED`: A subscription cycle run was triggered. </p> <p> `IN_PROCESS`: The subscription is being processed by the system (temporary status). </p> <p> `FAILURE`: An internal error occurred while running the subscription. </p> <p> `SUCCESS`: The subscription cycle was processed successfully. </p> <p> `EXPIRED`: The subscription wasn't renewed and exceeded the current deadline. </p> <p> `ORDER_ERROR`: The subscription cycle failed due to a _place order_ error. </p> <p> `PAYMENT_ERROR`: The subscription cycle failed due to a payment error. </p> <p> `SKIPPED`: The subscription cycle was skipped; the subscription will run in the next cycle. </p> <p> `SUCCESS_WITH_NO_ORDER`: A subscription cycle was successfully processed, but the associated order has no items. </p> <p> `SUCCESS_WITH_PARTIAL_ORDER`: A subscription cycle was successfully processed and has a partial order associated. </p> <p> `RE_TRIGGERED`: A manual re-run of the subscription cycle was triggered. </p> <p> `SCHEDULE_UPDATED`: The next subscription cycle date was updated. </p> 
| Has Active Items | <p> Indicates whether the subscription has active items. </p> <p> `TRUE`: Has active items. </p> <p> `FALSE`: No active items. </p> 
| Is Skipped | <p> Indicates the subscription cycle will be skipped. </p> <p> `TRUE`: The cycle will be skipped. </p> <p> `FALSE`: The cycle won't be skipped. </p> 
| Next Purchase Date | Date of the next scheduled purchase. |
| Last Purchase Date | Date of the last purchase. |
| Periodicity | Frequency of the subscription. |
| Interval | Subscription interval. |
| Purchase Day | Day of the subscription purchase. |
| AddressId | ID of customer address. |
| AddressType | Type of address. |
| PaymentSystem Name | Payment method used in the subscription. |
| Account Id | ID of the account. |
| Selected Sla | The [Service Level Agreement (SLA)](https://vtex.com/us-en/privacy-and-agreements/agreements/) selected. |
| Cycle | Number that identifies the cycle of the subscription. |
| Created At | Date the subscription was created. |
| Last Update | Date of the last update. |
| Subscriptions Items Count | Number of items in the subscription. |
| Subscriptions Item Id | ID of the subscription item. |
| Subscriptions Item Status | Status of the subscription item. |
| Subscriptions Item Sku Id | SKU of the subscription item. |
| Subscriptions Item PriceAtSubscriptionDate | Item price at subscription time. |
| Subscriptions Item Quantity | Number of items in the subscription. |
| Subscriptions Item Is Skipped | <p> Indicates if the item will be skipped. </p> <p> `TRUE`: The item will be skipped. </p> <p> `FALSE`: The item won't be skipped. </p> 
| Subscriptions Item Cycle | Cycle of the subscription item. |
| Subscriptions Item OriginalOrder | Original order of the subscription item. | 

## Subscriptions scheduled between dates
The `subscriptionsScheduledBetweenDate` report returns data on subscriptions scheduled within a date range.

The columns correspond to specific information about the subscription, as described below:

| **Field name** | **Description** |
| :---:  | :--- |
| ID | Subscription ID. |
| Customer Email | Email address of the customer. |
| Customer Id | The ID of the customer. |
| Status | <p> Status of the subscription when the report was created. </p> <p> `TRIGGERED`: A subscription cycle run was triggered. </p> <p> `IN_PROCESS`: The subscription is being processed by the system (temporary status). </p> <p> `FAILURE`: An internal error occurred while running the subscription. </p> <p> `SUCCESS`: The subscription cycle was processed successfully. </p> <p> `EXPIRED`: The subscription wasn't renewed and exceeded the current deadline. </p> <p> `ORDER_ERROR`: The subscription cycle failed due to a _place order_ error. </p> <p> `PAYMENT_ERROR`: The subscription cycle failed due to a payment error. </p> <p> `SKIPPED`: The subscription cycle was skipped; the subscription will run in the next cycle. </p> <p> `SUCCESS_WITH_NO_ORDER`: A subscription cycle was successfully processed, but the associated order has no items. </p> <p> `SUCCESS_WITH_PARTIAL_ORDER`: A subscription cycle was successfully processed and has a partial order associated. </p> <p> `RE_TRIGGERED`: A manual re-run of the subscription cycle was triggered. </p> <p> `SCHEDULE_UPDATED`: The next subscription cycle date was updated. </p> 
| Has Active Items | <p> Indicates whether the subscription has active items. </p> <p> `TRUE`: Has active items. </p> <p> `FALSE`: No active items. </p> 
| Is Skipped | <p> Indicates the subscription cycle will be skipped. </p> <p> `TRUE`: The cycle will be skipped. </p> <p> `FALSE`: The cycle won't be skipped. </p> 
| Next Purchase Date | Date of the next scheduled purchase. |
| Last Purchase Date | Date of the last purchase. |
| Periodicity | Frequency of the subscription. |
| Interval | Interval between orders. |
| Purchase Day | Day of the subscription purchase. |
| AddressId | ID of the customer address. |
| AddressType | Type of address. |
| PaymentSystem Name | Payment method used in the subscription. |
| Account Id | ID of the account. |
| Selected Sla | The [Service Level Agreement (SLA)](https://vtex.com/br-pt/privacy-and-agreements/agreements/) selected. |
| Cycle | Number that identifies the cycle of the subscription. |
| Created At | Date the subscription was created. |
| Last Update | Date of the last update. |
| Subscriptions Items Count | Number of items in the subscription. |
| Subscriptions Item Id | ID of the subscription item. |
| Subscriptions Item Status | Status of the subscription item. |
| Subscriptions Item Sku Id | SKU of the subscription item. |
| Subscriptions Item PriceAtSubscriptionDate | Item price at subscription time. |
| Subscriptions Item Quantity | Number of items in the subscription. |
| Subscriptions Item Is Skipped | <p> Indicates if the item will be skipped. </p> <p> `TRUE`: The item will be skipped. </p> <p> `FALSE`: The item won't be skipped. </p> 
| Subscriptions Item Cycle | Cycle of the subscription item. |
| Subscriptions Item OriginalOrder | Original order of the subscription item. | 

## Subscriptions updated between dates
The `subscriptionsUpdatedBetweenDate` report returns data on subscriptions updated within a date range.

The columns correspond to specific information about the subscription, as described below:

| **Field name** | **Description** |
| :---:  | :--- |
| ID | Subscription ID. |
| Customer Email | Email address of the customer. |
| Customer Id | The ID of the customer. |
| Status | <p> Status of the subscription when the report was created. </p> <p> `TRIGGERED`: A subscription cycle run was triggered. </p> <p> `IN_PROCESS`: The subscription is being processed by the system (temporary status). </p> <p> `FAILURE`: An internal error occurred while running the subscription. </p> <p> `SUCCESS`: The subscription cycle was processed successfully. </p> <p> `EXPIRED`: The subscription wasn't renewed and exceeded the current deadline. </p> <p> `ORDER_ERROR`: The subscription cycle failed due to a _place order_ error. </p> <p> `PAYMENT_ERROR`: The subscription cycle failed due to a payment error. </p> <p> `SKIPPED`: The subscription cycle was skipped; the subscription will run in the next cycle. </p> <p> `SUCCESS_WITH_NO_ORDER`: The subscription cycle was completed successfully, but no items were in the order. </p> <p> `SUCCESS_WITH_PARTIAL_ORDER`: A subscription cycle was completed successfully with a partial order. </p> <p> `RE_TRIGGERED`: A manual re-run of the subscription cycle was triggered. </p> <p> `SCHEDULE_UPDATED`: The next subscription cycle date was updated. </p> 
| Has Active Items | <p> Indicates whether the subscription has active items. </p> <p> `TRUE`: Has active items. </p> <p> `FALSE`: No active items. </p> 
| Is Skipped | <p> Indicates the subscription cycle will be skipped. </p> <p> `TRUE`: The cycle will be skipped. </p> <p> `FALSE`: The cycle won't be skipped. </p> 
| Next Purchase Date | Date of the next scheduled purchase. |
| Last Purchase Date | Date of the last purchase. |
| Periodicity | Frequency of the subscription. |
| Interval | Interval between orders. |
| Purchase Day | Day of the subscription purchase. |
| AddressId | ID of customer address. |
| AddressType | Type of address. |
| PaymentSystem Name | Payment method used in the subscription. |
| Account Id | ID of the account. |
| Selected Sla | The [Service Level Agreement (SLA)](https://vtex.com/us-en/privacy-and-agreements/agreements/) selected. |
| Cycle | Number that identifies the cycle of the subscription. |
| Created At | Date the subscription was created. |
| Last Update | Date of the last update. |
| Subscriptions Items Count | Number of items in the subscription. |
| Subscriptions Item Id | ID of the subscription item. |
| Subscriptions Item Status | Status of the subscription item. |
| Subscriptions Item Sku Id | SKU of the subscription item. |
| Subscriptions Item PriceAtSubscriptionDate | Item price at subscription time. |
| Subscriptions Item Quantity | Number of items in the subscription. |
| Subscriptions Item Is Skipped | <p> Indicates if the item will be skipped. </p> <p> `TRUE`: The item will be skipped. </p> <p> `FALSE`: The item won't be skipped. </p> 
| Subscriptions Item Cycle | Cycle of the subscription item. |
| Subscriptions Item OriginalOrder | Original order of the subscription item. | 

## Subscriptions created between dates
The `subscriptionsCreatedBetweenDate` report returns data on subscriptions created within a date range.

The columns correspond to specific information about the subscription, as described below:

| **Field name** | **Description** |
| :---:  | :--- |
| ID | Subscription ID. |
| Customer Email | Email address of the customer. |
| Customer Id | The ID of the customer. |
| Status | <p> Status of the subscription when the report was created. </p> <p> `TRIGGERED`: A subscription cycle run was triggered. </p> <p> `IN_PROCESS`: The subscription is being processed by the system (temporary status). </p> <p> `FAILURE`: An internal error occurred while running the subscription. </p> <p> `SUCCESS`: The subscription cycle was processed successfully. </p> <p> `EXPIRED`: The subscription wasn't renewed and exceeded the current deadline. </p> <p> `ORDER_ERROR`: The subscription cycle failed due to a _place order_ error. </p> <p> `PAYMENT_ERROR`: The subscription cycle failed due to a payment error. </p> <p> `SKIPPED`: The subscription cycle was skipped; the subscription will run in the next cycle. </p> <p> `SUCCESS_WITH_NO_ORDER`: A subscription cycle was successfully processed, but the associated order has no items. </p> <p> `SUCCESS_WITH_PARTIAL_ORDER`: A subscription cycle was successfully processed and has a partial order associated. </p> <p> `RE_TRIGGERED`: A manual re-run of the subscription cycle was triggered. </p> <p> `SCHEDULE_UPDATED`: The next subscription cycle date was updated. </p> 
| Has Active Items | <p> Indicates whether the subscription has active items. </p> <p> `TRUE`: Has active items. </p> <p> `FALSE`: No active items. </p> 
| Is Skipped | <p> Indicates the subscription cycle will be skipped. </p> <p> `TRUE`: The cycle will be skipped. </p> <p> `FALSE`: The cycle won't be skipped. </p> 
| Next Purchase Date | Date of the next scheduled purchase. |
| Last Purchase Date | Date of the last purchase. |
| Periodicity | Frequency of the subscription. |
| Interval | Interval between orders. |
| Purchase Day | Day of the subscription purchase. |
| AddressId | ID of customer address. |
| AddressType | Type of address. |
| PaymentSystem Name | Payment method used in the subscription. |
| Account Id | ID of the account. |
| Selected Sla | The [Service Level Agreement (SLA)](https://vtex.com/us-en/privacy-and-agreements/agreements/) selected. |
| Cycle | Number that identifies the cycle of the subscription. |
| Created At | Date the subscription was created. |
| Last Update | Date of the last update. |
| Subscriptions Items Count | Number of items in the subscription. |
| Subscriptions Item Id | ID of the subscription item. |
| Subscriptions Item Status | Status of the subscription item. |
| Subscriptions Item Sku Id | SKU of the subscription item. |
| Subscriptions Item PriceAtSubscriptionDate | Item price at subscription time. |
| Subscriptions Item Quantity | Number of items in the subscription. |
| Subscriptions Item Is Skipped | <p> Indicates if the item will be skipped. </p> <p> `TRUE`: The item will be skipped. </p> <p> `FALSE`: The item won't be skipped. </p> 
| Subscriptions Item Cycle | Cycle of the subscription item. |
| Subscriptions Item OriginalOrder | Original order of the subscription item. | 

## Subscriptions triggered between dates
The `executionsBetweenDate` report returns data on subscriptions executed within a date range.

The columns correspond to specific information about the subscription, as described below:

| **Field name** | **Description** |
| :---:  | :--- |
|  Id | Subscription ID. |
| OrderGroup | ID of the order generated by the report.
| E-mail | Email address of the customer. |
| Customer Id | The ID of the customer. |
| Skus | SKUs of the subscription products. |
| Order | Number of the order. |
| Value | Price of the subscription. |
| cycleCount | Number that identifies the cycle of the subscription. |
| date | Date the subscription was created.
| IsInRetry | <p> Indicates if the execution was the result of a retry. </p> <p> `TRUE`: The execution was the result of a retry. </p> <p>`FALSE`: The execution wasn't the result of a retry. </p> 
| Status | <p> Status of the subscription at the time the report was created. </p> <p> `TRIGGERED`: A subscription cycle run was triggered. </p> <p> `IN_PROCESS`: The subscription is being processed by the system (temporary status). </p> <p> `FAILURE`: An internal error occurred while running the subscription. </p> <p> `SUCCESS`: The subscription cycle was processed successfully. </p> <p> `EXPIRED`: The subscription wasn't renewed and exceeded the current deadline. </p> <p> `ORDER_ERROR`: The subscription cycle failed due to a _place order_ error. </p> <p> `PAYMENT_ERROR`: The subscription cycle failed due to a payment error. </p> <p> `SKIPPED`: The subscription cycle was skipped; the subscription will run in the next cycle. </p> <p> `SUCCESS_WITH_NO_ORDER`: A subscription cycle was successfully processed, but the associated order has no items. </p> <p> `SUCCESS_WITH_PARTIAL_ORDER`: A subscription cycle was successfully processed and has a partial order associated. </p> <p> `RE_TRIGGERED`: A manual re-run of the subscription cycle was triggered. </p> <p> `SCHEDULE_UPDATED`: The next subscription cycle date was updated. </p> 
| messageParsed | Message returned by Checkout during the subscription run. |
| CreatedAt | Date the subscription was created.
| LastUpdate | Date of the last update. |
| ActiveSkus | Active SKUs in the subscription. |

