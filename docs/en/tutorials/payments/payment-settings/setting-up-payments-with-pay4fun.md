---
title: 'Setting up payments with Pay4Fun'
id: 7xCpO35RMDRcp1UCvOGZX3
status: PUBLISHED
createdAt: 2024-02-05T14:53:57.694Z
updatedAt: 2024-03-13T15:15:38.399Z
publishedAt: 2024-03-13T15:15:38.399Z
firstPublishedAt: 2024-02-05T15:29:05.357Z
contentType: tutorial
productTeam: Financial
author: 6DODK49lJPk3yvcoe6GB6g
slugEN: setting-up-payments-with-pay4fun
legacySlug: setting-up-payments-with-pay4fun
locale: en
subcategoryId: 3tDGibM2tqMyqIyukqmmMw
---

At VTEX, it is possible to integrate with the Pay4Fun payment provider. With this provider, your store can make sales through PIX.

To configure Pay4Fun, follow the steps below:

1. In the VTEX Admin, go to __Store Settings > Payment > Providers__, or type __Providers__ in the search bar at the top of the page.
2. On the providers screen, click the `New Provider` button.
3. Type the name __Pay4Fun__ in the search bar and click on the name of the provider.
4. Fill in the __App key__ and __App token__ fields with data provided by your account Pay4Fun.
5. If you wish to modify the identification name to be displayed for the Pay4Fun provider on the VTEX Admin screen, enter the information in the __Name__ field in __Basic Information__.
6. In __Payment Control__, select whether you want to activate the provider in a test environment by clicking __Enable test mode__.
7. Click `Save`.

## Setting up the payment condition

1. In the VTEX Admin, go to __Store Settings > Payment > Settings__, or type __Settings__ in the search bar at the top of the page.
2. In the __Payment Conditions__ tab, click on the `+` button.
3. Click on __PIX__.
4. Activate the condition in the __Status__ field. 
5. In __Process with affiliation__, select the __p4fpartnerbr-pay4fun-v0__ option.
6. If you want, you can also [configure special payment conditions](/en/tutorial/condiciones-especiales--tutorials_456?&utm_source=autocomplete#).
7. Click `Save`.

After following the indicated steps, Pay4Fun may take up to 10 minutes to appear at your store's checkout as a payment option.
