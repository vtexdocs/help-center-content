---
title: Error de envío de SKU entre sellers y marketplaces
id: 1fh0ea4fZrfyWW5EYnrZxj
status: PUBLISHED
createdAt: 2021-09-30T19:19:17.233Z
updatedAt: 2022-03-28T22:32:12.939Z
publishedAt: 2022-03-28T22:32:12.939Z
firstPublishedAt: 2021-09-30T20:49:09.165Z
contentType: knownIssue
productTeam: Marketplace
author: 46G4yHIZerH7B9Jo0Iw5KI
tag: Suggestions
slug: error-de-envio-de-sku-entre-sellers-y-marketplaces
kiStatus: Fixed
internalReference: 000
---

## Sumario

Las tiendas VTEX pueden convertirse en [sellers](https://help.vtex.com/es/tutorial/estrategias-de-marketplace-na-vtex--tutorials_402?&utm_source=autocomplete#como-seller-vtex) y [marketplaces](https://help.vtex.com/es/tutorial/estrategias-de-marketplace-na-vtex--tutorials_402?&utm_source=autocomplete#ser-un-marketplace-vtex) las unas de las otras, y enviar los SKU que ya forman parte de sus catálogos. Sin embargo, estos SKU no siempre se envían correctamente. 

Esto se debe a que los productos que son vendidos tanto por el marketplace como por sus sellers no son reconocidos por el sistema al ser enviados. Solo es posible enviar productos que se venden en solo una de las tiendas.

![arquitetura circular](https://images.ctfassets.net/alneenqid6w5/56mCQjosVr8YmmMpcv67gj/8fde1676b4fb9b405e56b4e52689f982/arquitetura_circular.JPG)

## Simulación

Vemos este error cuando una tienda envía un SKU a un marketplace y este SKU no aparece en el módulo SKU Recibidos. 

No aparece ningún mensaje de error en tu Admin VTEX indicando que se ha producido el problema.  Utiliza la ruta de API [Get SKU](https://developers.vtex.com/vtex-rest-api/reference/catalog-api-sku#catalog-api-get-sku) para verificar si otros sellers venden este SKU. En la respuesta a esta llamada, dentro del objeto `SkuSellers`, estarán todos los sellers que venden ese SKU. Si hay más de un seller indicado en el objeto, significa que se producirá el error.

## Workaround

Actualmente estamos investigando la mejor manera de incorporar operaciones con este tipo de arquitectura a la plataforma VTEX. Por lo tanto, no hay ningún workaround para este caso. 

