---
title: 'Site Editor and Media: new authorization requirement'
id: 7tO32uRxIUK8lOp8AvWs2L
status: PUBLISHED
createdAt: 2024-02-26T12:35:10.352Z
updatedAt: 2024-02-26T18:06:13.754Z
publishedAt: 2024-02-26T18:06:13.754Z
contentType: updates
productTeam: VTEX IO
author: 4oTZzwYoyhy1tDBwLuemdG
slugEN: 2024-02-26-site-editor-and-media-new-authorization-requirement
locale: en
legacySlug: site-editor-and-media-new-authorization-requirement
announcementImageID: ''
announcementSynopsisEN: 'Users now require CMS GraphQL API resource for content management. Update user roles accordingly.'
---

As of Monday, March 18th, 2024, all [users](https://developers.vtex.com/docs/guides/api-authentication-using-user-tokens) and [application keys](https://developers.vtex.com/docs/guides/api-authentication-using-application-keys) that need access to [Site Editor](/en/tutorial/site-editor-overview--299Dbeb9mFczUTyNQ9xPe1) and [Media](/en/tutorial/media-overview--31fhjHTt4TBoo50AmGQ9b2) will be required to have the `CMS GraphQL API` License Manager [resource](/en/tutorial/license-manager-resources--3q6ztrC8YynQf6rdc6euk3) added to their [user roles](/tutorial/roles--7HKK5Uau2H6wxE1rH5oRbc) for content management. 

## What has changed?

As [previously announced for Headless CMS users](/announcements/headless-cms-new-authorization-requirement--7G056zzZmGFBztkRqhpUgj), users and application keys must have the `CMS GraphQL API` resource associated with their role to manage content.  

Now, we are extending this requirement to Site Editor and Media, which means the `CMS GraphQL API` resource is necessary to manage content using these tools.

## Why did we make this change?
This change aims to enhance security and simplify user access to the Site Editor and Media. This means users have a more controlled and secure environment when managing store content. 

## What needs to be done?
Ensure that users are associated with the `CMS GraphQL API` resource within their user roles by either [creating a new role](/en/tutorial/roles--7HKK5Uau2H6wxE1rH5oRbc?&utm_source=autocomplete#creating-a-role) or editing an existing one.

<div class="alert alert-warning">
  <p>To manage users and their roles, you need the <code>Save access profile</code> resource from the <bold>License Manager</bold> product associated with your user role. For example, the <a href=”https://help.vtex.com/en/tutorial/predefined-roles--jGDurZKJHvHJS13LnO7Dy#user-administrator-restricted”> User Administrator - RESTRICTED</a> is a predefined role that has the <code>Save access profile</code> resource associated with it.</p>
</div>

