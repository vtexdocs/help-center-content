---
title: 'El pedido no se cancela completamente '
id: 5rEjHAKKVHQWbgkTpEBreV
status: PUBLISHED
createdAt: 2021-09-15T15:03:40.366Z
updatedAt: 2022-12-22T20:41:09.335Z
publishedAt: 2022-12-22T20:41:09.335Z
firstPublishedAt: 2021-09-15T15:12:26.748Z
contentType: knownIssue
productTeam: Post-purchase
author: 2mXZkbi0oi061KicTExNjo
tag: Checkout
slugEN: order-isnt-fully-canceled
locale: es
kiStatus: Backlog
internalReference: 
---

## Sumario

Cuando un [pedido está incompleto,](https://help.vtex.com/es/tutorial/understanding-incomplete-orders--tutorials_294)se espera que sea cancelado por la plataforma y no se inicie el flujo del pedido. En algunos casos, sin embargo, la cancelación falla y el pedido no tiene su flujo interrumpido.

Por lo tanto, es posible que el pedido aún esté disponible para el _[seller](https://help.vtex.com/es/tutorial/what-is-a-seller--5FkLvhZ3Few4CWWIuYOK2w)_, el marketplace o la tienda responsable de todo el proceso de venta. En este caso, se mantiene la reserva del ítem en el _stock_.

También puede ocurrir que la operación de pago no se cancele y el pago no se devuelva al cliente.


## Simulación

Debido a la inestabilidad, no es posible simular este escenario.


## Workaround

Debes cancelar el pedido manualmente. [Cancela el pedido mediante API](https://developers.vtex.com/vtex-rest-api/reference/orders#cancelorder).


