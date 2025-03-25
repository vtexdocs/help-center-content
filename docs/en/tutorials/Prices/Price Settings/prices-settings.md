---
title: 'Prices Settings'
id: 3hbBtCzNUBrj8GaWgCtSWN
status: PUBLISHED
createdAt: 2020-10-14T18:43:49.750Z
updatedAt: 2024-10-14T19:01:25.144Z
publishedAt: 2024-10-14T19:01:25.144Z
firstPublishedAt: 2020-10-22T19:38:48.506Z
contentType: tutorial
productTeam: Marketing & Merchandising
author: 2o8pvz6z9hvxvhSoKAiZzg
slugEN: prices-settings
locale: en
legacySlug: price-configuration
subcategoryId: 3O1NvPgBPqE0qU88MSQaie
---

The **Store Settings > Products > Price Settings** page on VTEX Admin allows you to change general pricing settings in an easy and fast way. 

You can set the default markup and price variation limit for your store, as well as inherit prices from your parent account and overwrite sellers' prices with those from your account.

See all the available configurations below:

- **Default markup for new prices:** default profit percentage over a new price added to a product or service.
- **Use price variation limit:** ensures that SKU prices are not changed to undesired values.
  - **maximum decrease:** highest decrease in the price of a SKU.
  - **maximum increase:** highest increase in the price of a SKU.
- **Inherit from parent account:** option that allows the current account to inherit prices from a parent account. The price inheritance is done in the following situations:
  - **Always:** the account will always inherit all the prices from the parent account.
  - **Only for non-existent prices:** the parent account prices will be inherited only if they are non-existent in the current account.

  >ℹ️ The **Inherit prices from parent account** setting is available only for child accounts. The parent account is defined when the child account is created. Ensuring that the correct parent account is associated helps avoid issues related to pricing or stock availability.

- **Overwrite seller prices:** this option overwrites all seller prices with the ones from the current account. 

  >ℹ️ The configuration **Overwrite prices for sellers** is not available for white label sellers.

## Consulting the Parent Account
To check the parent account linked to a child account, use the following URL, replacing {AccountName} with the child account's name:

```
http://{AccountName}.myvtex.com/api/vlm/account
```

Upon accessing this URL, the API will return various account-related information. To identify the parent account, locate the `accountName` field in the API response. This field contains the name of the parent account linked to the specified child account.
