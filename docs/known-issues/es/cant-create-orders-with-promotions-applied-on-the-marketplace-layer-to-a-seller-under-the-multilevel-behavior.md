---
title: 'No se pueden crear pedidos con promociones aplicadas en la capa del mercado a un vendedor bajo el comportamiento multinivel'
id: 8X5ut0NZnHJJbsrZqRxps
status: PUBLISHED
createdAt: 2021-12-17T17:58:11.823Z
updatedAt: 2022-11-25T21:50:35.525Z
publishedAt: 2022-11-25T21:50:35.525Z
firstPublishedAt: 2021-12-17T18:12:45.235Z
contentType: knownIssue
productTeam: Checkout
author: 2mXZkbi0oi061KicTExNjo
tag: Checkout
slug: no-se-pueden-crear-pedidos-con-promociones-aplicadas-en-la-capa-del-mercado-a-un-vendedor-bajo-el-comportamiento-multinivel
locale: es
kiStatus: Fixed
internalReference: 446938
---

## Sumario

<div class="alert alert-info">
  <p>Este problema conocido ha sido traducido automáticamente del inglés.</p>
</div>


No es posible finalizar las compras cuando el marketplace está aplicando promociones a los artículos de los vendedores que están bajo comportamiento multinivel. El cliente verá un mensaje de error genérico.

Estos vendedores se definen por tener su "fulfillmentEndpoint" como "/api/checkout". Hacen uso de este flujo para reenviar el pedido a una tercera capa, que es otro vendedor (whitelabel).

Afecta al flujo de compra del carrito/pedido y también a la creación del pedido a través de la API placeOrder.



## Simulación


Para simular este escenario, es necesario
- crear un carrito utilizando alguna SKU que tenga una promoción aplicada.
- asegurarse de que el mercado está bajo alguna cuenta recursiva.

Este pedido fallará como se ha informado.



## Workaround


N/A

