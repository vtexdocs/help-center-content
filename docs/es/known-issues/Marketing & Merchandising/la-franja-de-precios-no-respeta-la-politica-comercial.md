---
title: 'La franja de precios no respeta la política comercial'
id: 3OsmwHOZyM0AQWA8CuK0aC
status: PUBLISHED
createdAt: 2017-10-17T17:50:40.970Z
updatedAt: 2022-12-22T20:46:23.778Z
publishedAt: 2022-12-22T20:46:23.778Z
firstPublishedAt: 2017-10-17T18:03:23.731Z
contentType: knownIssue
productTeam: Marketing & Merchandising
author: 2mXZkbi0oi061KicTExNjo
tag: Portal (CMS)
slugEN: price-range-disregards-sales-policy
locale: es
kiStatus: Backlog
internalReference: 
---

## Sumario

El filtro por rango de precio, que se configura en las opciones de categoría, considera el precio registrado en todas las políticas comerciales de la tienda, es decir, siempre va a imprimir el considerando el valor más bajo registrado entre todas las políticas comerciales, posibilitando la exhibición de un producto que no está en el rango de precios de la política comercial específica.

## Simulación

1. Registre precios diferentes en políticas comerciales diferentes para el mismo SKU;
2. Registre franjas de precio en la categoría donde los precios registrados queden en franjas diferentes;
3. En la política comercial con el precio del SKU más caro, haga el filtro por rango de precio;
4. Véase que el valor del SKU considerado es el de la otra política comercial, pues considera el valor más barato entre todas las políticas.

## Workaround

No hay solución de contorno para el escenario.

