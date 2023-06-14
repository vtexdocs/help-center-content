---
title: 'Creating a contingency pickup point to guarantee it as an option at checkout'
id: 3mowqWEfjyM2g6WoWgE0Ao
status: CHANGED
createdAt: 2018-04-01T16:02:02.437Z
updatedAt: 2020-06-20T04:56:48.306Z
publishedAt: 2020-06-14T22:20:33.622Z
firstPublishedAt: 2019-01-25T17:26:19.150Z
contentType: tutorial
productTeam: Shopping
author: authors_35
slug: creating-a-contingency-pickup-point-to-guarantee-it-as-an-option-at-checkout
legacySlug: creating-a-contingency-pickup-point-to-guarantee-it-as-an-option-at-checkout
subcategory: 8AGXmtpbTqUE2KQu0Swwk
---

In an omnichannel scenario in which your store uses pickup points set up on franchise accounts, it can be useful to create contingency pickup points. This article explains what this configuration is, what it is used for and how to set it up.

If your end customer buys a product on any of your channels (online or physical stores) and wants to pick it up at a specific store, by default this store only appears as a pickup point option during the checkout if the product is available in its stock.

However, you may prefer this store to work as a pickup point __even in a stockout scenario__. For this, your logistics must make sure that the product will reach that store from another stock - for example, from the e-commerce one. In this case, you need to have an e-commerce shipping policy in which the pickup point of the physical store is configured.

![contingency pickup](//images.ctfassets.net/alneenqid6w5/7sxWH5eDPpCmNlEPfHiZF1/7a10b60e1273d58d9c2ca7610a9ba888/contingency_pickup.png)

## How to set up a contingency pickup point

Follow these steps to implement a contingency stock:
- In the administrative panel of the e-commerce or the store that you want to use as a fallback - that is, the store from which the products will leave the stock to supply the pickup point -, set up a new pickup point with the information from the physical store.
- In the e-commerce or fallback store, create a new shipping policy. This shipping policy must have exactly the __same SLA type__ already configured in the pickup logistics you use in the physical store where the products will be picked up.
- Link the newly created pickup point with this shipping policy.

<div class="alert alert-info">
With this, you will have two logistics routes with the same pickup point: one, coming from the local stock of the physical store; the other coming from the stock from another channel (e-commerce or another physical store). When a customer chooses this pick-up point at checkout, the two routes will compete. Whenever there is local inventory, its SLA will be better and therefore will prevail. When there is stockout in the local stock, the order will fall on the route you set up according to this article.
</div>
