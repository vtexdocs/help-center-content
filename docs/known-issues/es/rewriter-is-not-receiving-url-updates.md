---
title: 'El reescritor no recibe actualizaciones de URL'
id: 4c3S9s57SzQCv8zv4L77Fu
status: PUBLISHED
createdAt: 2024-07-16T19:24:56.813Z
updatedAt: 2024-07-16T19:24:57.773Z
publishedAt: 2024-07-16T19:24:57.773Z
firstPublishedAt: 2024-07-16T19:24:57.773Z
contentType: knownIssue
productTeam: Store Framework
author: 2mXZkbi0oi061KicTExNjo
tag: Store Framework
slug: el-reescritor-no-recibe-actualizaciones-de-url
locale: es
kiStatus: Backlog
internalReference: 1066527
---

## Sumario

<div class="alert alert-info">
  <p>Este problema conocido ha sido traducido automáticamente del inglés.</p>
</div>


Cuando se cambia/elimina una URL en el catálogo, la reescritura no recibe este cambio. Dado que la reescritura no recibe ninguna notificación al respecto, la URL sigue apuntando al tipo incorrecto, lo que también puede provocar problemas en el SI.

Esto también puede ocurrir al crear nuevas rutas de categoría/subcategoría en el catálogo. El reescritor a veces necesitará que ejecute la consulta bootstrap para recibir esas rutas.


##

## Simulación


Prueba a eliminar una marca existente del catálogo
Ejecute la mutación para ver cómo se recibe esta ruta en la regrabadora

    {internal{ get(path:"/marca"){ from declarer query disableSitemapEntry }}}

Si busca esa marca en el escaparate, seguirá apuntando a un `map=b`.

También puedes comprobar cómo se está devolviendo esta ruta en el pageType; si es un fullText, el pageType se actualizó, y el rewriter no.



## Workaround


Intente borrar la ruta manualmente de la reescritura:

      mutation{ internal{ delete(ruta:"/ruta"){ from id resolveAs } }}


Intenta ejecutar la consulta bootstrap para actualizar el rewriter:

    {bootstrap { marcas categorías}}





