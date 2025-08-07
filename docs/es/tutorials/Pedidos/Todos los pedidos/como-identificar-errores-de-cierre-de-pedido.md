---
title: 'Identificar errores de cierre de pedido'
id: 4VZvHbDMfuIo0gO6OscgKE
status: PUBLISHED
createdAt: 2019-01-24T20:45:49.682Z
updatedAt: 2023-03-30T15:11:30.251Z
publishedAt: 2023-03-30T15:11:30.251Z
firstPublishedAt: 2019-01-24T22:02:42.931Z
contentType: tutorial
productTeam: Shopping
author: authors_35
slugEN: how-to-identify-order-closing-errors
legacySlug: como-identificar-errores-de-cierre-de-pedido
locale: es
subcategoryId: 2t00bBkcAwIkgSCGKsMOwY
---

Siempre que el usuario hace clic en cerrar pedido, el checkout de inmediato crea un pedido en la plataforma VTEX. Ese pedido tiene inicialmente el status **incompleto** y puede ser encontrado utilizando [filtros](https://help.vtex.com/es/tutorial/filtrar-todos-pedidos--tutorials_192). En el Admin VTEX, accede a **Pedidos > Todos los pedidos**, o escribe **Todos los pedidos** en la barra de búsqueda en la parte superior de la página.

Como todo pedido tiene, como mínimo, una transacción, también es posible encontrar esa transacción en **Pedidos > Transacciones**. Por ser un escenario de error, probablemente ya estará como transacción cancelada.

<div class = "alert alert-info">
La recomendación es que, para todo error de pedido, el primer sitio a consultar es el log de las transacciones en <b>Pedidos > Transacciones</b>. Sepa más em <a href="https://help.vtex.com/es/tutorial/how-to-view-the-orders-details">Visualizar detalles del pedido en Pedidos</a>.
</div>

El mensaje de error exhibido para el cliente puede generarse por distintas razones. Desde errores internos, como falla en efecturar una reserva de un ítem, hasta problemas con la tarjeta, como datos incompletos, o incluso una respuesta del gateway, como datos insertados de modo equivocado.
