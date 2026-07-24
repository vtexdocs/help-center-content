---
title: "Live Desk - Overview"
createdAt: 2025-09-12T16:29:16.322Z
updatedAt: 2026-07-10T00:00:00.000Z
contentType: tutorial
productTeam: Post-purchase
slugEN: live-desk-overview
locale: en
hidden: false
---

Live Desk is the official human support module of VTEX CX Platform, natively available in all platform projects. With it, representatives handle customer support in real time and in one place: they receive contacts distributed by department and queue, respond through different channels, and track the history of each conversation.

In this article, you will learn about the main concepts and features of the module:

- [User permissions](#user-permissions)
- [Features](#features)
- [History and dashboard](#history-and-dashboard)
- [Configuration and related resources](#configuration-and-related-resources)

## User permissions

User permissions represent assignments for each user in the project. In Live Desk, they indicate the following roles:

- **Representative:** uses the Live Desk module to handle support. Has minimum system permission and can only view the Live Desk module and the dashboard with their individual metrics. The support directed to the representative is defined by the department and queue they're included in.
- **Support manager:** manages the Live Desk support departments. Has permission to view configurations related to the department they manage, view contacts in the queues, and handle support. In the dashboard, they view the metrics for the department they manage.
- **Admin:** has all permission levels, creates departments, and delegates support managers for the departments. In the dashboard, they have an overview of the entire operation.

To learn how to assign these roles, see the article [Managing VTEX CX Platform members](https://help.vtex.com/docs/tutorials/manage-vtex-cx-platform-members).

## Features

### Viewing contact information

When you click the contact's photo or name in any area of the conversation, you access the contact information panel, which displays the enlarged photo, data such as the channel the contact is using, the time of the last message, the transfer chat function, and the contact's media gallery.

### Creating and sending quick replies

Quick replies allow you to register message templates for agile use during support. When you click the quick replies button, you access the feature panel, where you can view, manage, and register messages. When you select the desired message, the registered text fills the text editor field.

You can use quick replies in two ways:

- Open the panel by clicking the quick replies button, then click the desired message.
- When registering the message, define a keyword as a shortcut. To use it, simply type `/` followed by the shortcut.

You can navigate through messages with the keyboard arrows and press `Enter` to use the message. When you type the shortcut text, the tool also performs a specific search.

You can also configure department-specific quick replies. This configuration is done during department creation. For more information, see [Configuring Live Desk](https://help.vtex.com/docs/tutorials/configure-live-desk).

### Transferring chat

The transfer chat function directs the contact to a specific department, queue, or representative and can be accessed in the contact information panel. The transfer can be triggered by the AI agent, when this option is enabled in the configurations, or manually by a manager or admin. In manual transfer, you can search by name of a representative, queue, or department, or select a recipient from the displayed list. When you confirm the transfer, the contact is forwarded to the chosen recipient.

To learn how support is distributed among representatives, see [Attendance distribution rule](https://help.vtex.com/docs/tutorials/attendance-distribution-rule).

### Recording and sending audio

Through the text box buttons, you can record and send audio. Before sending, you can play the audio and then send it to the contact.

### Attaching files

To attach files, drag them to the text box. You can also use the `Ctrl + V` shortcut to paste images directly without manually attaching them.

### Sending emojis

Live Desk offers a complete emoji panel, which helps convey the tone and intent of messages during support.

### Inserting line breaks

To help with the visual organization of the message, you can insert line breaks by pressing `Shift + Enter`.

### Configuring active signature

Active signature adds the representative's name who is responding to each message exchanged. To enable it, follow these steps:

1. Access the organization and project you want to modify in [VTEX CX Platform](https://dash.weni.ai/orgs).
2. In the side menu, click **Settings**.
3. Click **Live Desk**.
4. In the **Sectors** tab, click the actions menu <i class="fas fa-ellipsis-v" aria-hidden="true"></i> of the desired department and then `Edit`.
5. In the **Extra options** tab, enable the **Use signature** option.
6. Click `Save changes`.

> ℹ️ After enabling, the representative's name will appear in the message bubble followed by a colon.

### Editing contact fields

Editing contact fields allows you to correct incorrect data or update customer information during support. To enable this function, follow these steps:

1. Access the organization and project you want to modify in [VTEX CX Platform](https://dash.weni.ai/orgs).
2. In the side menu, click **Settings**.
3. Click **Live Desk**.
4. In the **Sectors** tab, click the actions menu <i class="fas fa-ellipsis-v" aria-hidden="true"></i> of the desired department and then `Edit`.
5. In the **Extra options** tab, enable the **Allow representatives to edit custom contact information** option.
6. Click `Save changes`.

> ℹ️ To edit a field, open the information panel by clicking the contact's name, then click the desired field to enter the new value.

### Receiving browser notifications

Live Desk offers browser notifications as an alternative to audio alerts. To receive them, allow site notifications in your browser settings.

## History and dashboard

### Dashboard and metrics

Human support tracking is done in the **Analytics** module dashboard, divided into two tabs:

- **Monitoring:** real-time data from ongoing support, such as status, average times, volume by queue and tag, and CSAT.
- **Analytics:** historical data from support finalized in the selected period.

You can filter data by department, queue, representative, tag, and period, as well as export them with the `Export data` button.

For the complete description of each metric and section, see the article [Analytics: Support metrics](https://help.vtex.com/docs/tutorials/analytics-support-metrics). To create custom views, see the article [Analytics: Creating custom dashboard](https://help.vtex.com/docs/tutorials/create-analytics-dashboard).

### History view

The Live Desk list is in chronological order, from the most recent support to the oldest. In this list, you can see the contact's photo, name, the representative who handled the support, the tags used in classification, the date, and a button to open the chat.

When viewing the contact's history, you can see the start of the support, the history with the bot, the chat events, and the tags used to classify it.

### View mode

When you click the representative's name in the dashboard, the **representative's support view mode** opens. This way, you can have an overview of the support details by representative, and a manager can take over a chat at any time, transferring the support to themselves.

## Configuration and related resources

To configure and use Live Desk in your operation, see the related articles:

- [Configuring Live Desk](https://help.vtex.com/docs/tutorials/configure-live-desk): create and manage departments, queues, and representatives, and define support rules.
- [Attendance distribution rule](https://help.vtex.com/docs/tutorials/attendance-distribution-rule): understand how support is distributed among representatives.
- [Using active triggering of flows](https://help.vtex.com/docs/tutorials/using-active-triggering-of-flows): start conversations actively with contacts through Live Desk.
- [Using groups to organize human attendance](https://help.vtex.com/docs/tutorials/using-groups-to-organize-human-attendance): prevent the chatbot from interrupting ongoing support.