---
title: 'Setting up 3DS 2 authentication flow'
id: 58XMn5LOA6fwrSkoDoAsg2
status: PUBLISHED
createdAt: 2020-11-26T18:03:32.678Z
updatedAt: 2024-10-11T18:26:03.785Z
publishedAt: 2024-10-11T18:26:03.785Z
firstPublishedAt: 2020-12-22T12:00:47.453Z
contentType: tutorial
productTeam: Financial
author: 7qy2DBsUp8U5P9lqV0JHfR
slugEN: setting-up-3ds-2-authentication-flow
locale: en
legacySlug: setting-up-3ds-2-authentication-flow
subcategoryId: 3tDGibM2tqMyqIyukqmmMw
---

3D Secure 2.0 (3DS 2) is an authentication flow that increases security in payments made with credit and debit cards, through the internal analysis of a large amount of data present in each transaction.

>⚠️ 3DS 2 is only supported for some VTEX affiliations. Check with your payment provider and Admin VTEX if this functionality is available.

Before starting configuration, contact the payment provider with which you have a contract to check if the 3DS 2 service is already available and enabled on VTEX.

>⚠️ On VTEX, 3DS 2 does not make purchases with two cards. If an order is placed under these conditions, payment will be canceled.            

## Configuring 3DS 2

To configure 3DS 2 authentication on providers, follow the steps below:

1. In the VTEX Admin, go to __Store Settings > Payment > Providers__, or type __Providers__ in the search bar at the top of the page.
2. On the providers screen, click the `New Provider` button.
3. Select the provider you want to configure.
4. In the __Support 3DS 2.0__ field, select the __"Yes"__ option.
5. Fill in the other configuration fields with the data provided by the chosen provider.
6. Click `Save`.

>⚠️ The 3DS 2 field description (**"Support 3DS 2.0"**, reported in Step 4) may vary according to the type of payment provider to be configured. Check with your chosen payment provider's technical support to identify the correct field to select to enable 3DS 2 authentication.
