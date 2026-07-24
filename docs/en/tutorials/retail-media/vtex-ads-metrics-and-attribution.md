---
title: 'VTEX Ads metrics and attribution'
createdAt: '2026-05-04T10:00:00.000Z'
updatedAt: '2026-07-03T10:00:00.000Z'
contentType: tutorial
productTeam: Others
slugEN: vtex-ads-metrics-and-attribution
locale: en
---

[VTEX Ads](/docs/tracks/retail-media) provides a set of metrics to help advertisers, publishers, and marketing agencies measure campaign performance and return on advertising investment. Metrics are available across all VTEX Ads dashboards as **metric cards** at the top of each screen and as **columns** in the corresponding tables.

This article describes the available metrics and the attribution model that determines how the platform credits conversions to ads.

> ℹ️ For broader retail media terminology, see the [Retail Media Glossary](https://help.vtex.com/docs/tracks/retail-media-glossary).

## Performance metrics

The following metrics describe the volume, efficiency, and direct results of campaigns.

### Base metrics

| Metric                                          | What it measures                                                                                                                                                                                                         | Formula                                         |
| ----------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ----------------------------------------------- |
| **Impressions**                                 | Number of times the ad was displayed on the user's screen, regardless of viewability.                                                                                                                    | -                                               |
| **Clicks**                                      | Number of clicks on the ad.                                                                                                                                                                              | -                                               |
| **Views**                                       | Number of effective views of the ad (impressions that met the viewability criteria).                                                                                                  | -                                               |
| **CTR** (Click-through rate) | Click-through rate. Measures ad engagement relative to the volume of impressions.                                                                                                        | (Clicks / Impressions) × 100 |
| **Cost**                                        | Total investment in ads during the period. Label displayed to advertisers. Publishers see the same amount as **Ad revenue**.                                             | -                                               |
| **Ad revenue**                                  | Total amount received by the publisher from serving ads during the period. Label displayed to publishers. Refers to the same amount as the **Cost** seen by advertisers. | -                                               |
| **CPM** (Cost per mille)     | Average cost per 1,000 impressions.                                                                                                                                                                      | (Cost / Impressions) × 1,000 |

> ℹ️ In campaigns with formats charged by **CPM** (banner, video banner, and sponsored brands), the total reported **Views** may exceed **Impressions** when the **daily budget cap** is reached. This behavior is expected and doesn't indicate an error in the reports.
>
> The definition of **Views** in the table above still applies: they're impressions that met the viewability criteria. Under normal conditions, they represent a subset of impressions.
>
> Under CPM billing, the **Impressions** count is validated against the budget and stops once the daily cap is reached since it directly impacts campaign spend. The **Views** count doesn't go through the same validation and may continue to be recorded even after impressions stop being recorded. The closer the campaign gets to the cap, the greater the difference between the metrics tends to be. This behavior doesn't apply to **sponsored products**, which use a different billing model.

### Conversions and revenue

| Metric                                                  | What it measures                                                                                                                                                                                 | Formula                                   |
| ------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ----------------------------------------- |
| **Conversions**                                         | Total number of conversions attributed to the ad (click + view), applying the Click > View priority. Each conversion is attributed only once. | -                                         |
| **Conversions (click)**              | Number of conversions attributed exclusively by click.                                                                                                                           | -                                         |
| **Sales**                                               | Total monetary amount of sales attributed to the ad.                                                                                                                             | -                                         |
| **Revenue**                                             | Total revenue attributed directly to the ad. Considers sales of the advertised products only, excluding halo sales.                                              | -                                         |
| **ACOS** (Advertising Cost of Sales) | Proportion of revenue spent on advertising. The lower the ACOS, the more efficient the campaign.                                                                 | (Cost / Revenue) × 100 |

### Conversion rate

| Metric                            | What it measures                                                                                                                                     | Formula                                               |
| --------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------- |
| **Conversion rate**               | Conversion efficiency of the ad. Uses views as the denominator for all formats, keeping consistency across ad types. | (Conversions / Views) × 100        |
| **Click-through conversion rate** | Conversion efficiency based on click interactions. Available for all formats as a complementary metric.              | (Click conversions / Clicks) × 100 |

> ℹ️ Metrics that report a count or a monetary total (impressions, clicks, views, conversions, sales, revenue, and cost) are direct measures and don't have a derived formula.

## Attribution model

**Attribution** is the process of linking a sale to one or more user interactions with the ad. VTEX Ads attributes a conversion to an ad when the user interacts with it and later makes a purchase that meets the platform's attribution rules. The following rules determine which interaction receives credit and the timeframe for that.

### Attribution window

The attribution window defines the maximum period in which a purchase can be attributed to an eligible interaction with the ad. After this period, the conversion isn't counted as a result of the ad. Each format uses its own windows:

| Format             | Click window | View window                         |
| ------------------ | ------------ | ----------------------------------- |
| Sponsored products | 7 days       | 1 day (24 hours) |
| Banner             | 14 days      | 14 days                             |
| Video banner       | 14 days      | 14 days                             |
| Sponsored brands   | 14 days      | 14 days                             |

For example, if a user clicks a sponsored product ad today, a purchase of the advertised product made within the next seven days can be attributed to that ad. If the user only views the ad, the purchase must occur within one day (24 hours) to be attributed to the view.

### Consolidated attribution

VTEX Ads uses a **consolidated attribution** model, which considers both the click and the view as eligible interactions within their respective windows:

- **Click attribution:** Conversion attributed to a user who clicked the ad within the attribution window.
- **View attribution:** Conversion attributed to a user who viewed the ad without clicking within the attribution window.

All formats are attributed by click and by view. For sponsored products, view attribution uses a one-day window. For banners, video banners, and sponsored brands, the view window is 14 days.

> ℹ️ View attribution depends on the **view event**, a technical signal sent by the publisher to the platform confirming that the user viewed the ad. Publishers that don't send the view event don't generate view-attributed conversions.

### Attribution priority (last touch)

VTEX Ads uses the **last touch** model, which attributes the conversion to the user's most recent interaction before the purchase. When there's both a click and a view of the same ad within the attribution window, the **click takes priority** (Click > View). This way, each conversion is attributed only once, which avoids double counting.

| Scenario                                                                                           | Attribution |
| -------------------------------------------------------------------------------------------------- | ----------- |
| User sees the ad, then clicks and buys                                                             | Click       |
| User clicks the ad, then sees it again and buys                                                    | Click       |
| User only sees the ad (without clicking) and buys within the attribution window | View        |
| User only clicks and buys within the attribution window                                            | Click       |

> ℹ️ The interaction (click or view) must occur before the order is placed for the conversion to be valid. Each conversion is attributed to a single ad and a single interaction, with no proportional attribution split.

### Direct conversion and halo sales

A user interaction can generate two types of sale:

- **Direct conversion:** Sale of the advertised product itself, attributed to the ad by click or by view.
- **Halo sale:** Sale of **another, non-advertised product** purchased in the same order and influenced by the ad. In other words, it's the assisted revenue generated by items bought alongside the advertised product.

For example, an ad for sneakers leads the customer to buy the sneakers (direct conversion) and, in the same order, a pair of socks (halo sale).

### Product mapping

A campaign can only be attributed for products explicitly associated with it.

- **Sponsored products (1:1 mapping):** Each ad represents a single product. An interaction with the ad for product A can only generate direct conversion for product A.
- **Banner, video, and sponsored brands (N:1 mapping):** A creative is associated with a list of SKUs. An interaction with the creative can be attributed to any product in that list.

> ℹ️ In a campaign, each individual creative reports performance independently, allowing you to compare different ad pieces in the same campaign.

## ROAS metrics

**ROAS** (Return on Ad Spend) measures the return on advertising investment. The ROAS variants differ in which revenue is included in the numerator. They all share the same denominator (total advertising cost), so they're directly comparable.

The following revenue terms used in the formulas distinguish revenue across two dimensions.

By **attribution source** (click, view, or both):

- **Attributed revenue:** Revenue from direct conversions of the advertised product, combining click and view attribution.
- **Click-attributed revenue:** Revenue coming from conversions attributed to clicks.

By **sale type** (advertised product or influenced products):

- **Direct revenue:** Revenue from direct conversions of the advertised product. Used as a counterpart to halo revenue.
- **Halo revenue:** Revenue generated by halo sales, meaning other non-advertised products purchased in the same order influenced by the ad.

| Metric                 | What it measures                                                                                                                                                                                                                                                | Formula                                                   |
| ---------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------- |
| **ROAS**               | Return on investment from attributed conversions (click and view combined).                                                                                                                                                  | Attributed revenue / Cost                                 |
| **Click-through ROAS** | Return generated by users who clicked the ad. Available as a complementary metric for comparison by attribution channel.                                                                                                        | Click-attributed revenue / Cost                           |
| **Halo ROAS**          | Assisted revenue ROAS: Revenue from other products in the order that weren't the advertised one but were influenced by the ad, divided by the investment.                                                                       | Halo revenue / Cost                                       |
| **Total ROAS**         | Total ROAS: Adds the direct revenue (advertised product) and the halo revenue (other products in the same order). Measures the total campaign impact on the entire order. | (Direct revenue + Halo revenue) / Cost |

> ℹ️ View-attributed revenue is included in the consolidated **ROAS** calculation but isn't displayed as a standalone metric in dashboards or tables.

Comparing consolidated ROAS with **click-through ROAS** helps identify which campaigns generate returns mainly through clicks or through views. This is useful when evaluating sponsored products against banners or sponsored brands.

> ⚠️ **ROAS per click** is available only for users with super admin permissions (superAdmin) in VTEX Ads. Default users won't see this metric in dashboards or tables.

## Halo (influenced sales metrics)

Halo metrics measure an ad's indirect impact on sales of other non-advertised products purchased in the same order.

| Metric           | What it measures                                                                                       | Formula |
| ---------------- | ------------------------------------------------------------------------------------------------------ | ------- |
| **Halo orders**  | Number of orders with at least one halo item.                                          | -       |
| **Halo revenue** | Revenue from non-advertised products purchased in the same order influenced by the ad. | -       |
| **Halo items**   | Number of halo items sold.                                                             | -       |

## Behavior in mixed date ranges

The attribution methodology for sponsored products changed on July 1, 2026, and now includes view conversions in addition to click conversions. Additionally, for all formats, the conversion rate now uses **views** as the denominator, instead of the previously used clicks.

That's why metrics such as ROAS, conversion rate, conversions, and attributed revenue are calculated differently before and after that date.

When the selected period spans July 1, 2026, the consolidated calculation applies the new methodology across the entire range. In these cases, the chart displays a visual notification on the date of the change.

For consistent results, select the analysis period based on the methodology you want to use:

- **Historical performance:** Select periods entirely before July 1, 2026.
- **New methodology:** Select periods entirely on and after July 1, 2026.

> ⚠️ For analysis windows that include July 1, 2026, the conversion rate is calculated using the new methodology across the entire range. Metrics broken down by click — **Conversions (click)**, **Conversion rate by click**, and **ROAS per click** — are available only from July 1, 2026.

## Data availability and access

- Base and conversion metrics are available historically, with no date restrictions.
- **ROAS per click** doesn't display data prior to March 25, 2026.
- Card and column customization is persisted across sessions. Publishers and advertisers have independent configurations.
- When there's no data for a metric, the field shows zero.
