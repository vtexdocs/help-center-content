---
title: ' Totalizador de resultados de búsqueda y filtros presentando valor equivocado'
id: 62FJLXM5ckM8sqYUIQg0C4
status: PUBLISHED
createdAt: 2017-12-22T16:50:30.032Z
updatedAt: 2022-12-22T20:43:16.683Z
publishedAt: 2022-12-22T20:43:16.683Z
firstPublishedAt: 2017-12-22T17:02:52.492Z
contentType: knownIssue
productTeam: Marketing & Merchandising
author: 2mXZkbi0oi061KicTExNjo
tag: Catalog,Portal (CMS)
slug: totalizador-de-resultados-de-busqueda-y-filtros-presentando-valor-equivocado
locale: es
kiStatus: Backlog
internalReference: 
---

## Sumario

>⚠️ **Atención**: VTEX presenta dos opciones de búsqueda - La búsqueda VTEX y VTEX Intelligent Search. Este artículo se refiere a la búsqueda VTEX. Para saber más sobre la aplicación VTEX Intelligent Search, consulte <a href = "https://help.vtex.com/tracks/vtex-intelligent-search--19wrbB7nEQcmwzDPl1l4Cb">nuestra guía</a>.

Al realizar cualquier tipo de búsqueda (categoría, marca, término, etc.), el control searchNavigator muestra todos los filtros posibles para el resultado, generalmente en el lateral. En el lado de cada filtro, el sistema muestra el totalizador. Esa es la cantidad de productos que existen para cada opción. Eventualmente, este totalizador no presenta un valor correcto y al hacer clic en la opción, el resultado muestra más o menos productos que la cantidad indicada en el filtro.

El totalizador searchResult también se comporta de forma inesperada, presentando un valor divergente de realidad.

## Simulación

Para simular (no ocurre con ninguna tienda o configuración):
1. Acceda a una página que tenga filtros laterales;
2. Observe el totalizador de algún filtro (el problema ocurre normalmente con opciones con más de 30 productos);
3. Haga clic en algún filtro;
4. Observe que la cantidad de productos devueltos es diferente del totalizador que aparece en el filtro;

## Workaround

No hay solución de contorno.

