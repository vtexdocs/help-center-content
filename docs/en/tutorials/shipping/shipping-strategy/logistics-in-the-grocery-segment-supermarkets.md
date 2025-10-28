---
title: 'Logistics in the Grocery Segment (supermarkets)'
id: tutorials_142
status: PUBLISHED
createdAt: 2017-04-27T22:16:54.342Z
updatedAt: 2019-12-31T15:20:20.356Z
publishedAt: 2019-12-31T15:20:20.356Z
firstPublishedAt: 2017-04-27T23:00:45.231Z
contentType: tutorial
productTeam: Post-purchase
author: authors_84
slugEN: logistics-in-the-grocery-segment-supermarkets
legacySlug: logistics-in-the-grocery-segment-supermarkets
locale: en
subcategoryId: 7fTH6bP0C4IaM8qWi0kkQC
---

One of the challenges of e-commerce transactions in the grocery niche is the fulfillment, due to its storage particularities when compared to common e-commerces.

Fulfillment is nothing else than the process of analysis of orders, separation (picking), packaging (packing) and dispatch of products. This article does not discuss order flow, or parameterization of the Logistics module, only operating concepts:

**Picking:** Product separation process during storage, also known as order picking.

**Packing: **Final packaging process of products by order, also known as order packing.

## Lack of a warehouse

In most conventional e-commerce operations, we have a warehouse that represents the stock. But, on the majority of grocery operations, this warehouse is not practiced due to perishability, fast detriment of goods (validity) and the wide variety of product mix.

![](https://cdn.statically.io/gh/vtexdocs/help-center-content/refs/heads/main/docs/en/tutorials/shipping/shipping-strategy/logistics-in-the-grocery-segment-supermarkets_1.jpg)

In this context, the existence of a warehouse that represents the stock would demand almost twice of the required space, together with a major order flow before the detriment of the products.

To avoid this costly and complex operation, groceries, in general, use their own POS as stock source, which means the products on the shelves are the same products that feed the stock of the webstore. However, there are two key points to consider on this model:

1: Separation of products is made among the customers of the physical store, so it is necessary to set strategic cutting times, so that the product is not disputed by the channels.

The best practice is to perform picking at nighttime, when customer traffic is infinitely smaller in 24 hours stores, and null in conventional ones.

2: There is a possibility that the product is sold in the virtual store, but no longer available for picking on the shelf, which means that a physical store customer purchased it during separation intervals.

The best practice, in this situation, is to enable the customer to choose similar products right at the time of purchase. 

That is, buying a washing powder from x brand, he agrees to receive a washing powder from y brand. There are several possibilities on how to to deal with this on the virtual store. The most common is the use of "attachment items", an option that allows explicit acceptance of a similar product in the shopping cart. Or, even before that, when the customer clicks on a product, a list of interchangeable options can be immediatelly displayed. This options list may be registered in conventional windowshops of the SKU registration, under tags like "similars", "suggestions" or "accessories", and associated to attachments items.

[See more details on attachments.](http://vtex.github.io/docs/vtex.js/latest/checkout/index.html)

If the client revokes the acceptance of similarity, just [perform a change in the order](http://lab.vtex.com/docs/oms/api/latest/orders/index.html#registrar-mudanas) and create a voucher that, in turn, can be automated in the [gift-cards system](http://lab.vtex.com/docs/gcs/api/latest/giftcard/index.html#listar-gift-cards)

## _Wave_ Picking

From average volumes (over 30 daily requests) on, the most recommended picking method for the grocery niche is called "Wave". This method is performed in two steps:
1. Group all products, without order distinction. This reduces changes in product addressing.
2. After the separation of the products, direct them to the area where orders are assembled. These waves can be organized by carrier, routes, docks or lot.

![](https://cdn.statically.io/gh/vtexdocs/help-center-content/refs/heads/main/docs/en/tutorials/shipping/shipping-strategy/logistics-in-the-grocery-segment-supermarkets_2.jpg)

## _Wave_ Picking _by lot_ favors packing

Due to the wide range of salable products in the grocery, "wave picking by lot" is the most recommended method for this niche. This method consists simply in performing waves separately, by lots. The most common are: frozen, chilled, fresh, perishable, non-perishable, canned and fragile; relate the products to their respective orders after separation. This way you can determine cutting priorities in separation, so there&#8217;s no detriment of products.  It is recommended to follow this prioritization chronological order:

1. Canned
2. Non-perishable
3. Perishable
4. Fresh
5. Chilled
6. Fragile
7. Frozen

![](https://cdn.statically.io/gh/vtexdocs/help-center-content/refs/heads/main/docs/en/tutorials/shipping/shipping-strategy/logistics-in-the-grocery-segment-supermarkets_3.jpg)

Besides being essential for separation, the lot is very important for Packing, once each lot type has its particular characteristics and requirements:

**1 and 2. Canned and Non-Perishable:** must be transported in cardboard boxes, without the need of any apparatus assistance.
Examples: beverages, household items, personal care, personal beauty, etc.

**3. Perishable: **must be transported in plastic bags, preferably into separated plastic bags commonly used for weighting.
Examples: Flours, grains, cookies, spices, vegetables, condiments etc.

**4 and 5. **Refrigerated and Fresh: must be transported in thermal bags. They remain preserved up to 6 hours without the need of any apparatus assistance.
Examples: Fresh pasta, meat, poultry, fish, dairy products, cold meats, etc.

**6. Fragile: **Must be transported in cardboard boxes coated with bubble wrap, and remain preserved for up to 6 hours. Extreme caution with this lot is more than required.
Examples: eggs, fruits, bomboniere, potatoes etc

**7. Frozen: **must be transported in coolers, and remain preserved for up to 6 hours with the aid of ice. Ice should preferably be sealed in plastic containers in order to avoid water contact and to allow input reuse.
Examples: Ice cream, desserts, breaded products, ready meals, burgers, snacks, etc.

![](https://cdn.statically.io/gh/vtexdocs/help-center-content/refs/heads/main/docs/en/tutorials/shipping/shipping-strategy/logistics-in-the-grocery-segment-supermarkets_4.jpg)

## Dispatch, transport and delivery

At the end of &#8220;wave picking by lot&#8221;, packing must be carried out and the dispatch is performed according to transport packaging. Due to the different containers bearing the orders, the distribution to common carriers is virtually impossible. That&#8217;s why groceries need dedicated or own carriers.
At the final delivery, the products are removed from their packages and delivered in plastic handbags, except for those transported in cardboard boxes and plastic bags, which can be left with the final customer.
_All descriptions above are best practice tips. The assertiveness of each operation is always dictated by safety and speed._

