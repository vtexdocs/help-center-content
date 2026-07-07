---
title: "Using active triggering of flows"
id: 2G7HPM4mD3vuxPHUgtexb7
status: PUBLISHED
createdAt: 2025-09-12T16:44:52.727Z
updatedAt: 2026-07-07T00:00:00.000Z
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

Active flow triggering allows agents to initiate conversations in Live Desk by sending flows to contacts or groups of contacts. This feature is useful for active communications, such as notices, confirmations, or follow-ups, and can use WhatsApp-approved message templates when the conversation starts through this channel.

In this article, you'll learn how to:

- [Enable an existing flow for sending in Live Desk](#enable-an-existing-flow-for-sending-in-live-desk)
- [Create a flow with message template sending](#create-a-flow-with-message-template-sending)
- [Activate flow triggering in Live Desk](#activate-flow-triggering-in-live-desk)
- [Trigger a flow](#trigger-a-flow)

## Enable an existing flow for sending in Live Desk

For a flow to appear as a sending option in Live Desk, it must be identified with the `chats` label. Use this label on flows that agents can trigger during support:

1. Go to your organization on the [VTEX CX Platform](https://dash.weni.ai/orgs) dashboard.
2. In the side menu, click **Automation Flow**.
3. Check the box next to the desired flow.
4. Click the **Label** tab, and then click `New Label`.
5. In **Name**, enter `chats`.
6. Click `Create`.


> ℹ️ If the `chats` label already exists, select the desired flow, click the **Label** tab, and check the `chats` box.


## Create a flow with message template sending

Only users with admin, moderator, or contributor permissions can create flows. When creating a flow for active triggering, include a message sending block and select an approved message template to initiate the conversation through WhatsApp.

Before configuring the flow, verify that the message template is already registered and approved by WhatsApp. For more information, see [WhatsApp: How to create Template Messages](https://help.vtex.com/en/docs/tutorials/whatsapp-how-to-create-template-messages).

1. Go to your organization on the [VTEX CX Platform](https://dash.weni.ai/orgs) dashboard.
2. In the side menu, click the **Automation Flow** icon.
3. Click `Create flow`.
4. Fill in the fields for name, flow type, and, if necessary, global keywords trigger.
5. Click `Create`.
6. To insert a block, click the `Create block` button.
7. Fill in the necessary information for your block.
8. Click `Confirm`.
9. Continue creating the number of blocks according to the characteristics of the flow you want to make available in the store.


## Activate flow triggering in Live Desk

In addition to enabling the flow with the `chats` label, you must activate flow triggering in the Live Desk department. This configuration defines which departments will have the feature available for agents:

1. Go to your organization on the [VTEX CX Platform](https://dash.weni.ai/orgs) dashboard.
2. In the side menu, click **Settings**.
3. Click **Live Desk**.
4. Click the **Sectors** tab.

> ℹ️ If there are no departments configured in Live Desk yet, click `New sector` and fill in the requested information on the **New sector** page.

5. In the desired department, click the actions button <i class="fas fa-ellipsis-v" aria-hidden="true"></i>.
6. Click `Edit`.
7. In **Extra options**, enable the **Triggering message templates** option.
8. Click `Save`.


## Trigger a flow

After the flow is enabled and the department allows active triggering, agents can select contacts and send the flow through Live Desk:

1. Go to your organization on the [VTEX CX Platform](https://dash.weni.ai/orgs) dashboard.
2. In the side menu, click **Live Desk**.
3. Click `View Options`.
4. Click `Flows`.
5. Check the boxes for the contacts to whom you want to trigger the flow.
6. Click `Continue`.
7. In **Select flow**, choose the desired flow.
8. Click `Send`.

Selected contacts will receive the flow. When a contact replies, the conversation will be available for support in Live Desk.
