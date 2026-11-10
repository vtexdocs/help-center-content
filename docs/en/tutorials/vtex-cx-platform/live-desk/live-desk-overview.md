---
title: "Live Desk - Overview"
createdAt: 2025-09-12T16:29:16.322Z
updatedAt: 2026-11-10T20:00:00.000Z
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

- **Moderator:** administers the project and can manage members, permissions, and settings. They can also change content, flows, and other resources available in the project.
- **Contributor:** creates and edits project content, such as flows, instructions, and message templates, but can't manage members, permissions, or administrative settings.
- **Viewer:** accesses project information in read-only mode, including flows, contacts, and messages, without permission to edit content or settings.
- **Marketing:** accesses the Campaigns and Studio modules to configure, manage, and monitor campaign sends using message templates.
- **Human support:** accesses the human support module to handle support in Live Desk, according to the departments and queues they're assigned to.

To learn how to assign these roles, see the article [Managing VTEX CX Platform members](https://help.vtex.com/en/docs/tutorials/managing-vtex-cx-platform-members).

## Features

### Identifying pending conversations

The conversation list shows who sent the last message in each room, so you can see which rooms are waiting for a reply.

- A number shows how many messages from the contact are unread.
- A blue arrow shows that the contact's last message has been read and still needs a reply.
- When you sent the last message, the preview starts with `You:`. This applies to text and media messages.
- A blue dot shows that the room was transferred, returned to a queue, picked up from the queue, or assigned automatically. The dot appears regardless of who sent the last message. When a previous representative sent that message, the preview doesn't start with `You:`.

In the **representative's support view mode**, a room waiting for a reply shows the blue arrow. The preview doesn't include the `You:` prefix.

### Filtering rooms by queue

In the **Waiting rooms** view, filter the list by queue to see only the rooms in the queues you select. You can select one or more queues. Clear the filter to return to the full list.

The queues available in the filter depend on your role:

- Moderators can see and filter by every queue in the project.
- Users with the **Human support** role can see and filter only by the queues they're assigned to.

Each queue shows the number of rooms in it and the sector it belongs to.

The filter applies to rooms awaiting support. Moderators can also use it for rooms in progress.

> ℹ️ The filter keeps the current room distribution and the existing room order. To learn how support is distributed among representatives, see [Attendance distribution rule](https://help.vtex.com/en/docs/tutorials/attendance-distribution-rule).

### Viewing contact information

When you click the contact's photo or name in any area of the conversation, you access the contact information panel, which displays the enlarged photo, data such as the channel the contact is using, the time of the last message, the transfer chat function, and the contact's media gallery.

### Transferring chat

The transfer chat function directs the contact to a specific department, queue, or representative and can be accessed in the contact information panel. The transfer can be triggered by the AI agent, when this option is enabled in the configurations, or manually by a manager or admin. When the AI agent transfers the conversation, it chooses the queue from the descriptions set in [Configuring Live Desk](https://help.vtex.com/en/docs/tutorials/configure-live-desk). In manual transfer, you can search by name of a representative, queue, or department, or select a recipient from the displayed list. When you confirm the transfer, the contact is forwarded to the chosen recipient. To see how a transferred room appears in the conversation list, see [Identifying pending conversations](#identifying-pending-conversations).

Each representative in the list shows a current status: **Online**, **Paused** (with the name of the custom break), or **Offline**. Representatives appear in this order: Online, then Paused, then Offline. Within each status, names are listed alphabetically. Custom breaks and the option **Block chat transfers to offline representatives** are configured in [Configuring Live Desk](https://help.vtex.com/en/docs/tutorials/configure-live-desk).

To learn how support is distributed among representatives, see [Attendance distribution rule](https://help.vtex.com/en/docs/tutorials/attendance-distribution-rule).

### Creating and sending quick messages

Quick messages are templates you can register and reuse during support. The message field shows `Type your message or / to activate quick messages`. Under the field, click the quick messages button to open the panel, where you can view, manage, and register messages. When you select a message, the text fills the field.

You can use quick messages in two ways:

- Open the panel by clicking the quick messages button, then click the desired message.
- When registering the message, define a keyword as a shortcut. To use it, type `/` followed by the shortcut.

You can navigate through messages with the keyboard arrows and press `Enter` to use the message. When you type the shortcut text, the tool also performs a specific search.

You can also configure department-specific quick messages. This configuration is done during department creation. For more information, see [Configuring Live Desk](https://help.vtex.com/en/docs/tutorials/configure-live-desk).

### Sending emojis

Click the emoji button under the message field to open the emoji panel and add an emoji to the message.

### Recording and sending audio

Under the message field, click the audio button to record and send audio. Before sending, you can play the audio and then send it to the contact.

### Attaching files

To attach a file, click the attachment button under the message field. You can also drag the file onto the text box, or press `Ctrl + V` to paste an image.

### Adding an internal note

An internal note keeps context in the conversation for other representatives, such as screenshots and a longer explanation, so they can read it when they pick up the conversation or review it later. The contact doesn't receive it.

In the conversation, the note appears on a yellow background. It starts with **Internal note:**, followed by the text. Attached media appears as thumbnails under the text.

Under the message field, click the internal note button, write the note, and send it. You can use more than one paragraph and attach up to 10 media files.

### Improve response with AI

The **Improve response with AI** feature lets you review a message with the help of artificial intelligence before sending it to the contact. You write the response as usual in the text field and trigger the AI to fix errors, adjust the tone, or rewrite the text more clearly, while keeping the original meaning of the message.

> ℹ️ The <i class="fas fa-magic" aria-hidden="true"></i> **Improve response with AI** button is only enabled when there's text typed in.

To improve a response, follow these steps:

1. In the conversation's text field, write the message you want to send.
2. Click <i class="fas fa-magic" aria-hidden="true"></i>`Improve response with AI`.
3. Select the desired improvement option:
  - `Fix grammar and spelling`: Fixes only typing, spelling, and grammar errors.
  - `Make more empathetic`: Rewrites the message with a kinder, more welcoming tone.
  - `Rewrite for clarity`: Reorganizes the text to make it clearer and more objective, with more complete explanations.
4. Wait for the processing to finish.

> ℹ️ While the **Improving your response** message is displayed, you can click <i class="fas fa-times" aria-hidden="true"></i>`Improved response` to cancel the action.

5. Review the new version of the message. If you prefer, edit the text or click `Original` to go back to the original message.
6. Click `Submit`.

> ℹ️ The AI doesn't send any message automatically to the contact. The conversation is only updated when you click `Submit`.

### Inserting line breaks

To help with the visual organization of the message, you can insert line breaks by pressing `Shift + Enter`.

### Copying and clearing the message

As soon as you start typing in the conversation's text field, two actions become available:

- `Copy text`: Copies the entire content of the message field.
- `Clear text`: Empties the message field.

### Downloading audio from the contact

You can play an audio message sent by the contact inside the conversation and download the original file. Download the audio when you need to share it with another team, such as logistics, operations, or another support area, while escalating a case internally.

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

### Choosing the interface theme

Live Desk offers **Light Mode** and **Dark Mode**. Light Mode is the default. Dark Mode applies a dark theme to Live Desk and the side menu.

To change the theme, open **Preferences** and select **Light Mode** or **Dark Mode**. The selection is saved automatically and applied every time you log in.

## History and dashboard

### Dashboard and metrics

Human support tracking is done in the **Analytics** module dashboard, divided into two tabs:

- **Monitoring:** real-time data from ongoing support, such as status, average times, volume by queue, tag, and channel, and CSAT. Project moderators can set time goals so the dashboard highlights support chats that exceed them. See [Configuring risk alerts](https://help.vtex.com/en/docs/tutorials/configuring-risk-alerts).
- **Analytics:** historical data from support finalized in the selected period.

You can filter data by department, queue, representative, tag, channel, and period, as well as export them with the `Export data` button.

For the complete description of each metric and section, see the article [Analytics: Support metrics](https://help.vtex.com/en/docs/tutorials/analytics-support-metrics). To create custom views, see the article [Analytics: Creating custom dashboard](https://help.vtex.com/en/docs/tutorials/create-analytics-dashboard).

### History view

The Live Desk list is in chronological order, from the most recent support to the oldest. In this list, you can see the contact's photo, name, the representative who handled the support, the tags used in classification, the date, and a button to open the chat.

When viewing the contact's history, you can see the start of the support, the history with the bot, the chat events, and the tags used to classify it. For a closed support chat with a native CSAT response, the history also shows the CSAT score and, when the customer left one, their comment.

To download a closed conversation, see [Exporting a closed conversation](#exporting-a-closed-conversation).

### Viewing webchat history across sessions

Shopping Assistant generates a different URN for each webchat session. When you open the contact's history, webchat conversations from the same contact are grouped together if the room was opened with `email`, `document`, or both.

### Viewing a representative's support

When you click the representative's name in the dashboard, the **representative's support view mode** opens. This way, you can have an overview of the support details by representative, and a manager can take over a chat at any time, transferring the support to themselves. To see how pending rooms appear in this view, see [Identifying pending conversations](#identifying-pending-conversations).

### Exporting a closed conversation

Only project moderators can export a closed conversation. You can export it for up to one year after the conversation is closed. Active conversations can't be exported.

The file is a conversation report. It includes the message transcription, chat events, and support details such as **Started**, **Ended**, **Representative**, **Contact**, **URN**, **Ticket ID**, **Tags**, and **CSAT**.

To export a closed conversation, follow these steps:

1. Open a closed conversation from the history list.
2. Click `Export conversation`.
3. Select **PDF** or **HTML**. **PDF** is selected by default.
4. Select `I accept the terms and understand the export limitations.`
5. Click `Export conversation`.
6. Open the email from `no-reply@weni.ai`.
7. Click `Download report`.

> ⚠️ While this export is being processed, new exports are temporarily blocked for this conversation.

## Configuration and related resources

To configure and use Live Desk in your operation, see the related articles:

- [Configuring Live Desk](https://help.vtex.com/en/docs/tutorials/configure-live-desk): create and manage departments, queues, and representatives, and define support rules.
- [Attendance distribution rule](https://help.vtex.com/en/docs/tutorials/attendance-distribution-rule): understand how support is distributed among representatives.
- [Using active triggering of flows](https://help.vtex.com/en/docs/tutorials/using-active-triggering-of-flows): start conversations actively with contacts through Live Desk.
- [Using groups to organize human attendance](https://help.vtex.com/en/docs/tutorials/using-groups-to-organize-human-attendance): prevent the chatbot from interrupting ongoing support.
