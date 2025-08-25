---
title: 'Generated keys'
id: 7fnU4iZdvZKbxCaT3Ymdjc
status: PUBLISHED
createdAt: 2024-09-30T18:39:21.339Z
updatedAt: 2025-08-13T14:19:10.482Z
publishedAt: 2025-08-13T14:19:10.482Z
firstPublishedAt: 2024-10-08T19:18:05.329Z
contentType: tutorial
productTeam: Identity
author: 1malnhMX0vPThsaJaZMYm2
slugEN: generated-keys
legacySlug: generated-keys-beta
locale: en
subcategoryId: 3OlaStejO5MSzvDSU3VCH3
---

Internal API keys are credentials generated in and managed by your VTEX account. This means you should have access to all pairs of API keys and tokens, which is akin to usernames and passwords for API integrations.  

The **Generated** tab lists the API keys created by your account. You can use the search bar to find keys by name or by the **Key identifier** used when it was generated.

![generated-keys-en](//images.ctfassets.net/alneenqid6w5/1BKpENJAjKlijTutL0wxLZ/b14dd198d0262f74f80cab79e86b7e53/generated-keys-en.png)

The page displays the following information in a table:  

| Column | Description |
| :---- | :---- |
| **Key/Name** | API key, followed by the name defined when creating the key. If the token has exceeded the recommended renewal period (3 months, by default), a renewal alert icon is displayed next to the key. Learn more in [Configuring alerts to renew API tokens](https://help.vtex.com/en/tutorial/configurar-a-duracao-de-chaves-de-api--kcGIFysFt02FDuhsfjQwZ). |
| **Roles** | Roles associated with the API key. |
| **Created date** | API key created date. |
| **Status** | API key status, which can be **Active** or **Inactive**. |

This page allows you to:

* [Generate keys](#generated-keys)  
* [Edit generated keys](#edit-generated-keys)
* [Deactivate or activate generated keys](#deactivate-or-activate-generated-keys)  
* [Renew tokens](#renew-tokens)  
* [Delete keys](#delete-keys)

## Generating keys

Follow the instructions below to create a new API key:  

1. In the top bar of the VTEX Admin, click your **profile avatar** — indicated by the first letter of your email — and then click *Account Settings > API Keys*.  
2. Make sure you are in the **Generated** tab.  
3. Click `+ Generate Key`.  
4. Complete the **Key identification** field with a name to identify the API key. This field is required.  
5. Select the [roles](https://help.vtex.com/en/tutorial/roles--7HKK5Uau2H6wxE1rH5oRbc) that will be associated with the key. By default, no role is pre-selected.  

   <div class="alert alert-error">
     Select only the roles required for the integration that will use the API key. Unrestricted use of overly permissive roles increases the risk of store attacks through leaked login credentials.
   </div>

6. Click `Generate`.

   You can view the new token from a single-access link, which is valid for 24 hours unless it is accessed.

7. Click <i class="far fa-clone"></i>`Copy` to copy the single-access link to the new token to the clipboard. This link will only be displayed once. Save it in a safe place. At this step, the key is already active and available for use.
8. Click <i class="fas fa-times"></i>`Close`.
9. Access the copied link or share it with the person that will use the new token. The link can only be accessed once and is valid for 24 hours if not accessed.  
10. Click `Copy` to copy the API token to the clipboard. This secret will only be displayed once. Save it in a safe place.

![one-time-link-en](//images.ctfassets.net/alneenqid6w5/6EPIyJw435gQ2QkLoBBi9G/22cf4dde1af767ec3b7c1a5be6c38d60/one-time-link-en.png)

> ⚠️ The official URL for accessing the token always follows the format `share.vtex.com/credentials/{token}`. The `{token}` is a random identifier generated when the key is created or renewed. Check the link format before accessing it to avoid phishing attempts or malicious pages.

## Editing generated keys

Follow the steps below to change an API key:  

1.	In the top bar of the VTEX Admin, click your **profile avatar** — indicated by the first letter of your email — and then click *Account Settings > API Keys*.
2.	Make sure you are in the **Generated** tab.
3.	In the row of the desired API key, click the kebab menu (⋮) and then <i class="fas fa-pencil-alt"></i> `Edit`.  
4.	Apply the desired changes from the options below:

   * Change the role selection associated with the API key.  
   * Check or uncheck the **Activate** option to deactivate or activate the generated key.  
5.	Click `Save`.  

## Deactivating or activating generated keys

If an API that has access to your account is compromised, you should immediately revoke its access to your account. You can generate a new key to replace the previous one if necessary.  

If you make a mistake, you can reactivate the API key to reestablish the impacted integration.  
Follow the steps below to change an API key:  

1. In the top bar of the VTEX Admin, click your **profile avatar** — indicated by the first letter of your email — and then click *Account Settings > API Keys*.  
2. Make sure you are in the **Generated** tab.  
3. In the row of the desired API key, click the kebab menu (⋮) and choose one of the following actions:  

   * **Deactivate:** If the key is **active**, click <i class="far fa-pause-circle"></i> `Deactivate` to deactivate it. This action will interrupt integrations using the key, so use it with caution. You need to click `Deactivate` again to confirm the action.  
   * **Activate:** If the key is **inactive**, click <i class="far fa-play-circle"></i>`Activate` to activate it.

<div class="alert alert-error">
  You should only reactivate an API key if you are sure it has not been compromised. Anyone with the associated API token can access your account when the key is active.
</div>

## Renewing tokens

Renewing your API token regularly is crucial for maintaining store security. To ensure continuous protection, renew your token before getting the [alert](https://help.vtex.com/en/tutorial/configurar-a-duracao-de-chaves-de-api--kcGIFysFt02FDuhsfjQwZ). Follow the instructions in [Renewing API tokens](https://help.vtex.com/en/tutorial/renovar-token-de-api--7r4AzptYjXErGHadg9LnJ3).

## Deleting keys

API keys that will no longer be used can be deleted. By deleting these keys, you can keep the list organized and make it easier to manage the keys in use.

> ⚠️ Ensure the API key is no longer in use by any integration before deleting it. This action cannot be undone.

To delete an API key permanently, follow the steps below:  

1. In the top bar of the VTEX Admin, click your **profile avatar** — indicated by the first letter of your email — and then click *Account Settings > API Keys*.  
2. Make sure you are in the **Generated** tab.  
3. In the row of the desired API key, click the kebab menu (⋮) and then <i class="far fa-trash-alt"></i> `Delete Key`.  
4. Check the option *I understand that this action cannot be undone*.  
5. Click `Delete` to confirm.  

## Learn more

* [API Keys](https://help.vtex.com/en/tutorial/api-keys--4bFEmcHXgpNksoePchZyy6)
* [Renewing API tokens](https://help.vtex.com/en/tutorial/renovar-token-de-api--7r4AzptYjXErGHadg9LnJ3)
* [Configuring alerts to renew API tokens](https://help.vtex.com/en/tutorial/configuring-the-duration-of-the-api-keys--kcGIFysFt02FDuhsfjQwZ)
* [External keys](https://help.vtex.com/en/tutorial/external-keys--1isU0HfKkeg0atlxRha14Q)
