---
title: "Filtros por especificaciones SKU sin tener en cuenta la disponibilidad regionalizada"
id: 3CeTfHaNBfhrC5qIi3nTLh
status: PUBLISHED
createdAt: 2024-06-05T20:52:53.211Z
updatedAt: 2025-03-31T21:40:45.796Z
publishedAt: 2025-03-31T21:40:45.796Z
firstPublishedAt: 2024-06-05T20:52:54.055Z
contentType: knownIssue
productTeam: Intelligent Search
author: 2mXZkbi0oi061KicTExNjo
tag: Intelligent Search
slugEN: filtros-por-especificaciones-sku-sin-tener-en-cuenta-la-disponibilidad-regionalizada
locale: es
kiStatus: Scheduled
internalReference: 1045111
---

## Sumario

<div class="alert alert-info">
  <p>Este problema conocido ha sido traducido automáticamente del inglés.</p>
</div>


Al filtrar la búsqueda por una especificación de SKU también se aplicará un filtro por disponibilidad de SKU, eliminando los productos en los que la variación seleccionada esté agotada, pero no se aplica a las tiendas regionalizadas.

Las navegaciones regionalizadas pueden devolver productos en los que la variación filtrada no está disponible porque la disponibilidad indexada para una especificación SKU se basa en todos los vendedores habituales y de marca blanca.


##

## Simulación


Considerando una tienda con dos vendedores y la siguiente matriz de disponibilidad para un producto específico:

- tamaño: pequeño; vendedor A: disponible; vendedor B: no disponible
- talla: grande; vendedor A: no disponible; vendedor B: no disponible

En una navegación con "regionId: vendedor B", al filtrar por "talla: pequeña" se obtendrá el producto (ya que estaría disponible) y con "talla: grande" se ocultará el producto (porque no está disponible en todas partes).


##

## Workaround


NO DISPONIBLE




