---
title: 'Telesales features'
id: UqhiccIRIK2KD0OqkzJaS
status: PUBLISHED
createdAt: 2021-05-13T18:26:51.189Z
updatedAt: 2025-01-16T18:40:14.359Z
publishedAt: 2025-01-16T18:40:14.359Z
firstPublishedAt: 2021-05-17T12:07:02.897Z
contentType: tutorial
productTeam: Post-purchase
author: 1malnhMX0vPThsaJaZMYm2
slugEN: telesales-features
legacySlug: telesales-features
locale: en
subcategoryId: 6SEjoixhY5LlA7G15W6oZS
---

The telesales features provide your store's customer service team with the autonomy to support customers in the buying, tracking and changing order and subscriptions processes.

Here are the telesales features available on VTEX:

- [Telesales toolbar](#telesales-toolbar)
    - [My Account](#my-account)
    - [Shop on customer's behalf](#shop-on-customers-behalf)
    - [Subscriptions](#subscriptions)
- [Shareable Cart](#shareable-cart)
- [Manual pricing](#manual-pricing)
- [Orders management](#orders-management)

> ⚠️ To access the telesales toolbar, manual pricing, and the **[All Orders](/en/docs/tutorials/all-orders)** page, the user must have a [Call Center operator role](/en/docs/tutorials/how-can-i-create-callcenter-user). 

You must configure the features listed above beforehand, following the steps in the tutorial [Configuring telesales features](/en/docs/tutorials/configuring-telesales-features). 

After logging in with the email address added to this role, the telesales operator will be redirected to the store homepage.

## Telesales toolbar

The telesales toolbar is displayed at the top of your store's website for users with the Call center operator role. Through this toolbar, telesales operators can browse the store, make purchases and manage orders on behalf of customers.

To learn how to use this feature, check out the [Telesales toolbar](/en/docs/tutorials/telesales-toolbar) tutorial.

> ℹ️ A use case for the telesales feature is to import orders from other platforms to the VTEX Orders module. To do this, you can associate a specific [trade policy](/en/docs/tutorials/creating-a-trade-policy) with payment [Notes Payable](/en/docs/tutorials/setting-up-payments-with-notes-payable) (payment method immediately and manually approved by the operator).

### My Account

When browsing the store on behalf of the customer through the toolbar, the telesales operator can access the **My Account** page to manage personal data, addresses, orders, credit cards, and subscriptions.

Learn more in our tutorial [How My Account works](/en/docs/tutorials/how-my-account-works).

### Shop on customer’s behalf

To place an order on behalf of the customer, the telesales operator must log into the store as a customer from the toolbar and follow the purchase flow, adding products to the shopping cart, filling in the delivery and payment information, and completing the purchase.

When the telesales operator places an order on behalf of the customer, the operator's email address will be specified in the order details, which can be viewed in the **All Orders** page.

### Subscriptions
In the Subscriptions module, the telesales operator can create new subscriptions or edit existing ones on the customer's behalf. They can also change subscribed products and quantities, delivery dates and frequencies, as well as the payment method and delivery address.

To access the subscription list, follow the steps below:

1. In the VTEX Admin, go to **Orders > Subscriptions > Dashboards**, or type **Dashboards** in the search bar at the top of the page.

2. Click the **Subscribers** tab.

3. Choose the client you want and click `Impersonate`.

4. In the toolbar, click `Log in as` and log in. A new subscription list will open.

5. In the **Subscriptions** menu, you can click:
- `New subscription` to create a subscription.
- `View details` to edit an existing subscription.

> ℹ️ Learn more about subscriptions in the article [How subscriptions work](/en/docs/tutorials/how-subscriptions-work). 

## Shareable cart

With the Shareable Cart app, the telesales operator can add the customer’s desired products to the cart and share a link to the completed cart so that the customer can place the order.

In this case, the operator's email address will not appear in the order details.

To use this feature, you must install and activate the [Shareable cart (Social Selling)](/en/docs/tutorials/how-to-activate-the-shareable-cart-app) app.

Learn more in the article [How to use the Shareable Cart app](/en/docs/tutorials/how-to-use-the-shareable-cart-app).

## Manual pricing

The telesales operator can change product prices in the shopping cart, either when buying on behalf of the customer or when creating a cart to be shared later.

To use this feature, the store's developers must first enable it using the [Checkout API](https://developers.vtex.com/docs/api-reference/checkout-api#post-/api/checkout/pvt/configuration/orderForm).

The telesales operator must double-click on the price displayed on the shopping cart and enter a new value to change the product price. There are no restrictions to increase or reduce prices.

After the order is placed, the price entered manually must be approved by the store administrator or an authorized user in the [Orders authorization](/en/docs/tutorials/how-order-authorization-works) system. Once the price entered is validated, the order proceeds to the billing process.

## Orders management

Users with the Call Center operator role can view, track, and change orders in the VTEX Admin, under **Orders > All Orders**.

Learn more in our tutorial [Orders management page structure](/en/tutorial/estrutura-da-pagina-do-oms--2dDZmUUFXWeyQ4s2gqiY0A#todos-os-pedidos).

To understand the main features of the **All Orders** module, check out these articles:

- [Changing items from a completed order](/en/docs/tutorials/changing-items-from-a-complete-order).
- [How to cancel orders](/en/docs/tutorials/canceling-orders).
- [How to return items from an order](/en/tutorial/como-fazer-a-devolucao-de-itens--tutorials_191).
- [Checking error details in the orders](/en/docs/tutorials/how-to-check-error-details-in-the-orders).
