---
title: 'How to manage Subscriptions'
id: 6Jk50FPbv6iuz1OsFypv8x
status: PUBLISHED
createdAt: 2020-02-05T14:18:54.781Z
updatedAt: 2025-08-01T16:39:23.939Z
publishedAt: 2025-08-01T16:39:23.939Z
firstPublishedAt: 2020-02-11T14:56:17.333Z
contentType: tutorial
productTeam: Post-purchase
author: 0QBQws7rk0t5Mnu8fgfUv
slugEN: how-to-manage-subscriptions
legacySlug: how-to-manage-subscriptions
locale: en
subcategoryId: 1rA9wuuskW3PpjvMrhatAM
---

The **Subscriptions** module is an app developed by VTEX to facilitate recurring sales. It works as an automatic scheduler, executing a repurchase at the frequency requested by the customer.

Your customers indicate how often they want to repeat the purchase of a specific SKU, and the system automatically resubmits the purchase order (with the same characteristics configured in the original order) every scheduled period. 

To see how to configure the **Subscriptions** functionality in your store, read [this article](/en/tutorial/como-configurar-assinatura-v2--1FA9dfE7vJqxBna9Nft5Sj).

Subscriptions are managed through the **Dashboards** page in the  **Subscriptions** module in your Admin.

## Dashboards

The **Dashboards** tab is focused on monitoring and supervising Subscriptions. There you can extract information to manage your business, through the **Unique Subscriptions**, **Subscription Orders** and **Subscribers** sections.  

### Unique Subscriptions

The **Unique Subscriptions** section allows you to:

- Filter subscriptions by date, with the following values: `today`, `yesterday`, `this week`, `this month`, `this year`, `last week`, `last month`, `last year` or a `custom` period (by selecting specific dates).
- View a **dynamic chart** with the *active* and *canceled* subscriptions within the selected period. By hovering the cursor over the chart lines, you can see in detail the subscriptions variation per day.
- **Export subscriptions** within the filtered period by clicking on the button in the upper right corner of the screen.

![EN Dashboard Assinatura única](https://cdn.statically.io/gh/vtexdocs/help-center-content/refs/heads/main/docs/en/tutorials/subscriptions/subscription-guides/how-to-manage-subscriptions_1.png)

### Subscription Orders

> ℹ️ You can only access information from orders created in the last two years, and that same period is valid for customers through [My Account](/en/tutorial/how-my-account-works--2BQ3GiqhqGJTXsWVuio3Xh).

The **Subscription Orders** section allows you to:

- Filter the **Subscription Orders Funnel** by date, applying the following filters: `today`, `yesterday`, `this week`, `this month`, `this year`, `last week`, `last month`, `last year` or a `custom` period (by selecting specific dates).
- Monitor the **absolute number and corresponding percentage** of Subscription Orders that were *scheduled*, *processed*, *generated* and *completed* per period.
- View a **chart** with the percentage of *skipped* orders, *cycles with an issue* and *payment errors*.

![EN Dashboard Pedidos Assinatura](https://cdn.statically.io/gh/vtexdocs/help-center-content/refs/heads/main/docs/en/tutorials/subscriptions/subscription-guides/how-to-manage-subscriptions_2.png)

- When accessing each tab of the **Subscription Orders** table, you can view the flow and details of the orders that were *skipped*, those that presented *Cycles with an issue*, those that contain a *Payment Error* and the *Completed* orders. 
- In addition to listing the details of the errors that occurred during the  Subscription orders flow, it is also possible to perform a **manual retry** of orders with errors. Check out our article on [Troubleshooting of Subscription orders issues](/en/tutorial/como-solucionar-pedidos-de-assinatura-com-erros--uLL8AYBGdtAmbbdL5gRCf) to learn more.

![EN Log Pedidos Assinatura](https://cdn.statically.io/gh/vtexdocs/help-center-content/refs/heads/main/docs/en/tutorials/subscriptions/subscription-guides/how-to-manage-subscriptions_3.png)

### Subscribers

Subscription orders have been grouped by customer to improve the view of your store's subscription results. The **Subscribers dashboard** offers clear monitoring of the health of your business, providing numbers and analyzes of customers with subscription requests.

Through the dashboard you can filter and provide customer support to your subscribers, improving your store’s service.

The **Subscribers** section allows you to:

- View the progression of **New** subscribers compared to the **Lost** subscribers. The absolute numbers and a chart comparing them are displayed.

- View the **total number of active subscribers** in your store.

- The subscribers’ board contains the following tabs: **New**, **Lost** and **All**. Each of them shows the flow and details of subscribers. The *New* subscribers are those who subscribed during the period you have selected in the filter, and who have at least one active subscription in the store. The *Lost* subscribers are those who don’t have an active subscription in the store and who left in the selected period.

- **Export report** in CSV, which contains the data of the corresponding tab, with the filters applied.

> ℹ️ To use this functionality, you must have a role with the `Subscription Metrics` feature enabled.

- **Search for specific subscribers** by their email addresses in the search bar.

- The **Personify** button allows for editions in each Subscription, such as changing the subscription frequency, changing the order execution date (not the delivery date, but the date of the order generation).

> ⚠️  Only users with access to Telesales can use the *Personify* button.
