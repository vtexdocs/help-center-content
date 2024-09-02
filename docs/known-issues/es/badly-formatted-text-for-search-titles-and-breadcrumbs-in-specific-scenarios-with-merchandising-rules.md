---
title: 'Texto mal formateado para títulos de búsqueda y migas de pan en escenarios específicos con reglas de comercialización.'
id: 3dQskVnI1sbF6jgsopjUUt
status: PUBLISHED
createdAt: 2024-03-13T20:52:33.781Z
updatedAt: 2024-03-13T20:52:34.698Z
publishedAt: 2024-03-13T20:52:34.698Z
firstPublishedAt: 2024-03-13T20:52:34.698Z
contentType: knownIssue
productTeam: Intelligent Search
author: 2mXZkbi0oi061KicTExNjo
tag: Intelligent Search
slug: texto-mal-formateado-para-titulos-de-busqueda-y-migas-de-pan-en-escenarios-especificos-con-reglas-de-comercializacion
locale: es
kiStatus: Backlog
internalReference: 999476
---

## Sumario

<div class="alert alert-info">
  <p>Este problema conocido ha sido traducido automáticamente del inglés.</p>
</div>


Algunas páginas de resultados de búsqueda ocultan los filtros aplicados - puesto que ya forman parte de la propia página, por lo que se establecen como "initialAttributes" - para centrarse en los filtros adicionales que se pueden aplicar. En estos escenarios, los valores para el título de la página y las migas de pan están básicamente definidos por el primer producto de la página.

Las reglas de merchandising que colocan productos de diferentes contextos en las primeras posiciones de una página afectan a esta cadena. Cuando los "initialAttributes" de la página no coinciden con ninguno de los atributos del primer producto, como alternativa, estos textos se definen por el slug - un texto simplificado sin mayúsculas, diacríticos o cualquier otro carácter especial.

Tenga en cuenta que este tipo de regla de merchandising puede ser una mala práctica.


##

## Simulación



- Considere una categoría con el árbol como "Alimentos > Frutas > Manzanas y Peras", que se traduce como "Maçãs e Peras" en portugués (por lo que tenemos diacríticos/acentos para un mejor ejemplo);
- Añadir un producto de un árbol de categorías diferente a través de una Regla de Merchandising, como una cortadora de la categoría "Cocina > Accesorios > Cortadoras" a la categoría "Alimentos > Frutas";
- Como el primer producto de la categoría "Manzanas y Peras" será esta cortadora, el título de la página y las migas de pan se presentarán como "Macas E Peras".


##

## Workaround


N/A


