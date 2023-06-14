---
title: 'Setting up the Pagar.me acquirer for inStore'
id: 1obqdkoH82yFWtaMbwcJKx
status: DRAFT
createdAt: 2020-06-28T15:32:06.737Z
updatedAt: 2021-02-23T15:39:04.382Z
publishedAt: 
firstPublishedAt: 2020-06-28T15:34:21.331Z
contentType: trackArticle
productTeam: Shopping
slug: setting-up-the-pagar-me-acquirer-for-instore
trackId: 43B4Nr7uZva5UdwWEt3PEy
trackSlugEN: setting-up-the-pagar-me-acquirer-for-instore
---

To allow transactions through card machines using inStore, you need an acquirer or sub-acquirer that will process your payments.

__Pagar.me__ is an inStore certified sub-acquirer in Brazil.

<div class="alert alert-warning">
If you want to use Pagar.me in a different country or if you want to use another acquirer that is not currently certified, you will need to build the integration with that acquirer’s application. To do so, refer to the article <a href="https://help.vtex.com/en/tracks/instore-integration--6NTqymtXmL9cNy8w1ouAod">Integrating inStore to a new payment acquirer</a>.
</div>

<div class="alert alert-info">
Pagar.me is currently supported only by <b>Android</b> systems, with <b>Gertec MOBIPIN</b> card machines.
</div>

Before installing Pagar.me’s application, make sure you have completed the previous step of setting up the Payments module. If you have, follow the steps below to install and set up the Pagar.me acquirer for inStore.


## What Pagar.me is

Pagar.me is a sub-acquirer approved by inStore which accepts several card brands (Visa, Mastercard, Elo, Amex, Diners, Discover, JBC, Aura, Hipercard, Hiper, VR, Alelo, Sodexo, Ticket). For more information visit [Pagar.me’s website](https://pagar.me)


## Download the Pagar.me inStore app

-**Android**: You can download the app directly from the Google Play Store or through the following link: https://play.google.com/store/apps/details?id=me.pagar.helix

## Setting up the app on your device

-**Android**: The installation flow of the app is the same as any other application installed on a smartphone or tablet. To set it up, you’ll need to choose the option **Pair the card machine** and select the machine you want to use.

## Pairing the card machine

If you are using a Bluetooth card machine, you will need to pair the machine with the device on which the inStore and the acquirer's app are running, allowing them to communicate with the machine.

The pairing mode can vary depending on the machine, but in general, it is necessary to press the "0" (zero) button so that the machine enters the "pairing mode" and displays the pairing password. Then just access the Bluetooth settings of the device (tablet or smartphone) and click on the name of the machine. The system should then ask for the pairing password.
