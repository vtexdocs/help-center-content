---
title: 'La reserva'
id: 6axzVCJECyHPGHzYjWDR52
status: CHANGED
createdAt: 2019-11-14T14:40:00.695Z
updatedAt: 2020-11-27T19:40:09.586Z
publishedAt: 2020-02-13T15:02:21.694Z
firstPublishedAt: 2019-11-18T12:20:12.356Z
contentType: trackArticle
productTeam: Post-purchase
slugEN: the-reservation
locale: es
trackId: 2xkTisx4SXOWXQel8Jg8sa
trackSlugEN: pedidos
---

Una vez que se finaliza un pedido, debemos asegurarnos de que los artículos del carrito para ese pedido ya no estén disponibles para compra en su tienda.

Ahí es donde entra el concepto de __reserva__.

La reserva conecta el módulo de logística al módulo de pedidos. Impide que el mismo artículo se compre más de una vez.

## Cómo funciona la reserva

> ⚠️ Los productos solamente insertados en el carrito **no** generan reserva o prioridad. Una reserva se realiza solo si un pedido está **finalizado**.  

Este es el flujo de reserva en VTEX:  

 1. En el momento en que el cliente completa la compra, los artículos comprados pasan al status `Reserva Autorizada` en stock. Aquí se indica que los artículos no se venderán más de una vez, pero aún no se han retirado del stock: esta reserva caerá si el pago no se aprueba dentro de la fecha de vencimiento de la reserva. Comprenda cómo se define este plazo en el artículo [Cómo funciona la reserva](https://help.vtex.com/es/tutorial/como-a-reserva-funciona).  

 2. Una vez confirmado el pago, el status de los artículos cambia a "Reserva Confirmada". Ahora la reserva ya no tiene plazo de vencimiento. Pero la compra aún se puede cancelar y los artículos aún pueden volver al estado disponible.  

 3. Finalmente, una vez que el pedido se encuentra en la etapa de preparación para la entrega, los artículos pasan al estado `Reserva Reconocida`. Este estado indica que el artículo ya no existe en el inventario físico.  

![reservation es](https://raw.githubusercontent.com/vtexdocs/help-center-content/refs/heads/main/docs/es/tracks/pedidos/la-reserva_1.png)

> ⚠️ VTEX no quita automáticamente los artículos del inventario, incluso después de que hayan pasado al estado `Reserva Reconocida`. Los artículos comprados permanecerán en este estado hasta que el ERP o la tienda los quiten del inventario.
