---
title: 'My carrier isn’t showing at checkout'
id:
status: PUBLISHED
createdAt: 2026-02-20T00:00:00.199Z
updatedAt: 2026-02-20T00:00:00.199Z
publishedAt: 2026-02-20T00:00:00.199Z
firstPublishedAt: 2026-02-20T00:00:00.199Z
contentType: tutorial
productTeam: Post-purchase
author: 6DODK49lJPk3yvcoe6GB6g
slugEN: my-carrier-isnt-showing-at-checkout
legacySlug: my-carrier-isnt-showing-at-checkout
locale: en
subcategoryId: 2Q0IQjRcOqSgJTh6wRHVMB
domainFilters:
  - Checkout
  - Logistics
symptomFilters:
  - Loading issue
  - Misconfiguration
---

In some situations, the carrier may not be displayed as a shipping option at checkout when finalizing an order on VTEX. This article covers the main scenarios that cause this behavior and the recommended solutions for each.

> ℹ️ Before proceeding, make sure that all [carriers are properly configured](https://help.vtex.com/docs/tutorials/carriers-on-vtex) on the platform.

## Solutions

### Competition between carriers of the same type

Checkout displays the [shipping methods](https://help.vtex.com/docs/tutorials/how-does-the-type-of-delivery-work) for the products, not the carrier names. The system prioritizes the fastest or lowest-cost carrier among the options for the same shipping method. A carrier may not show if another carrier of the same type has a lower delivery target or a lower cost configured.

1. To display all carriers, go to **Store settings > Shipping > Settings**.
2. Add carriers with different shipping methods.

### Carrier doesn't service the entered address

If the shipping address for the order is outside the postal code ranges or geolocation polygons configured in its **shipping rate spreadsheet**, it won't be displayed.

1. In the carrier's [shipping rate spreadsheet](https://help.vtex.com/docs/tutorials/shipping-rate-template), check whether the configured postal code ranges (`zipCodeStart`, `zipCodeEnd`) or geolocation polygons (`PolygonName`) cover the shipping address for the order.
2. Adjust the location fields in the spreadsheet as needed.

### Order volume exceeds allowed maximum

If the total volume of items in the cart exceeds the maximum volume configured for the carrier in the **shipping rate spreadsheet**, it will be automatically ignored.

1. Go to the carrier settings in **Store settings > Shipping > Settings**.
2. Check if the maximum volume configured for the carrier matches the actual threshold it can take.
3. Adjust the maximum volume in the carrier settings or in the [shipping rate spreadsheet](https://help.vtex.com/docs/tutorials/shipping-rate-template), if applicable.

### Order weight exceeds allowed maximum

If the total weight of the order items exceeds the maximum weight configured for the carrier in the **shipping rate spreadsheet**, it won't display as an option.

1. Go to the carrier settings in **Store settings > Shipping > Shipping**.
2. Check if the maximum weight configured for the carrier matches the actual threshold it can take.
3. Change the values in the `weightStart` and `weightEnd` fields in the [shipping rate spreadsheet](https://help.vtex.com/docs/tutorials/shipping-rate-template).
4. Import the [shipping rate spreadsheet](https://help.vtex.com/docs/tutorials/shipping-rate-template) to the system again.

### Package splitting not allowed

If the order weight exceeds the carrier limit and **Cargo Splitting** isn't enabled in your store, the carrier won't display at checkout. Example: If an order weighs 40 lbs but the maximum weight set in the shipping rate spreadsheet is 30 lbs, the order can be shipped only by splitting it into two packages (20 lbs each).

1. [Enable Cargo Splitting](https://help.vtex.com/docs/tutorials/configuring-cargo-splitting) in your store.
2. This setting allows dividing orders into multiple packages when the weight exceeds the carrier limit, making it a feasible option.

### Optimizing shipping options at checkout

The **Optimizing Shipping Options** feature may be hiding more expensive or slower options at checkout.

1. Deactivate the [Optimizing Shipping Options at checkout](https://help.vtex.com/docs/tutorials/optimization-of-shipping-options-at-checkout) feature in your store.

> ⚠️ When you deactivate this feature in the VTEX Admin, all available shipping options will be shown at checkout. However, if the multiple shipments feature is activated in the store and there are different shipping options among cart items, the **optimized shipping options** will still be displayed. In other words, shipping optimization will be necessary to handle multiple packages (items with different shipping options).
