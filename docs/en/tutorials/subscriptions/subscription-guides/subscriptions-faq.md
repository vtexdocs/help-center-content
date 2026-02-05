---
title: 'Subscriptions: FAQ'
id: 2yumbsdX8aMQiXqKtFY4tE
status: PUBLISHED
createdAt: 2025-02-20T12:33:13.030Z
updatedAt: 2025-10-24T14:42:14.291Z
publishedAt: 2025-10-24T14:42:14.291Z
firstPublishedAt: 2025-02-20T12:42:22.848Z
contentType: tutorial
productTeam: Post-purchase
author: 4JJllZ4I71DHhIOaLOE3nz
slugEN: subscriptions-faq
legacySlug: subscriptions-faq
locale: en
subcategoryId: 1rA9wuuskW3PpjvMrhatAM
---

This article intends to answer some of the most frequently asked questions about Subscriptions.

### Can I have more than one subscription in my store?
The number of subscriptions is unlimited, both for your store and for your customer. It means that there is not a limited number of subscriptions to be sold by your store or purchased by your customer. However, it is important to be aware of the conditions that apply to subscriptions.

### After creating a subscription, can customers create additional ones?
Yes, customers can create as many subscriptions as they want.

### Can my customer buy via subscription and pick up from stores or other pickup points?
Yes, read our article [Pickup points for Subscriptions (Beta)](/en/docs/tutorials/pickup-points-for-subscription-orders) for more information.

### Can my customer add more than one address to their subscription?
It is not possible to add more than one address to the same subscription.

### Can my customers change the subscription delivery address?
Yes, customers can change the address in My Account.

The merchant can also change the shipping address as many times as needed using the [Update subscription by ID](https://developers.vtex.com/docs/api-reference/subscriptions-api-v3#patch-/api/rns/pub/subscriptions/-id-) endpoint, by updating the `shippingAddress` field.

### Can my customers create a subscription with multiple products?
Yes, they can create a subscription with multiple SKUs.

The number of items in the subscription will match the quantity available when the recurring order is generated. If, for example, a customer has 4 SKUs in their subscription but only 3 are in stock at that moment, the recurring order will include only those 3 SKUs. In these cases, the missing item isn't charged, and the subscription order is marked as Partial in **My Account**.

You can also notify customers about the partially generated subscription order using our [Message Center](/en/docs/tutorials/transactional-emails-for-subscriptions-orders) module. The key for this message template is `vtexcommerce-subscriptions-partialorder`.

### Can I give discounts on the products in a subscription plan?
Yes, as long as you create a regular promotion and check the `Subscription order` checkbox. Learn how to create promotions in the track [Create Regular Promotion](/en/docs/tracks/creating-regular-promotions).

### What is the delivery estimate, and what are the shipping rules?
The delivery estimate and shipping rules are based on the applicable delivery policies for each cycle.  

### Can my customer pay for their subscription orders in installments?
Yes, as long as the store is configured to allow installments for subscriptions orders. This is done through the [Edit subscriptions settings](https://developers.vtex.com/docs/api-reference/subscriptions-api-v3#post-/api/rns/settings) endpoint, marking the `isMultipleInstallmentsEnabledOnCreation` and `isMultipleInstallmentsEnabledOnUpdate` fields as `true`.

### What happens if my customer's card has been canceled?
If payment fails, the subscription order won't be generated. Since we send a reminder email about the subscription two days before each renewal, the customer can check whether their card is still valid in time.

If the customer card was canceled and they didn't notice before the subscription was processed, they can create a one-off order in **My subscriptions**. This order includes all the items in the subscription, but it isn't considered a processed subscription — meaning it doesn't affect the dates of past or future renewals.

Additionally, they can update the card on the subscription at any time. If the card was canceled and the customer added a new one after the subscription was generated, that subscription order won't be created, but the next recurrence will be charged to the new card.

Using our [Message Center](/en/docs/tutorials/transactional-emails-for-subscriptions-orders) module, you can enable sending an email to notify customers that the subscription payment wasn't approved. The key for this message template is `vtexcommerce-subscriptions-payment-not-approved`.

### Can my customers request a scheduled delivery for their subscription orders?
Currently, it is not possible to request scheduled deliveries for subscription orders. We have made this decision to prevent your customers from being affected if your store's logistic configuration changes. 
However, your customer can create a new subscription with a future delivery date of their choosing.

### How can I cancel, skip or pause my customer's subscription order?
Currently, you can't change your customer’s subscription through the VTEX Admin. You can only pause, cancel, or skip a subscription order via Telesales, in the customer's subscription panel (My Account) or via [API](https://developers.vtex.com/docs/api-reference/subscriptions-api-v3#overview).

### Is it possible to add items from sellers or marketplaces to a subscription order?
Subscriptions can be created with items from the store, VTEX sellers, and white label sellers (franchise account).

### If the retailer creates a minimum value rule, will it affect subscriptions?
Yes, if the subscription order value is below the threshold defined by the _Minimum total value in cart_ setting. Note that our subscription module does not support cycles/orders with a total value of $0.

### I need only the plan to display at checkout, not the individual products, and the plan's amount must be the total of the selected products with the discount applied. Is it possible to make this customization?
No. At least one item must be part of the subscription for it to be displayed at checkout.

### If the price of an SKU changes, will it affect my customer's subscription?
By default, yes. The subscription price the customer pays is based on the price configured for each SKU. The customer subscription doesn’t follow the price conditions of the first order. Each order is placed with the same products as the original order, but the price is calculated based on whatever the price configuration is at the time of the next order cycle. 

You can change this setting for new subscriptions via API using the [Edit subscriptions settings](https://developers.vtex.com/docs/api-reference/subscriptions-api-v3#post-/api/rns/settings) request. Send `true` in the `useItemPriceFromOriginalOrder` field if you want the subscription to use the price of the first order.

### What time are subscription orders generated?
By default, subscription orders are created between 6:00 and 7:00 a.m. UTC-3.

However, you can set a different time via API using the [Edit subscriptions settings](https://developers.vtex.com/docs/api-reference/subscriptions-api-v3#post-/api/rns/settings) request. Send the new time in the `executionHourInUtc` field.

### Does the functionality Subscriptions work with Seller Portal?
No, Subscriptions does not work with [Seller Portal](/en/docs/tutorials/how-to-set-up-your-store-on-seller-portal).

### How does it work to create subscriptions from original orders that have SKUs with attachments?
By default, stores do not create subscription orders associating SKU [attachments](/en/docs/tutorials/what-is-an-attachment) with the original order, i.e., attachments are not considered in recurring orders. However, you can enable this setting for your store, but it can only be done via API using the [Edit subscriptions settings](https://developers.vtex.com/docs/api-reference/subscriptions-api-v3#post-/api/rns/settings) endpoint. Learn more in [How to keep attachments from original orders in subscriptions](https://developers.vtex.com/docs/guides/how-to-keep-attachments-from-original-orders-in-subscriptions).
