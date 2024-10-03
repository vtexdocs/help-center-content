---
title: 'Pickup point is not displayed when associating a shipping policy'
id: 3GcfZkPG9yB3l8Cfd1lVzf
status: PUBLISHED
createdAt: 2021-12-16T19:34:39.907Z
updatedAt: 2022-01-13T19:04:23.643Z
publishedAt: 2022-01-13T19:04:23.643Z
firstPublishedAt: 2021-12-16T19:51:24.285Z
contentType: knownIssue
productTeam: Order Management
author: 30TBnJ838LXSZvdJFlcB8H
tag: Logistics
slugEN: the-order-management-filter-does-not-find-results-for-criteria-that-have
locale: en
kiStatus: Backlog
internalReference: Zendesk Ticket #353656
---

## Summary

After creating a[ pickup point](https://help.vtex.com/en/tutorial/adding-pickup-points--2R5ClQiwe4KoSQgsuiOw4E), you must associate it with a shipping policy to make it available to customers. The `Pickup points names` field ([from the shipping policy](https://help.vtex.com/en/tutorial/shipping-policy--tutorials_140)) must be filled in with the name of the registered pickup point. To do this, you must search by pickup point name. However, when there are more than 999 pickup points registered in the store, the pickup point may not be found.

This means that the desired pickup point may not be displayed in the search results for stores that have more than 999 registered pickup points.


## Simulation

To run the simulation, make sure that the store has more than 999 registered pickup points.

1. Create or edit a [shipping policy](https://help.vtex.com/en/tutorial/politica-de-envio--tutorials_140#cadastrar-uma-politica-de-envio):
    1. In the **Link pickup points **window, search for a pickup point in the `Pickup point names` field;
    2. Notice that the desired pickup point is not displayed in the search results.

## Workaround

There are two workarounds for this scenario:

* **Via Admin:** in this case, you must link a[ tag](https://help.vtex.com/en/tutorial/adding-pickup-points--2R5ClQiwe4KoSQgsuiOw4E#2-link-a-pickup-point-to-a-shipping-policy) to the pickup point. When creating a pickup point, use the[ tag](https://help.vtex.com/en/tutorial/adding-pickup-points--2R5ClQiwe4KoSQgsuiOw4E#2-link-a-pickup-point-to-a-shipping-policy) field to add the pickup point to a group. Fill in the `Pickup point tags` field before searching for the pickup point in the `Pickup point names` field.
* **Via API:** you can associate the pickup point with a shipping policy using the [Update shipping policy API](https://developers.vtex.com/vtex-rest-api/reference/shipping-policies#put_logistics-pvt-shipping-policies-id).
    1. Use **[GET](https://developers.vtex.com/vtex-rest-api/reference/shipping-policies#get_logistics-pvt-shipping-policies-id)** to check the shipping policy settings;
    2. Replace the `deliveryChannel: delivery` field with `deliveryChannel`: `pickup-in-point`;
    3. In the `pickupPointsSettings` object, enter the[ pickup point ID](https://developers.vtex.com/vtex-rest-api/reference/pickup-points-1) in the `PickupPointIds` field.

