---
title: 'Store Framework CMS: New permission required to manage pages'
id: cmXeUFIT80GmIW6mRuFRu
status: PUBLISHED
createdAt: 2024-12-16T22:39:00.938Z
updatedAt: 2024-12-17T14:49:26.018Z
publishedAt: 2024-12-17T14:49:26.018Z
contentType: updates
productTeam: VTEX IO
author: 4oTZzwYoyhy1tDBwLuemdG
slugEN: 2024-12-16-store-framework-cms-new-permission-required-to-manage-pages
locale: en
legacySlug: store-framework-cms-new-permission-required-to-manage-pages
announcementImageID: 'undefined'
announcementSynopsisEN: 'Managing pages in Store Framework CMS requires a role with the "CMS Settings" resource.'
---

[Pages](/en/docs/tutorials/pages-overview) is a Store Framework CMS feature that manages all URL routes and corresponding page templates of your store’s website, such as home, product, and login page. For security purposes, we now require Admin users to have specific permission to manage the routes and page templates with this feature.

> ⚠️ As [announced before](/en/announcements/2023-08-31-new-permission-required-to-manage-redirects-in-store-framework-cms), the `CMS Settings` role was already required to manage redirects with Store Framework CMS.

## What has changed?

To allow Admin users to create, edit, and remove URL routes and corresponding page templates, they must have a role with the [License Manager](/en/docs/tutorials/license-manager-resources) **CMS Settings** resource.

## Why did we make this change?

We added this required permission for security purposes. Thus, only Admin users who have been explicitly authorized will have access to the **Pages** feature, preventing unauthorized users from creating, editing, and removing pages.

## What needs to be done?

For an existing Admin user to be able to manage URL routes and corresponding page templates in the Store Framework CMS, they need to be assigned a user role that includes the **CMS Settings** resource. Check the instructions for editing a user's role in the [How to manage users](/en/docs/tutorials/managing-admin-users#editing-users) article.

If you want to use a customized role, you can create a new role or edit an existing one to include the **CMS Settings** resource. Check the instructions for creating and editing roles in the [Roles](/en/docs/tutorials/roles#creating-a-role) article.

