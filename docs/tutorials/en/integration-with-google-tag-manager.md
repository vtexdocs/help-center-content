---
title: Configuring Google Tag Manager
id: frequentlyAskedQuestions_616
createdAt: 2019-01-24T20:45:56.745Z
updatedAt: 2023-05-03T15:25:43.535Z
publishedAt: 2023-05-03T15:25:43.535Z
firstPublishedAt: 2019-01-24T22:13:48.493Z
contentType: tutorial
productTeam: Marketing & Merchandising
author: authors_84
slug: integration-with-google-tag-manager
legacySlug: integration-with-google-tag-manager
subcategory: 6XAvmMxp7yyY06ewYMuggs
---

<div class="alert alert-warning">
If your store is built with <a href="https://help.vtex.com/en/tracks/cms--2YcpgIljVaLVQYMzxQbc3z/4yB9wSl79cArd68aRBnBZ2">VTEX IO</a>, you also need to install the Google Tag Manager pixel app to integrate all pages. See how to do this in the <a href="https://developers.vtex.com/vtex-developer-docs/docs/google-tag-manager">app documentation</a>.
</div>

Google Tag Manager is a tag management system created by Google to manage JavaScript and HTML tags used for website tracking and analytics.

On VTEX, the Google Tag Manager integration is native, which simplifies setting up the tool for analyzing store browsing data.This article explains the prerequisites and the setup steps in the following sections:

- [Prerequisites](#Prerequisites)
- [Configure tags on Google Tag Manager](#configure-tags-on-google-tag-manager)
- [Edit Checkout settings](#edit-checkout-settings)
- [VTEX IO: Install the Google Tag Manager pixel app](#vtex-io-install-the-google-tag-manager-pixel-app)

## Prerequisites
Before setting up Google Tag Manager, you need to complete the following steps:

- Create a [Google Tag Manager](https://tagmanager.google.com/?hl=EN#/home) account.
- Configure Google Analytics 4, which is step one in the [Configuring Google Analytics 4 in VTEX stores](https://help.vtex.com/en/tutorial/how-to-setup-google-analytics-in-vtex-store) guide.

## Configuring tags on Google Tag Manager
Google Analytics needs to be set up in two tags: one for tracking visits and another one for tracking ecommerce website conversions. Each tag has different triggers, which should be configured as described in the sections below.

### Visits
To configure the tag for tracking store visits, follow the instructions below:

1. In the [Google Tag Manager](https://tagmanager.google.com/#/home) dashboard, click __Tags__.
2. Click `New`.
3. Name the tag in a way that facilitates distinguishing it from the other tags, following a pattern like `{tool name} - {job} - {variation}`. Example: The name of a tag that will track visits could be `GA - Configuration`. Whereas, a tag that will track ecommerce could be named `GA - Purchase`.
4. In the tag settings, click the __Google Analytics: GA4 Configuration__ option.
5. In __Measurement ID__, enter the Google Analytics 4 ID in `G-xxxxxxx` format.
6. Make sure that the __Send a page view event when this configuration loads__ option is checked.
7. In __Triggering__, select the __All Pages__ option.
8. Also in __Triggering__, add the __All history changes__ option.
9. Click `Salvar` to finish creating the tag.

![Tag configuration](//images.ctfassets.net/alneenqid6w5/7ugAD5EjZKtBlnLlmmtVqA/fdd8a26ff4976c8ce1ef8441f23fc68a/Tag_configuration.png)

![Google Configuration History GA4](//images.ctfassets.net/alneenqid6w5/2EvCfzzuyZ4wAMLHt5Q0aN/15d8a48cbf59f5d4762a417c935335e0/All_history_changes_google.png)

### Conversions
To configure the tag for tracking store conversions, follow the instructions below:

1. In the [Google Tag Manager](https://tagmanager.google.com/#/home) dashboard, click __Tags__.
2. Click `New`.
3. Name the tag in a way that facilitates distinguishing it from the other tags, following a pattern like `{tool name} - {job} - {variation}`. Example: The name of a tag that will track conversions could be `GA - Purchase`.
4. In the __Tag Type__ settings, click the __Google Analytics: GA4 Event__ option.
5. In __Configuration Tag__, select __GA - Config__, the previously configured tag in [Visits](#visits).
6. In __Event Name__, choose the `{{Event}}` variable.
7. In __Triggering__, click `+` to create a new trigger.
8. Name the trigger `orderConfirmation - orderPlaced`.
9. Choose the __Custom Event__ type.
10. Enter `purchase` in the __Event name__ field.
11. In __This trigger fires on__, select __Some Custom Events__.
12. In __Fire this trigger when an Event occurs and all of these conditions are true__, select the options __Event__, __equals__, and __purchase__.
13. Click `Salvar` to finish creating the trigger.
14. Click `Salvar` again to finish creating the tag.

## Editing Checkout settings

After this, you have to set up the store identification code from Tag Manager on VTEX following the steps below:

1. In the VTEX Admin, go to __Store Settings > Storefront > Checkout__, or type __Checkout__ in the search bar at the top of the page.
2. Click in the icon <i class="fas fa-cog" alt="engrenagem azul"></i> of the desired website.
3. In the blue option menu at the top of the page, click __Checkout__.
4. In the __Google Tag Manager__ field, enter the store identification code in `GTM-XXXX` format, as shown in the image below.
5. Click `Save`. 

![Google Tag Manager](//images.ctfassets.net/alneenqid6w5/2AVIJtSgxsTDl4mVRORj41/c16814591d79d4165f6c6c7954c0c48a/Google_Tag_Manager_-_EN.PNG)

To check available events (triggers) and variables on the pages, which will be used in the tags, you can use the Google Tag Manager preview mode. For more information, check the [Google Tag Manager documentation](https://support.google.com/tagmanager/answer/6107056?hl=pt-BR).

<div class="alert alert-info">
You can use the Facebook pixel app among your store's Google Tag Manager to track and optimize your marketing campaigns' results on the social network. Learn the step-by-step <a href="https://www.facebook.com/business/help/1021909254506499">here</a>.
</div>

## VTEX IO: Installing the Google Tag Manager pixel app

If your store uses [VTEX IO](https://help.vtex.com/pt/tracks/cms--2YcpgIljVaLVQYMzxQbc3z/4yB9wSl79cArd68aRBnBZ2), in addition to the setup, you need to install a new version of the Google Tag Manager app. For more information, see [Installing Google Tag Manager](https://developers.vtex.com/docs/guides/vtex-io-documentation-installing-google-tag-manager).

This step is not required for stores using the [Legacy CMS Portal](https://help.vtex.com/en/tracks/cms--2YcpgIljVaLVQYMzxQbc3z/1oN446gRGcR2s70RvBCAmj).

