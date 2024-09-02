---
title: 'el modo redondeo techo/suelo no funciona correctamente entre los elementos con multiplicador unitario distinto de 1'
id: 5KzOM5kEp8QpkBTX7hdil1
status: PUBLISHED
createdAt: 2024-01-18T17:53:08.668Z
updatedAt: 2024-01-18T17:53:09.229Z
publishedAt: 2024-01-18T17:53:09.229Z
firstPublishedAt: 2024-01-18T17:53:09.229Z
contentType: knownIssue
productTeam: Pricing & Promotions
author: 2mXZkbi0oi061KicTExNjo
tag: Pricing & Promotions
slug: el-modo-redondeo-techosuelo-no-funciona-correctamente-entre-los-elementos-con-multiplicador-unitario-distinto-de-1
locale: es
kiStatus: Backlog
internalReference: 968349
---

## Sumario

<div class="alert alert-info">
  <p>Este problema conocido ha sido traducido automáticamente del inglés.</p>
</div>



Es posible establecer, a través de una tarea para el equipo de producto, cambiar cómo se redondea el valor del descuento en el carrito.
En un escenario en el que la cuenta esté utilizando un modo de redondeo de techo o suelo, este redondeo no funcionará correctamente con artículos con unitmultiplier distinto de 1.

Esto se debe a que el unitMultiplier de este artículo es 100.0. Cuando RnB redondea el valor del descuento para la caja, redondea el precio unitario. Así que toma el valor de una unidad pequeña y lo redondea. Luego toma todo el descuento, lo divide por la cantidad multiplicada por el unitMultiplier y lo redondea a dos decimales.
Como RnB sólo tiene en cuenta dos decimales, redondea a 0,01 ó 0,02.


##

## Simulación



Ejemplo:
Descuento total: -3.96
Descuento unitario = -3,96 / (2*100) = -0,0198

Entonces, ¿qué artículo se llevará el 0,0198% del descuento, en lugar del 3,96%?



## Workaround



Una solución válida sería volver a no roundingMode, por lo que el problema dejará de ocurrir.





