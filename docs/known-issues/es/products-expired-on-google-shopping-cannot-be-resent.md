---
title: Productos expirados en Google Shopping no se pueden reenviar
id: 7nZszdQ8YEMg2q2MGqoQG
status: PUBLISHED
createdAt: 2018-06-11T16:20:09.949Z
updatedAt: 2022-12-22T15:10:33.256Z
publishedAt: 2022-12-22T15:10:33.256Z
firstPublishedAt: 2018-06-11T16:27:10.065Z
contentType: knownIssue
productTeam: Channels
author: 1nsS1IgG3WWQ4cA8e2qsw6
tag: Connections
slug: productos-expirados-en-google-shopping-no-se-pueden-reenviar
kiStatus: Fixed
internalReference: 
---

## Sumario

Google Shopping hace que los productos enviados expiren automáticamente después de 30 días si no se actualizan. Esto incluye cualquier cambio en el producto, ya sea de precio, inventario, o especificación. Para productos que no se han actualizado de ninguna manera, sería necesario volver a indizarlos para notificar la integración.

Sin embargo, las notificaciones sólo ocurren si hay cambio de precio/inventario/producto. Así, sólo __reindizar la base no influirá en el envío de productos a la integración__. De esta forma, los productos expirados en Google Shopping tienen la necesidad de una actualización para que la integración sea notificada.

## Simulación

1. Elija un producto expirado en Google Shopping.
2. Realice la reindización de este producto en VTEX.
3. La integración no será notificada y el producto no quedará activo en Google Shopping.

## Workaround

Haga un cambio de precio o de inventario en los productos deseados y ellos serán reenviados a Google Shopping.


