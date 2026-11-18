---
title: 'Desk Copilot'
createdAt: 2026-11-17T12:00:00.000Z
updatedAt: 2026-11-17T12:00:00.000Z
contentType: tutorial
productTeam: Post-purchase
slugEN: desk-copilot
locale: en
hidden: false
categoryCover: true
seeAlso:
  - "/en/docs/tutorials/using-desk-copilot-to-support-agents-in-live-desk"
  - "/en/docs/tutorials/live-desk-overview"
---

**Desk Copilot** helps human representatives in [Live Desk](https://help.vtex.com/en/docs/tutorials/live-desk-overview) reply to customers more quickly. It reads the active conversation, reacts to each customer message, and suggests the next best action. The human representative stays in control: they decide whether to copy, edit, or send each suggestion.

## How Desk Copilot works

**Desk Copilot** works as a separate project within the same organization as your **VTEX CX Platform** support project. This project includes the following components:

- **Manager:** an agent configured to coordinate suggestions and support human representatives.
- **Internal knowledge base:** gathers information for exclusive use by the support team, which shouldn't be shared directly with customers.
- **Official commercial agents:** the same agents used by AI agents to access commercial features.

To generate suggestions, **Desk Copilot** analyzes the context of the conversation, including text messages, transcribed audio, and files shared by the customer, such as PDFs.

You can also use [custom agents](https://help.vtex.com/en/docs/tutorials/assigning-and-testing-agents#assigning-an-agent-to-the-team) in Desk Copilot to extend its features. To learn how to enable and configure Copilot, see [Using Desk Copilot to support agents in Live Desk](https://help.vtex.com/en/docs/tutorials/using-desk-copilot-to-support-agents-in-live-desk).

## Suggestion types

For each customer message, Desk Copilot can propose one of the following actions:

- Replies: ready-to-send messages, with a tone appropriate for support.

- Product search: conversational search results displayed in carousels.

- Carts: carts with products mentioned in the conversation.

- Order lookups: actions to check order information.

- Payment links: suggested links to help customers complete purchases.

To learn how to use and evaluate suggestions in Live Desk, see [Using Desk Copilot to support agents in Live Desk](https://help.vtex.com/en/docs/tutorials/using-desk-copilot-to-support-agents-in-live-desk).

## Enabling Desk Copilot

1. In the desired VTEX CX Platform project, click **Settings > Live Desk**.
2. Select the **Desk Copilot** tab.
3. Click `Create Copilot project`.
4. Set the project name.

    > ⚠️ By default, the suggested name is the same as the support project's. To make identification easier, we recommend using a different name or adding **Copilot** to the original name. For example: **Project X Copilot**.

5. Click `Create`.

After creating the Desk Copilot project, you're redirected to the **Analytics** page.

## Billing

Conversations assisted by Desk Copilot are billed as regular VTEX CX Platform conversations. You don't need to change your contract to use this feature.
