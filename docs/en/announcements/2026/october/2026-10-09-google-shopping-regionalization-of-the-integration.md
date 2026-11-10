---
title: 'Google Shopping: regionalization of the integration'
createdAt: 2026-10-02T12:00:00.000Z
updatedAt: 2026-10-09T12:00:00.000Z
contentType: updates
productTeam: Channels
slugEN: 2026-10-09-google-shopping-regionalization-of-the-integration
locale: en
announcementSynopsisEN: "The Google Shopping integration now sends shipping costs, SLA, price, and availability by region based on the store's logistics zones."
tags:
  - New feature
  - Marketplace
---

We've developed Google Shopping regionalization so that ads and offers from VTEX stores using the Google Shopping integration can submit shipping, SLA, price, and availability based on the buyer's region. This feature is available for stores with the [Google Shopping integration](/en/docs/tracks/google-shopping-marketplace) configured and with active [shipping policies](/en/docs/tutorials/shipping-policy) that include a shipping table for the integration's sales channel. The zones that segment the country for Google, including **Common zones**, are fixed and come pre-synced from logistics.

This feature aims to deliver a smoother shopping experience, giving buyers access to pricing, availability, shipping time, and shipping costs from their first interaction with the ad.

## What has changed?

Previously, the integration sent SKU data at the national level, with a single price and availability status for the entire country, without region-specific shipping information or SLAs. Now, ads and offers can display shipping, SLA, price, and availability based on the buyer's region. These values come from a simulation based on the store's shipping policies, so price and shipping promotions are also factored into what's sent to Google.

Two options can be activated, in this order:

- **Google Shipping:** Sends Google the shipping costs and delivery SLA already calculated by VTEX's shipping table, by region. Price and availability remain national. Ads and offers can display the shipping value and estimated SLA, including free shipping or fast delivery, depending on store promotions.
- **RAAP** (Regional Availability & Pricing): Regionalizes the price and availability of each SKU that the integration already sends at a national scope.

> RAAP can only be activated when Google Shipping is active and when the store has an actual price or inventory variation by region.

## What needs to be done?

The feature is available to all VTEX stores with an active Google Shopping integration as of October 2, 2026. To use this feature, the store must have shipping policies with a configured and active shipping table for the integration's sales channel, and must activate the desired zones on the new page.

Stores using CMS Portal (Legacy) or headless need to adapt their product page to read the `region_id` parameter that Google adds to the URL. Without this reading, RAAP isn't reflected on the storefront. Learn more in [Adapting headless storefronts to Google RAAP](https://developers.vtex.com/docs/guides/adapting-headless-storefronts-to-google-raap).

For more information on configuring each step, see the [Google Shopping regionalization](/en/docs/tutorials/google-shopping-regionalization) tutorial.
