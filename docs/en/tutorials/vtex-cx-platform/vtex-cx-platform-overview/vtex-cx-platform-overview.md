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

**VTEX CX Platform** is the conversational commerce solution that allows you to create autonomous artificial intelligence (AI) agents to operate across the entire customer journey, from first contact to after-sales. These agents perform actions directly in your operation, such as checking order status, applying promotions, completing purchases, and recovering abandoned carts.

The platform connects natively to your commerce operation, including orders, catalog, checkout, and promotions. This gives agents access to real-time data and allows them to resolve customer requests end-to-end in a single conversation across channels such as WhatsApp, webchat, voice, email, and social media.

## Features

Check out some of the features of **VTEX CX Platform**:

- **Autonomous agents** plan and execute complex tasks without relying on fixed, predefined flows.
- **Product concierge** recommends items based on the catalog, inventory, and real-time promotions.
- **Order tracking** provides real-time status through native access to the OMS.
- **Exchanges, returns, and cancellations** are resolved end-to-end, with no human intervention.
- **Abandoned cart recovery** re-engages the customer by providing product context and enabling direct checkout within the conversation.
- **In-chat payment** completes the purchase without leaving the conversation, using a credit or debit card, or Pix (a Brazilian payment method).
- **Conversational campaigns** drive reactivation, inventory replenishment, and upselling through approved message templates.
- **Analytics** offers data and metrics about support interactions and operational results.

This tutorial helps you navigate the platform and is divided into the following sections:

- [Signing up and logging in](#signing-up-and-logging-in)
- [Creating an organization and project](#creating-an-organization-and-project)
- [Accessing your profile](#accessing-your-profile)
- [Permission system](#permission-system)
- [Changing the platform language](#changing-the-platform-language)

## Signing up and logging in

You can create a free account or log in to an existing one to access the platform.

To create a free account, follow the steps below:

1. Go to [VTEX CX Platform](https://accounts.weni.ai/auth/realms/weni/login-actions/registration?client_id=weni-webapp&tab_id=GrzDdSDmT-8&client_data=eyJydSI6Imh0dHBzOi8vZGFzaC53ZW5pLmFpL3Byb2plY3RzLzZjZjZiODIzLTFkYjktNDg5Ny04NTFmLWM2OTZlOTkxMjA2NS9zZXR0aW5ncy9wcm9qZWN0L3IvaW5pdCIsInJ0IjoiY29kZSIsInJtIjoiZnJhZ21lbnQiLCJzdCI6IjcwOGI1OTA4LTcwMTktNDcxMi05YTQ5LWY3OGRhMTM5MGM2OCJ9).
2. Enter your email and desired password.
3. Click `Create an account`.

You can also sign up using the following providers: **GitHub**, **Google**, and **Microsoft**.

If you've completed your sign-up or received an invitation to an organization but don't have an account on the platform yet, complete the fields shown on the screen and click `Next`.

To log in to an existing account, follow the steps below:

1. Go to [VTEX CX Platform](https://accounts.weni.ai/auth/realms/weni/protocol/openid-connect/auth?client_id=weni-webapp&redirect_uri=https%3A%2F%2Fdash.weni.ai%2Fprojects%2F6cf6b823-1db9-4897-851f-c696e9912065%2Fsettings%2Fproject%2Fr%2Finit&state=708b5908-7019-4712-9a49-f78da1390c68&response_mode=fragment&response_type=code&scope=email%20profile%20openid%20offline_access&code_challenge=FEKSvKUaU81i_zufbxFiZg40t-efyp6Krh2xutDxkSY&code_challenge_method=S256).
2. Enter your email and password.
3. Click `Log In`.

If you signed up using **GitHub**, **Google**, or **Microsoft**, select one of these options to log in.

### Completing the organization and project details

> ℹ️ If your organization already exists and you've been invited to it, complete the fields with fictitious names just to register on the platform. You don't need to use the company's real names.

After completing the fields, click `Next`.

Next, choose whether to create a custom agent or use a template.

To create a custom agent, complete the fields below:

1. **Agent name**: The name of the agent, such as "Support Chat".
2. **Goal**: The goal of the agent, such as "Answer customer questions".

> ℹ️ Clearly define your agent's main goal when interacting with customers. Example: "Help customers find products that fit their needs" or "Provide technical support." This guides conversations in a direct and assertive way.

3. **Content**: The base content for the agent. Completing the content is optional during sign-up and can be added later.

> ℹ️ By including a content base, you empower your AI agent to respond to users more effectively. You can import essential information by dragging and dropping files, automatically integrating the text, entering content from sites, or writing whatever you'd like in the base.

Templates are ready-made flows for specific purposes, divided into three categories: support, integrations, and sales. When you click one of the cards in a category, a pop-up appears detailing how to use the template.

> ℹ️ If you choose a template, click the corresponding tab and select one of the available templates.

Click `Finish` to proceed.

## Creating an organization and project

To create a new organization, follow the steps below:

1. Go to the VTEX CX Platform homepage and click <i class="fas fa-plus" aria-hidden="true"></i>`Create organization`.
2. Enter a name for your organization, the organization's description, and the project name.
3. Click `Continue`.
4. In the project setup step, you can choose between **Create a custom agent** or **Use template**.

To create a custom agent, follow the instructions below:

1. Complete the agent's name and its purpose.
2. Click <i class="fas fa-plus" aria-hidden="true"></i>`Add content`.

- In this field, you can add information that the agent will use in your project, such as catalog files or your store website. Then, click `Complete`.
- This step is optional when creating an organization, and the content can be added later.

3. Click `Done`.

Templates are ready-made flows for specific purposes, divided into three categories: **support**, **integrations**, and **sales**.

To use a template, follow the instructions below:

1. Select one of the templates, such as _Support_ or _Lead Capture_, to view more information.
2. Click `Use template` to enable the template.
3. Enter the project description.
4. Click `Done`.

After creating a custom agent or choosing a template, the setup is complete. To enter your project, click `Get started`.

> ℹ️ After creating the organization and the project, add your team by configuring permissions. People added to the organization will have access to all projects created within the organization. To learn more, see the [Permission system](#permission-system) section.

To learn how to add or manage organization or project members, go to the article [Managing VTEX CX Platform members](https://help.vtex.com/docs/tutorials/managing-vtex-cx-platform-members).

## Changing the platform language

To change the language, follow the steps below:

1. Click your username.
2. Click `Language`.
3. Choose one of the languages.

- Currently, the platform offers four language options: **English**, **Español**, **Português (Brasil)**, and **Română**.

> ℹ️ If the platform doesn't change the language, try logging out and logging back in, or restarting your browser.

## Accessing your profile

The **Profile** section allows you to manage your account and edit personal, security, and notification preferences.

On the **Profile** tab, you can change your first name, last name, profile picture, contact number, and password.

In **Preferences**, you can select which emails you want to receive from VTEX CX Platform.

In **Privacy and security**, you can enable two-factor authentication by following the steps below:

1. Click your username.
2. Click `Profile`.
3. Select the **Privacy and security** section.
4. Activate the `Enable authentication` toggle switch.
5. Click `Save changes`.

After saving, you're automatically logged out of the platform.

When logging in again, follow the steps below:

1. Open the authenticator app of your choice and scan the QR code displayed on the screen.
2. On the platform, enter the one-time code that appears in the app.
3. Click `Save` to complete the setup.

> ℹ️ From then on, you'll need the verification code displayed in your authenticator app to log in.

### Authentication request in your organization

To add an extra layer of security to your organization's projects and data, you can allow only users with two-factor authentication enabled to enter the organization.

To request two-factor authentication in the organization, follow the steps below:

1. Click the <i class="fas fa-ellipsis-v" aria-hidden="true"></i> icon on the organization's card.
2. Click `Settings`.
3. Select the **Security** tab.
4. Under **Two-factor authentication**, activate the **Enable authentication** toggle switch.
5. Finally, click `Save changes`.

## Permission system

In VTEX CX Platform, you can manage different permissions for each user, divided into two groups:

- [Organization permissions](#organization-permissions)
- [Project permissions](#project-permissions)

### Organization permissions

These permissions can be added during the organization creation step or at any time through the organization settings icon.

The organization permissions are described below:

- **Admin:** Has full access to the platform and can add new members or change the permissions of existing members.
- **Financial:** Only has access to the billing department.
- **Contributor:** Can create new projects and edit content.
- **Marketing:** Only has access to the **Contacts** module and can send message templates.

> ⚠️ Organization permissions apply to all projects within the organization.

### Project permissions

You can also add permissions to a specific project, not just to the entire organization. To access the options, click `Manage members` on the desired project.

The project permissions are as follows:

- **Moderator:** Has full admin access to a project. Can make any changes or configurations to the project.
- **Contributor:** Can edit content (for example, flows, instructions, message templates).
- **Viewer:** Can only read information, such as flows, contacts, and messages, but can't edit them.
- **Marketing:** Has access to the **Campaigns** and **Contacts** modules to configure and manage campaign triggers with templates.
- **Human support:** Exclusive permission for the human representative. Only has access to the **Live Desk** module.

> ⚠️ A project's permissions apply specifically to that project and may differ from the organization's permissions. For example, if a user has Admin permission in the organization and Viewer permission in a project, they can make changes across the entire organization, except in the project where they were assigned as Viewer. In that project, they can't edit the information, only view it.
