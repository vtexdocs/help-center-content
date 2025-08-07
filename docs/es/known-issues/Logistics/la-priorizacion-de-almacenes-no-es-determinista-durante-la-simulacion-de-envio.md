---
title: "La priorización de almacenes no es determinista durante la simulación de envío"
id: 6nl1LuyYD9NhQEaDyFmdZU
status: PUBLISHED
createdAt: 2025-07-30T14:51:46.357Z
updatedAt: 2025-07-30T14:51:47.055Z
publishedAt: 2025-07-30T14:51:47.055Z
firstPublishedAt: 2025-07-30T14:51:47.055Z
contentType: knownIssue
productTeam: Logistics
author: 2mXZkbi0oi061KicTExNjo
tag: Logistics
slugEN: la-priorizacion-de-almacenes-no-es-determinista-durante-la-simulacion-de-envio
locale: es
kiStatus: Backlog
internalReference: 1268196
---

## Sumario

<div class="alert alert-info">
  <p>Este problema conocido ha sido traducido automáticamente del inglés.</p>
</div>



Actualmente, la logística no siempre elige el almacén con las mejores condiciones, como el tiempo de procesamiento o el coste de envío más bajos, cuando se reparten cantidades de la misma SKU entre varios almacenes. En su lugar, el proceso de selección del almacén que abastecerá cada artículo se basa en el orden en que los almacenes aparecen en el sistema. Este orden procede del servicio de disponibilidad, que a su vez no está ordenado, lo que hace que la selección no sea determinista. Como resultado, el simulador puede seleccionar un almacén con mayor tiempo de procesamiento y tarifa extra, incluso cuando hay mejores opciones disponibles (por ejemplo, prefiriendo un almacén con 3 días de procesamiento y una tarifa extra de 5 dólares a uno con 2 días y una tarifa extra de 1 dólar).



## Simulación



Para reproducir el problema:

- Configure el inventario de forma que ningún almacén pueda satisfacer la cantidad total solicitada para una SKU específica (por ejemplo, necesita 3 unidades, pero cada almacén sólo tiene 1 ó 2 disponibles).
- Prepare dos o más almacenes aptos para cumplir con la cantidad faltante, pero con diferentes tiempos de procesamiento y gastos de envío.
- Realice una simulación de envío utilizando el administrador de logística de la plataforma para esta SKU/cantidad.
- Observe que el simulador puede seleccionar un almacén con peor (mayor) coste/tiempo, aunque exista una opción mejor.



## Workaround


No hay ninguna solución disponible.






