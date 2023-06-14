---
title: 'Sugerencias transformar UnitMultiplier menor que 1 a 0'
id: 3TC3n2xGTDGFKZUoooJOTR
status: PUBLISHED
createdAt: 2022-11-21T19:45:52.096Z
updatedAt: 2022-12-13T16:14:04.817Z
publishedAt: 2022-12-13T16:14:04.817Z
firstPublishedAt: 2022-11-21T19:45:52.855Z
contentType: knownIssue
productTeam: Marketplace
author: 2mXZkbi0oi061KicTExNjo
tag: Marketplace
slug: sugerencias-transformar-unitmultiplier-menor-que-1-a-0
locale: es
kiStatus: Fixed
internalReference: 702056
---

## Sumario

<div class="alert alert-info">
  <p>Este problema conocido ha sido traducido automáticamente del inglés.</p>
</div>



El vendedor puede enviar valores unitMultilplier para sus skus inferiores a 1.

Ejemplo:
 ![](https://vtexhelp.zendesk.com/attachments/token/HqXCaizs03DZbMVT2tcufZM6K/?name=image.png)

La misma información se envía al mercado correctamente:
 ![](https://vtexhelp.zendesk.com/attachments/token/zImMl1BVZHLG6zc45x4XwrZpB/?name=image.png)

Sin embargo, una vez que el producto es procesado por el Matcher, el valor se redondea a 0:
 ![](https://vtexhelp.zendesk.com/attachments/token/j5FMl4AJJ0R5IP3FcStUo7DDi/?name=image.png)

Y una vez es aprobado en el catálogo del marketplace, el valor continúa como 0. De esta forma se establece un valor erróneo en el catálogo del marketplace.


##

## Simulación



## Workaround



