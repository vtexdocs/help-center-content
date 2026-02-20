---
title: 'Troubleshooting errors in subscription orders'
id: uLL8AYBGdtAmbbdL5gRCf
status: PUBLISHED
createdAt: 2020-02-05T14:32:49.763Z
updatedAt: 2025-09-03T20:28:04.306Z
publishedAt: 2025-09-03T20:28:04.306Z
firstPublishedAt: 2020-02-11T15:00:00.666Z
contentType: tutorial
productTeam: Post-purchase
author: 1malnhMX0vPThsaJaZMYm2
slugEN: troubleshooting-errors-in-subscription-orders
legacySlug: how-to-troubleshoot-subscription-orders-with-errors
locale: en
subcategoryId: 1rA9wuuskW3PpjvMrhatAM
---

> ℹ️ You can only access information from orders created in the last two years, and that same period is valid for customers through [My Account](/en/docs/tutorials/how-my-account-works).

You can identify and manage errors in subscription orders in the Admin, in **Subscriptions** > **Dashboards** > **Subscription Orders**.

There are two types of errors that can occur in subscription orders:

* **[Issues in subscription cycles](#issues-in-subscription-cycles)**
* **[Payment errors](#payment-errors)**

## Issues in subscription cycles

Issues in subscription cycles indicate that an obstacle prevented a subscription order from being created, such as having an unavailable SKU in inventory. 

The **Cycles with an issue** tab displays subscription orders with such problems, as illustrated in the image below.

![cicloscomproblema EN](https://cdn.statically.io/gh/vtexdocs/help-center-content/refs/heads/main/docs/en/tutorials/subscriptions/subscription-guides/troubleshooting-errors-in-subscription-orders_1.png)

In this tab, you can manage orders with issues in subscription cycles and retry placing orders manually. For example, when a product is unavailable, you can edit its inventory and then try to order it again.

To view cycles with issues and retry placing orders, follow the steps below:

1. In the Admin, go to the **Subscriptions** module.
2. Click on the **Dashboards** tab.
3. In the **Subscription Orders** section, click on **Cycles with an issue**.
4. Identify the order you want to correct and check the issue in the **Issue** column. For more information, see our [issues table](#issues).
5. If necessary, correct the identified issue (example: edit inventory).
6. Then, go to **Subscriptions** > **Dashboards** > **Subscription Orders** > **Cycles with an issue** and click the <i class="fas fa-redo-alt"></i> button in the **Retry** column. If the retry option works, the order will be created in the **Orders management** module.

### Issues

See in the table below possible issues in subscription cycles and their respective meanings.

| Issue | Meaning |
|-------|---------|
| `Could not select a SLA for sku {SKU ID}` | No shipping strategies associated with a particular SKU were found in the subscription order.<br>This issue usually indicates that the SKU is out of stock or that a limitation occurred in the logistics setup. |
| `No SLAs were found for this subscription` | No shipping strategies associated with the subscription were found.<br>This issue usually indicates that subscription items are out of stock or that a limitation occurred in the logistics setup, such as having no geographic coordinates in the customer's profile. |
| `Request items length is zero after simulation` | This message is displayed when the [shopping cart simulation](https://developers.vtex.com/vtex-rest-api/reference/orderform) cannot find valid items to place the order.<br>This issue can be identified hours later in the case of a new payment attempt.<br>This is a foreseen scenario that cannot be avoided unless items have infinite inventory and a permanent shipping policy. |
| `Subscription has invalid data to place order: [ADDRESS_MISSING]` | Indicates an issue in the address added by the customer for the subscription, such as invalid ZIP code or non-existing geographic coordinates.<br>To fix this issue, contact your customer and ask them to review their address details on the **My account** page. |
| `Subscription has invalid data to place order: [INVALID_PROFILE]` | This issue indicates there is information missing in the customer profile.<br>For example, suppose a customer removes some personal information from their profile after their first purchase. On the next date of the subscription cycle, this issue will be detected.<br>To fix this issue, the customer must fill in the missing information in their profile on the **My account** page. |
| `Subscription has invalid data to place order: [PAYMENT_MISSING]` | This issue means that there is no payment method for the subscription.<br>To fix this issue, contact your customer and ask them to fill in the payment fields on the **My account** page. |
| `Subscription has invalid data to place order: [ADDRESS_MISSING\|PAYMENT_MISSING]` | This message can be displayed for two reasons:<br>- Invalid or incomplete credit card or address data.<br>- Invalid Taxpayer Registration Number.<br>To fix this issue, contact your customer and ask them to review their data on the **My account** page. |
| `Invalid PriceTag` | This message is displayed when there is a difference in `priceTags` responses between the [shopping cart simulation](https://developers.vtex.com/vtex-rest-api/reference/orderform) and the order placement using the placeOrder API. Divergences between responses may prevent the order from being placed.<br>Placing orders with discounts using the placeOrder API depends on submitting `priceTags`, which specify the discounts previously obtained in the simulation.<br>All `priceTags` that the system has applied for placing the order must be specified in advance in the API request. Otherwise, the order will not be placed, and this message is displayed. This is because the system understands that context conditions are not applicable since they depend on all `priceTags` — including the undeclared ones. |
| `The payment amount is different from the order price.` | This message is displayed when there is a difference between the prices of the [shopping cart simulation](https://developers.vtex.com/vtex-rest-api/reference/orderform) and the order placed via the placeOrder API. |
| `Unable to communicate with seller XXXXXX.` | This message is displayed when checkout cannot communicate with the seller to place the order.<br>It tends to be a temporary issue that is solved by automatic retries in the **Subscriptions** module. |
| `Subscription has invalid data to place order: [ADDRESS_DATA]` | This issue occurs only in stores that use **Subscriptions V2**. Each subscription cycle, the **Subscriptions V2** app does an extra validation and checks if any address changes were made since the subscription was created. If the address data are not exactly the same, this issue is detected.<br>For example, if a customer changes a letter in their address after creating a subscription, the **Subscriptions V2** module will detect the change and display this issue.<br>To fix this issue, contact your customer and ask them to review their data on the **My account** page. |

## Payment errors

Payment errors occur during the payment approval flow, such as having a credit card refused by the gateway.

You can view orders with this error on the **Payment Error** tab, as shown in the image below.

![errosdepagamento EN](https://cdn.statically.io/gh/vtexdocs/help-center-content/refs/heads/main/docs/en/tutorials/subscriptions/subscription-guides/troubleshooting-errors-in-subscription-orders_2.png)

To analyze payment errors, follow the steps below:

1. In the Admin, go to the **Subscriptions** module.
2. Click on the **Dashboards** tab.
3. In the **Subscription Orders** section, click on the **Payment Error** tab.
4. Identify the order you want to analyze and click on its ID, as illustrated in the image below. You will be redirected to the order details page in the **All Orders** module.
  ![EN Log Erro de pagamento](https://cdn.statically.io/gh/vtexdocs/help-center-content/refs/heads/main/docs/en/tutorials/subscriptions/subscription-guides/troubleshooting-errors-in-subscription-orders_3.png)
5. Then, click on **View transaction details** under the **Payment** card. You will be redirected to the **Transactions** page in the **Payments** module.
6. On the **Transactions** page, you can view and analyze the order transaction events. Read the article [Viewing the order's details in Payments](/en/tutorial/como-visualizar-detalhes-do-pedido) for more information.

Orders with payment errors go through 5 automatic retries within a period of up to 12 hours, according to the payment gateway flow. You cannot retry placing orders manually to correct payment errors in the Admin.

Your store customers can edit their subscriptions and perform other actions on the __My account__ page. This allows customers to solve payment errors by changing the payment method, even after automatic retries.

#### **Learn more**

* [How to manage Subscriptions](/en/docs/tutorials/how-to-manage-subscriptions)
