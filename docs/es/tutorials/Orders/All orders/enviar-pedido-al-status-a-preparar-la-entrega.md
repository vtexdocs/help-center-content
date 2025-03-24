---
title: 'Enviar pedido al status a Preparar la Entrega'
id: tutorials_198
status: PUBLISHED
createdAt: 2017-04-27T22:14:17.090Z
updatedAt: 2023-06-15T13:32:59.728Z
publishedAt: 2023-06-15T13:32:59.728Z
firstPublishedAt: 2017-04-27T23:02:47.756Z
contentType: tutorial
productTeam: Post-purchase
author: authors_84
slugEN: moving-order-to-start-handling-shipping
locale: es
legacySlug: enviar-pedido-al-status-listo-para-manejo
subcategoryId: 2t00bBkcAwIkgSCGKsMOwY
---

El status `Listo para preparar` es la advertencia al ERP de que debe descender el pedido para que se produzca la baja en la reserva. Después de que el ERP notificó a VTEX que integró el pedido y que el stock de los artículos ya se actualizó, el status se cambia a `Preparar la entrega`.

La baja en la reserva no ocurre automáticamente, esto debe ser controlado por su ERP. Para entender más detalles de cómo funciona la reserva, vea nuestra documentación [Cómo se maneja la reserva](https://help.vtex.com/es/tutorial/como-se-maneja-la-reserva--tutorials_92).

A continuación se indican las posibles maneras de actualizar este status.

## Por integración y API

Las integraciones automatizan este proceso. Ocurren cuando otros sistemas consultan los pedidos de VTEX para seguir con el flujo de envío. Esta integración se puede hacer a través de API REST, según nuestro [guía de integración de ERPs](https://developers.vtex.com/docs/erp-integration-set-up-order-processing).

Después de hacerlo, puedes usar la API [Start handling order](https://developers.vtex.com/docs/api-reference/orders-api#post-/api/oms/pvt/orders/-orderId-/start-handling).

## Por el Admin VTEX

Si la tienda no tiene ERP o algún sistema que integre los pedidos, usted puede realizar la continuación del flujo manualmente. El paso a paso para esta tarea se describe a continuación:

1. En el Admin VTEX, accede a **Pedidos > Todos los pedidos**, o escribe **Todos los pedidos** en la barra de búsqueda en la parte superior de la página.
2. Seleccione el pedido deseado con status `Listo para preparar`.
3. En la sección **Status del pedido**, haga clic en el botón `Listo para preparación`.
4. Marque las cajas:
    - <a class="far fa-check-square"></a> Entiendo que interferiré con el avance del pedido.
    - <a class="far fa-check-square"></a> Entiendo que esta acción no se puede deshacer.
    - <a class="far fa-check-square"></a> Entiendo las consecuencias de esta acción en el flujo del pedido.
5. Haga clic en `Proceder com el status`.

>⚠️ Al iniciar el preparo de um pedido manualmente, el pedido no se puede integrar al ERP posteriormente.
