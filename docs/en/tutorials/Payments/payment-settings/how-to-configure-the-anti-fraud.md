---
title: 'Configuring the anti-fraud'
id: tutorials_446
status: PUBLISHED
createdAt: 2017-04-27T22:05:02.912Z
updatedAt: 2024-03-13T12:04:32.047Z
publishedAt: 2024-03-13T12:04:32.047Z
firstPublishedAt: 2017-04-27T23:03:25.730Z
contentType: tutorial
productTeam: Financial
author: authors_84
slugEN: how-to-configure-the-anti-fraud
legacySlug: how-to-configure-the-anti-fraud
locale: en
subcategoryId: 3tDGibM2tqMyqIyukqmmMw
---

Anti-fraud is an external system that identifies fraud and allows you to increase security in payment transactions carried out during online purchases. At VTEX, you can choose some anti-fraud provider options to use in your store.

To configure an anti-fraud provider, follow the steps below:

1. In the VTEX Admin, go to __Store Settings > Payment > Providers__, or type __Providers__ in the search bar at the top of the page.
2. On the providers screen, click the `New Provider` button.
3. Type the desired anti-fraud provider in the search bar and click on its name.
4. Fill in the form fields with the data indicated by the anti-fraud provider.
5. Click `Save`.

After enabling the anti-fraud provider, you need to associate it with one or more payment methods. To perform this operation, follow the steps below:

1. In the VTEX Admin, access __Store Settings > Payments > Settings__, or type __Settings__ in the search bar at the top of the page.
2. In the __Payment Conditions__ tab, click the `+` button.
3. Click on the desired payment method.
4. Fill in the __Condition name__ field with a name of your choice for identification.
5. Activate the condition in the __Status__ field.
6. In __Process with provider__ select the desired payment provider.
7. In __Use anti-fraud solution__, select the previously enabled anti-fraud provider, if available for use with this payment method.
8. Click `Save`.
