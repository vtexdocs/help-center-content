---
title: "Incoherencia en la selección de las condiciones comerciales"
id: 3yJE7umf52WH6yE6iLnn0P
status: PUBLISHED
createdAt: 2025-04-11T20:38:24.899Z
updatedAt: 2025-04-11T20:38:25.889Z
publishedAt: 2025-04-11T20:38:25.889Z
firstPublishedAt: 2025-04-11T20:38:25.889Z
contentType: knownIssue
productTeam: Payments
author: 2mXZkbi0oi061KicTExNjo
tag: Payments
slugEN: incoherencia-en-la-seleccion-de-las-condiciones-comerciales
locale: es
kiStatus: Backlog
internalReference: 1210072
---

## Sumario

<div class="alert alert-info">
  <p>Este problema conocido ha sido traducido automáticamente del inglés.</p>
</div>


Cuando la diferencia porcentual **del valor SKU en la condición es inferior al 1%,** la pasarela puede tener algunas inconsistencias eligiendo la condición comercial.

Ej:

Los valores SKU pertenecientes a la condición B deben ser iguales o superiores al 99% en el carrito:

Considerando los siguientes SKUs Valor:

4.400(Condición A)/(4.400(Condición A) *428.397(Condición B)) = 1,01% > 1%

La diferencia porcentual es inferior al 1% (0,01%) - La condición elegida podría ser B


##

## Simulación


N/A


##

## Workaround


N/A





