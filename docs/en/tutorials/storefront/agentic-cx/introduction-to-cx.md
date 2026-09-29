---
title: 'Introduction to VTEX CX Platform'
id: 50MhPxb5jmKTOyW1UcWER3
status: PUBLISHED
createdAt: 2025-10-03T16:56:02.600Z
updatedAt: 2025-05-13T14:20:03.474Z
publishedAt: 2025-10-03T14:20:03.474Z
firstPublishedAt: 2025-10-03T14:20:03.474Z
contentType: tutorial
productTeam: Post-purchase
author: 4JJllZ4I71DHhIOaLOE3nz
slugEN: introduction-to-cx
legacySlug: introduction-to-agentic-cx
locale: en
subcategoryId: 7BtmQ6zk6O7VJ7QumXJEiM
---

CX is a VTEX native customer support tool that uses agents. These agents use artificial intelligence (AI) to interact with your customers, display your store catalog, and create a cart, among other actions.

## Configuring CX

To configure this tool in your store, follow these steps:

1. In the VTEX Admin, go to **Storefront**, or type **Storefront** in the search bar at the top of the page.
2. Under **VTEX CX Platform**, click **CX Dashboard**.
3. On the onboarding screen, select between [Scale support and efficiency](#scale-support-and-efficiency) and [WhatsApp Store](#whatsapp-store).

> ℹ️ This initial selection is only for onboarding. You can enable the other option later in the CX Settings menu.

### Scale support and efficiency

The **Scale support and efficiency** tool uses agents to offer support to your customers, such as:

- **Catalog concierge:** Recommends products based on each customer's profile.
- **Cancellation agent:** Cancels the customer's purchase.
- **Order status agent:** Shows customers the status of their order.
- **Smart FAQ agent:** Answers customer questions based on the store database, such as inventory availability, prices, and more.

To activate this tool, follow these steps:

1. Click the **Scale support and efficiency** card.
2. Select the store URL that will be your data source.
3. Click `Confirm`.
4. The tool activation step is automatic. If you want, you can skip by clicking `Skip`.
5. After configuration is complete, you can skip the step or test the agents.

By clicking `Test`, you can test the agents from the initial configuration. When you click one of the agents, it starts a conversation on the screen and you can test it in real time. You can also determine the instructions the agent should follow by clicking `Refine instructions`.

When you're ready to finish the configuration, choose the activation type in **Ready for activation?**.

- Safe activation: Activates the agents for only 10% of customers.

> ℹ️ We recommend starting with safe activation so you can test the tool with fewer customers. Later, you can do a full activation in settings.

- Full activation: Activates the agents for all interactions with your customers.

### WhatsApp Store

With WhatsApp Store, you can offer your customers abandoned cart recovery, personalized product offers, integrated Pix payments (a Brazilian payment method), and more. This connection is made through your Meta for Business account. In your store's Meta for Business, you can create a new phone number, use an existing phone number in your account, or even associate a pre-verified number with your account.

> ℹ️ Pre-verified numbers are phone numbers that have already been approved by Meta and are ready to be used by the WhatsApp Business API. A pre-verified number doesn't need to receive an SMS or call to be activated. When you select a pre-verified number, it becomes part of your WhatsApp Business account.

To activate this tool, follow these steps:

1. Click the WhatsApp Store card.
2. Activate the account with one of the options below:
    - Activate with an instant number.
    - Connect your official number.
3. Click `Continue`. You'll be redirected to the Meta for Business login page.
4. Select **Business Portfolio**.
5. In **WhatsApp Business Account**, you can:
    - Create a WhatsApp Business account.
    - Use an existing WhatsApp Business account.
6. Click `Add a new number`.
    - To add a pre-verified number, select `Number provided by BSP`. The number will be listed with the status `Verified`.
7. In **Display name**, enter the name that will display to your customers.
8. Select the number verification mode.
    - With the pre-verified number, you can skip this step.
9. Read the permissions granted to the VTEX CX Platform and click `Confirm`.
10. At the end, click `Done`. You'll be redirected back to the VTEX CX Platform section in the VTEX Admin.

## Dashboard

The Dashboard displays information about VTEX CX Platform and is divided into two pages:

- [Agent team performance](#agent-team-performance)
- [Abandoned cart recovery](#abandoned-cart-recovery)

### Agent team performance

The agent team performance screen provides an overview of support chats, including resolution rate and customer satisfaction levels.

- Conversations: Number of conversations managed by agents on the same day (until 11:59 PM).
- Resolution rate: Percentage of conversations resolved only by agents. If a resolved interaction involved a representative, that interaction doesn't count for this rate.
- Customer satisfaction: Percentage that shows the satisfaction level of customers after a chat with agents.

### Abandoned cart recovery

The abandoned cart recovery screen provides an overview of WhatsApp interactions.

- **Sent**: Number of messages sent to customers.
- **Delivered**: Number of messages delivered to customers.
- **Read**: Number of messages read by customers.

> ℹ️ The number of messages read depends on the customer's WhatsApp settings. If read receipts are deactivated, this metric will be affected.

- **Clicks**: Number of clicks on the abandoned cart recovery link.

## Audit

The Audit table provides individual information for each support chat.

| Data | Description |
| --- | --- |
| Name | Name of the customer who was assisted. |
| Classification | Status of the support chat. <br> `Assisted by AI`: The interaction was resolved exclusively by agents. <br> `Not assisted`: The interaction couldn't be resolved by agents and was handed over to a representative. <br> `In progress`: The interaction is under analysis. |
| CSAT | Support chat review score, from 1 to 5. |
| Data | Support chat date. |
| Time | Support chat time. |

To learn more about support chats, click `View details`. You'll be redirected to the **Audit** page of the VTEX CX Platform.
