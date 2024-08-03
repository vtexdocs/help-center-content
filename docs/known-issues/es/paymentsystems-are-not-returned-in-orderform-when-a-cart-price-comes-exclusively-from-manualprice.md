---
title: 'PaymentSystems no se devuelven en orderForm cuando el precio de un carrito proviene exclusivamente de manualPrice'
id: 3KPNFtPgEwshbv6WiGrqOF
status: PUBLISHED
createdAt: 2024-04-30T20:06:52.774Z
updatedAt: 2024-04-30T20:06:53.756Z
publishedAt: 2024-04-30T20:06:53.756Z
firstPublishedAt: 2024-04-30T20:06:53.756Z
contentType: knownIssue
productTeam: Checkout
author: 2mXZkbi0oi061KicTExNjo
tag: Checkout
slug: paymentsystems-no-se-devuelven-en-orderform-cuando-el-precio-de-un-carrito-proviene-exclusivamente-de-manualprice
locale: es
kiStatus: Backlog
internalReference: 1025321
---

## Sumario

<div class="alert alert-info">
  <p>Este problema conocido ha sido traducido automáticamente del inglés.</p>
</div>


Cuando el valor total de un carrito proviene exclusivamente de un precio manual, el `precio` de los artículos y el `precio` de la entrega son `0`, no se ofrecen otros sistemas de pago que la Tarjeta Regalo (si está activa).


##

## Simulación



- Añadir un artículo con precio `0` y seleccionar una opción de entrega con precio `0`.
- Añada un importe de "precio manual" al artículo.
- Procede al paso de pago en la caja y no se devuelve ningún método de pago como disponible



## Workaround


No hay ninguna solución conocida aparte de añadir una cantidad al precio del artículo.





