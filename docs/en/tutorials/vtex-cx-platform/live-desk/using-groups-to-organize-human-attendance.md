---
title: 'Using groups to control human support'
createdAt: 2025-09-12T16:48:55.585Z
updatedAt: 2026-07-28T00:00:00.000Z
contentType: tutorial
productTeam: Post-purchase
slugEN: using-groups-to-organize-human-attendance
locale: en
hidden: false
---

When a contact initiates human support on [Live Desk](https://help.vtex.com/docs/tutorials/live-desk-overview), the chatbot remains active in the background. If nothing is done, the automatic messages configured in the triggers may be activated during the conversation and interrupt the service. To avoid this conflict, use a **control group**: a [static group](https://help.vtex.com/docs/tutorials/static-groups) that includes all contacts currently receiving human support and should be ignored by triggers.

> ⚠️ If contacts aren't added to a control group, the chatbot will conflict and interrupt human support by sending the default messages configured in your environment.

In this article, you'll learn how to:

- [Create the control group](#create-the-control-group)
- [Add contacts to the control group](#add-contacts-to-the-control-group)
- [Ignore the control group in triggers](#ignore-the-control-group-in-triggers)
- [Remove contacts from the control group](#remove-contacts-from-the-control-group)
- [Submit custom fields in the ticket](#submit-custom-fields-in-the-ticket)

## Creating the control group

The control group is a static group, which means contacts must be added and removed manually or through action cards in flows. To create it, follow these steps:

1. Go to the organization and project you want to change in the [VTEX CX Platform](https://dash.weni.ai/orgs).
2. In the sidebar menu, click **Contacts**.
3. Click `Create group`.
4. In the popup, enter the group name (for example, _Human support_) and click `Create`.

The group will be listed alongside other contact categories in the sidebar menu. For more details, see the article [Static groups](https://help.vtex.com/en/docs/tutorials/static-groups).

## Adding contacts to the control group

The contact should enter the control group in the same [automation flow](https://help.vtex.com/docs/tutorials/automation-flow-overview) where the human support ticket is opened. This way, they're controlled when the conversation is forwarded to a representative.

In the flow that uses the **Open a ticket with a representative** action card, also add the **Add a contact to a group** action card and select the _Human support_ group. To do this, follow these steps:

1. Access the organization and the project you want to change in the [VTEX CX Platform](https://dash.weni.ai/orgs).
2. In the sidebar menu, click **Automation flow**.
3. Click the name of the flow that will open the ticket.
4. Inside the flow, click the initial block.
5. In the pop-up, under **When a contact arrives at this point in your flow...**, select the option **Add the contact to a group**.
6. In **Select the groups to add the contact to**, select the `Human support` group.
7. Click **Confirm**.
8. Position this new block next to the **Open a ticket with a representative** block so that the contact joins the group when starting the service.
9. Save the flow changes.

> ⚠️ If you open tickets in different flows, you must add this card to all flows that direct contacts to human support.

To learn more about these cards, see the article [Action cards](https://help.vtex.com/docs/tutorials/action-cards).

## Ignoring the control group in triggers

After adding the contact to the group, configure each project trigger to ignore contacts in the _Human support_ group. This prevents the chatbot from interrupting the service. To do this, follow these steps:

1. Go to the organization and project you want to change in the [VTEX CX Platform](https://dash.weni.ai/orgs).
2. In the sidebar menu, click **Contacts**.
3. Click **Triggers**.
4. Click a trigger configured in your project.
5. In the **Groups to exclude** field, select the _Human support_ group.
6. Click `Save changes`.
7. Repeat the process for **all triggers** in the project.

While the contact is in the control group, they won't be activated by automated messages, and human support will continue without interruptions. For more information about triggers, see the articles [Adding a trigger](https://help.vtex.com/docs/tutorials/adding-a-trigger) and [Trigger types](https://help.vtex.com/docs/tutorials/triggers-types).

## Removing contacts from the control group

Remember to remove the contact from the control group when the human support session is completed. Otherwise, it will continue to be ignored by triggers even after support ends.

This automation involves two elements with distinct functions:

- A **closing flow**, which removes the contact from the control group.
- A **trigger**, which starts this flow when a Live Desk ticket is closed.

First create the closing flow and then the trigger that activates it.

### Creating the closing flow

The closing flow requires only one block with the **Remove contact from a group** action card, which removes the contact from the control group. To create it, follow these steps:

1. Go to the organization and project you want to change in the [VTEX CX Platform](https://dash.weni.ai/orgs).
2. In the sidebar menu, click **Automation flow**.
3. Click `Create flow` and enter a name for the flow (for example, _Service closure_).
4. Inside the flow, click **Create block**.
5. In the pop-up, under **When a contact arrives at this point in your flow...**, select the option **Remove the contact from a group**.
6. In **Groups that the contact will be removed:**, select the _Human support_ group.
7. Click **OK**.
8. Save the flow changes.

### Creating the closing trigger

After creating the flow, configure the trigger that starts it automatically when a ticket is closed. To do this, follow these steps:

1. Go to the organization and project you want to change in the [VTEX CX Platform](https://dash.weni.ai/orgs).
2. In the sidebar menu, click **Contacts**.
3. Click **Triggers**.
4. Click `Create trigger`.
5. Click **Start a flow after a ticket is closed**.
6. In **Flow**, select the closing flow you created earlier.
7. Leave the **Groups to exclude** field empty to apply the trigger to all contacts.
8. Click `Create trigger`.

When the ticket is closed, the closing flow is triggered, removing the contact from the control group. This way, the contact can interact normally with the chatbot again.

## Submitting custom fields in the ticket

When opening the ticket with the **Open a ticket with a human representative** action card, you can submit custom fields for the service. These fields must be defined in the body of this card, in JSON format, with each field as an attribute of `custom_fields`, represented by its key and value.

The example below configures the `origin` field, whose value is defined by a flow result (`origin`). Since the value is text type, it's specified in quotes:

```json
{
  "custom_fields": {
    "origin": "@results.origin"
  }
}
```

> ℹ️ Enter text values in quotes. Numeric and boolean values don't need quotes.
