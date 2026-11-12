---
title: 'Custom storefront roles and permissions'
createdAt: '2026-09-29T18:10:00.000Z'
updatedAt: '2026-09-29T18:10:00.000Z'
contentType: tutorial
productTeam: B2B
slugEN: custom-storefront-roles-and-permissions-overview
locale: en
---

> ⚠️ This feature is exclusive to stores that use [B2B Buyer Portal](https://help.vtex.com/en/docs/tutorials/b2b-buyer-portal), currently available to select accounts.

In B2B Buyer Portal, what each user of a buyer organization can do in the store is defined by [storefront roles](#storefront-roles), which group [permissions](#storefront-permissions) to access resources on the store website, such as `PlaceOrders` or `ApproveOrders`.

VTEX provides predefined roles and permissions, and for specific business scenarios, you can also create custom roles and permissions via API or in the VTEX Admin.

> ℹ️ In the VTEX Admin, custom permissions are displayed as **permissions**. In the API and in [Audit](https://help.vtex.com/en/docs/tutorials/audit) events, they're called **resources**, as in `Create Storefront Custom Resource`. Don't confuse them with [License Manager resources](https://help.vtex.com/en/docs/tutorials/license-manager-resources), which control access to the Admin.

See below for more details on these concepts.

## Storefront permissions

A permission authorizes access to a specific resource or action on the storefront. For example, the `PlaceOrders` permission allows a user to create and submit orders.

There are two types of permissions:

- **Predefined:** Provided by VTEX and can't be edited or deleted. See the full list in [Predefined storefront permissions](#predefined-storefront-permissions).
- **Custom:** Created by your account to authorize access to a resource that predefined permissions don't cover. Each custom permission has a name and a description. In the API, it's called a _custom storefront resource_.

Custom permissions work the same way as predefined permissions when authorizing an action.

### Predefined storefront permissions

The following table shows the available predefined permissions. The **Key** column shows the permission identifier used in the API and in Audit.

| Key | Description |
| --- | --- |
| `ManageOrganizationAndContract` | Allows managing the organization structure, contracts, and related settings. |
| `ManageOrganizationHierarchy` | Allows the user to bypass organizational unit limits and manage entities at the root organization level, including access to and administration of all organizational units. |
| `ManageUsers` | Allows creating, modifying, and deleting users. |
| `ViewUsers` | Grants read-only access to user details and lists. |
| `ManageBuyingPolicies` | Allows creating, modifying, and deleting buying policies and approval workflows. |
| `ViewBuyingPolicies` | Grants permission to view configured buying policies, including approval rules and spending restrictions. |
| `ManageBudgets` | Allows full control over creating, editing, allocating, and deleting budgets. |
| `ViewBudget` | Grants read-only access to budget details, including allocations, limits, and spending history. |
| `ManageAccountingFields` | Allows creating, modifying, and deleting accounting fields. |
| `ViewAccountingFields` | Grants read-only access to accounting field settings. |
| `ManageCreditCards` | Allows managing saved credit cards, including adding, editing, and removing cards. |
| `ViewCreditCards` | Grants read-only access to saved credit cards. |
| `PlaceOrders` | Grants the ability to create and submit orders. |
| `ViewMyContractOrders` | Allows the user to view orders placed under the contract they're assigned to. |
| `ViewMyOrgUnitOrders` | Allows the user to view all orders from their organizational unit. |
| `ModifyOrders` | Grants permission to use the order modification feature on all orders the user has access to. |
| `ApproveOrders` | Grants the ability to approve or reject orders based on predefined workflows. |
| `ManageAddresses` | Allows adding a new address during checkout and saving it to the contract or organizational unit. Also allows changing address information at checkout. |
| `ViewAddresses` | Allows the user to view their saved addresses. |
| `UseAdHocCard` | Grants permission to use a new credit card at checkout. |

### Custom storefront permission rules and limits

- Each account can have up to **10 custom permissions**. Predefined permissions don't count toward this limit.
- The name must be 5 to 80 characters long and unique in the account, regardless of letter case.
- The name can't match the name of any predefined permission or role.
- The name works as the permission identifier and can't be changed after the permission is created. To change it, you need to delete the permission and create another one.
- A custom permission can't be deleted while it's in use by at least one role.

## Storefront roles

A **storefront role** defines the set of permissions of a group of store users. Each user can have one or more roles and receives the combined permissions of all of them.

For example, a buyer who places orders and a manager who approves orders need different permissions. In this case, each one receives a role with only the permissions needed for their job.

There are two types of roles:

- **Predefined:** Provided by VTEX to cover the most common use cases and can't be edited or deleted. See the full list in [Predefined storefront roles](#predefined-storefront-roles).
- **Custom:** Created by your account by combining predefined and custom permissions. One example is a **Report Viewer** role, which combines the predefined `ViewUsers` permission and a custom permission that authorizes access to an external reporting service.

### Predefined storefront roles

The following table shows the available predefined roles, with the permissions associated with each one. The **ID** column shows the role identifier used in the API.

| Role | ID | Description | Associated permissions | Availability |
| -------------------------- | -- | ----------------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------- |
| Organizational Unit Admin | 1 | Manages the organization structure, contracts, and related settings. | `ManageOrganizationAndContract`, `ManageUsers`, `ViewUsers`, `ManageBuyingPolicies`, `ViewBuyingPolicies`, `ManageBudgets`, `ViewBudget`, `ManageAccountingFields`, `ViewAccountingFields`, `ManageCreditCards`, `ViewCreditCards` | Admin and API |
| Order Approver | 2 | Can approve or reject orders based on predefined workflows. | `ApproveOrders` | Admin and API |
| Order Modifier | 3 | Can use the order modification feature on all orders they have access to. | `ModifyOrders` | Admin and API |
| Buyer | 4 | Can create and submit orders. | `PlaceOrders` | Admin and API |
| Personal Cards User | 5 | Can use a new credit card at checkout. | `UseAdHocCard` | Admin and API |
| Contract Manager | 6 | Can view orders placed under the contract they're assigned to. | `ViewMyContractOrders` | Admin and API |
| Buyer Organization Manager | 7 | Can view all orders from their organizational unit. | `ViewMyOrgUnitOrders` | Admin and API |
| User Manager | 10 | Can manage users and view the details of users in the organization. | `ManageUsers`, `ViewUsers` | Admin and API |
| Buying Policy Manager | 11 | Can create, edit, and delete buying policies and approval workflows, and view buying policies. | `ManageBuyingPolicies`, `ViewBuyingPolicies` | API only |
| Budget Manager | 12 | Can create, edit, allocate, and delete budgets, and view budget details, allocations, limits, and spending history. | `ManageBudgets`, `ViewBudget` | API only |
| Accounting Field Manager | 13 | Can create, edit, and delete accounting fields, and view the settings of these fields. | `ManageAccountingFields`, `ViewAccountingFields` | API only |
| Super Buyer Admin | 16 | Has full administrative control over the buyer organization structure, including managing organizational units and the hierarchy configuration. | `ManageOrganizationHierarchy` | Admin and API |
| Credit Card Manager | 41 | Can manage and view saved credit cards. | `ManageCreditCards`, `ViewCreditCards` | Admin and API |

> ℹ️ Roles marked as "API only" can only be assigned to users through the [Assign storefront roles](https://developers.vtex.com/docs/api-reference/storefront-roles-api#post-/api/license-manager/storefront/user/roles) or [Assign one storefront role](https://developers.vtex.com/docs/api-reference/storefront-roles-api#post-/api/license-manager/storefront/roles/assign) endpoints.

> ℹ️ On September 21, 2026, the **Address Manager** role (ID `9`) was removed. The `ManageAddresses` and `ViewAddresses` permissions can now only be used in a custom role. Accounts that already had this role were migrated to an equivalent custom role and keep their access.

### Custom storefront role rules and limits

- The name must be unique in the account and can't match the name of any predefined role.
- Unlike custom permissions, roles can be edited after they're created. When you edit a role, the permission changes apply immediately to all users who already have that role.
- A role can't be deleted while it's assigned to at least one user.

Creating roles doesn't assign them to any user. Roles are assigned when you manage the users of the buyer organization. Learn more in [Adding users to buyer organizations](https://help.vtex.com/en/docs/tutorials/adding-users-to-buyer-organizations).

## Auditing

All creations, edits, and deletions of custom roles and permissions are recorded in [Audit](https://help.vtex.com/en/docs/tutorials/audit). The events related to this feature, such as `Create Storefront Custom Role` and `Delete Storefront Custom Resource`, are listed in the License Manager section of the [Events available in Audit](https://help.vtex.com/en/docs/tutorials/events-available-in-audit#license-manager) article.

## Managing custom storefront roles and permissions

You can create, view, edit, and delete custom roles and permissions in the VTEX Admin, on the **Custom permissions** page. To learn about the access requirements, the page components, and the step-by-step instructions for each action, see [Managing custom storefront roles and permissions](https://help.vtex.com/en/docs/tutorials/manage-custom-storefront-roles-and-permissions).

> ℹ️ To manage custom roles and permissions via API, see the [Storefront Roles API](https://developers.vtex.com/docs/api-reference/storefront-roles-api) and the [Custom storefront roles and resources](https://developers.vtex.com/docs/guides/custom-storefront-roles-and-resources) developer guide.

## Learn more

- [Managing custom storefront roles and permissions](https://help.vtex.com/en/docs/tutorials/manage-custom-storefront-roles-and-permissions)
- [Adding users to buyer organizations](https://help.vtex.com/en/docs/tutorials/adding-users-to-buyer-organizations)
- [License Manager resources](https://help.vtex.com/en/docs/tutorials/license-manager-resources)
