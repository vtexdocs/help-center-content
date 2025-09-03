---
title: 'New mandatory attribute for products sent to Mercado Libre'
id: 5nr8nGhCLFNtIP5tFkNEpJ
status: PUBLISHED
createdAt: 2022-02-25T18:35:17.032Z
updatedAt: 2022-03-03T20:38:16.318Z
publishedAt: 2022-03-03T20:38:16.318Z
contentType: updates
productTeam: Channels
author: 46G4yHIZerH7B9Jo0Iw5KI
slugEN: 2022-02-25-new-mandatory-attribute-for-products-sent-to-mercado-libre
locale: en
legacySlug: new-mandatory-attribute-for-products-sent-to-mercado-libre
announcementImageID: 'undefined'
announcementSynopsisEN: 'Products in the Cell phones category in Mercado Libre must have the new mandatory attribute'
---

When a VTEX store integrated with Mercado Livre wants to [send products](https://help.vtex.com/en/tracks/configurar-integracao-do-mercado-livre--2YfvI3Jxe0CGIKoWIGQEIq/5XNeiye4rS4oao2MueSUeA) to the marketplace catalog, it must map the categories and attributes of these products.

Following a [resolution by Anatel](https://www.gov.br/anatel/pt-br/assuntos/noticias/anatel-alerta-marketplaces-sobre-venda-de-produtos-nao-homologados), Brazil’s National Telecommunications Agency, products in the Cell phones category in Mercado Libre must have the new mandatory attribute `ANATEL_HOMOLOGATION_NUMBER` in order to be sold in marketplaces.

## What has changed?

From now on, in order to be submitted to the Mercado Libre platform, products from the Cell phones category must have the mandatory attribute `ANATEL_HOMOLOGATION_NUMBER` registered and mapped.

This attribute corresponds to the homologation code of the electronic device with Anatel, which guarantees the consumer that the commercialized product respects standards of quality, safety, and regulated technical features.

## Why did we make this change?

This change was made due to [Anatel's new resolution](https://www.gov.br/anatel/pt-br/assuntos/noticias/marketplaces-adotam-medidas-para-coibir-venda-de-produtos-nao-homologados), which requires marketplaces to provide the homologation codes for electronic products in the Cell phones category.

## What needs to be done?

First, follow the steps in the article [Adding product specifications](https://help.vtex.com/en/tracks/catalogo-101--5AF0XfnjfWeopIFBgs3LIQ/4fcdmJzQ6QYA9zWf3bLWin) to create, on the VTEX platform, the product specification `ANATEL_HOMOLOGATION_NUMBER` for products in the Cell phones category.

After adding the new attribute, map the category and the attribute to send the product to Mercado Libre. For more information about this process, read the article [Sending products to Mercado Libre](https://help.vtex.com/en/tracks/configurar-integracao-do-mercado-livre--2YfvI3Jxe0CGIKoWIGQEIq/5XNeiye4rS4oao2MueSUeA).
