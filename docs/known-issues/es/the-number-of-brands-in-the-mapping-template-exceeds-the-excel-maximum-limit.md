---
title: 'La cantidad de marcas excede el límite de Excel en la plantilla de mapeo'
id: 4sYUppK1iceta3rO6lLO1K
status: PUBLISHED
createdAt: 2021-08-31T18:18:28.874Z
updatedAt: 2022-12-22T20:41:20.781Z
publishedAt: 2022-12-22T20:41:20.781Z
firstPublishedAt: 2021-08-31T19:03:34.028Z
contentType: knownIssue
productTeam: Channels
author: 2mXZkbi0oi061KicTExNjo
tag: Suggestions
slug: la-cantidad-de-marcas-excede-el-limite-de-excel-en-la-plantilla-de-mapeo
kiStatus: Backlog
internalReference: 
---

## Sumario

Para que las definiciones de los catálogos de _sellers_ y _ marketplaces_ sean compatibles, es necesario [mapear las categorías, marcas y especificaciones](https://help.vtex.com/es/tutorial/mapping-categories-and-brands-for-the-marketplace--tutorials_1521.

Los _marketplaces_ no pueden exportar las [plantillas de marcas](https://help.vtex.com/es/tutorial/mapping-categories-and-brands-for-the-marketplace--tutorials_1521#mapeo-de-marcas) de sus _sellers_ para realizar el mapeo cuando el número de marcas registradas por los _sellers_ excede el [límite de Excel](https://support.microsoft.com/pt-br/office/especifica%C3%A7%C3%B5es-e-limites-do-microsoft-excel-1672b34d-7043-467e-8e27-269d656771c3%20%E2%80%8B).


## Simulación

En el Admin VTEX,  vaya a __MARKETPLACE__ > __Sellers__ > __Categorías y marcas.__ En el campo __Mapeo de marcas__ de un _seller_ con un número elevado de marcas, haga clic en `Descargar la tabla actual`. En lugar de recibir por email el archivo Excel de la tabla, recibirá un email con el mensaje "Error exporting Brands Mapping spreadsheet".

## Workaround

Cuando se produce esta situación, no es posible realizar el mapeo de marcas. Sugerimos que los _marketplaces_ seleccionen manualmente la marca al catalogar los SKU en la página [SKU recibidos](https://help.vtex.com/es/tutorial/sugerindo-e-aprovando-skus/).

