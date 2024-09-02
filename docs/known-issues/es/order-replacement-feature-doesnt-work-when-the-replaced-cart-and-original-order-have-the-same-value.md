---
title: 'La función de sustitución de pedidos no funciona cuando el carro sustituido y el pedido original tienen el mismo valor.'
id: 7eHiC34Pgsr1XcfIVHl7Sc
status: PUBLISHED
createdAt: 2023-07-21T14:49:31.057Z
updatedAt: 2023-12-18T20:17:32.757Z
publishedAt: 2023-12-18T20:17:32.757Z
firstPublishedAt: 2023-07-21T14:49:31.682Z
contentType: knownIssue
productTeam: Checkout
author: 2mXZkbi0oi061KicTExNjo
tag: Checkout
slug: la-funcion-de-sustitucion-de-pedidos-no-funciona-cuando-el-carro-sustituido-y-el-pedido-original-tienen-el-mismo-valor
locale: es
kiStatus: Fixed
internalReference: 866622
---

## Sumario

<div class="alert alert-info">
  <p>Este problema conocido ha sido traducido automáticamente del inglés.</p>
</div>


La característica de reemplazo de pedidos no funciona cuando el carrito reemplazado tiene el mismo valor que el pedido original, y el sistema de pago es "Reutilizar Pago".


##

## Simulación



- Active la función de sustitución de pedidos;
- Complete un pedido y cambie algo, por ejemplo, de talla pequeña a grande;
- Asegúrese de que el carrito reemplazado tiene el mismo valor que el pedido original;
- En el paso de pago, seleccione "Reutilizar pago".



## Workaround


Seleccione un método de pago distinto de "Reutilizar pago". La transacción anterior será cancelada y reembolsada; se creará una nueva.



