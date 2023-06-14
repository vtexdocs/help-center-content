---
title: 'ID y nombre de departamento incorrectos al exportar planilla de productos'
id: 6Nj93lJqgwGkYwaSWUu0So
status: PUBLISHED
createdAt: 2018-06-20T14:36:47.235Z
updatedAt: 2023-04-04T19:07:34.496Z
publishedAt: 2023-04-04T19:07:34.496Z
firstPublishedAt: 2018-06-20T14:45:12.020Z
contentType: knownIssue
productTeam: Marketing & Merchandising
author: 2mXZkbi0oi061KicTExNjo
tag: Catalog
slug: id-y-nombre-de-departamento-incorrectos-al-exportar-planilla-de-productos
kiStatus: Backlog
internalReference: 783363
---

## Sumario

Al exportar una planilla de productos, el nombre y el ID de departamento se exportan incorrectamente, incluso si pertenecen a un departamento diferente en el registro del producto o en las consultas a través de las APIs.


## Simulación

1. Acceder al catálogo por el Admin;
2. Navegar hasta Importación y exportación;
3. Exportar la planilla de productos y SKUs.

## Workaround

No hay workaround, pero esta información puede ser descartada. Al importar una planilla para la actualización de productos y su categoría, esta columna no se tiene en cuenta. Sólo se tiene en cuenta la columna `Id Categoria`.


