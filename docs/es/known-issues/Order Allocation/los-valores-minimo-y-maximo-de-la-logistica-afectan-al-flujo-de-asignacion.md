---
title: "Los valores mínimo y máximo de la logística afectan al flujo de asignación"
id: 2NKMEf9m4DJd4UIQaNZhJ6
status: PUBLISHED
createdAt: 2025-05-16T14:37:25.555Z
updatedAt: 2025-05-16T14:37:58.458Z
publishedAt: 2025-05-16T14:37:58.458Z
firstPublishedAt: 2025-05-16T14:37:26.116Z
contentType: knownIssue
productTeam: Order Allocation
author: 2mXZkbi0oi061KicTExNjo
tag: Order Allocation
slugEN: los-valores-minimo-y-maximo-de-la-logistica-afectan-al-flujo-de-asignacion
locale: es
kiStatus: Backlog
internalReference: 1227934
---

## Sumario

<div class="alert alert-info">
  <p>Este problema conocido ha sido traducido automáticamente del inglés.</p>
</div>


La asignación de un artículo puede no ocurrir como se espera cuando el carro tiene artículos de diferentes vendedores, y uno de estos vendedores tiene reglas de envío basadas en el rango de valores;
En los escenarios de carros con más de una SKU y una de estas SKU está disponible en un único vendedor, y este vendedor tiene reglas de transportista condicionadas al valor total del pedido, la heurística del sistema puede descartar opciones de SLA válidas durante el proceso de simulación, dando como resultado el mensaje "`unavailableItemFulfillment`" para el artículo en la caja; en otras palabras, el sistema es incapaz de asignar correctamente todos los artículos del carro.



## Simulación


Para simular esto, configure dos SKU, cada una disponible exclusivamente en un vendedor diferente:

Para uno de los vendedores, cree dos opciones de envío (SLA) condicionadas por el valor del carrito:

Ejemplo:

"Envío A ": válido de 0 a 100
"Envío B": válido de 100 a 999.000,00.

Ahora simule un carrito con unidades de la SKU entregadas por cada uno de los vendedores para que el valor total del carrito sea superior al valor soportado por la opción Envío A.

Al llegar a la fase de pago, el sistema devuelve el mensaje "`unavailableItemFulfillment`" para uno de los artículos.

El algoritmo de asignación ejecuta dos simulaciones: una considerando todo el carro (multi-artículo) y una simulación individual por artículo, y debido a la lógica de descarte basada en la respuesta de todo el carro, se elimina el SLA que sería viable para la SKU 01 en la simulación artículo por artículo.

En el escenario descrito, uno de los ANS disponibles ("Envío B") para la SKU 01 se descarta porque no está presente en la simulación considerando el carro completo, lo que lleva a la imposibilidad de asignar los artículos.



## Workaround


Actualmente, no existe una solución nativa para evitar completamente el problema.






