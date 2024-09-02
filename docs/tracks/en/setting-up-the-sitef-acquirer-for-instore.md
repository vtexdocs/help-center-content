---
title: 'Setting up the SiTef acquirer for inStore'
id: 1Vr97VGNNWpaoyXe0rKV8U
status: DRAFT
createdAt: 2020-06-28T15:39:28.422Z
updatedAt: 2021-02-23T15:47:12.481Z
publishedAt: 
firstPublishedAt: 2020-06-28T15:42:37.386Z
contentType: trackArticle
productTeam: Shopping
slug: setting-up-the-sitef-acquirer-for-instore
locale: en
trackId: 43B4Nr7uZva5UdwWEt3PEy
trackSlugEN: setting-up-the-sitef-acquirer-for-instore
---

<div class="alert alert-warning">
It is important to stress that the SiTef integration is a certified solution, but has not yet been tested on a large scale.
</div>

To allow transactions through card machines using inStore, you need an acquirer or sub-acquirer that will process your payments.

__SiTef__ is an inStore certified sub-acquirer in Brazil.

<div class="alert alert-warning">
If you want to use SiTef in a different country or if you want to use another acquirer that is not currently certified, you will need to build the integration with that acquirer’s application. To do so, refer to the article <a href="https://help.vtex.com/en/tracks/instore-integration--6NTqymtXmL9cNy8w1ouAod">Integrating inStore to a new payment acquirer</a>.
</div>

<div class="alert alert-info">
SiTef is currently supported by <b>Android</b> and <b>iOS</b> systems, with Ingenico card machines or any other machine that is certified by SiTef.
</div>

Before installing SiTef’s application, make sure you have completed the previous step of setting up the Payments module.

## What SiTef is

SiTef is a sub-acquirer approved by inStore which can transact through several acquirers (Stone, Cielo, Rede, etc.)

## Download the VTEX SiTef app

- **Android**: You can download the app directly from the Google Play Store or through the following link: https://play.google.com/store/apps/details?id=com.vtex.sitef
- **iOS**: You can download the app directly from the Apple App Store or through the following link: https://itunes.apple.com/us/app/vtex-sitef/id1214909778?mt=8

## Setting up the app on your device

The installation of the app on both Android and iOS is the same as that of any other application installed on a smartphone or tablet. However, the configuration depends on an extra step besides opening the application and entering the access information (`Store Id` and `Operator Id`).

Before that, you need to define which SiTef server you want to use. There are currently two options:
- GSURF
- Local Server

### GSURF

GSURF is a company that offers a SiTef server via VPN. This greatly facilitates the configuration of payments using SiTef, since the customer doesn’t need dedicated infrastructure. Therefore, if you want to receive transactions using this system, this is the most recommended option.

When setting up the SiTef connector, available on VTEX Payments, you will need to specify `GSURF.SSL` as the protocol for the VTEX SiTef app to send transactions to the remote server.

<div class=”alert alert-warning”>
<strong>Important:</strong>: when using GSURF as a protocol, make sure that your network allows the following accesses:<br>
<b>Firewall releases (outbound traffic only):</b>
<ol>
<li><b>Range of IPs:</b> 187.103.176.0/20 189.85.171.160/28 18.231.194.64/26</li>
<li><b>Ports:</b> UDP-443; TCP-443; TCP-55844; TCP-55845</li>
<li><b>LOCAL DNS:</b> UDP-53 (name resolution at gsurfnet.com)</li>
</ol>
</div>

### Local Server

It is also possible to use a local SiTef server to receive transactions, setting up an infrastructure dedicated to this. In such a case, it’s necessary to contact SiTef to define the requirements for this local configuration.

On the SiTef connector on VTEX Payments, you will need to specify the IP of this local server so that the VTEX SiTef app may send transactions to it.

## Pairing the card machine

If you are using a Bluetooth card machine, you will need to pair the machine with the device on which the inStore and the acquirer's app are running, allowing them to communicate with the machine.

The pairing mode can vary depending on the machine, but in general, it is necessary to press the "0" (zero) button so that the machine enters the "pairing mode" and displays the pairing password. Then just access the Bluetooth settings of the device (tablet or smartphone) and click on the name of the machine. The system should then ask for the pairing password.
