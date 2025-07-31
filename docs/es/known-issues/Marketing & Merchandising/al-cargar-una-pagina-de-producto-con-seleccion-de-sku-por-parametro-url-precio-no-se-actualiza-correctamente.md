---
title: "Al cargar una página de producto con selección de SKU por parámetro (URL), precio no se actualiza correctamente"
id: 4PAYx8WD2MIce8YMAaK2yk
status: PUBLISHED
createdAt: 2017-08-17T00:24:35.581Z
updatedAt: 2022-12-22T20:45:30.700Z
publishedAt: 2022-12-22T20:45:30.700Z
firstPublishedAt: 2017-08-17T00:43:47.906Z
contentType: knownIssue
productTeam: Marketing & Merchandising
author: 2mXZkbi0oi061KicTExNjo
tag: Portal (CMS)
slugEN: al-cargar-una-pagina-de-producto-con-seleccion-de-sku-por-parametro-url-precio-no-se-actualiza-correctamente
locale: es
kiStatus: Backlog
internalReference: 
---

## Sumario

Al acceder a una página de producto con variación (más de un SKU) con el parámetro de querystring “idsku={{idSku}}”, el sistema marca el SKU como elegido (en el control skuRichSelection y skuSelection). 

Sin embargo, si el SKU elegido (Del parámetro) está indisponible (sin stock / no entregable), cuando el usuario selecciona otro SKU disponible en el selector de SKU, no se exhiben las informaciones de precio.

![Precio no actualizado con selección de SKU](//images.contentful.com/alneenqid6w5/1GKcK5NUSoEcmMuesmiGiM/6ddb61d748aa566c6eb5607711a0ae3d/preco.gif)

## Simulación

1. Acceder a la página de un producto que tenga variación de SKU proporcionando el parámetro “idsku” en la URL (QueryString). Elige un SKU indisponible.
2. En el control de selección de SKU (`skuSelection` o `skuRichSelection`), seleccionar otro SKU disponible.
3. El precio de ese segundo SKU no se renderizará correctamente.

## Workaround

1. Desarrollar un control de selección de SKU por JavaScript (sin usar nuestro control nativo).
2. Nunca utilizar selección por parámetro (querystring) de un SKU indisponible.

