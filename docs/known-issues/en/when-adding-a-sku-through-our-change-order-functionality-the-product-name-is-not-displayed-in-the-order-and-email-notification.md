---
title: 'When adding a SKU through our "Change Order" functionality, the product name is not displayed in the order and e-mail notification'
id: 35Q3KoOSsUr9n9XEDIk7nk
status: PUBLISHED
createdAt: 2022-04-07T14:53:35.829Z
updatedAt: 2022-11-25T22:02:48.606Z
publishedAt: 2022-11-25T22:02:48.606Z
firstPublishedAt: 2022-04-07T14:53:36.256Z
contentType: knownIssue
productTeam: Order Management
author: 2mXZkbi0oi061KicTExNjo
tag: Order Management
slug: when-adding-a-sku-through-our-change-order-functionality-the-product-name-is-not-displayed-in-the-order-and-email-notification
locale: en
kiStatus: Backlog
internalReference: 557978
---

## Summary



The **Change Order** functionality allows you to add or remove items within the order, as well as modify the value of the order.

All the items of the at the time of purchase will have all the context and information of the catalog in the order details, while on the other hand, in case you want to add a new SKU to the order, you will not have all the context of the catalog, that is, information such as product name, image, etc. In this case, we will only have the name of the SKU (**skuName**) available, which for some stores can offer a "bad" experience in reading the information, since in some cases the store has more specific SKU names, such as example, "3 kg", "White", which have the name of the product as a complement, for example, "Brand X Rice", "Cotton T-shirt" respectively.

For those examples mentioned, the store expects to have in our UI or email notifications to the customer the full name (product name + SKU name), example:


- **Rice Brand X - 3 kg**
- **Cotton T-shirt - White**

The problem in this case is that we only have the name of the SKU (**skuName**), which would leave our UI and e-mail notifications like "incomplete". Based on our examples above, the store admin and customer will see the following:


- **3 kg**
- **White**



## Simulation



To simulate it is possible to:

1. Create an order
2. Advance with the order to the state that allows changes
3. Attempt to add a new SKU to the order
4. Validate the name detail in the order UI
5. Validate the name detail within the notification that reaches the customer when a change is made to the order



## Workaround


At this time we have no Workaroud for this behavior.

