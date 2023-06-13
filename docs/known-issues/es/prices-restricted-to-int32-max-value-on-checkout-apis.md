---
title: Precios restringidos a un valor máximo de "Int32" en las APIs de pago
id: 5mzOjCUYs7vXUkttbsK0za
status: PUBLISHED
createdAt: 2022-04-25T17:28:05.159Z
updatedAt: 2022-11-25T21:51:41.123Z
publishedAt: 2022-11-25T21:51:41.123Z
firstPublishedAt: 2022-04-25T17:28:05.773Z
contentType: knownIssue
productTeam: Checkout
author: 2mXZkbi0oi061KicTExNjo
tag: Checkout
slug: precios-restringidos-a-un-valor-maximo-de-int32-en-las-apis-de-pago
kiStatus: Backlog
internalReference: 566142
---

## Sumario

<div class="alert alert-info">
  <p>Este problema conocido ha sido traducido automáticamente del inglés.</p>
</div>


Las API REST de Checkout no admiten precios superiores a un valor "Int32". Por lo tanto, la aplicación de un "precio manual" se limitará al número "2.147.483.647" (número en decimales).



## Simulación


Al utilizar la API "Cambiar precio" (https://developers.vtex.com/vtex-rest-api/reference/pricechange), el envío de una carga útil como "{"precio":2500000000}" (que representa 25.000.000,00 dólares) devolverá un error 500 con el mensaje "El valor era demasiado grande o demasiado pequeño para un Int32".



## Workaround


N/A

