---
title: 'Cómo cancelar pedido'
id: tutorials_186
status: PUBLISHED
createdAt: 2017-04-27T22:15:47.296Z
updatedAt: 2023-03-31T00:26:08.605Z
publishedAt: 2023-03-31T00:26:08.605Z
firstPublishedAt: 2017-04-27T23:00:46.851Z
contentType: tutorial
productTeam: Post-purchase
author: authors_84
slug: como-cancelar-pedido
locale: es
legacySlug: como-cancelar-pedido
subcategory: 2t00bBkcAwIkgSCGKsMOwY
---

Tiene lugar la cancelación de Pedido en VTEX en prácticamente cualquier status de su evolución. Corresponde destacar que, una vez cancelado el pedido, no se revierte el status del pedido.

Hay dos formas de hacer esta acción, por el Admin VTEX o API.

## Cancelación en el módulo Pedidos

1. En el Admin VTEX, accede a **Pedidos > Todos los pedidos**, o escribe *Todos los pedidos* en la barra de búsqueda en la parte superior de la página.  
2. En **Todos los pedidos**, acceda al pedido deseado.
3. Haga clic en el botón **Confirmar cancelación** junto al card principal del status.
4. Se requerirá confirmar que está consciente del resultado de esta acción..

Cuando el pedido está en estado **Listo para manejo** o **A preparar la entrega**, es necesario que la cancelación se haga dos veces. Esto, porque la primera vez el status se cambia a **Cancelación solicitada**.
Cuando la solicitud ya se encuentra en el status **Cancelación solicitada**, basta hacer clic en **Confirmar cancelación** que el pedido se cambiará a **Cancelado**. Si desea continuar con este pedido, simplemente introduzca la nota fiscal.

**¡Recuerde!** No se puede cambiar un pedido cuando el mismo ya está en el estado **Facturado**.

## Cancelación en el ERP

Esa acción por medio del ERP puede tener lugar por nuestra API REST, según nuestro [guía de integración de ERPs](https://developers.vtex.com/docs/erp-integration-set-up-order-processing).

## Cancelación solicitada por el cliente

Cuando es el cliente quien solicita la cancelación del pedido, el flujo es diferente. Lea [este artículo](https://help.vtex.com/es/tutorial/como-funciona-o-cancelamento-de-pedido-por-parte-do-cliente--3wEI6DUNtecooG2Ki4Akqo) para entender como funciona la cancelación en este caso.
