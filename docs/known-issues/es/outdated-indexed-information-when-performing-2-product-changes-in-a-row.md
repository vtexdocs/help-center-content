---
title: 'Información indexada desactualizada al realizar 2 cambios de producto seguidos.'
id: 66aX8MktRogeUD9bbTo0vF
status: PUBLISHED
createdAt: 2023-09-26T14:44:57.146Z
updatedAt: 2023-09-26T14:44:57.895Z
publishedAt: 2023-09-26T14:44:57.895Z
firstPublishedAt: 2023-09-26T14:44:57.895Z
contentType: knownIssue
productTeam: Catalog
author: 2mXZkbi0oi061KicTExNjo
tag: Catalog
slug: informacion-indexada-desactualizada-al-realizar-2-cambios-de-producto-seguidos
locale: es
kiStatus: No Fix
internalReference: 907428
---

## Sumario

<div class="alert alert-info">
  <p>Este problema conocido ha sido traducido automáticamente del inglés.</p>
</div>


Para las tiendas que utilizan el motor de búsqueda heredado, si se realizan dos cambios en los datos de un producto en una sucesión rápida (es decir, has desactivado un producto y lo has reactivado justo después), y el último cambio devuelve la información del producto a lo que era justo antes, el estado de dicho artículo puede quedarse atascado en el primer cambio, ya que este último no se reconoce correctamente.

Este problema no ocurre en las tiendas que utilizan la aplicación de búsqueda inteligente.


##

## Simulación


1 - Obtenga un artículo activo en su tienda y desactívelo.
2 - Justo después (< 5min), reactívalo.
3 - Pasados unos minutos, comprueba tu producto: no se mostrará en la tienda, a pesar de estar configurado para ello. (en otras palabras, se quedó "atascado" en ese estado intermedio).



## Workaround


1 - Reindexe dichos productos después de 5+ min de experimentar el problema.
2 - Utilice el motor de búsqueda inteligente, que no se enfrenta a este problema en absoluto.
3 - Evite realizar más de dos cambios seguidos en un producto, ya que el último cambio revierte el anterior.





