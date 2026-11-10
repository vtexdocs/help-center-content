---
title: 'Google Shopping regionalization'
createdAt: 2026-10-02T12:00:00.000Z
updatedAt: 2026-10-09T12:00:00.000Z
contentType: tutorial
productTeam: Channels
slugEN: google-shopping-regionalization
locale: en
subcategoryId: 4uqMnZjwBO04uWgCom8QiA
hidden: false
---

Google Shopping regionalization defines the regions of the country for which the integration sends data to Google. Zones, including **Common zones**, are fixed and define how the country is divided for Google Shopping. They come preconfigured and synced from Logistics. Without regionalization, the integration uses nationwide shipping settings: each SKU has a single price and availability for the whole country. When regions are activated, you can use two features:

- **Google Shipping:** Adds region-specific shipping costs and SLAs, which aren't included in the basic data sent to Google. Price and availability remain national.
- **RAAP** (Regional Availability & Pricing): Regionalizes the price and availability that the integration already sends.

With Google Shipping and RAAP active, each region can have its own price, availability, shipping, and SLA, or have none of that data. These values come from a simulation, so price and shipping promotions also affect what's sent to Google.

To use the regionalization features, you need to configure the [Google Shopping integration](/en/docs/tracks/google-shopping-marketplace) and have [shipping policies](/en/docs/tutorials/shipping-policy) with a [shipping table](/en/docs/tutorials/shipping-rate-template) configured and active for the integration's [sales channel](/en/docs/tracks/defining-the-google-shopping-trade-policy).

To submit regionalized price, availability, shipping, and SLA, configure the features on the **Preferences** page in this order:

1. Confirm that the sales channel for the integration has active shipping policies with a configured shipping table.
2. [Activate regions in the Google Shopping integration](#activate-regions)
3. [Activate Google Shipping](#activate-google-shipping)
4. [Activate RAAP](#activate-raap)

![Google Shopping preferences](https://cdn.statically.io/gh/vtexdocs/help-center-content/refs/heads/main/docs/pt/tutorials/integrações/configurações-de-integrações/regionalizacao-do-google-shopping_1.png)

## Regionalization

The **Configure regions** page lists the fixed zones already synced from logistics. The notification at the top shows how many zones were synced and that Google receives shipping, price, availability, and SLA based on those regions. On this page, the store can only turn each zone on or off. You can also [search for a product and check if it's available](#test-product-availability) in each zone.

The page data is displayed in a table with the following columns:

- **Common zones:** Zone name. Some rows group other zones and can be expanded <i class="fas fa-angle-right" aria-hidden="true"></i>.
- **Coverage:** Postal code range of the zone.
- **Status:** Indicates when the zone is `active` and sending information to Google.
- **Availability:** Indicates when a product is or isn't available in the regions listed in the table.

Each table row has a checkbox <a class="far fa-check-square" aria-hidden="true"></a> to activate or deactivate the zone.

Active zones define the regional scope in which **Google Shipping** and **RAAP** send data to Google. Price, availability, shipping cost, and SLA for each SKU are determined by the active shipping policies linked to the integration's sales channel. Inactive zones are excluded from regionalized offers.

> ⚠️ Stores on CMS Portal (Legacy) or headless need to adapt their product page to read the `region_id` parameter that Google adds to the URL. Without this reading, RAAP won't reflect on the storefront. Follow the [Adapting headless storefronts to Google RAAP](https://developers.vtex.com/docs/guides/adapting-headless-storefronts-to-google-raap) guide.

### Activate regions

To activate regions, follow the steps below:

1. In the VTEX Admin, go to **Marketplace > Connections > Google Shopping > Preferences > Configure regions**.
2. Check the zones that should be sent to Google.
3. Click `Activate regions`. The number on the button indicates how many zones are selected.

After activating the regions, the **Configure regions** page will display the `Configured` status.

### Test product availability

On the **Configure regions** page, you can test a product's availability based on the active regions. To run the test, follow the instructions below:

1. In the VTEX Admin, go to **Marketplace > Connections > Google Shopping > Preferences > Configure regions**.
2. In the search bar above the data table, search for and select a product from your store's catalog.
3. Wait for the **Availability** column to reload.

The **Availability** column shows the Available <i class="far fa-check-circle" aria-hidden="true"></i> or Unavailable <i class="far fa-minus-circle" aria-hidden="true"></i> status for each active region. To view the results for a specific zone, use the Country filter and search by name or postal code.

![Configure regions page with the Activate regions button](https://cdn.statically.io/gh/vtexdocs/help-center-content/refs/heads/main/docs/pt/tutorials/integrações/configurações-de-integrações/regionalizacao-do-google-shopping_3.png)

## Activate Google Shipping

[**Google Shipping**](https://support.google.com/merchants/answer/6324484?hl=en) sends Google the shipping cost and SLA already calculated by VTEX's shipping table, by region. This way, ads and listings can display the shipping value and estimated SLA, including free shipping or fast delivery. The integration uses [active zones](#activate-regions) as the regional filter and the shipping policy rules already set up on VTEX.

To activate Google Shipping, follow the steps below:

1. In the VTEX Admin, go to **Marketplace > Connections > Google Shopping > Preferences**.
2. In the **Google Shipping** section, click the <i class="fas fa-toggle-on" aria-hidden="true"></i> button.
3. In the **Activate Shipping?** modal, click `View configured regions` to see which regions are active, or click `Continue` to confirm the activation.

> ⚠️ Activating Google Shipping is required to use RAAP.

## Activate RAAP

[**RAAP (Regional Availability & Pricing)**](https://support.google.com/merchants/answer/16782229?hl=en) regionalizes the price and availability that the integration already sends to Google. This way, ads and listings can show the price and inventory valid for the buyer's region. The integration uses [active zones](#activate-regions) as the regional filter, along with the price and inventory variations already in VTEX.

> ⚠️ Activating RAAP without a real regional price or inventory variation may cause inconsistencies in the catalog sent to Google.

To activate RAAP, follow the steps below:

1. In the VTEX Admin, go to **Marketplace > Connections > Google Shopping > Preferences**.
2. In the **RAAP** section, click the <i class="fas fa-toggle-on" aria-hidden="true"></i> button.
3. In the **Activate RAAP?** modal, click `View configured regions` to see which regions are active, or click `Continue` to confirm the activation.

## Deactivate Google Shipping or RAAP

When you deactivate **Google Shipping**, Google stops receiving shipping costs and SLA by region. RAAP also stops working, because it depends on Google Shipping.

When you deactivate **RAAP**, price and availability continue to be sent at the national scope, which is the integration's default behavior. If Google Shipping remains active, shipping and SLA by region will continue to be sent.

> ⚠️ If Google Shipping is deactivated, the RAAP feature stops working.

To deactivate Google Shipping or RAAP, follow the steps below:

1. In the VTEX Admin, go to **Marketplace > Connections > Google Shopping > Preferences**.
2. In the **Google Shipping** or **RAAP** section, click <i class="fas fa-toggle-off" aria-hidden="true"></i>.
3. Click `Deactivate`.
