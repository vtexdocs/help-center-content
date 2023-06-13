---
title: Gane facilidad para acceder a informaciones de factura con la nueva columna del informe de pedidos
id: 691NLFaJYGwpfrOOmnQJsL
status: CHANGED
createdAt: 2019-05-22T19:41:07.812Z
updatedAt: 2020-11-27T19:40:31.176Z
publishedAt: 2020-09-04T21:14:07.344Z
contentType: updates
productTeam: Post-purchase
author: 6AcGyun1hSWewU8YcaQiO
slug: gane-facilidad-para-acceder-a-informaciones-de-factura-con-la-nueva-columna-del-informe-de-pedidos
legacySlug: gane-facilidad-para-acceder-a-informaciones-de-factura-con-la-nueva-columna-del-informe-de-pedidos
announcementImageID: 
announcementSynopsisES: El informe de exportación de pedidos ahora trae los datos de factura en la nueva columna Invoice Number
---

Para facilitar el acceso a informaciones importantes sobre su operación, el informe de pedidos ahora trae los datos de identificación de la nota fiscal de los pedidos. Esta información está disponible en la nueva columna `Invoice Number`.

## ¿Qué cambió?

La nueva columna en el informe permite la visualización de las facturas de sus pedidos a través de la interfaz del [módulo de Gestión de Pedidos](https://help.vtex.com/es/tutorial/estructura-de-la-pagina-del-oms--2dDZmUUFXWeyQ4s2gqiY0A), antes solo visualizadas a través de la [API de Get Order](https://developers.vtex.com/reference/orders#getorder).

## Principales ventajas

No solo ya no es necesario utilizar APIs para acceder a informaciones de factura, sino que la nueva columna del informe no tiene límite de datos.

Esto significa que el campo `Invoice Number` mostrará siempre todas las facturas existentes en cada pedido. Si un pedido tiene dos facturas, por ejemplo, el campo mostrará los números de las dos facturas separadas por comas.

## ¿Qué necesita hacer?

La nueva columna del informe ya está habilitada para todas las cuentas VTEX y no se requiere ninguna acción. Para entender mejor cómo funciona el informe de pedidos, acceda a nuestro artículo sobre [exportar pedidos en el módulo Gestión de Pedidos](https://help.vtex.com/es/tutorial/exportacion-de-pedidos-en-gestion-de-pedidos--tutorials_6417).
