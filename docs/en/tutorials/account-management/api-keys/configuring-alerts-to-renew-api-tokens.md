---
title: 'Configuring alerts to renew API tokens'
id: kcGIFysFt02FDuhsfjQwZ
status: PUBLISHED
createdAt: 2024-09-30T18:38:54.891Z
updatedAt: 2025-08-13T14:18:37.743Z
publishedAt: 2025-08-13T14:18:37.743Z
firstPublishedAt: 2024-10-08T18:42:01.264Z
contentType: tutorial
productTeam: Identity
author: 1malnhMX0vPThsaJaZMYm2
slugEN: configuring-alerts-to-renew-api-tokens
legacySlug: configuring-the-duration-of-api-keys-beta
locale: en
subcategoryId: 3OlaStejO5MSzvDSU3VCH3
---

The **API keys** page allows you to configure alerts to recommend the renewal of API tokens for internally generated keys.

[Renewing tokens](https://help.vtex.com/en/tutorial/renewing-api-tokens--7r4AzptYjXErGHadg9LnJ3) periodically is important to ensure security, limit exposure to risks, and control access to resources, minimizing the impact of compromised keys.

![token-renewal-en](https://raw.githubusercontent.com/vtexdocs/help-center-content/refs/heads/main/docs/en/tutorials/account-management/api-keys/configuring-alerts-to-renew-api-tokens_1.png)

By default, the renewal alert is displayed after three months, unless another option is selected. To configure the alert frequency, follow these steps:

1. In the top bar of the VTEX Admin, click your **profile avatar** — indicated by the first letter of your email — and then click **Account Settings** > **API keys**.  
2. Click the `Settings` tab.  
3. Choose the desired renewal period:

   * **3 months** (recommended)  
   * **6 months**  
4. Click `Apply`.

This period will apply to all new and existing keys, using the created date as the reference for calculating the duration.

> ℹ️ The token doesn't expire after the defined period. This setting only determines when the interface will recommend renewal, it doesn't deactivate the token. The alert serves as a reminder to [manually renew the token](https://help.vtex.com/en/tutorial/renewing-api-tokens--7r4AzptYjXErGHadg9LnJ3).

## Alert display

Once the defined period is reached, a renewal alert is displayed next to the key in the **Generated** tab:

![renew-recommended-en](https://raw.githubusercontent.com/vtexdocs/help-center-content/refs/heads/main/docs/en/tutorials/account-management/api-keys/configuring-alerts-to-renew-api-tokens_2.png)

The orange alert means the token has exceeded the recommended usage period by up to three months.

![renew-highly-recommended-en](https://raw.githubusercontent.com/vtexdocs/help-center-content/refs/heads/main/docs/en/tutorials/account-management/api-keys/configuring-alerts-to-renew-api-tokens_3.png)

The red alert means the token has been in use for three or more months beyond the specified period.

When you see a key with an alert, [renew the token](https://help.vtex.com/en/tutorial/renewing-api-tokens--7r4AzptYjXErGHadg9LnJ3) as soon as possible. After renewal, the alert will reappear after the selected period (three or six months), considering the most recent renewal date as the new starting point for calculating the duration.

## Learn more

* [API Keys](https://help.vtex.com/en/tutorial/api-keys--4bFEmcHXgpNksoePchZyy6)
* [Generated keys](https://help.vtex.com/en/tutorial/generated-keys--7fnU4iZdvZKbxCaT3Ymdjc)
* [Renewing API tokens](https://help.vtex.com/en/tutorial/renewing-api-tokens--7r4AzptYjXErGHadg9LnJ3)

