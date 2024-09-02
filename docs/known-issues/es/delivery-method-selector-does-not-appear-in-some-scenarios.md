---
title: 'El selector de método de entrega no aparece en algunos escenarios'
id: 3TmHGPquZnxXZnnnNrofSi
status: PUBLISHED
createdAt: 2022-07-22T14:03:10.696Z
updatedAt: 2022-11-25T21:49:57.025Z
publishedAt: 2022-11-25T21:49:57.025Z
firstPublishedAt: 2022-07-22T14:03:11.255Z
contentType: knownIssue
productTeam: Checkout
author: 2mXZkbi0oi061KicTExNjo
tag: Checkout
slug: el-selector-de-metodo-de-entrega-no-aparece-en-algunos-escenarios
locale: es
kiStatus: Fixed
internalReference: 293784
---

## Sumario

<div class="alert alert-info">
  <p>Este problema conocido ha sido traducido automáticamente del inglés.</p>
</div>


Las tiendas que tienen opciones de entrega programada pueden tener un mal funcionamiento con respecto a la selección del método de entrega. Esto puede ocurrir con o sin el uso de Lean Shipping.
En general, después de desmarcar la opción "programar todo" (que naturalmente está marcada) no se muestra ninguna otra opción de SLA.



## Simulación


**Para las tiendas que no utilizan Lean Shipping:**

- crear un carrito donde haya artículos con el SLA de entrega programada
- En el pago, en el paso de envío, rellene todos los datos necesarios - Tenga en cuenta que después del "cálculo" de la entrega la opción "programar todo" estará marcada, sin embargo, mostrará las opciones no programadas (el botón debe estar desmarcado)
- desmarque y marque "programar todo" para ver las opciones de programación
- elija una opción de programación (con fecha y ventana de entrega)
- elimine la opción "programar todo" para volver a la opción no programada - no se mostrarán formularios de entrega

**Para las tiendas que utilizan Lean Shipping:**

- cree un carro donde haya artículos con el SLA de entrega programada
- En la caja, en el paso de envío, rellene todos los datos necesarios - Tenga en cuenta que después del "cálculo" de la entrega la opción "programar todo" estará marcada
- elija una opción de programación (con fecha y ventana de entrega)
- elimine la opción "programar todo" para volver a la opción no programada - no se mostrará ningún formulario de entrega



## Workaround


No hay ninguna solución conocida.

