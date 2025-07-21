---
title: "Muestreo para filtros de búsqueda inesperadamente agresivo omitiendo valores de filtro"
id: 3r9WQkX3ptt2iWjC0xKTdM
status: PUBLISHED
createdAt: 2025-04-01T01:30:33.832Z
updatedAt: 2025-04-01T01:30:34.481Z
publishedAt: 2025-04-01T01:30:34.481Z
firstPublishedAt: 2025-04-01T01:30:34.481Z
contentType: knownIssue
productTeam: Intelligent Search
author: 2mXZkbi0oi061KicTExNjo
tag: Intelligent Search
slugEN: muestreo-para-filtros-de-busqueda-inesperadamente-agresivo-omitiendo-valores-de-filtro
locale: es
kiStatus: Backlog
internalReference: 1202555
---

## Sumario

<div class="alert alert-info">
  <p>Este problema conocido ha sido traducido automáticamente del inglés.</p>
</div>


Cuando una búsqueda de productos encuentra más de 30.000 resultados, por razones de eficiencia, se define que los filtros de atributos se computen sobre sólo los primeros 30.000 productos más relevantes (siguiendo la configuración de relevancia de la tienda) dentro de la búsqueda específica.

Debido a un problema, en realidad los filtros se están computando sobre productos que no son de la búsqueda específica, reduciendo el universo de filtros que deberían ofrecerse porque son de productos no relacionados.


##

## Simulación


Para simular el escenario, considere algo así como una tienda con 500k productos y una categoría específica con 35k productos.

Al navegar por esta categoría, dado que se espera que el muestreo utilice los 30k productos más relevantes, los filtros deberían acercarse lo suficiente a todos los valores que la categoría puede ofrecer. Sin embargo, con este problema, puede ofrecer menos filtros de los esperados porque el muestreo se llenó con productos de otras categorías cuyos filtros no se tendrán en cuenta.



## Workaround


N/A

