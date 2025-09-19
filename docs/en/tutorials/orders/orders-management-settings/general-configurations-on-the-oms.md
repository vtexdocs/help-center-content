---
title: 'Orders General Configuration'
id: tutorials_194
status: PUBLISHED
createdAt: 2017-04-27T22:14:49.644Z
updatedAt: 2024-07-02T19:07:22.178Z
publishedAt: 2024-07-02T19:07:22.178Z
firstPublishedAt: 2017-04-27T23:00:47.468Z
contentType: tutorial
productTeam: Post-purchase
author: authors_84
slugEN: general-configurations-on-the-oms
legacySlug: general-configurations-on-the-oms
locale: en
subcategoryId: 1qvm3kIrt6KA6IeGc4EQ6k
---

It is possible to execute configurations directly related to the conditions of the shopping cart and the conditions of the order flows. 

In the VTEX Admin, go to **Store Settings > Orders > Settings**, or type *Orders* in the search bar at the top of the page and select *Store Settings / Orders*.

![configuracoes_pedidos_en](https://raw.githubusercontent.com/vtexdocs/help-center-content/refs/heads/main/docs/en/tutorials/orders/orders-management-settings/general-configurations-on-the-oms_1.png)

## Cart

These are the shopping cart options:

### Payments

This configuration is a flag that enables or disables the requirement for a user authentication for payments authorized automatically (defined within the payment method itself).

### Orders

- **Minimum number of items in cart**. Default: 1 item – this will prevent the customer from closing the purchase without having at least the same value in quantity of items as that defined in this field.
- **Number of decimal digits to be considered**. Default: 2 decimal places – this means that the product prices are illustrated according to the number of decimal places defined. There will be no rounding of amounts. At the checkout, the value of the decimal places – if they have been cut off – will be included for closing the purchase.
- **Minimum total value in cart**. Default: R$0.10 – as with the minimum quantity of items in the cart, this will prevent the customer from closing the purchase without having at least the same amount in products as that defined in this field. The minimum cart value also includes taxes and shipping costs. It is the final value of the order that is being calculated.

## Orders

The options are:

### Order workflow

- **Cancellation Grace Period:** Default: 30 minutes – the cancellation status is that which allows the customer themselves or the storeowner to cancel the order without the need for confirmation of the cancellation by the store.
- **Minimum time for reservation:** Default: 0 days – This is the minimum period for an item to be reserved after checkout. For example, if set to one day, the reservation of products is maintained for one more day after the purchase is closed. Filling this field helps in scenarios with high order cancellation rates, where the store does not want to commit its available stock immediately after each order.
- **Workflow Name:** Standard: default – configurations will be made in this field when the customer already has a WMS from your ERP, so as to behave differently in capturing orders.

### Order Replacement

This flag activates or inactivates the possibility for customers to change their orders on their own without the need to contact support or manually request the cancellation of the current order.

### Preview mode

- **Separate view by hostname in the Admin:** separate orders by hostname in the order list. If the option is checked, only requests related to the host will be shown in their respective account. If the option is unchecked, all orders registered in the store's domains will be shown in all accounts.
- **Separate view by hostname in MyAccount:** separate orders by hostname in the buyer's account - [MyAccount](/en/tutorial/como-funciona-a-minha-conta--2BQ3GiqhqGJTXsWVuio3Xh).

### Conversation mask type

This setting allows you to define the Conversation Tracker configuration. It changes your customers' emails view between the **Soft** and **Hard** modes.The modes change the way the email is delivered in the order flow, adding a mask.
- **Hard:** creates an alias (alternative email) in an unreadable way, thus avoiding the identification of the email by external systems.
- **Soft:** creates a less complex alias for the buyer's email, so the email remains readable in the OMS UI and when viewed in the order's JSON. To learn more, read our article on [how communication with the customer is made during the order flow](/en/tutorial/understanding-the-conversation-tracker--tutorials_195).
