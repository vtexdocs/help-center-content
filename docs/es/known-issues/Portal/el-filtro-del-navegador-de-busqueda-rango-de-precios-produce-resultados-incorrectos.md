---
title: 'El filtro del Navegador de Búsqueda + Rango de Precios produce resultados incorrectos'
id: 6s4vJr6DVPLU9JlxIPWqhx
status: PUBLISHED
createdAt: 2022-06-28T16:55:53.208Z
updatedAt: 2024-02-16T20:24:11.551Z
publishedAt: 2024-02-16T20:24:11.551Z
firstPublishedAt: 2022-06-28T16:55:53.927Z
contentType: knownIssue
productTeam: Portal
author: 2mXZkbi0oi061KicTExNjo
tag: Portal
slugEN: search-navigator-filter-price-range-yielding-incorrect-results
locale: es
kiStatus: No Fix
internalReference: 504992
---

## Sumario

>ℹ️ Este problema conocido ha sido traducido automáticamente del inglés.


Actualmente, cuando se utiliza el filtro de marca del Navegador de búsqueda junto con un rango de precios en un VTEX Business Edition, se pueden mostrar productos fuera de la marca filtrada.



* * *




## Simulación


1) Rellenar el controlador del navegador de búsqueda con al menos 2 marcas, es decir, para una categoría/subcategoría dada, tener al menos 2 marcas diferentes listadas:

 ![](https://raw.githubusercontent.com/vtexdocs/help-center-content/refs/heads/main/docs/es/known-issues/Portal/el-filtro-del-navegador-de-busqueda-rango-de-precios-produce-resultados-incorrectos_1.png)

2) A continuación, filtre sólo por la "Marca B", por ejemplo, ahora sólo se mostrarán los resultados producidos por esta marca específica para esta categoría,

3) Al interactuar con el deslizador de rango de precios, si se filtra por un precio, se ignora el filtro de marca realizado en el paso #3, es decir, posiblemente se mostrarán productos de la marca A en los resultados de la marca B.



* * *




## Workaround


Utilizar directamente la API de búsqueda usando los filtros priceRange y brand simultáneamente, la respuesta de búsqueda está enviando los resultados correctos
https://developers.vtex.com/vtex-rest-api/reference/search-3#productsearchfilteredandordered

(example: `https://{accountName}.{environment}.com.br/api/catalog_system/pub/products/search?fq=C%3A%2F1000050%2F1000155?fq=C:/1000050/1000155&P:[20830 TO 24100]`)

