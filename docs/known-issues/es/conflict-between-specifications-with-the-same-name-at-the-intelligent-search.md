---
title: 'Conflicto entre especificaciones con el mismo nombre en la Búsqueda Inteligente'
id: 1TcMLTNMMGqjgbGArywSeh
status: PUBLISHED
createdAt: 2023-11-10T00:13:18.275Z
updatedAt: 2024-06-24T13:48:09.391Z
publishedAt: 2024-06-24T13:48:09.391Z
firstPublishedAt: 2023-11-10T00:13:18.980Z
contentType: knownIssue
productTeam: Intelligent Search
author: 2mXZkbi0oi061KicTExNjo
tag: Intelligent Search
slug: conflicto-entre-especificaciones-con-el-mismo-nombre-en-la-busqueda-inteligente
locale: es
kiStatus: Fixed
internalReference: 933958
---

## Sumario

<div class="alert alert-info">
  <p>Este problema conocido ha sido traducido automáticamente del inglés.</p>
</div>


Múltiples especificaciones con el mismo nombre son agrupadas en la misma _"faceta"_ por la Búsqueda Inteligente, lo que puede ser un problema si tienen diferentes configuraciones.

Algunos atributos que pueden verse afectados son el filtro, los conmutadores oculto e indexado/buscable, el tipo de campo y la posición del valor. No hay diferencia entre ser una especificación de producto o de SKU.

No es posible saber qué propiedad tendrá prioridad sobre la otra.


##

## Simulación


Para una tienda con:
- una especificación llamada "foo" (ID 1) establecida como filtro (para aparecer en el escaparate) y con el valor "bar" para un producto;
- otra especificación llamada "foo" (pero ID 2), que no es un filtro, y con el valor "baz" para el mismo u otro producto.

El escaparate puede mostrar un filtro de búsqueda para la faceta/especificación "foo" con los valores "bar" y "baz" o incluso ocultar todo el filtro.



## Workaround


Aunque el módulo Catálogo no bloquea los nombres de especificación repetidos, este uso debe considerarse incorrecto.




