---
title: 'Las órdenes con vendedores de cambio ejecutadas no respetan el período de gracia de la cancelación'
id: 25diaeQxIpSJIfCQxFizIV
status: PUBLISHED
createdAt: 2022-09-13T03:17:08.065Z
updatedAt: 2022-11-25T22:01:31.130Z
publishedAt: 2022-11-25T22:01:31.130Z
firstPublishedAt: 2022-09-13T03:17:08.627Z
contentType: knownIssue
productTeam: Order Management
author: 2mXZkbi0oi061KicTExNjo
tag: Order Management
slug: las-ordenes-con-vendedores-de-cambio-ejecutadas-no-respetan-el-periodo-de-gracia-de-la-cancelacion
locale: es
kiStatus: Backlog
internalReference: 656815
---

## Sumario

>ℹ️ Este problema conocido ha sido traducido automáticamente del inglés.


Los pedidos con cambio de vendedor, tienen el respectivo pedido en el primer vendedor cancelado y se creará un nuevo pedido en el segundo vendedor. Si incluso el nuevo pedido está fuera del período de gracia de cancelación, el usuario todavía puede cancelar el pedido.

El sistema hoy en día no tiene ningún control después de la primera cancelación porque el pedido del Mercado ya tiene una confirmación de cancelación (en el caso del pedido del primer vendedor), y ya no controla este periodo de gracia.



## Simulación


Cree una orden y ejecute una función de cambio de vendedor, después de la segunda creación de la orden espere a que termine el periodo de gracia de cancelación, y ejecute una solicitud de cancelación como usuario final. La orden será cancelada en ese momento.

En las interacciones de los pedidos verá el mensaje de usuario en solicitud de cancelación.



## Workaround


No hay ninguna solución para este caso.

