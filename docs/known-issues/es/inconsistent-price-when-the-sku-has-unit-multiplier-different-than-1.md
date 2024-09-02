---
title: 'Precio incoherente cuando la SKU tiene un multiplicador unitario distinto de 1'
id: NVtFiuWgptqa2gBEVmpOC
status: PUBLISHED
createdAt: 2022-09-05T13:05:50.789Z
updatedAt: 2024-02-02T16:50:00.987Z
publishedAt: 2024-02-02T16:50:00.987Z
firstPublishedAt: 2022-09-05T13:05:51.613Z
contentType: knownIssue
productTeam: Store Framework
author: 2mXZkbi0oi061KicTExNjo
tag: Store Framework
slug: precio-incoherente-cuando-la-sku-tiene-un-multiplicador-unitario-distinto-de-1
locale: es
kiStatus: Backlog
internalReference: 651102
---

## Sumario

<div class="alert alert-info">
  <p>Este problema conocido ha sido traducido automáticamente del inglés.</p>
</div>


Cuando algún SKU contiene un multiplicador de unidades diferente de 1 (puede ser int como 10 o 100, o float como 0.8, por ejemplo), en algunas situaciones, el precio devuelto en store-graphql puede tener inconsistencias basadas en la división del precio devuelto desde la API de simulación:

calculatedSellingPrice / (unitMultiplier * 100)

Puede aplicarse a todos los valores de precio que utilicen el multiplicador unitario como en los plazos (que no consideran el valor del multiplicador unitario y la llamada de simulación envía el valor con el multiplicador unitario considerado), precio PDP, precio PLP, o carrito.


##

## Simulación


Comprobar la simulación llamada para un producto con multiplicador unitario
Comprobar el precio del producto en una página de búsqueda o utilizando una consulta de búsqueda de productos desde search-graphql
Los precios pueden ser divergentes en céntimos


##

## Workaround


N/A





