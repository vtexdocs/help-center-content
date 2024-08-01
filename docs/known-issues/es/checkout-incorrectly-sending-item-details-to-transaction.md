---
title: 'El pago envía incorrectamente los detalles del artículo a la transacción'
id: YxjZNKuIxkKQioS7lkmu8
status: PUBLISHED
createdAt: 2022-03-04T15:08:55.326Z
updatedAt: 2024-02-16T20:28:39.301Z
publishedAt: 2024-02-16T20:28:39.301Z
firstPublishedAt: 2022-03-04T15:08:55.710Z
contentType: knownIssue
productTeam: Checkout
author: 2mXZkbi0oi061KicTExNjo
tag: Checkout
slug: el-pago-envia-incorrectamente-los-detalles-del-articulo-a-la-transaccion
locale: es
kiStatus: No Fix
internalReference: 535859
---

## Sumario

<div class="alert alert-info">
  <p>Este problema conocido ha sido traducido automáticamente del inglés.</p>
</div>



## Simulación


El usuario realiza un pedido que se divide en tres vendedores, siendo el Vendedor 1 (mercado), el Vendedor A y el Vendedor B, ambos WL;


El vendedor B no tiene medios de pago propios y utiliza el pago del vendedor 1 (marketplace), mientras que el vendedor A tiene sus propios medios de pago;

El pago y la transacción se registran correctamente con los comerciantes correspondientes, en este caso el Vendedor 1 y el Vendedor A;

Sin embargo, al ver el detalle de la transacción en el Vendedor 1, se podrá ver el importe total del pago realizado al Vendedor 1 y B, y el detalle del artículo vendido por el Vendedor 1 que es el vendedor al que está vinculada la transacción; el artículo del Vendedor B no se considerará en el detalle de la transacción;




## Workaround


N/A


##

