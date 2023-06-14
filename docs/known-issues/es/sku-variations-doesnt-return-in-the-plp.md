---
title: 'Las variaciones de SKU no vuelven en el PLP'
id: 6AOmkZe06SmXpVqwQqTZdp
status: PUBLISHED
createdAt: 2022-10-19T12:20:41.544Z
updatedAt: 2022-11-25T21:57:22.673Z
publishedAt: 2022-11-25T21:57:22.673Z
firstPublishedAt: 2022-10-19T12:20:42.317Z
contentType: knownIssue
productTeam: Intelligent Search
author: 2mXZkbi0oi061KicTExNjo
tag: Intelligent Search
slug: las-variaciones-de-sku-no-vuelven-en-el-plp
locale: es
kiStatus: Backlog
internalReference: 569563
---

## Sumario

<div class="alert alert-info">
  <p>Este problema conocido ha sido traducido automáticamente del inglés.</p>
</div>


La presentación de las variaciones de SKU en el PLP se limita a las variaciones disponibles independientemente de la configuración de la prop skusFilter. Según nuestro análisis, search-graphql no está entregando todas las variaciones según el retorno de la API, por lo que el ProductContextProvider no recibe todas las variaciones.



## Simulación


- Acceda al PLP y encuentre un producto que tenga algunas variaciones que no estén disponibles;
- Comprobar si los componentes que realizan el filtrado de SKU están correctamente configurados con la prop skusFilter, con el valor "ALL";
- Acceder al PLP del producto en cuestión y ver todas las variaciones que devuelve el ProductContextProvider



## Workaround


N/A

