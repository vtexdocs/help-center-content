---
title: 'Scheduled delivery'
id: 22g3HAVCGLFiU7xugShOBi
status: PUBLISHED
createdAt: 2021-04-19T13:26:44.564Z
updatedAt: 2021-10-27T16:49:43.778Z
publishedAt: 2021-10-27T16:49:43.778Z
firstPublishedAt: 2021-05-24T17:01:23.885Z
contentType: tutorial
productTeam: Post-purchase
author: 30TBnJ838LXSZvdJFlcB8H
slug: scheduled-delivery
locale: en
legacySlug: scheduled-delivery, configuring-the-scheduled-delivery
subcategory: 1UL6Q7nUN6SkA2g2SUsECi
---

The scheduled delivery feature allows you to set delivery time frames so that the customer can choose the best day and time to receive the purchased product.

The delivery time frames that are available to customers are called delivery windows and are directly related to your store's Shipping Policies. It means that when offering scheduled deliveries, you must consider whether your shipping policy includes this service.

If this is the case, you can enable scheduled deliveries by configuring delivery windows and setting the delivery capacity for each of them. To do that, access the Scheduled delivery section on the Shipping Policy page.

Once you've enabled the __Scheduled Delivery__ feature in the Shipping Policy, you can fill in the fields that will determine how it will work. Fill them to define the [maximum delivery time](#maximum-delivery-time), the [delivery window](#delivery-window), and the [delivery capacity limit](#delivery-capacity).

For more information, read our article on [Shipping policies](https://help.vtex.com/en/tutorial/shipping-policy--tutorials_140).

## Maximum delivery time

The maximum delivery time is the longest period of time spent to perform a scheduled delivery, between order confirmation and delivery confirmation.

You can configure it through the Maximum delivery time field in the scheduled delivery section, in which you’ll define how many days there can be between order confirmation and delivery confirmation.

## Delivery window

Delivery windows are the time frames during which packages are sent to customers. To configure them, set start and end times by day of the week. You can also set an additional shipping rate for certain days of the week.
<div class="alert alert-info">
A delivery window can't be selected after it has started. Only upcoming delivery windows —which have not yet started— will be available to customers.

</div>

## Delivery capacity

Setting the delivery capacity is a way of limiting the number of items or orders that can be delivered in each delivery window, in order to better manage your scheduled deliveries.

When the customer completes the purchase and selects the scheduled delivery option, the date and time options displayed will take into account the delivery capacity of the delivery window. The customer will only be able to schedule deliveries in windows that still have at least 1 item/order available. 

<div class="alert alert-info">
If the delivery window has reached its full capacity, it will not be available to be selected. To make it available, increase the number of items/orders by editing the <a href="https://help.vtex.com/en/tutorial/shipping-policy--tutorials_140">Shipping policy</a>.
</div> 

For more information, read our article on [Delivery capacity](https://help.vtex.com/en/tutorial/managing-delivery-capacity--2y217FQZCjD0I1n62yxVcz). 

