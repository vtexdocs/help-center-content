---
title: 'Interface of the configured integration'
id: DmcxFAdyCC7t0a72hIXeT
status: PUBLISHED
createdAt: 2021-09-30T16:44:47.202Z
updatedAt: 2024-09-05T15:27:53.730Z
publishedAt: 2024-09-05T15:27:53.730Z
firstPublishedAt: 2021-09-30T18:49:28.436Z
contentType: trackArticle
productTeam: Channels
slug: interface-da-integracao-configurada
locale: en
trackId: 2hS3ANSZ7vlHCcba4h7k8D
trackSlugEN: integration-with-facebook-business-extension
---

Once the integration with the _Facebook Business Extension and Conversions API_ app is complete, in **VTEX Admin > MARKETPLACE > Facebook** you will have access to the commands to configure and manage new Facebook assets.

In this interface, there are three main sections: [Status](#status), [Features](#features), and [Catalog](#catalog).

![Facebook business Extension](//images.ctfassets.net/alneenqid6w5/0FVc54WxGh3BorDpQkkzI/c8f361520bb7cc8b7678de112ad67b1d/print_interface_en.png)

## Status

This is the section where you can view the status of your connection with Facebook, as well as the Facebook Pixel ID and Catalog ID. There is also an **Uninstall** button.

### Uninstall button

You can remove the _Facebook Business Extension and Conversions API_ app integration at any time. This must be performed in two steps: one via the VTEX Admin and one via the VTEX IO Toolbelt.

Uninstalling the app via the VTEX Admin interrupts the catalog synchronization and revokes your user access to the system created for the integration. This means that the integration will be deconfigured, but it can be reconfigured at any time. To do so, go to **VTEX Admin > MARKETPLACE > Facebook** and click on the **Uninstall** button. On the pop-up window, click on **Uninstall**.

Uninstalling the app via the command-line interface, i.e., VTEX IO Toolbelt, causes integration events to no longer be triggered. To perform this action, use the [Uninstall](https://developers.vtex.com/vtex-developer-docs/docs/vtex-io-documentation-vtex-io-cli-command-reference#uninstall) command. Remember that this does not impact your access to Facebook features, which is only interrupted by using the **Uninstall** button in the VTEX Admin.

## Features

In this section, you can enable Facebook features that have not been automatically configured by the integration. To do so, click on **CONFIGURE FEATURES**. You will be redirected to the Facebook environment, where you can explore options for tools and services.

## Catalog

In this section, there are two buttons with the following functions:

- **Integration details:** redirects the user to the integration page of products sent to FBE. This page can also be found in _VTEX Admin > MARKETPLACE > Integrations > Products_.
- **Integration settings:** redirects the user to a screen with fields related to the integration, which are already filled out. On this screen, you can change information used in the integration with FBE.
