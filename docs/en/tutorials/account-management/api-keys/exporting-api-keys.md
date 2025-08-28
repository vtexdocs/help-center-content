---
title: 'Exporting API keys'
id: 1p4eYJWD26gOdicUdiiGC5
status: PUBLISHED
createdAt: 2025-08-12T19:38:30.979Z
updatedAt: 2025-08-13T14:18:34.326Z
publishedAt: 2025-08-13T14:18:34.326Z
firstPublishedAt: 2025-08-13T14:18:34.326Z
contentType: tutorial
productTeam: Identity
author: 1malnhMX0vPThsaJaZMYm2
slugEN: exporting-api-keys
legacySlug: exporting-api-keys
locale: en
subcategoryId: 3OlaStejO5MSzvDSU3VCH3
---

The [API Keys](https://help.vtex.com/en/tutorial/api-keys--4bFEmcHXgpNksoePchZyy6) page allows you to export information for all generated and external keys associated with the account to an `XLSX` file.  

## Before you begin

To export, you must have the [User Administrator - RESTRICTED](https://help.vtex.com/en/tutorial/predefined-roles--jGDurZKJHvHJS13LnO7Dy#user-administrator-restricted) role or a [custom](https://help.vtex.com/en/tutorial/roles--7HKK5Uau2H6wxE1rH5oRbc#creating-a-role) role with the *View API Keys* resource.

## Instructions

Follow the instructions below to export keys:  

1. In the top bar of the VTEX Admin, click **your profile avatar**, indicated by the initial letter of your email address.  
2. Click *Account Settings \> API Keys*.  
3. Click `Export`. The file download will start instantly.  

See the information available in the spreadsheet below.

### Generated tab

| Column | Description |
| :---- | :---- |
| `id` | API key identification code. |
| `keyName` | API key. |
| `roles` | Roles associated with the API key. |
| `label` | API key name, defined when creating the key. |
| `creationDate` | API key created date. |
| `creationDateToken` | If the key has a single token associated with it, this date indicates when the token was created. If the key is renewed, two tokens are associated with it. In this case, this date refers to when the token being replaced by the new one was created (the token that existed before the renewal process started). |
| `creationDateNewToken` | This field will be null if the key has a single token associated with it.   If the key is in the renewal process, two tokens are associated with it. In this case, the field represents the date the new token that will replace the old one was created (in other words, the date renewal started). |
| `status` | API key status, which can be active or inactive. |

### External tabs

| Column | Description |
| :---- | :---- |
| `id` | API key identification code. |
| `keyName` | API key. |
| `roles` | Roles associated with the API key. |
| `account` | Name of the external account that owns the key. |
| `addedDate` | Date the external API key was added. |
| `status` | API key status, which can be active or inactive. |

## Learn more

- [API keys](https://help.vtex.com/en/tutorial/api-keys--4bFEmcHXgpNksoePchZyy6)  
- [Configuring alerts to renew API tokens](https://help.vtex.com/en/tutorial/configurar-a-duracao-de-chaves-de-api--kcGIFysFt02FDuhsfjQwZ)  
- [Generated keys](https://help.vtex.com/en/tutorial/generated-keys--7fnU4iZdvZKbxCaT3Ymdjc)  
- [External keys](https://help.vtex.com/en/tutorial/external-keys--1isU0HfKkeg0atlxRha14Q)  
