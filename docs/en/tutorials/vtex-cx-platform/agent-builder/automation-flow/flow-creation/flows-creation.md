---
title: "Creating a flow"
id: 6AoGPZEA6aihcY2bS85Wz4
status: PUBLISHED
createdAt: 2025-09-16T16:29:17.584Z
updatedAt: 2026-11-12T17:20:00.000Z
publishedAt: 2025-10-03T14:20:04.194Z
firstPublishedAt: 2025-10-03T14:20:04.194Z
contentType: tutorial
productTeam: Post-purchase
author: 4JJllZ4I71DHhIOaLOE3nz
slugEN: flows-creation
legacySlug: flows-creation
locale: en
subcategoryId: hXGU8pFfABVFIg724zWBN
---

A flow is a sequence of actions and decisions that automates interactions with contacts. After you create the flow, you add the steps in the flow editor.

> To learn how a flow is structured, see [Automation flow](https://help.vtex.com/en/docs/tutorials/automation-flow-overview).

## Before you begin

Only users with admin, moderator, or collaborator permissions can create flows.

## Creating a flow

1. Go to your organization in the [VTEX CX Platform](https://dash.weni.ai/orgs) dashboard.
2. In the side menu, click **Automation flow**.
3. Click `Create flow`.
4. In **Name**, enter a name for the flow.
5. (Optional) In **Global Trigger Keywords**, enter the keywords that start this flow when a contact sends them.

    > ⚠️ If Agent Builder is active, keywords and other triggers don't start this flow. Agent Builder starts the flow instead.

    You can leave this field empty and add triggers later. For more information, see [Adding a trigger](https://help.vtex.com/en/docs/tutorials/adding-a-trigger) and [Triggers types](https://help.vtex.com/en/docs/tutorials/triggers-types).

6. In **Type**, select **Message**, **Phone Call**, or **Survey**. **Message** is selected by default. To choose a type, see [Flow types](#flow-types).
7. Click `Create`.

The flow is created. You can add actions and decisions in the flow editor. For more information, see [Flow editor](https://help.vtex.com/en/docs/tutorials/flow-editor-and-tools).

## Flow types

The type controls how the flow interacts with contacts.

- **Message:** Use this type for text channels, such as WhatsApp, Facebook Messenger, and SMS. This option is selected by default.
- **Phone Call:** Use this type for call channels. This type includes action and decision cards for calls.
- **Survey:** Use this type for flows that collect survey responses.

## Learn more

To build and manage the flow, see:

- [Flow editor](https://help.vtex.com/en/docs/tutorials/flow-editor-and-tools)
- [Action cards](https://help.vtex.com/en/docs/tutorials/action-cards)
- [Decision cards](https://help.vtex.com/en/docs/tutorials/decision-cards)
- [Import and export flows](https://help.vtex.com/en/docs/tutorials/import-and-export-flows)
