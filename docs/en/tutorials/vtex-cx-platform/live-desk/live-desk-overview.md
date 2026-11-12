---
title: "Live Desk"
createdAt: 2025-09-12T16:29:16.322Z
updatedAt: 2026-11-12T18:30:00.000Z
contentType: tutorial
productTeam: Post-purchase
slugEN: live-desk-overview
locale: en
hidden: false
seeAlso:
  - /en/docs/tutorials/configure-live-desk
  - /en/docs/tutorials/attendance-distribution-rule
  - /en/docs/tutorials/using-active-triggering-of-flows
  - /en/docs/tutorials/using-groups-to-organize-human-attendance
---

Live Desk is the human support module of VTEX CX Platform, available in every project. Representatives use it to handle support in real time and in one place: they receive contacts by department and queue, reply on the contact's channel, and review each conversation.

This article covers:

- [Roles and permissions in Live Desk](#roles-and-permissions-in-live-desk)
- [Managing conversations](#managing-conversations)
- [Composing messages](#composing-messages)
- [Reviewing support history and metrics](#reviewing-support-history-and-metrics)
- [Setting personal preferences](#setting-personal-preferences)

## Roles and permissions in Live Desk

Your project role determines which parts of Live Desk you can use. Two roles apply directly to human support:

- **Moderator:** Has full administrative access to the project and can configure Live Desk.
- **Human support:** Handles support chats for the departments and queues they're assigned to.

To assign these roles, see [Managing VTEX CX Platform members](https://help.vtex.com/en/docs/tutorials/managing-vtex-cx-platform-members). For the other project roles, such as Contributor, Viewer, and Marketing, see [VTEX CX Platform: Overview](https://help.vtex.com/en/docs/tutorials/vtex-cx-platform-overview#project-permissions).

## Managing conversations

### Identifying pending conversations

The conversation list shows who sent the last message in each room, so you can see which rooms are waiting for a reply.

- A number shows how many messages from the contact are unread.
- A blue arrow shows that the contact's last message has been read and still needs a reply.
- A `You:` prefix shows that you sent the last message. It applies to text and media messages.
- A blue dot shows that a room requires attention after it's transferred, returned to a queue, picked up from the queue, or assigned automatically. The dot appears regardless of who sent the last message.

When a previous representative sent the last message in a transferred room, the preview doesn't start with `You:`. When you open a representative's conversations from the dashboard, a room waiting for a reply shows the blue arrow, and the preview doesn't include the `You:` prefix.

### Filtering rooms by queue

In the **Waiting rooms** view, filter the list by queue to see only the rooms in the queues you select. You can select one or more queues. Clear the filter to return to the full list.

The queues available in the filter depend on your role:

- Moderators can see and filter by every queue in the project.
- Users with the **Human support** role can see and filter only by the queues they're assigned to.

Each queue shows the number of rooms in it and the department it belongs to.

The filter applies to rooms awaiting support. Moderators can also use it for rooms in progress.

> ℹ️ The filter keeps the current room distribution and the existing room order. To learn how support is distributed among representatives, see [Attendance distribution rule](https://help.vtex.com/en/docs/tutorials/attendance-distribution-rule).

### Viewing contact information

To view details about the customer you're assisting, click the contact's photo or name in the conversation. The contact information panel includes:

- An enlarged contact photo
- The channel the contact is using, such as WhatsApp or Email
- The time of the last message
- The option to transfer the conversation
- The contact's media gallery

### Editing custom contact fields

Representatives can edit a contact's custom fields during support when the department allows it. To enable this option, see [Configuring Live Desk](https://help.vtex.com/en/docs/tutorials/configure-live-desk).

To edit a field, follow these steps:

1. In the conversation, click the contact's name to open the information panel.
2. Click the field you want to change.
3. Enter the new value.

### Downloading audio from the contact

You can play an audio message from the contact in the conversation and download the original file. Download the audio when you need to share it with another team, such as logistics or operations, while you escalate a case internally.

### Transferring a conversation

From the contact information panel, you can transfer an ongoing conversation to a department, a queue, or a representative. Transfers can happen in two ways:

- **Automatic transfer:** The AI agent transfers the conversation when **Allow AI agents to transfer conversations to human support** is enabled. It chooses the queue from the descriptions set in [Configuring Live Desk](https://help.vtex.com/en/docs/tutorials/configure-live-desk).
- **Manual transfer:** A manager or admin transfers the conversation. Search by the name of a representative, queue, or department, or select a recipient from the list.

After you confirm, the conversation goes to the chosen recipient. To see how a transferred room appears in the conversation list, see [Identifying pending conversations](#identifying-pending-conversations).

Each representative in the transfer list shows a status: **Online**, **Paused** (with the custom break name), or **Offline**. The list shows representatives in that order and sorts names alphabetically within each status. Custom breaks and the **Block chat transfers to offline representatives** option are set in [Configuring Live Desk](https://help.vtex.com/en/docs/tutorials/configure-live-desk).

## Composing messages

The message composer has a fixed action bar under the message field. From this bar, you can open quick messages, attach files, add an internal note, insert emojis, or record audio.

### Copying and clearing the message

When you start typing in the message field, two actions become available:

- `Copy text`: Copies the entire content of the message field.
- `Clear text`: Empties the message field.

### Adding emojis, audio, and files

Use the buttons under the message field to add content to a message:

- **Emojis:** Click the emoji button to open the emoji panel and add an emoji to the message.
- **Audio:** Click the audio button to record a message and play it back before you send it to the contact.
- **Files:** Click the attachment button to attach a file.

To attach files faster, you can also drag a file onto the message field, or press `Ctrl + V` to paste an image.

To add a line break in the message field, press `Shift + Enter`.

### Using quick messages

Quick messages are preconfigured text templates. Representatives use them to send standard responses faster during support.

The message field shows `Type your message or / to activate quick messages`. Under the field, click the quick messages button to open the panel, where you can view, manage, and register messages. When you select a message, its text fills the field.

You can insert a quick message in two ways:

- **Using the panel:** Click the quick messages button, then click the message you want.
- **Using a shortcut:** Type `/` followed by the shortcut assigned to the message.

In the list, you can move between messages with the arrow keys and press `Enter` to insert the selected message. You can also set up department-specific quick messages while you create the department. For more information, see [Configuring Live Desk](https://help.vtex.com/en/docs/tutorials/configure-live-desk).

To send a saved quick message to multiple conversations, open the message's actions menu and click `Send in bulk`. The review checklist shows contacts currently in service and selects all of them by default. Clear the checkbox for any contact you don't want to include, then confirm the send. A progress bar shows the sending status in real time. When the process finishes, a confirmation notification shows how many messages were sent.

### Improving a response with AI

`Improve response with AI` reviews a message before you send it to the contact. You write the response in the message field, and the AI fixes errors, adjusts the tone, or rewrites the text while keeping the original meaning.

> ℹ️ The <i class="fas fa-magic" aria-hidden="true"></i> `Improve response with AI` button is available only when the message field has text.

To improve a response, follow these steps:

1. In the message field, write the message you want to send.
2. Click <i class="fas fa-magic" aria-hidden="true"></i> `Improve response with AI`.
3. Select an improvement option:
    - **Fix grammar and spelling:** Corrects spelling, grammar, and typing errors.
    - **Make more empathetic:** Rewrites the message in a warmer, more welcoming tone.
    - **Rewrite for clarity:** Reorganizes the text to make explanations clearer and more objective.
4. Wait until `Improving your response` disappears.

    > ℹ️ To cancel while `Improving your response` is displayed, click <i class="fas fa-times" aria-hidden="true"></i> `Improved response`.

5. Review the new message. You can edit the text, or click `Original` to restore your draft.
6. Click `Submit`.

    > ℹ️ The AI doesn't send the message on its own. The conversation updates only after you click `Submit`.

### Adding an internal note

An internal note keeps context in the conversation for other representatives, such as screenshots and a longer explanation. They can read it when they take over the conversation or review it later. The contact doesn't receive it.

In the conversation, the note appears on a yellow background and starts with `Internal note:`, followed by the text. Attached media appears as thumbnails under the text.

Under the message field, click the internal note button, write the note, and send it. You can use more than one paragraph and attach up to 10 media files.

### Adding a representative signature

When **Use signature** is enabled for the department, the representative's name appears in each message bubble, followed by a colon. To enable it, see [Configuring Live Desk](https://help.vtex.com/en/docs/tutorials/configure-live-desk).

## Reviewing support history and metrics

### Tracking support metrics

Human support is tracked on the **Live Desk** dashboard in the **Analytics** module. The dashboard has two tabs:

- **Monitoring:** Shows real-time data for ongoing support chats, such as status, average times, volume by queue, tag, and channel, and customer satisfaction (CSAT). Project moderators can set time goals so the dashboard highlights chats that exceed them. See [Analytics: Configuring risk alerts](https://help.vtex.com/en/docs/tutorials/configuring-risk-alerts).
- **Analysis:** Shows historical data for support chats closed in the selected period.

You can filter the data by department, queue, representative, tag, channel, and period. To download the data displayed on the dashboard, click `Export data`.

For each metric and section, see [Analytics: Support metrics](https://help.vtex.com/en/docs/tutorials/analytics-support-metrics). To create a custom dashboard, see [Analytics: Create custom dashboard](https://help.vtex.com/en/docs/tutorials/create-analytics-dashboard).

### Viewing support history

The Live Desk list is in chronological order, from the most recent support to the oldest. In this list, you can see the contact's photo, name, the representative who handled the support, the tags used in classification, the date, and a button to open the chat.

When you open the contact's history, you can see the start of the support, the history with the bot, the chat events, and the tags. For a closed support chat with a native CSAT response, the history also shows the CSAT score and, when the customer left one, their comment.

To download a closed conversation, see [Exporting a closed conversation](#exporting-a-closed-conversation).

### Viewing webchat history across sessions

Shopping Assistant creates a different Uniform Resource Name (URN) for each webchat session. When you open the contact's history, webchat conversations from the same contact are grouped together if the room was opened with `email`, `document`, or both.

### Viewing a representative's conversations

Click a representative's name in the dashboard to open the **representative's support view mode**. This view gives you an overview of the support details for each representative. A manager can take over a chat at any time by transferring it to themselves. To see how a room waiting for a reply appears in this view, see [Identifying pending conversations](#identifying-pending-conversations).

### Exporting a closed conversation

Only project moderators can export a closed conversation. You can export it for up to one year after the conversation is closed. Active conversations can't be exported.

> ⚠️ While an export is being processed, new exports are temporarily blocked for this conversation.

The file is a conversation report that includes:

- The message transcription
- Chat events
- Support details: **Started**, **Ended**, **Representative**, **Contact**, **URN**, **Ticket ID**, **Tags**, and **CSAT**

To export a closed conversation, follow these steps:

1. In the history list, open a closed conversation.
2. Click `Export conversation`.
3. Select **PDF** or **HTML**. **PDF** is selected by default.
4. Select **I accept the terms and understand the export limitations**.
5. Click `Export conversation`.
6. Open the email from `no-reply@weni.ai`.
7. Click `Download report`.

## Setting personal preferences

These settings change how Live Desk looks and how it alerts you. They don't change departments, queues, or conversations.

### Receiving browser notifications

Live Desk offers browser notifications as an alternative to audio alerts. To receive them, allow site notifications in your browser settings.

### Choosing light or dark mode

Live Desk offers **Light Mode** and **Dark Mode**. Light Mode is the default. Dark Mode applies a dark theme to Live Desk and the side menu.

To change the theme, open **Preferences** and select **Light Mode** or **Dark Mode**. The selection is saved automatically and applied every time you log in.
