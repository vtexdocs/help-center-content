---
title: 'Setting up the Cielo LIO acquirer for inStore'
id: 2X8bWpsWGOLOCToLZSbUkA
status: DRAFT
createdAt: 2020-06-28T15:28:38.682Z
updatedAt: 2021-02-23T15:47:34.391Z
publishedAt: 
firstPublishedAt: 2020-06-28T15:30:26.705Z
contentType: trackArticle
productTeam: Shopping
slugEN: setting-up-the-cielo-lio-acquirer-for-instore
locale: en
trackId: 43B4Nr7uZva5UdwWEt3PEy
trackSlugEN: setting-up-the-cielo-lio-acquirer-for-instore
---

To allow transactions through card machines using inStore, you need an acquirer or sub-acquirer that will process your payments.

__Cielo LIO__ is an inStore certified acquirer in Brazil.

<div class="alert alert-warning">
If you want to use Cielo LIO in a different country or if you want to use another acquirer which is not currently certified, you will need to build the integration with that acquirer’s application. To do so, refer to the article <a href="https://help.vtex.com/en/tracks/instore-integration--6NTqymtXmL9cNy8w1ouAod">Integrating inStore to a new payment acquirer</a>.
</div>

<div class="alert alert-info">
Cielo LIO is currently supported only by Android systems. You may use CieloLio V2 or CieloLio+.
</div>

Before installing Cielo LIO’s application, make sure you have completed the previous step of setting up the Payments module.

If you have, follow the steps below to install and set up the Cielo LIO acquirer for inStore.

## What Cielo LIO is

Cielo LIO is a Cielo digital card machine that is certified by inStore and can be used to transact your sales. For more information visit [Cielo’s website](https://www.cielo.com.br/comprar-maquina-de-cartao).

## Settings details

To have the inStore available on your Cielo LIO, it is necessary to open a ticket for Cielo requesting the association of your machine to your VTEX store as well as the sending of the `UriAppClient` app, passing the number of your Commercial Establishment (EC, in Portuguese) and logical number of the LIO.

During the configuration flow in VTEX Payments module, pay attention to the following details:

1. The `Access Token` and `Client ID` fields must be filled with data that you obtain directly from VTEX.
2. Attention to the `Type of Installment` selected. It must be in accordance with the one configured in your Cielo LIO. If you don’t know which option was hired, simulate a sale at the LIO (using the machine's standard system, outside the inStore) and select the Credit option, which will list the available installment options (Administrator, Shopkeeper or Bank) on your machine. You must ensure that the option that is active on the machine is the same configured in VTEX Payments module.
