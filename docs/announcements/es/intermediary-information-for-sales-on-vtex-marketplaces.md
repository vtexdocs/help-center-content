---
title: "Datos de intermediario para ventas en marketplaces VTEX"
id: 1gNXqhQbudnvOkx7uHfoPB
status: PUBLISHED
createdAt: 2021-06-10T18:39:24.021Z
updatedAt: 2022-01-11T20:41:00.728Z
publishedAt: 2022-01-11T20:41:00.728Z
contentType: updates
productTeam: Shopping
author: 2Gy429C47ie3tL9XUEjeFL
slug: datos-de-intermediario-para-ventas-en-marketplaces-vtex
legacySlug: datos-de-intermediario-para-ventas-en-marketplaces-vtex
announcementImageID: ""
announcementSynopsisES: Los datos del intermediario están disponibles para ventas realizadas en los marketplaces VTEX.
---

Los sellers que venden sus productos en marketplaces VTEX tienen ahora acceso a los datos de identificación del intermediario y del método de pago para las ventas realizadas en estos marketplaces. Los clientes VTEX que operan como marketplaces también enviarán ahora esta información a sus sellers (VTEX y no VTEX).

Ahora puede acceder tanto a la información del intermediario como a la del método de pago mediante el request de [Get order](https://developers.vtex.com/vtex-developer-docs/reference/orders#getorder) en la API de Orders.

## ¿Por qué hicimos este cambio?

La información contenida en las facturas de ecommerce puede variar según la legislación de cada país. Por ejemplo, puede ser necesario identificar al intermediario e incluir el método de pago para las ventas realizadas a través de un marketplace. 

Debido a los requisitos legales sobre la emisión de facturas para las ventas por intermediación, como la [NT 2020.006](https://www.nfe.fazenda.gov.br/portal/exibirArquivo.aspx?conteudo=/RzDxklkYPU=) en Brasil, hemos realizado esta mejora para que nuestros clientes puedan cumplir con estos requisitos. Dado que esta información no es un dato personal protegido por la legislación a nivel mundial, este cambio se ha aplicado a todas las tiendas VTEX, sin excepciones.

## ¿Qué se necesita hacer?

Si su tienda está sujeta a requisitos legales, como se ha ejemplificado anteriormente, y opera como seller de otras tiendas VTEX, cualquier integración destinada a emitir facturas puede ser actualizada para incluir esta información.

Para identificar al intermediario (marketplaces integrados de forma nativa mencionados anteriormente), utilice el campo  [`affiliateId`](https://developers.vtex.com/vtex-developer-docs/reference/orders#getorder). 

Para identificar el método de pago utilizado, acceda a esta guía.
