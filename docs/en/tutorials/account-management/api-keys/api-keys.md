---
title: 'API keys'
id: 4bFEmcHXgpNksoePchZyy6
status: PUBLISHED
createdAt: 2024-09-30T18:35:47.348Z
updatedAt: 2025-08-13T14:18:57.598Z
publishedAt: 2025-08-13T14:18:57.598Z
firstPublishedAt: 2024-10-08T18:26:20.965Z
contentType: tutorial
productTeam: Identity
author: 1malnhMX0vPThsaJaZMYm2
slugEN: api-keys
legacySlug: api-keys-beta
locale: en
subcategoryId: 3OlaStejO5MSzvDSU3VCH3
---

Each API integration used to connect your VTEX account with external systems will require creating an **API key**. For each key, an **API token** acts as a password for using that credential.  

These [authentication](https://developers.vtex.com/docs/guides/authentication) credentials ensure secure access to the data you want to share with these integrations without exposing your account to unauthorized users or applications.

For an API key to successfully make API requests to your account, it must be active and have [roles](/en/tutorial/roles--7HKK5Uau2H6wxE1rH5oRbc) specifying the account resources it can access.  

## Types of API keys

There are two types of API keys: [internal](#internal-keys) or [external](#external-keys). This definition depends on which account creates, manages, and uses the credential.

### Internal keys

[Internal API keys](/en/tutorial/generated-keys--7fnU4iZdvZKbxCaT3Ymdjc) are credentials generated in and managed by your VTEX account. This means you should have access to all pairs of API keys and tokens, which is akin to usernames and passwords for API integrations.

### External keys

[External API keys](/en/tutorial/external-keys--1isU0HfKkeg0atlxRha14Q) are credentials generated in and managed by other VTEX accounts. By adding [roles](/en/tutorial/roles--7HKK5Uau2H6wxE1rH5oRbc) to API keys — which are equivalent to usernames — provided by third parties, you can allow them to access specific resources in your account.

## Managing API keys

The **API Keys** page in the VTEX Admin allows you to manage the API keys with access to your store. See the guides below for more details on the available actions and information on this page:

* [Export API keys](/en/tutorial/exporting-api-keys--1p4eYJWD26gOdicUdiiGC5): Allows you to download a spreadsheet with details about both generated and external API keys.

* [Settings](/en/tutorial/configuring-the-duration-of-api-keys--kcGIFysFt02FDuhsfjQwZ): Allows you to define the period after which a token renewal will be recommended. When a token reaches the defined threshold, the interface will display an alert indicating that the token should be renewed. This setting applies to all API key tokens.

   > ℹ️ Tokens don’t expire automatically after the set period. The setting only determines when the interface will suggest renewal.

   ![token-renewal-en](https://raw.githubusercontent.com/vtexdocs/help-center-content/refs/heads/main/docs/en/tutorials/account-management/api-keys/api-keys_1.png)

* [Generated keys](/en/tutorial/generated-keys--7fnU4iZdvZKbxCaT3Ymdjc): Allows you to manage API keys created and managed by your VTEX account.

   ![generated-keys-en](https://raw.githubusercontent.com/vtexdocs/help-center-content/refs/heads/main/docs/en/tutorials/account-management/api-keys/api-keys_2.png)

* [External keys](/en/tutorial/external-keys--1isU0HfKkeg0atlxRha14Q): Allows you to manage API keys created and managed by other VTEX accounts, with access to specific resources in your account.

  ![apikeys-external-en](https://raw.githubusercontent.com/vtexdocs/help-center-content/refs/heads/main/docs/en/tutorials/account-management/api-keys/api-keys_3.png)

## Requirements for managing API keys

To manage API keys, you must have the  [User Administrator - RESTRICTED](/en/tutorial/predefined-roles--jGDurZKJHvHJS13LnO7Dy#user-administrator-restricted) role or a [custom](/en/tutorial/roles--7HKK5Uau2H6wxE1rH5oRbc#creating-a-role) role with the following resources:  

* *View API Keys* (view, filter, search for, sort, and export external and generated API keys)  
* *Edit API Keys* (create, delete, change status and add or remove API key permissions)  
* *Renew API token* (view and renew generated key tokens)  
* *Edit API Keys settings* (configure the duration for generated key tokens)

Learn more about each resource in [License Manager resources](/en/tutorial/license-manager-resources--3q6ztrC8YynQf6rdc6euk3).

## Learn more

* [Configuring the duration of API keys](/pt/tutorial/configurar-a-duracao-de-chaves-de-api--kcGIFysFt02FDuhsfjQwZ)  
* [External keys](/en/tutorial/chaves-terceiras--1isU0HfKkeg0atlxRha14Q)  
* [Generated keys](/en/tutorial/chaves-geradas--7fnU4iZdvZKbxCaT3Ymdjc)  
* [Renewing API tokens](/en/tutorial/renovar-token-de-api--7r4AzptYjXErGHadg9LnJ3)
