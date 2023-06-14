---
title: 'La orden de cambio a través de la UI no tiene en cuenta el cálculo de las promociones Toma 3 paga 2.'
id: 3rvsDyCggYirvH7WT9rBVZ
status: PUBLISHED
createdAt: 2022-03-15T20:25:17.217Z
updatedAt: 2022-11-25T22:03:48.329Z
publishedAt: 2022-11-25T22:03:48.329Z
firstPublishedAt: 2022-03-15T20:25:17.513Z
contentType: knownIssue
productTeam: Order Management
author: 2mXZkbi0oi061KicTExNjo
tag: Order Management
slug: la-orden-de-cambio-a-traves-de-la-ui-no-tiene-en-cuenta-el-calculo-de-las-promociones-toma-3-paga-2
locale: es
kiStatus: Backlog
internalReference: 472882
---

## Sumario

<div class="alert alert-info">
  <p>Este problema conocido ha sido traducido automáticamente del inglés.</p>
</div>


En los pedidos con la promoción "Más por menos", es posible modificar el pedido y eliminar uno o varios artículos en la interfaz de usuario, pero el descuento sigue aplicándose.



## Simulación


- Cree una promoción de Más por Menos
- Realizar una compra con esa promoción
- Hacer un cambio en el pedido y eliminar uno o más artículos
- Ver que el descuento se sigue aplicando



## Workaround


En este caso tenemos el Workaround que es hacer el cambio a través de la API "change on order". Para cambiar artículos y valores.

