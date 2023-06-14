---
title: How is the order delivery deadline calculated?
id: 1TOuKCIjGQmqOqQkEqCg82
status: PUBLISHED
createdAt: 2018-01-12T12:56:52.805Z
updatedAt: 2023-03-29T14:09:06.429Z
publishedAt: 2023-03-29T14:09:06.429Z
firstPublishedAt: 2018-01-12T14:42:26.502Z
contentType: tutorial
productTeam: Post-purchase
author: authors_24
slug: how-is-the-order-delivery-deadline-calculated
legacySlug: how-is-the-order-delivery-deadline-calculated
subcategory: 7fTH6bP0C4IaM8qWi0kkQC
---

The deadline for delivering an order takes into account the "cost periods" defined for the five stages of the logistics route:
- Stock.
- Dock.
- Carrier.
- Holidays.
- Cut-off times.

That is, for each of these steps you can define a detention time - and the delivery time that your customer will see at the checkout is the sum of these cost times.

![deliveryCostTimes](//images.contentful.com/alneenqid6w5/hA6N4VPj440AEqEecIUck/0a6784f0c3d6f6d88b65547762600a7d/deliveryCostTimes.png)

The detention time for the __stock__ and __dock__ are defined in the setting screens of each of these steps, in **Shipping > Shipping Strategy.**

![entrega1.en](https://images.ctfassets.net/alneenqid6w5/39bRRLzf4nv4V0EpDe71cQ/ae7546c90db3697294b9fc499a80dd81/entrega1.en.png) 

![entrega2.en](https://images.ctfassets.net/alneenqid6w5/23DgHkimiBcH2alWZEQyYI/b9b78b5cbddaa2efa0a218122ab818ad/entrega2.en.png)

The detention cost of the __carrier__ is defined in the freight table, sent to VTEX through the carrier configuration screen, also in the **Shipping Strategy > Shipping policy** tab.

![entrega3.en](https://images.ctfassets.net/alneenqid6w5/lFStGX80SPEuAWnVwt2eK/ca241929a087956172dedc1097559871/entrega3.en.png)

### Go further

Through freight simulation, you can check how the delivery time for a specific order has been calculated. Understand how in the article [Checking how an order delivery deadline was calculated](/en/tutorial/checking-how-an-order-delivery-deadline-was-calculated).
