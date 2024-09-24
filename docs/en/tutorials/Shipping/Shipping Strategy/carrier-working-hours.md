---
title: 'Carrier working hours'
id: 2oGpbInIgdxSWUi3TZjdCS
status: PUBLISHED
createdAt: 2019-02-06T16:21:24.412Z
updatedAt: 2024-04-11T00:33:50.619Z
publishedAt: 2024-04-11T00:33:50.619Z
firstPublishedAt: 2019-02-06T18:25:37.545Z
contentType: tutorial
productTeam: Post-purchase
author: 30TBnJ838LXSZvdJFlcB8H
slugEN: carrier-working-hours
locale: en
legacySlug: setting-up-business-hours-for-carriers, configuring-carriers-cut-off-time
subcategoryId: 7fTH6bP0C4IaM8qWi0kkQC
---

On VTEX, you can determine business hours for your store’s [carriers](https://help.vtex.com/en/tutorial/transportadoras-na-vtex--7u9duMD5UQa2QQwukAWMcE) in the [shipping policy](https://help.vtex.com/en/tutorial/politica-de-envio--tutorials_140). You can configure pickup time and shipping window periods available for the carrier.

To configure a carrier’s business hours in your store, in your VTEX Admin go to **Shipping > Shipping strategy**. You can [create a shipping policy](https://help.vtex.com/en/tutorial/criar-uma-politica-de-envio--66rJO4LKBdyMJOH6Z3dsaT) or [edit](https://help.vtex.com/en/tutorial/gerenciar-politicas-de-envio--30nynylgbWieimhaMtGTIE) an existing one.

The way you configure working hours will influence the delivery time calculation. These configurations can be made on the shipping policy’s details page, in the following options:

* **[Shipping Window](#shipping-window)**: periods in which the carrier ships items to customers.
* **[Pickup Time](#pickup-time)**: timetables in which the carrier picks up items for delivery.

## Shipping Window

1. In the [Shipping policy](https://help.vtex.com/en/tutorial/politica-de-envio--tutorials_140), in the **Business Hours** section, click the `Shipping Window` card.
2. If you wish to activate the option `Accept purchases outside working hours`, enable the toggle switch. Otherwise, leave it deactivated.

  >❗ To authorize the carrier to receive orders on weekends, this toggle must be marked as `Active`. Even if Saturdays and Sundays are configured as valid windows, activating the toggle is mandatory to authorize the carrier to receive orders outside business hours.

  >ℹ️ When this option is enabled, the order [shipping calculation](https://help.vtex.com/en/tutorial/how-shipping-calculation-works--tutorials_116) is influenced, and the period from order placement to the carrier's business time is added to the total shipping time.

3. Select the `Day of the week`, as well as the `Start time` and `End time` for shipping items to customers.
    * **Day of the week**: days on which carriers make deliveries.
    * **Start time**: the time the shipping window starts.
    * **End time**: the time the shipping window ends.
4. If you want to add a new window period, click `Add shipping window`.
5. Click `Save changes`.

## Pickup Time

1. In the [Shipping policy](https://help.vtex.com/en/tutorial/politica-de-envio--tutorials_140), in the **Business Hours** section, click the `Pickup Time` card.
2. Select the `Day of the week`.
3. Select the `Pickup time`. 
4. If you want to add a new pickup period, click `Add pickup time`.
5. Click `Save changes`.
