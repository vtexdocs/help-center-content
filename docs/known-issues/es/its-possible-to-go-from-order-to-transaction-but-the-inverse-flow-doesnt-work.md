---
title: 'Es posible pasar de la orden a la transacción pero el flujo inverso no funciona'
id: 6du2dTCMNwdGDua01BEKAU
status: PUBLISHED
createdAt: 2022-03-15T20:54:12.442Z
updatedAt: 2022-11-25T22:08:38.708Z
publishedAt: 2022-11-25T22:08:38.708Z
firstPublishedAt: 2022-03-15T20:54:12.907Z
contentType: knownIssue
productTeam: Payments
author: 2mXZkbi0oi061KicTExNjo
tag: Payments
slug: es-posible-pasar-de-la-orden-a-la-transaccion-pero-el-flujo-inverso-no-funciona
locale: es
kiStatus: Backlog
internalReference: 393483
---

## Sumario

<div class="alert alert-info">
  <p>Este problema conocido ha sido traducido automáticamente del inglés.</p>
</div>


La `secuencia`, número que puede verse junto al número de pedido y también en la transacción, es la responsable de vincular la transacción al pedido y también la inversa.

 Suelen ser los mismos, **pero sólo cuando es posible**. En los casos en los que un mismo orderGroup tiene un número de órdenes y transacciones divergentes, estos números no van a coincidir y podemos encontrarnos con casos así: podemos ir a por la transacción desde la orden pero no podemos hacer el flujo inverso.



## Simulación


N/A



## Workaround



N/A

