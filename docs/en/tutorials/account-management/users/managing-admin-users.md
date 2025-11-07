---
title: 'Managing administrative users'
id: tutorials_512
status: PUBLISHED
createdAt: 2017-04-27T22:03:09.608Z
updatedAt: 2024-06-10T18:24:36.901Z
publishedAt: 2024-06-10T18:24:36.901Z
firstPublishedAt: 2017-04-27T23:03:28.211Z
contentType: tutorial
productTeam: Identity
author: authors_4
slugEN: managing-admin-users
legacySlug: creating-users
locale: en
subcategoryId: 63DHe3VQEEE6Uuua8gIs2M
---

User management for your VTEX store’s administrative environment is done under [Account management](/en/docs/tutorials/visao-geral-configuracoes-da-conta--6USYxLuzNt4uAkvjdPF7I8) on the **Users** page. To access the page, click your **profile avatar** on the VTEX Admin top bar (the circle with the initial of your email) and click **Account settings** > **Users**.

This page allows you to: 

* [Create a user](#creating-a-new-user)
* [Edit a user](#editing-a-user)
* [Delete a user](#deleting-a-user)
* [Export users](#exporting-users)

![](https://cdn.statically.io/gh/vtexdocs/help-center-content/refs/heads/main/docs/en/tutorials/account-management/users/managing-admin-users.png)

The table on the page shows: 

| Columns | Description |
| :---- | :---- |
| Email | Email address of the admin user registered in the VTEX Admin. |
| Roles | Roles associated with the admin user. |
| MFA | Multi-factor authentication (MFA) configuration. The status can be *Inactive* or show the configured method (*SMS* or *Authenticator*). Learn more in [Enable two-factor authentication login](/en/docs/tutorials/habilitar-login-por-autenticacao-de-2-fatores--4Ae1fcQi12g8u4SkQKCqWQ). |

The search bar lets you search by users’ email addresses and displays results in real time.

## Requirements

To manage admin users, you need to have a [role](/en/docs/tutorials/roles) with the following [License Manager resources](/en/docs/tutorials/license-manager-resources):

| Resource name | Resource key (resource_key) | Description |
| :---- | :---- | :---- |
| Edit Admin Users | EditAdminUsers | Allows creating, editing, and removing admin users. |
| View Admin Users | ViewAdminUsers | Allows viewing user information and roles. |

## Creating a new user

To add someone to the VTEX Admin, register their email and assign the appropriate roles. Follow the steps below to complete the process:

1. In the VTEX Admin top bar, click your profile avatar (the circle with your email initial), then go to **Account settings** > **Users**.
2. Click the `+ New` button.
3. Complete the **Email** field.
4. Select the desired [Roles](/en/docs/tutorials/roles).
5. Click `Save`.

The user will receive an email confirming the information was received, with a link to set the password. The password must be at least eight characters and include a number, an uppercase letter, and a lowercase letter. After the password is set, an access key will be sent by email to confirm the account.

## Editing a user

If you need to adjust access permissions or update the roles of an existing user, edit the user as follows.

Apply the principle of least privilege: assign each user only the roles and resources that are strictly necessary for their daily activities. This minimizes security risks and helps maintain tighter control over the environment.

1. In the VTEX Admin top bar, click your **profile avatar** (the circle with your email initial), then go to **Account settings** > **Users**.
2. To edit an existing user, click the ⋮ menu button on the user’s row and select **Edit**.
   You can’t change the email of a registered user. If needed, delete the existing record and create a new one.
3. On the edit screen, you can add or remove the user [roles](/en/docs/tutorials/roles).
4. After making the desired changes, click `Save`.

> ℹ️ An alert will be displayed when adding roles to a user who doesn’t use multi-factor authentication (MFA). The article [Enable login by 2-factor authentication](/en/docs/tutorials/enabling-2-factor-authentication-login) shows how to enable this setting.

> ⚠️ If you remove all roles from a user, they will no longer have access to the VTEX Admin.

## Deleting a user

When a team member should no longer access the VTEX Admin, you must remove their user account. Follow the steps below to complete this removal safely.

1. In the VTEX Admin top bar, click your **profile avatar** (the circle with your email initial), then go to **Account settings** > **Users**.
2. Click the menu <i class="fas fa-ellipsis-v"></i> button next to the user you want to remove.
3. Click **Delete**.

   A message will appear to confirm the removal of the user.
4. To confirm, click `Yes, revoke all access`.

## Exporting users

To view or save a list of all admin users, you can export the data as a CSV file. See below how to generate this report:

1. In the VTEX Admin top bar, click your **profile avatar** (the circle with your email initial), then go to **Account settings** > **Users**.
2. To export user data, click <i class="fas fa-download"></i> `Export`.

The CSV download starts automatically. The file includes each user’s ID, email, roles, and MFA configuration.

## Learn more

* [Account settings overview](/en/docs/tutorials/account-settings-overview)
* [Roles](/en/docs/tutorials/roles)
* [License Manager resources](/en/docs/tutorials/license-manager-resources)
* [Enable login by 2-factor authentication](/en/docs/tutorials/enabling-2-factor-authentication-login)
