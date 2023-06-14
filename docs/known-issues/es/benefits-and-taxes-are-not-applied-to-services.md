---
title: Promociones e impuestos no se aplican a los servicios
id: 4u12zyfc387daNQamFohA2
status: PUBLISHED
createdAt: 2019-02-15T18:52:59.074Z
updatedAt: 2019-12-31T15:17:43.910Z
publishedAt: 2019-12-31T15:17:43.910Z
firstPublishedAt: 2019-02-15T18:55:22.623Z
contentType: knownIssue
productTeam: Marketing & Merchandising
author: authors_4
tag: Checkout
slug: promociones-e-impuestos-no-se-aplican-a-los-servicios
kiStatus: Closed
internalReference: 
---

## Sumario

Al incluir un servicio en un artículo del carrito, promociones e impuestos no se aplican, manteniendo el precio original del servicio.

## Simulación

1. Registre una promoción y/o impuesto sin ninguna condición específica, para tener amplia aplicación en la tienda;
2. Inserte un producto con servicio en el carrito;
3. Note que el precio del producto será modificado pero el precio del servicio no va a cambiar.

## Workaround

Este escenario es una limitación de la arquitectura de servicios disponible hoy en día. Por eso, lo ideal es que estos productos sean SKUs normales.

A través de implementaciones de front-end en el checkout es posible verificar cuáles son los productos que se han insertado en el carrito y ofrecer servicios específicos que a su vez insertan estos SKUs que corresponden al servicio.

