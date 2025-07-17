---
title: "Receive and Pick-up tabs are displayed according to the searched ZIP code's availability"
id: 5PVGReAvyE0AOcoIq2SeKS
status: PUBLISHED
createdAt: 2018-11-21T16:19:00.507Z
updatedAt: 2022-12-22T20:43:11.612Z
publishedAt: 2022-12-22T20:43:11.612Z
firstPublishedAt: 2018-11-21T16:49:24.622Z
contentType: knownIssue
productTeam: Shopping
author: 2mXZkbi0oi061KicTExNjo
tag: Checkout
slugEN: receive-and-pickup-tabs-are-displayed-according-to-the-searched-zip-codes-availability
locale: en
kiStatus: Backlog
internalReference: 
---

## Summary

At present, the possibility to display the "Receive | Pick up" options is subject to a CEP (ZIP code) search in any of the tabs. This means that, if for example you would search for a ZIP code that doesn't offer the pick-up point option in the "Receive" tab, the "Pick-up" tab would not be displayed.


![Captura de Tela 2018-11-21 às 14.25.40](//images.ctfassets.net/alneenqid6w5/5kj7LZNmpiMsum4OSUc8mC/575006d7f6b4ad87dbeb60dea57b191c/Captura_de_Tela_2018-11-21_a__s_14.25.40.png) 

## Simulation

1. When finalizing a purchase, go to the "Delivery" step;
2. In the "Receive" tab, search for a ZIP code that isn't catered to by any pick-up point;
3. You'll notice that the "Receive" tab doesn't appear.

## Workaround

The solution comes to light through the customization of CSS, forcing it to display the class, as shown below:

  .shipping-method-wrapper{display:block}

