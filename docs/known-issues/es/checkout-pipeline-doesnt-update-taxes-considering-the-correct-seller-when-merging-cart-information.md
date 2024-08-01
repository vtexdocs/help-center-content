---
title: 'El proceso de pago no actualiza los impuestos teniendo en cuenta el vendedor correcto al combinar la información del carro.'
id: 4HDGps2Ez5kWKuW1UNX1JQ
status: PUBLISHED
createdAt: 2024-07-03T20:21:23.533Z
updatedAt: 2024-07-03T20:21:24.413Z
publishedAt: 2024-07-03T20:21:24.413Z
firstPublishedAt: 2024-07-03T20:21:24.413Z
contentType: knownIssue
productTeam: Checkout
author: 2mXZkbi0oi061KicTExNjo
tag: Checkout
slug: el-proceso-de-pago-no-actualiza-los-impuestos-teniendo-en-cuenta-el-vendedor-correcto-al-combinar-la-informacion-del-carro
locale: es
kiStatus: Backlog
internalReference: 759842
---

## Sumario

<div class="alert alert-info">
  <p>Este problema conocido ha sido traducido automáticamente del inglés.</p>
</div>


Cuando hay 2 vendedores en el método "SellerElection", uno de ellos es seleccionado como el que tiene el precio más barato para la entrega, y el otro el precio más barato para la recogida en el punto, la fusión de la información del carrito no actualiza los impuestos al seleccionar la recogida en el punto, causando un error al finalizar la compra.



## Simulación



- Tener configurados dos vendedores: 1 es el más barato en entrega y el otro en recogida en destino
- Configure los impuestos _sólo_ para el vendedor que realizará la recogida en el punto de entrega o diferentes impuestos entre ellos
- Realice una Simulación de Pago y verá que no habrá impuestos en "priceTags" y no finalizará la compra



## Workaround


N/A



