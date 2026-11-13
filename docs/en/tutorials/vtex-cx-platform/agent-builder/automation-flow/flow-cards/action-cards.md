---
title: "Action cards"
id: 5TQ44l4pp84PPWdnWdg3JN
status: PUBLISHED
createdAt: 2025-09-16T16:43:29.253Z
updatedAt: 2026-11-13T14:00:00.000Z
publishedAt: 2025-10-03T14:20:03.887Z
firstPublishedAt: 2025-10-03T14:20:03.887Z
contentType: tutorial
productTeam: Post-purchase
author: 4JJllZ4I71DHhIOaLOE3nz
slugEN: action-cards
legacySlug: action-cards
locale: en
subcategoryId: hXGU8pFfABVFIg724zWBN
---

An action card runs one command in an [automation flow](https://help.vtex.com/en/docs/tutorials/automation-flow-overview), such as sending a message, updating a contact, or opening a ticket. Use the list below to open the description of a card while you build a flow.

- [Send the contact a message](#send-the-contact-a-message)
- [Send somebody else a message](#send-somebody-else-a-message)
- [Label the incoming message](#label-the-incoming-message)
- [Add a URN for the contact](#add-a-urn-for-the-contact)
- [Add the contact to a group](#add-the-contact-to-a-group)
- [Remove the contact from a group](#remove-the-contact-from-a-group)
- [Update the contact](#update-the-contact)
- [Send an email](#send-an-email)
- [Save a result for this flow](#save-a-result-for-this-flow)
- [Enter another flow](#enter-another-flow)
- [Start somebody else in a flow](#start-somebody-else-in-a-flow)
- [Send a WhatsApp message](#send-a-whatsapp-message)
- [Open a ticket with a human agent](#open-a-ticket-with-a-human-agent)
- [Call a webhook](#call-a-webhook)

## Send the contact a message

This card sends a message to the contact in the current conversation. The contact receives the message on the channel they're using. Write the message in the text box.

### Facebook

A mass message on a Facebook channel needs a topic when the contact hasn't sent a message in the last 24 hours. Set a topic for the first message in the flow.

### WhatsApp

A message on a WhatsApp channel needs a template when you haven't received a message from the contact in the last 24 hours. Set a template for the first message in the flow. For more information, see [Active message dispatch on WhatsApp](https://help.vtex.com/en/docs/tutorials/active-message-dispatch-on-whatsapp).

### Quick replies

Quick replies are text buttons that guide the next step in the conversation. You can add up to 10 text buttons on this card.

> ⚠️ Text buttons are available on Telegram, the Web channel, Facebook Messenger, and WhatsApp.

### Attachments

You can send up to 3 attachments on this card: photos, videos, audio, or documents. Enter the media link, or select the file on your computer. For upload steps and file size limits, see [Adding Media to the message](https://help.vtex.com/en/docs/tutorials/adding-media-to-the-message).

> ⚠️ Confirm that the contact's channel supports the media before you send it.

### All destinations

In **Advanced**, you can send the message to every channel linked to the contact, not only the preferred channel. The channel the contact uses to reply becomes the preferred channel, and the flow continues on that channel.

For example, if the preferred channel is WhatsApp and you send the message to all destinations, the contact receives it on every linked channel. If the contact replies by SMS, SMS becomes the preferred channel.

> ⚠️ Send the message to all destinations only when the contact should receive it on every linked channel. Otherwise, leave the option cleared.

## Send somebody else a message

This card sends a message to a contact or group other than the one running the flow. The recipient sees the message. The card doesn't change a flow or conversation already running for that recipient.

Use it when you or a group need a notification that a contact reached a specific point in a flow.

## Label the incoming message

This card applies a label to the last message the contact sent. Labeled messages are collected in a message group with the same name as the label.

For example, label a message when the contact shows interest in a product.

## Add a URN for the contact

This card adds a URN to the contact. A URN identifies the contact on a channel, such as a phone number or a WhatsApp number. Select the URN type, such as phone number, WhatsApp, SMS, or Telegram, and enter a fixed value or a flow variable.

> ⚠️ Include the country code when you add or change a phone number or WhatsApp number.

If the contact started the conversation on your website, ask for a WhatsApp number, add it as a URN, and continue the conversation on WhatsApp.

## Add the contact to a group

This card adds the contact to a [static group](https://help.vtex.com/en/docs/tutorials/static-groups). If the group doesn't exist on the Contacts page, type the group name in the selection field to create it.

For example, after a contact completes a satisfaction survey, add them to a group with the other contacts who answered it.

## Remove the contact from a group

This card removes the contact from a [static group](https://help.vtex.com/en/docs/tutorials/static-groups). You can remove the contact from one group, or from every group they belong to.

For example, when a contact is no longer a customer, remove them from that group so actions limited to the group no longer include them.

## Update the contact

This card updates a [contact field](https://help.vtex.com/en/docs/tutorials/contact-fields). Select the field, then enter a fixed value or a flow result. If the field doesn't exist yet, enter a name to create it.

For example, when you ask for the contact's age, save the answer in a contact field so a later flow can use it.

## Send an email

This card sends an email to the contact running the flow or to another recipient. Enter the recipient, the subject, and the message body.

Email isn't a conversation channel on the VTEX CX Platform. If the recipient replies, the reply goes to the inbox of the email address configured for the organization.

Use this card to send a reminder by email instead of by SMS or phone call.

## Save a result for this flow

This card creates a [flow result](https://help.vtex.com/en/docs/tutorials/decision-cards#flow-results) without waiting for an input or a decision card. Enter the result name and value. You can also enter a category, or update the value of a result that already exists.

For example, save how many questions a contact has asked without storing that count in a contact field.

## Enter another flow

This card starts another flow for the contact in the current conversation. The current flow, the parent flow, waits while the contact runs the new flow, the child flow. When the child flow ends, the contact returns to the same point in the parent flow. Select the flow from the list.

This is the only action card that creates [routes](https://help.vtex.com/en/docs/tutorials/decision-cards). The route depends on how the child flow ends:

- **Complete:** The child flow finished.
- **Expired:** The child flow expired.

## Start somebody else in a flow

This card starts a flow for a contact or group that isn't running the current flow. The current flow doesn't wait for that flow to finish, and this card doesn't create routes.

Choose who enters the flow:

- Select the contacts or groups.
- Create a rule, usually based on contact fields, that filters which contacts enter.
- Create a new contact and start that contact in the flow.

After you choose who enters, select the flow to start.

For example, use this card to notify a group when a new member joins.

## Send a WhatsApp message

This card sends an interactive message on WhatsApp. It doesn't replace a template approved by Meta when your business starts the conversation. To configure the card, see [WhatsApp message card](https://help.vtex.com/en/docs/tutorials/whatsapp-message-card).

The card offers these interactive messages:

- **Quick replies:** Up to 3 predefined responses the contact can select.
- **Option list:** A menu of up to 10 items. Each item has a title and a description.
- **Request location:** A request for the contact's location.

Depending on the message type, you can also add a header, with media or text, and a footer.

## Open a ticket with a human agent

This card opens a ticket so a human agent can continue the conversation in Live Desk. Select the department and the queue that receive the ticket. To set up departments and queues, see [Configuring Live Desk](https://help.vtex.com/en/docs/tutorials/configure-live-desk).

## Call a webhook

This card sends an API request and stores the response in a variable you can use later in the flow. Use it to connect the flow to an external system. For more information, see [Call webhook: Making requests to external services](https://help.vtex.com/en/docs/tutorials/call-webhook-making-requests-to-external-services).
