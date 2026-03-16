---
title: 'Adding or editing accounting fields'
createdAt: '2025-03-27T10:00:00.000Z'
updatedAt: '2025-03-27T10:00:00.000Z'
contentType: tutorial
productTeam: B2B
slugEN: adding-or-editing-accounting-fields
locale: en
---

> ⚠️ This feature is only available for stores using B2B Buyer Portal, which is currently available to select accounts.

The Accounting Fields feature allows you to standardize information collection during the purchase process by adding accounting fields based on your business rules.

This feature ensures that information such as the purchase order (PO) number, cost center, and other internal details is correctly entered at checkout, improving operational control and compliance with company processes.

This article covers the following topics:

- [Editing an accounting field](#editing-an-accounting-field)
- [Adding a value to an accounting field](#adding-a-value-to-an-accounting-field)
- [Editing a value in an accounting field](#editing-a-value-in-an-accounting-field)

> ℹ️ Currently, creating accounting fields can be done via the [Custom Fields API](https://developers.vtex.com/docs/api-reference/custom-fields-api). For more information, see the [Custom fields integration guide](https://developers.vtex.com/docs/guides/custom-fields-integration).

## Editing an accounting field

![Buyer Portal B2B Organization Unit information page](https://cdn.statically.io/gh/vtexdocs/help-center-content/refs/heads/main/docs/pt/tutorials/b2b/organization-account/buyer-portal-b2b-organization-unit-information-page.png)

1. Access the [Organization Account home screen](https://help.vtex.com/en/docs/tutorials/organization-account#accessing-the-organization-account).
2. Click the name of the accounting field you want to edit.
3. On the accounting field screen, click the <i class="fas fa-cog"></i> icon at the top of the page to edit the field information.
4. In **List type**, select whether the field values should be used only in the organizational unit (`Custom list`) or shared with other organizational units of the contract (`Synced list`).
5. In **Input level**, select whether the accounting field should be applied at the order or item level.
6. In **Input requirement**, select whether the field should be optional or required.
7. In **Default {field name}**, if necessary, enter the default value to be autofilled in all orders where the field applies.
8. Click `Save`.

## Adding a value to an accounting field

1. Access the [Organization Account home screen](https://help.vtex.com/en/docs/tutorials/organization-account#accessing-the-organization-account).
2. Click the name of the accounting field you want to add a value to.
3. On the accounting field screen, click the `+` icon at the top of the page.
4. In the modal that appears, enter the value to be assigned to the accounting field, such as a purchase order number or cost center.
5. Click `Add`.

After doing this, you'll see a confirmation message that the value has been successfully created in the accounting field.

## Editing a value in an accounting field

1. Access the [Organization Account home screen](https://help.vtex.com/en/docs/tutorials/organization-account#accessing-the-organization-account).
2. Click the name of the accounting field you want to edit.
3. On the accounting field screen, click the <i class="fas fa-ellipsis-v"></i> icon next to the value you want to edit.
4. Select one of the options below based on the desired action:

- **Rename:** Changes the name of the field value.
- **Set as default:** Sets the value as the default to be autofilled in all orders where the field applies.
- **Remove from unit:** Removes the value from the organizational unit it's assigned to. This action doesn't delete the value from the system.
- **Delete:** Permanently deletes the value from the system.

> ⚠️ Use the **Delete** option with caution. Deleting a value permanently removes it and all associated data across multiple organizational units, which might potentially compromise access to historical and audit information. After confirmation, this action can't be undone.
