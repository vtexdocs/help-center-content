---
title: 'El selector de SKU no elige el SKU correcto cuando hay variaciones similares con subcadenas.'
id: 7EY2RMqoJM7bbLZvyVDdRn
status: PUBLISHED
createdAt: 2024-06-11T18:15:27.243Z
updatedAt: 2024-07-03T20:19:45.157Z
publishedAt: 2024-07-03T20:19:45.157Z
firstPublishedAt: 2024-06-11T18:15:28.029Z
contentType: knownIssue
productTeam: FastStore
author: 2mXZkbi0oi061KicTExNjo
tag: FastStore
slug: el-selector-de-sku-no-elige-el-sku-correcto-cuando-hay-variaciones-similares-con-subcadenas
locale: es
kiStatus: Fixed
internalReference: 1047992
---

## Sumario

<div class="alert alert-info">
  <p>Este problema conocido ha sido traducido automáticamente del inglés.</p>
</div>


Al tener una subcadena de la variación en la SKU elegida en otra variación disponible, podríamos no seleccionar la SKU elegida


##

## Simulación



Necesitamos tener una variación disponible que tenga una subcadena de otra variación disponible del mismo producto, por ejemplo:

Valor de la variación: 5
Otra Variación con subcadena: 5.5

O

Valor de la variación: negro
Otra Variación con subcadena: blanco y negro


##

## Workaround


N/A





