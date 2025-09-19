---
title: 'Setting up payments with Credit Key'
id: 4TtmhhkcXQYnkaCPUa9adB
status: PUBLISHED
createdAt: 2023-04-20T14:33:42.988Z
updatedAt: 2024-01-25T17:48:48.188Z
publishedAt: 2024-01-25T17:48:48.188Z
firstPublishedAt: 2023-04-20T14:51:31.849Z
contentType: tutorial
productTeam: Financial
author: 6DODK49lJPk3yvcoe6GB6g
slugEN: setting-up-payments-with-credit-key
legacySlug: setting-up-payments-with-credit-key
locale: en
subcategoryId: 3tDGibM2tqMyqIyukqmmMw
---

At VTEX, it is possible to integrate with the Credit Key payment provider. With this provider, your store can make sales through Credit Key.

To configure Credit Key, follow the steps below:

1. In the VTEX Admin, go to __Store Settings > Payment > Providers__, or type __Providers__ in the search bar at the top of the page.
2. On the providers screen, click the `New Provider` button.
3. Type the name __CreditKey__ in the search bar and click on the name of the provider.
4. Fill in the __Application Key__ and __Application Token__ fields with data provided by Credit Key.
5. If an alert message appears indicating the need to install the app, click on the __Install app__ button and follow the installation instructions.
6. Click `Save`.

## Setting up payment condition 

1. In the VTEX Admin, go to __Store Settings > Payment > Settings__, or type __Settings__ in the search bar at the top of the page.
2. In the __Payment Conditions__ tab, click on the `+` button.
3. Click the __Credit Key__ payment method.
4. Activate the condition in the __Status__ field.
5. If you want to use an anti-fraud system, select the option __Use anti-fraud__.
6. If you wish, you can also configure [payment special conditions](/en/tutorial/special-conditions--tutorials_456).
7. Click `Save`.

After following the indicated steps, Credit Key may take up to 10 minutes to appear at your store's checkout as a payment option.
