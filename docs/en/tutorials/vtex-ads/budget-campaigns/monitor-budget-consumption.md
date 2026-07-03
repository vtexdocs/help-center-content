---
title: 'Monitor budget consumption'
createdAt: '2026-06-22T00:00:00.000Z'
updatedAt: '2026-06-22T00:00:00.000Z'
contentType: tutorial
productTeam: Others
slugEN: monitor-budget-consumption
locale: en
---

This article explains how to access and interpret the **budget consumption report** for campaigns with Budget Pacing on VTEX Ads. The report allows media operators and account managers to track the campaign's delivery pace and quickly identify consumption deviations.

> ⚠️ The budget consumption report is available only for campaigns of publishers with Budget Pacing active. To understand how the mechanism works, see [Budget Pacing](https://help.vtex.com/en/docs/tutorials/budget-pacing).

## Accessing the report

1. In the Admin, under VTEX Ads, scroll down the page to the campaign listing.
2. Locate the desired campaign and click the corresponding row.
3. In the **Investment** section, click `View consumption report`.

> ℹ️ You can share the report link directly with the account manager or the client.

## Information in the report

The report is composed of overview cards, consumption charts, and a time-of-day heatmap.

### Overview cards

The cards display the following data for the current cycle:

| Card | Displayed information |
| --- | --- |
| **Consumption of the day** | Total spent today up to the last query. |
| **Consumption of the week** | Total spent over the last 7 days. |
| **Total cycle consumption** | Cumulative total for the current cycle. |
| **Closing forecast** | Projected total spend at the end of the cycle, based on the current consumption pace. |

The **pacing status badge** is displayed inside the consumption card and indicates the campaign's current delivery pace. See the description of each status in the section [Interpreting the pacing status](#interpreting-the-pacing-status).

### Consumption charts

The report displays three main charts:

- **Total campaign spend:** Evolution of cumulative spend in the cycle, with three curves:
  - **Actual:** What has already been consumed.
  - **Target:** What should have been consumed up to now.
  - **Forecast:** Estimated final value.
- **Daily spend:** Bars per day, showing days above and below the consumption target.
- **Cumulative daily spend with closure projection:** Consumption pace for the current day and projected remaining spend for the day.

### Hourly heat map

The heat map displays the campaign's hour-by-hour consumption. The columns represent the hours of the day (12 AM–11 PM), and the rows represent days within the selected period.

| Element | Meaning |
| --- | --- |
| **Cell color intensity** | Proportional to the amount consumed in that hour. The stronger the color, the greater the spend. |
| **Distinct visual marker** | Indicates periods when the daily budget was exhausted, distinguishing these from cells with zero spend due to lack of inventory. |
| **Tooltip** | Displayed when hovering over the cell. Shows time, date, amount consumed, and the campaign status at that moment. |

The component also displays a **daily consumption projection** based on the pace of hours already elapsed.

> ℹ️ The daily consumption projection assumes a constant pace throughout the day. Inventory variations throughout the day aren't considered in the projection.

## Interpreting the pacing status

The status badge indicates the campaign's consumption pace relative to what's expected for the period:

| Badge | Consumption range | What's happening |
| --- | --- | --- |
| **On track** (green) | Between 90% and 110% of expected | The campaign is consuming at the expected pace. No action is needed. |
| **Underpacing** (yellow) | Below 90% of expected | Consumption is below the expected pace. The engine is already performing ramp-up, automatically accelerating delivery. |
| **Overpacing** (orange) | Above 120% of expected | Consumption is above the expected pace. The engine has automatically reduced the daily cap. |
| **Critical underpacing** (red) | Below 60% over the last 3 days | Consumption is far below expected for 3 consecutive days. The engine is ramping up, but there may be a setup issue in the campaign that Budget Pacing can't resolve on its own. |

### Investigating critical underpacing

When the status is **critical underpacing**, the engine is already trying to recover the pace. If the campaign continues with consumption well below expected, check for restrictions in the configuration:

- **Overly narrow targeting:** Few products or categories eligible for display.
- **CPM below the competitive value:** The campaign may be losing auctions due to an insufficient bid.
- **Low inventory at the publisher:** The publisher may not have enough traffic volume for the period.

> ⚠️ Avoid making manual adjustments to the allocation value while investigating the problem. Manual intervention during the cycle restarts the engine's calculation and may make diagnosis more difficult.

## Navigating between cycles

The cycle selector, displayed in the report header, allows you to view previous cycles:

- **Campaigns with an end date:** The selector is limited to the campaign's duration dates.
- **Always-on campaigns:** The selector allows navigation between the campaign's 30-day cycles, from the current cycle to previously completed cycles.

> ℹ️ The cycle displayed in the report is calculated from the cycle start date defined by the engine, not the calendar month.
