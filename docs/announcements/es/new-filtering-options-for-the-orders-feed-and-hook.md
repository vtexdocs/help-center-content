---
title: 'Un nuevo filtro del feed permite las notificaciones relacionadas con cualquier atributo del pedido'
id: 4j99SY7EW0sSJz1Vu0p4uP
status: PUBLISHED
createdAt: 2021-05-20T16:39:31.231Z
updatedAt: 2021-05-28T18:00:19.312Z
publishedAt: 2021-05-28T18:00:19.312Z
contentType: updates
productTeam: Post-purchase
author: 2Gy429C47ie3tL9XUEjeFL
slug: nuevas-opciones-de-filtrado-para-feed-y-hook
legacySlug: nuevas-opciones-de-filtrado-para-feed-y-hook
announcementImageID: ''
announcementSynopsisES: 'Ahora es posible filtrar el Feed de pedidos por cualquier atributo, como por entrega o cambios de ítems.'
---

Hemos mejorado las opciones de configuración del [Feed y Hook](https://developers.vtex.com/vtex-rest-api/docs/feed-v3-1) de pedidos con un nuevo filtro que permite a las tiendas recibir actualizaciones relacionadas con cualquier atributo del pedido. Ahora es posible recibir actualizaciones cuando se entrega un pedido o cuando se cambian los ítems, entre otras cosas.

## ¿Qué cambió?

Anteriormente, el Feed y Hook_ _solo registraban cambios en el [status](https://help.vtex.com/en/tutorial/order-status-table-oms--frequentlyAskedQuestions_773?&utm_source=autocomplete#) de los pedidos.

Con la nueva configuración, se puede registrar cualquier cambio que se produzca en un pedido. Esto se hace por medio de expresiones [JSONata](https://jsonata.org/) configuradas en la API de pedidos, lo que permite un filtrado altamente personalizable.

## ¿Por qué hicimos este cambio?

El filtrado de pedidos por status no incluía eventos relevantes para algunos tipos de integración. Nos dimos cuenta de que las tiendas podían beneficiarse de recibir actualizaciones cuando los pedidos se entregaban o se cambiaban los ítems, por ejemplo.

Asimismo, la nueva configuración permite numerosas opciones de filtros personalizados además de las mencionadas anteriormente. Dado que el nuevo filtro utiliza [expresiones JSONata](https://docs.jsonata.org/overview.html), se puede combinar condiciones de filtrado y seleccionar conjuntos específicos de pedidos que deberían generar eventos, por ejemplo.

## ¿Qué se necesita hacer?

Este cambio no afectará a las configuraciones de Feed y Hook existentes. Esta nueva configuración es una alternativa al filtrado por status que viene por defecto.

Usted puede implementar la nueva configuración utilizando los _endpoints _de [configuración del Feed](https://developers.vtex.com/vtex-rest-api/reference/feed-v3) o de [configuración del Hook](https://developers.vtex.com/vtex-rest-api/docs/feed-v3-1#hook) de la API de pedidos. Obtenga más información sobre cómo configurar este nuevo filtro en la [guía Feed v3](https://developers.vtex.com/vtex-rest-api/docs/feed-v3-1).

Si necesita probar sus expresiones JSONata, utilice nuestro [_endpoint_ de expresiones JSONata](https://developers.vtex.com/vtex-rest-api/reference/feed-v3#testjsonataexpression).
