---
title: 'Sustitución del término «captura» por «liquidación» en la documentación de Pagos'
id: 5tHBUvz9YtE030Hp81LVXS
status: PUBLISHED
createdAt: 2022-06-30T20:10:32.273Z
updatedAt: 2022-07-19T19:15:52.201Z
publishedAt: 2022-07-19T19:15:52.201Z
contentType: updates
productTeam: Financial
author: 4ubliktPJIsvyl1hq91RdK
slugEN: replacing-the-term-capture-for-settlement-in-the-payments-documentation
locale: es
legacySlug: sustitucion-del-termino-captura-por-liquidacion-en-la-documentacion-de-pagos
announcementImageID: ''
announcementSynopsisES: 'El término «captura» ha sido sustituido por «liquidación» en toda la documentación en el contexto de Pagos'
---

El término «captura» (y sus variantes como: «capturar», «capturado») fue sustituido por «liquidación» (y los equivalentes como: «liquidar», «liquidado») en toda la documentación de Pagos para mejor adaptar el texto al comportamiento de la plataforma.

## ¿Por qué realizamos este cambio?

El término «captura» se utiliza en el mercado para referirse al momento en que se realiza la captura de pago con tarjeta, como el cobro en la factura de la tarjeta de crédito. En un pago con tarjeta, primero ocurre la autorización del pago, este es el punto en el que se reservan los fondos. Después, ocurre la captura de los fondos reservados, es decir, la transferencia de los valores.

El procedimiento de liquidación de parte de VTEX (en el endpoint[ Settle Payment](https://developers.vtex.com/vtex-rest-api/reference/settlepayment)), no realiza la captura en sí, o sea, no transfiere los valores de pago, aunque sí verifica si la transferencia fue realizada por el proveedor de pagos.

Con otros medios de pago, como Pix o boleto, el paso de transferencia de los valores ocurre en la plataforma sin que se realice un proceso de captura, ya que los valores no se reservan durante el paso de autorización. Luego, utilizamos el término «liquidación» tanto para englobar todos estos escenarios, así como también indicar que nuestra plataforma solo verifica si el proceso fue realizado.

Esta sustitución refleja los cambios implementados en el Portal del Desarrollador. Para más detalles, consulta nuestra[ nota de release](https://developers.vtex.com/vtex-developer-docs/changelog/replace-capture-term-for-settlement-in-the-payment-provider-protocol) sobre la actualización.

## ¿Qué se necesita hacer?

No hay que tomar ninguna acción. Fue un cambio en la documentación solamente. Nada cambió en el funcionamiento de la plataforma, que puede continuar siendo utilizada normalmente.

Hay más información disponible sobre el proceso de liquidación en el contexto de Pagos en el artículo[ Flujo de la transacción en Pagos](https://help.vtex.com/pt/tutorial/fluxo-da-transacao-no-pagamentos--Er2oWmqPIWWyeIy4IoEoQ).
