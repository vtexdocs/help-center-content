---
title: 'Scheduled delivery'
id: 22g3HAVCGLFiU7xugShOBi
status: PUBLISHED
createdAt: 2021-04-19T13:26:44.564Z
updatedAt: 2024-09-23T13:33:32.959Z
publishedAt: 2024-09-23T13:33:32.959Z
firstPublishedAt: 2021-05-24T17:01:23.885Z
contentType: tutorial
productTeam: Post-purchase
author: 30TBnJ838LXSZvdJFlcB8H
slugEN: scheduled-delivery
legacySlug: scheduled-delivery, configuring-the-scheduled-delivery
locale: en
subcategoryId: 1UL6Q7nUN6SkA2g2SUsECi
---

The scheduled delivery feature allows you to set delivery time frames so that the customer can choose the best day and time to receive the purchased product.

The delivery time frames that are available to customers are called delivery windows and are directly related to your store's Shipping Policies. It means that when offering scheduled deliveries, you must consider whether your shipping policy includes this service.

If this is the case, you can enable scheduled deliveries by configuring delivery windows and setting the delivery capacity for each of them. To do that, access the Scheduled delivery section on the Shipping Policy page.

> ⚠️ For [Scheduled delivery](/en/docs/tutorials/scheduled-delivery) and [Delivery capacity](/en/docs/tutorials/managing-delivery-capacity) to perform correctly, you must follow the rules below:<ul><li>The result from {[account name](/en/docs/tutorials/what-is-an-account-name)} + {shipping policy ID} cannot exceed 60 characters.</li><li>Do not use spaces in [shipping policy IDs](/en/docs/tutorials/creating-a-shipping-policy).</li></ul>

Once you've enabled the __Scheduled Delivery__ feature in the Shipping Policy, you can fill in the fields that will determine how it will work. Fill them to define the [maximum delivery time](#maximum-delivery-time), the [delivery window](#delivery-window), and the [delivery capacity limit](#delivery-capacity).

For more information, read our article on [Shipping policies](/en/docs/tutorials/shipping-policy).

## Maximum delivery time

The maximum delivery time is the longest period of time spent to perform a scheduled delivery, between order confirmation and delivery confirmation.

You can configure it through the Maximum delivery time field in the scheduled delivery section, in which you’ll define how many days there can be between order confirmation and delivery confirmation.

## Delivery window

Delivery windows are the time frames during which packages are sent to customers. To configure them, set start and end times by day of the week. You can also set an additional shipping rate for certain days of the week.
> ℹ️ A delivery window can't be selected after it has started. Only upcoming delivery windows —which have not yet started— will be available to customers.

## Delivery capacity

Setting the delivery capacity is a way of limiting the number of items or orders that can be delivered in each delivery window, in order to better manage your scheduled deliveries.

When the customer completes the purchase and selects the scheduled delivery option, the date and time options displayed will take into account the delivery capacity of the delivery window. The customer will only be able to schedule deliveries in windows that still have at least 1 item/order available. 

> ℹ️ If the delivery window has reached its full capacity, it will not be available to be selected. To make it available, increase the number of items/orders by editing the [Shipping policy](/en/docs/tutorials/shipping-policy). 

For more information, read our article on [Delivery capacity](/en/docs/tutorials/managing-delivery-capacity). 

