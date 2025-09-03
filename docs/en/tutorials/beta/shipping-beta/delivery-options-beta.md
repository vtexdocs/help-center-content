---
title: 'Delivery Options (Beta)'
id: 1fRDJFcHCtpTnk7GNyaRDY
status: PUBLISHED
createdAt: 2025-08-22T17:00:47.486Z
updatedAt: 2025-08-22T20:35:40.852Z
publishedAt: 2025-08-22T20:35:40.852Z
firstPublishedAt: 2025-08-22T20:33:50.257Z
contentType: tutorial
productTeam: Post-purchase
author: 2o8pvz6z9hvxvhSoKAiZzg
slugEN: delivery-options-beta
legacySlug: delivery-options-beta
locale: en
subcategoryId: 13sVE3TApOK1C8jMVLTJRh
---

> ℹ️ This feature is in beta, which means that we are working to improve it. If you have any questions, please contact <a href= "https://help.vtex.com/en/support">our Support</a>.

**Delivery Options** is a page in the VTEX Admin that allows you to configure flexible and accurate delivery options during the buying journey, such as defining different types of delivery availability and geographic zones, and controlling how and when these options are displayed to the customer.

This gives merchants autonomy to create, configure, and manage delivery options as strategic content on the VTEX platform. This approach provides more flexibility to align logistical capabilities with business objectives, enhancing customers' shopping experience.

The delivery options use the information already defined in the store [shipping policies](https://help.vtex.com/en/tutorial/shipping-policy--tutorials_140). If these settings aren't defined or don't meet the delivery target of the shipping options, see the article [Creating a shipping policy](https://help.vtex.com/en/tutorial/creating-a-shipping-policy--66rJO4LKBdyMJOH6Z3dsaT).

The Delivery Options page allows you to:

- [Create](#creating-delivery-options)
- [Edit](#editing-delivery-options)
- [Deactivate](#deactivating-delivery-options)
- [Activate](#activating-delivery-options)
- [Delete](#deleting-delivery-options)
- [Search](#searching-delivery-options)
- [Filter](#filtering-delivery-options)
- [Configure preferences](#delivery-option-preferences)

![delivery-options-en](https://raw.githubusercontent.com/vtexdocs/help-center-content/refs/heads/main/docs/en/tutorials/beta/shipping-beta/delivery-options-beta_1.png)

The page displays the following information in a table:

| Columns | Description |
|---|---|
| Name | Name that identifies the shipping option displayed on the storefront. |
| Delivery target | Time frame for the estimated delivery option. |
| Delivery zone | Locations where the delivery option will be available. |
| Status | Status of the delivery option, which can be:<br><ul><li>Active: Indicates that the delivery option is available to the customer.</li><li>Inactive: Indicates that the delivery option isn't available to the customer.</li></ul> |

## Creating delivery options

To create a delivery option, follow the steps below:

1. In the VTEX Admin, go to **Shipping > Delivery Options**, or type **Delivery Options** in the search bar at the top of the page.
2. Click `Create delivery option`.
3. Complete the form fields:
  ![delivery-options-form-en](https://raw.githubusercontent.com/vtexdocs/help-center-content/refs/heads/main/docs/en/tutorials/beta/shipping-beta/delivery-options-beta_2.png)
    - **Shipping method:** Select the shipping method (**delivery**, **scheduled delivery**, **pickup**, **scheduled pickup**).
    - **Option name:** Enter the name of the option the customer will see when purchasing.
    - **Use option as a filter on the product listing page**: Enable this to allow customers to filter products by this delivery option using[ Intelligent Search filters](https://help.vtex.com/en/tutorial/filters--k24mQQa9SjmhNWSwdqIMB).
    - **Target format**: Select the time unit (**days** or **hours**) to be used for delivery.
    - **Condition**: Define the condition (**from**, **up to**, **between**) for the delivery option target.
    - **Minimum target:** Minimum number of hours or days for the delivery option time frame.
    - **Maximum target:** Maximum number of hours or days for the delivery option time frame.
    - **Shipping zones**: Click the `+ Add zones` button and select the delivery zones you want to be served by the delivery option. You can search for a shipping zone using the search bar. Click `Save` to close the window.
4. Click `Create delivery option`.

The delivery option will then be active and available to the store customers.

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

1. In the VTEX Admin, go to **Shipping > Delivery Options**, or type **Delivery Options** in the search bar at the top of the page.
2. Find the delivery option you want to deactivate and click the vertical ellipsis menu <i class="fas fa-ellipsis-v"></i>.
3. Click <i class="fas fa-pause-circle"></i> `Deactivate delivery option`.
4. Click `Disable option and filter`.

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
2. Find the delivery option you want to activate and click the vertical ellipsis menu <i class="fas fa-ellipsis-v"></i>`.
3. Click <i class="fas fa-trash-alt"></i> `Delete delivery option`.
4. Click `Delete option`. Note that deletion is irreversible and may impact the shopping experience if the delivery option is active.

The delivery option will then be deleted.

## Searching for delivery options

To search for a delivery option, click the search bar and type the name of the delivery option you want.

## Filtering delivery options

To filter the list of shipping options, click one of the filters described below and select the desired options.

- **Shipping method:** Filter by shipping methods (**delivery**, **scheduled delivery, pickup** and** scheduled pickup**) added to the delivery options.
-	**Delivery zone:** Filter by the shipping zones configured in the delivery options. You can search for the shipping zone name in the search bar.
- **Status:** Filter by the status of the delivery options (**active** or **inactive**).
- **Product listing page display**: Filter the delivery options configured as filters on the store's product listing page (**enabled** or **not enabled**).

Click `Apply` to save the selected filter. To remove the filter selection, click `Clear` in each applied filter.

## Delivery option preferences

Configure delivery options on the storefront to customize the customer experience and optimize how they are displayed. Follow the configuration steps to apply your preferences.

1. In the VTEX Admin, go to **Shipping > Delivery Options**, or type **Delivery Options** in the search bar at the top of the page.
2. Click `Preferences`.
3. Select how your options will be displayed in the store.
  ![delivery-options-preferencias-en](https://raw.githubusercontent.com/vtexdocs/help-center-content/refs/heads/main/docs/en/tutorials/beta/shipping-beta/delivery-options-beta_3.png)
    - **Always display all available options for the product:** All delivery options that are available under the shipping conditions will be displayed on the product page and checkout.
    - **Only display the lowest-cost and fastest options:** Only the delivery options with the lowest cost or shortest time will be displayed on the product page and checkout.
4. Click `Save`.
