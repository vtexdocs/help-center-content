---
title: 'Delivery Options (Beta)'
id: 1fRDJFcHCtpTnk7GNyaRDY
status: PUBLISHED
createdAt: 2025-08-22T17:00:47.486Z
updatedAt: 2025-10-08T20:13:21.470Z
publishedAt: 2025-10-08T20:13:21.470Z
firstPublishedAt: 2025-08-22T20:33:50.257Z
contentType: tutorial
productTeam: Post-purchase
author: 2o8pvz6z9hvxvhSoKAiZzg
slugEN: delivery-options-beta
legacySlug: opcoes-de-envio-beta
locale: en
subcategoryId: 13sVE3TApOK1C8jMVLTJRh
---

> ℹ️ This feature is in beta, which means we're working on improving it. If you have any questions, contact [our Support team](https://supporticket.vtex.com/support).

**Delivery Options** is a page in the VTEX Admin that allows you to configure flexible and accurate delivery options during the buying journey, such as defining different types of delivery availability and geographic zones and controlling how and when these options are displayed to the customer.

This gives merchants autonomy to create, configure, and manage delivery options as strategic content on the VTEX platform. This approach provides more flexibility to align logistical capabilities with business objectives, enhancing the shopping experience for customers.

Delivery Options use the [shipping policies](/docs/tutorials/shipping-policy) configured in the store. A single delivery option can group several shipping policies, as long as they meet the criteria defined for that option.

Shipping policies are associated with a delivery option when they meet both the defined delivery promise and the configured delivery zones. If no shipping policy meets the configured criteria, or if the shipping policies haven't been properly configured, see the article [Creating a shipping policy](/docs/tutorials/creating-a-shipping-policy).

![delivery-options-pt](https://cdn.statically.io/gh/vtexdocs/help-center-content/refs/heads/main/docs/en/tutorials/beta/shipping-beta/delivery-options-beta_1.png)

The page displays the following information in a table:

| Columns | Description  |
| ---|---|
| Name | Name that identifies the delivery option displayed on the storefront. |
| Delivery target | Delivery time frame of the delivery option. |
| Delivery zone   | Locations where the delivery option will be available. |
| Status | Delivery option status, which can be:<br><ul><li>Active: The delivery option is available for the customer.</li><li>Inactive: The delivery option isn't available for the customer.</li></ul> |

## Creating delivery options

To create a delivery option, follow the steps below:

1. In the VTEX Admin, go to **Shipping > Delivery Options**, or type **Delivery Options** in the search bar at the top of the page.
2. Click `Create delivery option`.
3. Complete the fields in the form:
   ![delivery-options-form-en](https://cdn.statically.io/gh/vtexdocs/help-center-content/refs/heads/main/docs/en/tutorials/beta/shipping-beta/delivery-options-beta_2.png)

   ### Basic information

   - **Delivery method:** Select the type of delivery method (**Delivery**, **Scheduled delivery**, **Pickup**, **Scheduled pickup**).

   - **Option name:** Enter the name of the option the customer will see when purchasing.

   - **Use option as a filter on the store product listing page**: Enable this to allow customers to filter products by this delivery option using [Intelligent Search filters](https://help.vtex.com/docs/tutorials/filters).

   > ⚠️ Delivery method filters will only be displayed on the product listing page to the customer if this option is enabled. If disabled, the filters won't be displayed.

   ### Delivery target

   - **Target format**: Select the time unit (**Days** or **Hours**) to be used for shipping.
   - **Condition**: Define the condition (**From**, **Up to**, **Between**) for the delivery target.
   - **Minimum target:** Minimum number of hours or days for the delivery option time frame.
   - **Maximum target:** Maximum number of hours or days for the delivery option time frame.

   ### Delivery zones

   - **Delivery zones**: Click the `+ Add zones` button, then select the zones you want to cover with the delivery option. You can search for a delivery zone using the search bar. Click `Save` to close the window.

   ### Shipping pricing

   - **Pricing**: Pricing conditions of the delivery option. The pricing models applied to each segmentation are: **Fixed amount**, a single price applied to all carts; **Markup**, a profit percentage added to the shipping amount; and **Cost pass-through**, where the store bears the cost of the delivery option. You can combine pricing options. The pricing conditions are defined based on the following segmentations:
     - **All carts**: The price will be applied to all carts created in the store.
     - **Sales channels**: The price will be applied to a specific sales channel.
     - **Cart amount**: The price will be applied if the cart total exceeds a certain amount.
     - **Delivery zones:** The price applies to a specific delivery zone. Selecting delivery zones in the previous field is required to use this segmentation.
4. Click `Create delivery option.`

The delivery option will then be active and available to customers:

![delivery-options-en-example](https://cdn.statically.io/gh/vtexdocs/help-center-content/refs/heads/main/docs/en/tutorials/beta/shipping-beta/delivery-options-beta_4.png)

## Editing delivery options

To edit a delivery option, follow the steps below:

1. In the VTEX Admin, go to **Shipping > Delivery Options**, or type **Delivery Options** in the search bar at the top of the page.
2. Find the delivery option you want to edit and click the vertical ellipsis menu <i class="fas fa-ellipsis-v"></i>.
3. Click <i class="fas fa-pencil-alt"></i> `Edit delivery option`.
4. Edit the delivery option information.
5. Click `Save delivery option`.

The delivery option will then be active and up to date.

## Deactivating delivery options

To deactivate a delivery option, follow the steps below:

1. In the VTEX Admin, go to **Shipping > Delivery Options**, or type **Delivery Options** in the search bar at the top of the page.
2. Find the delivery option you want to deactivate and click the vertical ellipsis menu <i class="fas fa-ellipsis-v"></i>.
3. Click <i class="fas fa-pause-circle"></i> `Deactivate delivery option`.
4. Click `Deactivate option`.

The delivery option will then be deactivated.

## Activating delivery options

To activate a delivery option that is deactivated, follow the steps below:

1. In the VTEX Admin, go to **Shipping > Delivery Options**, or type **Delivery Options** in the search bar at the top of the page.
2. Find the delivery option you want to activate and click the vertical ellipsis menu <i class="fas fa-ellipsis-v"></i>.
3. Click <i class="fas fa-play-circle"></i> `Activate delivery option`.
4. Click `Activate option`.

The delivery option will then be active and available to customers.

## Deleting delivery options

To delete a delivery option, follow the steps below:

1. In the VTEX Admin, go to **Shipping > Delivery Options**, or type **Delivery Options** in the search bar at the top of the page.
2. Find the delivery option you want to delete and click the vertical ellipsis menu <i class="fas fa-ellipsis-v"></i>.
3. Click <i class="fas fa-trash-alt"></i> `Delete delivery option`.
4. Click `Delete option`. Note that deletion is irreversible and may impact the shopping experience if the delivery option is active.

The delivery option will then be deleted.

## Searching for delivery options

To search for a delivery option, click the search bar and type the name of the delivery option you want.

## Filtering delivery options

To filter the list of delivery options, click one of the filters described below and select the desired options.

- **Delivery method:** Filters by shipping methods, **Shipping**, **Scheduled delivery**, **Pickup**, and **Scheduled Pickup**, as added to the delivery options.

- **Delivery zone:** Filter by the delivery zones configured in the delivery options. You can search for the delivery zone name in the search bar.

- **Status**: Filter by the status (**Active** or **Inactive**) of the delivery options.

- **PLP filter**: Filter the delivery options configured as **Active** or **Inactive** as [filters on the store's product listing page](#filtering-delivery-options).

Click `Apply` to save the selected filter. To remove the filter selection, click `Clear` in each applied filter.

## Setting delivery option preferences

Configure delivery options on the storefront to customize the customer experience and optimize how they are displayed. Follow these configuration steps to apply your preferences:

1. In the VTEX Admin, go to **Shipping > Delivery Options**, or type **Delivery Options** in the search bar at the top of the page.
2. Click `Preferences`.
3. In the **Delivery options as filter** section, set the order in which delivery options will be displayed in navigation filters.
4. Add the delivery options you want to include in the navigation filters by clicking `+` on the corresponding delivery option.
5. Select how your options will be displayed in the store:
   - **Always display all available options for the product:** All delivery options available under the shipping conditions will be displayed on the product page and checkout.
   - **Only display the lowest-cost and fastest options:** Only the delivery options with the lowest cost or shortest time will be displayed on the product page and checkout.
6. Click `Save`.
