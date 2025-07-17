---
title: "Productos no se envían por la integración al guardar el registro"
id: 3iY2DwQyiIwIsMaicGAI6e
status: PUBLISHED
createdAt: 2018-05-04T17:26:27.239Z
updatedAt: 2022-12-22T15:09:45.266Z
publishedAt: 2022-12-22T15:09:45.266Z
firstPublishedAt: 2018-05-04T17:44:09.981Z
contentType: knownIssue
productTeam: Channels
author: 1nsS1IgG3WWQ4cA8e2qsw6
tag: Connections
slugEN: productos-no-se-envian-por-la-integracion
locale: es
kiStatus: Backlog
internalReference: 
---

## Sumario

Al guardar la configuración de alguna integración de marketplace en Bridge, los productos no se envían. Incluso forzando una reindexación de la base, los productos continúan sin ser enviados.


## Simulación

1. Acceder al módulo Bridge o a Integraciones > Ajustes en el menú Admin y elegir algún marketplace para integrar.
2. Realizar el proceso de registro del martketplace y guardar la configuración.

Usted verá en la pestaña de Productos que la integración no intentó enviar ningún producto.

## Workaround

La solución por ahora es hacer cualquier cambio en el producto (añadir un espacio en la descripción, por ejemplo), o en el precio (un cambio de un centavo, por ejemplo) o en el inventario. Esto hará que el sistema de notificación identifique un cambio en el producto y genere una notificación a los afiliados.

