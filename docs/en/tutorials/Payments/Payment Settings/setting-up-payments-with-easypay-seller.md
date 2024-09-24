---
title: 'Setting up payments with easypay seller'
id: 5mYMCM1tiRiZO6PozuUncE
status: PUBLISHED
createdAt: 2023-09-19T00:16:47.408Z
updatedAt: 2023-09-28T11:36:30.237Z
publishedAt: 2023-09-28T11:36:30.237Z
firstPublishedAt: 2023-09-19T00:26:38.480Z
contentType: tutorial
productTeam: Financial
author: 6DODK49lJPk3yvcoe6GB6g
slug: setting-up-payments-with-easypay-seller
locale: en
legacySlug: setting-up-payments-with-seller
subcategoryId: 3tDGibM2tqMyqIyukqmmMw
---

On VTEX, you, as a seller, can add your products to a marketplace integrated with the easypay payment provider. This connector enables your store to sell using easypay, MBWay, and MultiBanco.

TYo use easypay affiliation in your marketplace, you need to:

- [Install the easypay Seller Account app](#installing-the-easypay-seller-account-app)
- [Configure the easypay Seller Account app](#configuring-the-easypay-seller-account-app)

>⚠️ If you want to configure easypay for a non-seller context, read [Setting up payments with easypay](https://help.vtex.com/pt/tutorial/configurar-pagamento-com-easypay--3xJQqjMIn0ARDI1HcwK88J) or [Setting up payments with easypay marketplace](https://help.vtex.com/en/tutorial/setting-up-payments-with-easypay-marketplace--3YllWiITcPEOpteuToEdO7).

## Installing the easypay Seller Account app

To install the easypay Seller Account app, follow the steps below:

1. In the [VTEX IO CLI](https://developers.vtex.com/docs/guides/vtex-io-documentation-vtex-io-cli-install), run the command `vtex login accountname` to log in to your account.
2. Install the easypay app using the `vtex install easypaypartnerpt.easypay-seller` command. 

## Configuring the easypay Seller Account app

After installing the easypay Seller Account app, you need to configure it. To access the configuration screen, follow the steps below:

<blockquote><ui>1. In the VTEX Admin, go to <b>Extensions Hub > App Management</b>, or type <b>App Management</b> in the search bar at the top of the page.</ui>

<blockquote><ui>2. Find the <b>Easypay Seller Account</b> app and click <b>Settings</b>.</ui>

<blockquote><ui>3. In the <b>Easypay Seller Account</b> screen, complete the following fields:</ui>

<blockquote><ui>- <b>VTEX Marketplace Account</b>: URL of the VTEX account you are associated with. E.g. https://{your-account-name}.myvtex.com/admin</ui> 

<blockquote><ui>- <b>Easypay Account UID</b>: Identification of your seller account where purchase amounts from store sales will be deposited. To get this information, access the <a href="https://backoffice.easypay.pt/">easypay environment</a>, click the easypay logo at the top of the screen, and click the desired account. Copy and save the <b>Account UID</b> information.</ui> 

![easypay_en_18](//images.ctfassets.net/alneenqid6w5/72jPh8mwBcEqbtiCBU09Bm/2e4dd4665f90512068d9f145b7a81caa/easypay_en_18.png)

<blockquote><ui>4. Click <b>Save</b>.</ui>

