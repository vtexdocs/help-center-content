---
title: 'Managing custom storefront roles and permissions'
createdAt: '2026-09-29T18:10:00.000Z'
updatedAt: '2026-09-29T18:10:00.000Z'
contentType: tutorial
productTeam: B2B
slugEN: manage-custom-storefront-roles-and-permissions
locale: en
---

> ⚠️ This feature is exclusive to stores that use [B2B Buyer Portal](https://help.vtex.com/docs/tutorials/b2b-buyer-portal), currently available to selected accounts.

The **Custom permissions** page allows you to view and manage the custom storefront roles and permissions in your account from the VTEX Admin.

To understand the concepts, rules, and list of predefined roles and permissions, see [Custom storefront roles and permissions](https://help.vtex.com/docs/tutorials/custom-storefront-roles-and-permissions-overview).

To access this page in the VTEX Admin, go to **Settings > Custom permissions**.

From this page, you can:

- Manage custom roles:
  - [Create a custom storefront role](#creating-a-custom-storefront-role)
  - [Edit a custom storefront role](#editing-a-custom-storefront-role)
  - [Delete a custom storefront role](#deleting-a-custom-storefront-role)
- Manage custom permissions:
  - [Create a custom storefront permission](#creating-a-custom-storefront-permission)
  - [Delete a custom storefront permission](#deleting-a-custom-storefront-permission)

## Requirements

Two requirements must be met to access the **Custom permissions** page:

- The account must use [B2B Buyer Portal](https://help.vtex.com/docs/tutorials/b2b-buyer-portal). In accounts that don't use this solution, the page isn't visible and can't be accessed.
- The user must have an Admin role with the **Edit Storefront User Permissions** [License Manager resource](https://help.vtex.com/docs/tutorials/license-manager-resources), in the **Services access control** category. Without this resource, the user can't see the page.

### Roles tab

The **Roles** tab shows only the custom roles in the account. Predefined roles don't appear in the list, but you can view them through the **Predefined roles** link in the tab. If the account doesn't have any custom roles yet, the tab displays a message with the `Create role` button.

At the top of the tab, the `Create role` button opens the form to create a new role.

The role list below the button shows the roles in alphabetical order, from A to Z. To reverse the order, click the **Name** column header. When there are many roles, the list is split into pages.

| Column | Description |
| --- | --- |
| **Name** | Name that identifies the role, defined when the role is created. |
| **Actions** | Menu with the `Edit role` and `Delete` actions for a role. |

The menu in each role row shows the following options:

- **Edit role:** Opens the role editing form. See [Edit a custom storefront role](#editing-a-custom-storefront-role).
- **Delete:** Removes the role after a confirmation. This option is unavailable while the role is assigned to at least one user. See [Delete a custom storefront role](#deleting-a-custom-storefront-role).

### Permissions tab

The **Permissions** tab shows only the custom permissions in the account. Predefined permissions don't appear in the list, but you can view them through the **Predefined permissions** link in the tab. If the account doesn't have any custom permissions yet, the tab displays a message with the `Create permission` button.

At the top of the tab, you'll find:

- **Permission counter:** Shows how many custom permissions the account has created, in the format `{n} of 10 custom permissions`. A help icon next to it explains that each account can have up to 10 custom permissions and that predefined permissions don't count toward the limit.
- **`Create permission` button:** Opens the form to create a new permission. When the account reaches the limit of 10, the button becomes unavailable and a notice above the list explains that you need to delete a permission that isn't in use to create another one.

The permission list shows the custom permissions in the account, with the following information:

| Column | Description |
| --- | --- |
| **Name** | Name that identifies the permission, defined when the permission is created. |
| **Description** | Text that explains what the permission authorizes. |
| **Roles using it** | Roles that include the permission. When there's more than one role, the column shows the name of the first one followed by the number of other roles, for example, `Buyer, +2`. When you hover over the text, a tooltip lists all the roles. |
| **Created on** | Date the permission was created. When you hover over the date, a tooltip shows the exact day and time. |
| **Actions** | Menu with the `Delete` action for a permission. |

You can't edit a permission after creating it, only delete it. To do this, use the **Delete** option in the permission row menu and confirm the action. This option is unavailable while at least one role is using the permission. For more details, see [Delete a custom storefront permission](#deleting-a-custom-storefront-permission).

## Managing custom storefront roles

In this section, you'll learn how to create, edit, and delete custom roles.

### Creating a custom storefront role

To create a custom role, follow the instructions below:

1. In the VTEX Admin, go to **Settings > Custom permissions**.
2. In the **Roles** tab, click `Create role`.
3. In **Name**, enter the role name.

    > ⚠️ Choose descriptive names for roles that make it clear which type of user each role is for.
4. In the permission list, select the permissions the role should include. To find them faster, you can search by permission name or filter by **Type**: **All**, **Custom**, or **Predefined**.
5. Click `Create role`.

    A message confirms the creation and the role is listed in the **Roles** tab. The `Create role` button is only available after you enter a valid name.

#### Creating a storefront permission while creating a role

If the permission you need doesn't exist yet, you can create it without leaving the role creation form:

1. With the role form open, below the permission list, click `Create a permission`.
2. Enter the permission **Name** and **Description**, and finish creating it.

    The name and the permissions you've already selected for the role are kept.
3. In the permission list, find the new permission, identified by the **New** tag. It appears unselected. Select it to include it in the role.
4. Click `Create role`.

If the account already has 10 custom permissions, the **Create a permission** option isn't displayed. Instead, a message says that the limit has been reached and tells you to delete unused permissions in the **Permissions** tab. The list still displays all existing permissions, so you can continue building the role.

### Editing a custom storefront role

> ⚠️ When you remove a permission from a role, the change takes effect immediately for all users who have that role.

To edit a custom role, follow the instructions below:

1. In the VTEX Admin, go to **Settings > Custom permissions**.
2. In the **Roles** tab, click the menu icon (⋮) of the role you want to edit and select `Edit role`.
3. Change the role name or permissions.

    The current permissions appear selected. Permissions created after the role was last saved appear unselected with the **New** tag, so you can decide whether to include them.
4. Click `Save changes`.

    A message confirms the update. If you changed the name, the role moves to the corresponding position in alphabetical order.

### Deleting a custom storefront role

To delete a custom role, follow the instructions below:

1. In the VTEX Admin, go to **Settings > Custom permissions**.
2. In the **Roles** tab, click the menu icon (⋮) of the role you want to delete.
3. Click `Delete`.
4. In the confirmation window, click `Delete` again.

    A message confirms the deletion and the role is removed from the list.

If the **Delete** option is unavailable, the role is still assigned to at least one user. Hover over the option to see the reason. To delete the role, remove it from all users who have it. Learn how in [Adding users to buyer organizations](https://help.vtex.com/docs/tutorials/adding-users-to-buyer-organizations).

## Managing custom storefront permissions

In this section, you'll learn how to create and delete custom permissions. You can't edit a permission after it's created.

### Creating a custom storefront permission

To create a custom permission, follow the instructions below:

1. In the VTEX Admin, go to **Settings > Custom permissions**.
2. In the **Permissions** tab, click `Create permission`.
3. In **Name**, enter the permission name.

    > ⚠️ The name must follow the [custom permission rules](https://help.vtex.com/docs/tutorials/custom-storefront-roles-and-permissions-overview#custom-storefront-permission-rules-and-limits) and can't be changed after the permission is created.
4. In **Description**, explain what the permission authorizes.
5. Click `Create`.

    A message confirms the creation and the permission is listed in the table. For the permission to take effect, add it to a role. The message also includes a `Go to the Roles tab` button that takes you to the role list.

### Deleting a custom storefront permission

To delete a custom permission, follow the instructions below:

1. In the VTEX Admin, go to **Settings > Custom permissions**.
2. In the **Permissions** tab, click the menu icon (⋮) of the permission you want to delete.
3. Click `Delete`.
4. In the confirmation window, click `Delete` again.

    A message confirms the deletion and the permission is removed from the list. If the account was at the limit of 10 custom permissions, the `Create permission` button becomes available again.

If the **Delete** option is unavailable, the permission is still in use by at least one role. Hover over the option to see how many roles use it. The **Roles using it** column shows which ones. To delete the permission, remove it from each of these roles by following the steps in [Edit a custom storefront role](#editing-a-custom-storefront-role).

> ℹ️ To manage custom roles and permissions via API, see the [Storefront Roles API](https://developers.vtex.com/docs/api-reference/storefront-roles-api) and the [Custom storefront roles and resources](https://developers.vtex.com/docs/guides/custom-storefront-roles-and-resources) developer guide.

## Learn more

- [Custom storefront roles and permissions](https://help.vtex.com/docs/tutorials/custom-storefront-roles-and-permissions-overview)
- [Adding users to buyer organizations](https://help.vtex.com/docs/tutorials/adding-users-to-buyer-organizations)
- [License Manager resources](https://help.vtex.com/docs/tutorials/license-manager-resources)
