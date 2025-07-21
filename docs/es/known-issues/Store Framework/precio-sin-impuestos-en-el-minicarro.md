---
title: "Precio sin impuestos en el minicarro"
id: 6hhGsovguA1HEqYiS81M7m
status: PUBLISHED
createdAt: 2025-05-28T20:19:33.068Z
updatedAt: 2025-05-28T20:19:33.930Z
publishedAt: 2025-05-28T20:19:33.930Z
firstPublishedAt: 2025-05-28T20:19:33.930Z
contentType: knownIssue
productTeam: Store Framework
author: 2mXZkbi0oi061KicTExNjo
tag: Store Framework
slugEN: precio-sin-impuestos-en-el-minicarro
locale: es
kiStatus: Backlog
internalReference: 1234933
---

## Sumario

<div class="alert alert-info">
  <p>Este problema conocido ha sido traducido automáticamente del inglés.</p>
</div>


Actualmente no es posible mostrar el precio del producto con impuestos dentro del contexto de la lista de minicart.


##

## Simulación



1. Añade al carrito un producto que tiene impuestos asociados.
2. Abre el minicarrito y observa los detalles del producto.
3. Observe que los impuestos adicionales no se muestran, aunque puedan estar presentes y calculados en el checkout.



## Workaround


Sólo es posible añadir el importe del impuesto en el campo totalizadores.

Esto se configura añadiendo la opción "Tax" a la prop `totalizersToShow` del bloque `checkout-summary.compact`:


      "checkout-summary.compact#minicart": {"children": ["summary-totalizers#minicart"], "props": {"totalizersToShow": ["Items", "Discounts", "Tax"] } }






