---
title: 'Users and roles'
createdAt: 2020-01-07T19:24:22.388Z
updatedAt: 2026-05-21T19:06:00.000Z
contentType: trackArticle
productTeam: Identity
slugEN: users-and-roles
locale: en
trackSlugEN: accounts-and-permissions
order: 2
---

Access control in the VTEX Admin is based on **users** and **roles**, ensuring that each person has access only to the features they need for their tasks.

## Users

An **administrative user** is anyone registered with access to your store Admin. Each user is identified by their email and must have at least one user role assigned.

**What you can do:**

- Create, edit, and delete users
- Assign user roles to users
- Export user list

**Where to manage:** _Account settings > Users_

> ℹ️ Learn more in [Managing administrative users](https://help.vtex.com/docs/tutorials/managing-admin-users).

## Roles

A **user role** is a set of permissions that determines the features a group of users can access on the platform. Permissions are based on **resources** from License Manager.

License Manager checks if the user has the necessary resources to perform each action on VTEX, such as accessing a page or making an API call. Without the appropriate resources, the request is denied.

**Where to manage:** _Account Settings > Roles_

> ℹ️ Learn more in [Roles](/en/docs/tutorials/roles).

### Role types

| Type           | Description                                                                                         | Examples                                                                         | Documentation                                                             |
| -------------- | --------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------- | ------------------------------------------------------------------------- |
| **Predefined** | Ready-to-use profiles offered by VTEX covering the most common use cases.           | Owner (Admin Super), Call Center Operator, Finance, Logistics | [Predefined roles](https://help.vtex.com/docs/tutorials/predefined-roles) |
| **Custom**     | Custom roles created by selecting only the necessary resources for each user group. | Role for Catalog team, profile for marketplace operators                         | [Creating roles](https://help.vtex.com/docs/tutorials/creating-roles)     |

## Sponsor user

Every VTEX account has a single **Sponsor user**, the main person responsible for the store. This user:

- Has full access to all features
- Can perform critical actions (reindex, full cleanup, special authorizations)
- Receives important VTEX communications

> ⚠️ Sponsor user ≠ Owner (Admin Super) role. The Sponsor user is unique per account, while Owner is a role that can be assigned to multiple users.

> ℹ️ Learn more in [Sponsor user](https://help.vtex.com/docs/tutorials/what-is-the-sponsor-user).

## Principle of least privilege

Always apply the **least required privilege**: Each user should have only the roles and resources strictly necessary for their activities. This reduces security risks and improves control.

**Best practices:**

- Limit users with the Owner (Admin Super) role.
- Review accesses and API keys periodically (at least once a year)
- Remove inactive users immediately
- Use corporate emails, not personal ones
- Avoid using shared accounts (example: admin@company.com)
- Require 2FA for all administrative users
- Consider using single sign-on (SSO)

> ℹ️ Learn more in [Best practices for store access management](https://help.vtex.com/docs/tutorials/best-practices-for-store-access-management).

## Learn more

- [Roles](/en/docs/tutorials/roles) - Complete guide to access control
- [Best practices for store access management](https://help.vtex.com/docs/tutorials/best-practices-for-store-access-management)
- [Managing administrative users](/docs/tutorials/managing-admin-users)
- [Creating roles](https://help.vtex.com/docs/tutorials/creating-roles)
- [Predefined roles](https://help.vtex.com/docs/tutorials/predefined-roles)
- [License Manager resources](/en/docs/tutorials/license-manager-resources)
- [Sponsor user](https://help.vtex.com/docs/tutorials/what-is-the-sponsor-user)
- [Transferring store ownership](https://help.vtex.com/docs/tutorials/transferring-store-ownership)
