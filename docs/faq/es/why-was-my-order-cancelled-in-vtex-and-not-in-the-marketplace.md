---
title: ¿Por qué el pedido fue cancelado en la VTEX y no en el marketplace?
id: frequentlyAskedQuestions_678
status: PUBLISHED
createdAt: 2017-04-27T22:30:17.232Z
updatedAt: 2023-03-31T18:41:40.538Z
publishedAt: 2023-03-31T18:41:40.538Z
firstPublishedAt: 2017-04-27T23:02:27.269Z
contentType: frequentlyAskedQuestion
productTeam: Channels
author: authors_3
slug: por-que-el-pedido-fue-cancelado-en-la-vtex-e-no-en-el-marketplace
legacySlug: por-que-el-pedido-fue-cancelado-en-la-vtex-e-no-en-el-marketplace
---

La integración con marketplaces no tiene una vía de mano doble cuando se trata de cancelación de pedidos. La cancelación de un pedido directamente en la plataforma VTEX no actualizará ese mismo pedido en la plataforma del marketplace.

Con eso, aunque el pedido sea cancelado en el seller, el mismo seguirá su flujo en el marketplace, pues no será notificado de ese cambio.

## ¿Cómo identificar que hizo la solicitud de cancelación?

Cada acción realizada en una aplicación se ha registrado en el módulo **Pedidos**. Para ver este registro, sigue los pasos a continuacións:

1. En el Admin VTEX, accede a **Pedidos > Todos los pedidos**, o escribe **Todos los pedidos** en la barra de búsqueda en la parte superior de la página.
2. Seleccione el pedido deseado.
3. En la sección **Historial de pedidos**, haga click en `Ver interacciones`.

