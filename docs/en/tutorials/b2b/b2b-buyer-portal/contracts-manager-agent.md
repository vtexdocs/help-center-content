---
title: 'Contracts Manager Agent'
createdAt: 2026-03-06T00:00:00.000Z
updatedAt: 2026-03-06T00:00:00.000Z
contentType: tutorial
productTeam: B2B
slugEN: contracts-manager-agent
locale: en
---

> ⚠️ This feature is only available for stores using B2B Buyer Portal, which is currently available to select accounts.

The **Contracts Manager Agent** helps B2B operators manage [contracts](https://help.vtex.com/en/docs/tutorials/b2b-contracts) using natural language. Instead of manually updating each contract, you can describe what you want to change, review the proposed plan, and execute it directly from the interface.

In this guide, you'll learn more about the **Contracts Manager Agent** through the following sections:

- [Use cases](#use-cases)
- [Managing contracts with the agent](#managing-contracts-with-the-agent)
    - [Asking the agent to perform a task](#asking-the-agent-to-perform-a-task)
    - [Tracking tasks and history](#tracking-tasks-and-history)

## Use cases

The agent uses natural language to interpret your instructions and automate contract updates at scale, reducing manual effort and operational errors. Here are some common scenarios:

- **Grant access to new product assortments:** When you launch a new collection (for example, "Summer Specials 2026"), you can add it to multiple buyer contracts at once instead of editing each contract individually.
- **Restrict product visibility:** If a product line should no longer be available to certain buyers, you can remove the associated collection from their contracts.
- **Update commercial conditions:** When renegotiating terms, you can add or remove price tables and payment methods, or reorder price table priority across contracts.
- **Apply bulk changes:** If hundreds of contracts require the same adjustment, you can describe the change once and the agent applies it to all matching contracts.

## Managing contracts with the agent

You can access the Agent in the VTEX Admin. Go to **Apps > Customers > Contracts Manager Agent** or type Contracts Manager Agent in the search bar at the top of the page.

On the initial screen, you'll see the `Ask the agent` text field, suggested actions (such as `Add collections`, `Remove payment methods`, or `Change price table position`), and a `Most recent tasks` section showing your latest operations.

### Asking the agent to perform a task

1. In the `Ask the agent` field, type your request in natural language. For example:
    - "Add Office Supplies and Tools collections to ACME Corp and Daily Planet."
    - "Remove all collections from contract X."
    - "Add price table B2B-2026 to contracts A and B."
2. Submit the request. The agent will interpret the instruction and generate a proposed plan of action.
3. Click the plan button (for example, `Add collections`) to open a side panel with the full details.
4. In the side panel, verify the listed contracts and conditions (collections, price tables, or payment methods).
    > ⚠️ Always confirm that the affected contracts and conditions are correct before proceeding. Changes impact what buyers can view, purchase and corresponding conditions.
5. Click `Start Update`. Once all updates are complete, you'll see the confirmation message.

> ℹ️ The time the agent takes to complete the requested tasks depends on the scale of the requested changes. For example, adding collections to hundreds of contracts can take minutes, while adding collections to three contracts usually takes a few seconds.

While the agent works, you can navigate away and return later to check the results.

You can also start new tasks in separate dialogs while a previous operation is still running. Each dialog operates independently, so you can queue multiple changes without waiting for one to finish.

To perform new tasks, you can keep the conversation going in the same dialog, or you can return to the **Contracts Manager Agent** home screen by clicking the <i class="fas fa-angle-left" aria-hidden="true"></i> arrow icon in the top-left corner.

### Tracking tasks and history

1. Click `View tasks` in the top-right corner.
2. In the side panel, review the tasks from the last 7 days, including the operation name and related contract identifiers.

> ℹ️ To manage contracts via API, see the [B2B Contracts API](https://developers.vtex.com/docs/api-reference/) developer documentation.
