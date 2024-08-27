---
title: 'Filtro de selección múltiple del control searchNavigator sin considerar el término buscado'
id: ijtyA8hzgsgSYwa6EoyES
status: PUBLISHED
createdAt: 2017-08-29T15:40:30.287Z
updatedAt: 2022-12-22T20:43:23.408Z
publishedAt: 2022-12-22T20:43:23.408Z
firstPublishedAt: 2017-08-29T19:10:56.767Z
contentType: knownIssue
productTeam: Marketing & Merchandising
author: 2mXZkbi0oi061KicTExNjo
tag: Catalog,Portal (CMS)
slug: filtro-de-seleccion-multiple-del-control-searchnavigator-sin-considerar-el-termino-buscado
locale: es
kiStatus: Backlog
internalReference: 
---

## Sumario

>⚠️ **Atención**: VTEX presenta dos opciones de búsqueda - La búsqueda VTEX y VTEX Intelligent Search. Este artículo se refiere a la búsqueda VTEX. Para saber más sobre la aplicación VTEX Intelligent Search, consulte <a href = "https://help.vtex.com/tracks/vtex-intelligent-search--19wrbB7nEQcmwzDPl1l4Cb">nuestra guía</a>.

Cuando el usuario realiza una búsqueda por término y, a continuación, aplica un filtro en las opciones de selección múltiple (en el control searchNavigator), el término buscado inicialmente se elimina de la consulta, es decir, el filtro ignora el término y aplica la búsqueda solo con las opciones elegidas por el usuario.

![search result](https://images.contentful.com/alneenqid6w5/6BZ5Xh6OHe8WSWywOQCKGw/e814ecd5db35ff565151876dd8f826d5/search_result.gif)


## Simulación

Para simular el escenario:
1. Configure el control searchNavigator en algún template que tenga el control searchResult (Búsqueda, Departamento, Categoría, etc.). Lea más sobre estos controles [haciendo clic aquí](http://help.vtex.com/es/tutorial/--tutorials_563).
2. Deje disponible, vía CSS, la opción selección múltiple del HTML renderizado por el control.
3. Acceda al sitio y haga una búsqueda por un término que contenga productos.
4. En las opciones de selección múltiple del filtro (searchNavigator), seleccione alguna opción (Marca, Categoría, Especificación) y haga clic en el botón para aplicar los filtros.
5. ¡Listo! Después de aplicar el filtro, el término buscado inicialmente se elimina del contexto y la búsqueda se aplica solamente con el filtro seleccionado.


## Workaround

Para evitar este escenario no utilice los filtros de selección múltiple del control searchNavigator.

