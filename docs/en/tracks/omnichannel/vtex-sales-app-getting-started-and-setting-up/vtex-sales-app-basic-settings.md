---
title: 'VTEX Sales App - Basic settings'
id: 4L5SoLxE8O3YkxF7FKymrO
status: PUBLISHED
createdAt: 2020-06-28T13:51:53.895Z
updatedAt: 2025-11-21T23:01:37.261Z
publishedAt: 2025-02-20T23:01:37.261Z
firstPublishedAt: 2020-06-28T14:01:36.462Z
contentType: trackArticle
productTeam: Shopping
slugEN: vtex-sales-app-basic-settings
locale: en
trackId: zav76TFEZlAjnyBVL5tRc
trackSlugEN: vtex-sales-app-getting-started-and-setting-up
order: 4
---

VTEX Sales App is one of VTEX's main products for [unified commerce](/en/tracks/estrategias-de-comercio-unificado--3WGDRRhc3vf1MJb9zGncnv) operations. It enables your store to provide a true omnichannel experience, integrating your online and physical channels and placing customers at the core of your business.

> ℹ️ Before you start using VTEX Sales App, make sure your store meets all the [prerequisites](/en/tracks/instore-primeiros-passos--6N0QlieWqboSVU2ehgAVAb/1wtAanSRA3g2316dw7bw8u).

To use VTEX Sales App, follow the steps below in your main account.

> ⚠️ There is no need to install or configure VTEX Sales App on franchise accounts representing physical stores. You should only configure these settings on the main brand account.

## Installing VTEX Sales App

The first step is to install [VTEX Sales App](https://apps.vtex.com/vtex-assisted-sales-admin/p), available in the VTEX App Store, on the main brand account. To do so, follow these steps:

1. Go to the [VTEX Sales App](https://apps.vtex.com/vtex-assisted-sales-admin/p) page in the VTEX App Store.
2. Click on `Get app`.
3. Enter your VTEX main account name and click `Confirm`.
4. Click `Place order`.
5. Click `Go to install page`. You'll be redirected to the VTEX Sales App page in the VTEX Admin.
6. Click `Install`.

When you install the the VTEX Sales App, the `checkout/instore` page and its corresponding files (`checkout-instore-custom.js` and `checkout-instore-custom.css`) are automatically created on the `default` site within **Checkout**. By default, VTEX Sales App should always be used on the main account's Default site to simplify ecommerce operations and prevent errors.

To check the `default` site, go to **Store settings > Storefront > Checkout** and click the <i class="fas fa-cog"></i> icon. Make sure the URL contains the word Default, as in this example: `https://{{accountName}}.myvtex.com/admin/portal/#/sites/default/`. Alternatively, go to **Storefront > Layout > CMS > Sites and channels**.

## Configuring VTEX Sales App

After installation, configure the basic settings for the VTEX Sales App, as described below.

1. In the VTEX Admin, go to **Apps > Extensions Hub > App Management**, or type **App Management** in the search bar at the top of the page.
2. In the **Installed** tab, find VTEX Sales App and click Settings
3. Click `Advanced`.
4. [Add the store address](#adding-the-store-address).
5. [Add the sales associate](#adding-a-sales-associate).
6. [Configure the payment methods](#configuring-payment-methods).

### Adding the store address

On the screen for adding a new store, enter the name and full address of the first physical store where the VTEX Sales App will be used. After completing all the fields, click `Continue`.

You can [add other stores later](/en/tracks/instore-setting-up--zav76TFEZlAjnyBVL5tRc/5PSjRstg7UU4lOm0s8aqKN), if you wish.

### Adding a sales associate

In this section, you need to define an email and a name to be used as the sales associate's login credentials. If you want, you can include an identification code for the sales associate. Once defined, click `Continue`.

> ⚠️ The email address entered can't already be in use in the VTEX Admin.

In this step, you will only add one of your sales associates. After completing the basic settings, you can [add other sales associates](https://help.vtex.com/docs/tracks/managing-sales-associates-in-vtex-sales-app#adding-sales-associate).

### Configuring payment methods

The next step is to set up the payment methods you will accept on VTEX Sales App. Enable the desired options using the <i class="fas fa-toggle-on"></i> using the toggle switch.

There are two options available:

* **Cash**: enable this option if you want to accept cash payments.
* **Social selling:** Enable this option to make all payment methods configured in your ecommerce Checkout available in VTEX Sales App when using the [shared cart (Social Selling)](/en/tracks/instore-usando-o-app--4BYzQIwyOHvnmnCYQgLzdr/6deiffo22iKkY27PkfstXy).

After selecting the desired options, click `Continue`.

## Configuring payment conditions

After completing the basic settings, configure VTEX Sales App payment conditions in the **Payments** module. To do this, see the guide [Setting up payment methods for VTEX Sales App](/en/tracks/instore-pagamentos--43B4Nr7uZva5UdwWEt3PEy).

## Linking the store product catalog to the storefront

For the physical store catalog to be reflected in VTEX Sales App, you need to configure the [binding](/en/tutorial/o-que-e-binding--4NcN3NJd0IeYccgWCI8O2W) in the CMS (Layout - [Legacy CMS](/en/tracks/cms--2YcpgIljVaLVQYMzxQbc3z/1oN446gRGcR2s70RvBCAmj)). This configuration links the [trade policy](/en/tutorial/como-funciona-uma-politica-comercial--6Xef8PZiFm40kg2STrMkMV) to the storefront, ensuring that products will be displayed correctly.

To configure the binding and ensure the store catalog is displayed in VTEX Sales App, follow the steps below:

1. In the VTEX Admin, go to **Storefront > Layout**, or type **Layout** in the search bar at the top of the page.
2. Click **CMS** and select **Sites and channels**.
3. Select the desired website from the list.
4. In the **Links** section, click the corresponding binding row and then click `Update`.
5. In the **Available Sales Channels** section, select the trade policy you want to link to the binding.
6. Click `Save Binding`.

> ⚠️ Make sure the trade policy is correctly configured in your VTEX Admin before linking it to the binding. This configuration is essential to ensure the store catalog displays correctly in VTEX Sales App.

## Configuring logistics

To start using VTEX Sales App, you also need to configure the **Logistics** settings based on the strategies you want to implement. For more information, see the guides [Unified commerce](/en/tracks/estrategias-de-comercio-unificado--3WGDRRhc3vf1MJb9zGncnv) and [Logistics](/en/tracks/logistica-101--13TFDwDttPl9ki9OXQhyjx).
