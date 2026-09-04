---
title: 'Managing user access to AI Workspace (Beta)'
createdAt: 2026-08-11T00:00:00.000Z
updatedAt: 2026-08-11T00:00:00.000Z
contentType: tutorial
productTeam: Identity
slugEN: managing-user-access-to-ai-workspace
locale: en
---

> ℹ️ This feature is only available for accounts using AI Workspace. Otherwise, see [Managing administrative users](https://help.vtex.com/docs/tutorials/managing-admin-users).

AI Workspace agents act on behalf of users and can chain calls to multiple services, with permissions that vary depending on who triggers them. That's why defining which agents each user can access is essential for account governance.

For accounts with AI Workspace, the **Users** page in the VTEX Admin lists all administrative users and the agents each one can access, and also allows individual access management. This ensures that each person interacts only with the agents relevant to their role.

![Administrative users page with the Email, Roles, Agents, and MFA columns](https://cdn.statically.io/gh/vtexdocs/help-center-content/refs/heads/main/docs/pt/tutorials/beta/ai-workspace-beta/gerenciar-acesso-de-usuarios-ao-ai-workspace_1.png)

The page displays the following information in a table:

| Column | Description                                                                                                                                                                                                                                                                                                                                        |
| :----- | :------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Email  | Email of the existing admin user registered in the VTEX Admin.                                                                                                                                                                                                                                                                     |
| Roles  | Roles associated with the admin user.                                                                                                                                                                                                                                                                                              |
| Agents | AI Workspace agents the user has access to.                                                                                                                                                                                                                                                                                        |
| MFA    | Multi-factor authentication (MFA) configuration, which can be _Inactive_ or display the configured method (_SMS_ or _Authenticator_). Learn more in [Enabling two-factor authentication login](https://help.vtex.com/docs/tutorials/enabling-2-factor-authentication-login). |

## Requirements

To manage admin users, you need to have a [role](https://help.vtex.com/docs/tutorials/roles) that contains the following [License Manager resources](https://help.vtex.com/docs/tutorials/license-manager-resources):

| Resource name    | Resource key (resource_key) | Description                                                         |
| :--------------- | :------------------------------------------------------------------ | :------------------------------------------------------------------ |
| Edit Admin Users | EditAdminUsers                                                      | Allows creating, editing, and removing admin users. |
| View Admin Users | ViewAdminUsers                                                      | Allows viewing user and roles information.          |

## Creating a user with access to AI Workspace

To add a new user and set their access to AI Workspace, follow the steps below:

1. In the top bar of the VTEX Admin, click your profile avatar — indicated by the first letter of your email — and then click **Account Settings > Users**.
2. Click **New**.
3. In the **Email** field, enter the new user's email address.
4. In **Access scope**, click the **AI Workspace** tab.
5. In the **Agents** section, select the agents the user can access.

   > ℹ️ To see which resources each agent uses on behalf of the user, hover over **Resources** next to the agent.
6. Click **Create**.

![Screen for creating a new user with the AI Workspace tab selected and agents checked](https://cdn.statically.io/gh/vtexdocs/help-center-content/refs/heads/main/docs/pt/tutorials/beta/ai-workspace-beta/gerenciar-acesso-de-usuarios-ao-ai-workspace_2.png)

## Editing existing user access

If you need to adjust the available agents for an existing user, edit the user following the instructions below:

1. In the top bar of the VTEX Admin, click your profile avatar — indicated by the first letter of your email — and then click **Account Settings > Users**.
2. In the row of the desired user, click **⋮ > Edit**.
3. In **Access scope**, click the **AI Workspace** tab.
4. In the **Agents** section, select or deselect the agents as needed.

   > ℹ️ To see which resources each agent uses on behalf of the user, hover over **Resources** next to the agent.
5. Click **Save**.

![Screen for editing an existing user with the AI Workspace tab selected](https://cdn.statically.io/gh/vtexdocs/help-center-content/refs/heads/main/docs/pt/tutorials/beta/ai-workspace-beta/gerenciar-acesso-de-usuarios-ao-ai-workspace_3.png)

> ℹ️ To delete users, export the user listing, or manage access to VTEX Admin resources, see [Managing admin users](https://help.vtex.com/docs/tutorials/managing-admin-users).
