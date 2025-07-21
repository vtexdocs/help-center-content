---
title: 'Setting up payments with Geru'
id: 2XmYp4Uh1Yulv3a9puRgwm
status: PUBLISHED
createdAt: 2024-02-05T11:49:37.163Z
updatedAt: 2024-03-13T14:10:42.303Z
publishedAt: 2024-03-13T14:10:42.303Z
firstPublishedAt: 2024-02-05T13:45:07.728Z
contentType: tutorial
productTeam: Financial
author: 6DODK49lJPk3yvcoe6GB6g
slugEN: setting-up-payments-with-geru
locale: en
legacySlug: setting-up-payments-with-geru
subcategoryId: 3tDGibM2tqMyqIyukqmmMw
---

At VTEX, it is possible to integrate with the Geru payment provider. With this provider, your store can make sales through Geru and BNPL.

To configure Geru, follow the steps below:

1. In the VTEX Admin, go to __Store Settings > Payment > Providers__, or type __Providers__ in the search bar at the top of the page.
2. On the providers screen, click the `New Provider` button.
3. Type the name __Geru__ in the search bar and click on the name of the provider.
4. Fill in the __App key__ and __App token__ fields with data provided by your account Geru.
5. If you wish to modify the identification name to be displayed for the Geru provider on the VTEX Admin screen, enter the information in the __Name__ field in __Basic Information__.
6. In __Payment Control__, select whether you want to activate the provider in a test environment by clicking __Enable test mode__.
7. Click `Save`.

## Setting up the payment condition

1. In the VTEX Admin, go to __Store Settings > Payment > Settings__, or type __Settings__ in the search bar at the top of the page.
2. In the __Payment Conditions__ tab, click on the `+` button.
3. Click on __Geru__ or __BNPL__.
4. Activate the condition in the __Status__ field. To use __BNPL__, in __Process with affiliation__, select the __boletoflex-geru-v0__ option.
5. If you want to use an anti-fraud system, select the option __Use anti-fraud solution__.
6. If you want, you can also [configure special payment conditions](/en/tutorial/condiciones-especiales--tutorials_456?&utm_source=autocomplete#).
7. Click `Save`.

After following the indicated steps, Geru may take up to 10 minutes to appear at your store's checkout as a payment option.
