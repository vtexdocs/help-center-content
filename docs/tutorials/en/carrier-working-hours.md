---
title: 'Carrier working hours'
id: 2oGpbInIgdxSWUi3TZjdCS
status: PUBLISHED
createdAt: 2019-02-06T16:21:24.412Z
updatedAt: 2021-08-11T17:43:41.414Z
publishedAt: 2021-08-11T17:43:41.414Z
firstPublishedAt: 2019-02-06T18:25:37.545Z
contentType: tutorial
productTeam: Post-purchase
author: 30TBnJ838LXSZvdJFlcB8H
slug: carrier-working-hours
locale: en
legacySlug: setting-up-business-hours-for-carriers, configuring-carriers-cut-off-time
subcategory: 7fTH6bP0C4IaM8qWi0kkQC
---

On the VTEX platform, you can determine working hours for your store’s carriers. To do that, you have to configure pickup times and shipping windows available in your store.

To configure a carrier’s working hours in your store, go to `Inventory & shipping` and click on `Shipping strategy`. Then, you can create a [shipping policy](https://help.vtex.com/en/tutorial/politica-de-envio--tutorials_140) or edit an existing one. 

The way you configure working hours will influence the delivery time calculation. These configurations can be made on the shipping policy’s details page, in the following options:

* **[Shipping window](#shipping-window)**: periods in which the carrier ships items to customers.
* **[Pickup time](#pickup-time)**: timetables in which the carrier picks up items for delivery.

## Shipping window

1. Click on the `Shipping window` card.
2. Click the toggle button to enable or disable the option `Accept purchases outside working hours`.

    Enable it if the carrier agrees to receive orders outside working hours. By setting this option to `Active`, the delivery time will be calculated differently. For example, if an order is placed after the pickup time, the time until the next available pickup time will be added to the total delivery time.

3. Select the `Day of the week`, as well as the `Start time` and `End time` for shipping items to customers.
    * **Day of the week**: days on which carriers make deliveries.
    * **Start time**: the time the shipping window starts.
    * **End time**: the time the shipping window ends.
4. Click on `Add shipping window` if you want to add a new window.
5. Click on `Save changes`.

## Pickup time

1. Click on the `Pickup time` card.
2. Select the `Day of the week` and `Pickup time`. 
3. Click on `Add pickup time` if you want to add a new time for pickup.
4. Click on `Save changes`.
