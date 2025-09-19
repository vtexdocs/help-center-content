---
title: 'How subscriptions work'
id: frequentlyAskedQuestions_4453
status: PUBLISHED
createdAt: 2019-01-24T20:46:00.886Z
updatedAt: 2025-02-19T20:14:45.602Z
publishedAt: 2025-02-19T20:14:45.602Z
firstPublishedAt: 2019-01-24T22:14:56.290Z
contentType: tutorial
productTeam: Post-purchase
author: 0QBQws7rk0t5Mnu8fgfUv
slugEN: how-subscriptions-work
legacySlug: how-a-subscription-works
locale: en
subcategoryId: 1rA9wuuskW3PpjvMrhatAM
---

The **Subscription System** is an app developed by VTEX to facilitate recurring sales. It works as an automatic scheduler, making a purchase at the frequency requested by the customer. 

Your customers indicate how often they want to repeat the purchase of a specific SKU, and the system resubmits the order. This purchase is made automatically every scheduled period, with the same configuration as the original order. Subscription is a simple solution to save your customer's time and to add a scheduled sales flow to your store.

For VTEX, a subscription consists of an SKU list that is linked to a specific purchase configuration. All management operations are based on the Subscription entity, which contains all the necessary information to generate a recurring order, such as:

- User profile
- Address
- Payment method
- Frequency
- Subscription order start date

## How your customer generates an order with a subscription

When you finish [configuring the Subscription feature](/en/tutorial/como-configurar-assinatura-v2--1FA9dfE7vJqxBna9Nft5Sj), your customers will be able to generate a subscription order in your store. There are two ways for your customers to create a subscription:

### By adding products to the subscription during checkout

When adding a *Subscription-enabled product* during checkout, a drop-down selector will be displayed for each product, with the subscription options associated with that SKU. Your customer must then select the desired subscription option and frequency. This flow can be customized in some cases, depending on the business needs.

The customer will then proceed with the usual purchase flow. They must enter the shipping address and use one of the payment methods enabled for the Subscription System. The subscription will be active upon payment approval.

### By creating a new subscription on the "My Account" page

Your customers have access to a **screen for creating subscriptions** on the **My Account** page. In this section, they can configure a new subscription without going through the checkout and placing an order.

To do that, go to the **My Account** page on your store's website, access the **Subscriptions** section, and click on **New subscription**. Once you have added a payment method and a shipping address, click on the **Subscribe** button to activate the subscription of the selected products.

## How your customers view and manage their subscriptions

> ℹ️ In [My Account](/en/tutorial/how-my-account-works--2BQ3GiqhqGJTXsWVuio3Xh), customers can only access their orders from the last two years.

A list of all the customer’s subscriptions, containing their details and statuses, will be displayed in the **Subscriptions** section, on the **My Account** page. Your customer will also receive a confirmation of the subscription and the generated order by email.  

You will communicate with your customers about their subscriptions through the **Message Center** module. Please read our article about [Transactional emails for subscription orders](/en/tutorial/e-mails-transacionais-para-pedidos-de-assinatura--2NYHqHMRqZ43Cn6s84ZCB5). 

### Subscription details

We have redesigned our subscription details page to improve the customer experience. The new version reduces the time to find information and perform tasks. Additionally, there is a new feature to add items to an existing subscription.

### Notification box

We have added a notification box to improve the communication with users about what actions have to be done and communicate important events about the subscription. In this box, the customer will be able to:

-   Edit the subscription frequency.
-   Change the subscription period.
-   Edit the billing day.
-   Edit the address registered in the subscription.
-   Pause the subscription.
-   Cancel the subscription.
-   Change the payment method used in the subscription.

### Adding products to a subscription

Now you can add a new item to your subscription by searching the products available in your store.
