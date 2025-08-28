---
title: 'License Manager: New resources for managing admin users'
id: 6rRaLNUe7mtKW5jGx84Vd4
status: PUBLISHED
createdAt: 2025-08-07T21:36:15.196Z
updatedAt: 2025-08-07T21:50:35.459Z
publishedAt: 2025-08-07T21:50:35.459Z
contentType: updates
productTeam: Identity
author: 1malnhMX0vPThsaJaZMYm2
slugEN: 2025-08-07-license-manager-new-resources-for-managing-admin-users
locale: en
legacySlug: license-manager-new-resources-for-managing-admin-users
announcementImageID: 'undefined'
announcementSynopsisEN: 'We’ve simplified user management with new features in License Manager.'
---

We created two new [resources in License Manager](https://help.vtex.com/en/tutorial/license-manager-resources--3q6ztrC8YynQf6rdc6euk3) to simplify and standardize access control, grouping actions related to administrative user management in the VTEX Admin more intuitively.

## What has changed?

We consolidated legacy reading and writing resources for [user](https://help.vtex.com/en/tutorial/managing-users--tutorials_512) information and [roles](https://help.vtex.com/en/tutorial/roles--7HKK5Uau2H6wxE1rH5oRbc) into two new *License Manager* resources:

| New resource name | New resource key (`resource_key`) | Description |
| ----- | ----- | ----- |
| Edit Admin Users | `EditAdminUsers` | Allows creating, editing, and removing admin users. |
| View Admin Users | `ViewAdminUsers` | Allows viewing user and role information. |

These new resources replace the legacy resources for [managing users](https://help.vtex.com/en/tutorial/managing-users--tutorials_512) in the VTEX Admin:

| Legacy resource name | Legacy resource key (`resource_key`) | Legacy resource description | New resource name | New resource key (`resource_key`) |
| ----- | ----- | ----- | ----- | ----- |
| Get paged users | `Get_Users_Paged` | Allows listing the account's admin users. | View Admin Users | `ViewAdminUsers` |
| Find user by email | `Get_User_By_Identifier` | Allows searching for admin users by email. | View Admin Users | `ViewAdminUsers` |
| Get paged roles | `Get_Roles_Paged` | Allows listing the account roles. | View Admin Users | `ViewAdminUsers` |
| Save user | `Save_User` | Allows creating or editing admin users. | Edit Admin Users | `EditAdminUsers` |
| Remove user | `Remove_User` | Allows revoking admin user access. | Edit Admin Users | `EditAdminUsers` |

## Why did we make this change?

Grouping resources with similar scopes improves traceability, reduces redundancies, and makes it easier to manage permissions based on roles. The change simplifies understanding and controlling which administrative actions each role can perform.

## What needs to be done?

No action is needed. We analyzed existing roles and automatically updated their permissions:

- If a role already had one or more legacy resources, an equivalent new resource was added.  
- No previous permissions were removed.  
- Legacy resources weren't deprecated.

We recommend reviewing the existing roles on your account to understand how the new resources were applied. If you have any questions, see the [License Manager documentation](https://help.vtex.com/en/tutorial/license-manager-resources--3q6ztrC8YynQf6rdc6euk3).

