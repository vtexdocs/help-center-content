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
legacySlug: delivery-options-beta
locale: en
subcategoryId: 13sVE3TApOK1C8jMVLTJRh
---

> This feature is in beta, which means we are working on improving it. If you have any questions, please contact [our Support team](\{u\>https://supporticket.vtex.com/support\<u\}).

**Delivery Options** is a page in the VTEX Admin that allows you to configure flexible and accurate delivery options during the buying journey, such as defining different types of delivery availability and geographic zones, and controlling how and when these options are displayed to the customer.

This gives merchants autonomy to create, configure, and manage delivery options as strategic content on the VTEX platform. This approach provides more flexibility to align logistical capabilities with business objectives, enhancing customers' shopping experience.

The delivery options use the information already registered in the store [shipping policies](https://help.vtex.com/docs/tutorials/shipping-policy). If you don't have these settings defined or none of them meet the delivery targets for the shipping options, read the article [Creating a shipping policy](https://help.vtex.com/en/docs/tutorials/creating-a-shipping-policy).

The Delivery Options page allows you to:

- [Create delivery options](#create-delivery-options)
- [Edit delivery options](#edit-delivery-options)
- [Deactivate delivery options](#deactivate-delivery-options)
- [Activate delivery options](#activate-delivery-options)
- [Delete delivery options](#delete-delivery-options)
- [Search for delivery options](#search-for-delivery-options)
- [Filter delivery options](#filter-delivery-options)
- [Set delivery option preferences](#set-delivery-option-preferences)

![delivery-options-pt](https://cdn.statically.io/gh/vtexdocs/help-center-content/refs/heads/main/docs/pt/tutorials/beta/envio-beta/opcoes-de-envio-beta_1.png)

The page displays the following information in a table:

| Columns         | Description                                                                                                                                                                                                                                                                   |
| --------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Name            | Name that identifies the delivery option displayed on the storefront.                                                                                                                                                                                         |
| Delivery target | Time frame for the estimated delivery option.                                                                                                                                                                                                                 |
| Delivery zone   | Locations where the delivery option will be available.                                                                                                                                                                                                        |
| Status          | Delivery option status, which can be:<br><ul><li>Active: The delivery option is available for the customer.</li><li>Inactive</li>: The delivery option isn't available for the customer.</ul> |

## Creating delivery options

To create a delivery option, follow the steps below:

1. In the VTEX Admin, go to **Shipping > Delivery Options**, or type **Shipping Options** in the search bar at the top of the page.
2. Click `Create delivery option`.
3. Complete the fields in the form:
   ![delivery-options-form-pt](https://cdn.statically.io/gh/vtexdocs/help-center-content/refs/heads/main/docs/pt/tutorials/beta/envio-beta/opcoes-de-envio-beta_2.png)

   - **Shipping method:** Select the type of shipping method (**Delivery**, **Scheduled delivery**, **Pickup**, **Scheduled pickup**).

   - **Option name:** Enter the name of the option the customer will see when purchasing.

   - **Use option as a filter on the product listing page**: Enable this to allow customers to filter products by this delivery option using [Intelligent Search filters](https://help.vtex.com/docs/tutorials/filters).

   > ⚠️ Shipping method filters will only be displayed on the product listing page to the customer if this option is enabled. If disabled, the filters won't be displayed.

   - **Target format**: Select the time unit (**Days** or **Hours**) to be used for shipping.
   - **Condition**: Define the condition (**From**, **Up to**, **Between**) for the delivery target.
   - **Minimum target:** Minimum number of hours or days for the delivery option time frame.
   - **Maximum target:** Maximum number of hours or days for the delivery option time frame.
   - **Delivery zones**: Click the `+ Add zones` button, then select the zones you want served by the delivery option. You can search for a delivery zone using the search bar. Click `Save` to close the window.
   - **Pricing**: Pricing conditions of the delivery option. The pricing models applied to each segmentation are: **Fixed amount**, a single price applied to all carts; **Markup**, a profit percentage added to the shipping amount; and **Cost pass-through**, where the store bears the cost of the delivery option. You can combine pricing options. The pricing conditions are defined based on the following segmentations:
     - **All carts**: The price will be applied to all carts created in the store.
     - **Sales channels**: The price will be applied to a specific sales channel.
     - **Cart amount**: The price will be applied if the cart total exceeds a certain amount.
     - **Delivery zones:** The price will be applied to a specific delivery zone. Prior selection of delivery zones in the previous field is required to use this targeting.
4. Click `Create delivery option.`

The delivery option will then be active and available to customers:

![delivery-options-pt-example](https://cdn.statically.io/gh/vtexdocs/help-center-content/refs/heads/main/docs/pt/tutorials/beta/envio-beta/opcoes-de-envio-beta_4.png)

## Editing delivery options

To edit a delivery option, follow the steps below:

1. In the VTEX Admin, go to **Shipping > Delivery Options**, or type **Delivery Options** in the search bar at the top of the page.
2. Find the delivery option you want to edit and click the vertical ellipsis menu <i class="fas fa-ellipsis-v"></i>.
3. Click <i class="fas fa-pencil-alt"></i> `Edit delivery option`.
4. Edit the information about the delivery option.
5. Click `Save delivery option`.

The delivery option will then be active and updated.

## Deactivating delivery options

To deactivate a delivery option, follow the steps below:

1. In the VTEX Admin, go to **Shipping > Shipping Options**, or type **Shipping Options** in the search bar at the top of the page.
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
2. Find the delivery option you want to deactivate and click the vertical ellipsis menu <i class="fas fa-ellipsis-v"></i>.
3. Click <i class="fas fa-trash-alt"></i> `Delete delivery option`.
4. Click `Delete option`. Note that deletion is irreversible and may impact the shopping experience if the delivery option is active.

The delivery option will then be deleted.

## Searching for delivery options

To search for a delivery option, click the search bar and type the name of the delivery option you want.

## Filtering delivery options

To filter the list of delivery options, click one of the filters described below and select the desired options.

- **Shipping method:** Filters by shipping methods, **Shipping**, **Scheduled delivery**, **Pickup**, and **Scheduled Pickup**, as added to the delivery options.

- **Delivery zone:** Filter by the delivery zones configured in the delivery options. You can search for the delivery zone name in the search bar.

- **Status:** Filter by the status (**Active** or **Inactive**) of the delivery options.

- **Product listing page display**: Filter the delivery options configured as **Active** or **Inactive** as [filters on the store's product listing page](#filtering-delivery-options).

Click `Apply` to save the selected filter. To remove the filter selection, click `Clear` in each applied filter.

## Setting delivery option preferences

Configure delivery options on the storefront to customize the customer experience and optimize how they are displayed. Follow the configuration steps to apply your preferences:

1. In the VTEX Admin, go to **Shipping > Delivery Options**, or type **Delivery Options** in the search bar at the top of the page.
2. Click `Preferences`.
3. Select how your options will be displayed in the store:
   ![delivery-options-preferencias-pt](https://cdn.statically.io/gh/vtexdocs/help-center-content/refs/heads/main/docs/pt/tutorials/beta/envio-beta/opcoes-de-envio-beta_3.png)
   - **Always display all available options for the product:** All delivery options available under the shipping conditions will be displayed on the product page and checkout.
   - **Only display the lowest-cost and fastest options:** Only the delivery options with the lowest cost or shortest time will be displayed on the product page and checkout.
4. Click `Save`.
