---
title: 'How subscriptions work'
id: frequentlyAskedQuestions_4453
status: PUBLISHED
createdAt: 2019-01-24T20:46:00.886Z
updatedAt: 2024-08-29T15:23:33.643Z
publishedAt: 2024-08-29T15:23:33.643Z
firstPublishedAt: 2019-01-24T22:14:56.290Z
contentType: tutorial
productTeam: Post-purchase
author: 0QBQws7rk0t5Mnu8fgfUv
slug: how-subscriptions-work
locale: en
legacySlug: how-a-subscription-works
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

When you finish [configuring the Subscription feature](https://help.vtex.com/en/tutorial/como-configurar-assinatura-v2--1FA9dfE7vJqxBna9Nft5Sj), your customers will be able to generate a subscription order in your store. There are two ways for your customers to create a subscription:

### By adding products to the subscription during checkout

When adding a *Subscription-enabled product* during checkout, a drop-down selector will be displayed for each product, with the subscription options associated with that SKU. Your customer must then select the desired subscription option and frequency. This flow can be customized in some cases, depending on the business needs.

The customer will then proceed with the usual purchase flow. They must enter the shipping address and use one of the payment methods enabled for the Subscription System. The subscription will be active upon payment approval.

### By creating a new subscription on the "My Account" page

Your customers have access to a **screen for creating subscriptions** on the **My Account** page. In this section, they can configure a new subscription without going through the checkout and placing an order.

To do that, go to the **My Account** page on your store's website, access the **Subscriptions** section, and click on **New subscription**. Once you have added a payment method and a shipping address, click on the **Subscribe** button to activate the subscription of the selected products.

## How your customers view and manage their subscriptions

>ℹ️ In [My Account](https://help.vtex.com/en/tutorial/how-my-account-works--2BQ3GiqhqGJTXsWVuio3Xh), customers can only access their orders from the last two years.

A list of all the customer’s subscriptions, containing their details and statuses, will be displayed in the **Subscriptions** section, on the **My Account** page. Your customer will also receive a confirmation of the subscription and the generated order by email.  

You will communicate with your customers about their subscriptions through the **Message Center** module. Please read our article about [Transactional emails for subscription orders](https://help.vtex.com/en/tutorial/e-mails-transacionais-para-pedidos-de-assinatura--2NYHqHMRqZ43Cn6s84ZCB5). 

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

## Frequently asked questions about subscriptions

1. **Can I have more than one subscription in my store?**
The number of subscriptions is unlimited, both for your store and for your customer. It means that there is not a limited number of subscriptions to be sold by your store or purchased by your customer. However, it is important to be aware of the conditions that apply to subscriptions.  

2. **Can my customer buy via subscription and pick up from stores or other pickup points?**
Yes, read our article [Pickup points for Subscriptions (Beta)](https://help.vtex.com/en/tutorial/pickup-points-for-subscription-orders-beta--csIqB6iBh4QNIFdEj0nVv) for more information.

3. **Can my customer add more than one address to their subscription?**
It is not possible to add more than one address to the same subscription.  

4. **What is the delivery estimate, and what are the shipping rules?**
The delivery estimate and shipping rules are based on the applicable delivery policies for each cycle.  

5. **Can my customer pay for their subscription orders in installments?**
Yes, as long as the store is configured to allow installments for subscriptions orders. This is done through the [Edit subscriptions settings](https://developers.vtex.com/docs/api-reference/subscriptions-api-v3#post-/api/rns/settings) endpoint, marking the `isMultipleInstallmentsEnabledOnCreation` and `isMultipleInstallmentsEnabledOnUpdate` fields as `true`.

6. **What happens if my customer's card has been canceled?**
The system will not generate the subscription due to the lack of payment.

7. **Can my customers request a scheduled delivery for their subscription orders?**
Currently, it is not possible to request scheduled deliveries for subscription orders. We have made this decision to prevent your customers from being affected if your store's logistic configuration changes. 
However, your customer can create a new subscription with a future delivery date of their choosing.

8. **How can I cancel, skip or pause my customer's subscription order?**
Currently, it is not possible to change your customer's subscription orders through VTEX's Admin. It is only possible to pause, cancel or skip a subscription order accessing your client's account through the Call center, in the subscriptions dashboard, or via our [APIs](https://developers.vtex.com/docs/api-reference/subscriptions-api-v3#overview).

9. **Is it possible to add items from sellers or marketplaces to a subscription order?**
Subscriptions can be created with items from the store, VTEX sellers, and white label sellers (franchise account).

10. **If the retailer creates a minimum value rule, will it affect subscriptions?**
Yes, if the subscription order value is below the threshold defined by the _Minimum total value in cart_ setting. Note that our subscription module does not support cycles/orders with a total value of $0.

11. **If the price of an SKU changes, will it affect my customer's subscription?**
Yes, the price charged for the subscription is based on the price configured for each SKU. The customer's subscription does not follow the price conditions of the first subscription order. The scheduled order will have the same products as the original order, but the system will calculate the price based on the next cycle's valid price.

12. **What time are subscription orders generated?**
Subscription orders are created between 6:00 and 7:00 am in Brazil zone (GMT-3).

13. **Does the functionality Subscriptions work with Seller Portal?** No, Subscriptions does not work with [Seller Portal](https://help.vtex.com/en/tutorial/how-to-set-up-your-store-on-seller-portal).
