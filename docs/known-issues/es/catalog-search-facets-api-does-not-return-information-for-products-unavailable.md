---
title: 'La API de Facetas de Búsqueda del Catálogo no devuelve la información de los productos no disponibles'
id: 1JrbscqI4BQgFqfVuRZIl8
status: PUBLISHED
createdAt: 2022-05-23T13:58:53.501Z
updatedAt: 2024-02-16T20:25:52.080Z
publishedAt: 2024-02-16T20:25:52.080Z
firstPublishedAt: 2022-05-23T13:58:53.924Z
contentType: knownIssue
productTeam: Catalog
author: 2mXZkbi0oi061KicTExNjo
tag: Catalog
slug: la-api-de-facetas-de-busqueda-del-catalogo-no-devuelve-la-informacion-de-los-productos-no-disponibles
locale: es
kiStatus: No Fix
internalReference: 583623
---

## Sumario

<div class="alert alert-info">
  <p>Este problema conocido ha sido traducido automáticamente del inglés.</p>
</div>


Las Facetas de Búsqueda del Catálogo API / Filtros del Resultado de la Búsqueda del Portal no devuelven la información de los productos no disponibles y configurados para ser mostrados sin stock. El producto aparecerá en el Resultado de la Búsqueda, pero sus filtros no aparecerán.



## Simulación



- Crear una categoría
- Cree un grupo de campos, dentro de esa categoría.
- Cree un campo SKU de la categoría, que contenga dos valores (que puedan ser utilizados como filtros).
- Cree dos productos, con un SKU cada uno. Y asigne un campo SKU diferente a cada SKU.
(importante: no asigne stock a los productos y haga que aparezcan en la página aunque estén agotados)
- Ir a la página de la categoría;
- Compruebe que el filtro SKU no aparece - la misma respuesta de la API de Facets `/api/catalog_system/pub/facets/search`;



## Workaround


No hay ninguna solución.

