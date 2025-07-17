---
title: "Bandera de entrega en Mis Pedidos. Debido a un error al rellenar la factura."
id: 14iGvVibb5ac4FNvEsmCAi
status: PUBLISHED
createdAt: 2022-03-21T19:58:25.489Z
updatedAt: 2022-11-25T22:02:01.896Z
publishedAt: 2022-11-25T22:02:01.896Z
firstPublishedAt: 2022-06-30T17:22:56.690Z
contentType: knownIssue
productTeam: Order Management
author: 2mXZkbi0oi061KicTExNjo
tag: Order Management
slugEN: bandera-de-entrega-en-mis-pedidos-debido-a-un-error-al-rellenar-la-factura
locale: es
kiStatus: Backlog
internalReference: 547053
---

## Sumario

<div class="alert alert-info">
  <p>Este problema conocido ha sido traducido automáticamente del inglés.</p>
</div>



Si la factura del pedido no tiene la información correcta sobre la cantidad de artículos y los Ids. SKU del pedido. No será posible insertar la bandera "`Delivered`" en 'My Orders'.




## Simulación



Para simular este comportamiento, es posible realizar un pedido con un solo artículo.

Al facturar el pedido, inserte el ID de otro artículo en la factura y/o inserte la cantidad de más Artículos.

Después de facturar el pedido, haga la "actualización de seguimiento" e introduzca la información de "`isDelivered: true`".

Tendremos la información del pedido "entregado" en la UI, sin embargo, en "Mis Pedidos" seguirá con la información de "Envío de Pedido".




## Workaround



Tenga cuidado de no insertar más artículos en la factura y/o artículos con diferentes ID de pedido. Porque en estos casos el pedido no tendrá la bandera de "entregado" en Mis Pedidos.

