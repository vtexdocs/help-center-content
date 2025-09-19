---
title: 'Transactional emails for subscriptions orders'
id: 2NYHqHMRqZ43Cn6s84ZCB5
status: PUBLISHED
createdAt: 2020-02-11T15:13:38.504Z
updatedAt: 2024-10-04T14:15:54.337Z
publishedAt: 2024-10-04T14:15:54.337Z
firstPublishedAt: 2020-02-17T21:15:14.903Z
contentType: tutorial
productTeam: Post-purchase
author: 0QBQws7rk0t5Mnu8fgfUv
slugEN: transactional-emails-for-subscriptions-orders
legacySlug: transactional-emails-for-subscription-orders
locale: en
subcategoryId: 1rA9wuuskW3PpjvMrhatAM
---

All communication with your customer about [Subscriptions](/en/tutorial/como-funciona-a-assinatura--frequentlyAskedQuestions_4453) will take place through the **Email Templates** module. Transactional emails related to subscriptions are fully customizable and are installed by default in the VTEX Admin.

To access transactional emails for subscriptions orders, check out the walk-through below:

1. In the VTEX Admin, go to **Store Settings > Email Templates > Templates**, or type **Templates** in the search bar at the top of the page.
2. Search for _Subscriptions_ in the search box, or use the filters.
3. Click on the card of the desired template to configure it.
4. Make the desired changes.
5. Clique `Save`.

You can also [create your own email template](/en/tutorial/understanding-the-message-center--tutorials_84).

## How your customer tracks their subscription orders

> ℹ️ In [My Account](/en/tutorial/how-my-account-works--2BQ3GiqhqGJTXsWVuio3Xh), customers can only access their orders from the last two years.

Each action that occurs within the **Subscriptions** order flow contains a trigger that sends an email notifying your customer. After activating the subscription, your customer will receive emails with details of the status of each subscription order every time they perform an action.

It is not necessary to activate the email sending manually, since they are sent automatically according to each scenario included in **Email Templates**. However, if you wish, you can disable the sending of specific emails:

1. In the VTEX Admin, go to **Store Settings > Email Templates > Templates**, or type **Templates** in the search bar at the top of the page.
2. Search for _Subscriptions_ in the search box, or use the filters.
3. Click on the card of the desired template to configure it.
4. Uncheck the `Enable sending emails?` box, that is checked by default.
5. Click `Save`.

## Default email templates

The table below shows the default email templates for **Subscriptions**:

| **Template name** | **ID** | **Description** |
| :---: | :---: | :--- |
| Paused subscription | `paused-subscription` | Subscription paused. |
| Canceled Subscription | `canceled-subscription` | Subscription successfully canceled. |
| Expired Subscription | `expired-subscription` | Subscription period expired. |
| New Subscription | `new-subscription` | Subscription successfully created.<br><br>> ℹ️ There is a delay between the subscription creation and the triggering of the `new-subscription` template notification. |
| Next Subscription Order Reminder | `next-subscription-order-reminder` | Reminder that the next subscription purchase date will be in two days. |
| Payment not approved | `payment-not-approved` | Subscription order payment not approved. |
| Reactivated Subscription | `reactivated-subscription` | Subscription reactivated. |
| Skipped Subscription | `skipped-subscription` | Subscription order “skipped” by the customer. |
| Subscription Creation Error | `subscription-creation-error` | Error in subscription creation. |
| Subscription Error | `subscription-error` | Error in subscription order creation. |
| Unavailable Items | `unavailable-items` | Subscription order created with item unavailability. |
| Updated Subscription | `updated-subscription` | Subscription updated successfully. |
