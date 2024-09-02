---
title: 'CategoryCommissionPercentage en la API del vendedor que permite cualquier valor'
id: 2qFGcRO2H1JxHsYERf6X2s
status: PUBLISHED
createdAt: 2022-03-16T16:16:40.281Z
updatedAt: 2022-11-25T22:10:19.469Z
publishedAt: 2022-11-25T22:10:19.469Z
firstPublishedAt: 2022-03-16T16:16:40.836Z
contentType: knownIssue
productTeam: Portal
author: 2mXZkbi0oi061KicTExNjo
tag: Portal
slug: categorycommissionpercentage-en-la-api-del-vendedor-que-permite-cualquier-valor
locale: es
kiStatus: Backlog
internalReference: 382680
---

## Sumario

>ℹ️ Este problema conocido ha sido traducido automáticamente del inglés.


En la API de vendedor PUT, la propiedad CategoryCommissionPercentage acepta cualquier tipo de entrada, por ejemplo, entradas de texto. Esto puede incluso romper el proceso de indexación de los productos que tienen SKUs en los que se incluye este vendedor.



## Simulación


- En la ruta `/api/catalog_system/pvt/seller/{{id}}`, intente actualizar el valor de la propiedad CategoryComissionPercentage a cualquier cosa que no sea un punto flotante, por ejemplo, cualquier tipo de texto;
- Compruebe que las SKUs que incluye este vendedor ya no se indexan.



## Workaround


No utilice otros tipos de valores en lugar de los de coma flotante

