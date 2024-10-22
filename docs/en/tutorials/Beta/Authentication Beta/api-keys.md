---
title: 'API keys (Beta)'
id: 4bFEmcHXgpNksoePchZyy6
status: PUBLISHED
createdAt: 2024-09-30T18:35:47.348Z
updatedAt: 2024-10-08T18:26:20.965Z
publishedAt: 2024-10-08T18:26:20.965Z
firstPublishedAt: 2024-10-08T18:26:20.965Z
contentType: tutorial
productTeam: Identity
author: 1malnhMX0vPThsaJaZMYm2
slugEN: api-keys
locale: en
legacySlug: api-keys-beta
subcategoryId: 5uXA9a0laSLMkfbv6jQRDS
---

>ℹ️ This feature is in closed beta, so only selected clients can access it now. If you are interested in implementing it in the future, please contact [our Support team](https://support.vtex.com/hc/en-us).

Each API integration used to connect your VTEX account with external systems will require creating an **API key** For each key, an **API token** acts as a password for using that credential.  

These [authentication](https://developers.vtex.com/docs/guides/authentication) credentials ensure secure access to the data you want to share with these integrations without exposing your account to unauthorized users or applications.

For an API key to successfully make API requests to your account, it must be active and have [roles](https://help.vtex.com/en/tutorial/roles--7HKK5Uau2H6wxE1rH5oRbc) specifying the account resources it can access.  

The **API Keys** page in the VTEX Admin allows you to manage the API keys with access to your store. See the guides below for more details on the available actions and information on this page:  

* [Settings](https://help.vtex.com/en/tutorial/configuring-the-duration-of-api-keys--kcGIFysFt02FDuhsfjQwZ): Allows you to set the default duration of API keys generated in your account.
* [Generated keys](https://help.vtex.com/en/tutorial/generated-keys--7fnU4iZdvZKbxCaT3Ymdjc): Allows you to manage API keys created and managed by your VTEX account.
* [External keys](https://help.vtex.com/en/tutorial/external-keys--1isU0HfKkeg0atlxRha14Q): Allows you to manage API keys created and managed by other VTEX accounts, with access to specific resources in your account.

## Requirements for managing API keys

To manage API keys, you must have the  [User Administrator - RESTRICTED](https://help.vtex.com/en/tutorial/predefined-roles--jGDurZKJHvHJS13LnO7Dy#user-administrator-restricted) role or a [custom](https://help.vtex.com/en/tutorial/roles--7HKK5Uau2H6wxE1rH5oRbc#creating-a-role) role with the following resources:  

* *View API Keys* (view, filter, search for, and sort external and generated API keys)  
* *Edit API Keys* (create, delete, change status and add or remove API key permissions)  
* *Renew API token* (view and renew generated key tokens)  
* *Edit API Keys settings* (configure the duration for generated key tokens)

Learn more about each resource in [License Manager resources](https://help.vtex.com/en/tutorial/license-manager-resources--3q6ztrC8YynQf6rdc6euk3).
