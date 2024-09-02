---
title: 'La búsqueda inteligente no devuelve el pedido SKU correcto'
id: 6gR3dsK9CFxfwss6Am89wA
status: PUBLISHED
createdAt: 2022-11-07T15:09:48.448Z
updatedAt: 2023-05-24T20:16:14.728Z
publishedAt: 2023-05-24T20:16:14.728Z
firstPublishedAt: 2022-11-07T15:09:49.492Z
contentType: knownIssue
productTeam: Intelligent Search
author: 2mXZkbi0oi061KicTExNjo
tag: Intelligent Search
slug: la-busqueda-inteligente-no-devuelve-el-pedido-sku-correcto
locale: es
kiStatus: Fixed
internalReference: 677937
---

## Sumario

>ℹ️ Este problema conocido ha sido traducido automáticamente del inglés.


La API de búsqueda inteligente no devuelve el orden esperado de las variaciones de SKU para un producto en la búsqueda y las estanterías


##

## Simulación


Vaya a la página de un producto, compruebe el orden de SKU, vaya a la página de búsqueda, compruebe el orden de SKU (a veces se mostrará correctamente, a veces no)



## Workaround


La prop sortVariationsByLabel del selector sku podría resolver algunos casos

https://developers.vtex.com/docs/guides/vtex-store-components-skuselector

 ![](https://vtexhelp.zendesk.com/attachments/token/tcCXWNHIw8KJupddSHiMElnxl/?name=image.png)




