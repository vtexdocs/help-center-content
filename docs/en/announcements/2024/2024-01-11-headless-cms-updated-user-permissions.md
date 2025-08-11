---
title: 'Headless CMS: updated user permissions'
id: 6EvqWHQ2akp2dpdjChGJcy
status: DRAFT
createdAt: 2024-01-11T18:15:47.624Z
updatedAt: 2024-01-11T18:21:20.966Z
publishedAt: undefined
contentType: updates
productTeam: VTEX IO
author: 4oTZzwYoyhy1tDBwLuemdG
slugEN: 2024-01-11-headless-cms-updated-user-permissions
locale: en
legacySlug: headless-cms-updated-user-permissions
announcementImageID: 'undefined'
announcementSynopsisEN: ''
---

To effectively manage store content in the Headless CMS, users must now have the `CMS GraphQL API` resource associated with their [user roles](https://help.vtex.com/en/tutorial/roles--7HKK5Uau2H6wxE1rH5oRbc).

## What has changed
Previously, users with Headless CMS access could manage store content without specific resource associations.

Now, any request sent to the Headless CMS API will authenticate the user and verify their permissions via the associated `CMS GraphQL API` resource. Without this resource, users won’t be able to manage content within the Headless CMS.
## Why did we make this change

## What needs to be done
Ensure Headless CMS users have the `CMS GraphQL API` resource connected to their user roles. If not, take the following steps:

Associating `CMS GraphQL API` resource to a role:

Creating a new role
{Link to the official doc}

