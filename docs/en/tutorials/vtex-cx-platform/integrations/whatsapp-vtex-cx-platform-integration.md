---
title: 'WhatsApp: Integration with VTEX CX Platform'
createdAt: 2025-09-15T15:02:52.737Z
updatedAt: 2026-09-09T19:40:00.000Z
contentType: tutorial
productTeam: Post-purchase
slugEN: whatsapp-vtex-cx-platform-integration
locale: en
---

WhatsApp integration in VTEX CX Platform connects a WhatsApp Business commercial number to your project. With the active channel, the store sends and receives messages through this number and manages account settings without leaving the platform.

After linking your Meta account and creating the channel, you can:

- View the identifiers for the number and WhatsApp Business Account (WABA) and access message templates.
- Edit the public profile visible to customers on WhatsApp, such as image, description, industry, websites, email, and address.
- Configure a webhook so an external system receives message events.
- Track conversation volume by billing category and request a detailed report via email.
- Request account verification with Meta to unlock higher sending limits and shorter intervals between messages.

In this tutorial, you'll learn how to integrate WhatsApp with the project, create and configure the channel, and verify your WhatsApp Business account.

## Integrating WhatsApp with the project

To start integrating WhatsApp, follow these steps:

1. In the desired project, go to **Settings > Channels**.
2. In **Communication channels**, locate the **WhatsApp** card or type **WhatsApp** in the search field.
4. Select the **WhatsApp** card.
5. Click `+ Add`.
6. In the pop-up, click `Continue`. The platform opens the connection flow with Meta. Follow the on-screen steps to link your Meta account with VTEX CX Platform.

## Creating the channel

With the account linked to Meta and the number verified, integrate the channel into the platform:

1. Click `Create channel`.
2. Select the number that will be linked to the WhatsApp integration in VTEX CX Platform.

This channel is available at **Settings > Channels > My apps > WhatsApp [WhatsApp number]**.

## Configuring the channel

When you click the number card, you can manage the channel content for that WhatsApp phone number, such as changing profile picture, viewing templates, changing description, connecting with webhook, and verifying your account.

### General

In the **General** tab, you view the identifiers for the number and WhatsApp Business account and access the channel templates. The fields displayed in this tab are read-only. To modify them, you need to access your Meta Business account.

In the **Manage content** section, click `View my templates` to open the message templates associated with the number.

The **WhatsApp channel** section displays the connected line data. The visible fields are:

| Field | Description |
| --- | --- |
| **Phone number** | Commercial number connected to the channel. |
| **WhatsApp display name** | Name that WhatsApp shows to the user. |
| **Default language for templates** | Default language for templates. If not set, the interface displays a dash (`-`). |
| **Certificate** | Certificate associated with the number. When not applicable, the interface displays `N/A`. |
| **Consent status** | Number consent status. If not set, the interface displays a dash (`-`). |

The **WhatsApp Business Account** section displays the identifiers for the WhatsApp Business account linked to the channel. The visible fields are:

| Field | Description |
| --- | --- |
| **WABA name** | WhatsApp Business account name. |
| **WABA ID** | WhatsApp Business identifier on Meta. |
| **Messaging on behalf of** | Identity on whose behalf messages are sent. If not set, the interface displays a dash (`-`). |
| **Time zone ID** | WhatsApp Business time zone, in IANA format. Example: `America/Sao_Paulo`. |
| **Namespace** | WhatsApp Business template namespace. |

### Profile

In the **Profile** tab, you define the public information for the number, visible to customers on WhatsApp. You can edit the following fields:

- **Profile image:** image associated with the WhatsApp profile.
- **Description:** description of the organization or chatbot purpose.
- **Organization industry:** organization industry.
- **Websites:** store website addresses. You can include up to two websites.
- **Corporate email:** email for contacting users.
- **Address:** your store's business address.

If you modified any of the fields and want to save, click `Save changes`. To exit without saving, click `Configure later`.

### Webhook

In the **Webhook** tab, you define the endpoint that receives channel notifications. Use this tab when an external system needs to handle message events outside VTEX CX Platform.

To configure the webhook, fill in the following fields:

| Field | Description |
| --- | --- |
| **Method** | HTTP request method. The options are: `GET`, `POST`, `PUT`, `PATCH`, and `DELETE`. |
| **Webhook URL** | URL of the service that will receive notifications. |
| **Key** | HTTP request key. |
| **Value** | Value for the key. |

If you modified any of the fields and want to save, click `Save changes`. To exit without saving, click `Configure later`.

### Conversations

The **Conversations** tab shows the number's conversation volume, grouped by WhatsApp billing categories, and allows you to request a detailed report via email.

To view conversation volume, follow the steps below:

1. In **Filter by**, select the date range in `DD/MM/YYYY ~ DD/MM/YYYY` format.
2. After filtering by time range, the **Number of conversations** table shows the number of conversations for each category.
3. If you want to receive a detailed report of the conversations for the selected time range, click `Request report`.
  - You can receive message details from up to 6 months ago.

### Account verification

In the **Account verification** tab, you can verify your account with Meta. Verification unlocks higher message sending limits and shorter intervals between messages.

> ⚠️ You can only verify your account when you reach 50 conversations or 50 sent templates.

To verify your account, follow these steps:

1. Select the following checkboxes:
  - This company is a legal entity.
  - The account admin is a company representative.
  - The company follows the WhatsApp Business Policy.
2. Click <i class="fas fa-plus" aria-hidden="true"></i>`Upload files` to upload your company's documents.
3. Finally, click `Submit`.

Below are some suggested documents for verifying your account with Meta:

| Country | Documents |
| --- | --- |
| Brazil | - Company registration document or license (for example, CNPJ) <br> - Articles of association or corporate contract (for example, MEI). <br> - Tax payment receipt, bank statement, or utility bill. |