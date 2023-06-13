---
title: Productos no se envían por la integración al hacerse el upload del mapeo
id: 2A6AvKjkTm2wocOg4ywIAa
status: PUBLISHED
createdAt: 2018-05-04T17:50:27.140Z
updatedAt: 2022-12-22T15:11:03.363Z
publishedAt: 2022-12-22T15:11:03.363Z
firstPublishedAt: 2018-05-04T17:55:57.383Z
contentType: knownIssue
productTeam: Channels
author: 1nsS1IgG3WWQ4cA8e2qsw6
tag: Connections
slug: productos-no-se-envian-por-la-integracion-al-hacerse-el-upload-del-mapeo
kiStatus: Backlog
internalReference: 
---

## Sumario

Al cargar el mapeo de alguna integración de Bridge, los productos no se envían. Incluso forzando una reindexación de la base, los productos continúan sin ser enviados.


## Simulación

1. Acceder al módulo Bridge o a la pestaña de Integración > Configuración.
2. Hacer clic en el botón `Upload de Mapeo` de algún marketplace en que la tienda ya esté integrada.
3. Cargar la planilla y hacer clic en `Enviar`.

Usted verá en la pestaña de Productos que la integración no intentó enviar ningún producto.

## Workaround

La solución por ahora es hacer cualquier cambio mínimo en el producto (añadir un espacio en la descripción, por ejemplo), o en el precio (un cambio de un centavo, por ejemplo) o en el inventario. Esto hará que el sistema de notificación identifique un cambio en el producto y genere una notificación a los afiliados. De esta forma, la integración intentará el envío de estos productos.

