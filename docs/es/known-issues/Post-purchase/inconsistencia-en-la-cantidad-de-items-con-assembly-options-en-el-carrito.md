---
title: 'Inconsistencia en la cantidad de ítems con Assembly options en el carrito'
id: ANQ597XM5mK85MhME920Y
status: PUBLISHED
createdAt: 2021-09-23T20:34:36.214Z
updatedAt: 2022-12-22T20:41:06.210Z
publishedAt: 2022-12-22T20:41:06.210Z
firstPublishedAt: 2021-09-23T20:44:17.391Z
contentType: knownIssue
productTeam: Post-purchase
author: 2mXZkbi0oi061KicTExNjo
tag: Checkout
slugEN: inconsistency-in-the-quantity-of-items-with-assembly-options-in-the-cart
locale: es
kiStatus: Backlog
internalReference: 
---

## Sumario

En los productos con personalización de Assembly options, un ítem principal tiene componentes, que se denominan ítems secundarios. Es el caso, por ejemplo, de un frigorífico (ítem principal) con garantía ampliada (ítem secundario). Hay una inconsistencia en la plataforma al añadir al carrito la cantidad total disponible en stock del ítem principal y la misma cantidad de uno de sus ítems secundarios. Considera que un cliente está comprando un producto que tiene personalización de Assembly options. Cuando añade al carrito la cantidad total disponible en stock del ítem principal y la misma cantidad de un ítem secundario asociado a él, la cantidad final del ítem secundario será diferente de la cantidad final del ítem principal. El carrito tendrá una unidad más del ítem secundario en comparación con el ítem principal.


## Simulación

1. Accede a la tienda;
2. Añade un producto que tiene un ítem secundario al carrito (selecciona la cantidad total disponible en _stock_);
3. Selecciona el ítem secundario del producto, en la misma cantidad;
4. Revisa los ítems en el carrito.

![KI assembly](https://raw.githubusercontent.com/vtexdocs/help-center-content/refs/heads/main/_1.png)

Observa que el carrito contiene una unidad más del ítem secundario en comparación con el ítem principal.


## Workaround

No hay ningún workaround para este escenario.


