---
title: 'El pago y la división de transacciones no funcionan en el mismo orden para el inventario omnicanal multinivel.'
id: 3rFyqzEnSwx2czwdlgDovU
status: PUBLISHED
createdAt: 2023-03-23T19:03:22.498Z
updatedAt: 2023-03-27T12:27:57.714Z
publishedAt: 2023-03-27T12:27:57.714Z
firstPublishedAt: 2023-03-23T19:03:23.526Z
contentType: knownIssue
productTeam: Checkout
author: 2mXZkbi0oi061KicTExNjo
tag: Checkout
slug: el-pago-y-la-division-de-transacciones-no-funcionan-en-el-mismo-orden-para-el-inventario-omnicanal-multinivel
locale: es
kiStatus: Backlog
internalReference: 777201
---

## Sumario

<div class="alert alert-info">
  <p>Este problema conocido ha sido traducido automáticamente del inglés.</p>
</div>


En un marketplace con vendedores con relación multinivel (MOI), cuando se monta un carrito con al menos un vendedor que utiliza división de transacciones y otros que utilizan división de pagos, las transacciones con división de pagos se duplicarán repitiendo los artículos de distintos vendedores. Este escenario no permitirá realizar el pedido, y aparecerá el mensaje "Lo sentimos. No se han podido procesar los pagos solicitados".


##

## Simulación



- Configurar un vendedor con punto final de pago / utilizar relación multinivel (MOI);
- Configurar un vendedor con punto final de cumplimiento y habilitar la división de transacciones;
- Montar un carro con esos vendedores;
- Realizar el pedido.



## Workaround


Utilice la división de pagos para todos los vendedores



