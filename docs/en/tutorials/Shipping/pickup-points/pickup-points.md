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
---

Pickup points are locations where customers pick up their orders. A store provides pickup points so that its customers have the option of choosing to receive their order at their address (delivery) or to pick it up at a specified location (pickup).

There are different possibilities for using pickup points, according to store's organization and business strategy, such as:

* Warehouses as pickup points.
* Physical stores as pickup points.
* Exclusive locations for order pickup.

In all cases, it is advisable to pay attention to the need (or not) for transportation between the [warehouse](https://help.vtex.com/en/tutorial/warehouse--6oIxvsVDTtGpO7y6zwhGpb) and the pickup point. In this case, [set up](#setup) the pickup points with carriers that transport the packages to the pickup point. 

## How Pickup Points Work

Currently, the platform limits the selection to the 300 pickup points closest to the customer's address, regardless of whether the pickup points are configured as active or not. Therefore, it is possible for pickup points to be disregarded even if they meet the location requirement.

It is possible to [set up the limit of pickup points](#how-to-setup-pickup-points) displayed at checkout for the customer. The limit configured applies to each [shipping policy](https://help.vtex.com/en/tutorial/politica-de-envio--tutorials_140), as in the examples below:

> Example 1: The limit configured is to display five pickup points at checkout. There are only three pickup points associated with the shipping policy; therefore, three options are displayed at checkout.

> Example 2: The limit configured is to display five pickup points at checkout. There are two shipping policies, each one associated with three different pickup points; therefore, six options are displayed at checkout. Even though the limit is set to five pickup points, the rule is applied to each shipping policy.

Keep in mind that:

* The pickup points that become available to the customer at checkout depend on the availability of items and their transportation to the pickup point.
* VTEX limits the location to a 50km radius between the pickup point and the customer's address.
* In cases where transport between the [warehouse](https://help.vtex.com/en/tutorial/warehouse--6oIxvsVDTtGpO7y6zwhGpb) and the pickup point is required, VTEX also takes into account the existence of this route when choosing the pickup point.

> ℹ️ Through pickup points, VTEX also enables the merchant: <body> <ul> <li>Set up contingency pickup points: pickup points that can supply inventory to other points when needed, allowing the buyer the most convenient choice. To learn more, visit [Contingency Pickup Points.](https://help.vtex.com/en/tutorial/creating-a-contingency-pickup-point-to-guarantee-it-as-an-option-at-checkout--3mowqWEfjyM2g6WoWgE0Ao)</li> <li>Set up a white label seller as the pickup point. Learn more at [Setting up Seller White Label as a Pickup Point.](https://help.vtex.com/en/tutorial/setting-up-seller-white-label-as-a-pickup-point--6fSUE2O0taaoKieAaiuc4e)</li> </ul> </body>

Assure the pickup points settings are within the accepted limits and aligned with the store's sales strategy. This allows the [shipping simulation](https://help.vtex.com/en/tutorial/simulador-de-envio--tutorials_144) to consider the data correctly and ensures, for example, that the pickup point settings are not limiting the store's operation. 

## How to Setup Pickup Points

VTEX considers the pickup point to be a shipping method, and therefore the settings on the platform follow the criteria of a shipping policy. So, in order for the pickup points to be available to the customer it is necessary to:

1. [Adding Pickup Points](https://help.vtex.com/en/tutorial/adding-pickup-points--2R5ClQiwe4KoSQgsuiOw4E), what you can do in different ways:
    - **Using VTEX Admin:** adding each pickup point separately.
    - **Using an Admin spreadsheet:** adding several points simultaneously.
    - **Using an API:** with the [Create/Update Pickup Point](https://developers.vtex.com/vtex-rest-api/reference/pickup-points-1#createupdate) request.

2. Setting up the Pickup Point [shipping strategy](https://help.vtex.com/en/tutorial/estrategia-de-envio--58vLBDbjYVQzJ6rRc5QNz3):
    - Create at least one [loading dock](https://help.vtex.com/en/tutorial/managing-loading-docks--7K3FultD8I2cuuA6iyGEiW) that serves the pickup point.
    - Create at least one [warehouse](https://help.vtex.com/en/tutorial/managing-warehouses--tutorials_137) that supplies the pickup point.
    - Create at least [one shipping policy](https://help.vtex.com/en/tutorial/shipping-policy--tutorials_140) for the pickup point, which includes adding the [shipping rate template](https://help.vtex.com/en/tutorial/shipping-rate-template--tutorials_127) with the location of the pickup point.

3. Linking the pickup point to the shipping policy:
    - Step 1: In the VTEX Admin, go to **Shipping > Shipping Strategy**, or type *Shipping Strategy* in the search bar at the top of the page.  
    - Step 2: On the **Shipping Policies** tab, select the shipping policy created for the pickup point.
    - Step 3: In the **Actions** column, click on the <i class="fas fa-pen"></i> icon for editing.
    - Step 4: Enable the <i class="fas fa-toggle-on"></i> of the **Link pickup points** field.
    - Step 5: Select the pickup point from the available fields. ![relacionarpontosretiradaEN](https://raw.githubusercontent.com/vtexdocs/help-center-content/refs/heads/main/docs/en/tutorials/Shipping/pickup-points/pickup-points_1.png)> ℹ️ For stores that have more than 50 pick points, we recommend using the Pickup Point Tags field when creating a pick point. Using tags makes it easier to find the [pickup points when linking them to the shipping policy.](https://help.vtex.com/en/tutorial/shipping-policy--tutorials_140#adding-a-shipping-policy) Also remember that the shipping policy that is linked to a pickup point will not be available for any other shipping method. We recommend creating a shipping policy that is exclusive to the pickup point.

4. [Registering geolocation](https://help.vtex.com/pt/tutorial/gerenciar-geolocalizacao--tutorials_138): for greater accuracy of the location of the pickup points at the checkout.> ℹ️ Viewing pickup points with map and time at checkout is only available for Checkout V6.

5. Enable the address request at checkout. This way, the customer will be required to provide their address to be used on the invoice:
    - Step 1: In the VTEX Admin, go to **Store settings > Storefront > Checkout**, or type *Checkout* in the search bar at the top of the page.  
    - Step 2: Select the configuration used in the store and click the <i class="fas fa-cog"></i> icon.
    - Step 3: Click the **Checkout** tab in the top bar.
    - Step 4: Select the <i class="fas fa-toggle-on"></i> from the **Invoice address in pickup**.![NFpontoretiradaEN](https://raw.githubusercontent.com/vtexdocs/help-center-content/refs/heads/main/docs/en/tutorials/Shipping/pickup-points/pickup-points_2.png)> ⚠️ The option of **Invoice address in pickup** must be enabled in all stores in Brazil, as it is a requirement that the invoice issued contains the customer's address information, even if the option to delivery of the order is at the pick-up point. The address filled in by the customer will be recorded in the `invoiceData` field of the [orderForm](https://developers.vtex.com/vtex-rest-api/reference/orderform-fields#invoicedata).

6. Set the amount of pickup points that are displayed at checkout:
    - Step 1: In the VTEX Admin, go to **Store settings > Shipping > Settings**, or type *Shipping* in the search bar at the top of the page and select *Store settings / Shipping*.    
    - Step 2: Change the **Pickup points configuration** field: use the <i class="far fa-caret-square-up"></i> and <i class="far fa-caret-square-down"></i> buttons and select the quantity of pickup points that will become available in the search list (displayed at checkout).
