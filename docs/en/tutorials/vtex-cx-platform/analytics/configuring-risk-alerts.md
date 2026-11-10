---
title: "Analytics: Configuring risk alerts"
createdAt: 2026-11-10T17:36:00.000Z
updatedAt: 2026-11-10T17:36:00.000Z
contentType: tutorial
productTeam: Post-purchase
slugEN: configuring-risk-alerts
locale: en
---

Risk alerts highlight support chats on the **Monitoring** tab of the Live Desk dashboard when waiting time, time to the first response, or chat duration goes above a goal you set.

> ⚠️ Only project moderators can configure risk alerts. Set the goals on the **Monitoring** tab of the Live Desk dashboard.

In this guide, you'll learn how to set time goals and how the dashboard, the toast, and the email behave after you save them.

## Time goals

Each goal is optional and independent. You can set one, two, or all three. Alerts appear only for the metrics you set.

| Goal | What it measures | Where the row is highlighted |
| --- | --- | --- |
| **Average wait time** | How long contacts stay in the queue before a support chat starts. | **Waiting** table |
| **Average time to 1st response** | How long it takes for the representative to send the first message after the support chat starts. | **In progress** table |
| **Average chat duration** | How long the support chat lasts from start to end. | **In progress** table |

For each goal you turn on, enter the time limit and choose the unit: seconds, minutes, or hours.

On the **Monitoring** tab, the matching widget in **Current time metrics** shows a visual alert when the current maximum for that metric is above the goal. The maximum is the highest value recorded for the metric in the current operation. The detailed monitoring table highlights each support chat that is over the limit:

- The **Waiting** table highlights chats over the wait time goal.
- The **In progress** table highlights chats over the time to 1st response goal or the chat duration goal. If a chat is over both, the row shows the first-response alert.

For the full description of these sections, see [Analytics: Support metrics](https://help.vtex.com/en/docs/tutorials/analytics-support-metrics).

## Configuring the goals

1. Access the organization and project you want to configure in [VTEX CX Platform](https://dash.weni.ai/orgs).
2. Open **Analytics** and select the **Live Desk** dashboard.
3. Open the **Monitoring** tab.
4. Open the risk alert configuration. The panel has one option for each metric: **Average wait time**, **Average time to 1st response**, and **Average chat duration**.
5. Turn on the metrics you want to monitor.
6. For each metric you turn on, enter the time limit and select the unit: seconds, minutes, or hours.
7. Save the configuration.

## Toast and email

You also choose how many support chats must be over a goal at the same time before a toast and an email are triggered. The default is 5.

The count is separate for each goal. When the number of support chats over that goal reaches the number you set, two things happen:

- A toast appears in **Analytics**, on whichever dashboard is open.
- If email is enabled for the configuration, one email is sent for that goal to the moderators and managers you selected. Wait time, time to 1st response, and chat duration each send their own email.

The toast and the email are triggered again only after the count for that goal drops below the number and then reaches it once more. While the count stays at or above the number, they aren't triggered again. For example, with the number set to 5:

1. Five support chats are over the goal. The toast appears, and the email is sent if email is enabled.
2. Three of those chats go back under the goal, and two remain over it. Nothing new is triggered.
3. Three other chats go over the goal, so the count is 5 again. The toast and the email are triggered again.
4. A sixth chat goes over the goal while the count is already 5. Nothing new is triggered.

To change the number or the recipients, open the same configuration panel on the **Monitoring** tab. You can select project moderators and managers as email recipients. Email is optional. With email disabled, the dashboard highlights and the toast still show the alerts.
