---
title: ew UI no sugiere el artículo correcto a devolver una vez que el pedido tiene un cambio
id: 7hjZaUZ1GNiGjMnSKe0pZu
status: PUBLISHED
createdAt: 2023-01-18T17:05:53.889Z
updatedAt: 2023-01-18T17:05:54.590Z
publishedAt: 2023-01-18T17:05:54.590Z
firstPublishedAt: 2023-01-18T17:05:54.590Z
contentType: knownIssue
productTeam: Order Management
author: 2mXZkbi0oi061KicTExNjo
tag: Order Management
slug: ew-ui-no-sugiere-el-articulo-correcto-a-devolver-una-vez-que-el-pedido-tiene-un-cambio
kiStatus: Backlog
internalReference: 735854
---

## Sumario

<div class="alert alert-info">
  <p>Este problema conocido ha sido traducido automáticamente del inglés.</p>
</div>


La nueva UI no sugiere el artículo correcto a devolver.
La nueva UI sugiere el artículo no facturado ya como salida o puede sugerir el artículo eliminado de los artículos originales. Ocurre cuando el pedido tiene un cambio incluso de valor. El "itemsReturnable" no es correcto en "api/orders/..invoices/summary".


##

## Simulación


Cree una orden con dos o mas items ejecute un cambio removiendo el itemindex0 y pruebe el retorno en la nueva UI. El itemindex0 será una opción a devolver.



## Workaround


Por ahora no hay solución.

