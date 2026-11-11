---
title: "Analytics: Configuring operational alerts"
createdAt: 2026-11-10T17:36:00.000Z
updatedAt: 2026-11-11T21:20:00.000Z
contentType: tutorial
productTeam: VTEX CX Platform
slugEN: configuring-risk-alerts
locale: en
---

**Operational alerts** help you identify support chats that exceed the time limits defined for your operation. You can configure alerts for wait time, time to first response, and handle time on the **Live** tab of the **Live desk** dashboard.

This guide explains the available alerts, how to set their time limits, and how to notify moderators by email.

## Alert types

Each alert is optional and works independently. On the **Live** tab, the corresponding time cards are labeled **AWT**, **AFRT**, and **AST**. Each card displays the current value and the maximum value recorded for the active operation.

| Card | Alert limit | Description |
| --- | --- | --- |
| **AWT** | **Maximum wait time** | The average time contacts wait in the queue before a support chat starts. |
| **AFRT** | **Maximum time to 1st response** | The average time before the representative sends the first message after the room is assigned. |
| **AST** | **Maximum handle time** | The average total conversation time, from the beginning of the support chat with the representative until the chat is closed. |

> ℹ️ The first-response alert remains active until the representative sends the first message.

For the full description of the **Live** tab, see [Analytics: Support metrics](https://help.vtex.com/en/docs/tutorials/analytics-support-metrics).

## Configuring the alerts

1. Access the organization and project you want to configure in [VTEX CX Platform](https://dash.weni.ai/orgs).
2. Open **Analytics**.
3. In the **Live desk** dashboard, open the **Live** tab.
4. Next to `Export data`, click the <i class="fas fa-ellipsis-v" aria-hidden="true"></i> more options button.
5. Click `Operational alerts`.
6. Turn on one or more of the following alerts:
   - **Waiting time:** Alert on the Live Desk dashboard when a chat's wait time exceeds the defined limit**
   - **First response time:** Alert on the Live Desk dashboard when a chat's 1st response time exceeds the defined limit
   - **Handle time:** Alert on the Live Desk dashboard when a chat's handle time exceeds the defined threshold
7. For each alert you turn on:
   1. Enter the limit in **Maximum wait time**, **Maximum time to 1st response**, or **Maximum handle time**.
   2. In **Unit**, select the time unit. The default unit is **Minutes**.
   3. Optional: Under **Email notification (optional)**, use **Send email to** to select the moderators who should receive the alert.
   4. If you selected recipients, use **When** to define how many chats must have active alerts before the email is sent. The default is 5.
8. Click `Save`.

> ℹ️ Only moderators can receive email alerts. Recipients and the number of chats are configured separately for each alert.

The `Save` button remains unavailable until you enter a time limit for every alert you turned on. If you don't select email recipients, chats that exceed the limits are still highlighted on the **Live** dashboard.
