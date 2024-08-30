---
title: 'Especificaciones con el mismo nombre que afectan a la visibilidad del filtro en la Búsqueda Inteligente'
id: 2ez8tdBqUE03nTejbMLSFp
status: PUBLISHED
createdAt: 2024-08-09T00:01:34.212Z
updatedAt: 2024-08-09T00:15:49.192Z
publishedAt: 2024-08-09T00:15:49.192Z
firstPublishedAt: 2024-08-09T00:01:35.766Z
contentType: knownIssue
productTeam: Intelligent Search
author: 2mXZkbi0oi061KicTExNjo
tag: Intelligent Search
slug: especificaciones-con-el-mismo-nombre-que-afectan-a-la-visibilidad-del-filtro-en-la-busqueda-inteligente
locale: es
kiStatus: Backlog
internalReference: 1078576
---

## Sumario

>ℹ️ Este problema conocido ha sido traducido automáticamente del inglés.


Múltiples especificaciones con el mismo nombre son agrupadas en la misma _"faceta"_ por la Búsqueda Inteligente, lo que puede ser problemático si tienen diferentes configuraciones.

Algunos atributos que pueden verse afectados son el filtro, los conmutadores oculto e indexado/buscable, el tipo de campo y la posición del valor. No hay diferencia entre ser una especificación de producto o de SKU.

No es posible saber qué propiedad tendrá prioridad sobre la otra.


##

## Simulación


Para una tienda con:
- una especificación llamada "tipo" (ID 1) establecida como filtro (para aparecer en el escaparate);
- otra especificación llamada "tipo" (pero ID 2), que no está configurada como filtro (para permanecer oculta en el escaparate).

El escaparate puede mostrar o no el filtro de búsqueda para la faceta/especificación "tipo" debido al conflicto con la propiedad "isFilter".



## Workaround


Aunque el módulo Catálogo no bloquea los nombres de especificación repetidos, este uso debe considerarse incorrecto.




