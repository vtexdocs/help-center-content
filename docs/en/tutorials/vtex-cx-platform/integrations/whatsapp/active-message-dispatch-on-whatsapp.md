---
title: "Active message dispatch on WhatsApp"
id: 20E0eUtogj84N0vf6nZeia
status: PUBLISHED
createdAt: 2025-09-15T15:27:41.354Z
updatedAt: 2026-11-13T18:56:00.000Z
publishedAt: 2025-10-03T14:20:32.448Z
firstPublishedAt: 2025-10-03T14:20:32.448Z
contentType: tutorial
productTeam: Post-purchase
author: 4JJllZ4I71DHhIOaLOE3nz
slugEN: active-message-dispatch-on-whatsapp
legacySlug: active-message-dispatch-on-whatsapp
locale: en
subcategoryId: 7e9LaCixVcvflzgWkxlftd
---

Active dispatch is when you start a conversation with a contact, for example to send a notification, a confirmation, or a follow-up. This is different from passive dispatch, which starts when the contact messages you first.

On WhatsApp, active dispatch requires a template message. Meta must approve each template message before you can send it. The VTEX CX Platform uses the same active dispatch process for all channels, but only WhatsApp requires a template message. On other channels, you don't need one, and you can send more than one message.

## Before you begin

Before you start, make sure that:

- Your WhatsApp channel is connected. For more information, see [WhatsApp: Integration with VTEX CX Platform](https://help.vtex.com/en/docs/tutorials/whatsapp-vtex-cx-platform-integration).
- The template message you want to send is approved by Meta. To create one, see [WhatsApp: How to create template messages](https://help.vtex.com/en/docs/tutorials/whatsapp-how-to-create-template-messages).
- Your role allows you to create flows. Only users with admin, moderator, or collaborator permissions can create flows.

## Building a flow that starts with a template message

> ⚠️ On WhatsApp, the first message of the flow must be a template message. Other message types can't reach a contact who hasn't messaged you in the last 24 hours.

To build the flow, follow these steps:

1. Add an **Update Contact** card to the flow.
2. In the **Channel** option, select your WhatsApp channel. This sets the channel that the dispatch is sent from.
3. Add a **Send Message** card after the **Update Contact** card.
4. In the text box of the **Send Message** card, enter `@(“”)`.

    This expression doesn't affect the message. The template message is selected in the **WhatsApp** tab of the same card.

5. In the **Send Message** card, click the **WhatsApp** tab. Select the template message you want to send. The tab shows only the template messages that Meta has approved.
6. (Optional) Add variables to personalize the message. For example, `@contact.name` inserts the contact's name.
7. (Optional) Add the rest of the flow after the **Send Message** card. To let the contact reply, add a **Wait for Response** card.

## Letting agents fill in variables in Live Desk

If a Live Desk agent needs to enter a value before the template message is sent, configure the variable as follows:

1. In the variable field on the **WhatsApp** tab, enter `@trigger.params.variable_name`. Replace `variable_name` with the name that should appear in **Variable mapping**. You define this name in the flow. It doesn't need to match a contact field.
2. If the flow includes more than one template message with variables, repeat step 1 for each variable that the agent should fill in.

Variables that use other expressions, such as `@contact.name`, are filled in automatically and don't appear for editing.

For example, a template message named `return_contact` can have the variables `@trigger.params.contact_name` and `@trigger.params.agent_name`. In Live Desk, the mapping screen shows these fields as **Variable contact_name** and **Variable agent_name**.

For how agents complete these values before sending, see [Using active triggering of flows](https://help.vtex.com/en/docs/tutorials/using-active-triggering-of-flows).

## Triggering the flow

To send the flow to contacts, follow these steps:

1. Click `Trigger Flow` in the upper-right corner of the screen.
2. Select the contact or group of contacts that should receive the flow, and send it.

## Sending from the Contacts module

You can also start a flow for a single contact from the **Contacts** module:

1. Select the contact that should receive the message.
2. Click the options menu in the upper-right corner.
3. Click `Start in Flow`, select the flow, and send it.

## Learn more

- [WhatsApp template messages: Impediments and configurations](https://help.vtex.com/en/docs/tutorials/whatsapp-template-messages-impediments-and-configurations): Learn how to resolve rejected or disabled template messages.
- [Automation flow overview](https://help.vtex.com/en/docs/tutorials/automation-flow-overview)
