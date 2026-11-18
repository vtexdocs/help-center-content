---
title: "Analytics: Configuring operational alerts"
createdAt: 2026-11-10T17:36:00.000Z
updatedAt: 2026-11-12T23:30:00.000Z
contentType: tutorial
productTeam: VTEX CX Platform
slugEN: configuring-operational-alerts
locale: en
---

**Operational alerts** help you identify support chats that exceed the time limits defined for your operation. Project moderators can configure alerts for wait time, time to first response, and handle time on the **Live** tab of the **Live Desk** dashboard.

This guide explains each alert and how to configure its time limit, notification threshold, and email recipients.

## Alert types

Each alert is optional and works independently. The corresponding time cards on the **Live** tab display the current average and the maximum value recorded for active support chats. When a chat exceeds a configured limit, the dashboard highlights it in the detailed monitoring table.

| Alert | Acronym | Description |
| --- | --- | --- |
| **Average Wait time** | AVG | Time a contact spends in the queue before a support chat starts. |
| **Average First Response Time** | AVFTR | Time between the start of a support chat and the representative's first message. |
| **Average Support Time** | ASV | Total duration of a support chat, from start to finish. |

> ℹ️ The first-response alert remains active until the representative sends the first message.

When the number of chats with an active alert reaches the threshold configured for that alert, Analytics displays a notification. If you select email recipients, they also receive the notification by email.

For more information about the **Live** tab and its metrics, see [Analytics: Support metrics](https://help.vtex.com/en/docs/tutorials/analytics-support-metrics).

## Configuring the alerts

Email recipients and the notification threshold are configured separately for each alert.

1. Access the organization and project you want to configure in [VTEX CX Platform](https://dash.weni.ai/orgs).
2. Open **Analytics**.
3. In the **Live Desk** dashboard, open the **Live** tab.
4. Next to `Export data`, click the <i class="fas fa-ellipsis-v" aria-hidden="true"></i> more options button.
5. Click `Operational alerts`.
6. Turn on one or more of the following alerts:
    - **Waiting time:** Alert on the Live Desk dashboard when a chat's wait time exceeds the defined limit
    - **First response time:** Alert on the Live Desk dashboard when a chat's 1st response time exceeds the defined limit
    - **Handle time:** Alert on the Live Desk dashboard when a chat's handle time exceeds the defined threshold
7. For each alert you turn on:
    1. Enter the limit in **Maximum wait time**, **Maximum time to 1st response**, or **Maximum handle time**.
    2. In **Unit**, select **Seconds**, **Minutes**, or **Hours**. The default unit is **Minutes**.
    3. Under **Email notification (optional)**, use **Send email to** to select the moderators and managers who should receive the alert by email.
    4. In **When**, enter the number of chats that must have an active alert before the notification is sent. The default is `5`.
8. Click `Save`.

The `Save` button remains unavailable until you enter a time limit for every alert you turned on. If you don't select email recipients, chats that exceed the limits are still highlighted on the **Live** tab, and Analytics still displays its notification when the configured threshold is reached.
