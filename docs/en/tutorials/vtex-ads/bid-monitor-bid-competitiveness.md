---
title: 'Bid Monitor (bid competitiveness)'
createdAt: 2026-10-16T00:00:00.000Z
updatedAt: 2026-11-25T00:00:00.000Z
contentType: tutorial
productTeam: Others
slugEN: bid-monitor-bid-competitiveness
locale: en
---

> ⚠️ **Bid Monitor** is in Open Beta and available to all accounts in 1:1 campaigns. Network campaigns don't display **Bid Monitor**.

**Bid Monitor** is the competitiveness indicator of [VTEX Ads](https://help.vtex.com/en/docs/tracks/vtex-ads-first-steps) that shows, in the **VTEX Ads** Admin panel, whether an ad's bid is well positioned compared to the competition. The indicator is a ring displayed next to the CPC (cost per click) or CPM (cost per mille) amount. When the bid can become more competitive, **Bid Monitor** also displays a suggested amount, which the advertiser applies within the campaign, as described in [Applying a suggestion](#applying-a-suggestion).

The indicator is available to both profiles that operate campaigns in **VTEX Ads**:

- **Advertiser:** Sees the ring and the suggested amount, and can apply the suggestion within the campaign.
- **Publisher:** Sees the same ring and the same suggestion on the 1:1 ads they publish, without the `Apply` option.

## Where the indicator appears

To view the indicator, log in to the **VTEX Ads** Admin panel and click the **Ads** tab. The ring appears next to the amount in the **CPC** or **CPM** column in two places:

- **Ad list:** In the **Ads** tab, the suggested amount appears below the bid, but it's informational only. When you hover over it, a text indicates that you must go to the campaign to change the bid.
- **Campaign ads table:** When you click `View campaign`, the suggestion appears below the bid and you can click it to change the amount.

## How it works

For each ad, **VTEX Ads** compares the current CPC or CPM with what other advertisers pay for similar positions, that is: the same product category, the same publisher, and the same ad type. This comparison produces two elements:

- **Competitiveness level:** Ring with a color and fill that shows how competitive the bid is at that moment.
- **Suggested amount:** Displayed when the current bid can become more competitive. In the **Ad list**, the suggestion is informational only. The advertiser applies the suggestion on the campaign screen.

The comparison uses the category of the advertised product, not the campaign's category, and considers the most specific level of the category hierarchy that has enough data. When there isn't enough competition in a more specific category, the comparison uses the category above it.

For this reason, an ad's level can change without you changing the bid: if competitors adjust their bids, or if the volume of competition in the category changes, your ad's relative position also changes. The indicator is always a snapshot of the moment.

> ℹ️ The indicator is a market reference, not a guarantee. It reflects the bid's position relative to the competition, but the result of the ad auction also depends on the quality and relevance of the ad, not only on the bid amount.

## Competitiveness levels

**Bid Monitor** classifies the bid into four levels, indicated by the color and fill of the ring:

| Level                | Indicator        | What it means                                                                                                   |
| :------------------- | :--------------- | :-------------------------------------------------------------------------------------------------------------- |
| **Strong bid**       | Green (full)     | The bid is already among the most competitive in the category. No suggestion is displayed.                      |
| **Reasonable bid**   | Green (partial)  | The bid is above the category average. There's room to improve, but the situation isn't critical.               |
| **Weak bid**         | Orange           | The bid is below most competitors in the category. A more competitive suggested amount is displayed.            |
| **Very weak bid**    | Red              | The bid is well below the market. A more competitive suggested amount is displayed.                             |

## When the indicator doesn't appear

The ring isn't displayed in the following cases:

- **Network campaign:** **Bid Monitor** is available only in 1:1 campaigns.
- **Campaign with an automatic objective-based strategy:** When the system controls the CPC or CPM automatically, the cell displays a dash instead of the indicator, because a fixed suggested amount doesn't apply to a dynamic bid.
- **Fewer than two competing campaigns:** When fewer than two campaigns compete on the same publisher, in the same product category, and for the same ad type, only the bid amount is displayed. The ring starts to appear as competition increases.
- **Paused or draft ad:** The indicator isn't displayed for ads that aren't active.

## Applying a suggestion

The advertiser applies the suggested amount within the campaign, using the bid editor. To do this, follow the steps below:

1. Log in to the **VTEX Ads** Admin panel and click the **Ads** tab.
2. In the **Ad list**, locate the ad with a suggested amount below the CPC or CPM.
3. Click the campaign name.
4. In the campaign ads table, click the suggestion below the bid amount.
5. In the bid editor, which opens with the suggested amount filled in, check the amount or edit it, if necessary.
6. Click `Apply`.

The ad's CPC or CPM is updated with the confirmed amount. To close the editor without changing the bid, click `Cancel`.

Publishers see the suggested amount, but they don't have the `Apply` option.

## Undoing an applied suggestion

**Bid Monitor** doesn't have a button to undo an applied suggestion. To return to the previous bid, click the pencil icon next to the CPC or CPM amount in the ads table on the campaign screen and edit the bid manually.

## Bid Monitor and **impression share**

**Bid Monitor** and the **[impression share](https://help.vtex.com/en/docs/tutorials/vtex-ads-metrics-and-attribution#impression-share-metrics)** metrics measure different things and, together, help you decide what to adjust in an ad:

- **Bid Monitor:** Shows how the bid compares to the category reference and suggests a more competitive bid. It's a tool to improve the ad's position in its category.
- **Impression share:** Measures how much of the total auction opportunities the ad captured, and how much was lost by rank or by budget. It considers all categories in which the ad competes and factors beyond the bid.

The auction rank depends on the bid and the quality of the ad. For this reason, reading the two indicators together points to different actions:

| Scenario                                                                                                                                                                                                                       | What's happening                                                                                                                                                                                                                                  | What to do                                                                                                                                       |
| :----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | :------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | :----------------------------------------------------------------------------------------------------------------------------------------------- |
| **Strong bid** or **Reasonable bid** and low **[lost impression share (by rank)](https://help.vtex.com/en/docs/tutorials/vtex-ads-metrics-and-attribution#impression-share-metrics)**.                                          | The bid is competitive in the category and the ad wins most of the auctions it competes in.                                                                                                                                                       | Keep the bid. If the level changes to **Weak bid** or **Very weak bid**, apply the new suggestion to keep up with market changes.                |
| **Weak bid** or **Very weak bid** and high **lost impression share (by rank)**.                                                                                                                                                | The bid is below most competitors in the category. The ad competes in many auctions but loses to competitors with higher bids.                                                                                                                    | Apply the **Bid Monitor** suggestion. A more competitive bid helps win some of the lost auctions.                                                |
| **Strong bid** and high **lost impression share (by rank)**                                                                                                                                                                    | The bid is among the most competitive in the category, but the ad loses many auctions. The auction rank also considers the quality and relevance of the ad, such as click-through rate, conversion rate, and image.                                | Improve the quality of the ad (image, description, category, and pricing). Increasing the bid doesn't solve the problem when it's relevance.      |

> ℹ️ To learn how **impression share** metrics are calculated and where to find them, see **[Impression share metrics](https://help.vtex.com/en/docs/tutorials/vtex-ads-metrics-and-attribution#impression-share-metrics)**.
