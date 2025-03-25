---
title: '¿Por qué el pedido no actualiza el status?'
id: frequentlyAskedQuestions_712
status: PUBLISHED
createdAt: 2017-04-27T22:28:34.393Z
updatedAt: 2019-12-31T14:24:04.173Z
publishedAt: 2019-12-31T14:24:04.173Z
firstPublishedAt: 2017-04-27T23:02:34.080Z
contentType: frequentlyAskedQuestion
productTeam: Post-purchase
author: authors_3
slugEN: why-doesnt-the-order-status-update
locale: es
legacySlug: por-que-el-pedido-no-actualiza-el-status
---

Ese escenario puede ocurrir con 3 status, 2 en VTEX y 1 en marketplace. Sigue la descripción abajo.

## En espera de la autorización para despachar

Ese status ocurre cuando el marketplace todavía no informó la confirmación de pago. Sólo se modifica el status cuando se actualiza esa información en el marketplace, o sea, sólo cuando se confirme el pago.

## Listo para manejo

En ese punto, el pedido está aguardando para bajar al ERP. Mientras eso no ocurre, el pedido seguirá en ese status.

OBS.: Caso usted no tenga ERP, es necesario caminar manualmente al próximo status.

## Facturado en el marketplace

[Comprenda en nuestro manual.](/es/faq/por-que-el-pedido-no-factura-en-el-marketplace)

## Preparando entrega

En este punto, el pedido ya está integrado al ERP de la tienda, aguardando todo el proceso de separación, embalaje, facturación y entrega al transportista. Una vez finalizado el proceso, la integración debe enviar a VTEX los datos de la factura, así como los de seguimiento.

Si el valor informado de la NF no es igual al valor total del pedido el status del pedido no se cambiará a **facturado**. En este caso, VTEX entiende que se ha producido una facturación parcial y el status sólo cambiará a **facturado** cuando la suma de las facturas sea igual al valor total del pedido.
