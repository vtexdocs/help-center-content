---
title: PlaceOrder generando valores de descuento y envío erróneos entre artículos que aparecen más de una vez.
id: 01ipdei4r6juYcXD3xFz4b
status: PUBLISHED
createdAt: 2023-01-12T19:13:16.232Z
updatedAt: 2023-02-13T20:27:56.279Z
publishedAt: 2023-02-13T20:27:56.279Z
firstPublishedAt: 2023-01-12T19:13:16.771Z
contentType: knownIssue
productTeam: Checkout
author: 2mXZkbi0oi061KicTExNjo
tag: Checkout
slug: placeorder-generando-valores-de-descuento-y-envio-erroneos-entre-articulos-que-aparecen-mas-de-una-vez
kiStatus: Backlog
internalReference: 732529
---

## Sumario

<div class="alert alert-info">
  <p>Este problema conocido ha sido traducido automáticamente del inglés.</p>
</div>


Cuando la solicitud de creación de pedido declara el mismo artículo más de una vez, requerido para declarar diferentes precios o valores de descuento entre las múltiples unidades del artículo, el servicio de checkout sumará todas las cantidades en un único artículo y aplicará sólo las condiciones del primer artículo en todos ellos. Generará un precio/descuento total erróneo e incluso el envío.

Un ejemplo rápido de este escenario es cuando se aplica una promoción "más por menos" en una solicitud de pedido externa, o incluso cuando esta condición se produce en el nivel de mercado para un escenario de inventario omnicanal multinivel (MOI).



## Simulación



- Acceder a una cuenta de marketplace que tiene vendedores habituales utilizando la relación multinivel (MOI)
- Añade un producto que tenga una promoción "más por menos" y realiza el pedido
- Comprueba el precio total (descuentos y gastos de envío) en el vendedor

Esta es sólo una forma más fácil de simular, pero también puedes utilizar la API de Realizar Pedido


##

## Workaround


N/A




