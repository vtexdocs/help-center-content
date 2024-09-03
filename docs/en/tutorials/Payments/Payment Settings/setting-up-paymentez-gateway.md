---
title: 'Setting up Paymentez gateway'
id: 7zmH2WCtVuAoUUQWyU2qgO
status: ARCHIVED
createdAt: 2018-03-28T17:47:41.909Z
updatedAt: 2024-03-18T19:16:05.956Z
publishedAt: 
firstPublishedAt: 2018-03-28T18:18:57.206Z
contentType: tutorial
productTeam: Financial
author: 245tA425AIeioKAk2eaiwS
slug: setting-up-paymentez-gateway
locale: en
legacySlug: setting-up-paymentez-gateway
subcategoryId: 3tDGibM2tqMyqIyukqmmMw
---

>❗ This payment integration can no longer be configured on the platform due to the [legacy provider removal process](https://help.vtex.com/en/announcements/legacy-payment-connectors-will-be-discontinued-in-2024--4R5YIjUu1IWkiOHzXtQU14) and the article will soon be removed from the Help Center. Check with your provider for more information about developing the new payment integration and the steps required for migrating settings in your store.

Paymentez is a [gateway](/en/tutorial/what-is-a-payment-gateway) with [PCI certification](/en/faq/what-is-the-pci-ssc) level 2 and has its operations concentrated in Latin America.

To configure Paymentez, follow the steps below:

1. In the VTEX Admin, go to __Store Settings > Payment > Providers__, or type __Providers__ in the search bar at the top of the page.
2. On the providers screen, click the `New Provider` button.
3. Type the name __Paymentez__ in the search bar and click on the name of the provider.
4. In the __External Service Url__ field, you must configure the external URL that will be associated with `/pvt/payments?an={AccountName}`.
5. Fill in the registration fields with the data provided by Paymentez (_appKey_ and _appToken_ fields).
6. In __Implements Installments Service__, choose whether you want to use external installment services or the one that is configured on the portal. If you choose _yes_, the system will use the URL configured in the __Installments Service Url__ field.
7. In __External Cancellation Service__, define whether or not to use an external cancellation service. If you choose _yes_, the system will use the URL configured in the __External Service Url__ field.
8. In the __Installments Service Url__ field, you must configure the external URL that will be associated with `/options`.
9. In __SoftDescriptor__, insert the thext that will appear to identify the transactions made in your store.
10. In __Early security capture__ , choose how long you want the capture to take after the transaction approval and anti-fraud analysis. You can also disable this function.
11. In __Have an anti-fraud deal with this affiliation?__ , tell us if you wish to use anti-fraud.
12. Click `Save`.

To configure the payment methods to be processed by Paymentez, access [Configuring Payment Conditions](https://help.vtex.com/en/tutorial/how-to-configure-payment-conditions--tutorials_455#).

To set special conditions on payment methods, go to [Configuring payment special conditions](https://help.vtex.com/en/tutorial/special-conditions--tutorials_456#).

After following the indicated steps, Paymentez may take up to 10 minutes to appear at your store's checkout as a payment option.
