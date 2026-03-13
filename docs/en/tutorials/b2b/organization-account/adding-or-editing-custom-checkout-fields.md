---
title: 'Adding or editing custom checkout fields'
createdAt: '2025-03-27T10:00:00.000Z'
updatedAt: '2025-03-27T10:00:00.000Z'
contentType: tutorial
productTeam: B2B
slugEN: adding-or-editing-custom-checkout-fields
locale: en
---

> ⚠️ This feature is only available for stores using B2B Buyer Portal, which is currently available to select accounts.

The Custom checkout fields feature allows you to standardize information collection during the purchase flow by adding custom fields according to your business rules.

This feature helps ensure that data such as PO numbers, cost centers, or other internal information are correctly filled in at checkout, providing better operational control and compliance with company processes.

This article covers:

- [Edit custom field](#edit-custom-field)
- [Add custom field value](#add-custom-field-value)
- [Edit custom field value](#edit-custom-field-value)

> ℹ️ Currently, creating custom fields can be done via the [Custom Fields API](https://developers.vtex.com/docs/api-reference/custom-fields-api). For more information, see the [Custom fields integration guide](https://developers.vtex.com/docs/guides/custom-fields-integration).

## Edit custom field

![Buyer Portal B2B Organization Unit information page](https://cdn.statically.io/gh/vtexdocs/help-center-content/refs/heads/main/docs/pt/tutorials/b2b/organization-account/buyer-portal-b2b-organization-unit-information-page.png)

1. Access the [Organization Account home screen](https://help.vtex.com/en/docs/tutorials/organization-account#accessing-the-organization-account).
2. Click the name of the custom field you want to edit.
3. On the custom field screen, click the cog icon (<i class="fas fa-cog"></i>) at the top of the screen to edit the field details.
4. In **List type**, choose whether the custom field values are used only by the organization unit (`Custom List`) or shared across other organization units of the contract (`Synchronized List`).
5. In **Input level**, choose whether the custom field applies at the order level or the item level.
6. In **Input requirement**, choose whether the field is optional or required.
7. In **Default {field name}**, if needed, enter a default value to be prefilled on all orders where the field applies.
8. Click `Save`.


## Add custom field value

1. Access the [Organization Account home screen](https://help.vtex.com/en/docs/tutorials/organization-account#accessing-the-organization-account).
2. Click the name of the custom field you want to add a value to.
3. On the custom field screen, click the `+` icon at the top of the screen.
4. In the modal that appears, enter the value to assign to the custom field (for example, a PO number or cost center code).
5. Click `Add`.

After completing these steps, you will see a confirmation message indicating the value was successfully created for the custom field.


## Edit custom field value

1. Access the [Organization Account home screen](https://help.vtex.com/en/docs/tutorials/organization-account#accessing-the-organization-account).
2. Click the name of the custom field you want to edit.
3. On the custom field screen, click the ellipsis icon (<i class="fas fa-ellipsis-v"></i>) next to the value you want to edit.
4. Select one of the following options depending on the desired action:
    * **Rename:** change the name of the value.
    * **Set as default:** set the value as the default to be prefilled on all orders where the field applies.
    * **Remove from unit:** remove the value from the organization unit to which it is assigned. This action does not delete the value from the system.
    * **Delete:** permanently delete the value from the system.

> ⚠️ Use the **Delete** option with caution. Deleting a value permanently removes it and all associated data across multiple organization units, which may affect access to historical and audit information. Once confirmed, this action cannot be undone.
