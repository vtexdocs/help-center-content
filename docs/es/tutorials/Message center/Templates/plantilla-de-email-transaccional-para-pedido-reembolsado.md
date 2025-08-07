---
title: 'Plantilla de email transaccional para pedido reembolsado'
id: 5uy6FCBb6DLyIJlSDeM10G
status: PUBLISHED
createdAt: 2020-09-08T12:27:15.441Z
updatedAt: 2020-10-05T12:51:52.381Z
publishedAt: 2020-10-05T12:51:52.381Z
firstPublishedAt: 2020-09-08T12:51:39.203Z
contentType: tutorial
productTeam: Post-purchase
author: authors_24
slugEN: transactional-email-template-for-refunded-order
locale: es
legacySlug: plantilla-de-email-transaccional-para-pedido-reembolsado
subcategoryId: 4D5LrWwlHGmOWMomOaaGee
---

Cuando se reembolsa el valor de un pedido al cliente, VTEX envía automáticamente un correo electrónico a ese cliente, notificándole que el reembolso fue exitoso. Usted puede desactivar o personalizar la plantilla para este correo electrónico en el [Centro de Mensajes de su tienda](/en/tracks/transactional-emails--6IkJwttMw5T84mlY9RifRP/5uvq01BDu6nnDEJpseR1aH).

## Personalización de plantillas

Para hacer esto, ingrese al Centro de Mensajes y busque la plantilla **Order Refund Customer**. O busque la clave de la plantilla: `vtexcommerce-order-refunded`. Lea nuestra [guía del Centro de Mensajes](/en/tracks/transactional-emails--6IkJwttMw5T84mlY9RifRP/335JZKUYgvYlGOJgvJYxRO) para aprender a personalizar las plantillas de email transaccional.

## Evento de activación del email

El correo electrónico de pedido reembolsado se activa cuando la tienda envía una notificación de factura de devolución. Este envío se realiza a través de la llamada de API [Order Invoice Notification](https://developers.vtex.com/reference/invoice#invoicenotification), con el campo `type` conteniendo el valor `input`.

En el Admin, este evento se activa cuando se hace clic en el botón **Hacer devolución de ítems** en la pantalla de detalles del pedido.
