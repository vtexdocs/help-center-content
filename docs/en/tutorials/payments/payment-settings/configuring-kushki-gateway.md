---
title: 'Configuring Kushki gateway'
id: 69VC8nQMkEE0yu8oIyG2wG
status: PUBLISHED
createdAt: 2018-04-24T15:50:00.468Z
updatedAt: 2024-01-23T17:48:58.465Z
publishedAt: 2024-01-23T17:48:58.465Z
firstPublishedAt: 2018-04-24T19:47:19.057Z
contentType: tutorial
productTeam: Financial
author: 245tA425AIeioKAk2eaiwS
slugEN: configuring-kushki-gateway
legacySlug: setting-up-kushki-gateway
locale: en
subcategoryId: 3tDGibM2tqMyqIyukqmmMw
---

Kushki is a [gateway](/en/docs/tutorials/what-is-a-payment-gateway) with [PCI certification](/en/docs/tutorials/what-is-the-pci-ssc) focused on Latin America.

To set up Kushki, follow the steps below:

1. In the VTEX Admin, go to __Store Settings > Payment > Providers__, or type __Providers__ in the search bar at the top of the page.
2. On the providers screen, click the `New Provider` button.
3. Type the name __Kushkiv2__ in the search bar and click on the name of the provider.
4.	In the __App key__ and __App token__ fields, enter the information provided by Kushki.
5.	If you wish to modify the identification name to be displayed for the iugu provider on the VTEX Admin screen, enter the information in the __Name__ field in __Basic Information__. 
6.	In __Payment Control__, select whether you want to activate the provider in a test environment by clicking __Enable test mode__.
7.	Click `Save`.

To configure the payment methods to be processed by Kushki, access [Configuring Payment Conditions](/en/tutorial/how-to-configure-payment-conditions--tutorials_455#).

To set special conditions on payment methods, go to [Configuring payment special conditions](/en/tutorial/special-conditions--tutorials_456#).

After following the indicated steps, Kushki connector may take up to 10 minutes to appear at your store's checkout as a payment option.
