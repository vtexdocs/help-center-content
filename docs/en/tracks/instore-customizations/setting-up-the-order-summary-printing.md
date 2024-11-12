---
title: 'Setting up the order summary printing'
id: 12GPLA7JdjXEZFLV3HokZU
status: ARCHIVED
createdAt: 2020-06-28T15:48:40.058Z
updatedAt: 2021-11-03T18:38:20.227Z
publishedAt: 
firstPublishedAt: 2020-06-28T16:03:06.919Z
contentType: trackArticle
productTeam: Shopping
slugEN: setting-up-the-order-summary-printing
locale: en
trackId: 1z9kBm12oBPyVNDo1ivVc2
trackSlugEN: instore-customizations
---

When the salesperson completes an order with inStore, they can print a summary of that order. But, to enable this functionality, you need to make some settings.

![15. Configurar impressão de resumo do pedido - 1](https://images.ctfassets.net/alneenqid6w5/I5tu0upqIMUVTCxTHFfmL/d25cd88a3601658aabea48fcee8e97f0/15._Configurar_impress__o_de_resumo_do_pedido_-_1.png)

Two steps are required:

1. Using the VTEX Admin, activate the device configuration option in the inStore menu.
2. In the inStore application, configure the printer device.

## Enable the device configuration option

>❗ Enabling the device configuration option is done through a change to the JavaScript file `checkout-instore-custom.js`. This operation should only be performed by people with programming experience. Incorrect changes to this file can cause critical errors.

First, open the file `checkout-instore-custom.js`, available in the Admin of your VTEX account (if you do not know how to access this file, check out the tutorial [How to customize inStore](https://help.vtex.com/en/tracks/instore-customizacoes--1z9kBm12oBPyVNDo1ivVc2)).

In that file, add the `configureDeviceEnabled` property with the value `true`. In addition, add the `printingConfig` object, and inside it add the `printByBroker` property, also with the value `true`.

The code should look like the example below:

```json
window.INSTORE_CONFIG = { 
  configureDeviceEnabled: true, 
  printingConfig: { 
    printByBroker: true 
  },
}
```

>❗ Do not remove any of the other properties present in the `window.INSTORE_CONFIG` object, to avoid breaking other functionality.

This change will make the __Configure device__ option appear in the inStore main menu, as shown in the image below. It is through this option that you will configure the printer.

![15. Configurar impressão de resumo do pedido - 2](//images.ctfassets.net/alneenqid6w5/KxD08Gfiwa8mj6y6KzaKu/7fab9110af8d1337f5646252b8c9387c/15._Configurar_impress__o_de_resumo_do_pedido_-_2.png)

>ℹ️ **Note:** There is an option to automatically print the order summary as soon as the order is completed. To enable it, add the `printPageAutomatically` property with the value `true` inside the `printingConfig` object. See below how the code would look like in this case.

```json
window.INSTORE_CONFIG = { 
  configureDeviceEnabled: true, 
  printingConfig: { 
    printByBroker: true,
    printPageAutomatically: true
  },
}
```

>❗ Again, do not remove any of the other properties present in the `window.INSTORE_CONFIG` object, to avoid breaking other functionality.

## Configure the printer device in inStore

Now let's see how to set up a printer connected to the inStore to print order summaries.

>⚠️ First of all, to connect a printer to the inStore system, it is necessary to have a pair of VTEX credentials (AppKey and AppToken) with the appropriate access permissions. We recommend that the role linked to these credentials is `inStore Sales Person`. However, a profile with more powers, such as Admin Super, can also be used.

With AppKey and AppToken in hand, follow the steps below:

1. Connect the printer to the computer where inStore is installed (to download inStore to your desktop, go to the article [inStore - Download the app](https://help.vtex.com/en/tracks/instore-setup-basico--zav76TFEZlAjnyBVL5tRc#download-the-app "inStore - Download the app"). Remember that to use the printer, you must use a computer with a Windows operating system (Windows 7 or higher are supported).
2. Open the inStore app and enter the store where you want to set up the printer.
3. In the inStore main menu, in the Settings section, the option __Configure device__ should now appear. Click on that option.

![15. Configurar impressão de resumo do pedido - 3](//images.ctfassets.net/alneenqid6w5/4BZ0V5CVUYA2Kwv49PfTYS/4fa9c04035ef00f8a0df9a9ae71b326b/15._Configurar_impress__o_de_resumo_do_pedido_-_3.png)

You will find the summary of the configured device. If this is the first time you are making this configuration, the fields on this screen will be empty. If a device has been previously configured, some information about the device will be displayed (Device name and Default printer). Click the __Edit__ button.

![15. Configurar impressão de resumo do pedido - 4](//images.ctfassets.net/alneenqid6w5/4Xrv2WFGkaQ5ejAYZlF3ly/10e8b6b922cd7ee0f970f8db15cae1f9/15._Configurar_impress__o_de_resumo_do_pedido_-_4.png)

A form will show containing the __AppKey__, __AppToken__ and __name__ fields with which you want to identify the device. After entering this data, click __Configure__.

After including the above data, salespeople can select the printer from the list of options to print a summary of their orders via inStore. The system identifies the printer via the internet.
