---
title: "Importing contacts"
id: 2iPoWuJtzfIvGrpUdIvvhR
status: PUBLISHED
createdAt: 2025-09-12T17:23:02.357Z
updatedAt: 2025-10-03T14:21:49.258Z
publishedAt: 2025-10-03T14:21:49.258Z
firstPublishedAt: 2025-10-03T14:21:49.258Z
contentType: tutorial
productTeam: Post-purchase
author: 4JJllZ4I71DHhIOaLOE3nz
slugEN: importing-contacts
legacySlug: importing-contacts
locale: en
subcategoryId: 2kZMtDveyKwicJ6Hs8s2yN
---

The VTEX CX contact list includes people who interact through channels connected to the platform. These contacts are added automatically. To also include people who have not yet interacted through your channels, you can import their data in bulk using a spreadsheet. This article explains how to prepare the spreadsheet and complete the import.

## Preparing the spreadsheet

The file must be an Excel spreadsheet in `.xls` format. The import page provides a template you can use as a reference.

The column names must follow the format expected by the platform:

- `Name`: contact name.
- `Language`: language the contact uses in interactions.
- `URN`: the contact identifier for the channel through which they will communicate. Each contact must have at least one URN.
- `Field`: custom contact fields.

> ⚠️ To send WhatsApp template messages, include the `URN:whatsapp` column and the corresponding phone numbers. Without this information, you will not be able to send WhatsApp messages to the imported contacts.

## Importing contacts

To import contacts:

1. In **Contacts**, go to the **Contacts** page.
2. In the left side menu, click **Import Contacts**.
3. On the import page, select the `.xls` spreadsheet.
4. Click **Preview** and complete the import.

## Import result

After the import, the contacts are linked to a static group with the same name as the spreadsheet file. If you do not want to keep this group, you can delete it without removing the imported contacts.
