---
title: 'Setting up payments with Stark Bank'
id: 19pwHHVuEGN743WOGXcbUM
status: PUBLISHED
createdAt: 2023-09-08T15:29:02.297Z
updatedAt: 2025-03-17T13:07:31.346Z
publishedAt: 2025-03-17T13:07:31.346Z
firstPublishedAt: 2023-09-08T15:45:11.373Z
contentType: tutorial
productTeam: Financial
author: 6DODK49lJPk3yvcoe6GB6g
slugEN: setting-up-payments-with-stark-bank
legacySlug: setting-up-payments-with-stark-bank
locale: en
subcategoryId: 3tDGibM2tqMyqIyukqmmMw
---

At VTEX, it is possible to integrate with the Stark Bank payment provider. With this provider, your store can make sales through bank invoice and PIX.

To configure Stark Bank, follow the steps below:

1. In the VTEX Admin, go to __Store Settings > Payment > Providers__, or type __Providers__ in the search bar at the top of the page.
2. On the providers screen, click the `New Provider` button.
3. Type the name __StarkBank__ in the search bar and click on the name of the provider.
4. Click on __Authorize__. You will be redirected to the Stark Bank environment.
5. In the Stark Bank environment, enter your Stark Bank account login and password. Follow the indicated instructions to complete the Stark Bank account linking with VTEX.
6. After returning to Admin VTEX, if you wish to modify the identification name to be displayed for the Stark Bank provider on the VTEX Admin screen, enter the information in the __Name__ field in __Basic Information__.
7. In __Payment Control__, select whether you want to activate the provider in a test environment by clicking __Enable test mode__.
8. If you want to use [payment split](https://help.vtex.com/en/tutorial/split-payment--6k5JidhYRUxileNolY2VLx) in your store, select the option __Enable payout split and send payment recipients__ and indicate the __Accountable for payment processing charges__ and __Accountable for chargebacks__ (marketplace, sellers or marketplaces and sellers).
9. In **Provider Fields**, select the desired option in __Habilitar consulta de boleto 1 hora após a emissão?__.
10. If necessary, fill in the last field of the form with the identification tags for the receipt operations.
11. Click `Save`.

To configure the payment methods to be processed by Stark Bank, access [Configuring Payment Conditions](https://help.vtex.com/en/tutorial/how-to-configure-payment-conditions--tutorials_455#).

To set special conditions on payment methods, go to [Configuring payment special conditions](https://help.vtex.com/en/tutorial/special-conditions--tutorials_456#).

After following the indicated steps, Stark Bank connector may take up to 10 minutes to appear at your store's checkout as a payment option.
