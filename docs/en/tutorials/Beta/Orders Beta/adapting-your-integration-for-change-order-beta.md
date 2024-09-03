---
title: 'Adapting your integration for Change order (Beta)'
id: 6kGQWs0IvpwIZoyeoLMjlp
status: PUBLISHED
createdAt: 2024-06-03T18:54:30.094Z
updatedAt: 2024-07-09T17:18:19.900Z
publishedAt: 2024-07-09T17:18:19.900Z
firstPublishedAt: 2024-06-03T20:02:10.248Z
contentType: tutorial
productTeam: Post-purchase
author: 5l9ZQjiivHzkEVjafL4O6v
slug: adapting-your-integration-for-change-order-beta
locale: en
legacySlug: adapting-your-integration-for-change-order-beta
subcategoryId: 3LQ1Tl0u4frEOd45BkjFAm
---

To evolve the VTEX platform for order changes, we are launching [Change order (Beta)](https://help.vtex.com/en/tutorial/como-funciona-a-alterar-pedido-beta--56TO0bOFXsfmpc7YZ3wIUZ), a more complete and flexible solution that provides a [new experience in the VTEX Admin](https://help.vtex.com/en/tutorial/como-alterar-pedidos-beta--7btlG91rb6sHpW1dkd2kBw).

After interactions between our engineering team, clients, and partners who have joined the beta version, we created this content with the best implementation practices and frequently asked questions. The goal is for future clients and partners to have this support material when they start using **Change order (Beta)**.

The content is organized as follows:

- [Adapting to different use cases](#adapting-to-different-use-cases)
- [Changes in the request body](#changes-in-the-request-body)
- [Requests with errors and failures](#requests-with-errors-and-failures)
- [Frequently Asked Questions (FAQ)](#frequently-asked-questions-faq)

## Adapting to different use cases

The following sections outline the main use cases for **Change order (Beta)** and their recommendations.

### Communication with customers via transactional email

**Change order (Beta)** uses new templates for [transactional emails](https://help.vtex.com/en/tutorial/templates-de-emails-transacionais--3g2S2kqBOoSGcCaqMYK2my) (Message Center) to cover the solution's innovative features.

To customize an email template in the VTEX Admin, copy and paste the link below into your browser, replacing `{accountName}` with your store's [account name](https://help.vtex.com/en/tutorial/o-que-e-account-name--i0mIGLcg3QyEy8OCicEoC), and then click `Enter`:

`https://{accountName}.myvtex.com/admin/message-center/#/templates/vtexcommerce-order-changed-v2`

### Managing order changes through the VTEX Admin

For stores using the current version to change orders through the VTEX Admin, the updated interfaces will be immediately available for you to use **Change order (Beta)** once the VTEX team has installed the new solution. This includes new management features and communication tools for [My Account](https://help.vtex.com/en/tutorial/como-funciona-a-minha-conta--2BQ3GiqhqGJTXsWVuio3Xh#pedidos) and [transactional email templates](https://help.vtex.com/en/tutorial/templates-de-emails-transacionais--3g2S2kqBOoSGcCaqMYK2my).

### Managing order changes via API

For stores that use our APIs, the implementation in the integration must comply with the new feature architecture.

In **Change order (Beta),** the [Create order change](https://developers.vtex.com/docs/api-reference/orders-api#patch-/api/order-system/orders/-changeOrderId-/changes) endpoint works asynchronously, and the [user](https://help.vtex.com/en/tutorial/gerenciando-usuarios--tutorials_512) or integration that makes the request receives a `requestId` from the platform, which is a unique identifier to track the order change operation. This identifier will later be used in some of the endpoints. All the **Change order (Beta)** endpoints are:

* [Create order change](https://developers.vtex.com/docs/api-reference/orders-api#patch-/api/order-system/orders/-changeOrderId-/changes)
* [Preview order change](https://developers.vtex.com/docs/api-reference/orders-api#post-/api/order-system/orders/-changeOrderId-/changes/preview)
* [Get order change details](https://developers.vtex.com/docs/api-reference/orders-api#get-/api/order-system/orders/-changeOrderId-/changes/-changeRequestId-)
* [Get order change history](https://developers.vtex.com/docs/api-reference/orders-api#get-/api/order-system/orders/-changeOrderId-/changes)
* [Retry order change](https://developers.vtex.com/docs/api-reference/orders-api#post-/api/order-system/orders/-changeOrderId-/changes/-changeRequestId-/retry)
* [Cancel order change](https://developers.vtex.com/docs/api-reference/orders-api#post-/api/order-system/orders/-changeOrderId-/changes/-changeRequestId-/cancel)

After changing the order using the [Create order change](https://developers.vtex.com/docs/api-reference/orders-api#patch-/api/order-system/orders/-changeOrderId-/changes) endpoint, for new requests to the **Change order (Beta)** endpoints, you have the following options for the integrator:

* **Polling:** Low complexity.
* **Preview:** Medium complexity.

The table below describes each one:

| **Flow type** | **How it works** |
| :---: | :--- |
| **Polling**<p>Low complexity</p> | <p>After the change order operation, a unique code, the `requestId`, is generated to identify the order change. You can use it to follow the details of the request through the <a href="https://developers.vtex.com/docs/api-reference/orders-api#get-/api/order-system/orders/-changeOrderId-/changes/-changeRequestId-">Get change details</a> endpoint. In this endpoint, once the request has been changed, the response body property `finished` is set to `true`.</p><p>In addition, <a href="https://developers.vtex.com/docs/api-reference/orders-api#get-/api/order-system/orders/-changeOrderId-/changes/-changeRequestId-">Get change details</a> can also be used to obtain information about failures and errors that resulted in the eventual cancellation of the change order operation, as will be described in the section <a href="#requests-with-errors-and-failures">Requests with errors and failures</a>.</p> |
| **Preview**<p>Medium complexity</p> | <p>Before making a request to <a href="https://developers.vtex.com/docs/api-reference/orders-api#patch-/api/order-system/orders/-changeOrderId-/changes">Create order change</a>, the integration can make a preview that will result in a response body identical to the change request. To do so, use the same request body in the request to the <a href="https://developers.vtex.com/docs/api-reference/orders-api#post-/api/order-system/orders/-changeOrderId-/changes/preview">Preview order change</a> endpoint.</p><p>This preview is a simulated change and does not generate any real changes to the order. Using <a href="https://developers.vtex.com/docs/api-reference/orders-api#post-/api/order-system/orders/-changeOrderId-/changes/preview">Preview order change</a> is useful for obtaining the total values associated with the order change being made and for validating the request details with a valid request body.</p><p>After receiving a successful `200 OK` response for a preview of the change, the integration can proceed with the request to <a href="https://developers.vtex.com/docs/api-reference/orders-api#patch-/api/order-system/orders/-changeOrderId-/changes">Create order change</a> to change the order.</p><p>Then, the integration can be adapted to scenarios such as:<ul><li><b>Optimistic scenario:</b> The validation data obtained by simulating the change covers most of the `200 OK` success scenarios.</li><li><b>Polling implementation:</b> Mentioned above.</li></ul></p> |

## Changes in the request body

**Change order (Beta)** maintains some attributes of the previous solution, but others have been created or modified in terms of nomenclature and functioning. The main changes have been organized as follows:

* [Manual values](#manual-values)
* [Adding and removing items](#adding-and-removing-items)
* [Attributes of mandatory and optional items](#attributes-of-mandatory-and-optional-items)
* [User responsibility in system automation](#user-responsibility-in-system-automation)

### Manual values

* **Previously:** The `discountValue` and `incrementValue` fields defined the value of the change being made to the order by decreasing or increasing a value, respectively. The user calculated the change value, and the result was added to or subtracted from the order total amount using these fields.
  > **Example:** When adding a $50 item to a $100 order, the user would send the `incrementValue` as $50, and the system would update the order total to $150. To apply a $30 discount for the customer, the user had to send the `discountValue` of $30, resulting in a revised order total of $120.
* **Now:** The new `manualDiscountValue` and `manualIncrementValue` fields set additional manual values to be added to or subtracted from the total order amount regardless of the changes made. As the system automatically calculates the changes (considering the price and conditions when the order was placed), the user can add or subtract values using the fields mentioned.
  > **Example:** When adding a $50 item to a $100 order, the system automatically adjusts the total to $150. Users are not required to update the amount manually. If a discount of $30 is needed, users can simply send the `manualDiscountValue` field as $30, resulting in a new total of $120.

### Adding and removing items

* **Previously:** The attributes used to add and remove items from the order were the `itemsAdded` and `itemsRemoved` arrays, which contained item objects with the `id`, `price`, and `quantity` fields.
* **Now:** The attributes for adding and removing items from the order are the `add` and  `remove` objects. They contain a new level that defines an object for each item via the `items` array.

Example of removing items in **Change order (Beta)**:

```
{
    "remove": {
         items": [
            {
             "id": "1",
             "quantity": 1
            }
        ]
    }
}
```

<br>

### Attributes of mandatory and optional items

The items in the request body need fewer mandatory attributes than before: `id` and `quantity`. The other attributes are obtained from the request or the Catalog system.

If you need to add or change existing items, you can change other fields to override the information for an item being changed. The optional fields are `price`, `unitMultiplier`, and `measurementUnit`. The system disregards any other fields sent in the request.

### User responsibility in system automation

* **Previously:** Users had to calculate the value to be changed in the order. They used to send this value via the `discountValue` or `incrementValue` attributes, depending on whether the change was an increase or decrease in price.
* **Now:** The system provides item information and automatically calculates the final order amount after the change. Users only need to enter the minimum information required and no longer calculates the final order amount, which reduces potential errors.

## Requests with errors and failures

When an error or failure occurs in **Change order (Beta)**, information about the processing can be obtained from the [Get change details](https://developers.vtex.com/docs/api-reference/orders-api#get-/api/order-system/orders/-changeOrderId-/changes/-changeRequestId-) endpoint via the `logs` attribute.

Example of `logs` with a processing error:

```
{
    "requestId": "de88ad2b-a927-47ad-b5af-a6fab4d2a22f",
    "workflowId": "418827ee-0efd-4127-87c0-6d881358b750",
    "status": "preparing",
    "finished": false,
    "reason": "test",
    "manualDiscountValue": 1000,
    "manualIncrementValue": 0,
    "totalChangeValue": 0,
    "totals": [],
    "add": {
        ...
    },
    "logs": [
       {
            "date": "2024-05-13T21:35:00.1952066Z",
            "message": "Automatic transition failed. Current retry counter is 1. Failed with message: Failure to run the action 'preparing'. Content: '{\"error\":{\"code\":\"001\",\"message\":\"An error has occurred\"},\"operationId\":\"f69e8934-5f93-4ba2-9ebe-408080c6733b\",\"fields\":{}}'",
            "source": "Workflow Engine",
            "status": "preparing"
        },
        {
            "date": "2024-05-13T21:35:00.1481754Z",
            "message": "OperationId:f69e8934-5f93-4ba2-9ebe-408080c6733b\nSystem.NullReferenceException: Object reference not set to an instance of an object.\n   at VTEX.SOS.Services.OrderService.OrderServiceCapabilities.ChangeOrderV2.ChangeOrderMerger.MergeWithEnrichedItemMetadata(Seller seller, OrderItem itemToEnrich, OrderItem enrichedItem)\n   at VTEX.SOS.Services.OrderService.OrderService.FillAddedItemMetadataAsync(IContext context, IEnumerable`1 enrichedOrderItems, Seller seller, OrderItem addedItem, String salesChannel, CancellationToken cancellationToken) in /app/VTEX.SOS/Services/OrderService/OrderServiceCapabilities/ChangeOrderV2/Steps/ChangeOrderV2.Prepare.cs:line 284\n   at VTEX.SOS.Services.OrderService.OrderService.FillAddedItemInfoAsync(IContext context, OrderSource orderOrigin, IEnumerable`1 enrichedOrderItems, Seller seller, OrderItem addedItem, String salesChannel, CancellationToken cancellationToken) in /app/VTEX.SOS/Services/OrderService/OrderServiceCapabilities/ChangeOrderV2/Steps/ChangeOrderV2.Prepare.cs:line 273\n   at VTEX.SOS.Services.OrderService.OrderService.EnrichItemsOnlyAsync(IContext context, Order order, ChangeOrderInput changeOrderInput, CancellationToken cancellationToken) in /app/VTEX.SOS/Services/OrderService/OrderServiceCapabilities/ChangeOrderV2/Steps/ChangeOrderV2.Prepare.cs:line 238\n   at VTEX.SOS.Services.OrderService.OrderService.PrepareChangeOrderAsync(IContext context, Order order, ChangeOrderInput changeOrderInput, CancellationToken cancellationToken) in /app/VTEX.SOS/Services/OrderService/OrderServiceCapabilities/ChangeOrderV2/Steps/ChangeOrderV2.Prepare.cs:line 38\n   at VTEX.SOS.Services.OrderService.ChangeOrderService.PrepareChangeInternalAsync(String orderId, String changeRequestId, IContext context, CancellationToken cancellationToken) in /app/VTEX.SOS/Services/OrderService/OrderServiceCapabilities/ChangeOrderV2/Service/ChangeOrderService.cs:line 288\n   at VTEX.SOS.Services.OrderService.ChangeOrderService.PrepareChangeInternalAsync(String orderId, String changeRequestId, IContext context, CancellationToken cancellationToken) in /app/VTEX.SOS/Services/OrderService/OrderServiceCapabilities/ChangeOrderV2/Service/ChangeOrderService.cs:line 288",
            "source": "ChangeOrderService:PrepareChangeInternalAsync",
            "status": "preparing"
        }
    ]
}
```

<br>

For each system failure (untreated errors), the system automatically makes new processing attempts. If the new attempts don't work, the change request is canceled, and the reason for the error can be found using the [Get change details](https://developers.vtex.com/docs/api-reference/orders-api#get-/api/order-system/orders/-changeOrderId-/changes/-changeRequestId-) endpoint via the `cancellationData` attribute.

If the source of the error is the user's non-compliance with the request validation rules, the operation will be canceled automatically, and no further processing attempts will be made. In this case, the reason for the error is also communicated via `cancellationData`.

Example of the `cancellationData` object: The price change requested exceeds the limit value set for canceling orders.

```
{
    "requestId": "29004325-e2b8-4b7e-a82c-f588e6d3c07f",
    "workflowId": "ea392ae2-1db5-432c-97d3-adc4436ca4aa",
    "status": "canceled",
    "finished": false,
    "reason": "test",
    "manualDiscountValue": 37500,
    "manualIncrementValue": 0,
    "totalChangeValue": 0,
    "totals": [],
    "remove": {
        ...
    },
    "cancellationData": {
        "requestedByUser": false,
        "reason": "The value of the change exceed the order's price",
        "cancellationDate": "2024-05-13T21:31:38.8596Z"
    }
}
```

<br>

## Frequently Asked Questions (FAQ)

This section gathers commonly asked questions from clients and partners who use **Change order (Beta)**:

[1 - How do I overwrite the price of a specific item?](#1-how-do-i-overwrite-the-price-of-a-specific-item)

[2 - How do I know and change the total amount of the order before it is changed?](#2-how-do-i-know-and-change-the-total-amount-of-the-order-before-it-is-changed)

[3 - Do I need to indicate the shipping cost, or is it automatically recalculated?](#3-do-i-need-to-indicate-the-shipping-cost-or-is-it-automatically-recalculated)

[4 - How do promotions work in Change orders (Beta)?](#4-how-do-promotions-work-in-change-orders-beta)

[5 - What should I do when the request leads to a canceling or canceled status?](#5-what-should-i-do-when-the-request-leads-to-a-canceling-or-canceled-status)

### 1 - How do I overwrite the price of a specific item?

You can apply a manual value to a specific item's price while changing its quantity to overwrite its price.

In the [Create order change](https://developers.vtex.com/docs/api-reference/orders-api#patch-/api/order-system/orders/-changeOrderId-/changes) endpoint, the `price` attribute has the same function as for the order placing flow and refers to the nominal price of the item. For example, in an order with a weighable item, such as an apple, the `price` refers to the kilo price of apples.

Example of price overwriting on a weighable item:

```
{
    "reason": "the client wanted to change",
    "add": {
        "items": [
            {
                "id": "1",
                "quantity": 1,
                "price": 150,
            }
        ]
}
```

<br>

### 2 - How do I know and change the total amount of the order before it is changed?

The [Preview order change](https://developers.vtex.com/docs/api-reference/orders-api#post-/api/order-system/orders/-changeOrderId-/changes/preview) endpoint allows the user to simulate the order change to be made with [Create order change](https://developers.vtex.com/docs/api-reference/orders-api#patch-/api/order-system/orders/-changeOrderId-/changes), as it uses the same request body and provides the same response body but without changing the order. The `totalChangeValue` attribute indicates the total value being changed in the order, either to a higher value (e.g., tax or adding items) or a lower value (e.g., manually reducing the price or removing items).

If you want the integration to handle variations in the order amount, you can use the same request body as in the [Preview order change](https://developers.vtex.com/docs/api-reference/orders-api#post-/api/order-system/orders/-changeOrderId-/changes/preview) and use it in a request to [Create an order change](https://developers.vtex.com/docs/api-reference/orders-api#patch-/api/order-system/orders/-changeOrderId-/changes), adjusting the values of the `manualIncrementValue` and `manualDiscountValue` fields up or down respectively.

### 3 - Do I need to indicate the shipping cost, or is it automatically recalculated?

When item quantity, size, or weight changes, the shipping cost is automatically recalculated and added to the new order total.

The rule for calculating the new shipping cost follows the same conditions applied when the order was placed.

### 4 - How do promotions work in Change orders (Beta)?

Changing the order automatically applies the same promotions and taxes that were valid for the items when the order was placed, but only replicates the conditions that were valid then. New promotions and taxes are not recalculated under the changed order conditions.

**Example:** In one store, there was a 'Get 3 for the price of 2' promotion. However, the customer only purchased 2 items initially and did not qualify for the discount. If the customer then decides to add one more item to the order, making it a total of 3 items purchased, they still wouldn't receive the promotion because it wasn't part of the original order.

You can inform the promotion of an item when you change the order manually with[ Create order change](https://developers.vtex.com/docs/api-reference/orders-api#patch-/api/order-system/orders/-changeOrderId-/changes) using the `priceTags` attribute. This is already the platform's default behavior.

Example of an item with promotions applied to the original order:

```
{
    "reason": "teste",
    "replace": [
        {
            "from": {
                "items": [
                    {
                        "id": "16",
                        "quantity": 1,
                        "measurementUnit": "kg",
                        "unitMultiplier": 0.5
                    }
                ]
            },
            "to": {
                "items": [
                    {
                        "id": "16",
                        "quantity": 1,
                        "measurementUnit": "kg",
                        "unitMultiplier": 0.750,
                        "price": 530,
                        "priceTags": [
                            {
                                "name": "DISCOUNT@MANUALPRICE",
                                "value": -50,
                                "isPercentual": false
                            }
                        ]
                    }
                ]
            }
        }
    ]
}
```

<br>

In this example, the manual discount tag used was `DISCOUNT@MANUALPRICE`. The equivalent for manual rates would be `TAX@MANUALPRICE`. The [Create order change](https://developers.vtex.com/docs/api-reference/orders-api#patch-/api/order-system/orders/-changeOrderId-/changes) endpoint also allows you to use the `priceTag` attribute of an existing promotion and change its value when changing the order.

### 5 - What should I do when the request leads to a canceling or canceled status?

The statuses `canceling` and `canceled` mean that the order change was not processed correctly and not applied to the order, so the user can disregard the request. Failures and errors can occur due to:

* User non-compliance with the request validation rules.
* Exceeded number of automatic reprocessing attempts by the system.
* Other system processing failures.

The general recommendation is to investigate the error source and check the request body being sent from the [Create order change](https://developers.vtex.com/docs/api-reference/orders-api#patch-/api/order-system/orders/-changeOrderId-/changes) or [Preview order change](https://developers.vtex.com/docs/api-reference/orders-api#post-/api/order-system/orders/-changeOrderId-/changes/preview) endpoints. Learn more in the section [Requests with errors and failures](#requests-with-errors-and-failures).

## Learn more

| **Help Center** | **Developer Portal** |
| :--- | :--- |
| <p>Changing orders in the VTEX Admin:<ul><li><a href="https://help.vtex.com/en/tutorial/como-funciona-a-alterar-pedido-beta--56TO0bOFXsfmpc7YZ3wIUZ">How Change order works (Beta)</a></li><li><a href="https://help.vtex.com/en/tutorial/como-alterar-pedidos-beta--7btlG91rb6sHpW1dkd2kBw">How to change orders (Beta)</a></li></ul></p> | <p>Changing orders via API:<ul><li><a href="https://developers.vtex.com/docs/api-reference/orders-api#patch-/api/order-system/orders/-changeOrderId-/changes">Create order change</a></li><li><a href="https://developers.vtex.com/docs/api-reference/orders-api#post-/api/order-system/orders/-changeOrderId-/changes/preview">Preview order change</a></li><li><a href="https://developers.vtex.com/docs/api-reference/orders-api#get-/api/order-system/orders/-changeOrderId-/changes/-changeRequestId-">Get order change details</a></li><li><a href="https://developers.vtex.com/docs/api-reference/orders-api#get-/api/order-system/orders/-changeOrderId-/changes">Get order change history</a></li><li><a href="https://developers.vtex.com/docs/api-reference/orders-api#post-/api/order-system/orders/-changeOrderId-/changes/-changeRequestId-/retry">Retry order change</a></li><li><a href="https://developers.vtex.com/docs/api-reference/orders-api#post-/api/order-system/orders/-changeOrderId-/changes/-changeRequestId-/cancel">Cancel order change</a></li></ul></p> |

