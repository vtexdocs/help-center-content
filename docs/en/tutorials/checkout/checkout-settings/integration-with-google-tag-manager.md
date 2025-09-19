---
title: 'Configuring Google Tag Manager'
id: frequentlyAskedQuestions_616
status: PUBLISHED
createdAt: 2019-01-24T20:45:56.745Z
updatedAt: 2025-05-29T17:25:05.809Z
publishedAt: 2025-05-29T17:25:05.809Z
firstPublishedAt: 2019-01-24T22:13:48.493Z
contentType: tutorial
productTeam: Marketing & Merchandising
author: authors_84
slugEN: integration-with-google-tag-manager
legacySlug: integration-with-google-tag-manager
locale: en
subcategoryId: 6XAvmMxp7yyY06ewYMuggs
---

> ⚠️ If your store is built with [Store Framework](/en/tracks/cms--2YcpgIljVaLVQYMzxQbc3z/4yB9wSl79cArd68aRBnBZ2), you also need to install the Google Tag Manager pixel app to integrate all pages. See how to do this in the [app documentation](https://developers.vtex.com/vtex-developer-docs/docs/google-tag-manager).

Google Tag Manager is a tag management system created by Google to manage JavaScript and HTML tags used for website tracking and analytics.

On VTEX, the Google Tag Manager integration is native, which simplifies setting up the tool for analyzing store browsing data.This article explains the prerequisites and the setup steps in the following sections:

- [Prerequisites](#Prerequisites)
- [Configure tags on Google Tag Manager](#configure-tags-on-google-tag-manager)
- [Edit Checkout settings](#edit-checkout-settings)
- [VTEX IO: Install the Google Tag Manager pixel app](#vtex-io-install-the-google-tag-manager-pixel-app)

## Prerequisites
Before setting up Google Tag Manager, you need to complete the following steps:

- Create a [Google Tag Manager](https://tagmanager.google.com/?hl=EN#/home) account.
- Configure Google Analytics 4, which is step one in the [Configuring Google Analytics 4 in VTEX stores](/en/tutorial/how-to-setup-google-analytics-in-vtex-store) guide.

## Configuring tags on Google Tag Manager

Through tags, Google Analytics allows you to access essential data regarding your store's performance, such as the number of visits and conversions. For more information, go to [Setting up GA4 event](https://developers.vtex.com/docs/guides/vtex-io-documentation-setting-up-google-tag-manager#step-by-step).

## Editing Checkout settings

> ⚠️ Users need to have the [License Manager resource](/en/tutorial/recursos-do-license-manager--3q6ztrC8YynQf6rdc6euk3) **Manage portal** assigned to their role to be able to configure store Checkout settings. In turn, the user that creates the new role needs to have **Owner (Admin Super)** access.

After this, you have to set up the store identification code from Tag Manager on VTEX following the steps below:

1. In the VTEX Admin, go to __Store Settings > Storefront > Checkout__, or type __Checkout__ in the search bar at the top of the page.
2. Click in the icon <i class="fas fa-cog" alt="engrenagem azul"></i> of the desired website.
3. In the blue option menu at the top of the page, click __Checkout__.
4. In the __Google Tag Manager__ field, enter the store identification code in `GTM-XXXX` format, as shown in the image below.
5. Click `Save`. 

![Google Tag Manager](https://raw.githubusercontent.com/vtexdocs/help-center-content/refs/heads/main/docs/en/tutorials/checkout/checkout-settings/integration-with-google-tag-manager_1.PNG)

To check available events (triggers) and variables on the pages, which will be used in the tags, you can use the Google Tag Manager preview mode. For more information, check the [Google Tag Manager documentation](https://support.google.com/tagmanager/answer/6107056?hl=pt-BR).

> ℹ️ You can use the Facebook pixel app among your store's Google Tag Manager to track and optimize your marketing campaigns' results on the social network. Learn the step-by-step [here](https://www.facebook.com/business/help/1021909254506499).

## VTEX IO: Installing the Google Tag Manager pixel app

If your store uses [VTEX IO - Store Framework](/pt/tracks/cms--2YcpgIljVaLVQYMzxQbc3z/4yB9wSl79cArd68aRBnBZ2), in addition to the setup, you need to install a new version of the Google Tag Manager app. For more information, see [Installing Google Tag Manager](https://developers.vtex.com/docs/guides/vtex-io-documentation-installing-google-tag-manager).

This step is not required for stores using the [Legacy CMS Portal](/en/tracks/cms--2YcpgIljVaLVQYMzxQbc3z/1oN446gRGcR2s70RvBCAmj).

