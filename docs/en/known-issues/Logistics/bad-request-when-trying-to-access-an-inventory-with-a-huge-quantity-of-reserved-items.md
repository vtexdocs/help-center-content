---
title: "Bad request when trying to access an inventory with a huge quantity of reserved items"
id: 4DujUMKeYTlx2MXAjnHlS5
status: PUBLISHED
createdAt: 2024-07-03T20:18:55.508Z
updatedAt: 2024-07-03T20:23:50.434Z
publishedAt: 2024-07-03T20:23:50.434Z
firstPublishedAt: 2024-07-03T20:18:56.626Z
contentType: knownIssue
productTeam: Logistics
author: 2mXZkbi0oi061KicTExNjo
tag: Logistics
slugEN: bad-request-when-trying-to-access-an-inventory-with-a-huge-quantity-of-reserved-items
locale: en
kiStatus: Fixed
internalReference: 296066
---

## Summary



When we try to see the details of reservations for an SKU in the logistics module, in the list of product inventory (**Inventory & Shipping** > **Inventory management**), we may have a problem when there are too many active reservations.

It is not possible to access or update an SKU inventory with a huge amount of reserved items, like, 100000 active reservations.

The user may see in the UI the error: **"Error while trying to fetch reservation"**

Or in the API response details the error: **"Too many active reservations"**


##

## Simulation




1. In the **Inventory & Shipping** > **Inventory management,** try to find an SKU that has a huge amount of active reservation
2. Is possible that you get an error trying to view the details
3. Or try to update the quantity of the SKU
4. Maybe you will get the error described in the summary

##

##

## Workaround



The idea is that inventory management avoids the excessive accumulation of active reserves, which implies making inventory updates more frequently, either directly in the UI or via API.

