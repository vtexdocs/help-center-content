---
title: "La eliminación de colecciones en el nuevo administrador no reincide en los productos"
id: 33abWd1ApVTwPKdaxqgKPm
status: PUBLISHED
createdAt: 2022-06-28T16:56:28.134Z
updatedAt: 2022-11-25T21:44:29.933Z
publishedAt: 2022-11-25T21:44:29.933Z
firstPublishedAt: 2022-06-28T16:56:28.414Z
contentType: knownIssue
productTeam: Catalog
author: 2mXZkbi0oi061KicTExNjo
tag: Catalog
slugEN: la-eliminacion-de-colecciones-en-el-nuevo-administrador-no-reincide-en-los-productos
locale: es
kiStatus: Backlog
internalReference: 490740
---

## Sumario

<div class="alert alert-info">
  <p>Este problema conocido ha sido traducido automáticamente del inglés.</p>
</div>


Actualmente, si tiene una colección creada por completo en la administración de Colecciones nuevas/antiguas (CMS), al eliminarla a través de la interfaz de usuario no se reindexan los productos que contiene, por lo que no se eliminan efectivamente de la colección.



## Simulación


1) Cree una colección con el nuevo administrador e inserte productos en ella;
2) Compruebe que los productos añadidos serán reindexados y su información indexada contendrá los datos de la colección;
3) Haga clic para eliminar toda la colección en la interfaz de usuario principal
4) Los datos de la información indexada de los productos contenidos anteriormente en esta colección deberían haber sido actualizados.



## Workaround


Utilice el módulo de colecciones Legacy (CMS) para las eliminaciones o las API de colecciones: https://developers.vtex.com/vtex-rest-api/reference/catalog-api-collection

