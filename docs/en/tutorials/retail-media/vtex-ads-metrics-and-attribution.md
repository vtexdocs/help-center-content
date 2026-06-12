---
title: 'VTEX Ads metrics and attribution'
createdAt: '2026-05-04T10:00:00.000Z'
updatedAt: '2026-05-05T10:00:00.000Z'
contentType: tutorial
productTeam: Others
slugEN: vtex-ads-metrics-and-attribution
locale: en
---

[VTEX Ads](/en/docs/tracks/retail-media) provides a set of metrics to help advertisers, publishers, and marketing agencies measure campaign performance and the return on ad spend. The metrics are available across all VTEX Ads dashboards as **metric cards** at the top of each screen and as **columns** in the corresponding tables.

This article describes the available metrics and the attribution model that determines how the platform credits conversions to ads.

> ℹ️ For broader retail media terminology, see the [Retail media glossary](/en/docs/tracks/retail-media-glossary).

## Performance metrics

The following metrics describe the volume, efficiency, and cost of campaigns:

| Metric | What it measures | Formula |
| :---- | :---- | :---- |
| **Impressions** | Number of times the ad was displayed to users. | - |
| **Clicks** | Number of times users clicked on the ad. | - |
| **Conversions** | Number of purchases attributed to the ad. | - |
| **Sales** | Total monetary value of sales attributed to the ad. | - |
| **CTR** (Click-through rate) | Percentage of impressions that resulted in clicks. | (Clicks / Impressions) × 100 |
| **Conversion rate (click)** | Percentage of clicks that resulted in click-attributed conversions. | (Click conversions / Clicks) × 100 |
| **Conversion rate (view)** | Percentage of views that resulted in view-attributed conversions. | (View conversions / Views) × 100 |
| **CPM** (Cost per mille) | Average cost per 1,000 impressions. | (Cost / Impressions) × 1,000 |
| **Cost** | Total amount spent on the campaign. | - |
| **Revenue** | Total revenue attributed to the ad. | - |
| **ACOS** (Advertising Cost of Sales) | Share of revenue spent on advertising. The lower the ACOS, the more efficient the campaign. | (Cost / Revenue) × 100 |

> ℹ️ Metrics that report a count or a monetary total (impressions, clicks, conversions, sales, cost, and revenue) are direct measures and don't have a derived formula.

Each ad format uses the denominator that matches its attribution model: clicks for sponsored products and views for banner, video, and sponsored brands. Dashboards display **Conversion rate (click)** and **Conversion rate (view)** separately, with tooltips explaining how each one is calculated.

## Attribution model

VTEX Ads attributes a conversion to an ad when a user interacts with the ad and later makes a purchase that meets the platform's attribution rules. The rules below determine which ad receives the credit, within what time frame, and how journeys with multiple interactions are resolved.

### Attribution window

The attribution window defines the time frame during which a conversion can be attributed to an eligible ad interaction. Each format uses its own windows:

- **Sponsored products:** 7 days for click conversions and 1 day for view conversions.
- **Banner, video, and sponsored brands:** 14 days for view conversions.

For example, if a user clicks a sponsored product ad today, a purchase of the advertised product made within the next 7 days can be credited to that ad. If the user only views the ad, the purchase must happen within 1 day (24 hours) to be credited to the view.

### Measurement signal by campaign type

The interaction that counts as the attribution signal depends on the campaign type:

- **Sponsored products:** Attributed by click and by view. A conversion is counted when the user clicked the ad or viewed it before purchasing, within the window that corresponds to each interaction.
- **Banner, video, and sponsored brands:** Attributed by view (impression). A conversion is counted when the user viewed the ad before purchasing.

> ℹ️ The **ROAS click** and **ROAS view** metrics described in [ROAS metrics](#roas-metrics) break down the return by attributed interaction type.

### Click and view conversions

A conversion happens when the user buys the advertised product itself. The sale is credited to the ad based on the most recent eligible interaction:

- **Click conversion:** A conversion attributed to a click on the ad.
- **View conversion:** A conversion attributed to a view of the ad.


### Attribution hierarchy

A single purchase is never credited to more than one campaign. When a user interacts with several ads before buying, the platform decides which campaign receives the credit using this priority order:

1. **Offsite campaigns:** If an active [offsite](/en/docs/tracks/retail-media-glossary) campaign was the user's last touchpoint, it has full priority.
2. **Last click:** Otherwise, the platform looks for the most recent click on a click-attributed campaign, within the format's attribution window.
3. **Last view:** If no eligible click exists, the credit goes to the most recent view on a view-attributed campaign, within the format's attribution window.

> ℹ️ The interaction (click or view) must occur before the order is placed for the conversion to be valid.

### Product mapping

A campaign can only be credited for products that are explicitly associated with it.

- **Sponsored products (1:1 mapping):** Each ad represents a single product. An interaction with the ad for product A can only generate a conversion for product A.
- **Banner, video, and sponsored brands (N:1 mapping):** A creative is associated with a list of SKUs. An interaction with the creative can attribute to any product in that list.

> ℹ️ Within a campaign, each individual creative reports performance independently, so you can compare different ad pieces in the same campaign.

## ROAS metrics

**ROAS** (Return on Ad Spend) measures the return on ad investment. ROAS variants differ in which revenue is included in the numerator. They all share the same denominator (total ad cost), so they are directly comparable.

The revenue terms used in the formulas are:

- **Attributed revenue:** Revenue from conversions of the advertised product, combining click and view conversions.
- **Click conversion revenue:** Revenue from conversions credited to clicks.
- **View conversion revenue:** Revenue from conversions credited to views.

| Metric | What it measures | Formula |
| :---- | :---- | :---- |
| **ROAS** | Return on ad spend from attributed conversions (click and view combined). | Attributed revenue / total cost |
| **ROAS click** | Return on ad spend from conversions credited to clicks. | Click conversion revenue / total cost |
| **ROAS view** | Return on ad spend from conversions credited to views. | View conversion revenue / total cost |

Comparing **ROAS click** and **ROAS view** helps identify which campaign types drive return primarily through clicks versus views. This is useful when evaluating sponsored products against banner or sponsored brands campaigns.

> ⚠️ ROAS click and ROAS view are available to users with administrator-level permissions on VTEX Ads. Standard users won't see these two metrics on dashboards or in tables.

## Data availability and access

- Performance metrics are available historically. There is no date restriction on their data.
- **ROAS click** and **ROAS view** are available to users with administrator-level permissions starting July 1, 2026. These metrics don't display data prior to March 25, 2026.
- When data is absent for a given metric, the field displays zero.
