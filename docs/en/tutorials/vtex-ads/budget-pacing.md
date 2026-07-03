---
title: 'Budget Pacing'
createdAt: '2026-06-22T00:00:00.000Z'
updatedAt: '2026-06-22T00:00:00.000Z'
contentType: tutorial
productTeam: Others
slugEN: budget-pacing
locale: en
---

> ⚠️ Budget Pacing is available only to publishers enabled by the VTEX team. To request activation, contact the VTEX AdOps team.

**Budget Pacing** is the [VTEX Ads](https://help.vtex.com/en/docs/tracks/vtex-ads-first-steps) mechanism that automatically redistributes a campaign's budget spending throughout the campaign cycle. Instead of requiring a fixed spend amount each day, VTEX Ads monitors the pace of spending and adjusts the daily cap to ensure the total budget for the cycle is used.

The goal is to eliminate the need for the media operator to make daily manual adjustments when a campaign doesn't spend as expected in the early days, especially for campaigns tied to monthly Insertion Orders.

## How it works

When creating a new campaign, you set only one value: the **average daily allocation.** Based on this information, the system calculates the estimated total spend for the cycle as a derived value and starts to track the ads delivery pace.

Once active, **Budget Pacing:**

- Monitors actual campaign consumption compared to the expected spend for the period.
- Recalculates the daily consumption cap at the start of each day, based on the remaining cycle balance.
- Speeds up the delivery pace on the days following a drop in consumption.
- Reduces the daily cap when consumption is above expected.

> ℹ️ The redistribution mechanism works behind the scenes. What the operator sees and configures is the average daily allocation. The automatic adjustment of the daily cap isn't displayed directly in the campaign creation or editing interface.

### Daily spend variation

The actual spend of a campaign with **Budget Pacing** varies throughout the cycle. On some days this spend will fall below the defined average allocation, and on others it may be significantly higher, especially when VTEX Ads needs to recover a period of underconsumption.

**Daily cap limits:**

- **In the last 30% of the cycle:** The daily cap can reach up to twice the defined average allocation, to make up for any underconsumption.
- **On any day of the cycle:** The daily cap never exceeds three times the average allocation, even in scenarios of rapid acceleration.

> ⚠️ The total cycle spend tends to stay within the calculated estimate. The variation occurs in the daily distribution, not in the cycle total.

## Campaign types and budget cycles

The behavior of Budget Pacing varies based on the campaign type:

| Campaign type | Budget cycle |
| --- | --- |
| **With an end date** | The cycle corresponds to the campaign duration, from the start date to the end date. |
| **Always-on** (no end date) | The cycle has a fixed duration of 30 calendar days, automatically renewed from the campaign start date. |

> ℹ️ The 30-day cycle for **always-on campaigns** is calculated from the campaign start date, not the calendar month. For example, a campaign started on April 10 runs its first cycle from April 10 to May 9.

### Campaigns already active

Budget Pacing is applied only to eligible campaigns as of the activation date for the publisher. Campaigns with an end date that are active before the feature is enabled will continue on the fixed daily budget model until completion. **Always-on campaigns** that are already active migrate automatically at the start of the next 30-day cycle.

## Pacing status

**Budget Pacing** monitors each campaign's consumption pace and assigns a pacing status, displayed in the [budget consumption report](https://help.vtex.com/en/docs/tutorials/monitoring-budget-consumption):

| Status | Expected consumption range | Indicator |
| --- | --- | --- |
| **On track** | Between 90% and 110% of expected | Green |
| **Underpacing** | Below 90% of expected | Yellow |
| **Overpacing** | Above 120% of expected | Orange |
| **Critical underpacing** | Below 60% over the last 3 days | Red |

When the status is **Underpacing** or **Critical underpacing**, Budget Pacing activates ramp-up automatically (automatic budget acceleration) to increase the delivery pace. The **Critical underpacing** status is informational only and doesn't trigger any action within the platform.

> ℹ️ If the campaign is experiencing **Critical underpacing** due to inventory constraints (few eligible products, very narrow targeting, or CPM below the competitive value), budget ramp-up won't solve the problem.

