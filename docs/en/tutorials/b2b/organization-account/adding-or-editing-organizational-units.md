---
title: 'Adding or editing organizational units'
createdAt: '2026-03-03T10:00:00.000Z'
updatedAt: '2026-03-03T10:00:00.000Z'
contentType: tutorial
productTeam: B2B
slugEN: adding-or-editing-organizational-units
locale: en
---

> ⚠️ This feature is only available to stores using B2B Buyer Portal, which is currently available for selected accounts.

**Organizational units** (OU) allow companies to manage their internal structures in a hierarchical manner, with their own budgets, internal approval flows, purchasing autonomy, and other subdivision levels. This way a single B2B company can operate with multiple internal structures, maintaining contractual consistency and operational control.

In this article, you'll learn how to manage organizational units through the following sections:

- [Adding an organizational unit](#adding-an-organizational-unit)
- [Renaming an organizational unit](#rename-an-organizational-unit)
- [Adding a user to an organizational unit](#adding-a-user-to-an-organizational-unit)
- [Adding a child (sub) organizational unit](#adding-a-child-sub-organizational-unit)
- [Removing an organizational unit](#removing-an-organizational-unit)

> ⚠️ To configure organizational units, the user's [Storefront Role](https://developers.vtex.com/docs/guides/storefront-permissions) must be `Organizational Unit Admin`, `Super Buyer Admin`, or have the `ManageOrganizationHierarchy` resource.

## Adding an organizational unit

1. On the organization account homepage, in the **Organization** section, click `Organizational units`.

   ![organization_units_image_initial_org_account_page_PT](https://raw.githubusercontent.com/vtexdocs/help-center-content/refs/heads/main/docs/pt/tutorials/b2b/organization-account/buying_policies_image_initial_org_account_page_PT.png)

2. On the **Organizational units** screen, click the `+` icon.

3. Make sure the **Parent** field contains the organizational unit that the new unit should go under, that is, the unit it will be a child of. This field can't be edited.

4. Enter the name of the new organizational unit. You can [rename it](#renaming-an-organizational-unit) later.

5. Click `Add`.

After creating an organizational unit, it will be listed on the **Organizational units** screen. You can access the organization account page for the unit by clicking its row.

## Renaming an organizational unit

1. On the **Organizational units** page, in the row of the organizational unit you want to rename, click the menu icon <i class="fas fa-ellipsis-v" aria-hidden="true"></i> > `Rename`.
2. Make the desired changes.
3. Click `Save`.

## Adding a user to an organizational unit

1. On the **Organizational units** page, in the row of the organizational unit you want to add a user to, click the menu icon <i class="fas fa-ellipsis-v" aria-hidden="true"></i> > `Add user`.
2. Complete the new user information:
   - Name
   - Email
   - Phone number (optional)
   - Username
3. Select the roles you want to assign to the user.

   > ℹ️ For more information about roles in **B2B Buyer Portal**, see the article [Storefront Permissions](https://developers.vtex.com/docs/guides/storefront-permissions).
4. Click `Add`.

## Adding a child (sub) organizational unit

1. On the **Organizational units** page, in the row of the desired organizational unit, click the menu icon <i class="fas fa-ellipsis-v" aria-hidden="true"></i> > `Add organizational unit`.
2. Make sure the **Parent** field contains the correct organizational unit the new unit should go under, that is, the one it should be a child of. This field can't be edited.
3. Enter the name of the child organizational unit.
4. Click `Add`.

## Removing an organizational unit

> ❗ To remove an organizational unit that has child units, you must first remove each child unit individually, starting with the lowest level.

1. On the **Organizational units** page, in the row of the organizational unit you want to remove, click the menu icon <i class="fas fa-ellipsis-v" aria-hidden="true"></i> > `Delete`.
2. Enter the name of the organizational unit. This field is case sensitive.
3. Click `Delete`.

> ℹ️ To manage units in your organization via API, check the [Organizational Units API](https://developers.vtex.com/docs/api-reference/organization-units-api#overview).
