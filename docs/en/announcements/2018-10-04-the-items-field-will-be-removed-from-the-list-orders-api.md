---
title: "The 'items' field will be removed from the List Orders API"
id: 40UDVKiocUCSi8Uo8eUKui
status: PUBLISHED
createdAt: 2018-10-04T20:56:17.252Z
updatedAt: 2019-12-31T15:13:36.551Z
publishedAt: 2019-12-31T15:13:36.551Z
contentType: updates
productTeam: Post-purchase
author: authors_24
slug: the-items-field-will-be-removed-from-the-list-orders-api
locale: en
legacySlug: the-items-field-will-be-removed-from-the-list-orders-api
announcementImageID: ''
announcementSynopsisEN: 'On 10/12, we will remove this field (already obsolete) to give greater stability and performance to order indexing.'
---

On __October 12__, we will remove the `items` field from the List Orders API.

<div class="alert">
List Orders API request: <code>http://{{accountName}}.{{environment}}.com.br/api/oms/pvt/orders</code>
</div>

If your store uses the List Orders API and your integration mapping is expected to receive the `items` field, your development team needs to __remove it from the integration mapping__.

>⚠️ The `items` field of the List Orders API has already been **stale** for quite some time. It does not have any use today, and so your store should not consider it in your integrations. To get order items, you should be using the [Feed API](http://help.vtex.com/en/tutorial/how-the-oms-feed-works) .

It is important to remember that __the List Orders API remains working normally__. Only the `items` field will be deleted.

### Why are we doing this?

Removing this field will greatly increase the stability and performance of the orders indexer.

That is why it's crucial to remove it from integration.

>ℹ️ **Attention:** This change only impacts integrations that depend on the delivery of the `items` field through the List Orders API.

>ℹ️ This change does **not** affect the Get Orders API. In it, the `items` field continues to exist and keeps being normally updated.

<div class="alert">
Get Order API request: <code>http://{{accountName}}.{{environment}}.com.br/api/oms/pvt/orders/{{orderId}}</code>
</div>

---

- __What will happen__: We will remove the `items` field from the List Orders API.
- __When__: October 12, 2018.
- __Why__: To improve the stability and performance of order indexing.
- __What you need to do__: If your store depends on the `items` field returned by the List Orders API (and in such case only), your development team needs to remove the `items` field from the integration mapping.
