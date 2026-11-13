---
title: "WhatsApp message card"
id: 4IsU6gP2dUx1F1A5AMKN4D
status: PUBLISHED
createdAt: 2025-09-17T14:17:04.971Z
updatedAt: 2026-11-13T13:42:00.000Z
publishedAt: 2025-10-03T14:20:03.619Z
firstPublishedAt: 2025-10-03T14:20:03.619Z
contentType: tutorial
productTeam: Post-purchase
author: 4JJllZ4I71DHhIOaLOE3nz
slugEN: whatsapp-message-card
legacySlug: whatsapp-message-card
locale: en
subcategoryId: hXGU8pFfABVFIg724zWBN
seeAlso:
  - /en/docs/tutorials/action-cards
---

The WhatsApp message card lets you create WhatsApp-specific interactions in an [automation flow](/en/docs/tutorials/automation-flow-overview). Use it when the flow needs to send a message and give the contact a structured way to respond or continue the conversation. You can send a simple message or configure an interactive message with quick replies, an option list, a location request, or a URL button.

## Before you begin

Before adding the card, consider these requirements:

- The contact must have a WhatsApp URN. A URN identifies the contact on a communication channel.
- For a conversation started by your business, this card does not replace a message template approved by Meta. For more information, see [WhatsApp template messages: Impediments and configurations](/en/docs/tutorials/whatsapp-template-messages-impediments-and-configurations).

## Adding the card to a flow

To add the card to a flow, follow these steps:

1. In your project, go to **Agent Builder > Automation flow**.
2. Open an existing flow or create a new one.
3. Click `Create Block`.
4. Select **WhatsApp Message**.

For a simple message, you can upload media, format text, and insert emojis. For media upload instructions and limits, see [Adding Media to the message](/en/docs/tutorials/adding-media-to-the-message). To add an interactive message, configure one of the options in the following sections.

## Configuring an interactive message

Interactive messages support quick replies, option lists, location requests, and URL buttons.

### Adding quick replies

Quick replies let contacts select one of up to 3 predefined responses. Each response must be unique and can contain up to 20 characters.

To configure quick replies, follow these steps:

1. In **Header**, select **Text** or **Media**.
2. Configure the header according to the option you selected:
    - For **Text**, enter the header text.
    - For **Media**, upload a file from your device or enter its URL. The header supports images, videos, PDF files, and audio.
3. Enter the quick reply responses.
4. (Optional) Enter a footer message.
5. Click `Confirm`.

### Adding an option list

An option list can contain up to 10 options. Each option has a title and can include a description. Unlike quick replies, an option list does not support media in its header.

To configure an option list, follow these steps:

1. In **Interactions**, select **Option List**.
2. Complete the **Header**, **Body**, and **Footer** fields.
3. Add the options and complete the following fields for each one:
    - **Title:** Enter a short name that identifies the option.
    - **Description (optional):** Enter details that help the contact understand the option.
4. (Optional) In **Action Button**, enter the text displayed on the button that opens the list.
5. Click `Confirm`.

### Requesting the contact's location

To request the contact's location, follow these steps:

1. In **Interactions**, select **Request Location**.
2. In the message field, enter the text the contact receives with the request.

### Adding a URL button

A URL button directs the contact to a link. The message can also include custom text in its header and footer.

To add a URL button, follow these steps:

1. In **Interactions**, add a **URL Button**.
2. Enter the destination URL.
3. (Optional) Add a variable to the URL.
4. (Optional) Enter text for the header and footer.
