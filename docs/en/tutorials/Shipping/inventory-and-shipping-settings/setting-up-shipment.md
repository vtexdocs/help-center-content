---
title: 'Setting up shipment'
id: tutorials_118
status: PUBLISHED
createdAt: 2017-04-27T22:18:51.290Z
updatedAt: 2023-03-28T13:20:14.467Z
publishedAt: 2023-03-28T13:20:14.467Z
firstPublishedAt: 2017-04-27T23:00:43.407Z
contentType: tutorial
productTeam: Post-purchase
author: authors_84
slugEN: setting-up-shipment
legacySlug: setting-up-shipment
locale: en
subcategoryId: 1UL6Q7nUN6SkA2g2SUsECi
---

This configuration is widely used when a large volume of orders ends up generating a considerable logistic demand, so it's possible for a package to wait during the preparation time of another package, so they may be sent in a group, by the same transporter, to a final destination.

> ⚠️ The shipping groups are raised by the sum of the time cost from inventory to warehouse dock and the detention time of the dock itself.

In the image below we see a __6 days__ shipment configuration. Each box represents the cost in days of a package, considering only the __stock and the dock cost.__

The first box with a total time of __2 days__ will wait for the item represented by the second box with a total time of __5 days__. We have defined that the time of the shipment is up to __6 days__, that is, items with delivery time within a period of 6 days will be grouped. The third box will follow in a different delivery group because it exceeds the shipping time.

The period considers T = 0 as the date of the order.

![Configuração em estoque e entrega EN](https://raw.githubusercontent.com/vtexdocs/help-center-content/refs/heads/main/docs/en/tutorials/Shipping/inventory-and-shipping-settings/setting-up-shipment_1.png)

## How to set up the shipment

1. In the VTEX Admin, go to **Store settings > Shipping > Settings**, or type *Shipping* in the search bar at the top of the page and select *Store settings / Shipping*.  
2. On, **Delivery Groups**, fill in the field **Create groups of shipping with intervals of X day(s)**.  
3. Click the **Save** button.  
