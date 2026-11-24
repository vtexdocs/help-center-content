---
title: 'Sales Operations Agent and customer portfolio on VTEX Sales App'
createdAt: 2026-10-06T00:00:00.000Z
updatedAt: 2026-10-16T00:00:00.000Z
contentType: tutorial
productTeam: Physical Stores
slugEN: sales-operations-agent-and-customer-portfolio-on-vtex-sales-app
locale: en
---

> ℹ️ The **Sales Operations Agent** is currently in beta, which means we're working on improving it. This feature is currently available only to selected accounts using **Sales App B2B**. If you have any questions, contact [our Support team](https://help.vtex.com/support).

The **Sales Operations Agent** is an AI agent for [VTEX Sales App](/en/docs/tracks/what-is-vtex-sales-app) that allows you to manage [sales teams, sales associates, and customer portfolios](#concepts) through a conversational experience. This article explains how the agent works in VTEX Admin and what it can do to support your B2B operations.

> ⚠️ The **Sales Operations Agent** allows you to manage sales teams and customer portfolios in the [B2B Buyer Portal](/en/docs/tutorials/b2b-buyer-portal). To manage sales reps for physical stores, see [Managing sales reps in VTEX Sales App](/en/docs/tracks/managing-sales-associates-in-vtex-sales-app).

## Prerequisites

Your account must use the [B2B Buyer Portal](/en/docs/tutorials/b2b-buyer-portal). If you work with sales teams that manage customer portfolios, you must already have a [B2B contract](/en/docs/tutorials/b2b-contracts) added.

## Concepts

The following table presents the terminology used in **Sales Operations Agent**:

| **Term**                                                           | **Meaning**                                                                                                                                                                                                                                 |
| :----------------------------------------------------------------- | :------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| [Team](#performing-actions-on-teams)                               | Sales structure unit. It can be organized hierarchically into teams and subteams, reflecting the org chart of the sales organization.                                                                       |
| [Sales associate](#performing-actions-on-sales-associates)               | Sales team member added via the agent and with a restricted [role](#sales-associate-access-permissions).                                                                                                                          |
| [Customer portfolio](#performing-actions-on-customer-portfolios)   | Association between a contract and a team or subteam, which allows sales associates to view and create orders related to the contract. Learn more in [Team access to contracts](#team-access-to-contracts). |
| [B2B contract](/en/docs/tutorials/b2b-contracts) | [Contract](/en/docs/tutorials/b2b-contracts) previously added to the account, used when creating customer portfolios.                                                                                     |

## Access permissions

To use the agent, the user's [role](/en/docs/tutorials/roles) must include the [License Manager resources](/en/docs/tutorials/license-manager-resources) corresponding to the actions to be performed.

> ℹ️ The agent doesn't create roles.

The following table lists which resources are required for each action:

| Product            | Category                          | Resource                                                      | Allowed operations                                                                                         |
| :----------------- | :-------------------------------- | :------------------------------------------------------------ | :--------------------------------------------------------------------------------------------------------- |
| Organization Units | units                             | **View Organization Unit**                                    | List teams and view details, members, and associated contracts.                            |
| Organization Units | units                             | **Edit Organization Unit**                                    | Create, rename, move, and deactivate teams, add and remove users, and associate contracts. |
| Organization Units | units                             | **Move Organization Unit**                                    | Convert a parent team into a subteam or move a subteam in the hierarchy.                   |
| License Manager    | Services access control           | **Edit Admin Users**                                          | Create, edit, or remove users or application keys.                                         |
| License Manager    | Services access control           | **View Admin Users**                                          | List all account users.                                                                    |
| Dynamic Storage    | Dynamic storage generic resources | **Read only documents**                                       | Read documents.                                                                            |
| Dynamic Storage    | Dynamic storage generic resources | **Insert or update document (not remove)** | Create and update documents, but not remove them.                                          |

> ℹ️ If the user only needs to view information, the **Read only documents** resource in Dynamic Storage is sufficient.

To grant the minimum required access, we recommend [creating a custom role](/en/docs/tutorials/creating-roles) with only the resources listed above. The agent doesn't create [roles](/en/docs/tutorials/roles).

### Sales associate access permissions

When creating a sales associate, the agent automatically assigns them the [inStore Sales Person](/en/docs/tutorials/predefined-roles#instore-sales-person) role. You can't assign another role to sales associates.

The [inStore Sales Person](/en/docs/tutorials/predefined-roles#instore-sales-person) role gives users access to **Sales App** to view and create orders on behalf of customers.

## Use cases

The **Sales Operations Agent** interprets your instruction, prepares and presents the change plan for the commercial structure, and only executes the action after your review and confirmation. See some use cases:

- **Build a sales org chart:** Create teams and subteams following the same logic as the operation, such as structures by regions, cities, or customer portfolios.
- **Add sales associates:** Add sales team members to the sales structure, associating each person with the desired team.
- **Manage customer portfolios:** Associate [B2B contracts](/en/docs/tutorials/b2b-contracts) with a team or subteam to specify which contracts sales associates can access in **Sales App**.
- **Edit multiple records simultaneously:** Change multiple records at once, either through a fully conversational interface or by importing `.xlsx`, `.csv`, `.txt`, or `.json` files.

## Accessing the agent

To open the **Sales Operations Agent**, in the VTEX Admin, go to **Apps > Sales Management > Team Agent**. The interface includes a conversational window, as shown in the following image:

![sales-operations-agent-interface-en](XXX)

The screen displays some suggestions to get started. Click one of them, or type an instruction in the chat, then click **Send** to start the session with the agent.

> ℹ️ To learn about the actions performed by the agent, see the [Managing teams, sales associates, and customer portfolios](#managing-teams-sales-associates-and-customer-portfolios) section.

The **Sales Operations Agent** can handle requests entirely through conversation or make [bulk changes](#performing-bulk-actions-on-teams-sales-associates-and-customer-portfolios) by importing files, as described below.

## Operating rules

The agent only performs actions after presenting a plan and receiving your [confirmation](#plan-review-and-confirmation). The operating rules are:

- **Assumption-free responses:** When the agent doesn't have information or isn't authorized to access it, it communicates that limitation.
- **Name disambiguation:** When the agent identifies similar or duplicate names, it requests clarification before building the plan. For example, if you ask the agent to create a team named "regional sales" and a team named "REGIONAL SALES" already exists, the agent will let you know.
- **User validation and control:** Each [user](/en/docs/tutorials/managing-admin-users) can only view the information [allowed by their resources](#access-permissions).
- **Contract validation:** The agent only allows associating B2B contracts previously added to the account.
- **Shared contract alert:** If a contract is already associated with another team, the agent flags this condition but still allows the association.
- **Error messages:** If errors or inconsistencies are detected, the agent explains the reasons and presents a partial execution plan with valid data for you to [review and confirm](#plan-review-and-confirmation).

### Scope restrictions

The **Sales Operations Agent** has the following restrictions:

- ❌ Doesn't access or change buyer, contact, or organization data from the [B2B Buyer Portal](/en/docs/tutorials/b2b-buyer-portal).
- ❌ Doesn't create B2B contracts.
- ❌ Doesn't send emails or other messages.
- ❌ Doesn't configure user access permissions. The only exception is the [inStore Sales Person](/en/docs/tutorials/predefined-roles#instore-sales-person) role, assigned by default when creating sales associates.
- ❌ Doesn't show audit history. To check the history, use [Audit](/en/docs/tutorials/audit).

### Plan review and confirmation

Before you create, edit, or remove an item conversationally or via file import, the agent presents a plan of what will be executed and makes the changes only after your review and confirmation.

If there are any errors or inconsistencies in the information received, the agent displays error messages and presents a validation screen outlining what will be done. For imported files, the agent processes the entire content and separates valid lines from invalid ones (when errors exist): Valid lines follow the plan, and invalid ones are rejected with an indication of the reason.

## Managing teams, sales associates, and customer portfolios

With the **Sales Operations Agent**, you can:

- [Perform actions on sales associates](#performing-actions-on-sales-associates)
- [Perform actions on teams](#performing-actions-on-teams)
- [Perform actions on customer portfolios](#performing-actions-on-customer-portfolios)
- [Perform bulk actions on teams, sales associates, and customer portfolios](#performing-bulk-actions-on-teams-sales-associates-and-customer-portfolios)

Actions are only performed after the [plan confirmation](#plan-review-and-confirmation) by a user with the required [access permissions](#access-permissions).

> ⚠️ The instruction examples shown in the sections are illustrative and aren't the only way the agent can understand and perform an action.

### Performing actions on sales associates

Team members added by the **Sales Operations Agent** are called sales associates. The following table presents the actions you can perform on sales associates:

| **Action**                                 | **Required information**                                                                                                                                                                                                                                                             | **Instruction examples**                                                                                                                                                   |
| :----------------------------------------- | :----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | :------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Create sales associate                     | Sales associate name + email + team name or ID. The sales associate code and store code are optional. Learn more about this user's access restrictions in [Sales associate access permissions](#sales-associate-access-permissions). | "Create John Smith `john.smith@acme.com` in the Northeast team" or "Add Michael Johnson `michael.johnson@example.com` with code 204 and store 573 in the North Sales team" |
| Add sales associate to team                | Name, ID, or email of the sales associate + name or ID of the team.                                                                                                                                                                                                  | "Add Michael Johnson to the North Sales team" or "Include `john.smith@acme.com` in the South Sales team"                                                                   |
| Search or view sales associate information | Name, ID, or email of the sales associate.                                                                                                                                                                                                                           | "Which teams does Michael Johnson belong to?" or "Which contracts does `john.smith@acme.com` handle?"                                                                      |
| Move sales associates between teams        | Name, ID, or email of the sales associate + name or ID of the destination team.                                                                                                                                                                                      | "Move John Smith to the Southeast team" or "Move ID 7329 to the Northeast team"                                                                                            |
| Undo recent sales associate creation       | You can undo recent creations, as long as you're in the same session. To do this, provide the sales associate's name, ID, or email, along with the action to be undone.                                                                              | "Undo the creation of sales associate Michael Johnson" or "Disregard the creation of John Smith"                                                                           |
| Remove sales associate from team           | Name, ID, or email of the sales associate. Removing a sales associate from a team only unlinks them from the team; they remain a [user](#sales-associate-access-permissions) of the account.                                                               | "Remove John Smith from the South Sales team"                                                                                                                              |

> ℹ️ When you create, add, or remove multiple sales associates in a single action, whether through a file or a conversation, if there are any errors, the agent displays the error messages and a validation screen showing what will be done. You need to review and confirm this summary before the action is performed.

### Performing actions on teams

The team is the sales structure unit within the **Sales Operations Agent**. You can organize teams hierarchically, with parent teams and subteams.

> ⚠️ Once you convert a parent team into a subteam, you can't revert it to the root level. Before creating teams, we recommend defining a hierarchy that mirrors the org chart of your sales organization.

The following table presents the actions you can perform on teams:

| **Action**                         | **Required information**                                                                                                                                       | **Instruction examples**                                                                                                                                                                     |
| :--------------------------------- | :------------------------------------------------------------------------------------------------------------------------------------------------------------ | :--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Create team                        | Team name. If you're creating a subteam, also provide the name of the parent team.                                             | "Create the South Sales team" or "Create the Contagem subteam within the Northeast team" or "Create my sales teams: South Team, North Team, Northeast Team." |
| Create subteams by sales associate | Attach a `.xlsx`, `.csv`, `.txt`, or `.json` file with the sales associates' data and the destination team.                                    | "Create subteams based on each sales associate's portfolio" or "I want to create subteams based on each sales associate's portfolio"                                                         |
| Edit team name                     | Current team name and the new name.                                                                                                            | "Edit the South Sales team to Southeast Sales" or "Change the name Southeast Sales to Southeast Sales Main"                                                                                  |
| Move team                          | Names of the team to be moved and the destination team.                                                                                        | "Move the South Sales team into the Northeast team" or "Place the South Sales team under the Northeast Sales team"                                                                           |
| View team details                  | Team name or ID + information you want to view (sales associates, linked contracts, or subteams).                           | "Which contracts does the South Sales team have access to?" or "Which sales associates are on the North Sales team?"                                                                         |
| List teams                         | The command only.                                                                                                                              | "List the teams" or "Show all teams"                                                                                                                                                         |
| Undo recent team creation          | In the same session, you can undo recently created teams. To do this, provide the team name or ID and the action to be undone. | "Undo the creation of South Sales" or "Cancel the new team 8934"                                                                                                                             |
| Deactivate team                    | Team name or ID.                                                                                                                               | "Deactivate the South Sales team" or "Remove the Southeast Sales subteam"                                                                                                                    |

### Performing actions on customer portfolios

The customer portfolio represents the contracts that the team or subteam can access to view quotes and create orders. To have a portfolio served by a single sales associate, create a subteam with them as the only member.

The following table lists the actions you can perform on customer portfolios:

| **Action**                                  | **Required information**                                                                                                                                                                                                  | **Instruction examples**                                                                                                                                                               |
| :------------------------------------------ | :------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | :------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Associate a contract with one or more teams | Contract name or ID + name or ID of one or more teams. You can also perform this [bulk action](#performing-bulk-actions-on-teams-sales-associates-and-customer-portfolios) through file import. | "Associate contract `9eea9b43-c83c-42e9-86a8-fbef4ed228d5` with South Team, North Team, and Northeast Team" or "Create the North Team customer portfolio with the Empresa AG contract" |
| View customer portfolios                    | Name or ID of the team or contract.                                                                                                                                                                       | "Which portfolios does the North Team serve?" or "Which contracts is the South Sales team associated with?"                                                                            |
| Remove contract from a portfolio            | Contract name or ID + team name or ID.                                                                                                                                                                    | "Remove contract `9eea9b43-c83c-42e9-86a8-fbef4ed228d5` from the South Team's portfolio" or "Remove the Empresa AG company contract from the North Team's portfolio"                   |

> ⚠️ By default, when you don't associate a contract with a team or subteam, sales associates can view and create orders for all contracts in the account. Therefore, if you don't plan to use customer portfolios in a segmented way, we recommend not associating contracts with teams. This way, your entire customer list will be available in **Sales App**.

#### Team access to contracts

Associating a contract with a team defines that team's customer portfolio and changes what the sales associate sees in **Sales App**.

- **Teams with associated contracts:** Sales associates only see quotes and orders for associated contracts in **Sales App**. Creating new orders is also restricted to these contracts.
  - Example: The South Team is associated with contracts A and B, so the sales associates on that team can only view and create orders for those two contracts.
- **Teams without associated contracts:** Sales associates can view all contracts in the account.
  - Example: The North Team isn't linked to any contract, so sales associates can view and create orders for all contracts in the account.

> ⚠️ We recommend that you confirm the contractual associations before setting restrictions for the sales team.

### Performing bulk actions on teams, sales associates, and customer portfolios

The **Sales Operations Agent** allows you to perform bulk actions by importing files in `.xlsx`, `.csv`, `.txt`, or `.json` format. This applies to the following scenarios:

- **Teams:** Create, move, edit, or deactivate teams (only empty teams can be deactivated), and create subteams from sales associates.
- **Sales associates:** Create, add, or remove sales associates from teams.
- **Customer portfolios:** Associate contracts to one or more teams.

Instruction examples:

- "Create 5 new regional teams according to the file"
- "Link the contracts with the teams indicated in the spreadsheet"
- "Add all sales associates from the spreadsheet to the indicated teams"
