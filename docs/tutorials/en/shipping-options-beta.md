---
title: Shipping Options (Beta)
id: 7gsdck3519Z3VPqzwFFHJL
status: PUBLISHED
createdAt: 2022-05-27T15:35:44.505Z
updatedAt: 2023-03-21T17:44:07.634Z
publishedAt: 2023-03-21T17:44:07.634Z
firstPublishedAt: 2022-05-31T18:53:28.695Z
contentType: tutorial
productTeam: Others
author: 5l9ZQjiivHzkEVjafL4O6v
slug: shipping-options-beta
legacySlug: delivery-options-beta
subcategory: 13sVE3TApOK1C8jMVLTJRh
---

<div class="alert alert-info">
<p>This feature is in beta, which means that we are working to improve it. If you have any questions, please contact <a href= "https://support.vtex.com/hc/en-us/requests">our Support</a>.</p>
</div>

The **shipping options** feature allows the retailer to create, edit, and manage the order shipping options in a single place, ensuring more simplicity and efficiency in managing your operation. The term "shipping" is the general way to indicate the order's delivery or pickup. In each shipping option configuration, the retailer determines:

- The name of the shipping option that will be displayed to the consumer.
- The shipping type, whether shipping (delivery) or pickup.
- The shipping deadline.
- The geographical area to which the shipping option will apply.
- The shipping rate you will charge the consumer.

The **Shipping Options** interface allows the retailer to define and control all shipping options presented to the consumer at checkout. This feature will allow you to separate the amount charged to consumers from the logistical cost recorded in the [shipping rate template](https://help.vtex.com/en/tutorial/planilha-de-frete--tutorials_127).

The purpose of **Shipping Options**, however, is not to replace [shipping policies](https://help.vtex.com/en/tutorial/politica-de-envio--tutorials_140) or shipping rate templates. The shipping rate templates will be used when choosing the carrier to deliver the order, which is determined by the [Order Allocation Algorithm](https://help.vtex.com/en/tutorial/order-allocation-algorithm-beta--1zLCAyEdnVe3EsE9Kz88xA).

## Shipping rate pricing

The **Shipping Options** distinguish between what the consumer is charged for shipping the order and the shipping cost for the retailer, as it is possible to set up different pricing rules for the shipping rate.

<div class = "alert alert-info">
The shipping costs that the carriers charge must be in the shipping rate template so that the suitable carrier can be chosen.
</div>

The **Shipping Options** allow the retailer to configure the shipping rate based on:

- Fixed rates
- Total cart amount
- Item weight
- Transportation cost

Note that in the Beta phase, the **Shipping Options** work in parallel with the freight promotions in the [Promotions](https://help.vtex.com/en/tracks/promocoes--6asfF1vFYiZgTQtOzwJchR/2a2D0K85Ahvs4hLnL3Ag7N) module.

## Selecting sellers

Under **Shipping Options**, seller selection seeks the options that offer the lowest cost to the retailer. The retailer determines the deadline by which the seller must fulfill the order, and the consumer in the checkout views the real shipping time, which is the carriers' delivery time.

In each shipping option, the retailer sets an SLA (_Service Level Agreement_), a service agreement with shipping conditions for the order. For example, a retailer adds two shipping options:

- One called `Same-day delivery`, with an SLA to ship the order on the same day.
- The other called `Standard`, with an SLA to ship the order within 5 business days.

The VTEX [Order Allocation Algorithm](https://help.vtex.com/en/tutorial/order-allocation-algorithm-beta--1zLCAyEdnVe3EsE9Kz88xA) analyzes the store and distribution center combinations that serve each shipping option and seeks the ones with the lowest shipping cost. In the example, the result is a combination of lowest-cost same-day shipping and another combination of lowest-cost shipping within 5 business days.

<div class = "alert alert-info">
The <b>Shipping options</b> ensure that the consumer will always have a shipping option available for their location, which wasn't the case before. The only exception is if there is no seller and no shipping policy that meets the conditions for a shipping option. In this case, no shipping option will appear for the consumer at checkout.
</div>

## Actions and configuration

The **Shipping Options** allows you to:

- [Add a shipping option](https://help.vtex.com/en/tutorial/shipping-options-beta--7gsdck3519Z3VPqzwFFHJL#adding-a-shipping-option)
- [Edit a shipping option](https://help.vtex.com/en/tutorial/shipping-options-beta--7gsdck3519Z3VPqzwFFHJL#editing-a-shipping-option)
- [View shipping options list](https://help.vtex.com/en/tutorial/shipping-options-beta--7gsdck3519Z3VPqzwFFHJL#viewing-the-shipping-options-list)

## Adding a shipping option

Follow the steps below to create a shipping option:

1. In the VTEX Admin, go to **Orders > Inventory & Shipping > Shipping Options**.
    > If your store uses the [Redesigned VTEX Admin](https://content.vtex.com/join-new-admin-beta-program-en/), go to **Store Settings** <i class="fas fa-cog" alt="engrenagem azul"></i> **> Shipping > Shipping Options**.
2. Click `+ Create Shipping Option`.
3. Enter the name of the shipping option, which will be visible to consumers in their shopping experience.
4. Select the shipping type: `Delivery`, to deliver the order to the consumer's address, or `Pickup point`, for the consumer to pick up the order at a [pickup point](https://help.vtex.com/en/tutorial/pontos-de-retirada--2fljn6wLjn8M4lJHA6HP3R).
5. Select one or more shipping zones for which the shipping option will be valid. A shipping zone is a geographical boundary establishing the region for which certain shipping options are valid. You can use the search bar to search using the shipping zone name.
6. Specify the time range for the shipping deadline. You can choose from the following options:
    - **Business days:** Set a time range in days. For example, from 3 to 5 business days.
    - **Elapsed time:** Set the total time in days, hours, and/or minutes.
    - **Same day:** There are no additional settings, and the option will be offered whenever at least one store and carrier can deliver on the same day, regardless of the time.
7. Select the shipping rate pricing rule to be applied based on the following criteria:
    - **Cost:** The rate varies according to the product's origin and the carrier costs, and the consumer pays the rate in full.
    - **By order value:** The rate is relative to the order price, and you can set one or more price ranges. A new price range will be added whenever the maximum value of the range is other than unlimited.
    - **By weight:** The rate varies according to the package weight, and you can define one or more price ranges per kilogram (kg). A new range will be added whenever the maximum value of the range is different from unlimited.
    - **Markup:** The rate is the result of the sum of the shipping cost and a percentage of this cost.
    - **Free shipping:** Free of charge for the consumer; no additional configuration is required.
8. Click `Save`.

![opcoes_envio_criacao_en](//images.ctfassets.net/alneenqid6w5/6TOlNWWBTED41BXemhsvQE/3f6e3be89d0d3b4c22216df25aa2c875/opcoes_envio_criacao_en.png)

## Editing a shipping option

You can change the configuration of a shipping option by following the steps below:

1. In the VTEX Admin, go to **Orders > Inventory & Shipping > Shipping Options**.
    > If your store uses the [Redesigned VTEX Admin](https://content.vtex.com/join-new-admin-beta-program-en/), go to **Store Settings** <i class="fas fa-cog" alt="engrenagem azul"></i> **> Shipping > Shipping Options**.
2. Find the shipping option you want. You can use the search bar to filter by name.
3. Click the menu icon <i class="fas fa-ellipsis-v"></i>.
4. Select the `Edit` option.
5. Make the desired changes to the shipping option form.
6. Click `Save`.

Besides editing a shipping option from the menu icon <i class="fas fa-ellipsis-v"></i>, you can:

- **Duplicate:** It creates an identical shipping option, making it easier to create variations.
- **Deactivate/Activate:** The shipping option becomes `inactive` and no longer appears in the checkout. You can reactivate a shipping option at any time.
- **Delete:** The shipping option is permanently deleted and cannot be recovered.

## Viewing the shipping options list

Once you have configured the shipping options, they will be listed under **Store Settings > Shipping > Shipping Options**, as shown in the following image:

![opcoes_envio_listagem_en](//images.ctfassets.net/alneenqid6w5/2MAxFwYr86Y2ErCyo7GRIN/7c6c0928864ee46602bdf7799c9f00b1/opcoes_envio_listagem_en.png)

The table below contains the description of the columns shown:

| **Column** | **Description** |
| ---------- | ---------- |
| Name | Name that identifies the shipping option and is displayed to the consumer in their shopping experience. |
| Type | Shipping type, whether delivery or pickup. |
| Rate | Shipping option pricing rule, in which the shipping rate can be charged based on:<ul><li><b>Cost:</b> The rate varies depending on the product's origin and the carrier costs.</li><li><b>Order:</b> The rate is based on the order price, and one or more price ranges can be established.</li><li><b>Weight:</b> The rate varies according to the package's weight, and you can define one or more price ranges per kilogram (kg), defining an average and maximum weight reference for each range.</li><li><b>Free shipping:</b> Free of charge for the consumer; no additional configuration is required.</li><li><b>Markup:</b> The rate is the result of the sum of the shipping cost and a percentage of this cost.</li></ul> |
| Deadline | The period in which shipping must be done, either on the same day or after a certain time period. |
| Zones | Geographical boundary that will be served by the operation called shipping zone. |
| Status | It can be `Active` when the shipping option is available or `Inactive` if the option has been temporarily disabled. |
