---
title: 'Setting up payments with Izipay'
id: 7bGGw6A9xidRfaOhOU1Ibd
status: PUBLISHED
createdAt: 2024-10-11T13:44:41.815Z
updatedAt: 2024-10-11T14:23:38.542Z
publishedAt: 2024-10-11T14:23:38.542Z
firstPublishedAt: 2024-10-11T14:23:38.542Z
contentType: tutorial
productTeam: Financial
author: 6DODK49lJPk3yvcoe6GB6g
slugEN: setting-up-payments-with-izipay
locale: en
legacySlug: setting-up-payments-with-izipay
subcategoryId: 3tDGibM2tqMyqIyukqmmMw
---

At VTEX, it is possible to integrate with the Izipay payment provider. With this provider, your store can make sales through izipay.

To configure Izipay, follow the steps below:

1. In the VTEX Admin, go to __Store Settings > Payment > Providers__, or type __Providers__ in the search bar at the top of the page.
2. On the providers screen, click the `New Provider` button.
3. Type the name __izipay__ in the search bar and click on the name of the provider.
4. In __Provider Authorization__, fill in the __App Key__ and __App token__ fields with data provided by Izipay.
5. If you wish to modify the identification name to be displayed for the Izipay provider on the VTEX Admin screen, enter the information in the __Name__ field in __Basic Information__.
6. In __Payment Control__, select whether you want to activate the provider in a test environment by clicking __Enable test mode__.
7. If you want to use [payment split](https://help.vtex.com/en/tutorial/split-payment--6k5JidhYRUxileNolY2VLx) in your store, select the option __Enable payout split and send payment recipients__ and indicate the __Accountable for payment processing charges__ and __Accountable for chargebacks__ (marketplace, sellers or marketplaces and sellers).
8. In __Campos do provedor__, enter the __pay.method__, __url.notification__, __language__, __appearance.logo
__,  __appearance.customTheme.colors.backgroundColor__ e __appearance.customTheme.colors.textColor__ information according to your Izipay account information.
9. Click `Save`.

## Setting up the payment condition

1. In the VTEX Admin, go to __Store Settings > Payment > Settings__, or type __Settings__ in the search bar at the top of the page.
2. In the __Payment Conditions__ tab, click on the `+` button.
3. Click on __izipay__.
4. Activate the condition in the __Status__ field.
5. If you want to use an anti-fraud system, select the option __Use anti-fraud solution__.
6. If you want, you can also [configure special payment conditions](https://help.vtex.com/en/tutorial/condiciones-especiales--tutorials_456?&utm_source=autocomplete#).
7. Click `Save`.

After following the indicated steps, Izipay may take up to 10 minutes to appear at your store's checkout as a payment option.
