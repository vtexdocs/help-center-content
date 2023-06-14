---
title: 'El título de búsqueda de la colección no muestra los acentos cuando se accede a través de map=productClusterNames'
id: 41m89nYPVQxFaNUXAcGo3X
status: PUBLISHED
createdAt: 2022-03-21T17:40:39.850Z
updatedAt: 2022-11-25T21:57:56.915Z
publishedAt: 2022-11-25T21:57:56.915Z
firstPublishedAt: 2022-03-21T17:40:40.209Z
contentType: knownIssue
productTeam: Intelligent Search
author: 2mXZkbi0oi061KicTExNjo
tag: Intelligent Search
slug: el-titulo-de-busqueda-de-la-coleccion-no-muestra-los-acentos-cuando-se-accede-a-traves-de-mapproductclusternames
locale: es
kiStatus: Backlog
internalReference: 439856
---

## Sumario

<div class="alert alert-info">
  <p>Este problema conocido ha sido traducido automáticamente del inglés.</p>
</div>


Las páginas de colecciones a las que se accede a través de map=productClusterNames muestran el nombre de la colección sin acentos en el componente search-title.



## Simulación


Colección a la que se accede con ?map=productClusterNames:

 ![](https://vtexhelp.zendesk.com/attachments/token/mLfeFcf2Gafya3mXkII5fDBlm/?name=inline-1038161401.png)

El nombre correcto de la colección puede verse en el título de la página, y el título de búsqueda lo muestra sin acentos. Este comportamiento también puede extenderse a otros caracteres especiales.



## Workaround


Es posible gestionar las colecciones creando páginas de búsqueda personalizadas:
https://developers.vtex.com/vtex-developer-docs/docs/vtex-io-documentation-creating-a-custom-search-results-page

Y luego, insertar el título deseado mediante un bloque de texto enriquecido.

