---
title: 'Condiciones de pago establecidas para procesar transacciones a plazos distintas de 1x están procesando transacciones como prepagadas en su totalidad'
id: 2z9cDiCAovzKVFZO7RSqOD
status: PUBLISHED
createdAt: 2024-05-09T18:47:33.319Z
updatedAt: 2024-05-09T18:47:34.221Z
publishedAt: 2024-05-09T18:47:34.221Z
firstPublishedAt: 2024-05-09T18:47:34.221Z
contentType: knownIssue
productTeam: Payments
author: 2mXZkbi0oi061KicTExNjo
tag: Payments
slug: condiciones-de-pago-establecidas-para-procesar-transacciones-a-plazos-distintas-de-1x-estan-procesando-transacciones-como-prepagadas-en-su-totalidad
locale: es
kiStatus: Backlog
internalReference: 1030652
---

## Sumario

<div class="alert alert-info">
  <p>Este problema conocido ha sido traducido automáticamente del inglés.</p>
</div>


Las condiciones de pago configuradas para procesar transacciones en un número de plazos distinto de 1x están pudiendo procesar pagos en 1x. El problema solo se produce en los pagos en los que el usuario ha optado por el prepago total.


##

## Simulación



1. Establezca 3 condiciones de pago para tarjetas de crédito de cualquier marca: Condición de Pago A - con cuota en 1x, Condición de Pago B - con cuota en 2x, y Condición de Pago C - con cuota en 3x.
2. Vaya a la página de Pago añadiendo cualquier artículo al carrito y proceda a la pantalla de pago. Elija pagar con tarjeta de crédito en 1x y complete la compra.
3. Vaya al administrador y abra la transacción recién creada, haga clic en el botón "+ Información", y observe que el campo `AvailableRules` contendrá una lista con todos los IDs de Condiciones de Pago, Condición de Pago A, Condición de Pago B, y Condición de Pago C, como capaces de procesar la transacción en cuestión.



## Workaround


s posible establecer la Condición de Pago 1x como predeterminada, de forma que cuando haya un empate entre todas las Condiciones de Pago, la pasarela dará prioridad a la regla predeterminada.





