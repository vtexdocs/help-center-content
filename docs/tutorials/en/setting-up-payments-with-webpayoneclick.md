---
title: 'Setting up payments with WebpayOneClick'
id: 7jIwDOcBbF3cxIyHKaj4LF
status: PUBLISHED
createdAt: 2024-03-07T14:01:33.652Z
updatedAt: 2024-03-07T15:06:06.370Z
publishedAt: 2024-03-07T15:06:06.370Z
firstPublishedAt: 2024-03-07T15:06:06.370Z
contentType: tutorial
productTeam: Financial
author: 6DODK49lJPk3yvcoe6GB6g
slug: setting-up-payments-with-webpayoneclick
locale: en
legacySlug: setting-up-payments-with-webpayoneclick
subcategory: 3tDGibM2tqMyqIyukqmmMw
---

At VTEX, it is possible to integrate with the WebpayOneClick payment provider. With this provider, your store can make sales through Transbank Oneclick.

To configure WebpayOneClick, follow the steps below:

1. In the VTEX Admin, go to __Store Settings > Payment > Providers__, or type __Providers__ in the search bar at the top of the page.
2. On the providers screen, click the `New Provider` button.
3. Type the name __WebpayOneClick__ in the search bar and click on the name of the provider.
4. In __Provider Authorization__, fill in the __App key__ and __App token__ fields with data provided by your account WebpayOneClick.
5. If you wish to modify the identification name to be displayed for the WebpayOneClick provider on the VTEX Admin screen, enter the information in the __Name__ field in __Basic Information__.
6. Click `Save`.

## Setting up the payment condition

1. In the VTEX Admin, go to __Store Settings > Payment > Settings__, or type __Settings__ in the search bar at the top of the page.
2. In the __Payment Conditions__ tab, click on the `+` button.
3. Click __Transbank Oneclick__.
4. Activate the condition in the __Status__ field.
5. If you want to use an anti-fraud system, select the option __Use anti-fraud solution__.
6. If you want, you can also [configure special payment conditions](https://help.vtex.com/en/tutorial/condiciones-especiales--tutorials_456?&utm_source=autocomplete#).
7. Click `Save`.

After following the indicated steps, WebpayOneClick may take up to 10 minutes to appear at your store's checkout as a payment option.
