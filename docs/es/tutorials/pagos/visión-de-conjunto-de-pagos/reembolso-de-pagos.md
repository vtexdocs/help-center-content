---
title: 'Reembolso de pagos'
id: 6mS04nXwV46LeeH8Nr99fE
status: PUBLISHED
createdAt: 2025-04-03T10:23:45.401Z
updatedAt: 2025-04-03T11:01:24.508Z
publishedAt: 2025-04-03T11:01:24.508Z
firstPublishedAt: 2025-04-03T11:01:24.508Z
contentType: tutorial
productTeam: Financial
author: 6DODK49lJPk3yvcoe6GB6g
slugEN: payment-refunds
legacySlug: reembolso-de-pagos
locale: es
subcategoryId: 2Xay1NOZKE2CSqKMwckOm8
---

Un reembolso es la acción de devolver al cliente el valor pagado por una compra realizada en la tienda. Esto puede ser necesario por diferentes motivos:

- No es posible entregar el producto por razones logísticas.
- Indisponibilidad temporal de stock del producto.
- El cliente solicitó la devolución del producto.

Los reembolsos pueden ser de dos tipos:

- __Total__: el pedido se cancela y el precio de compra se reembolsa íntegramente al cliente.
- __Parcial__: solo se debe devolver parte del valor. Por ejemplo, si el cliente se va a quedar con uno o más productos del pedido..

## Reglas de prioridad para reembolsos parciales

Para compras en que se hayan utilizado dos medios de pago diferentes y para las que se reciba solicitud de reembolso parcial, es necesario determinar el medio de pago que tendrá prioridad en el orden de reembolso de los valores. El gateway de pagos de VTEX tiene dos reglas de prioridad:

- __Menor valor liquidado__: el reembolso de los valores comienza por el medio de pago que tenga el menor valor liquidado (capturado) hasta el momento.

- __Tarjeta de crédito primero (card-first)__: el reembolso de los valores siempre comienza por el total de la tarjeta de crédito y después sigue con el otro medio de pago utilizado en la compra, como una tarjeta de regalo. Esta regla está depende de ciertos [escenarios específicos de liquidación de pagos](#escenarios-de-liquidacion-de-pagos).

> ℹ️ Las tiendas VTEX utilizan la regla de **menor valor liquidado** de forma predeterminada. Si deseas que tu operación utilice la regla de **tarjeta de crédito primero**, solicita el cambio abriendo un ticket con el [Soporte VTEX](https://supporticket.vtex.com/support).

### Escenarios de liquidación de pagos

Si una tienda que utiliza la regla de __tarjeta de crédito primero__ procesa un reembolso parcial de un pedido que tenga dos medios de pago, antes debe devolver el total de la tarjeta de crédito y luego, de ser necesario, utilizar el total del otro medio de pago. Sin embargo, cuando se recibe una solicitud de reembolso parcial, se verifica el valor del pago liquidado y pueden producirse variaciones en la aplicación de esta regla.

A continuación se describen algunos de los posibles escenarios de reembolso parcial para una compra realizada con tarjeta de crédito y tarjeta de regalo:

#### Ya se liquidó completamente el valor de la tarjeta de crédito o el valor de reembolso solicitado es menor que el valor liquidado

El reembolso se realizará utilizando el total de la tarjeta de crédito. Si el valor de reembolso solicitado es mayor que el total de la tarjeta, el resto se liquidará del total de la tarjeta de regalo.

#### El valor liquidado de la tarjeta de crédito es menor que el valor de reembolso solicitado 

El reembolso se realizará primero con el total de la tarjeta de crédito disponible (valor liquidado) y el resto con el total de la tarjeta de crédito.

#### El valor de la tarjeta de crédito aún no ha sido liquidado

El reembolso se realizará primero con el total de la tarjeta de regalo y, de ser necesario, el sistema esperará la liquidación del valor restante en la tarjeta de crédito para completar el reembolso.
