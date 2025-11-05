---
title: 'Site Editor: Fixed content loss issue'
id: 1mnrlSMyMmU1iAUyEquVYB
status: PUBLISHED
createdAt: 2024-06-13T12:25:13.359Z
updatedAt: 2024-06-13T13:29:05.308Z
publishedAt: 2024-06-13T13:29:05.308Z
contentType: updates
productTeam: VTEX IO
author: 4oTZzwYoyhy1tDBwLuemdG
slugEN: 2024-06-13-site-editor-fixed-content-loss-issue
locale: en
legacySlug: site-editor-fixed-content-loss-issue
announcementImageID: 'undefined'
announcementSynopsisEN: 'Site Editor content storage received an upgrade for better performance and reliability.'
---

On June 12, [Site Editor](/en/tutorial/site-editor-overview--299Dbeb9mFczUTyNQ9xPe1) content storage was updated for all accounts that use it in order to address a known issue: [Intermittent Site Editor content loss](/en/known-issues/intermitent-site-editor-content-loss--3a5MlAoD2Z7Gu6HDS8wihD). This upgrade improves storage performance, reliability, and reduces the size of your stored content.
## What has changed?
Previously, frequent content changes in Site Editor could cause the `content.json` file to become excessively large, leading to content loss when [promoting a production workspace to master](https://developers.vtex.com/docs/guides/vtex-io-documentation-workspaces-best-practices#deployment-and-workspace-promotion) or installing a new theme version in a test workspace.

We have now improved the storage architecture and file partitioning solution for Site Editor. The improvement solution stores content in smaller, template-specific files, instead of a single large file. This change reduces file size by approximately 90%, reducing storage needs per page, and enhancing overall performance and content delivery.

## What needs to be done?
No action is needed. The upgrade was automatically implemented in all VTEX stores using Site Editor.

If you continue to experience content loss after June 12, open a ticket with [VTEX Support](/en/support).

