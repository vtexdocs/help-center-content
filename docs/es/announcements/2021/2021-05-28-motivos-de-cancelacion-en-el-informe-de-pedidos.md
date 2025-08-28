---
title: 'Motivos de cancelación en el informe de pedidos'
id: 46wIwISm6Df2LJgNePpFYK
status: PUBLISHED
createdAt: 2021-05-28T15:59:23.942Z
updatedAt: 2022-08-29T23:27:11.506Z
publishedAt: 2022-08-29T23:27:11.506Z
contentType: updates
productTeam: Post-purchase
author: 1malnhMX0vPThsaJaZMYm2
slugEN: 2021-05-28-reasons-for-cancellation-in-order-reports
locale: es
legacySlug: motivos-de-cancelacion-en-el-informe-de-pedidos
announcementImageID: 'undefined'
announcementSynopsisES: 'Añadimos la columna Cancellation Data al informe de pedidos para dar visibilidad a los motivos de las cancelaciones.'
---

La exportación de los informes de pedidos permite realizar acciones externas, como analizar el desempeño de la tienda y utilizarlos como nota de entrega para facilitar la logística.

Añadimos la columna **Cancellation Reason** al informe de pedidos para ofrecer a los administradores de tienda más visibilidad sobre los motivos de las cancelaciones solicitadas por los clientes.

## ¿Qué cambió?

El informe de pedidos exportado desde **Gestión de pedidos** o la API de Orders no mostraba detalles sobre la cancelación de pedidos. Solo se exhibía la columna **Cancellation Data** siempre con valores nulos. La información de esta columna corresponde al campo `cancelReason` que se muestra en la API de Orders.

Ahora, el informe contiene la columna **Cancellation Reason** que exhibe el motivo de la cancelación del pedido indicado por el cliente final. Anteriormente, esta información solo se mostraba en la sección de interacciones de la página de detalles del pedido en el Admin y en el campo `Reason` del objeto `cancellationData` en la API de Orders.

En caso de que el usuario no informe el motivo cuando realice la cancelación, la nueva columna estará vacía en el informe.

## ¿Por qué realizamos este cambio?

Incluimos los motivos de cancelación en el informe de pedidos para facilitar a los administradores de tienda la extracción de estos datos y el análisis de la información más importante sobre la cancelación de pedidos.

## ¿Qué se necesita hacer?

No se requiere ninguna acción, el cambio es automático para todas las tiendas VTEX. Todos los informes de pedidos generados a partir de hoy ya contienen este cambio.

Para entender cómo realizar la exportación de pedidos, lea el tutorial [Exportación de pedidos en Gestión de pedidos](https://help.vtex.com/es/tutorial/exportando-pedidos-no-gerenciamento-de-pedidos--tutorials_6417). Para saber más sobre la estructura del informe de pedidos, revise el artículo [Informe de pedidos](https://help.vtex.com/es/tutorial/planilha-de-pedidos--31m1ewsmsEe0WS4So2aGMY).

