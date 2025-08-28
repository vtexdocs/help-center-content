---
title: 'Configuring ClearsaleV4 antifraud'
id: 6NB6ks5BSvMERqCvQESK9Z
status: PUBLISHED
createdAt: 2024-11-08T18:21:22.485Z
updatedAt: 2024-11-08T20:25:06.541Z
publishedAt: 2024-11-08T20:25:06.541Z
firstPublishedAt: 2024-11-08T20:21:39.742Z
contentType: tutorial
productTeam: Financial
author: 6DODK49lJPk3yvcoe6GB6g
slugEN: configuring-clearsale-v4-antifraud
legacySlug: configuring-clearsale-v4-antifraud
locale: en
subcategoryId: 3tDGibM2tqMyqIyukqmmMw
---

At VTEX, it is possible to integrate with ClearSaleV4 [anti-fraud](https://help.vtex.com/en/tutorial/how-to-configure-the-anti-fraud--tutorials_446). Through this system, it is possible to increase the level of security in payment transactions carried out in your store using risk analyzes that identify possible fraud.

To configure ClearSaleV4, follow the steps below:

1. In the VTEX Admin, go to __Store Settings > Payment > Providers__, or type __Providers__ in the search bar at the top of the page.
2. On the providers screen, click the `New Provider` button.
3. Type the name __ClearSaleV4__ in the search bar and click on the name of the provider.
4. If you wish to modify the identification name to be displayed for the ClearSaleV4 provider on the VTEX Admin screen, enter the information in the __Name__ field in __Basic Information__.
5. In __Payment Control__, select whether you want to activate the provider in a test environment by clicking __Enable test mode__.
6. Fill in the __Application Key__ and __Application Token__ fields with your login and password configured on Clearsale.
7. In __Enable Risk Pre-Analysis__, select the __No__ option.
8. In __Enable Analysis on debit payments__, select the desired option.
9. In __Product__, enter __4__.
10. In __B2BB2C__, select the desired option.
11. In __AbsoluteSlaValue__, enter the time in minutes for analysis SLA.
12. The __CustomObservation__ field is not necessary to fill in.
13. Click `Save`.

## Associating the anti-fraud with a payment condition
After setting up Clearsale's anti-fraud system, it will be available for use in your store. But you must associate it with the payment conditions, either the ones that are already configured or the ones that you are still going to make available.

1. In the VTEX Admin, access __Store Settings > Payment > Settings__, or type __Settings__ in the search bar at the top of the page.
2. On the __Payment Conditions__ tab, click the `+` button.
3. Click on the desired condition or [create a new payment condition](/en/tutorial/how-to-configure-payment-condition).
5. Check the __Use anti-fraud solution__ option.
6. Select __ClearsaleV4__.
7. Click `Save`.

> ⚠️ For a transaction to go through antifraud analysis, **the payment condition used by the customer must be associated with it**.
