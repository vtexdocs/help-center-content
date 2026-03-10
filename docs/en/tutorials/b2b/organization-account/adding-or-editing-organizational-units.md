---
title: 'Adding or editing Organizational Units'
createdAt: '2026-03-10T10:00:00.000Z'
updatedAt: '2026-03-10T10:00:00.000Z'
contentType: tutorial
productTeam: B2B
slugEN: adding-or-editing-organizational-units
locale: en
---

> ⚠️ This feature is exclusive to stores using B2B Buyer Portal, currently available for select accounts.

**Organizational Units** (OU) allow companies to manage their internal structure in a hierarchical way, with their own budget, internal approval flows, purchasing autonomy, and other levels of subdivision. This way, the platform allows a single B2B company to operate with multiple internal structures while maintaining contractual consistency and operational control.

This article covers the management of organizational units and is divided into the following sections:

* [Add organizational unit](#add-organizational-unit)
* [Rename organizational unit](#rename-organizational-unit)
* [Add user to an organizational unit](#add-user-to-an-organizational-unit)
* [Add child organizational unit (subordinate)](#add-child-organizational-unit-subordinate)
* [Remove organizational unit](#remove-organizational-unit)

> ⚠️ To configure organizational units, the user's [Storefront Roles](https://developers.vtex.com/docs/guides/storefront-permissions) profile must be `Organizational Unit Admin`, `Super Buyer Admin`, or have the `ManageOrganizationHierarchy` resource.

## Add organizational unit

1. On the Organization Account home page, in the **Organization** section, click `Organizational Units`.

    ![organization_units_image_initial_org_account_page_EN](https://cdn.statically.io/gh/vtexdocs/help-center-content/refs/heads/main/docs/pt/tutorials/b2b/organization-account/buying_policies_image_initial_org_account_page_PT.png)

2. On the **Organizational Units** screen, click the `+` icon.
3. Check the **Parent** field to confirm the correct identification of the organizational unit to which the new unit will be subordinate, i.e., its parent. This field is not editable.
4. Fill in the name of the new organizational unit. You can [rename it](#rename-organizational-unit) later.
5. Click `Add`.

After creating an organizational unit, it will appear listed on the **Organizational Units** screen, and you can access its Organization Account by clicking on its corresponding row.

## Rename organizational unit

1. On the **Organizational Units** page, in the row corresponding to the organizational unit you want to rename, click the menu icon <i class="fas fa-ellipsis-v" aria-hidden="true"></i> > `Rename`.
2. Make the desired changes.
3. Click `Save`.

## Add user to an organizational unit

1. On the **Organizational Units** page, in the row corresponding to the organizational unit you want to add a user to, click the menu icon <i class="fas fa-ellipsis-v" aria-hidden="true"></i> > `Add User`.
2. Fill in the new user's information:
    * Name
    * Email
    * Phone number (optional)
    * Username
3. Select the access profiles you want to assign to the user.

    > ℹ️ For more information about access profiles in the **B2B Buyer Portal**, see the article [Storefront Permissions](https://developers.vtex.com/docs/guides/storefront-permissions).
4. Click `Add`.

## Add child organizational unit (subordinate)

1. On the **Organizational Units** page, in the row corresponding to the desired organizational unit, click the menu icon <i class="fas fa-ellipsis-v" aria-hidden="true"></i> > `Add Subordinate Unit`.
2. Check the **Parent** field to confirm the correct identification of the organizational unit to which the new unit will be subordinate, i.e., its parent. This field is not editable.
3. Fill in the name of the child organizational unit.
4. Click `Add`.

## Remove organizational unit

> ❗ To remove an organizational unit that has subordinate units, you must first remove each child unit individually, starting from the lowest level.

1. On the **Organizational Units** page, in the row corresponding to the organizational unit you want to remove, click the menu icon <i class="fas fa-ellipsis-v" aria-hidden="true"></i> > `Delete`.
2. Fill in the name of the organizational unit. This field is case-sensitive.
3. Click `Delete`.

> ℹ️ To manage your organization's units via API, see the [Organization Units API](https://developers.vtex.com/docs/api-reference/organization-units-api#overview).
