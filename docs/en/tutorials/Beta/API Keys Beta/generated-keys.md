---
title: 'Generated keys (Beta)'
id: 7fnU4iZdvZKbxCaT3Ymdjc
status: PUBLISHED
createdAt: 2024-09-30T18:39:21.339Z
updatedAt: 2025-02-05T19:20:40.887Z
publishedAt: 2025-02-05T19:20:40.887Z
firstPublishedAt: 2024-10-08T19:18:05.329Z
contentType: tutorial
productTeam: Identity
author: 1malnhMX0vPThsaJaZMYm2
slugEN: generated-keys
locale: en
legacySlug: generated-keys-beta
subcategoryId: 3OlaStejO5MSzvDSU3VCH3
---

<div class="alert alert-info">
  <p>This feature is in closed beta, so only selected clients can access it now. If you are interested in implementing it in the future, please contact <a href="https://support.vtex.com/hc/en-us">our Support team</a>.</p>
</div>

Internal API keys are credentials generated in and managed by your VTEX account. This means you should have access to all pairs of API keys and tokens, which is akin to usernames and passwords for API integrations.  

The **Generated** tab lists the API keys created by your account.

![apikeys-en](https://raw.githubusercontent.com/vtexdocs/help-center-content/refs/heads/main/docs/en/tutorials/Beta/API%20Keys%20Beta/generated-keys_1.png)

The page displays the following information in a table:  

| Column | Description |
| :---- | :---- |
| **Key/Name** | API key, followed by the name defined when creating the key. |
| **Token duration** | Duration of the API token. |
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
5. Select the [roles](/en/tutorial/roles--7HKK5Uau2H6wxE1rH5oRbc) that will be associated with the key. By default, no role is pre-selected.  

   <div class="alert alert-error">
     <p>Select only the roles required for the integration that will use the API key. Unrestricted use of overly permissive roles increases the risk of store attacks through leaked login credentials.</p>
   </div>

6. Click `Generate`.
7. Click <i class="far fa-clone"></i>`Copy` to copy the API token to the clipboard. This secret will only be displayed once. Save it in a safe place. At this step, the key is already active and available for use.
8. Click <i class="fas fa-times"></i>`Close`.

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
  <p>You should only reactivate an API key if you are sure it has not been compromised. Anyone with the associated API token can access your account when the key is active.</p>
</div>

## Renewing tokens

The token associated with an API key is only valid during the period set when [configuring the duration of API keys](#). You must renew the API token before it expires to maintain continuous access to resources and guarantee security.  

To do this, follow the instructions described in [Renewing API tokens](#).

## Deleting keys

API keys that will no longer be used can be deleted. By deleting these keys, you can keep the list organized and make it easier to manage the keys in use.

<div class="alert alert-warning">
  <p>Ensure the API key is no longer in use by any integration before deleting it. This action cannot be undone.</p>
</div>

To delete an API key permanently, follow the steps below:  

1. In the top bar of the VTEX Admin, click your **profile avatar** — indicated by the first letter of your email — and then click *Account Settings > API Keys*.  
2. Make sure you are in the **Generated** tab.  
3. In the row of the desired API key, click the kebab menu (⋮) and then <i class="far fa-trash-alt"></i> `Delete Key`.  
4. Check the option *I understand that this action cannot be undone*.  
5. Click `Delete` to confirm.  

## Learn more

* [API Keys (Beta)](/en/tutorial/api-keys--4bFEmcHXgpNksoePchZyy6)
* [Configuring the duration of API keys (Beta)](/en/tutorial/configuring-the-duration-of-the-api-keys--kcGIFysFt02FDuhsfjQwZ)
* [External keys (Beta)](/en/tutorial/external-keys--1isU0HfKkeg0atlxRha14Q)
