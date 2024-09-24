---
title: 'Troubleshooting errors in subscription orders'
id: uLL8AYBGdtAmbbdL5gRCf
status: PUBLISHED
createdAt: 2020-02-05T14:32:49.763Z
updatedAt: 2023-12-21T14:07:42.772Z
publishedAt: 2023-12-21T14:07:42.772Z
firstPublishedAt: 2020-02-11T15:00:00.666Z
contentType: tutorial
productTeam: Post-purchase
author: 1malnhMX0vPThsaJaZMYm2
slugEN: troubleshooting-errors-in-subscription-orders
locale: en
legacySlug: how-to-troubleshoot-subscription-orders-with-errors
subcategoryId: 1rA9wuuskW3PpjvMrhatAM
---

>ℹ️ You can only access information from orders created in the last two years, and that same period is valid for customers through [My Account](https://help.vtex.com/en/tutorial/how-my-account-works--2BQ3GiqhqGJTXsWVuio3Xh).

You can identify and manage errors in subscription orders in the Admin, in **Subscriptions** > **Dashboards** > **Subscription Orders**.

There are two types of errors that can occur in subscription orders:

* **[Issues in subscription cycles](#issues-in-subscription-cycles)**
* **[Payment errors](#payment-errors)**

## Issues in subscription cycles

Issues in subscription cycles indicate that an obstacle prevented a subscription order from being created, such as having an unavailable SKU in inventory. 

The **Cycles with an issue** tab displays subscription orders with such problems, as illustrated in the image below.

![cicloscomproblema EN](https://images.ctfassets.net/alneenqid6w5/5ijnWeUeqRzKWa2agsxK7O/8985fa930def4ec541d9127bc855740d/cicloscomproblema_EN.png)

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

<table class="w-100 center mv7 bb b--gray" style="border-spacing: 0px; border-collapse: collapse;">
    <thead class="w-100 center mv7 bb b--gray" style="border-spacing: 0px; border-collapse: collapse;">
        <tr class="t-body fw5 c-muted-1 bb bw1 pa2 pb3 b--muted-3 tl">
            <th class="t-body fw5 c-muted-1 bb bw1 pa2 pb3 b--muted-3 tl">
                <em class="i">Issue</em>
            </th>
            <th class="t-body fw5 c-muted-1 bb bw1 pa2 pb3 b--muted-3 tl">
                <em class="i">Meaning</em>
            </th>
        </tr>
    </thead>
    <tbody>
        <tr class="bb b--muted-3">
            <td class="t-body pa5" style="min-width: 15rem;">
                <span class="t-body c-on-base pa2 mw6 br2 bg-muted-4" style="word-break: break-word; overflow-wrap: break-word;">Could not select a SLA for sku {SKU ID}</span>
            </td>
            <td class="t-body pa5" style="min-width: 15rem;">No shipping strategies associated with a particular SKU were found in the subscription order.
                <p>
                This issue usually indicates that the SKU is out of stock or that a limitation occurred in the logistics setup.
            </td>
        </tr>
        <tr class="bb b--muted-3">
            <td class="t-body pa5" style="min-width: 15rem;">
                <span class="t-body c-on-base pa2 mw6 br2 bg-muted-4" style="word-break: break-word; overflow-wrap: break-word;">No SLAs were found for this subscription</span>
            </td>
            <td class="t-body pa5" style="min-width: 15rem;">No shipping strategies associated with the subscription were found.
                <p>
                This issue usually indicates that subscription items are out of stock or that a limitation occurred in the logistics setup, such as having no geographic coordinates in the customer's profile.
            </td>
        </tr>
        <tr class="bb b--muted-3">
            <td class="t-body pa5" style="min-width: 15rem;">
                <span class="t-body c-on-base pa2 mw6 br2 bg-muted-4" style="word-break: break-word; overflow-wrap: break-word;">
                    Request items length is zero after simulation</span>
            </td>
            <td class="t-body pa5" style="min-width: 15rem;">
                This message is displayed when the <a href="https://developers.vtex.com/vtex-rest-api/reference/orderform">shopping cart simulation</a> cannot find valid items to place the order. This issue can be identified hours later in the case of a new payment attempt. This is a foreseen scenario that cannot be avoided unless items have infinite inventory and a permanent shipping policy.
            </td>
        </tr>
        <tr class="bb b--muted-3">
            <td class="t-body pa5" style="min-width: 15rem;">
                <span class="t-body c-on-base pa2 mw6 br2 bg-muted-4" style="word-break: break-word; overflow-wrap: break-word;">
                    Subscription has invalid data to place order: [ADDRESS_MISSING]</span>
            </td>
            <td class="t-body pa5" style="min-width: 15rem;">
                Indicates an issue in the address added by the customer for the subscription, such as invalid ZIP code or non-existing geographic coordinates.
                <p>
                To fix this issue, contact your customer and ask them to review their address details on the <strong>My account</strong> page.
            </td>
        </tr>
        <tr class="bb b--muted-3">
            <td class="t-body pa5" style="min-width: 15rem;">
                <span class="t-body c-on-base pa2 mw6 br2 bg-muted-4" style="word-break: break-word; overflow-wrap: break-word;">
                    Subscription has invalid data to place order: [INVALID_PROFILE]</span>
            </td>
            <td class="t-body pa5" style="min-width: 15rem;">
                This issue indicates there is information missing in the customer profile. For example, suppose a customer removes some personal information from their profile after their first purchase. On the next date of the subscription cycle, this issue will be detected.
                <p>
                To fix this issue, the customer must fill in the missing information in their profile on the <strong>My account</strong> page.
            </td>
        </tr>
        <tr class="bb b--muted-3">
            <td class="t-body pa5" style="min-width: 15rem;">
                <span class="t-body c-on-base pa2 mw6 br2 bg-muted-4" style="word-break: break-word; overflow-wrap: break-word;">
                    Subscription has invalid data to place order: [PAYMENT_MISSING]</span>
            </td>
            <td class="t-body pa5" style="min-width: 15rem;">
                This issue means that there is no payment method for the subscription.
                <p>
                To fix this issue, contact your customer and ask them to fill in the payment fields on the <strong>My account</strong> page.
            </td>
        </tr>
        <tr class="bb b--muted-3">
            <td class="t-body pa5" style="min-width: 15rem;">
                <span class="t-body c-on-base pa2 mw6 br2 bg-muted-4" style="word-break: break-word; overflow-wrap: break-word;">
                    Subscription has invalid data to place order: [ADDRESS_MISSING|PAYMENT_MISSING]</span>
            </td>
            <td class="t-body pa5" style="min-width: 15rem;">
                This message can be displayed for two reasons:
                <ul>
                    <li>Invalid or incomplete credit card or address data.</li>
                    <li>Invalid Taxpayer Registration Number.</li>
                </ul>        
                <p>
                    To fix this issue, contact your customer and ask them to review their data on the <strong>My account</strong> page.
            </td>
        </tr>
        <tr class="bb b--muted-3">
            <td class="t-body pa5" style="min-width: 15rem;">
                <span class="t-body c-on-base pa2 mw6 br2 bg-muted-4" style="word-break: break-word; overflow-wrap: break-word;">
                    Invalid PriceTag</span>
            </td>
            <td class="t-body pa5" style="min-width: 15rem;">
                This message is displayed when there is a difference in <span class="t-body c-on-base pa2 mw6 br2 bg-muted-4" style="word-break: break-word; overflow-wrap: break-word;">priceTags</span> responses between the <a href="https://developers.vtex.com/vtex-rest-api/reference/orderform">shopping cart simulation</a> and the order placement using the placeOrder API. Divergences between responses may prevent the order from being placed.
                <p>
                    Placing orders with discounts using the placeOrder API depends on submitting <span class="t-body c-on-base pa2 mw6 br2 bg-muted-4" style="word-break: break-word; overflow-wrap: break-word;">priceTags</span>, which specify the discounts previously obtained in the simulation.
                <p>
                All <span class="t-body c-on-base pa2 mw6 br2 bg-muted-4" style="word-break: break-word; overflow-wrap: break-word;">priceTags</span> that the system has applied for placing the order must be specified in advance in the API request. Otherwise, the order will not be placed, and this message is displayed. This is because the system understands that context conditions are not applicable since they depend on all <span class="t-body c-on-base pa2 mw6 br2 bg-muted-4" style="word-break: break-word; overflow-wrap: break-word;">priceTags</span>  — including the undeclared ones.
            </td>
        </tr>
        <tr class="bb b--muted-3">
            <td class="t-body pa5" style="min-width: 15rem;">
                <span class="t-body c-on-base pa2 mw6 br2 bg-muted-4" style="word-break: break-word; overflow-wrap: break-word;">
                    The payment amount is different from the order price.</span>
            </td>
            <td class="t-body pa5" style="min-width: 15rem;">
                This message is displayed when there is a difference between the prices of the <a href="https://developers.vtex.com/vtex-rest-api/reference/orderform">shopping cart simulation</a> and the order placed via the placeOrder API.
            </td>
        </tr>
        <tr class="bb b--muted-3">
            <td class="t-body pa5" style="min-width: 15rem;">
                <span class="t-body c-on-base pa2 mw6 br2 bg-muted-4" style="word-break: break-word; overflow-wrap: break-word;">
                    Unable to communicate with seller XXXXXX.</span>
            </td>
            <td class="t-body pa5" style="min-width: 15rem;">
                This message is displayed when checkout cannot communicate with the seller to place the order. It tends to be a temporary issue that is solved by automatic retries in the <strong>Subscriptions</strong> module.
            </td>
        </tr>
        <tr class="bb b--muted-3">
            <td class="t-body pa5" style="min-width: 15rem;">
                <span class="t-body c-on-base pa2 mw6 br2 bg-muted-4" style="word-break: break-word; overflow-wrap: break-word;">
                    Subscription has invalid data to place order: [ADDRESS_DATA]</span>
            </td>
            <td class="t-body pa5" style="min-width: 15rem;">
                This issue occurs only in stores that use <strong>Subscriptions V2</strong>. Each subscription cycle, the<strong> Subscriptions V2</strong> app does an extra validation and checks if any address changes were made since the subscription was created. If the address data are not exactly the same, this issue is detected.
                <p>
                For example, if a customer changes a letter in their address after creating a subscription, the <strong>Subscriptions V2</strong> module will detect the change and display this issue. 
                <p>
                To fix this issue, contact your customer and ask them to review their data on the <strong>My account</strong> page.
            </td>
        </tr>
    </tbody>        
</table>

## Payment errors

Payment errors occur during the payment approval flow, such as having a credit card refused by the gateway.

You can view orders with this error on the **Payment Error** tab, as shown in the image below.

![errosdepagamento EN](//images.ctfassets.net/alneenqid6w5/1RIw7xmqhpU4eWq0zHEnKG/4bea9e2c3fa3385e1fd1b1c0add2b0f0/errosdepagamento_EN.png)

To analyze payment errors, follow the steps below:

1. In the Admin, go to the **Subscriptions** module.
2. Click on the **Dashboards** tab.
3. In the **Subscription Orders** section, click on the **Payment Error** tab.
4. Identify the order you want to analyze and click on its ID, as illustrated in the image below. You will be redirected to the order details page in the **All Orders** module.
  ![EN Log Erro de pagamento](//images.ctfassets.net/alneenqid6w5/2Bb1XYgaZEdNMVhcnX5lF3/a10c69783d57d09b70234c6dda18542d/EN_Log_Erro_de_pagamento.png)
5. Then, click on **View transaction details** under the **Payment** card. You will be redirected to the **Transactions** page in the **Payments** module.
6. On the **Transactions** page, you can view and analyze the order transaction events. Read the article [Viewing the order's details in Payments](https://help.vtex.com/en/tutorial/como-visualizar-detalhes-do-pedido) for more information.

Orders with payment errors go through 5 automatic retries within a period of up to 12 hours, according to the payment gateway flow. You cannot retry placing orders manually to correct payment errors in the Admin.

Your store customers can edit their subscriptions and perform other actions on the __My account__ page. This allows customers to solve payment errors by changing the payment method, even after automatic retries.

#### **Learn more**

* [How to manage Subscriptions](https://help.vtex.com/en/tutorial/como-gerenciar-assinaturas--6Jk50FPbv6iuz1OsFypv8x)
