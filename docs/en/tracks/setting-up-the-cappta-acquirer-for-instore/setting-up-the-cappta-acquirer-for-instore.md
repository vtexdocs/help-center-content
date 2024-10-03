---
title: 'Setting up the Cappta acquirer for inStore'
id: 5FuKPBLD27Izx6Ou40CI6F
status: DRAFT
createdAt: 2020-06-28T15:24:26.367Z
updatedAt: 2021-02-23T15:46:54.731Z
publishedAt: 
firstPublishedAt: 2020-06-28T15:26:52.495Z
contentType: trackArticle
productTeam: Shopping
slugEN: setting-up-the-cappta-acquirer-for-instore
locale: en
trackId: 43B4Nr7uZva5UdwWEt3PEy
trackSlugEN: setting-up-the-cappta-acquirer-for-instore
---

To allow transactions through card machines using inStore, you need an acquirer or sub-acquirer that will process your payments.

__Cappta__ is an inStore certified sub-acquirer in Brazil.

>⚠️ If you want to use Cappta in a different country or if you want to use another acquirer that is not currently certified, you will need to build the integration with that acquirer’s application. To do so, refer to the article [Integrating inStore to a new payment acquirer](https://help.vtex.com/en/tracks/instore-integration--6NTqymtXmL9cNy8w1ouAod).

<div class=”alert alert-info”>
Cappta is currently supported by the following platforms and devices:
<ol>
<li>Windows 8 or superior, with Ingenico USB card machine</li>
<li>Android</li>
</ol>
</div>

Before installing Cappta’s application, make sure you have completed the previous step of setting up the Payments module. If you have, follow the steps below to install and set up the Cappta acquirer for inStore.


## What Cappta is

Cappta is a sub-acquirer approved by inStore which can transact through several acquirers (Stone, Cielo, Rede, etc.) For more information, visit [Cappta’s website](http://www.cappta.com.br)

Currently, the integration works for Android and Windows systems. If you have chosen Cappta to process your payments, the installation and configuration process is as follows:


## Download the Cappta Pague app

- **Android**: You can download the app directly from the Google Play Store or through the following link: https://play.google.com/store/apps/details?id=com.cappta.gpandroid
- **Windows**: You can download the **CapptaGpPlus** executable from the following link: https://github.com/Cappta/Homologa/tree/master/Instalador

## Setting up the app on your device
- **Android**: The configuration flow of the app is the same as any other application installed on a smartphone or tablet. Just open the app and enter the access information (CNPJ, POS, Password). If you do not know any of this information, contact Cappta.
- **Windows**: To set it up, just run the .exe file and fill in the access information (CNPJ, POS, Password). If you do not know any of this information, contact Cappta.

<div class=”alert alert-warning”>
You must make sure that the <strong>web checkout</strong> option is enabled in your Cappta account.
</div>


## Pairing the card machine

If you are using a Bluetooth card machine, you will need to pair the machine with the device on which the inStore and the acquirer's app are running, allowing them to communicate with the machine.

The pairing mode can vary depending on the machine, but in general, it is necessary to press the "0" (zero) button so that the machine enters the "pairing mode" and displays the pairing password. Then just access the Bluetooth settings of the device (tablet or smartphone) and click on the name of the machine. The system should then ask for the pairing password.
