---
title: 'El Nombre del Seller no se provee en integraciones mkp nativas'
id: bPx7CPZEXecgMe2Sscg6k
status: PUBLISHED
createdAt: 2017-12-28T15:21:09.238Z
updatedAt: 2022-12-22T15:10:41.565Z
publishedAt: 2022-12-22T15:10:41.565Z
firstPublishedAt: 2017-12-28T17:27:56.106Z
contentType: knownIssue
productTeam: Channels
author: 5fYXkMJagMwcSAeMAsAuOI
tag: Connections
slug: el-nombre-del-seller-no-se-provee-en-integraciones-mkp-nativas
locale: es
kiStatus: Backlog
internalReference: 
---

## Sumario

Al bajar las órdenes que se venden por la tienda, viene el campo *"sellers"* con los campos *"Id"* y *"Nombre"* completos. Por ej: *sellers:[{id: "1", name: "mitienda", logo: ""}]*

Pero en las órdenes integradas por MercadoLibre sólo viene el *"Id"* del seller, ya que el *"Nombre"* viene null: *sellers:[{id: "1", name: null, logo: null}]*

Con la implementación de múltiples sellers para proveedores de venta en verde, es necesario manejar lógistica por seller. Para identificar a cada uno, se puede utilizar el campo *"Nombre"* para que sea más amigable, pero este valor no se provee cuando viene por ejemplo por un pedido bajado por MercadoLibre.

## Simulación

1. Bajar un pedido de la tienda con la API GetOrder y se evidencia que el valor *Nombre* viene cargado. Por ej: *sellers:[{id: "1", name: "mitienda", logo: ""}]*
2. Bajar un pedido de MercadoLibre con la API GetOrder y se evidencia que el valor *Nombre* no viene cargado y el valor es null. Por ej: *sellers:[{id: "1", name: null, logo: ""}]*

## Workaround

Se puede identificar cada seller por ID y luego mostrar el nombre amigable que se desee en la integración del lado interno.

