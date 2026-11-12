---
title: 'VTEX CX Platform'
createdAt: 2026-03-31T15:33:34.931Z
updatedAt: 2026-11-12T00:00:00.000Z
contentType: tutorial
productTeam: Post-purchase
slugEN: vtex-cx-platform-overview
locale: en
seeAlso:
  - /en/docs/tutorials/assigning-and-testing-agents-in-agent-builder
  - /en/docs/tutorials/managing-vtex-cx-platform-members
  - /en/docs/tutorials/the-basics-of-integrations
  - /en/docs/tutorials/configure-live-desk
---

**VTEX CX Platform** is a conversational commerce solution for creating and managing artificial intelligence (AI) agents throughout the customer journey. These agents connect conversations to commerce data and operations, helping customers discover products, complete purchases, track orders, and request after-sales support without switching channels.

The platform connects natively to your commerce operation, including orders, catalog, checkout, and promotions. This gives agents access to real-time data and allows them to resolve customer requests end-to-end in a single conversation across channels such as WhatsApp, webchat, voice, email, and social media.

> ℹ️ To evaluate VTEX CX Platform for your business, [schedule a demo](https://www.vtex.com/en-us/products/cx_platform/). If your store is using a trial and is eligible for a standard plan, see [Subscribing to a VTEX CX Platform plan](https://help.vtex.com/en/docs/tutorials/subscribing-to-a-vtex-cx-platform-plan).

## Main use cases

You can use VTEX CX Platform to:

- Help customers find products based on their needs and current catalog information.
- Answer order questions and provide tracking updates.
- Automate eligible exchanges, returns, and cancellations.
- Recover abandoned carts and guide customers back to checkout.
- Accept supported payment methods within a conversation.
- Send conversational campaigns for reactivation, replenishment, and upselling.
- Transfer a conversation to a human representative when human support is needed.
- Monitor conversations, support performance, and operational results.

Available capabilities depend on your plan, integrations, channels, and project configuration.

## How the platform is organized

Access and resources are organized into two levels:

- **Organization:** Groups your company's projects and organization members. Organization roles define access across the organization.
- **Project:** Contains the agents, knowledge, channels, contacts, conversations, and settings for a specific operation or use case. Project roles define what each member can do within that project.

After you open a project, use the main menu to access the following modules:

- **Agent Builder:** Configure and test AI agents, add knowledge sources, define instructions, and create automation flows. See [Agent Builder](https://help.vtex.com/en/docs/tutorials/agent-builder-overview).
- **Studio:** Manage contacts, messages, campaigns, and conversation triggers.
- **Live Desk:** Handle conversations that require human support and review support history. See [Live Desk](https://help.vtex.com/en/docs/tutorials/live-desk-overview).
- **Analytics:** Monitor active support and analyze conversation, message delivery, team, and operational metrics. See [Analytics: Support metrics](https://help.vtex.com/en/docs/tutorials/analytics-support-metrics).
- **Audit:** Review conversations handled by AI agents, investigate outcomes, and identify opportunities for improvement. See [Audit](https://help.vtex.com/en/docs/tutorials/audit-overview).
- **Integrations:** Connect communication channels and external applications to the project.
- **Settings:** Manage project preferences, credentials, members, and security options. See [CX Platform settings: Workspace](https://help.vtex.com/en/docs/tutorials/cx-platform-settings-workspace).

## Getting started

### Creating or accessing your account

Go to the [VTEX CX Platform dashboard](https://dash.weni.ai/). You can create an account with an email address and password or continue with GitHub, Google, or Microsoft. Use the same method when you return to log in.

If you received an invitation, create or access the account associated with the invited email address. After logging in, select the organization and project included in the invitation.

### Creating an organization and project

If you're setting up a new operation, follow these steps:

1. On the VTEX CX Platform homepage, click <i class="fas fa-plus" aria-hidden="true"></i> `Create organization`.
2. Enter the organization name, organization description, and project name.
3. Click `Continue`.
4. Choose how to start the project:
    - **Create a custom agent:** Enter the agent's name and purpose. You can also add files, website content, or text that the agent can use as a knowledge source.
    - **Use template:** Select a template for a support, integration, or sales use case, review its details, and click `Use template`.
5. Complete the requested project information and click `Done`.
6. Click `Get started` to open the project.

Adding content during setup is optional. You can update the agent's knowledge later in **Agent Builder > Knowledge base**.

> ℹ️ Define a specific goal for the agent, such as "Help customers find products that meet their needs" or "Answer questions about orders." A clear goal helps determine the agent's expected behavior and the content it needs.

After creating the project, invite your team and assign only the permissions they need. For instructions, see [Managing VTEX CX Platform members](https://help.vtex.com/en/docs/tutorials/managing-vtex-cx-platform-members).

## Roles and permissions

Permissions can apply to an entire organization or to an individual project.

### Organization roles

- **Admin:** Manages the organization, its members, and their permissions.
- **Financial:** Accesses billing information.
- **Contributor:** Creates projects and edits content.
- **Marketing:** Accesses contacts and sends message templates.

> ⚠️ Organization roles apply to every project in the organization.

### Project roles

- **Moderator:** Has full administrative access to the project.
- **Contributor:** Edits resources such as flows, instructions, and message templates.
- **Viewer:** Views project information without editing it.
- **Marketing:** Manages contacts, campaigns, and campaign triggers.
- **Human support:** Accesses Live Desk to handle customer conversations.

Project roles apply only to the project where they're assigned. To add members or change their roles, open the actions menu for the organization or project and click `Manage members`.

## Personal preferences and account security

Click your username and select `Profile` to manage your personal information, password, email preferences, and security settings.

### Changing the interface language

1. Click your username.
2. Click `Language`.
3. Select **English**, **Español**, **Português (Brasil)**, or **Română**.

If the interface doesn't update, log out and log in again.

### Enabling two-factor authentication

Two-factor authentication adds a verification code to the login process:

1. Click your username and select `Profile`.
2. Open **Privacy and security**.
3. Activate `Enable authentication`.
4. Click `Save changes`.
5. Log in again and scan the displayed QR code with an authenticator app.
6. Enter the one-time code generated by the app and click `Save`.

After setup, you must enter a code from the authenticator app whenever you log in.

Organization admins can require two-factor authentication for all members:

1. On the organization card, click the vertical ellipsis <i class="fas fa-ellipsis-v" aria-hidden="true"></i>.
2. Click `Settings` and open the **Security** tab.
3. Under **Two-factor authentication**, activate `Enable authentication`.
4. Click `Save changes`.
