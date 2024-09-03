---
title: 'El método WebService de activar SKU no funciona cuando no hay precio en la política comercial principal'
id: 5a4XUoUvpm2KmWw66Um0mu
status: PUBLISHED
createdAt: 2017-07-09T22:52:26.629Z
updatedAt: 2019-12-31T15:17:42.750Z
publishedAt: 2019-12-31T15:17:42.750Z
firstPublishedAt: 2017-09-12T21:19:31.214Z
contentType: knownIssue
productTeam: Marketing & Merchandising
author: 5S2MYtrgEoSGaGMqsICaEC
tag: Web Service
slug: método-webservice-no-funciona-cuando-no-hay-precio-en-la-política-comercial-principal
locale: es
kiStatus: Fixed
internalReference: 
---

## Sumario

Cuando se utiliza el método WebService *StockKeepingUnitActive* en un SKU que no tiene precio registrado para la Política de Comercio principal (1), que no funciona debido a que el sistema valida si es o no un precio registrada en SKU sólo mirar a la política.

## Simulación

Tener un SKU con precio sólo en otras políticas comerciales, sin ser la principal y tratar de realizar una solicitud en el método *StockKeepingUnitActive* haciendo referencia al SKU en cuestión.

## Workaround

Activar SKU manualmente en el administrador o masivamente a través de la plantilla de productos/SKU

