---
title: 'Setting up payments with Worldline Global Collect'
slug: setting-up-payments-with-worldline-global-collect
hidden: false
createdAt: 2025-11-27T14:54:36.207Z
updatedAt: 2025-11-27T14:54:36.207Z
contentType: tutorial
productTeam: Financial
locale: en
---

At VTEX, it is possible to integrate with the Worldline Global Collect payment provider. With this provider, your store can make sales through credit cards, PayPal, ApplePay, Google Pay, iDEAL and Worldline Global Collect.

To configure Worldline Global Collect, follow the steps below:

1. In the VTEX Admin, go to __Store Settings > Payment > Providers__, or type __Providers__ in the search bar at the top of the page.
2. On the providers screen, click the `New Provider` button.
3. Type the name __worldline.globalcollect__ in the search bar and click on the name of the provider.
4. In __Provider Authorization__, fill in the __App Key__ and __App token__ fields with data provided by Worldline Global Collect.
5. If you wish to modify the identification name to be displayed for the Worldline Global Collect provider on the VTEX Admin screen, enter the information in the __Name__ field in __Basic Information__.
6. In __Payment Control__, select whether you want to activate the provider in a test environment by clicking __Enable test mode__.
7. In **Provider Fields**, select or complete the fields **Environment, Merchant ID, Webhook Key ID, Webhook Secret Key, Capture type, Payment Sub-domain, 3DS mode, Soft Descriptor** according to the provider's  instructions.
8. Click `Save`.

To configure the payment methods to be processed by Worldline Global Collect, access [Configuring Payment Conditions](/en/tutorial/how-to-configure-payment-conditions--tutorials_455#).

To set special conditions on payment methods, go to [Configuring payment special conditions](/en/tutorial/special-conditions--tutorials_456#).

After following the indicated steps, Worldline Global Collect may take up to 10 minutes to appear at your store's checkout as a payment option.
