---
title: 'Headless CMS: new authorization requirement '
id: 7G056zzZmGFBztkRqhpUgj
status: PUBLISHED
createdAt: 2024-02-02T12:34:37.766Z
updatedAt: 2024-02-02T14:14:58.237Z
publishedAt: 2024-02-02T14:14:58.237Z
contentType: updates
productTeam: VTEX IO
author: 4oTZzwYoyhy1tDBwLuemdG
slugEN: 2024-02-02-headless-cms-new-authorization-requirement
locale: en
legacySlug: headless-cms-new-authorization-requirement
announcementImageID: ''
announcementSynopsisEN: 'Users now require CMS GraphQL API resource for content management. Update user roles accordingly.'
---

As of February 15, all [users](https://developers.vtex.com/docs/guides/api-authentication-using-user-tokens) and [application keys](https://developers.vtex.com/docs/guides/api-authentication-using-application-keys) that need access to Headless CMS will be required to have the `See CMS menu on the top-bar` and `Settings` License Manager [resources](https://help.vtex.com/en/tutorial/license-manager-resources--3q6ztrC8YynQf6rdc6euk3) added to their [user roles](https://help.vtex.com/tutorial/roles--7HKK5Uau2H6wxE1rH5oRbc). For content management in the Headless CMS, they must also have the `CMS GraphQL API` [resource](https://help.vtex.com/en/tutorial/license-manager-resources--3q6ztrC8YynQf6rdc6euk3). This requirement applies to Headless CMS API and VTEX Admin.

## What has changed?
Previously, users and application keys could manage store content on Headless CMS
 without having a specific License Manager resource associated with their role.

Now, any request via Headless CMS API or VTEX Admin will authenticate the user and verify if they have the required resources associated with their role.  
The `See CMS menu on the top-bar` and `Settings` resources grant access to Headless CMS. For content management, users also need to have the `CMS GraphQL API` resource. Without this resource, users are restricted from content management within the Headless CMS.

## Why did we make this change?
This change aims to enhance security and simplify user access to the Headless CMS. This means users have a more controlled and secure environment when managing store content. 

## What needs to be done?
Ensure that Headless CMS users are associated with the `CMS GraphQL API`, `See CMS menu on the top-bar` and `Settings` resources within their user roles by either [creating a new role](#creating-a-new-role) or [editing an existing one](#editing-a-role).

<div style="background-color:#FFF3CD; border-left: 2px solid #F0AD4E; border-top-left-radius: 2px; border-bottom-left-radius: 2px; padding: 15px; margin-bottom: 35px">
  <p>To manage users and their roles, you need the <code>Save access profile</code> resource from the <b>License Manager</b> product associated with your user role. For example, the <a href="https://help.vtex.com/pt/tutorial/predefined-roles--jGDurZKJHvHJS13LnO7Dy#user-administrator-restricted">User Administrator - RESTRICTED</a> is a predefined role that has the <code>Save access profile</code> resource associated with it.</p>

</div>

### Creating a new role

If you have not created a specific role for Headless CMS users yet or wish to create one, refer to the [Creating a role](https://help.vtex.com/en/tutorial/roles--7HKK5Uau2H6wxE1rH5oRbc?&utm_source=autocomplete#creating-a-role) guide. Ensure that you associate the role with the `CMS GraphQL API`, `See CMS menu on the top-bar` and `Settings` resources in the **Products and Resources** section.

### Editing a role

If you need to edit an existing role for Headless CMS users, follow these instructions:

1. Access the VTEX Admin.
2. Click on your profile avatar on the VTEX Admin top bar, marked by the initial of your email, and click on **Account settings > User roles**.
3. Click on the **Role name** that the Headless CMS users have assigned to them.

<div style="background-color:#cfe2ff; border-left: 2px solid #084298; border-top-left-radius: 2px; border-bottom-left-radius: 2px; margin-bottom: 10px; padding: 15px">
  <p>Given the option to create custom roles, they may differ based on the store's configuration, and each store can define its specific role for Headless CMS users.</p>
</div>

4. On the **Edit Role** page, navigate to the **Products and Resources** section.
5. Locate the **CMS** product and click on it.
6. Select the `CMS GraphQL API`, `See CMS menu on the top-bar` and `Settings` resources.
7. Click `Save`.
