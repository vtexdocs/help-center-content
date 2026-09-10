---
title: 'VTEX CX Platform: WhatsApp automation execution logs'
slug: '2026-09-15-vtex-cx-platform-whatsapp-automation-execution-logs'
createdAt: 2026-09-15T00:00:00.000Z
updatedAt: 2026-09-15T00:00:00.000Z
contentType: updates
productTeam: VTEX CX Platform
slugEN: '2026-09-15-vtex-cx-platform-whatsapp-automation-execution-logs'
locale: en
announcementSynopsisEN: 'The new Logs tab in WhatsApp automations records every send with template, contact, order, and status, and allows you to filter, view error JSON, and export data.'
tags:
  - New feature
  - Storefront
  - VTEX CX Platform
---

You can now track WhatsApp automation execution for your store directly in the VTEX Admin, in the new **Logs** tab of VTEX CX Platform automations. Every send attempt is logged with template, date, contact, order, amount, and status, allowing you to confirm if a message was sent and understand why it was ignored or failed.

## What has changed?

Previously, to find out if a WhatsApp automation had sent a message or why it had not been sent, you had to contact support.

Now, WhatsApp automations such as **WhatsApp Cart Recovery**, **WhatsApp Order Notifications**, and **WhatsApp Payment Recovery** have the **Logs** tab, which displays all executions in the interface. In each record, you'll find:

- **Template:** message template used in the send, such as `Abandoned Cart`.
- **Contact:** customer's WhatsApp number.
- **OrderForm ID:** order or cart ID.
- **Amount:** order or cart associated with the send.
- **Status:** execution result, which can be `Sent`, `Delivered`, `Read`, `Processing`, `Ignored`, or `Error`.
- **Date:** execution date and time.

You can search for contacts or order IDs and filter records by period, template, and status. When you expand a record, you see a result summary and the `View JSON` button, which displays the complete execution crawling.

## Why did we make this change?

We developed the **Logs** tab so you can access information about automations without depending on support. This feature is available to all VTEX CX Platform users in the VTEX Admin. Its key benefits are:

- **Complete visibility:** all executions are recorded in a single list, with the main data for each send.
- **Independent diagnostics:** the search, filters, and JSON details allow you to quickly identify the cause of a failure or ignored send.
- **Email export:** you can export logs and receive them via email for analysis or sharing.

## What needs to be done?

No action is required to view WhatsApp logs in VTEX CX Platform. The update is already available in the VTEX Admin for all stores. To view logs, go to **Storefront > VTEX CX Platform > Dashboard**, click `Settings`, open a WhatsApp automation, and select the **Logs** tab.

To learn more about VTEX CX Platform, see [Introduction to CX](https://help.vtex.com/en/docs/tutorials/introducao-ao-cx).