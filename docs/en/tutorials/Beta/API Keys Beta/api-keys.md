---
title: 'API keys (Beta)'
id: 4bFEmcHXgpNksoePchZyy6
status: PUBLISHED
createdAt: 2024-09-30T18:35:47.348Z
updatedAt: 2025-02-05T19:46:51.454Z
publishedAt: 2025-02-05T19:46:51.454Z
firstPublishedAt: 2024-10-08T18:26:20.965Z
contentType: tutorial
productTeam: Identity
author: 1malnhMX0vPThsaJaZMYm2
slugEN: api-keys
locale: en
legacySlug: api-keys-beta
subcategoryId: 3OlaStejO5MSzvDSU3VCH3
---

<div class="alert alert-info">
  <p>This feature is in closed beta, so only selected clients can access it now. If you are interested in implementing it in the future, please contact <a href="https://support.vtex.com/hc/en-us">our Support team</a>.</p>
</div>

Each API integration used to connect your VTEX account with external systems will require creating an **API key** For each key, an **API token** acts as a password for using that credential.  

These [authentication](https://developers.vtex.com/docs/guides/authentication) credentials ensure secure access to the data you want to share with these integrations without exposing your account to unauthorized users or applications.

For an API key to successfully make API requests to your account, it must be active and have [roles](/en/tutorial/roles--7HKK5Uau2H6wxE1rH5oRbc) specifying the account resources it can access.  

The **API Keys** page in the VTEX Admin allows you to manage the API keys with access to your store. See the guides below for more details on the available actions and information on this page:  

* [Settings](/en/tutorial/configuring-the-duration-of-api-keys--kcGIFysFt02FDuhsfjQwZ): Allows you to set the default duration of API keys generated in your account.

   ![apikeys-settings-en](https://raw.githubusercontent.com/vtexdocs/help-center-content/refs/heads/main/docs/en/tutorials/Beta/API%20Keys%20Beta/api-keys_1.png)

* [Generated keys](/en/tutorial/generated-keys--7fnU4iZdvZKbxCaT3Ymdjc): Allows you to manage API keys created and managed by your VTEX account.

   ![apikeys-en](https://raw.githubusercontent.com/vtexdocs/help-center-content/refs/heads/main/docs/en/tutorials/Beta/API%20Keys%20Beta/api-keys_2.png)

* [External keys](/en/tutorial/external-keys--1isU0HfKkeg0atlxRha14Q): Allows you to manage API keys created and managed by other VTEX accounts, with access to specific resources in your account.

  ![apikeys-external-en](https://raw.githubusercontent.com/vtexdocs/help-center-content/refs/heads/main/docs/en/tutorials/Beta/API%20Keys%20Beta/api-keys_3.png)

## Requirements for managing API keys

To manage API keys, you must have the  [User Administrator - RESTRICTED](/en/tutorial/predefined-roles--jGDurZKJHvHJS13LnO7Dy#user-administrator-restricted) role or a [custom](/en/tutorial/roles--7HKK5Uau2H6wxE1rH5oRbc#creating-a-role) role with the following resources:  

* *View API Keys* (view, filter, search for, and sort external and generated API keys)  
* *Edit API Keys* (create, delete, change status and add or remove API key permissions)  
* *Renew API token* (view and renew generated key tokens)  
* *Edit API Keys settings* (configure the duration for generated key tokens)

Learn more about each resource in [License Manager resources](/en/tutorial/license-manager-resources--3q6ztrC8YynQf6rdc6euk3).
