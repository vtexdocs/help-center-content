---
title: 'Shipping policy'
id: tutorials_140
status: PUBLISHED
createdAt: 2017-04-27T22:17:12.502Z
updatedAt: 2024-11-05T18:11:45.931Z
publishedAt: 2024-11-05T18:11:45.931Z
firstPublishedAt: 2017-04-27T23:00:45.247Z
contentType: tutorial
productTeam: Post-purchase
author: 30TBnJ838LXSZvdJFlcB8H
slugEN: shipping-policy
legacySlug: adding-a-carrier, manage-carrier
locale: en
subcategoryId: 7fTH6bP0C4IaM8qWi0kkQC
---

[Shipping strategy](/en/docs/tutorials/shipping-strategy) is a set of essential [logistics](/en/docs/tutorials/fulfillment-logistics-vtex) settings in a VTEX store, which refers to the combination of the following aspects:

* Shipping policy
* [Loading dock](/en/docs/tutorials/loading-dock)
* [Warehouse](/en/docs/tutorials/warehouse)

The image below shows how these concepts relate to each other:

![shipping_strategy_EN](https://cdn.statically.io/gh/vtexdocs/help-center-content/refs/heads/main/docs/en/tutorials/shipping/shipping-strategy/shipping-policy_1.png)

**Shipping policy** is a set of rules and settings that specify the shipping options that will be displayed to customers at checkout. When calculating the [shipping time for an order](/en/docs/tutorials/how-shipping-calculation-works), the VTEX platform takes into account several settings from the shipping policy, including:

* [Carrier](/en/docs/tutorials/carriers-on-vtex)
* [Carrier business hours](/en/docs/tutorials/carrier-working-hours)
* [Holidays](/en/docs/tutorials/registering-holidays)
* [Additional shipping costs](/en/docs/tutorials/additional-shipping-costs)
* [Scheduled delivery](/en/docs/tutorials/scheduled-delivery)
* [Pickup points](/en/docs/tutorials/pickup-points)

To learn how to create a shipping policy, check the [Creating a shipping policy](/en/docs/tutorials/creating-a-shipping-policy) article. For information on management, read the [Managing shipping policies](/en/docs/tutorials/managing-shipping-policies) article.

## Shipping policy and shipping rate template

Every shipping policy is associated with a [shipping rate template](/en/docs/tutorials/shipping-rate-template), where you enter information such as:

* Carrier identification
* Carrier shipping cost
* Postal code ranges or [polygons](/en/docs/tutorials/registering-geolocation) valid for shipping

Once the shipping rate template is associated with the shipping policy, this information becomes part of your VTEX logistics operation.

## Initial logistics settings

You can configure initial settings through the VTEX Admin or via API. If you are starting to configure your [shipping strategy](/en/docs/tutorials/shipping-strategy), we recommend the following order:

| **Topic** | **Configuration via VTEX Admin** | **Configuration via API** |
| :--- | :--- | :--- |
| 1. Shipping policy | [Creating a shipping policy](/en/docs/tutorials/creating-a-shipping-policy) | [Create shipping policy](https://developers.vtex.com/docs/api-reference/logistics-api#post-/api/logistics/pvt/shipping-policies) |
| 2. [Loading dock](/en/docs/tutorials/loading-dock) | [Managing loading docks](/en/docs/tutorials/managing-loading-docks) | [Create/update dock](https://developers.vtex.com/docs/api-reference/logistics-api#post-/api/logistics/pvt/configuration/docks) |
| 3. [Warehouse](/en/docs/tutorials/warehouse) | [Managing warehouses](/en/docs/tutorials/managing-warehouses) | [Create/update warehouse](https://developers.vtex.com/docs/api-reference/logistics-api#post-/api/logistics/pvt/configuration/warehouses) |

