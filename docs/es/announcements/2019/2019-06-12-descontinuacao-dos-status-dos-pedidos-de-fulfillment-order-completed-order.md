---
title: 'Descontinuación del status del pedido de Fulfillment `order-completed`, `order-create-error` y `order-creation-error`'
id: 4AJyu9fJNSKNpL4g4dfgcp
status: PUBLISHED
createdAt: 2019-06-12T18:05:37.415Z
updatedAt: 2020-04-02T16:45:58.231Z
publishedAt: 2020-04-02T16:45:58.231Z
contentType: updates
productTeam: Reliability
author: 5DnIDwto7E6PRpdH1Kpdyu
slugEN: 2019-06-12-discontinuation-of-order-completed-order-create-error-and-order-creation
locale: es
legacySlug: descontinuacion-del-status-del-pedido-de-fulfillment-order-completed-order
announcementImageID: 'undefined'
announcementSynopsisES: 'Status de los pedidos de Fulfillment `order-completed``order-create-error` y `order-creation-error` serán descontinuados'
---

A partir del 24 de junio de 2019, los status de los pedidos de Fulfillment `order-completed`, `order-create-error` y `order-creation-error` serán descontinuados.

Los pedidos de origen Fulfillment son aquellos relacionados con las etapas de entrega o recogida de un pedido. Podemos asociar los pedidos que tienen este origen al proceso que realiza un seller para efectuar la entrega o recogida de un pedido.

> ⚠️ El status de los pedidos de origen Marketplace no se alterará.

## ¿Por qué VTEX está tomando esta acción?

Los workflows de los pedidos, es decir, el progreso de las etapas de entrega de los pedidos, ya no se generarán en el proceso de cierre de compra. Se crearán en un procesamiento posterior, después de que los pedidos tengan todos los datos para que se consideren completos.

Con este cambio, el sistema de workflow saldrá del camino crítico del cierre de compras. Como resultado, el sistema se vuelve más resiliente, mitigando riesgos al retirar un proceso no obligatorio del camino del cierre de compra. Esto hará que el cierre de compras sea más rápido. De esta manera, apenas los pedidos completos tendrán un procesamiento posterior de sus respectivos workflows.

## ¿Qué necesita hacer?

En general, la descontinuación de estos status no debería impactar a ninguna integración. Estos status fueron creados para ser utilizados por el propio sistema de VTEX en las etapas de preprocesamiento de compras y posibles reintentos. Como no son status relacionados con alguna etapa de negocio ni con la operación de entrega de pedidos, no necesitan ser consumidos por integraciones externas.

Sin embargo, recomendamos que revise su integración para confirmar que estos status no se están utilizando realmente.
