---
title: ' El filtro por SkuName en Sales Performance no acepta mayúsculas.'
id: 3FCDeEn8xmEvOXKgBxqyL5
status: PUBLISHED
createdAt: 2022-08-16T18:06:02.919Z
updatedAt: 2024-02-16T20:24:21.760Z
publishedAt: 2024-02-16T20:24:21.760Z
firstPublishedAt: 2022-08-16T18:06:03.474Z
contentType: knownIssue
productTeam: Analytics
author: 2mXZkbi0oi061KicTExNjo
tag: Analytics
slug: el-filtro-por-skuname-en-sales-performance-no-acepta-mayusculas
locale: es
kiStatus: No Fix
internalReference: 639219
---

## Sumario

>ℹ️ Este problema conocido ha sido traducido automáticamente del inglés.


En el tablero de rendimiento de ventas el filtro por un término no está aceptando letras mayúsculas en el SkuName.

Los datos de este tablero se llenan con la información de OMS que tiene todos los SkuNames en minúsculas.

Por lo tanto, aunque en el propio Catálogo el SkuName tenga letras mayúsculas, si se intenta filtrar por el nombre exacto que aparece en el Catálogo no aparecerán resultados en la búsqueda.


##

## Simulación



1. Cree un nuevo filtro por Producto / Nombre de Sku en el Dash de Rendimiento de Ventas;
2. Inserte un término con letras mayúsculas;
3. Compruebe que no aparecen resultados;
4. Inserte el mismo término sólo con letras minúsculas;
5. Compruebe que en los resultados aparece el sku.



## Workaround


Filtrar sólo con minúsculas.

