---
title: 'Store Framework CMS: New permission required to manage redirects'
id: 1GcT48ML2w6TZQxQyGbD6W
status: PUBLISHED
createdAt: 2023-08-31T18:10:04.246Z
updatedAt: 2023-09-05T16:32:32.516Z
publishedAt: 2023-09-05T16:32:32.516Z
contentType: updates
productTeam: VTEX IO
author: 4ubliktPJIsvyl1hq91RdK
slugEN: 2023-08-31-new-permission-required-to-manage-redirects-in-store-framework-cms
locale: en
legacySlug: store-framework-cms-new-permission-required-to-manage-redirects
announcementImageID: 'undefined'
announcementSynopsisEN: 'Creating redirects in the Store Framework CMS requires a role with the "CMS Settings" resource.'
---

**Redirects** is a Store Framework CMS feature that automatically redirects a store user to an internal or external page when they visit a specific page. For security purposes, we now require Admin users to have specific permission to create redirects.

## What has changed?

To allow Admin users to create, edit, and remove redirects in the CMS, they must have a role with the [License Manager](/en/tutorial/license-manager-resources--3q6ztrC8YynQf6rdc6euk3) **CMS Settings** resource.

## Why did we make this change?

We added this required permission for security purposes. Thus, only Admin users who have been explicitly authorized will have access to the **Redirects** feature, preventing unauthorized users from creating, editing, and removing redirects.

## What needs to be done?

For an existing Admin user to be able to manage redirects in the Store Framework CMS, they need to be assigned a user role that includes the **CMS Settings** resource. Check the instructions for editing a user's role in the [How to manage users article](/en/docs/tutorials/managing-admin-users#editing-users).

If you want to use a customized role, you can create a new role or edit an existing one to include the **CMS Settings** resource. Check the instructions for creating and editing roles in the [Roles](/en/tutorial/roles--7HKK5Uau2H6wxE1rH5oRbc#creating-a-role) article.

Learn more about redirects in the [Managing URL redirects](/en/tutorial/managing-url-redirects--3UJuFrU8imSVWg134mkvJV) article.
