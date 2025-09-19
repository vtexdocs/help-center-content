---
title: 'Subscriptions: FAQ'
id: 2yumbsdX8aMQiXqKtFY4tE
status: PUBLISHED
createdAt: 2025-02-20T12:33:13.030Z
updatedAt: 2025-04-15T16:31:46.707Z
publishedAt: 2025-04-15T16:31:46.707Z
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

### Can my customer buy via subscription and pick up from stores or other pickup points?
Yes, read our article [Pickup points for Subscriptions (Beta)](/en/tutorial/pickup-points-for-subscription-orders-beta--csIqB6iBh4QNIFdEj0nVv) for more information.

### Can my customer add more than one address to their subscription?
It is not possible to add more than one address to the same subscription.  

### What is the delivery estimate, and what are the shipping rules?
The delivery estimate and shipping rules are based on the applicable delivery policies for each cycle.  

### Can my customer pay for their subscription orders in installments?
Yes, as long as the store is configured to allow installments for subscriptions orders. This is done through the [Edit subscriptions settings](https://developers.vtex.com/docs/api-reference/subscriptions-api-v3#post-/api/rns/settings) endpoint, marking the `isMultipleInstallmentsEnabledOnCreation` and `isMultipleInstallmentsEnabledOnUpdate` fields as `true`.

### What happens if my customer's card has been canceled?
The system will not generate the subscription due to the lack of payment.

### Can my customers request a scheduled delivery for their subscription orders?
Currently, it is not possible to request scheduled deliveries for subscription orders. We have made this decision to prevent your customers from being affected if your store's logistic configuration changes. 
However, your customer can create a new subscription with a future delivery date of their choosing.

### How can I cancel, skip or pause my customer's subscription order?
Currently, it is not possible to change your customer's subscription orders through VTEX's Admin. It is only possible to pause, cancel or skip a subscription order accessing your client's account through the Call center, in the subscriptions dashboard, or via our [APIs](https://developers.vtex.com/docs/api-reference/subscriptions-api-v3#overview).

### Is it possible to add items from sellers or marketplaces to a subscription order?
Subscriptions can be created with items from the store, VTEX sellers, and white label sellers (franchise account).

### If the retailer creates a minimum value rule, will it affect subscriptions?
Yes, if the subscription order value is below the threshold defined by the _Minimum total value in cart_ setting. Note that our subscription module does not support cycles/orders with a total value of $0.

### If the price of an SKU changes, will it affect my customer's subscription?
By default, yes. The subscription price the customer pays is based on the price configured for each SKU. The customer subscription doesn’t follow the price conditions of the first order. Each order is placed with the same products as the original order, but the price is calculated based on whatever the price configuration is at the time of the next order cycle. 

You can change this setting for new subscriptions via API using the [Edit subscriptions settings](https://developers.vtex.com/docs/api-reference/subscriptions-api-v3#post-/api/rns/settings) request. Send `true` in the `useItemPriceFromOriginalOrder` field if you want the subscription to use the price of the first order.

### What time are subscription orders generated?
By default, subscription orders are created between 6:00 and 7:00 a.m. UTC-3.

However, you can set a different time via API using the [Edit subscriptions settings](https://developers.vtex.com/docs/api-reference/subscriptions-api-v3#post-/api/rns/settings) request. Send the new time in the `executionHourInUtc` field.

### Does the functionality Subscriptions work with Seller Portal?
No, Subscriptions does not work with [Seller Portal](/en/tutorial/how-to-set-up-your-store-on-seller-portal).

### How does it work to create subscriptions from original orders that have SKUs with attachments?
By default, stores do not create subscription orders associating SKU [attachments](/en/tutorial/o-que-e-um-anexo--aGICk0RVbqKg6GYmQcWUm) with the original order, i.e., attachments are not considered in recurring orders. However, you can enable this setting for your store, but it can only be done via API using the [Edit subscriptions settings](https://developers.vtex.com/docs/api-reference/subscriptions-api-v3#post-/api/rns/settings) endpoint. Learn more in [How to keep attachments from original orders in subscriptions](https://developers.vtex.com/docs/guides/how-to-keep-attachments-from-original-orders-in-subscriptions).
