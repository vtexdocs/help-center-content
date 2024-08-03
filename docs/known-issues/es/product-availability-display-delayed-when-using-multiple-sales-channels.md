---
title: 'La visualización de la disponibilidad del producto se retrasa cuando se utilizan varios canales de venta'
id: 7JluVogO4pom0l57UobYIP
status: PUBLISHED
createdAt: 2023-12-07T16:18:59.300Z
updatedAt: 2023-12-07T16:19:00.098Z
publishedAt: 2023-12-07T16:19:00.098Z
firstPublishedAt: 2023-12-07T16:19:00.098Z
contentType: knownIssue
productTeam: Catalog
author: 2mXZkbi0oi061KicTExNjo
tag: Catalog
slug: la-visualizacion-de-la-disponibilidad-del-producto-se-retrasa-cuando-se-utilizan-varios-canales-de-venta
locale: es
kiStatus: Backlog
internalReference: 949411
---

## Sumario

<div class="alert alert-info">
  <p>Este problema conocido ha sido traducido automáticamente del inglés.</p>
</div>


La visualización, para tiendas de portales heredados, de productos en PLPs se basa en el canal de venta de la tienda y sus datos básicos de disponibilidad.

Si un producto tiene stock, precio y sus datos básicos para ser vendido correctamente en una tienda + pertenece a dicho canal de venta, este producto está y debe estar listado en la tienda.

Sin embargo, cuando dicho producto tiene la opción "mostrar si no está disponible" establecida en false, debe ser eliminado de las páginas de la tienda cuando no se puede vender.

En la mayoría de los casos, este proceso se lleva a cabo de forma eficiente, pero en los casos en los que dicho producto no está disponible para un canal de ventas determinado pero sí para otros, puede seguir mostrándose en los canales no deseados.


**Ejemplo**:

1 - El producto 1 está disponible en los canales de venta 1, 2 y 3.

2 - Se ha agotado en el canal de venta 2. Se supone que ya no aparece en él.

3 - Como aún está disponible en los canales 1 y 3, podría "atascarse" y seguir mostrándose durante un tiempo prolongado en el canal 2, a pesar de no estar disponible.

*Este problema sólo se produce cuando un producto con el indicador = false pasa de disponible a no disponible en un canal de venta mientras sigue apareciendo en los demás. Esta incoherencia no se produce a la inversa (pasando de no disponible a disponible).



##

## Simulación


Para una tienda con múltiples canales de venta y que utiliza diferentes dominios para cada uno, obtener un producto que esté disponible en ambos y que se muestre bajo un resultado de búsqueda específico.

Este producto de prueba debe tener la opción "mostrar incluso si no está disponible" establecida como false en él.

A continuación, configúrelo como agotado en uno de los canales de venta.

Seguirá apareciendo, incluso después de mucho tiempo, en los resultados de búsqueda de ambos dominios, a pesar de no estar disponible en uno de los canales.



## Workaround


**Opción A**) Realice un borrado del indexador y un reindexado de la base de datos si su tienda tiene menos de 10000 productos y tiene varios artículos en este escenario.

**Opción B**) Para un pequeño conjunto de productos, elimine su disponibilidad de la tienda por completo (hágalo no disponible en todos los canales de venta) y luego revierta inmediatamente estos cambios.






