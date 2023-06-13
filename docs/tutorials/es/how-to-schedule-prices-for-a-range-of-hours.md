---
title: Agendar precios para un rango de horas
id: 682fvZR864UEGe4ugymYQS
status: DRAFT
createdAt: 2017-06-27T02:11:37.317Z
updatedAt: 2022-08-01T20:27:28.199Z
publishedAt: 
firstPublishedAt: 2017-06-27T17:48:57.747Z
contentType: tutorial
productTeam: Marketing & Merchandising
author: 5fYXkMJagMwcSAeMAsAuOI
slug: agendar-precios-para-un-rango-de-horas
legacySlug: agendar-precios-para-un-rango-de-horas
subcategory: 4id9W3RDyw02CasOm2C2iy
---

Entre otros escenarios, uno de los puntos más importantes en un evento masivo como Black Friday, es el de poder colocar precios x hora para acotar los rangos de validez de un precio a un período, optimizando la rentabilidad del producto, y luego desactivarlo y volver al precio normal.

## Agendar hora por API
Una de las opciones para agendar precios por hora es hacerlo por API de precios:

<div class="alert alert-info">
<a href="https://developers.vtex.com/reference/pricing-api-overview">Ver documentación de APIs</a>
</div>

El backend de VTEX utiliza horario UTC, con lo cual, por ejemplo en Argentina que es GTM-3, si quisiera agendar un precio x hora mediante API y quisiera que un precio comience a las 00hs y termine a las 10hs, debería enviar 3hs más de las que actualmente deseo configurar. O sea, si quisiera que el precio inicie su validez a las 00hs, debo mandar 03hs, y si quisiera que termine a las 10hs, debo mandar 13hs.:

JSON API Precios:
```
"validFrom": "2017-06-23T03:00:00Z",
"validTo": "2017-06-23T13:00:00Z"
```

El precio se invalidará automáticamente luego de vencer la hora agendada.

<div class="alert alert-warning">
<strong>Importante</strong>: En caso de modificar el precio mediante la interfaz del precios del admin y guardar los cambios, se perderá la agenda de horas y quedará válida solamente la agenda de fechas.
</div>

## Agendar hora por planilla
La otra opción es realizar el agendamiento masivo por planilla de precios. Si bien el backend funciona en UTC, el import de planilla de precios tiene un pre-proceso que calcula el horario de la PC del cliente y ajusta automáticamente el horario de agendamiento, según la hora local. 

Esto significa que, por ejemplo en Argentina que es GTM-3, si quisiera agendar un precio x hora mediante Planilla y quisiera que un precio comience a las 00hs y termine a las 10hs, debería configurar en la planilla simplemente esa misma hora. 

O sea, si quisiera que el precio inicie su validez a las 00hs, debo mandar 00hs, y si quisiera que termine a las 10hs, debo mandar 10hs.:

Columnas Planilla Precios:
```
“DateTo”: "2017/06/23 00:00:00",
“DateFrom”: "2017/06/23 10:00:00"
```

El precio se invalidará automáticamente luego de vencer la hora agendada.

<div class="alert alert-warning">
<strong>Importante</strong>: De igual modo que mediante API, en caso de modificar el precio mediante la interfaz del precios del admin y guardar los cambios, se perderá la agenda de horas y quedará válida solamente la agenda de fechas.
</div>
