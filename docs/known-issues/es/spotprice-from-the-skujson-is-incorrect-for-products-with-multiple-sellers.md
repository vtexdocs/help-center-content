---
title: 'El precio al contado del skuJson es incorrecto para los productos con múltiples vendedores'
id: 6rgLJCE1DYPXZj1Pqt6hA2
status: PUBLISHED
createdAt: 2022-02-24T15:32:40.223Z
updatedAt: 2024-02-16T20:30:08.928Z
publishedAt: 2024-02-16T20:30:08.928Z
firstPublishedAt: 2022-02-24T15:32:41.286Z
contentType: knownIssue
productTeam: Portal
author: 2mXZkbi0oi061KicTExNjo
tag: Portal
slug: el-precio-al-contado-del-skujson-es-incorrecto-para-los-productos-con-multiples-vendedores
locale: es
kiStatus: No Fix
internalReference: 264791
---

## Sumario

>ℹ️ Este problema conocido ha sido traducido automáticamente del inglés.


Valor del "spotPrice" (precio al contado) en el "skuJson" del Portal incorrecto en productos con múltiples vendedores.

En las "installmentOptions" del checkout y en la "Search API" es correcto, y el valor del "spotPrice" de las "richSnippets" y de las "skuPrice viewparts" (impresas en HTML) también. Pero skuJson parece estar atascado con el vendedor 1.







## Simulación


- tener un producto/sku vendido por varios vendedores además del propio marketplace.

- haber configurado el "paymentSystemId" en skuPrice y/o richSnippets viewparts.

- observar la información devuelta por la aplicación del Portal.







## Workaround



No hay ninguna solución para skuJson específicamente.

Se debe utilizar el resto de la información de la página.

