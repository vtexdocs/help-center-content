---
title: 'Pickup points'
id: 2fljn6wLjn8M4lJHA6HP3R
status: PUBLISHED
createdAt: 2020-07-01T19:16:21.675Z
updatedAt: 2023-07-25T16:53:09.640Z
publishedAt: 2023-07-25T16:53:09.640Z
firstPublishedAt: 2020-07-01T19:25:40.136Z
contentType: tutorial
productTeam: Post-purchase
author: 30TBnJ838LXSZvdJFlcB8H
slugEN: pickup-points
legacySlug: how-pickup-points-work
locale: en
subcategoryId: 1c5Btie9ou2Gg2iUo0ggqM
categoryCover: true
---

Pickup points are locations where customers pick up their orders. A store provides pickup points so that its customers can choose to receive their order at their address (delivery) or pick it up at a specified location (pickup).

Pickup points can be used in different ways, depending on the store's organization and business strategy, such as:

- Pickup points located at the warehouse.
- Physical stores that also serve as pickup points.
- Exclusive locations for order pickup.

In all cases, consider whether transportation is needed between the [warehouse](/en/docs/tutorials/warehouse) and the pickup point. In this case, [set up](#how-to-set-up-pickup-points) the pickup points with carriers that transport the packages to the pickup point.

## How pickup points work

Currently, the platform limits the selection to the 300 pickup points closest to the customer's address, regardless of whether they are configured as active or inactive. This means that pickup points may be excluded even if they meet the location requirement.

You can [set the number of pickup points](#how-to-set-up-pickup-points) displayed to the customer at checkout. This limit applies to each [shipping policy](/en/docs/tutorials/shipping-policy), as shown in the examples below:

- **Example 1:** The store sets a limit of five pickup points displayed at checkout. The shipping policy is associated with three pickup points, so only three options are displayed at checkout.
- **Example 2:** The store sets a limit of five pickup points displayed at checkout. There are two shipping policies, each associated with three pickup points, so six options are displayed at checkout. In other words, even though the limit is five, the rule applies to each shipping policy.

Keep in mind that:

- The pickup points available to the customer at checkout depend on item availability and transportation to the pickup point.
- VTEX limits the location to a radius of up to 1,000 km between the pickup point and the customer's address. This radius can be configured in the VTEX Admin under **Store settings > Shipping > Settings**. Since this setting is applied at the account level, stores with franchise accounts must change it for each account.
- In cases where transport between the [warehouse](/en/docs/tutorials/warehouse) and the pickup point is required, VTEX also considers this route when selecting the pickup point.

> ℹ️ With pickup points, VTEX also allows merchants to:
>
> - Set up **contingency pickup points:** Pickup points that can supply inventory to other points when needed, giving shoppers the most convenient option. To learn more, see [Contingency pickup point](/en/docs/tutorials/creating-a-contingency-pickup-point-to-guarantee-it-as-an-option-at-checkout).
> - Set up a **white label seller as a pickup point.** Learn more in [Setting up white label seller as pickup point](/en/tutorial/setting-up-seller-white-label-as-a-pickup-point--6fSUE2O0taaoKieAaiuc4e).

Make sure the pickup point quantity settings are within the accepted limits and aligned with the store's sales strategy. This allows the [shipping simulation](/en/docs/tutorials/shipping-simulation) to consider the data correctly and ensures, for example, that the number of pickup points configured doesn't limit the store operation.

## How to set up pickup points

VTEX considers a pickup point a shipping method, so its settings on the platform follow the criteria of a shipping policy. For pickup points to be available to customers, you must:

1. [Create the pickup point](/en/docs/tutorials/creating-pickup-points), which can be done in the following ways:
   - **Using the VTEX Admin:** Create each pickup point individually.
   - **Using an Admin spreadsheet:** Create several pickup points at once.
   - **Using the API:** With the [Create/Update Pickup Point](https://developers.vtex.com/docs/api-reference/logistics-api#put-/api/logistics/pvt/configuration/pickuppoints/-pickupPointId-) request.
2. Set up the pickup point [shipping strategy](/en/docs/tutorials/shipping-strategy):
   - Create at least one [loading dock](/en/docs/tutorials/managing-loading-docks) that serves the pickup point.
   - Create at least one [warehouse](/en/docs/tutorials/managing-warehouses) that supplies the pickup point.
   - Create at least [one shipping policy](/en/docs/tutorials/shipping-policy) for the pickup point, which includes adding the [shipping rate template](/en/docs/tutorials/shipping-rate-template) with the location of the pickup point.
3. Link the pickup point to the shipping policy:
   - a. In the VTEX Admin, go to **Shipping > Shipping Strategy**, or type _Shipping Strategy_ in the search bar at the top of the page.
   - b. On the **Shipping Policies** tab, select the shipping policy created for the pickup point.
   - c. In the **Actions** column, click the <i class="fas fa-pen"></i> icon to edit it.
   - d. Activate the <i class="fas fa-toggle-on"></i> toggle switch in the **Link pickup points** field.
   - e. Select the pickup point from the available fields. ![linkpickuppointsEN](https://cdn.statically.io/gh/vtexdocs/help-center-content/refs/heads/main/docs/en/tutorials/shipping/pickup-points/pickup-points_1.png)
     > ℹ️ For stores with more than 50 pickup points, we recommend using the Pickup point tags field when creating a pickup point. Using tags makes it easier to find the [pickup points when linking them to the shipping policy](/en/docs/tutorials/shipping-policy#adding-a-shipping-policy). Also remember that a shipping policy linked to a pickup point isn't available for other shipping methods. We recommend creating a shipping policy that is exclusive to the pickup point.
4. [Add the geolocation](/en/docs/tutorials/registering-geolocation) to display pickup point locations more accurately at checkout.

> ℹ️ Viewing pickup points with a map and business hours at checkout is only available in Checkout V6.

5. Enable the address request at checkout. This way, the customer will be required to provide their address to be used on the invoice:
   - a. In the VTEX Admin, go to **Store Settings > Storefront > Checkout**, or type _Checkout_ in the search bar at the top of the page.
   - b. Select the configuration used in the store and click the <i class="fas fa-cog"></i> icon.
   - c. Click the **Checkout** tab in the top bar.
   - d. Activate the <i class="fas fa-toggle-on"></i> toggle switch in the **Invoice address for store pickup** field. ![invoicepickuppointEN](https://cdn.statically.io/gh/vtexdocs/help-center-content/refs/heads/main/docs/en/tutorials/shipping/pickup-points/pickup-points_2.png)
     > ⚠️ The **Invoice address for store pickup** option must be activated for all stores in Brazil, since the issued invoice must contain the customer's address, even if the order is picked up at a pickup point. The address entered by the customer is recorded in the `invoiceData` field of the [orderForm](https://developers.vtex.com/docs/guides/orderform-fields#invoicedata).
6. Set the number of pickup points displayed at checkout:
   - a. In the VTEX Admin, go to **Store Settings > Shipping > Settings**, or type _Shipping_ in the search bar at the top of the page and select _Store Settings / Shipping_.
   - b. Change the **Pickup Points Settings:** field: Use the <i class="far fa-caret-square-up"></i> and <i class="far fa-caret-square-down"></i> buttons to select how many of the first pickup points will be available in the search list displayed to the customer at checkout.
