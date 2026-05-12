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
| **Conversion rate** | Percentage of clicks that resulted in conversions. | (Conversions / Clicks) × 100 |
| **CPM** (Cost per mille) | Average cost per 1,000 impressions. | (Cost / Impressions) × 1,000 |
| **Cost** | Total amount spent on the campaign. | - |
| **Revenue** | Total revenue attributed to the ad. | - |
| **ACOS** (Advertising Cost of Sales) | Share of revenue spent on advertising. The lower the ACOS, the more efficient the campaign. | (Cost / Revenue) × 100 |

> ℹ️ Metrics that report a count or a monetary total (impressions, clicks, conversions, sales, cost, and revenue) are direct measures and don't have a derived formula.

## Attribution model

VTEX Ads attributes a conversion to an ad when a user interacts with the ad and later makes a purchase that meets the platform's attribution rules. The rules below determine which ad receives the credit, within what time frame, and how journeys with multiple interactions are resolved.

### Attribution window

The attribution window is 14 days. Any conversion that happens within 14 days of an eligible ad interaction (click or view) can be attributed to that ad.

For example, if a user clicks an ad today, a purchase of the advertised product made within the next 14 days can be credited to that ad.

### Measurement signal by campaign type

The interaction that counts as the attribution signal depends on the campaign type:

- **Sponsored products:** Attributed by click. A conversion is only counted when the user clicked the ad before purchasing.
- **Banner, video, and sponsored brands:** Attributed by view (impression). A conversion is counted when the user viewed the ad before purchasing.

> ℹ️ This distinction is what powers the **ROAS click** and **ROAS view** metrics described in [ROAS metrics](#roas-metrics).

### Direct conversions and assisted sales

Every ad-influenced purchase is classified into one of two mutually exclusive categories:

- **Direct conversion:** The user bought the advertised product itself. The sale is credited to the ad based on the most recent eligible interaction:
  - **Click conversion:** A direct conversion attributed to a click on the ad.
  - **View conversion:** A direct conversion attributed to a view of the ad.
- **Assisted sale:** The user bought a different product from the same seller as the advertised product, after at least one ad interaction (click or view) and with no direct conversion attributed to the ad.


### Attribution hierarchy

A single purchase is never credited to more than one campaign. When a user interacts with several ads before buying, the platform decides which campaign receives the credit using this priority order:

1. **Offsite campaigns:** If an active [offsite](/en/docs/tracks/retail-media-glossary) campaign was the user's last touchpoint, it has full priority.
2. **Last click:** Otherwise, the platform looks for the most recent click on a click-attributed campaign within the 14-day window.
3. **Last view:** If no eligible click exists, the credit goes to the most recent view on a view-attributed campaign (banner, video, or sponsored brands).

> ℹ️ The interaction (click or view) must occur before the order is placed for the conversion to be valid.

### Product mapping

A campaign can only be credited for products that are explicitly associated with it.

- **Sponsored products (1:1 mapping):** Each ad represents a single product. A click on the ad for product A can only generate a conversion for product A.
- **Banner, video, and sponsored brands (N:1 mapping):** A creative is associated with a list of SKUs. An interaction with the creative can attribute to any product in that list.

> ℹ️ Within a campaign, each individual creative reports performance independently, so you can compare different ad pieces in the same campaign.

## Assisted sales metrics

Assisted sales surface the influence an ad had on purchases that didn't convert directly. For example, a user sees an ad for a Samsung S26 and, two days later, buys a Samsung S25 from the same seller. That sale is counted as assisted to the Samsung S26 ad.

A sale is counted as assisted when all the following conditions are true:

- The sold item belongs to the same seller as the advertised product.
- There is no direct conversion attributed to the ad.
- The user interacted with the ad at least once before the purchase.

When more than one ad interaction is eligible, the assisted sale is credited to the most recent eligible interaction before the purchase.

> ℹ️ Matching is based on the seller. Any product from the same seller can generate an assisted sale, regardless of brand or product line.

The metrics derived from assisted sales data are:

| Metric | What it measures |
| :---- | :---- |
| **Assisted sales** | Revenue from sales the ad influenced without direct conversion. |
| **Assisted orders** | Number of orders attributed as assisted. |
| **Assisted items** | Number of items sold attributed as assisted. |
| **Assisted ROAS** | Return on ad spend from assisted revenue (assisted revenue / total cost). |

## ROAS metrics

**ROAS** (Return on Ad Spend) measures the return on ad investment. ROAS variants differ in which revenue is included in the numerator. They all share the same denominator (total ad cost), so they are directly comparable.

The revenue terms used in the formulas are:

- **Direct revenue:** Revenue from direct conversions of the advertised product, combining click and view conversions.
- **Click conversion revenue:** Revenue from direct conversions credited to clicks.
- **View conversion revenue:** Revenue from direct conversions credited to views.
- **Assisted revenue:** Revenue from [assisted sales](#assisted-sales-metrics).

| Metric | What it measures | Formula |
| :---- | :---- | :---- |
| **ROAS** | Return on ad spend from direct conversions (click and view combined). | Direct revenue / total cost |
| **ROAS click** | Return on ad spend from direct conversions credited to clicks. | Click conversion revenue / total cost |
| **ROAS view** | Return on ad spend from direct conversions credited to views. | View conversion revenue / total cost |
| **Overall ROAS** | Consolidated return that includes both direct and assisted revenue. | (Direct revenue + assisted revenue) / total cost |

Comparing **ROAS click** and **ROAS view** helps identify which campaign types drive return primarily through clicks versus views. This is useful when evaluating sponsored products against banner or sponsored brands campaigns.

**Overall ROAS** combines direct and assisted revenue against the same total cost, providing a unified view of total return.

> ⚠️ ROAS click and ROAS view are available to users with administrator-level permissions on VTEX Ads. Standard users won't see these two metrics on dashboards or in tables.

## Data availability and access

- Performance metrics and assisted metrics are available historically. There is no date restriction on their data.
- **ROAS click**, **ROAS view**, and **Overall ROAS** are available from March 25, 2026 onward. There is no historical data for these fields prior to that date.
- When data is absent for a given metric, the field displays zero.
