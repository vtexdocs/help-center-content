---
title: 'Setting up 3DS 2 authentication flow'
id: 58XMn5LOA6fwrSkoDoAsg2
status: PUBLISHED
createdAt: 2020-11-26T18:03:32.678Z
updatedAt: 2023-03-26T21:53:00.302Z
publishedAt: 2023-03-26T21:53:00.302Z
firstPublishedAt: 2020-12-22T12:00:47.453Z
contentType: tutorial
productTeam: Financial
author: 7qy2DBsUp8U5P9lqV0JHfR
slug: setting-up-3ds-2-authentication-flow
locale: en
legacySlug: setting-up-3ds-2-authentication-flow
subcategory: 3tDGibM2tqMyqIyukqmmMw
---

3D Secure 2.0 (3DS 2) is an authentication flow that increases security in payments made with credit and debit cards, through the internal analysis of a large amount of data present in each transaction.

<div class = "alert alert-warning">
<p>3DS 2 is only supported for some VTEX affiliations. Check with your payment provider and Admin VTEX if this functionality is available.</p>
</div>

Before starting the configuration, it is necessary to open a ticket with the VTEX support team requesting the 3DS 2 activation in your store. For more information, see [how to open a ticket](https://help.vtex.com/en/tutorial/opening-tickets-to-vtex-support--16yOEqpO32UQYygSmMSSAM).

>⚠️ On VTEX, 3DS 2 does not make purchases with two cards. If an order is placed under these conditions, payment will be canceled.            

## Configuring 3DS 2

To configure 3DS 2 authentication on affiliations, follow the steps below:

1. In the VTEX Admin, go to **Store Settings** > **Payment** > **Settings**, or type **Settings** in the search bar at the top of the page.
2. In the __Gateway Affiliations__ tab, click on the __+__ button.
3. Select the provider you want to configure.
4. Click the button to activate the __Live/Production mode__.
5. Fill in the other configuration fields with the data provided by the chosen provider.
6. In the __Suporte 3DS 2.0__ field, select the __“Yes”__ option.
7. Click on __Save__.

>⚠️ The 3DS 2 field description (**"Suporte 3DS 2.0"**, reported in Step 8) may vary according to the type of payment provider to be configured. Check with your chosen payment provider's technical support to identify the correct field to select to enable 3DS 2 authentication.
