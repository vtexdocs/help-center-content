---
title: 'Collections Agent'
createdAt: 2026-10-02T00:00:00.000Z
updatedAt: 2026-10-05T00:00:00.000Z
contentType: tutorial
productTeam: Marketing & Merchandising
slugEN: collections-agent
locale: en
---

> ℹ️ The **Collections Agent** is currently in beta, which means we're working on improving it. Availability is currently limited to selected accounts. If you have any questions, contact [our Support team](https://supporticket.vtex.com/support).

The **Collections Agent** is an artificial intelligence agent that allows you to create and manage collections and assortments through a conversational experience in the VTEX Admin. This article explains how the agent works and shows which actions you can take on collections and assortments conversationally.

A [collection](https://help.vtex.com/docs/tutorials/collection-types) is a grouping of products, while an assortment is the entity that groups collections in scenarios that use [B2B Buyer Portal](https://help.vtex.com/docs/tutorials/b2b-buyer-portal). With **Collections Agent**, you provide an instruction (prompt) in natural language through a conversational interface, and the agent turns it into a collection or assortment.

> ⚠️ Assortments are currently available only to stores using the [B2B Buyer Portal](https://help.vtex.com/docs/tutorials/b2b-buyer-portal).

## Difference between the agent and the legacy interface

In addition to all [legacy interface](https://help.vtex.com/docs/tutorials/creating-a-product-collection) features, the **Collections Agent** offers other advantages:

- An intuitive conversational experience
- The ability to create and manage assortments
- The option to manage collections using product specifications and SKU specifications as criteria

> ℹ️ The **Collections Agent** doesn't allow you to directly change the order of products via chat. To reorder them, upload an updated spreadsheet to the agent with the items in the desired order and in `.xls` or `.xlsx` format. This sorting option is only available for static collections.

## Beta phase notices

The **Collections Agent** is in beta. During this phase, the feature has the following characteristics:

- **Scope:** For collections and assortments, includes creation, editing, bulk import/export, and viewing the plan created by the agent before user confirmation.
- **Restricted assortment:** Creating and using assortments is only available for stores that use the **B2B Buyer Portal**.
- **One collection or assortment at a time:** The agent works on a single collection or assortment in each view, creation, or editing operation.
- **Propagation time:** A collection isn't immediately visible after creation or editing. The agent informs you that indexing is in progress and that data propagation takes about an hour before the collection becomes available for querying.
- **Inclusion of products after creation:** Confirming whether a specific product is included in a collection is only reliable once the product has been created and indexed. Verifying collection inclusion before creation is out of scope at this time.

> ℹ️ The instructions shown for collections and assortments are examples only and aren't the only way to interact with the agent.

## Prerequisites

In addition to using the [B2B Buyer Portal](https://help.vtex.com/docs/tutorials/b2b-buyer-portal), as the **Collections Agent** works on collections and assortments, the store must have existing [brands](https://help.vtex.com/docs/tutorials/what-is-a-brand), [categories](https://help.vtex.com/docs/tutorials/registering-a-category), [products](https://help.vtex.com/docs/tutorials/adding-or-editing-products), and [SKUs](https://help.vtex.com/docs/tutorials/adding-or-editing-skus), since these are the items the creation rules apply to.

## Accessing the agent

In the VTEX Admin, go to **Catalog > Collections Agent**, or type **Collections Agent** in the search bar at the top of the page. The interface includes a conversational window and a prompt suggestion, as shown in the following image:

![collections_agent_interface_en](https://cdn.statically.io/gh/vtexdocs/help-center-content/refs/heads/main/docs/en/tutorials/beta/catalog-beta/collections_agent_interface_en.png)

By clicking the suggestion `Create a collection`, or typing another instruction in the chat, the agent starts the support chat and guides the interaction until the desired action is completed.

## How it works

The **Collections Agent** operates based on the following rules:

- **Static or dynamic creation:** Creates and edits collections either statically (explicit list of product IDs, SKUs, or reference codes) or dynamically (criteria such as brands, categories, product specifications, and SKU specifications).
- **Inclusive and exclusive rules:** Combines and excludes collections through inclusive and exclusive rules. Exclusive rules always take precedence over inclusive ones.
- **Complex AND/OR combinations:** Supports complex logical combinations between criteria and rules. You don't need to build the subcollections manually — the agent presents the final logical structure for approval.
- **Automatic propagation:** Multiple assortments can use the same collection. When you edit a shared collection, the update is automatically applied to all assortments that use it. This is the main value of the reusable block model.
- **Incremental adjustment:** The agent adds to what's already been defined rather than replacing it, and understands relative modifiers such as "undo that" or "swap X for Y".
- **Conversational disambiguation:** When an instruction is vague or matches more than one catalog entity, the agent pauses and presents options rather than guessing.
- **Confirmation before high-impact changes:** Before significant changes (for example, editing a collection shared by many assortments), the agent shows the scope of the change and asks for user confirmation.

## Performing actions on collections

> ⚠️ The instruction examples shown below are for illustration purposes only and aren't the only way the agent can perform an action.

You can do the following:

- Create a collection using natural language
  - Review the collection plan
  - Approve the collection plan
- Create a collection by importing a spreadsheet
- Check relationships in collections
- Edit and refine the collection
- Search for, list, and filter collections

### Creating a collection using natural language

To create a collection using natural language, type the instructions (prompt) for creating the collection in the chat, including the products you want to group. Some examples of instructions are:

- "Create a collection with all products from the Infotech brand."
- "Create a collection with products from the Electronics and Computing categories, except those from the Infotech brand."
- "Create a collection with all products from the Summer category that have the Color specification set to Blue."

You can use a more detailed instruction, such as: "create a collection with products from the Electronics and Computing categories that have the Color specification set to Black, except those from the Infotech brand."

After entering the instructions in the chat, press `Enter` or click the up arrow button in the chat. The **Collections Agent** will then interpret the request and build the collection based on the relevant criteria and rules. Once processing is complete, the agent may ask for additional information.

**Example:** The agent received the command "Build a collection with all products from category ID 6." After processing, it may ask for a name and description for the collection, and once those are provided, the agent presents a plan for what will be done.

#### Reviewing the collection plan

The collection plan presented by the agent is a summary you should review before confirming the operation. This plan includes information such as:

- Name of the collection being created
- Collection description
- [Creation rule](#how-it-works) to be used
- Future behavior for adding products to the collection

#### Approving the collection plan

After reviewing the plan, confirm the operation so the agent can apply the changes. Once this is done, the agent completes the processing and provides information such as:

- The status of the operation (success or error)
- The ID of the new collection
- The collection name (if not provided by the user)

> ❗ Data propagation can take up to an hour to reflect in the VTEX Admin, but it reflects within a few minutes during browsing.

### Creating a collection via spreadsheet import

You can build a new collection by importing data via a spreadsheet in `.csv` or `.xlsx` format. The spreadsheet must contain a list of items with the following identification columns:

| Spreadsheet column   | Description                              |
| :------------------- | :--------------------------------------- |
| Product ID           | Numeric code that identifies the product |
| Product Reference ID | Product reference code                   |
| SKU ID               | Numeric code that identifies the SKU     |
| SKU Reference ID     | SKU reference code                       |

To import the spreadsheet, follow the steps below:

1. Click the clip button in the **Collections Agent** chat to attach the spreadsheet.
2. Locally select the spreadsheet in `.csv` or `.xlsx` format.
3. Click `Open`.

Follow the same steps as creating a collection via natural language to review and approve the collection plan. The plan is updated with each new instruction, and you approve the final structure without needing to build the internal logic of subcollections. Possible instructions are:

- **Add** items to the existing list.
- **Remove** items from the existing list.
- **Replace** the entire list.

> ⚠️ Import is never interrupted by failures in individual rows: the agent processes the entire spreadsheet, following these rules:
>
> - Rows with matching IDs are imported and logged.
> - Rows with IDs that aren't found are skipped, logged, and displayed so you can fix them (for example, "Row 5: SKU '362' not found").
> - Duplicate IDs are skipped in the following rows.

### Checking relationships in collections

**Collections Agent** can be used to query the relationships of products belonging to or missing from a collection. For example, you can ask via chat why a product was included in or excluded from a collection, and the agent will explain the criteria or rule that led to that decision. Instruction example: "Why is the product with ID 74 in the Swimwear collection?".

### Editing and refining the collection

In an ongoing conversation, the **Collections Agent** doesn't replace the current draft state — it adds the new instructions to what's already been defined. In other words, you don't need to start from scratch to adjust a collection. The agent understands relative modifiers such as "undo this" or "replace brand X with brand Y," and the collection plan is updated with each interaction.

Refining collections based on new instructions works both for a collection that's being built and for one that's already been created.

> ℹ️ The **Collections Agent** checks the impact of the edit. This means that before applying high-impact changes, such as editing a collection shared by multiple assortments, the agent shows which collections and assortments will be affected and asks for your confirmation before proceeding.

### Searching, filtering, and listing collections

To find and manage the right collection, you can search by **name** or **ID** and sort or filter the list by common attributes, such as created date, name, and ID. When you open a collection, you can view its definition.

## Performing actions on assortments

You can do the following:

- Create an assortment with natural language
- View the result
- Check relationships in assortments
- Approve the assortment plan
- Edit and refine the assortment
- Search, list, and filter assortments

> ⚠️ Assortments are currently available only to stores using the **B2B Buyer Portal**.

### Creating an assortment with natural language

An assortment is composed of collections, with inclusive and exclusive rules. Describe the final set of products you want in the conversation, and the agent builds the corresponding assortment. Examples of instructions:

- "Create an assortment that includes the Electronics and Accessories collections, but excludes the Apple Products collection."
- "Use collections 2 and 3, but exclude collection 4."

### Viewing the result

Before confirming, the agent presents the assortment plan, with a summary of the included and excluded collections and the logic applied. The plan is updated with every instruction, and the agent works on one assortment at a time.

### Checking relationships in assortments

The **Collections Agent** can be used to query the relationships between collections and assortments, and you can do this in three different ways:

- Listing all collections related to an assortment, grouped by included and excluded.
- Listing all assortments that consume a given collection, grouped by included and excluded.
- Asking the reason why a collection is or isn't in an assortment, and the agent explains which criterion or rule led to that decision. Instruction example: "Why is collection ID 463 in the North Branch assortment?".

### Approving the assortment plan

After reviewing the plan, confirm the operation so the agent applies the changes to the assortment.

### Editing and refining the assortment

Just like with collections, you can adjust an assortment without starting from scratch. In an ongoing conversation, the agent adds new instructions to the current draft instead of replacing it, and understands commands like "undo that" or "swap collection X for collection Y." Refinement applies to both existing assortments and assortments currently being built.

> ❗ Since a collection can be used by multiple assortments, editing it may affect all of them. Before high-impact changes, the agent shows which collections and assortments will be affected and asks for confirmation before executing.

### Searching, listing, and filtering assortments

To find and manage the desired assortment, you can search by name or ID, and sort or filter the list by common attributes:

- Assortment created date
- Assortment name
- Assortment ID

## Including all catalog products in a collection

There's currently no automatic way to include all products from the catalog in a collection so it stays synced. You can include all products using the existing dynamic rules, but each one has its limitations:

- **By categories:** When you select all categories in the catalog, since every product must have a category, all products are included.
- **By brands:** When you select all brands, since every product must have a brand, all products are included.
- **By product specification:** When you select a specification with the same value present in all products. The specification must be active and of the combo (multiple selection) or radio (single selection) type, as the text type isn't supported.

Common points to watch out for with these options:

- **Inactive** categories, brands, or specifications are added to the collection, but their products won't appear in navigation while they're inactive. If they're activated later, the products start appearing (rule of [Intelligent Search](https://help.vtex.com/docs/tutorials/intelligent-search-overview)).
- If a category, brand, or specification is **deactivated** after the collection is created, its products remain in the collection but stop appearing in navigation (rule of **Intelligent Search**).
- Categories and brands **created after** the collection aren't automatically included.
- A category, brand, or specification **removed** from the catalog after the collection is created removes its products from the collection.
- For product specifications, products without the specification, with a blank value, or with a different value are excluded.

None of these options is a permanent mirror of the catalog: what constitutes "all products" today may change as the catalog evolves, and none of the paths update automatically to capture what's created later. Regardless of the option chosen, a plan with the proposed structure is generated for approval before any changes are applied.
