---
title: 'Setting up payments with BraspagV2'
id:
status: PUBLISHED
createdAt: 2026-06-18T00:00:00.000Z
updatedAt: 2026-06-18T00:00:00.000Z
publishedAt: 2026-06-18T00:00:00.000Z
firstPublishedAt: 2026-06-18T00:00:00.000Z
contentType: tutorial
productTeam: Financial
author: authors_59
slugEN: setting-up-payments-with-braspagv2
legacySlug: setting-up-payments-with-braspagv2
locale: en
subcategoryId: 3tDGibM2tqMyqIyukqmmMw
---

At VTEX, it is possible to integrate with the BraspagV2 payment provider. Through this provider, your store can make sales using different payment methods, such as Visa, Mastercard, American Express, Discover, JCB, Diners, Elo, Hipercard, Aura, Banricompras, Credz, VirtualDebitElo, Cabal, Visa Electron, Maestro, Mastercard Debit e Privatelabels.

To configure BraspagV2, follow the steps below:

1. In the VTEX Admin, go to __Store Settings > Payment > Providers__, or type __Providers__ in the search bar at the top of the page.
2. On the providers screen, click the `New Provider` button.
3. Type the name __BraspagV2__ in the search bar and click on the name of the provider.
4. In __Provider Authorization__, fill in the __App Key__ and __App token__ fields with data provided by BraspagV2.
5. If you wish to modify the identification name to be displayed for the BraspagV2 provider on the VTEX Admin screen, enter the information in the __Name__ field in __Basic Information__.
6. In __Payment Control__, select whether you want to activate the provider in a test environment by clicking __Enable test mode__.
7. If you want to use [payment split](https://help.vtex.com/docs/tutorials/split-payment) in your store, select the option __Enable payout split and send payment recipients__ and indicate the __Accountable for payment processing charges__ and __Accountable for chargebacks__ (marketplace, sellers or marketplaces and sellers).
8. In __Provider Fields__, select or complete the fields __Provider__, __IsSplit__, __UseMpi__, __MpiClientId__, __MpiClientSecret__, __MpiMerchantName__, __MpiMCC__, and __MpiEstablishmentCode__ according to the provider`s instructions.
9. Click `Save`.

To configure the payment methods to be processed by BraspagV2, access [Configuring payment conditions](https://help.vtex.com/docs/tutorials/how-to-configure-payment-conditions).

To set special conditions on payment methods, go to [Configuring payment special conditions](https://help.vtex.com/docs/tutorials/special-conditions).

After following the indicated steps, BraspagV2 may take up to 10 minutes to appear at your store's checkout as a payment option.
