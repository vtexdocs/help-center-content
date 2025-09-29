---
title: 'External keys'
id: 1isU0HfKkeg0atlxRha14Q
status: PUBLISHED
createdAt: 2024-09-30T18:40:42.116Z
updatedAt: 2025-08-13T14:21:14.719Z
publishedAt: 2025-08-13T14:21:14.719Z
firstPublishedAt: 2024-10-08T20:11:36.474Z
contentType: tutorial
productTeam: Identity
author: 1malnhMX0vPThsaJaZMYm2
slugEN: external-keys
legacySlug: external-keys-beta
locale: en
subcategoryId: 3OlaStejO5MSzvDSU3VCH3
---

External API keys are credentials generated in and managed by other VTEX accounts. By adding [roles](/en/tutorial/perfis-de-acesso--7HKK5Uau2H6wxE1rH5oRbc) to API keys — which are equivalent to usernames — provided by third parties, you can allow them to access specific resources in your account.  

The **External** tab lists the API keys created by your account.

![apikeys-external-en](https://raw.githubusercontent.com/vtexdocs/help-center-content/refs/heads/main/docs/en/tutorials/account-management/api-keys/external-keys_1.png)

The page displays the following information in a table:

| Column | Description |
| :---- | :---- |
| **Key/Owner** | API key, followed by the name of the external account that owns the key. |
| **Roles** | Roles associated with the external API key. |
| **Added On** | Date the external API key was added. |
| **Status** | External API key status, which can be **Active** or **Inactive**. |

This page allows you to:  

* [Add external keys](#adding-external-keys)
* [Edit external keys](#editing-external-keys)
* [Remove external keys](#removing-external-keys)

## Adding external keys

To add an external key to your account, follow the steps below:  

1. In the top bar of the VTEX Admin, click your **profile avatar** — indicated by the first letter of your email — and then click *Account Settings > API Keys*.  
2. Click the **External** tab.  
3. Click `Add Key`.  
4. Complete the **External key identification** field with a name to identify the API key.  
5. Select the [roles](/en/tutorial/roles--7HKK5Uau2H6wxE1rH5oRbc) that will be associated with the key. By default, no role is pre-selected.

   > ❗ Select only the roles required for the integration that will use the API key. Unrestricted use of overly permissive roles increases the risk of store attacks through leaked login credentials.

6. Click `Add`.

## Editing external keys

Follow the steps below to change an external API key:  

1. In the top bar of the VTEX Admin, click your **profile avatar** — indicated by the first letter of your email — and then click *Account Settings > API Keys*.  
2. Click the **External** tab.  
3. In the row of the desired API key, click the kebab menu (⋮) and then <i class="fas fa-pencil-alt"></i> `Edit`.  
4. Change the selection of roles associated with the API key.  
5. Click `Save`.  

## Removing external keys

To remove an external API key, follow the instructions below:  

1. In the top bar of the VTEX Admin, click your **profile avatar** — indicated by the first letter of your email — and then click *Account Settings > API Keys*.  
2. Click the **External** tab.  
3. In the row of the desired API key, click the kebab menu (⋮) and then <i class="fas fa-times"></i> `Remove`  
4. Click `Remove` to confirm.

## Learn more

* [API Keys](/en/tutorial/api-keys--4bFEmcHXgpNksoePchZyy6)
* [Configuring alerts to renew API tokens](/en/tutorial/configuring-the-duration-of-api-keys--kcGIFysFt02FDuhsfjQwZ)
* [Generated keys](/en/tutorial/generated-keys--7fnU4iZdvZKbxCaT3Ymdjc)

