---
title: 'Managing custom fields for checkout (B2B)'
createdAt: '2025-02-10T10:00:00.000Z'
updatedAt: '2025-02-10T10:00:00.000Z'
contentType: tutorial
productTeam: B2B
slugEN: managing-custom-fields-for-checkout-b2b
locale: en
---

> ⚠️ This feature is only available for the **B2B Buyer Portal**.

The [Custom fields for checkout (B2B)](https://help.vtex.com/en/docs/tutorials/gerenciar-campos-customizaveis-no-checkout-b2b) feature allows you to standardize information collection during the purchase process by adding custom fields based on your business rules.

This feature ensures that information such as the purchase order (PO) number, cost center, and other internal details is correctly entered at checkout, improving operational control and compliance with company processes.

This article covers the following topics:

- [Editing a custom field](#editing-a-custom-field)
- [Adding a value to a custom field](#adding-a-value-to-a-custom-field)
- [Editing a value in a custom field](#editing-a-value-in-a-custom-field)

![Buyer Portal B2B Organization Unit information page](https://cdn.statically.io/gh/vtexdocs/help-center-content/refs/heads/main/docs/pt/tutorials/b2b/b2b-buyer-portal/buyer-portal-b2b-organization-unit-information-page.png)

## Editing a custom field

1. On the B2B Buyer Portal homepage, click the `Company` icon.
2. In the organizational unit modal, click the **Manage** button.
3. On the organizational unit details page, click the **Manage contract settings** button.
4. In the **Accounting fields** section, click the name of the desired custom field.
5. On the custom field screen, click the <i class="fas fa-cog"></i> icon at the top of the page to edit the field information.
6. In **List type**, select whether the field values should be used only in the organizational unit (`Custom list`) or shared with other organizational units of the contract (`Synced list`).
7. In **Input level**, select whether the custom field should be applied at the order or item level.
8. In **Input requirement**, select whether the field should be optional or required.
9. In **Default {field name}**, if necessary, enter the default value to be autofilled in all orders where the field applies.
10. Click `Save`.

## Adding a value to a custom field

1. On the B2B Buyer Portal homepage, click the `Company` icon.
2. In the organizational unit modal, click the **Manage** button.
3. On the organizational unit details page, click the **Manage contract settings** button.
4. In the **Accounting fields** section, click the name of the desired custom field.
5. On the custom field screen, click the `+` icon at the top of the page.
6. In the modal that appears, enter the value to be assigned to the custom field, such as a purchase order number or cost center.
7. Click `Add`.

After doing this, you'll see a confirmation message that the value has been successfully created in the custom field.

## Editing a value in a custom field

1. On the B2B Buyer Portal homepage, click the `Company` icon.
2. In the organizational unit modal, click the **Manage** button.
3. On the organizational unit details page, click the **Manage contract settings** button.
4. In the **Accounting fields** section, click the name of the desired custom field.
5. On the custom field screen, click the <i class="fas fa-ellipsis-v"></i> icon next to the value you want to edit.
6. Select one of the options below based on the desired action:

- **Rename:** Changes the name of the field value.
- **Set as default:** Sets the value as the default to be autofilled in all orders where the field applies.
- **Remove from unit:** Removes the value from the organizational unit it's assigned to. This action doesn't delete the value from the system.
- **Delete:** Permanently deletes the value from the system.

> ⚠️ Use the **Delete** option with caution. Deleting a value permanently removes it and all associated data across multiple organizational units, which might potentially compromise access to historical and audit information. After confirmation, this action can't be undone.