---
title: 'New access control (ACL) in B2B Suite'
id: 2X2FQV6w21L2EkmGEgGGh9
status: PUBLISHED
createdAt: 2025-11-03T17:30:37.645Z
updatedAt: 2025-11-04T12:34:24.479Z
publishedAt: 2025-11-04T12:34:24.479Z
contentType: updates
productTeam: Others
author: 2AhArvGNSPKwUAd8GOz0iU
slugEN: 2025-11-03-new-access-control-acl-in-b2b-suite
locale: en
legacySlug: new-access-control-acl-in-b2b-suite
announcementImageID: 'undefined'
announcementSynopsisEN: 'Implementation of access control (ACL) in B2B Suite, with new permissions for user and organization management.'
---

As of November 4, 2025, the **B2B Suite** now features a new permission-based access control (ACL Access Control List). This update improves the security and management of users and purchasing organizations, ensuring that only authorized [roles](/en/tutorial/perfis-de-acesso--7HKK5Uau2H6wxE1rH5oRbc) can view or edit store information.

With the new model, access to **buyer organizations**, **cost centers**, and **users** in the VTEX Admin now depends on specific permissions.

## What has changed?
Previously, any user with access to the VTEX Admin could view and edit purchasing organization information.

Now, with the new **Access Control List (ACL)**, only users with the required [Licence Manager](/en/tutorial/recursos-do-license-manager--3q6ztrC8YynQf6rdc6euk3) permissions can perform these actions.

The available permissions are:

- **buyer_organization_view**: Allows viewing organizations, cost centers, and users.
- **buyer_organization_edit**: Allows creating, editing, and deleting organizations, cost centers, and users.

Both permissions can be configured in **Buyer Organizations > Management** when editing **User Roles** in the VTEX Admin.

## What needs to be done?
To enable the new access control, update the **B2B Suite apps** to a compatible version. 

For more information, see the [Enabling an access control list (ACL) in B2B Suite](https://developers.vtex.com/docs/guides/enabling-an-access-control-list-acl-in-b2b-suite) documentation.

