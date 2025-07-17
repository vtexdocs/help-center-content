---
title: 'Setting up payments with Cielo Orquestrador'
id: 24Ybk800ZUS2t04dBHnisz
status: PUBLISHED
createdAt: 2025-07-16T20:57:08.050Z
updatedAt: 2025-07-16T21:08:45.560Z
publishedAt: 2025-07-16T21:08:45.560Z
firstPublishedAt: 2025-07-16T21:08:45.560Z
contentType: tutorial
productTeam: Financial
author: 6DODK49lJPk3yvcoe6GB6g
slugEN: setting-up-payments-with-cielo-orquestrador
locale: en
legacySlug: setting-up-payments-with-cielo-orquestrador
subcategoryId: 3tDGibM2tqMyqIyukqmmMw
---

At VTEX, it is possible to integrate with the Cielo Orchestrator. With this system, your store can make sales through credit, debit, and private label cards, Pix, Bitcoin, Nubank, Google Pay, Apple Pay and OXXXO.

To configure Cielo Orchestrator, follow the steps below:

1. In the VTEX Admin, go to **Store Settings > Payment > Providers**, or type **Providers** in the search bar at the top of the page.
2. On the providers screen, click the `New Provider` button.
3. Type the name **Cielo Orchestrator** in the search bar and click on the name of the provider.
4. In **Provider Authorization**, fill in the **App key** and **App token** fields with data provided by your account Cielo Orchestrator.
5. If you wish to modify the identification name to be displayed for the Cielo Orchestrator on the VTEX Admin screen, enter the information in the **Name** field in **Basic Information**.
6. In **Payment Control**, select whether you want to activate the provider in a test environment by clicking **Enable test mode**.
7. If you want to use [payment split](If you want to use payment split in your store, select the option **Enable payout split and send payment recipients** and indicate the **Accountable for payment processing charges** and **Accountable for chargebacks** (marketplace, sellers or marketplaces and sellers).) in your store, select the option Enable payout split and send payment recipients and indicate the Accountable for payment processing charges and Accountable for chargebacks (marketplace, sellers or marketplaces and sellers).
8. Click `Save`.

To configure the payment methods to be processed by Cielo Orchestrator, access [Configuring Payment Conditions](/en/tutorial/how-to-configure-payment-conditions--tutorials_455).

To set special conditions on payment methods, go to [Configuring payment special conditions](/en/tutorial/special-conditions--tutorials_456).

After following the indicated steps, Cielo Orchestrator may take up to 10 minutes to appear at your store`s checkout as a payment option.
