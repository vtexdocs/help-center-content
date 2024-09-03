---
title: 'Integración B2W: automatice la solicitación de picking con B2W Coleta'
id: 3yRXLH2Zc7dIOPwVWmYz26
status: CHANGED
createdAt: 2019-11-01T17:10:58.783Z
updatedAt: 2020-11-27T19:40:29.236Z
publishedAt: 2019-12-31T15:13:42.979Z
contentType: updates
productTeam: Channels
author: 1nsS1IgG3WWQ4cA8e2qsw6
slug: integracion-b2w-automatice-la-solicitacion-de-picking-con-b2w-coleta
locale: es
legacySlug: integracion-b2w-automatice-la-solicitacion-de-picking-con-b2w-coleta
announcementImageID: ''
announcementSynopsisES: 'VTEX tendrá una nueva integración automática con B2W Coleta - una de las soluciones logísticas de B2W'
---

A partir del primero de noviembre de 2019, VTEX tendrá una nueva integración automática con B2W Coleta - una de las soluciones logísticas de B2W.

Ahora, basta activar el servicio en B2W y solicitar la recolección de ítems en su centro de distribución. No es necesario realizar ninguna configuración en VTEX, apenas hacer el acompañamiento del flujo de pedidos en el módulo de Gestión de Pedidos de la plataforma de e-commerce de VTEX. .

## ¿Qué cambia?
B2W Coleta es la solución de B2W para la etapa de Picking de una ruta logística. Es decir, el proceso de retirar pedidos de un centro de distribución y enviarlos a una transportadora.

Cuando un administrador de tienda realiza la integración de su tienda con los servicios de la plataforma de B2W, también puede contratar algunos servicios. Uno de estos es B2W Coleta, en donde la propia B2W se encarga de hacer el Picking de los pedidos.

Sin embargo, este proceso es intermediado por SkyHub - plataforma de integraciones de B2W. Anteriormente, el administrador de la tienda necesitaba entrar en el panel de SkyHub para cambiar el estado de los pedidos para "disponible para recogida" uno por uno.

La nueva integración automatiza el proceso. Una vez que se factura un pedido, el sistema de VTEX realizará la solicitación de recolección automáticamente. Todo esto siguiendo el flujo estándar del e-commerce: primero facturar el pedido del ERP para,  automáticamente, facturarlo en VTEX. 
 
El administrador de la tienda solo necesita preparar los paquetes para el transporte y hacer el acompañamiento, en el módulo de Gestión de Pedidos, para ver si los ítems se entregarán correctamente.

## ¿Cómo funciona?
Como se mencionó, un pedido solamente puede ser recolectado del centro de distribución después de haber sido facturado.

Por lo tanto, la integración funciona en dos escenarios diferentes:
 
- __Pedido con apenas un ítem__: al emitir la factura del pedido, el módulo Gestión de Pedidos de VTEX buscará el ítem de aquella factura específica y hará una solicitación de recolección a B2W.

- __Pedidos con dos ítems o más__: aquí es posible que no todos los ítems se facturen al mismo tiempo. En este caso, el sistema espera hasta que el último ítem se facture correctamente para, en seguida, solicitar la recolección.

De este modo, en caso sea necesario, el administrador de la tienda deberá hacer algunas adaptaciones en los flujos de facturación en su ERP.

## Principales ventajas
 
- Procesos centralizados en un único admin;
- Operación integrada y automatizada.
 
Para saber cómo configurar la integración con SkyHub/B2W, acceda a:
https://help.vtex.com/es/tracks/configurar-integracion-b2w?locale=es
