---
title: '¿Cómo funciona el reintento del gateway de pagos?'
id: 2JaHsjQIs0ceks0e2Mkwgu
status: PUBLISHED
createdAt: 2019-01-24T21:38:42.128Z
updatedAt: 2019-12-31T15:27:07.836Z
publishedAt: 2019-12-31T15:27:07.836Z
firstPublishedAt: 2019-01-24T21:38:42.460Z
contentType: tutorial
productTeam: Financial
author: authors_59
slugEN: how-does-payment-gateway-retry-work
legacySlug: como-funciona-el-reintento-del-gateway-de-pagos
locale: es
subcategoryId: 3Gdgj9qfu8mO0c0S4Ukmsu
---

El reintento es una feature del gateway de VTEX que tiene como objetivo __no perder pagos__. Si algún sistema de la cadena de pagos no puede continuar con una transacción en el momento en que se realiza un pago, el gateway de VTEX realiza reintentos de envío de la información de pago. Con eso, la venta no se pierde.

A continuación, siguen los casos en que el gateway de VTEX realiza los reintentos:

- Operador de pago señala que un pago todavía está pendiente.
- Operador de pago fuera del aire.
- Operador de pago tarda más tiempo para responder que lo esperado.
- Boletos que aún no se han pagado. En este caso, el reintento se produce sólo para boletos que no necesitan conciliación manual.
- Pagos realizados con wallets que tienen APIs de consulta propias (como PagSeguro, Paypal etc).
- Pedidos que caen en análisis de fraude manuales.

## Artículos relacionados

- [¿Qué es un gateway de pagos?](/es/docs/tutorials/que-es-un-gateway-de-pagos)
- [Diferencia entre medios de pago y condiciones de pago](/es/docs/tutorials/diferencia-entre-medios-de-pago-y-condiciones-de-pago)
- [¿Qué es un adquirente?](/es/docs/tutorials/que-es-un-adquirente)
