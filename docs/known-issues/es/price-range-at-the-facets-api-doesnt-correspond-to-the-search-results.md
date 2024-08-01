---
title: 'El rango de precios en la API de facetas no se corresponde con los resultados de búsqueda'
id: 2X9Z21u9kJh55uWu6o6sP3
status: PUBLISHED
createdAt: 2024-03-08T22:36:43.149Z
updatedAt: 2024-03-08T22:36:44.086Z
publishedAt: 2024-03-08T22:36:44.086Z
firstPublishedAt: 2024-03-08T22:36:44.086Z
contentType: knownIssue
productTeam: Intelligent Search
author: 2mXZkbi0oi061KicTExNjo
tag: Intelligent Search
slug: el-rango-de-precios-en-la-api-de-facetas-no-se-corresponde-con-los-resultados-de-busqueda
locale: es
kiStatus: Backlog
internalReference: 997121
---

## Sumario

<div class="alert alert-info">
  <p>Este problema conocido ha sido traducido automáticamente del inglés.</p>
</div>


Los rangos de precios de la API de facetas ("Obtener lista de las facetas posibles para una consulta dada") pueden variar entre devolver cubos de valores "desde" y "hasta" con precios redondeados y los precios mínimos y máximos entre los resultados de la búsqueda.

Mientras que los precios redondeados generan una mejor UX para presentar una lista de rangos de precios al comprador, no es deseable utilizarlos como un "deslizador" de precios.

Además, como los precios mínimos y máximos se aplican en un segundo momento, los rangos de precios como "cubos" en una búsqueda que ya aplica un filtro de precios se salen de los límites en relación con los precios especificados.


##

## Simulación


Utilizando la API, realice una petición con y sin un filtro de precios del tipo "/precio/100:500" y observe los rangos de precios devueltos (desde/hasta) en el objeto "valores" para la faceta con tipo "PRICERANGE".


##

## Workaround


N/A

