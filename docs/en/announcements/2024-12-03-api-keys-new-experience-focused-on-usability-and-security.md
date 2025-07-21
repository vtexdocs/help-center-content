---
title: 'API keys: New experience focused on usability and security'
id: 23b9SUp3kOQfpImskTww7a
status: PUBLISHED
createdAt: 2024-12-03T16:41:41.840Z
updatedAt: 2025-02-05T19:21:26.857Z
publishedAt: 2025-02-05T19:21:26.857Z
contentType: updates
productTeam: Identity
author: 1malnhMX0vPThsaJaZMYm2
slugEN: 2024-12-03-api-keys-new-experience-focused-on-usability-and-security
locale: en
legacySlug: api-keys-new-experience-focused-on-usability-and-security
announcementImageID: ''
announcementSynopsisEN: 'Manage your API keys with more security: A new interface, token duration settings, and options for renewal and deletion.'
---

We've introduced a new [API Key](/en/tutorial/api-keys--4bFEmcHXgpNksoePchZyy6)  management experience to give you more efficient control over your credentials.

This update includes an optimized interface for easier management and new security-oriented features, such as setting token duration, renewing tokens, and deleting unused keys.

![apikeys-en](https://raw.githubusercontent.com/vtexdocs/help-center-content/refs/heads/main/docs/en/announcements/2024-12-03-api-keys-new-experience-focused-on-usability-and-security_1.png)

## What has changed?

See all updates below:

| Change | Description |
| ---- | ---- |
| **Name** | We have changed *application keys* to *API keys* in the Admin interface. |
| **Design** | The interface for managing, creating, and editing API keys has been redesigned to provide a more intuitive and efficient experience. |
| **Key separation** | Internally generated keys and external keys are now organized into separate tabs to make managing each type easier. |
| **Token duration** | All internally generated API tokens now have a default duration of 3 months, which can be changed to 6 months in the interface.<br><br>The setting applies to all new and existing tokens generated on the account and uses the key's created date as a reference for calculating duration. <br><br>The duration of external tokens is visible and configurable only to the account that created the token.<br><br>When generated tokens become outdated, this information will be displayed in the Admin interface. This outdated status has no impact on token usage — it's just a visual indicator to reflect the token status and suggest renewal.<br><br>Learn more in [Configuring the duration of API keys](/en/tutorial/configuring-the-duration-of-api-keys--kcGIFysFt02FDuhsfjQwZ). |
| **Token renewal** | Now, you can renew the tokens of the keys generated in your account. This feature allows you to choose whether to delete the old token immediately or later.<br><br>If you choose to delete it later, both tokens will be valid and functional until the old one is deleted, allowing the merchant to update the token used in integrations without jeopardizing the operation.<br><br>Learn more in [Renewing API tokens](/en/tutorial/renewing-api-tokens--7r4AzptYjXErGHadg9LnJ3). |
| **API key deletion** | Merchants can now delete API keys that will no longer be used. |
| **Specific permissions** | New permissions required to manage API keys: <br><ul class="t-body c-on-base mb7 lh-copy"><li class="t-body c-on-base mb5 lh-copy">*View API Keys* (view, filter, search, and sort generated and external API keys)</li><li class="t-body c-on-base mb5 lh-copy">*Edit API Keys* (create, delete, change status, and add or remove API key permissions)</li><li class="t-body c-on-base mb5 lh-copy">*Renew API Token* (view and renew tokens for generated keys)</li><li class="t-body c-on-base mb5 lh-copy">*Edit API Keys settings* (edit the settings for the duration of generated key tokens)</li></ul>Learn more in [License Manager resources](/en/tutorial/license-manager-resources--3q6ztrC8YynQf6rdc6euk3). Users with permissions to manage users and roles will automatically receive the new permissions, as shown in the table: <br><br><table><thead><tr class="bb b--muted-4"><th class="t-body fw5 c-muted-1 bw1 pa3 pb3 b--muted-4 tl">Users with…</th><th class="t-body fw5 c-muted-1 bw1 pa3 pb3 b--muted-4 tl">They automatically receive…</th></tr></thead><tbody><tr class="bb b--muted-4"><td class="t-body pa3 bb b--muted-4">Get account by identifier</td><td class="t-body pa3 bb b--muted-4">View API Keys</td></tr><tr class="bb b--muted-4"><td class="t-body pa3 bb b--muted-4">Get paged users</td><td class="t-body pa3 bb b--muted-4">View API Keys</td></tr><tr class="bb b--muted-4"><td class="t-body pa3 bb b--muted-4">Get paged roles</td><td class="t-body pa3 bb b--muted-4">View API Keys</td></tr><tr class="bb b--muted-4"><td class="t-body pa3 bb b--muted-4">Find user by email</td><td class="t-body pa3 bb b--muted-4">View API Keys</td></tr><tr class="bb b--muted-4"><td class="t-body pa3 bb b--muted-4">Save user</td><td class="t-body pa3 bb b--muted-4">Edit API Keys</td></tr><tr class="bb b--muted-4"><td class="t-body pa3 bb b--muted-4">Owner - Super Admin</td><td class="t-body pa3 bb b--muted-4">Edit API Keys settings</td></tr><tr class="bb b--muted-4"><td class="t-body pa3"><a href="https://help.vtex.com/pt/tutorial/perfis-de-acesso-predefinidos--jGDurZKJHvHJS13LnO7Dy#user-administrator-restricted" class="t-body mv5 lh-copy c-link active-c-link hover-c-link visited-c-link hover-c-link break-word" rel="noopener noreferrer" target="_blank">User Administrator - RESTRICTED</a></td><td class="t-body pa3">Renew API Token</td></tbody></table>  |

## Why did we make this change?

The new experience aims to provide greater control and security over your API keys while improving usability. The interface streamlines managing different types of keys and improves information visibility.

Additionally, configurable token durations add an extra layer of security, while renewal options help ensure uninterrupted store operations.

## What needs to be done?

Follow the steps below to access the new experience:

1. In the top bar of the VTEX Admin, click your **profile avatar** — indicated by the first letter of your email — and then click **Account settings** > **API Keys**.  
2. Click `Try new experience`.

You can switch to the previous version of the page anytime by clicking `Switch to the previous version`.

For more information, see the related documentation:

* [API Keys](/en/tutorial/api-keys--4bFEmcHXgpNksoePchZyy6)  
* [Configuring the duration of API keys](/pt/tutorial/configuring-the-duration-of-api-keys--kcGIFysFt02FDuhsfjQwZ)  
* [Generated keys](/en/tutorial/generated-keys--7fnU4iZdvZKbxCaT3Ymdjc)  
* [Renewing API tokens](/en/tutorial/renewing-api-tokens--7r4AzptYjXErGHadg9LnJ3) 
* [External keys](/en/tutorial/external-keys--1isU0HfKkeg0atlxRha14Q)

