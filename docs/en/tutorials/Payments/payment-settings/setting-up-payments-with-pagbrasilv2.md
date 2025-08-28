---
title: 'Setting up payments with PagBrasilV2'
id: 5ONHAWmRbZpNIDPXCkNJXD
status: PUBLISHED
createdAt: 2024-03-13T16:31:07.244Z
updatedAt: 2024-03-13T22:24:02.876Z
publishedAt: 2024-03-13T22:24:02.876Z
firstPublishedAt: 2024-03-13T22:21:24.967Z
contentType: tutorial
productTeam: Financial
author: 245tA425AIeioKAk2eaiwS
slugEN: setting-up-payments-with-pagbrasilv2
legacySlug: setting-up-payments-with-pagbrasilv2
locale: en
subcategoryId: 3tDGibM2tqMyqIyukqmmMw
---

At VTEX, it is possible to integrate with the payment provider PagBrasilV2. Through this provider, your store can make sales using debit and credit cards, bank slips, notes payable and PIX.

To configure PagBrasilV2, follow the steps below:

1. In the VTEX Admin, access __Store Settings > Payment > Providers__, or type __Providers__ in the search bar at the top of the page.
2. On the providers screen, click the `New provider` button.
3. Type the name __PagBrasil-v2__ in the search bar and click on the name of the provider.
4. In __Provider Authorization__, fill in the __App Key__ and __App Token__ fields with your PagBrasilV2 account information.
5. If you wish to modify the identification name to be displayed for the PagBrasilV2 provider on the VTEX Admin screen, enter the information in the __Name__ field in __Basic Information__.
6. In __External Service Url__, enter the external URL that will be associated with `/pvt/payments?an={AccountName}`.
7. In __Implements Installments Service__, select whether you want to use external installment services or what is configured in the portal. If you choose the __Yes__ option, the system will use the URL configured in the __Installments Service Url__ field.
8. In __External Cancellation Service__, select whether an external cancellation service should be used. If you choose the __Yes__ option, the system will access the URL configured in the __External Service Url__ field.
9. In __Installments Service Url__, enter the external URL that will be associated with `/options`.
10. In __SoftDescriptor__, indicate what information should appear to identify the transaction carried out in your store.
11. In __Captura antecipada__ (Early capture), choose how long you want the capture to be carried out (after transaction approval and anti-fraud analysis). This function can also be deactivated.
12. In __Do you have an anti-fraud agent hired with this affiliation?__, indicate whether you want to use an anti-fraud agent.
13. Click __Save__.

To configure the payment methods to be processed by PagBrasilV2, access [Configuring payment vonditions](https://help.vtex.com/en/tutorial/how-to-configure-payment-conditions--tutorials_455#).

To set special conditions on payment methods, go to [Configuring payment special conditions](https://help.vtex.com/en/tutorial/special-conditions--tutorials_456#).

After following the indicated steps, PagBrasilV2 may take up to 10 minutes to appear at your store's checkout as a payment option.
