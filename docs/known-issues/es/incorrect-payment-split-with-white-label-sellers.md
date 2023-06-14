---
title: Split de pago incorrecto con sellers white label
id: 4ONWSOeG3mmSKyawq8SYCQ
status: PUBLISHED
createdAt: 2018-07-24T18:27:44.066Z
updatedAt: 2022-12-22T15:08:03.011Z
publishedAt: 2022-12-22T15:08:03.011Z
firstPublishedAt: 2018-07-24T18:33:19.288Z
contentType: knownIssue
productTeam: Shopping
author: authors_41
tag: Checkout,Order Management,Payments
slug: split-de-pago-incorrecto-con-sellers-white-label
kiStatus: Backlog
internalReference: 
---

## Sumario

En un escenario de cierre de compra en el marketplace, un pedido se queda sin pago.

Después del análisis, se comprueba que este pedido está contenido en el `orderGroup` (propiedad del pedido que agrupa la información de los pedidos de los sellers) con otros tres pedidos. La suma de las transacciones es correcta. Esto significa que el cliente pagó el valor correcto.

El problema se produce en la fractura de pago en pedidos con sellers white label. En escenarios donde el `orderGroup` tiene un pedido del marketplace principal, otro pedido de un seller white label A y otro de un seller white label B, uno de los pedidos de sellers se queda sin transacción.

## Comportamiento esperado

Debido al split, deberían haber sido creadas cuatro transacciones:
1. Transacción con el valor total.
2. Transacción con el valor del artículo comprado del marketplace.
3. Transacción con el valor del artículo comprado del Seller A.
4. Transacción con el valor del artículo comprado del Seller B.

## Comportamiento actual

Se crean tres transacciones:
1. Transacción con el valor total.
2. Transacción con el valor del artículo comprado del marketplace.
3. Transacción con el valor del artículo comprado del Seller B.

El pedido del Seller A se queda con el status de `NO-PAYMENT`. Sin embargo, la suma de transacciones es igual al valor de la transacción completa. Lo que ocurre es que la transacción relacionada al Seller A queda distribuida entre las otras tres transacciones que se crearon.

## Simulación

Hacer una compra, con quatro artículos, en que uno viene del seller 1, otro del seller B y otro del seller C. Los artículos de los sellers 1 y C deben ser pagados en el merchant principal (1), el de A en el merchant A y el de B en el merchant B.

## Workaround

No hay workaround actualmente para este problema.

