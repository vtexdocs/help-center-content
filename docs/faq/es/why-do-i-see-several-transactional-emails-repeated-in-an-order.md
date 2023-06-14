---
title: '¿Por qué veo varios emails transaccionales repetidos en un pedido?'
id: frequentlyAskedQuestions_5310
status: PUBLISHED
createdAt: 2017-04-27T22:22:48.654Z
updatedAt: 2023-03-20T18:16:45.773Z
publishedAt: 2023-03-20T18:16:45.773Z
firstPublishedAt: 2017-04-27T23:02:45.541Z
contentType: frequentlyAskedQuestion
productTeam: Post-purchase
author: authors_37
slug: por-que-veo-varios-emails-transaccionales-repetidos-en-un-pedido
locale: es
legacySlug: por-que-veo-varios-emails-transaccionales-repetidos-en-un-pedido-en-el-oms
---

En el Admin VTEX, en **Pedidos > Todos los pedidos**, ao hacer click en un pedido, una Línea del Tiempo muestra los detalles de esto pedido, y es posible ver los emails transaccionales correspondientes. Si usted observa en esa sección varios emails transaccionales repetidos siendo enviados al cliente final, verifique si uno de los siguientes escenarios está ocurriendo:

1) Su ERP puede estar enviando la factura repetidas veces.

Esto puede ocurrir por diversos escenarios. Un ejemplo es cuando el total de la facttura no es el total del pedido. En este caso, el status del pedido no pasará a `Facturado`. Mientras el ERP verifique que el pedido todavía se encuentra con el status `Preparando Entrega` (status anterior al Facturado), es posible que siga ejecutando la acción de envío de la factura.

Usted también puede verificar esa acción repetida hacendo click en **Ver Interacciones**, acompañando diversas interacciones que está haciendo su ERP.

Lo mismo puede ocurrir para el envío de datos de **Tracking**, también por su ERP.

2) El servidor de emails del cliente final puede estar con problemas que lo impiden de responder con un "acepte" de recibo de su email.

El servidor de envío de los emails transaccionales (SMTP), no logrando el OK del servidor de destino, seguirá intentando repetidamente entregar el email enviado por el módulo **Pedidos**.
