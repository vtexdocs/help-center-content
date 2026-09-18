---
title: 'Adding or editing accounting fields'
createdAt: '2025-02-09T10:00:00.000Z'
updatedAt: '2026-03-16T10:00:00.000Z'
contentType: tutorial
productTeam: B2B
slugEN: adding-or-editing-accounting-fields
locale: en
---

> ⚠️ This feature is only available for stores using [B2B Buyer Portal](https://help.vtex.com/en/docs/tutorials/b2b-buyer-portal), which is currently available to selected accounts.

The accounting fields feature allows you to standardize information collection during the purchase process by adding fields based on your business rules.

This ensures that information such as the purchase order (PO) number, cost center, and other internal details is correctly entered at checkout, improving operational control and compliance with company processes.

This article covers the following topics:

- [Adding an accounting field](#adding-an-accounting-field)
- [Editing an accounting field](#editing-an-accounting-field)
- [Adding a value to an accounting field](#adding-a-value-to-an-accounting-field)
- [Editing a value in an accounting field](#editing-a-value-in-an-accounting-field)
- [Deleting an accounting field](#deleting-an-accounting-field)

## Adding an accounting field

To add an accounting field, follow the steps below:

1. Go to the [organization account home screen](https://help.vtex.com/docs/tutorials/organization-account#accessing-the-organization-account).
2. Click the `+` icon next to **Accounting fields**.
3. In the drawer displayed, complete the following information:
    - **Field label:** Enter the name that identifies the accounting field.
    - **Input level:** Select **Order level** to apply the field to the entire order or **Item level** to apply it to each item in the cart.
    - **Input requirement:** Select whether completing the field is **Required** or **Optional**.
    - **Enable open text input so buyers can enter a value manually at checkout:** Check this checkbox to allow buyers to type their own value at checkout.
4. Click `Create`.

You will see a message confirming that the accounting field was created. Changes may take up to 10 minutes to be applied.

Accounting fields created in the interface work as value lists: you add and manage the values available to buyers, as described in [Adding a value to an accounting field](#adding-a-value-to-an-accounting-field).

> ℹ️ You can also create accounting fields programmatically using the [Custom Fields API](https://developers.vtex.com/docs/api-reference/custom-fields-api). For more information, see the [Custom fields integration guide](https://developers.vtex.com/docs/guides/custom-fields-integration).

## Editing an accounting field

To edit the settings of an accounting field, follow the steps below:

1. Go to the [organization account home screen](https://help.vtex.com/docs/tutorials/organization-account#accessing-the-organization-account).
2. Click the name of the accounting field you want to edit.
3. On the accounting field screen, click the <i class="fas fa-ellipsis-v"></i> icon next to the value you want to edit.
4. In **List type**, select whether the field values should be used only in the organizational unit (`Custom list`) or shared with other organizational units of the contract (`Synced list`).
5. In **Field label**, edit the name that identifies the accounting field, if necessary.
6. In **Input level**, select whether the accounting field should be applied at the order or item level.
7. In **Input requirement**, select whether the field should be optional or required.
8. Check the **Enable open text input so buyers can enter a value manually at checkout** checkbox to allow buyers to type their own value at checkout, or uncheck the box to allow only values from the list.
9. Click `Save`.

## Adding a value to an accounting field

To add a value to an accounting field, follow the steps below:

1. Access the [Organization Account home screen](https://help.vtex.com/en/docs/tutorials/organization-account#accessing-the-organization-account).
2. Click the name of the accounting field you want to add a value to.
3. On the accounting field screen, click the `+` icon at the top of the page.
4. In the drawer displayed, complete the **Name** field with the value you want to assign to the accounting field, such as a purchase order number or cost center. If you want, also complete the **Description (optional)** field.
5. Click `Add`.

You'll see a message confirming that the value of the accounting field was created.

## Editing a value in an accounting field

To edit a value in an accounting field, follow the steps below:

1. Go to the [organization account home screen](https://help.vtex.com/docs/tutorials/organization-account#accessing-the-organization-account).
2. Click the name of the accounting field you want to edit.
3. On the accounting field screen, click the options icon <i class="fas fa-ellipsis-v" aria-hidden="true"></i> next to the value you want to edit.
4. Select one of the options below based on the desired action:
    - **Edit:** Changes the name of the field value.
    - **Set as default:** Sets the value as default, which the platform automatically completes for all orders where the field applies.
    - **Remove from unit:** Removes the value from the organizational unit it's assigned to. This action doesn't delete the value from the system.
    - **Delete:** Permanently deletes the value from the system.

> ❗ Use the **Delete** option with caution. Deleting a value permanently removes it and all associated data across multiple organizational units, which might compromise access to historical and audit information. Once confirmed, this action can't be undone.

## Deleting an accounting field

When you delete an accounting field, you remove the field from all organizational units and permanently delete all its values and related data. The platform only retains the field usage history for audit purposes.

> ❗ You can't undo the deletion of an accounting field. To delete only a specific value from a field, use the **Delete** option in the options menu of the value, described in [Editing a value in an accounting field](#editing-a-value-in-an-accounting-field).

To delete an accounting field, follow the steps below:

1. Go to the [organization account home screen](https://help.vtex.com/docs/tutorials/organization-account#accessing-the-organization-account).
2. Click the name of the accounting field you want to delete.
3. On the accounting field screen, click the delete icon <i class="fas fa-trash-alt" aria-hidden="true"></i> at the top of the page.
4. In the **Delete accounting field** drawer, type the field label to confirm deletion.
5. Click `Delete`.
