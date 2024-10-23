---
title: 'VTEX Sales App - Basic settings'
id: 4L5SoLxE8O3YkxF7FKymrO
status: PUBLISHED
createdAt: 2020-06-28T13:51:53.895Z
updatedAt: 2024-09-05T16:26:14.722Z
publishedAt: 2024-09-05T16:26:14.722Z
firstPublishedAt: 2020-06-28T14:01:36.462Z
contentType: trackArticle
productTeam: Shopping
slugEN: instore-basic-settings
locale: en
trackId: zav76TFEZlAjnyBVL5tRc
trackSlugEN: instore-first-steps-and-configurations
---

VTEX Sales App is one of VTEX's main products for [unified commerce](https://help.vtex.com/pt/tracks/estrategias-de-comercio-unificado--3WGDRRhc3vf1MJb9zGncnv) operations. It is an app that allows your store to provide a true omnichannel experience, integrating your online and physical channels and placing your customers at the core of the business.

>ℹ️ Before you start using VTEX Sales App, make sure your store meets all the [prerequisites](https://help.vtex.com/pt/tracks/instore-primeiros-passos--6N0QlieWqboSVU2ehgAVAb/1wtAanSRA3g2316dw7bw8u).

To use VTEX Sales App, you must follow the steps below in your main account.

>⚠️ It is not necessary to install or configure VTEX Sales App on franchise accounts that represent physical stores. The procedure described in this article must be performed only on the main brand account.

## Installing VTEX Sales App

The first step is to install the free [VTEX Sales App Setup](https://apps.vtex.com/vtex-assisted-sales-admin/p) app, available in the VTEX App Store, on the main brand account.

1. Go to the [VTEX Sales App Setup](https://apps.vtex.com/vtex-assisted-sales-admin/p) page in the VTEX App Store.
2. Click on `Get app`.
3. Enter your VTEX main account name and click on `Confirm`.
4. Click on `Close order`.
5. Click on `Go to the installation page`. You will be redirected to the VTEX Sales App Setup app page in your Admin.
6. Click on `Install`.

When installing VTEX Sales App, the `checkout/instore` page and its respective files (`checkout-instore-custom.js` and `checkout-instore-custom.css`) are automatically created on the `default` site within **Checkout**. By default, VTEX Sales App should always be used in the `default`  site of the master account to make the ecommerce operation easier and avoid errors.

To check the `default`  site, go to **Store Settings** > **Checkout** and click <i class="fas fa-cog"></i>. Check if the URL contains the word `default`, as in the example: `https://{{accountName}}.myvtex.com/admin/portal/#/sites/default/`. Another option is to check under **Store Settings** > **CMS** > **Layout** > **CMS** > **Sites and channels**.

## Configuring VTEX Sales App

After installing, you will configure the basic settings of the VTEX Sales App app in the VTEX Admin of your main account, as follows.

1. In the VTEX Admin, go to **Apps** > **My Apps**, or type **My Apps** in the search bar at the top of the page.
3. Find VTEX Sales App and click on <i class="fa-solid fa-gear"></i> `Settings`.
4. Click `Advanced`.
5. [Add the store address](#cadastre-o-endereco-da-loja).
6. [Add the sales associate's email and name](#registre-o-email-e-nome-do-vendedor).
7. [Configure the payment methods](#configure-os-meios-de-pagamento).

### Add the store address

![cadastrar-loja-pt](https://raw.githubusercontent.com/vtexdocs/help-center-content/refs/heads/main/docs/en/tracks/instore-first-steps-and-configurations/instore-basic-settings_1.png)

On this screen, enter the name of the first physical store where VTEX Sales App will be used and the full address of the store. After filling out all the fields, click on `Confirm`.

You can [add other stores later](https://help.vtex.com/pt/tracks/instore-setting-up--zav76TFEZlAjnyBVL5tRc/5PSjRstg7UU4lOm0s8aqKN), if you wish.

If you choose to `Skip this step`, a fictitious store will be created for testing purposes.

### Adding a sales associate's email and name

![registrar-vendedor-pt](https://raw.githubusercontent.com/vtexdocs/help-center-content/refs/heads/main/docs/en/tracks/instore-first-steps-and-configurations/instore-basic-settings_2.png)

You must define an email and a name to be used as a sales associate’s login credentials. When you are ready, click on `Confirm`.

>⚠️ The email added in this screen **cannot** be in use on the VTEX platform Admin. Use sales associate emails that do not have Admin access.

In this step, you’ll only add one of your sales associates. After configuring the basic settings, you can [add other sales associates](https://help.vtex.com/pt/tracks/instore-setting-up--zav76TFEZlAjnyBVL5tRc/5PSjRstg7UU4lOm0s8aqKN).

If you choose to `Skip this step`, a fictitious sales associate will be created with the email address `instorevendedor@gmail.com` and the name `VTEX Sales App Seller`. These credentials are valid for logging in to the VTEX Sales App app and can be used for testing.

### Configuring payment methods

The next step is to set up the payment methods you will accept on VTEX Sales App. Enable the desired options using the <i class="fas fa-toggle-on"></i> button, as shown below.

![configurar-meios-de-pagamento-pt](https://raw.githubusercontent.com/vtexdocs/help-center-content/refs/heads/main/docs/en/tracks/instore-first-steps-and-configurations/instore-basic-settings_3.gif)

There are two options:

* **Cash**: enable this option if you want to accept cash payments.
* **Card**: if you already have an agreement with an acquirer to receive credit or debit card payments, you can activate it on the acquirer drop-down menu. Otherwise, disable this option for now.

After selecting the desired options, click on `Confirm`. You will see the following confirmation message:

![sucesso-instore-pt](https://raw.githubusercontent.com/vtexdocs/help-center-content/refs/heads/main/docs/en/tracks/instore-first-steps-and-configurations/instore-basic-settings_4.png)

## Configuring payment conditions

After configuring the basic settings described, you must set up the VTEX Sales App payment terms in the **Payments** module. To do this, please refer to the guide [Setting up payment methods for VTEX Sales App](https://help.vtex.com/pt/tracks/instore-pagamentos--43B4Nr7uZva5UdwWEt3PEy).

## Setting up logistics

To start using VTEX Sales App, you also need to configure the __Logistics__ settings according to the strategies you want to implement. For more information, read the guides about [Unified commerce](https://help.vtex.com/pt/tracks/estrategias-de-comercio-unificado--3WGDRRhc3vf1MJb9zGncnv) and [Logistics](https://help.vtex.com/pt/tracks/logistica-101--13TFDwDttPl9ki9OXQhyjx).
