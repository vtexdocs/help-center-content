---
title: 'Creating appKeys and appTokens to authenticate integrations'
id: 43tQeyQJgAKGEuCqQKAOI2
status: DRAFT
createdAt: 2017-10-24T13:30:43.908Z
updatedAt: 2020-06-04T02:30:41.953Z
publishedAt: 
firstPublishedAt: 2017-10-24T14:19:50.327Z
contentType: tutorial
productTeam: Channels
author: authors_24
slug: creating-appkeys-and-apptokens-to-authenticate-integrations
locale: en
legacySlug: creating-appkeys-and-apptokens-to-authenticate-integrations
subcategory: 4uqMnZjwBO04uWgCom8QiA
---

Every VTEX API integration needs to authenticate through appKey and appToken.

>⚠️ Only the **Master user** of the store has permission to deal with tokens. The Master user is the one whose email is in the **Contact** section of the Accounts screen, in Account management.

To create these keys, follow these steps:

1. In the new admin's sidebar, click on __Account Management__ and then on __Accounts__.
2. Type your account name in the __Search__ bar and then hit the _Enter_ button.
3. Click on your account name. You'll be redirected to the __Edit account__ page.
4. In the __Security__ section, click on __Generate appKey and appToken__.
5. Enter a label for the appKey and appToken pair you're creating.
6. Click on __Generate new Tokens__.
7. The token is in the field that is shown next. For a matter of safety, __it is shown only once__. Copy this token and save it in a safe place.

>⚠️ **Attention**: every appKey and appToken pair, once is created, is born without link to an access profile. So, after creating it, you should link it to the correspondent access profile.

For that, follow these steps:

1. In the __Security__ section, inside the __Accounts__ tab, copy the needed appKey, which is in the __Application key__ column.
2. Still inside the License Manager, enter the __Users__ tab and search for the key you copied.
3. Enter the user and [link it to the profiles](/en/tutorial/managing-users/) you want. This appKey will be able to authenticate integrations with the modules and features to which the chosen profile gives access.

After performing these procedures, authenticate to the API using __x-vtex-api-appKey__ and __x-vtex-api-appToken__ as follows:

1. Use the x-vtex-api-appKey for the Application Key informed in the Account management
2. Use x-vtex-api-appToken for the Token that was generated in Account management

In different systems, provided by others or not, usually the appKey corresponds to the user and the appToken to the passoword.
