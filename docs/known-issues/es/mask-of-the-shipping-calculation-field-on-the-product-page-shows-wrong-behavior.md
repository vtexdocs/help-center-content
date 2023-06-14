---
title: 'Máscara del campo cálculo de envío en la página del producto tiene comportamiento inadecuado'
id: 3e3i6QgalWSKyIw6KsYwGa
status: PUBLISHED
createdAt: 2017-08-11T17:33:43.752Z
updatedAt: 2022-12-22T20:46:02.879Z
publishedAt: 2022-12-22T20:46:02.879Z
firstPublishedAt: 2017-08-11T19:54:51.166Z
contentType: knownIssue
productTeam: Marketing & Merchandising
author: 2mXZkbi0oi061KicTExNjo
tag: Portal (CMS)
slug: mascara-del-campo-calculo-de-envio-en-la-pagina-del-producto-tiene-comportamiento-inadecuado
kiStatus: Backlog
internalReference: 
---

## Sumario

El campo creado por el control `<vtex.cmc:shippingValue/>` en la página de producto muestra una máscara con comportamiento inadecuado.

Este escenario sólo ocurre en mobile con sistema operativo Android y navegador Chrome.

## Simulación

1. Acceda a la página del producto por un dispositivo móvil con sistema operativo __Android__ y por el navegador __Chrome__;
2. Introduzca números en el campo __Cálculo de envío__.
3. Algunos números pueden aparecer repetidos en el campo.

## Workaround

Insertar un código javascript en la página que sobrescribe la máscara nativa.

