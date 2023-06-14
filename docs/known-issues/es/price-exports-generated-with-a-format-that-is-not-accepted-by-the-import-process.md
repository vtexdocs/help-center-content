---
title: 'Exportaciones de precios generadas con un formato que no es aceptado por el proceso de importación'
id: 4qOqpaZe1aIrfgo7mXL15K
status: PUBLISHED
createdAt: 2022-05-24T18:13:38.306Z
updatedAt: 2022-11-25T22:12:17.633Z
publishedAt: 2022-11-25T22:12:17.633Z
firstPublishedAt: 2022-05-24T18:13:38.769Z
contentType: knownIssue
productTeam: Pricing & Promotions
author: 2mXZkbi0oi061KicTExNjo
tag: Pricing & Promotions
slug: exportaciones-de-precios-generadas-con-un-formato-que-no-es-aceptado-por-el-proceso-de-importacion
kiStatus: Fixed
internalReference: 584975
---

## Sumario

<div class="alert alert-info">
  <p>Este problema conocido ha sido traducido automáticamente del inglés.</p>
</div>


A veces (hay un 50% de posibilidades) los precios se exportan utilizando un nuevo formato que no es aceptado por la importación de precios.




## Simulación


-Exportar una hoja de cálculo de precios fijos



## Workaround


**Mientras trabajamos en una solución para este problema, una solución es
1. añadir una nueva fila en la parte superior de la hoja de precios con el texto "FixedPrices" en la primera celda
2. cambiar el formato de fecha de las columnas Desde y Hasta al siguiente formato 2022-05-24T07:20:50.52Z

Si necesitas más información sobre el formato este es el formato RFC3339

