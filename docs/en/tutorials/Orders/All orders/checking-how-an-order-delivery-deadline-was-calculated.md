---
title: 'Checking how an order delivery deadline was calculated'
id: 6Qj4Y9TIYMOKGk2MOwaSEq
status: PUBLISHED
createdAt: 2018-01-12T13:16:12.591Z
updatedAt: 2023-03-29T20:46:38.254Z
publishedAt: 2023-03-29T20:46:38.254Z
firstPublishedAt: 2018-01-12T14:11:38.576Z
contentType: tutorial
productTeam: Post-purchase
author: authors_24
slug: checking-how-an-order-delivery-deadline-was-calculated
locale: en
legacySlug: checking-how-an-order-delivery-deadline-was-calculated
subcategoryId: 2t00bBkcAwIkgSCGKsMOwY
---

You can check how the deadline for an order was calculated using the __freight simulation__ in the __Shipping__ module.

### Example

Let's say you want to know what criteria the platform used to calculate the delivery deadline of the order with ID `930221070506-01`, held on May 06.

First, let's enter the __All Orders__ module to see the order.

![1](//images.ctfassets.net/alneenqid6w5/2tlBnsKXyuMxuCI2U2Ekyi/35c860bb303a575b221fd1662e749867/1.png)

>In the upper right corner, you see the __date in which the order was made__ (MAY 6 2019).
>And in the bottom of the screen, you see the __order delivery deadline__ (MAY 22 2019).

Now let's enter the __Inventory & shipping__ module and simulate the freight of this order.

To do this, follow the steps below:

1. In the VTEX Admin, go to **Shipping > Shipping Simulator**, or type *Shipping Simulator* in the search bar at the top of the page.  
2. Enter the name or ID of each SKU that was in the shopping cart of the order that you want to investigate, including the quantity of each of them.![2](//images.ctfassets.net/alneenqid6w5/SCHsOOepDsyafXnm2pWJW/58cb84906928bb1295fad1d807bd737d/2.png)
3. Enter the purchase order's zip code.
4. Click __Shipping simulation__.

In the example below, note that 4 carriers were considered, and 12 were disregarded.

![3](//images.ctfassets.net/alneenqid6w5/1iMnSymiQdjkdd8uC2RRGN/be814f59861f03bea128f4307151c457/3.png)

Checking again the order details page, we see that the type of delivery chosen by the customer for this order was __Expressa__, and that the carrier chosen by the platform to make the delivery was __Expressa & CO__.

![4](//images.ctfassets.net/alneenqid6w5/5CnczmPwairE2lypuLgeUM/64ee3a9cffba79370182c935e5d44073/4.png)

Therefore, returning to the freight simulation, in the Shipping menu, we conclude that the first option was chosen for this delivery - and that therefore the total delivery time for the order was 12 days.

![5](//images.ctfassets.net/alneenqid6w5/euQuUd8FDcK5NE9wsLbp7/498df87eb1a5eaa10d1c32f63c63e7f6/5.png)

Now just click __show details__ to see the cost times that were used to calculate this deadline.

![2019-06-05 17 52 13-Shipping simulator](//images.ctfassets.net/alneenqid6w5/3nsjSgTBJEhVTGZr90nFXa/bd883156e87ede57fae70c3d05d516f5/2019-06-05_17_52_13-Shipping_simulator.png)

Each of the three cost times corresponds to what was defined for the three steps of the logistics route: stock, dock and carrier.

### Related articles

- [How the order delivery deadline is calculated](/en/tutorial/how-is-the-order-delivery-deadline-calculated)
