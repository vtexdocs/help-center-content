---
title: 'Setting up payments with Yuno'
id: h7PS0vDJJokqI9axZPNzE
status: PUBLISHED
createdAt: 2023-04-14T12:42:43.736Z
updatedAt: 2024-01-23T21:56:16.050Z
publishedAt: 2024-01-23T21:56:16.050Z
firstPublishedAt: 2023-04-14T13:21:45.782Z
contentType: tutorial
productTeam: Financial
author: 6DODK49lJPk3yvcoe6GB6g
slug: setting-up-payments-with-yuno
locale: en
legacySlug: setting-up-payments-with-yuno
subcategory: 3tDGibM2tqMyqIyukqmmMw
---

At VTEX, it is possible to integrate with the Yuno payment provider. With this provider, your store can make sales through credit cards, bank invoice and notes payable.

To configure Yuno, follow the steps below:

1. In the VTEX Admin, go to __Store Settings > Payment > Providers__, or type __Providers__ in the search bar at the top of the page.
2. On the providers screen, click the `New Provider` button.
3. Type the name __Yuno__ in the search bar and click on the name of the provider.
4. Fill in the __Application Key__, __Application Token__ and __Account ID__ fields with data provided by your account Yuno.
5. In __Auto Capture__, select whether the payment capture will be automatic after authorization.
6. In __Delay To Capture (in days) Default 1 day, max 7 days__, fill in the period (in days) in which the payment capture must wait to be carried out. The default value is 1 day and the maximum is 7 days.
7. In __Delay To Cancel (in hours) Default 6 hours__, fill in the period (in hours), in which the transaction can be canceled after authorization. The default value is 6 hours.
8. If an alert message appears indicating the need to install the app, click on the `Install app` button and follow the installation instructions.
9. Click on `Save`.

To configure the payment methods to be processed by Yuno, access [Configuring Payment Conditions](https://help.vtex.com/en/tutorial/how-to-configure-payment-conditions--tutorials_455#).

To set special conditions on payment methods, go to [Configuring payment special conditions](https://help.vtex.com/en/tutorial/special-conditions--tutorials_456#).

After following the indicated steps, Yuno connector may take up to 10 minutes to appear at your store's checkout as a payment option.
