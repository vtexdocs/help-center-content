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
slugEN: checking-how-an-order-delivery-deadline-was-calculated
legacySlug: checking-how-an-order-delivery-deadline-was-calculated
locale: en
subcategoryId: 2t00bBkcAwIkgSCGKsMOwY
---

You can check how the deadline for an order was calculated using the __freight simulation__ in the __Shipping__ module.

### Example

Let's say you want to know what criteria the platform used to calculate the delivery deadline of the order with ID `930221070506-01`, held on May 06.

First, let's enter the __All Orders__ module to see the order.

![1](https://cdn.statically.io/gh/vtexdocs/help-center-content/refs/heads/main/docs/en/tutorials/orders/all-orders/checking-how-an-order-delivery-deadline-was-calculated_1.png)

>In the upper right corner, you see the __date in which the order was made__ (MAY 6 2019).
>And in the bottom of the screen, you see the __order delivery deadline__ (MAY 22 2019).

Now let's enter the __Inventory & shipping__ module and simulate the freight of this order.

To do this, follow the steps below:

1. In the VTEX Admin, go to **Shipping > Shipping Simulator**, or type *Shipping Simulator* in the search bar at the top of the page.  
2. Enter the name or ID of each SKU that was in the shopping cart of the order that you want to investigate, including the quantity of each of them.![2](https://cdn.statically.io/gh/vtexdocs/help-center-content/refs/heads/main/docs/en/tutorials/orders/all-orders/checking-how-an-order-delivery-deadline-was-calculated_2.png)
3. Enter the purchase order's zip code.
4. Click __Shipping simulation__.

In the example below, note that 4 carriers were considered, and 12 were disregarded.

![3](https://cdn.statically.io/gh/vtexdocs/help-center-content/refs/heads/main/docs/en/tutorials/orders/all-orders/checking-how-an-order-delivery-deadline-was-calculated_3.png)

Checking again the order details page, we see that the type of delivery chosen by the customer for this order was __Expressa__, and that the carrier chosen by the platform to make the delivery was __Expressa & CO__.

![4](https://cdn.statically.io/gh/vtexdocs/help-center-content/refs/heads/main/docs/en/tutorials/orders/all-orders/checking-how-an-order-delivery-deadline-was-calculated_4.png)

Therefore, returning to the freight simulation, in the Shipping menu, we conclude that the first option was chosen for this delivery - and that therefore the total delivery time for the order was 12 days.

![5](https://cdn.statically.io/gh/vtexdocs/help-center-content/refs/heads/main/docs/en/tutorials/orders/all-orders/checking-how-an-order-delivery-deadline-was-calculated_5.png)

Now just click __show details__ to see the cost times that were used to calculate this deadline.

![2019-06-05 17 52 13-Shipping simulator](https://cdn.statically.io/gh/vtexdocs/help-center-content/refs/heads/main/docs/en/tutorials/orders/all-orders/checking-how-an-order-delivery-deadline-was-calculated_6.png)

Each of the three cost times corresponds to what was defined for the three steps of the logistics route: stock, dock and carrier.

### Related articles

- [How the order delivery deadline is calculated](/en/docs/tutorials/how-is-the-order-delivery-deadline-calculated)
