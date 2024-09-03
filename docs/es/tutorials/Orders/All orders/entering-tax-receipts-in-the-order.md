---
title: 'Insertar factura en el pedido'
id: tutorials_193
status: ARCHIVED
createdAt: 2017-04-27T22:14:57.365Z
updatedAt: 2023-03-29T23:52:24.585Z
publishedAt: 
firstPublishedAt: 2017-04-27T23:00:47.395Z
contentType: tutorial
productTeam: Post-purchase
author: authors_84
slug: como-insertar-la-nota-fiscal
locale: es
legacySlug: como-insertar-la-nota-fiscal
subcategoryId: 2t00bBkcAwIkgSCGKsMOwY
---

Ese es el procedimiento después del manejo del pedido: la creación de la nota fiscal para la factura del pedido. Puede hacerlo a través del módulo __Gestión de pedidos__ en el Admin o [a través de la API de Orders](https://developers.vtex.com/vtex-developer-docs/reference/invoice "Invoice").

Para hacerlo manualmente por **Gestión de pedidos**, basta hacer clic en el botón `Facturar Paqueta`, como en la imagen abajo.

![faturar-pedido-ex es](https://images.ctfassets.net/alneenqid6w5/3JeHgjEDtmm4ksSwamsW2W/d49ebe8fa3ea9e920e8d52f530182895/ex_1_es.png)

Con la inserción de la nota fiscal con el valor completo del pedido, él pasará para el status **Facturado.**

También es posible la inserción de la nota fiscal parcial, que es cuando son necesarias varias notas fiscales para que se alcance el valor total de la compra.

>ℹ️ Solamente después que se atinge el valor total del pedido se alterará el status para **Facturado**.

La nota fiscal demanda atención en los siguientes puntos:

- **Número de la factura:** ese número debe ser único por nota fiscal por pedido, pues, caso se inserten dos notas con igual número, el sistema lo comprenderá como una alteración de nota.
- **Número de rastreo:** ese número juntamente el de la URL de rastreo posibilita el seguimiento de la entrega por el cliente, a través de los e-mails que se envían a cada alteración en ese rastreo.
- **Código de Acceso:** es la clave de acceso para la consulta de la factura electrónica en Internet. Este campo sólo se puede rellenar en casos de factura electrónica.

O sea, cuando la URL y el código de rastreo están insertados, a cada actualización de la entrega, el cliente recibirá un e-mail con la notificación de que la entrega está más próxima.

El **Conversation Tracker** depende de la inserción de algún valor en ese campo. Si no tiene un número de rastreo, simplemente introduzca un valor cualquiera para activar el sistema de notificación.

>❗ Es posible añadir más de una factura al pedido; sin embargo, la suma total de los valores de las facturas debe coincidir con el valor total del pedido.
