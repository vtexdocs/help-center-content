---
title: 'Configure scheduled delivery in Buyer Portal Checkout'
status: PUBLISHED
createdAt: 2026-04-22T00:00:00.000Z
updatedAt: 2026-04-22T00:00:00.000Z
contentType: tutorial
productTeam: Post-purchase
slugEN: configure-scheduled-delivery-buyer-portal-checkout
locale: en
subcategoryId: 7fTH6bP0C4IaM8qWi0kkQC
---

> ℹ️ This feature is only available for stores using the [B2B Buyer Portal](https://help.vtex.com/en/docs/tutorials/b2b-buyer-portal), which is currently available for selected accounts.

Scheduled delivery in Buyer Portal Checkout allows VTEX stores to offer customers the option to choose the best day and time to receive their purchases. You can configure this directly in your shipping policies to define the available delivery periods.

> ⚠️ For [Scheduled delivery](/en/docs/tutorials/scheduled-delivery) and [Delivery capacity](https://help.vtex.com/en/docs/tutorials/managing-delivery-capacity) to work properly, note that:
>
> - The sum of [`account name`](https://help.vtex.com/en/docs/tutorials/what-is-an-account-name) and `shipping policy ID` can't exceed 60 characters.
> - The [shipping policy](https://help.vtex.com/en/docs/tutorials/creating-a-shipping-policy) ID can't contain spaces.

This article explains how to configure scheduled delivery in an existing or new shipping policy.

![Entrega agendada Buyer Portal Checkout](https://cdn.statically.io/gh/vtexdocs/help-center-content/refs/heads/main/docs/pt/tutorials/envio/estratégia-de-envio/configurar-entrega-agendada-fastcheckout_1.png)

## Delivery windows

Delivery windows define the carrier's business hours, meaning the times they accept orders. These settings directly influence the delivery time calculation displayed to the customer at checkout.

### Configuring delivery windows

To configure delivery windows in a shipping policy, follow the steps below:

1. In the VTEX Admin, go to **Shipping > Shipping Strategy**, or type **Shipping Strategy** in the search bar at the top of the page.
2. In the **Shipping policies** tab, click the desired shipping policy, or [create a new shipping policy](https://help.vtex.com/en/docs/tutorials/creating-a-shipping-policy).
3. In the **Business hours** section, click the `Delivery window` tab.
4. You can activate the `Accept orders outside business hours` option. When this option is enabled and an order is placed outside business hours, the time until the next available delivery window will be added to the total delivery time.
5. Select the `Day of the week`, the `Start time`, and the `End time`.
6. To add more days of the week, click `Add delivery window` and repeat step 5.
7. Click `Save changes`.

> ⚠️ The **Delivery window** and the **Pickup time** are mutually exclusive options, as the same period can't be simultaneously assigned to different actions.

## Scheduled delivery

The scheduled delivery feature allows you to define delivery periods so that customers can choose the best day and time to receive their products. The delivery periods available to customers are called delivery windows.

### Configuring scheduled delivery

To configure scheduled delivery in a shipping policy, follow the steps below:

1. In the VTEX Admin, go to **Shipping > Shipping Strategy**, or type **Shipping Strategy** in the search bar at the top of the page.
2. In the **Shipping policies** tab, click the desired shipping policy, or [create a new shipping policy](/en/docs/tutorials/creating-a-shipping-policy).
3. Scroll down to the **Scheduled delivery** section.
4. Activate the `Scheduled delivery` option.
5. In the **Maximum delivery time** field, set the maximum number of days that the shipping policy allows completing a delivery — from order confirmation to delivery confirmation.
6. In the **Scheduled delivery** section, configure the delivery time windows that will be available to customers:
   - Select the `Day of the week`.
   - Complete the `Start time` for the delivery window.
   - Complete the `End time` of the delivery window.
   - You can also enter a value in the `Additional rate` field to charge an extra amount during this period (optional).
7. To add more delivery periods, click `Add new delivery period` and repeat step 6.
8. If you want to configure delivery capacity, follow the instructions in the next section. Otherwise, click `Save changes`.

> ℹ️ A delivery window is no longer available for selection once it has started. Only future delivery windows will be available to customers.

### Configuring delivery capacity (optional)

Delivery capacity allows you to limit the number of items or orders that can be delivered in each delivery window, helping you better manage scheduled deliveries. This setting is optional and doesn't affect the basic operation of the platform.

To configure delivery capacity, follow the steps below:

1. In the **Scheduled delivery** section, enable the `Configure delivery capacity` option.
2. Choose a delivery capacity unit (`items` or `orders`).
3. Click `Save changes`.

## Learn more

- [Shipping policy](/en/docs/tutorials/shipping-policy)
- [Creating a shipping policy](https://help.vtex.com/en/docs/tutorials/creating-a-shipping-policy)
- [Scheduled delivery](/en/docs/tutorials/scheduled-delivery)
- [Managing delivery capacity](/en/docs/tutorials/managing-delivery-capacity)
- [Shipping strategy](/en/docs/tutorials/shipping-strategy)
