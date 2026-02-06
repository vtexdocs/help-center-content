---
title: 'The Owner (Admin Super) user role no longer has permission to create users'
id: 5OpVXwzX5NWqTkVZ7QLMBd
status: PUBLISHED
createdAt: 2023-02-03T14:49:10.763Z
updatedAt: 2023-02-06T14:08:09.172Z
publishedAt: 2023-02-06T14:08:09.172Z
contentType: updates
productTeam: Identity
author: 2Gy429C47ie3tL9XUEjeFL
slugEN: 2023-02-03-the-owner-admin-super-user-role-no-longer-has-permission-to-create-users
locale: en
legacySlug: undefined
announcementImageID: 'undefined'
announcementSynopsisEN: 'The Owner (Admin Super) role no longer includes the Save user resource, related to user management capabilities.'
---

**Owner (Admin Super)** is a [user role](/en/docs/tutorials/roles) that encompasses virtually all the [features](/en/docs/tutorials/license-manager-resources) needed to access information and perform day-to-day tasks in your VTEX store.

In order to improve our security practices, we redefined the platform default permissions for our users and app keys. App keys are equivalent to passwords and should be protected accordingly.

These measures aim to make it easier for merchants to restrict the number of users that have access to the **Save user** feature, which provides more control over sensitive actions and therefore more security for your VTEX store.

## What has changed?

 As of today, the **Owner (Admin Super)** [user role](/en/docs/tutorials/roles) will no longer have the **Save user** [resource](/en/docs/tutorials/license-manager-resources). This means that users who have only this role will no longer be able to:
- [Create users](/en/docs/tutorials/managing-admin-users).
- Assign [user roles](/en/docs/tutorials/roles) to users.
- Remove [user roles](/en/docs/tutorials/roles) from users.
- [Edit user data](/en/docs/tutorials/managing-admin-users#editando-usuarios).
- Create [application keys](/en/docs/tutorials/api-keys).
- Create [application keys](/en/docs/tutorials/api-keys).

In addition, VTEX is now offering the **User Administrator - RESTRICTED** user role, which includes only the **Save user** resource described above.

## Why did we make this change?

This action was necessary to reduce the chances of any malicious changes to the platform settings performed through fraudulent means, such as changes to checkout and admin user management.

From now on, the app keys and admin roles will have even more restricted permissions by default, and some actions like creating user and app keys will be restricted to specific roles. This will enable our clients to better monitor and control who can do what in the VTEX platform.

We know that these changes will have an impact on our customers’ operations, although adopting security best practices is always necessary and a benefit for our entire ecosystem.

## What needs to be done?

This change impacts the permission management of [users](#users) and [application keys](#application-keys) differently.

### Users

The **User Administrator - RESTRICTED** role will automatically be assigned to all users with the **Owner (Admin Super)** role. Therefore, existing users will not lose permissions, as they will have both roles.

However, we recommend that you review your store users and remove the **User Administrator - RESTRICTED** role from each user who does not need to perform the actions associated with the **Save user** resource described above.

Users who are henceforth given the **Owner (Admin Super)** user role will not have access to the **Save user** feature and will not be able to perform its associated actions, such as creating and changing users and application keys.

If you want any user in your store to be able to perform the actions associated with the **Save user** resource, make sure that this user has the **User Administrator - RESTRICTED** role or create a [custom user role](/en/docs/tutorials/roles#tipos-de-perfis) that includes the **Save user** resource.

### Application Keys
Application keys with the **Owner (Admin Super)** role will not automatically be granted the **User Administrator - RESTRICTED** role.  Therefore, if you want any application key to be able to perform the actions associated with the above **Save user** feature, make sure that this key has the **User Administrator - RESTRICTED** role or create a [custom role](/en/docs/tutorials/roles#tipos-de-perfis) that includes the **Save user** resource.

> ⚠️ Note that with the changes described above, application keys no longer have the **Save user** resource, so a user with access to this feature must grant it, if needed.

## How to protect your store app keys?

By following our [best practices for using application keys](/en/docs/tutorials/best-practices-api-keys).

Incidents happen when the application keys of our clients are exposed on the internet or obtained via phishing. The leak of application keys can happen in many scenarios, for example:

- App keys included in the source code and made available in public repositories.
- Sharing keys via non-secure means such as email groups, Slack channels, or other similar communication systems.
- Sharing keys with third parties.
- Misuse or abuse of keys by employees or contractors.
- Lack of frequent review and rotation of keys.
- Lack of frequent review of admin users and privileges.

We reinforce the importance of periodically changing all user passwords and application keys, as well as constantly reviewing the users who have access to the platform.

## Learn more

Check out the following documentation to learn more about managing users and permissions in your store:
- [Roles](/en/docs/tutorials/roles)
- [License Manager resources](/en/docs/tutorials/license-manager-resources)
- [How to manage users](/en/docs/tutorials/managing-admin-users)
- [Application Keys](/en/docs/tutorials/api-keys)
- [Best practices for using application keys](/en/docs/tutorials/best-practices-api-keys)

