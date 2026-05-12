---
title: 'Contract Manager Agent'
createdAt: 2026-03-06T00:00:00.000Z
updatedAt: 2026-04-02T00:00:00.000Z
contentType: tutorial
productTeam: B2B
slugEN: contract-manager-agent
locale: en
---

> ⚠️ This feature is only available to stores using [B2B Buyer Portal](https://help.vtex.com/en/docs/tutorials/b2b-buyer-portal), which is currently available for selected accounts.

**Contract Manager Agent** helps B2B operators manage [contracts](https://help.vtex.com/en/docs/tutorials/b2b-contracts) using natural language. Instead of manually updating each contract, you can describe what you want to change, review the proposed plan, and execute it directly from the interface.

In this guide, you'll learn more about **Contract Manager Agent** in the following sections:

- [Use cases](#use-cases)
- [Managing contracts with the agent](#managing-contracts-with-the-agent)
  - [Requesting a task from the agent](#requesting-a-task-from-the-agent)
  - [Tracking tasks and history](#tracking-tasks-and-history)

## Use cases

The agent uses natural language to interpret your instructions and automate large-scale contract updates, reducing manual effort and operational errors. Here are some common scenarios:

- **Grant access to new product assortments:** When you launch a new collection (for example, "Summer Special 2026"), you can add it to multiple buyer contracts at once instead of editing each contract individually.
- **Restrict product visibility:** If a product line should no longer be available to certain buyers, you can remove the associated collection from their contracts.
- **Update business terms:** When renegotiating terms, you can add or remove price tables and payment methods or rearrange the priority order of price tables across contracts.
- **Apply bulk changes:** If hundreds of contracts require the same adjustment, you can describe the change once and the agent will apply it to all matching contracts.

## Managing contracts with the agent

You can access the agent in the VTEX Admin. Go to **Apps > Customers > Contracts Manager Agent** or type **Contracts Manager Agent** in the search bar at the top of the page.

On the home screen, you'll see the `Ask the agent` text field, suggested actions (such as `Add collections`, `Remove payment methods`, or `Change price table position`), and the `Most recent tasks` section, which displays your most recent operations.

### Requesting a task from the agent

1. In the `Ask the agent` field, type your request in natural language. For example:
    - "Add Office Supplies and Tools collections to ACME Corp and Daily Planet."
    - "Remove all collections from contract X."
    - "Add price table B2B-2026 to contracts A and B."
2. Submit the request. The agent will interpret the instruction and generate a proposed action plan.
3. Click the plan button (for example, `Add collections`) to open a drawer with complete details.
4. In the drawer, review the listed contracts and conditions (collections, price tables, or payment methods).
   > ⚠️ Always confirm that the affected contracts and conditions are correct before proceeding. Changes affect what buyers can view, purchase, and their associated business terms.
5. Click `Start Update`. When all updates are completed, you'll see a confirmation message.

> ℹ️ The time the agent takes to complete the requested tasks depends on the scale of the changes. For example, adding collections to hundreds of contracts may take a few minutes, while adding collections to three contracts usually takes just a few seconds.

While the agent executes the task, you can navigate to other pages and return later to check the results.

You can also start new tasks in separate conversations while a previous operation is still running. Each conversation works independently, allowing you to queue multiple changes without waiting for each one to finish.

To perform new tasks, you can continue the conversation in the same dialog or return to the **Contracts Manager Agent** home screen by clicking the arrow icon <i class=\"fas fa-angle-left\" aria-hidden=\"true\"></i> in the top left corner.

### Tracking tasks and history

1. Click `View tasks` in the top right corner.
2. In the drawer, review tasks from the last 7 days, including the operation name and related contract identifiers.

> ℹ️ To manage contracts via API, see the [B2B Contracts API](https://developers.vtex.com/docs/api-reference/) developer documentation.
