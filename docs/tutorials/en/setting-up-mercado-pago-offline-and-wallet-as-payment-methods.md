---
title: 'Setting up Mercado Pago Offline and Wallet as payment methods'
id: 1oXH6VnfhGcVHdE7RD6cpd
status: PUBLISHED
createdAt: 2021-11-30T22:49:18.953Z
updatedAt: 2023-03-23T15:44:05.324Z
publishedAt: 2023-03-23T15:44:05.324Z
firstPublishedAt: 2021-11-30T23:24:03.450Z
contentType: tutorial
productTeam: Financial
author: 6DODK49lJPk3yvcoe6GB6g
slug: setting-up-mercado-pago-offline-and-wallet-as-payment-methods
locale: en
legacySlug: setting-up-mercado-pago-offline-and-wallet-as-payment-methods
subcategory: 3tDGibM2tqMyqIyukqmmMw
---

O Mercado Pago has some exclusive payment methods, among which we can highlight in this article:
- __Mercado Pago Offline__:  allows the use of [offline payment conditions available in Latin America](https://help.vtex.com/en/tutorial/what-offline-payment-conditions-are-available-in-latin-america--2lXPwiH6KcsSMuWaoigueq#).
- __Mercado Pago Wallet__: digital wallet that allows you to pay using the credits in your Mercado Pago account.

To use Mercado Pago's solutions, contact VTEX and request the installation of the “Mercado Pago Payment APP” application. If the application is not installed, your customer will not see the popup to complete the purchase at the end of the transaction.

Likewise, make sure that sub-acquirers [MercadoPagoV1](https://help.vtex.com/en/tutorial/configurar-o-subadquirente-mercadopagov1#) or [MercadoPagoV2](https://help.vtex.com/en/tutorial/configurar-o-subadquirente-mercadopagov2) are registered in your store.

## Setting up Mercado Pago Offline

To configure Mercado Pago Offline, follow these steps:
<ol>
  <li>Access the <b>Admin</b> VTEX.</li>
  <br>
  <li>Click on <b>Payments</b>.</li>
  <br>
  <li>Then, click on <b>Settings</b>.</li>
  <br>
  <li>In the <b>Payment conditions</b> tab, click on the <b>+</b> button.</li>
  <br>
  <li>Search and click on <b>MercadoPagoOff</b>.</li>
  <br>
  <li>At the top of the page, fill in the <b>Rule name</b> field with a name of your choice for identification.</li>
  <br>
  <li>Below, click on the <b>Status</b> button to activate the rule.</li>
<br>
<div class="alert alert-info">
  It is not necessary to select the <strong>Process with affiliation</strong>, as the sub-acquirer MercadoPagoV2 is already configured as the default affiliation for MercadoPagoOff.
</div>
<br>
  <li>If you choose to use antifraud, enable the <b>Use antifraud solution</b> option and choose one of the available antifraud options.</li>
  <br>
  <li>You can also <a href="https://help.vtex.com/en/tutorial/condicoes-especiais">configure payment special conditions</a>.</li>
   <br> 
  <br>Click on <b>Save</b>.</li>
</ol>
After all settings are complete, wait up to 10 minutes for the MercadoPagoOff option to be available at checkout.

## Setting up Mercado Pago Wallet

To configure Mercado Pago Wallet, follow these steps:

1. In the VTEX Admin, go to **Store Settings** > **Payment** > **Settings**, or type **Settings** in the search bar at the top of the page.
2. In the __Payment conditions__ tab, click on the + button.
3. Search and click on __MercadoPagoWallet__.
4. At the top of the page, fill in the __Rule name__ field with a name of your choice for identification.
5. Below, click on the __Status__ button to activate the rule.
6. In __Process with affiliation__, select one of the options: MercadoPagoV1 or MercadoPagoV2.
7. If you choose to use antifraud, enable the __Use antifraud solution__ option and choose one of the available antifraud options.
8. You can also [configure payment special conditions](https://help.vtex.com/en/tutorial/condicoes-especiais#).
9. Click on __Save__.

After all settings are complete, wait up to 10 minutes for the MercadoPagoWallet option to be available at checkout.

