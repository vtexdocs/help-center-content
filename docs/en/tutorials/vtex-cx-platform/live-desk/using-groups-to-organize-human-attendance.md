---
title: "Using groups to organize human attendance"
createdAt: 2025-09-12T16:48:55.585Z
updatedAt: 2026-07-10T00:00:00.000Z
contentType: tutorial
productTeam: Post-purchase
slugEN: using-groups-to-organize-human-attendance
locale: en
hidden: false
---

When a contact initiates human support on [Live Desk](https://help.vtex.com/docs/tutorials/live-desk-overview), the chatbot remains active in the background. If no action is taken, the automated messages configured in the triggers can be activated during the conversation and interrupt the service. To avoid this conflict, use a **control group**: a [static group](https://help.vtex.com/docs/tutorials/static-groups) that includes all contacts currently in human support and should be ignored by triggers.

> ⚠️ If contacts aren't added to a control group, the chatbot will conflict and interrupt human support by sending the default messages configured in your environment.

In this article you'll learn how to:

- [Create the control group](#create-the-control-group)
- [Add contacts to the control group](#add-contacts-to-the-control-group)
- [Ignore the control group in triggers](#ignore-the-control-group-in-triggers)
- [Remove contacts from the control group](#remove-contacts-from-the-control-group)
- [Submit custom fields in the ticket](#submit-custom-fields-in-the-ticket)

## Create the control group

The control group is a static group, meaning contacts are added and removed manually or through action cards in flows. To create it, follow these steps:

1. Go to the organization and project you want to modify in the [VTEX CX Platform](https://dash.weni.ai/orgs).
2. In the sidebar menu, click **Contacts**.
3. Click `Create Group`.
4. In the popup, enter the group name (for example, _Human Support_) and click `Create`.

The group will be listed alongside other contact categories in the sidebar menu. For more details, see the article [Static groups](https://help.vtex.com/en/docs/tutorials/static-groups).

## Add contacts to the control group

The contact should enter the control group in the same [automation flow](https://help.vtex.com/docs/tutorials/automation-flow-overview) where the human support ticket is opened. This way, they're controlled when the conversation is directed to an agent.

In the flow where you use the **Open a ticket with a human agent** action card, also add the **Add a contact to a group** action card and select the _Human Support_ group. To do this, follow these steps:

1. Go to the organization and project you want to modify in the [VTEX CX Platform](https://dash.weni.ai/orgs).
2. In the sidebar menu, click **Automation Flow**.
3. Click the name of the flow responsible for opening the ticket.
4. Inside the flow, click the initial block.
5. In the popup, under **When a contact arrives at this point in your flow...**, select the option **Add the contact to a group**.
6. In **Select the groups to add the contact to**, select the `Human Support` group.
7. Click **Confirm**.
8. Position this new block next to the **Open a ticket with a human agent** block, so the contact enters the group when starting the service.
9. Save the flow changes.

> ⚠️ If you open tickets in different flows, you must add this card to all flows that direct contacts to human support.

To learn more about these cards, see the article [Action cards](https://help.vtex.com/docs/tutorials/action-cards).

## Ignore the control group in triggers

After adding the contact to the group, configure each project trigger to ignore contacts in the _Human Support_ group. This prevents the chatbot from interrupting the service. To do this, follow these steps:

1. Go to the organization and project you want to modify in the [VTEX CX Platform](https://dash.weni.ai/orgs).
2. In the sidebar menu, click **Contacts**.
3. Click **Triggers**.
4. Click a trigger configured in your project.
5. In the **Groups to Exclude** field, select the _Human Support_ group.
6. Click `Save changes`.
7. Repeat the process for **all triggers** in the project.

This way, while the contact is in the control group, they won't be activated by automated messages, and human support will continue without interruptions. For more information about triggers, see the articles [Adding a trigger](https://help.vtex.com/docs/tutorials/adding-a-trigger) and [Trigger types](https://help.vtex.com/docs/tutorials/triggers-types).

## Remove contacts from the control group

It's important to remove the contact from the control group when the human support session is completed. Otherwise, they'll continue to be ignored by triggers even after the service ends.

This automation involves two elements with distinct functions:

- A **closing flow**, which removes the contact from the control group.
- A **trigger**, which starts this flow whenever a Live Desk ticket is closed.

Therefore, first create the closing flow and then the trigger that activates it.

### Create the closing flow

The closing flow requires only one block with the **Remove contact from a group** action card, which removes the contact from the control group. To create it, follow these steps:

1. Go to the organization and project you want to modify in the [VTEX CX Platform](https://dash.weni.ai/orgs).
2. In the sidebar menu, click **Automation Flow**.
3. Click `Create flow` and enter a name for the flow (for example, _Service closure_).
4. Inside the flow, click **Create block**.
5. In the popup, under **When a contact arrives at this point in your flow...**, select the option **Remove the contact from a group**.
6. In **Groups that the contact will be removed:**, select the _Human Support_ group.
7. Click **Ok**.
8. Save the flow changes.

### Create the closing trigger

After creating the flow, configure the trigger that starts it automatically when a ticket is closed. To do this, follow these steps:

1. Go to the organization and project you want to modify in the [VTEX CX Platform](https://dash.weni.ai/orgs).
2. In the sidebar menu, click **Contacts**.
3. Click **Triggers**.
4. Click `Create trigger`.
5. Click **Start a flow after a ticket is closed**.
6. In **Flow**, select the closing flow you created earlier.
7. Leave the **Groups to Exclude** field empty to apply the trigger to all contacts.
8. Click `Create trigger`.

This way, when closing the ticket, the trigger starts the closing flow, which removes the contact from the control group. Thus, the contact can interact normally with the chatbot again.

## Submit custom fields in the ticket

When opening the ticket with the **Open a ticket with a human agent** action card, you can submit custom fields for the service. These fields must be defined in the body of this card, in JSON format, with each field as an attribute of `custom_fields`, represented by its key and value.

The example below configures the `origin` field, whose value is defined by a flow result (`origem`). Since the value is text type, it's specified in quotes:

```json
{
  "custom_fields": {
    "origin": "@results.origem"
  }
}