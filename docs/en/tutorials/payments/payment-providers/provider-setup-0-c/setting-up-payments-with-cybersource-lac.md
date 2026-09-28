---
title: 'Setting up payments with Cybersource LAC'
id: Hp80vaO9BWAu6hBs4kqfg
status: PUBLISHED
createdAt: 2025-04-10T13:59:59.763Z
updatedAt: 2025-05-27T18:54:09.965Z
publishedAt: 2025-05-27T18:54:09.965Z
firstPublishedAt: 2025-04-10T14:17:24.584Z
contentType: tutorial
productTeam: Financial
author: 6DODK49lJPk3yvcoe6GB6g
slugEN: setting-up-payments-with-cybersource-lac
legacySlug: setting-up-payments-with-cybersource-lac
locale: en
subcategoryId: 3tDGibM2tqMyqIyukqmmMw
---

At VTEX, it is possible to integrate with the Cybersource LAC payment provider. With this provider, your store can make sales through credit and debit cards, Pix, notes payable and Visa Click To Pay.

To configure Cybersource LAC, follow the steps below:

1. In the VTEX Admin, go to __Store Settings > Payment > Providers__, or type __Providers__ in the search bar at the top of the page.
2. On the providers screen, click the `New Provider` button.
3. Type the name __Cybersource LAC__ in the search bar and click on the name of the provider.
4. In __Provider Authorization__, fill in the __App key__ and __App token__ fields with data provided by your account Cybersource LAC.
5. If you wish to modify the identification name to be displayed for the Cybersource LAC provider on the VTEX Admin screen, enter the information in the __Name__ field in __Basic Information__.
6. In __Payment Control__, select whether you want to activate the provider in a test environment by clicking __Enable test mode__.
7. In __Provider Fields__, configure the fields __Merchant ID__, __Secret Key__, __Shared Secret Key__, __SOAP Key__, __Domain (URL)__, __Merchant Category Code (MCC)__, __Company Name__, __Company Tax Id__, __Capture Setting__, __Acquiring Banks (Mexico)__, __Plan Type__, __Payer Authentication__, __Service Authentication__, __Auth Card Brands__, __Bank Slip Expiration Days (BR)__, __Has Network Token?__ and __Sandbox Mode__ according to the provider's instructions.
8. Click `Save`.

To configure the payment methods to be processed by Cybersource LAC, access [Configuring Payment Conditions](/en/tutorial/how-to-configure-payment-conditions--tutorials_455#).

To set special conditions on payment methods, go to [Configuring payment special conditions](/en/tutorial/special-conditions--tutorials_456#).

After following the indicated steps, Cybersource LAC may take up to 10 minutes to appear at your store's checkout as a payment option.
