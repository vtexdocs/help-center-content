---
title: '¿Por qué un pedido fue cancelado en el status “Listo para preparar”?'
id: LDgtkquNEssyQMYUGcYeO
status: PUBLISHED
createdAt: 2017-05-16T23:08:29.742Z
updatedAt: 2023-03-20T18:38:44.805Z
publishedAt: 2023-03-20T18:38:44.805Z
firstPublishedAt: 2017-05-18T19:20:59.326Z
contentType: frequentlyAskedQuestion
productTeam: Post-purchase
author: authors_59
slug: por-que-un-pedido-fue-cancelado-en-el-status-preparando-entrega
legacySlug: por-que-un-pedido-fue-cancelado-en-el-status-preparando-entrega
---

Cualquier pedido puede ser cancelado antes que su status sea `Facturado`.

Cuando sucede la cancelación, el comerciante es notificado a través de [VTEX DO](https://help.vtex.com/es/tutorial/vtex-do-interface--7KMbRL4OslN8DTX9oiuCiu). Así, dependiendo del estadio de preparación de la entrega, el comerciante puede confirmar o no la cancelación: 

1) En el caso de que desee confirmar la cancelación, acceda a **Pedidos > Todos los pedidos**, haga click en el pedido deseado y haga clic en **Cancelar pedido**.

2) En el caso de que desee proseguir con la entrega, basta seguir el procedimiento de facturación, informándole al cliente sobre la imposibilidad de cancelar el pedido.

<div class="alert alert-danger">
Solamente en el status <code>Carencia para cancelación</code> la solicitud de cancelación del cliente es unilateral, no le cabiendo al comerciante ninguna confirmación. En los demás status, el comerciante será informado sobre lo solicitud a través de VTEX DO.
</div>

