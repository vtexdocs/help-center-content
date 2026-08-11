---
title: 'VTEX CX Platform: Overview'
createdAt: 2026-03-31T15:33:34.931Z
updatedAt: 2026-08-11T00:00:00.000Z
contentType: tutorial
productTeam: Post-purchase
slugEN: vtex-cx-platform-overview
locale: en
---

> ℹ️ To learn about VTEX CX Platform and implement it in your business, [schedule a demo](https://www.vtex.com/en-us/products/cx_platform/).

**VTEX CX Platform** is the conversational commerce solution that allows you to create autonomous artificial intelligence (AI) agents to work across the entire customer journey, from first contact to post-purchase. These agents run actions directly in your operation, such as checking order status, applying promotions, completing purchases, and recovering abandoned carts.

The platform connects natively to your commerce operation, including orders, catalog, checkout, and promotions. This gives agents access to real-time data and allows them to resolve customer requests end-to-end in a single conversation, across channels like WhatsApp, webchat, voice, email, and social media.

## Features

See some of the features of **VTEX CX Platform**:

- **Autonomous agents** plan and run complex tasks without relying on fixed, predefined flows.
- **Product concierge** recommends items based on the catalog, inventory, and promotions in real time.
- **Order tracking** provides real-time status through native access to the OMS.
- **Exchanges, returns, and cancellations** are resolved end-to-end without human intervention.
- **Abandoned cart recovery** re-engages the customer with product context and direct checkout in the conversation.
- **In-chat payment** completes the purchase without leaving the conversation, with Pix (Brazil), credit, or debit.
- **Conversational campaigns** promote reactivation, restocking, and upselling through messages with approved templates.
- **Analytics** provides data and metrics about support and operation results.

This tutorial helps you navigate the platform and is divided into the following sections:

- [Sign up and log in](#sign-up-and-log-in)
- [Create organization and project](#create-organization-and-project)
- [Access profile](#access-profile)
- [Permission system](#permission-system)
- [Change platform language](#change-platform-language)

## Sign up and log in

When you access the platform, you can create a free account or log in to an existing account.

To create a free account, follow the steps below:

1. Go to [VTEX CX Platform](https://accounts.weni.ai/auth/realms/weni/login-actions/registration?client_id=weni-webapp&tab_id=GrzDdSDmT-8&client_data=eyJydSI6Imh0dHBzOi8vZGFzaC53ZW5pLmFpL3Byb2plY3RzLzZjZjZiODIzLTFkYjktNDg5Ny04NTFmLWM2OTZlOTkxMjA2NS9zZXR0aW5ncy9wcm9qZWN0L3IvaW5pdCIsInJ0IjoiY29kZSIsInJtIjoiZnJhZ21lbnQiLCJzdCI6IjcwOGI1OTA4LTcwMTktNDcxMi05YTQ5LWY3OGRhMTM5MGM2OCJ9).
2. Enter your email and the password you want to use.
3. Click `Create account`.

You can also sign up using the following providers: **GitHub**, **Google**, and **Microsoft**.

If you completed the sign-up or received an invitation to an organization but don't have an account on the platform yet, fill in the fields displayed on the screen and click `Next`.

To log in to an existing account, follow the steps below:

1. Go to [VTEX CX Platform](https://accounts.weni.ai/auth/realms/weni/protocol/openid-connect/auth?client_id=weni-webapp&redirect_uri=https%3A%2F%2Fdash.weni.ai%2Fprojects%2F6cf6b823-1db9-4897-851f-c696e9912065%2Fsettings%2Fproject%2Fr%2Finit&state=708b5908-7019-4712-9a49-f78da1390c68&response_mode=fragment&response_type=code&scope=email%20profile%20openid%20offline_access&code_challenge=FEKSvKUaU81i_zufbxFiZg40t-efyp6Krh2xutDxkSY&code_challenge_method=S256).
2. Enter your email and password.
3. Click `Log in`.

If you signed up with **GitHub**, **Google**, or **Microsoft**, select one of these options to log in.

### Fill in organization and project data

> ℹ️ If your organization already exists and you were invited to it, fill in the fields with placeholder names just to register on the platform. You don't need to use the actual company names.

After filling in the fields, click `Next`.

Then choose between creating a custom agent or using a template.

To create a custom agent, fill in the fields below:

1. **Agent name**: Agent name, such as "Support".
2. **Goal**: Agent goal, such as "Answer customer questions".

> ℹ️ Define clearly the main goal of your agent when interacting with customers, for example: "Help customers find products that meet their needs" or "Provide technical support". This guides the conversations in a direct and assertive way.

3. **Content**: Agent base content. Filling in the content is optional during sign-up and can be added later.

> ℹ️ By including a content base, you enable your smart agent to respond to users more effectively. You can import essential information by dragging and dropping files, with the text integrated automatically, inserting content from websites.

Templates are ready-made flows with specific purposes, divided into three categories: support, integrations, and sales. When you click on one of the category cards, you'll see a pop-up detailing the template's use.

> ℹ️ If you choose a template, click the corresponding tab and select one of the available templates.

Click `Complete` to continue.

## Create organization and project

To create a new organization, follow these steps:

1. On the VTEX CX Platform home page, click <i class="fas fa-plus" aria-hidden="true"></i>`Create organization`.
2. Enter a name for your organization, the organization description, and the project name.
3. Click `Continue`.
4. In the project configuration step, you can choose between **Create a custom agent** or **Use template**.

To create a custom agent, follow these steps:

1. Fill in the agent name and the agent's goal.
2. Then click <i class="fas fa-plus" aria-hidden="true"></i>`Add content`.
  - In this field, you can add information that the agent will use in your project, such as catalog files or your store's website. Then click `Finish`.
  - This step is optional when creating an organization and content can be added later.
3. Click `Complete`.

Templates are ready-made flows with specific purposes, divided into three categories: **Support**, **Integrations**, and **Sales**.

To use a template, follow these steps:

1. Select one of the templates, such as _Support_ or _Lead Capture_, to see more information.
2. Click `Use template` to activate the template.
3. Fill in the project description.
4. Click `Complete`.

After creating a custom agent or choosing a template, the last step is complete. To enter your project, click `Get started`.

> ℹ️ After creating the organization and project, include your team by configuring permissions. People added to the organization will have access to all projects created within it. To learn more, see the [Permission system](#permission-system) section.

To learn how to add or manage organization or project members, see the article [Manage VTEX CX Platform members](https://help.vtex.com/en/docs/tutorials/manage-vtex-cx-platform-members).

## Change platform language

To change the language, follow these steps:

1. Click your username.
2. Click `Language`.
3. Choose one of the languages.
  - Currently, the platform offers four language options: **English**, **Español**, **Português (Brasil)**, and **Română**.

> ℹ️ If the platform doesn't change the language, you can log out and log back in or restart your browser.

## Access profile

The **Profile** section allows you to manage your account and edit personal, security, and notification preferences.

In the **Profile** tab, you can change your first name, last name, profile picture, contact number, and password.

In **Preferences**, you select which emails you want to receive from VTEX CX Platform.

In **Privacy and security**, you can enable two-factor authentication by following these steps:

1. Click your username.
2. Click `Profile`.
3. Select the **Privacy and security** section.
4. Turn on the `Enable authentication` toggle.
5. Click `Save changes`.

After saving, you're automatically logged out of the platform.

When you log in again, follow these steps:

1. Open your authenticator app and scan the QR code displayed on the screen.
2. On the platform, enter the one-time code that appears in the app.
3. Click `Save` to complete the configuration.

> ℹ️ From then on, logging in will require the verification code displayed in your authenticator app.

### Authentication requirement in the organization

To add an extra layer of security to your organization's projects and data, you can allow only users with two-factor authentication enabled to enter the organization.

To require two-factor authentication in the organization, follow these steps:

1. Click the <i class="fas fa-ellipsis-v" aria-hidden="true"></i> icon on the organization card.
2. Click `Settings`.
3. Select the **Security** tab.
4. In **Two-factor authentication**, turn on the **Enable authentication** toggle.
5. Finally, click `Save changes`.

## Permission system

In VTEX CX Platform, you can manage different permissions for each user, divided into two groups:

- [Organization permissions](#organization-permissions)
- [Project permissions](#project-permissions)

### Organization permissions

These permissions can be added during organization creation or at any time through the organization settings icon.

Organization permissions are described below:

- **Admin:** has full access to the platform and can add new members or change existing members' permissions.
- **Finance:** accesses only the billing area.
- **Contributor:** can create new projects and edit content.
- **Marketing:** accesses only the **Contacts** module and can send message templates.

> ⚠️ Organization permissions apply to all projects within it.

### Project permissions

You can also add permissions to a specific project, not necessarily to the entire organization. To access the options, click `Manage members` in the desired project.

Project permissions are as follows:

- **Moderator:** has full admin access to a project. Can make any changes or configurations to the project.
- **Contributor:** can edit content (for example, flows, instructions, message templates).
- **Viewer:** only reads information, such as flows, contacts, messages, but cannot edit them.
- **Marketing:** has access to the **Campaigns** and **Contacts** modules to configure and manage campaign sends with templates.
- **Human support:** exclusive permission for human agents. Only has access to the **Live Desk** module.

> ⚠️ A project's permissions apply specifically to the project and may differ from organization permissions. For example, if a user has Admin permission in the organization and Viewer permission in a project, they can make changes throughout the organization, except in the project where they were designated as Viewer. In that project, they can't edit information, only view it.
