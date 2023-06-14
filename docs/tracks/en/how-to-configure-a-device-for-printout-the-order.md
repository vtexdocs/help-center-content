---
title: 'Configuring a device to print the order summary'
id: 18nqy9Hr9AUBNF0WTvpTyT
status: DRAFT
createdAt: 2019-11-12T21:42:11.589Z
updatedAt: 2021-08-24T20:46:59.498Z
publishedAt: 
firstPublishedAt: 2019-11-25T12:43:17.689Z
contentType: trackArticle
productTeam: Shopping
slug: how-to-configure-a-device-for-printout-the-order
trackId: t3DOYAJjWgqAMeAKq2MWS
trackSlugEN: instore-setup
---

Among the options offered by **inStore** when completing a sale, there is one that allows you to print the order summary.

To configure this option, two small steps will be necessary:

  1. In the VTEX Admin, enable the device configuration option in the inStore menu
  2. Configure the printer device in inStore

## Enable the device configuration option in the inStore menu

Today this configuration is included in the portal administrator, more specifically in the file **checkout-instore-custom.js** and, since it is a JavaScript included in several sequences of application usage, it is important that you have programming knowledge before changing it, to avoid breaking other features.

To enable the _“Configure device”_ option, you must find the **_window.INSTORE_CONFIG_** object present in this file and add the **_configureDeviceEnabled_** property with the value **_true_**, and also add the **_printingConfig_** object to the **_printByBroker_** property with the value true, so that inStore allows you to use the option within the menu, as shown in the example image below:

![EN-Configurar dispositivo](//images.ctfassets.net/alneenqid6w5/7sjOnFRRd3FFBFM4MQej7m/692f871ee51737c132a6df68e39591bd/EN-Configurar_dispositivo.png)

Do not delete any of the other properties included in this object. The result should be something like:

``window.INSTORE_CONFIG = {
configureDeviceEnabled: true,
      printingConfig: { 
            printByBroker: true 
      }
}``

<div class="alert alert-info">
  <strong>NOTE</strong>: There is an option to automatically print the order summary once the order is completed. The configuration is very simple, just add the <strong><i>printPageAutomatically</i></strong> property with the value <strong><i>true</i></strong> inside the <strong><i>printingConfig</i></strong> object.
   </div>
   
Do not delete any of the other properties present in this object. The result should be something like:


``window.INSTORE_CONFIG = {
configureDeviceEnabled: true,
      printingConfig: { 
            printByBroker: true,
printPageAutomatically: true 
      }
}``

## Configure printer device in inStore

<div class="alert alert-warning">
  <strong>IMPORTANT</strong>: For the configuration of the printer within inStore, it is necessary to have the <strong><i>AppKey</i></strong> and the <strong><i>AppToken</i></strong> with permissions of at least one profile as <i>“InStore Salesperson (inStore Sales Person)”</i>. It is worth clarifying that an <i>“Owner (Admin Super)”</i> profile can be used.
  </div>

  1. Connect the printer to the computer where inStore is installed (to download the inStore you can go to [http://instore.vtex.com/download]). It must be a computer with Windows operating system (Windows 7 or higher are compatible).
  2. Open inStore application and enter the store in which you want to configure the printer.
  3. In the “Settings” block inside the inStore menu, the option “Configure device” should appear. Click there.
  4. You will find the summary of the configured device. If this is the first time, the information will be empty. If a device has been configured previously, some information about the device will appear _(Device Name and Standard Printer)_. Click on the "Edit" option.
  
![EN-Device via Broadcast](//images.ctfassets.net/alneenqid6w5/7DuIhb5gjLHpCoLx48DMvl/d51a551e1d23f6dae131ec9b34c184b7/EN-Device_via_Broadcast.png)

  5. A form will appear indicating the data of _AppKey_, _AppToken_ and the name by which you want to identify the device. After entering this data, click on “Configure”.
  6. Finally, after including the above data, it will be possible to select the printer from the list of options. The idea is to select one of these options and then click on “Configure” again.

After completing these requirements, you will be able to print the summary of your orders in inStore.

