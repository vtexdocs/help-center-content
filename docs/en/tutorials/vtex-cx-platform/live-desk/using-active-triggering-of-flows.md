---
title: "Using active triggering of flows"
id: 2G7HPM4mD3vuxPHUgtexb7
status: PUBLISHED
createdAt: 2025-09-12T16:44:52.727Z
updatedAt: 2026-11-10T19:00:00.000Z
publishedAt: 2025-10-03T14:22:54.202Z
firstPublishedAt: 2025-10-03T14:22:54.202Z
contentType: tutorial
productTeam: Post-purchase
author: 4JJllZ4I71DHhIOaLOE3nz
slugEN: using-active-triggering-of-flows
legacySlug: using-active-triggering-of-flows
locale: en
subcategoryId: 6Jkw23mYV23p4V33O1Hjdh
---

Active flow triggering allows agents to start conversations with contacts or contact groups from Live Desk. This feature is useful for active communications, such as notifications, confirmations, or follow-ups, and can use message templates approved by WhatsApp when the conversation starts through that channel.

When a template includes variables configured for editing, the agent fills in those values before sending.

This article covers how to:

- [Enable an existing flow to be sent from Live Desk](#enabling-an-existing-flow-to-be-sent-from-live-desk)
- [Create a flow for sending message templates](#creating-a-flow-for-sending-message-templates)
- [Enable flow triggering in Live Desk](#enabling-flow-triggering-in-live-desk)
- [Trigger a flow](#triggering-a-flow)
- [Map template variables](#mapping-template-variables)

## Enabling an existing flow to be sent from Live Desk

For a flow to appear as a messaging option in Live Desk, it must have the `chats` label. Apply this label to the flows that agents will be able to trigger during a support chat:

1. Access your organization in the [VTEX CX Platform](https://dash.weni.ai/orgs) dashboard.
2. In the side menu, click **Automation flow**.
3. Check the checkbox next to the desired flow.
4. Click the **Label** tab and then click `New label`.
5. In **Name**, enter `chats`.
6. Click `Create`.

> ℹ️ If the `chats` label already exists, select the desired flow, click the **Label** tab, and check the `chats` checkbox.

## Creating a flow for sending message templates

Only users with admin, moderator, or collaborator permissions can create flows. When creating a flow for outbound triggering, include a messaging block and select an approved message template to start the conversation on WhatsApp.

Before configuring the flow, confirm that the message template has been registered and approved by WhatsApp. For more information, see [WhatsApp: How to create template messages](https://help.vtex.com/en/docs/tutorials/whatsapp-how-to-create-template-messages).

1. Access your organization in the [VTEX CX Platform dashboard](https://dash.weni.ai/orgs).
2. In the side menu, click the **Automation flow** icon.
3. Click `Create flow`.
4. Complete the Name and Flow type fields and, if needed, the keywords for global triggers.
5. Click `Create`.
6. To create a block, click the `Create block` button.
7. Enter the information required for your block.
8. Click `Confirm`.
9. Continue creating as many blocks as needed based on the characteristics of the flow you want to make available in the store.

For an agent to edit a template variable in Live Desk, fill that variable on the **WhatsApp** tab of the send message card with `@trigger.params.variable_name`. Replace `variable_name` with the name that should appear in **Variable mapping**. A variable filled with another expression, such as `@contact.name`, is applied automatically and is not shown for editing. For how to fill these fields, see [Active message dispatch on WhatsApp](https://help.vtex.com/en/docs/tutorials/active-message-dispatch-on-whatsapp).

## Enabling flow triggering in Live Desk

In addition to enabling the flow with the `chats` label, you need to enable flow triggering in the Live Desk department. This setting defines which departments can use the feature.

1. Access your organization in the [VTEX CX Platform](https://dash.weni.ai/orgs) dashboard.
2. In the side menu, click **Settings**.
3. Click **Live Desk**.
4. Click the **Sectors** tab.

> ℹ️ If there are no departments configured in Live Desk yet, click `New sector` and fill in the requested information on the **New sector** page.

5. In the desired department, click the actions button <i class="fas fa-ellipsis-v" aria-hidden="true"></i>.
6. Click `Edit`.
7. In **Additional options**, enable the **Triggering message templates** option.
8. Click `Save`.

## Triggering a flow

After the flow is enabled and the department allows outbound triggers, agents can select contacts and submit the flow through Live Desk:

1. Go to your organization in the [VTEX CX Platform](https://dash.weni.ai/orgs) dashboard.
2. In the side menu, click **Live Desk**.
3. Click `View options`.
4. Click `Flows`.
5. Search for a contact by phone number.
        > ℹ️ For a Brazilian phone number, the search finds the contact whether the number is saved with or without the ninth digit. No configuration is required.
6. Check the boxes for the contacts you want to trigger the flow for.
7. Click `Continue`.
8. In **Select flow**, choose the desired flow.
9. If the flow has no template variables configured with `@trigger.params`, click `Send`.

The selected contacts will receive the flow. When a contact replies, the conversation will become available as a support chat in Live Desk.

## Mapping template variables

If the WhatsApp templates in the flow include variables set to `@trigger.params.variable_name`, Live Desk opens **Variable mapping** after you select the flow. The name after `params.` is the label of each field. For how to configure these variables, see [Active message dispatch on WhatsApp](https://help.vtex.com/en/docs/tutorials/active-message-dispatch-on-whatsapp).

1. For each variable, select a contact field or type a text value. The field shows `Select a matching field or type text`.
2. Review **Preview of the 1st template**. Variables that reference contact fields are shown with sample values from the selected contacts.
3. When the flow has more than one template with variables, the screen shows the current template, such as **Template 1 of 3**, under **Define the variables of the 1st template**. Click `Next template` and repeat the mapping for each template.
4. Select `I've checked it and I'm ready to send it.`
5. Click `Send`.

The template sent to each contact uses the values from this mapping. When a contact replies, the conversation will become available as a support chat in Live Desk.
