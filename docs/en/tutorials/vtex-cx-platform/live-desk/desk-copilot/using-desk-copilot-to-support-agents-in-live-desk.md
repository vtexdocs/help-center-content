---
title: 'Using Desk Copilot to support agents in Live Desk'
createdAt: 2026-11-17T12:00:00.000Z
updatedAt: 2026-11-17T12:00:00.000Z
contentType: tutorial
productTeam: VTEX CX Platform
slugEN: using-desk-copilot-to-support-agents-in-live-desk
locale: en
---

**Desk Copilot** offers reply and action suggestions to support human representatives during conversations with customers in [Live Desk](https://help.vtex.com/en/docs/tutorials/live-desk-overview). In this article, you'll learn how to configure **Desk Copilot** agents and use its suggestions during support.

## Allowing AI agents to transfer conversations to human support

1. Go to **Settings > Live Desk > General**.
2. Enable the **Allow AI agents to transfer conversations to human support** option.
3. In the scenarios or criteria field, describe when the transfer should happen. For example: "Whenever the AI agent can't find a product or doesn't have knowledge about a topic, transfer the request to human support."
4. Click `Save`.

> ℹ️ You can change the transfer criteria at any time by clicking the edit icon <i class="fa-regular fa-pen-to-square" aria-hidden="true"></i>.

## Adding agents to Desk Copilot

You can assign agents to the **Desk Copilot** project to make their features available during support.

1. In the Copilot project, go to **My agents**.
2. Click `Assign new agents`.
3. Select the agents you want to make available for **Desk Copilot**.
4. Configure each agent.

> ℹ️ To learn more about agents, see [My agents](https://help.vtex.com/en/docs/tutorials/assigning-and-testing-agents).

## Using Desk Copilot during support

1. In Live Desk, select the conversation transferred to you and take over the support. The **Desk Copilot** panel is displayed next to the chat, with two tabs:
   - **Desk Copilot:** conversation summary and suggestions.
   - **Information:** contact and support details.
2. Read the conversation summary and the suggestions. They can be:
   - **Ready-made reply:** text in the appropriate tone, with `Copy` and `Send` buttons.
   - **Product search:** results with product cards, price, and image.
   - **Assembled cart:** items gathered for the customer.
   - **Order lookup:** information about a customer's order.
   - **Payment link:** a link for the customer to complete the purchase.
3. To request something specific, type in the **Ask the assistant** field.
4. To use a reply suggestion, choose one of the options:
   - **Copy:** inserts the suggestion into the message field, allowing you to review or edit the text before sending.
   - **Send:** sends the suggested reply directly to the customer, without changes.

Desk Copilot updates the summary and suggestions as the customer sends new messages during support.

> ℹ️ **Desk Copilot** doesn't send messages automatically. The representative decides which suggestions to use and when to send replies.

## Difference between Desk Copilot and Improve reply with AI

| Feature | What it does | When to use |
| --- | --- | --- |
| **Desk Copilot** | Proposes the next action based on the conversation, including summaries, replies, products, carts, orders, and payment links. | When the representative needs suggestions to reply to the customer or take actions during support. |
| **Improve reply with AI** | Reviews a text the representative has already written, correcting grammar, adjusting tone, or rewriting it. | When the representative has already written a reply and wants to refine it. |
