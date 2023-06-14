---
title: 'Las transacciones se registran en duplicado en Google Analytics'
id: 3pBn0BG1cAAqkw6CMEywIs
status: PUBLISHED
createdAt: 2018-11-20T16:44:40.811Z
updatedAt: 2022-12-22T20:54:51.124Z
publishedAt: 2022-12-22T20:54:51.124Z
firstPublishedAt: 2018-11-20T17:05:24.189Z
contentType: knownIssue
productTeam: Post-purchase
author: authors_4
tag: Checkout
slug: las-transacciones-se-registran-en-duplicado-en-google-analytics
locale: es
kiStatus: Backlog
internalReference: 
---

## Sumario

Las transacciones se registran en Google Analytics basándose en la página de pedido confirmado (_orderPlaced_). Cuando el cliente llega a la página un evento se envía al _Data Layer_, de modo que Google Tag Manager capta este evento y activa el script de Google Analytics.

Si el cliente accede a esta página repetidamente, o incluso si recarga/actualiza la página, el evento se activará y los datos se enviarán de nuevo a Google Analytics, creando información repetida.

## Simulación

1. Cierre un pedido en la tienda;
2. Acceda a la página de pedido confirmada repetidas veces;
3. Observe que estos varios accesos se registraron como pedidos completados en Google Analytics.

## Workaround

No existe una solución de contorno en este formato de integración.

Una posibilidad es no hacer la integración de transacciones vía frontend, con GTM/Javascript, y trabajar con una integración de backend (middleware) entre las APIs de pedidos de VTEX y las APIs de transacción de Google Analytics.

