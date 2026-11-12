---
title: "Creating a flow"
id: 6AoGPZEA6aihcY2bS85Wz4
status: PUBLISHED
createdAt: 2025-09-16T16:29:17.584Z
updatedAt: 2026-11-12T15:00:00.000Z
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

A flow is a sequence of actions and decisions that automates interactions with contacts. When creating a flow, you define its name, optional trigger keywords, and type.

You add the steps after the flow is created. For how a flow is structured, see [Automation flow](https://help.vtex.com/en/docs/tutorials/automation-flow-overview).

## Before you begin

Only users with admin, moderator, or collaborator permissions can create flows.

## Creating a flow

To create a flow, follow these steps.

> ⚠️ If Agent Builder is active, keywords and other triggers don't start the flow. Agent Builder starts flows instead.

1. Access your organization in the [VTEX CX Platform](https://dash.weni.ai/orgs) dashboard.
2. In the side menu, click **Automation flow**.
3. Click `Create flow`.
4. In **Name**, enter a name for the flow. **Name** is required. You can change the name later.
5. (Optional) In **Global Trigger Keywords**, enter the keywords that start this flow when a contact sends them. You can leave this field empty and add triggers later. For more information, see [Adding a trigger](https://help.vtex.com/en/docs/tutorials/adding-a-trigger) and [Triggers types](https://help.vtex.com/en/docs/tutorials/triggers-types).
6. In **Type**, select **Message**, **Phone Call**, or **Survey**. **Type** is required, and **Message** is selected by default. See [Flow types](#flow-types).
7. Click `Create`.

The flow is created, and you can add actions and decisions in the flow editor. For more information, see [Flow editor and tools](https://help.vtex.com/en/docs/tutorials/flow-editor-and-tools).

## Flow types

The flow type determines how the flow interacts with contacts. The options are **Message**, **Phone Call**, and **Survey**.

**Message** is selected by default. Use it for text channels, such as WhatsApp, Facebook Messenger, and SMS.

Use **Phone Call** for call channels. This type includes action and decision cards made for calls.

Use **Survey** for flows that collect survey responses.

## Learn more

- [Flow editor and tools](https://help.vtex.com/en/docs/tutorials/flow-editor-and-tools)
- [Action cards](https://help.vtex.com/en/docs/tutorials/action-cards)
- [Decision cards](https://help.vtex.com/en/docs/tutorials/decision-cards)
- [Import and export flows](https://help.vtex.com/en/docs/tutorials/import-and-export-flows)
