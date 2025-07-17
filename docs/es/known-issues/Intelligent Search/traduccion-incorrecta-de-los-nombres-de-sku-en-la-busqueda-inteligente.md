---
title: "Traducción incorrecta de los nombres de SKU en la Búsqueda Inteligente"
id: kEYzSu1houF947XOrxrfI
status: PUBLISHED
createdAt: 2025-02-14T20:16:55.293Z
updatedAt: 2025-04-25T18:52:02.780Z
publishedAt: 2025-04-25T18:52:02.780Z
firstPublishedAt: 2025-02-14T20:16:56.181Z
contentType: knownIssue
productTeam: Intelligent Search
author: 2mXZkbi0oi061KicTExNjo
tag: Intelligent Search
slugEN: traduccion-incorrecta-de-los-nombres-de-sku-en-la-busqueda-inteligente
locale: es
kiStatus: Fixed
internalReference: 1180016
---

## Sumario

<div class="alert alert-info">
  <p>Este problema conocido ha sido traducido automáticamente del inglés.</p>
</div>


En productos con múltiples SKUs, la traducción de los nombres de SKU se realiza erróneamente sobre el primer SKU.


##

## Simulación


Considerando que un producto tiene sus cuatro SKUs nombrados respectivamente como "P/M/G/GG" en `pt-BR` como idioma principal. Mientras que una traducción a `en-US` debería generar los nombres como "S/M/L/XL" en realidad se traducirá como "S/S/S/S".



## Workaround


N/A




