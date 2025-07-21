---
title: 'El campo lastModifiedBy siempre devuelve "null" en la API de búsqueda.'
id: 1nRB8PUHuimkY1EFWvP91u
status: PUBLISHED
createdAt: 2025-04-15T16:36:55.495Z
updatedAt: 2025-04-15T16:36:55.991Z
publishedAt: 2025-04-15T16:36:55.991Z
firstPublishedAt: 2025-04-15T16:36:55.991Z
contentType: knownIssue
productTeam: Catalog
author: 2mXZkbi0oi061KicTExNjo
tag: Catalog
slugEN: el-campo-lastmodifiedby-siempre-devuelve-null-en-la-api-de-busqueda
locale: es
kiStatus: Backlog
internalReference: 1211438
---

## Sumario

<div class="alert alert-info">
  <p>Este problema conocido ha sido traducido automáticamente del inglés.</p>
</div>


La propiedad lastModifiedBy en las APIs ssearch actualmente no devuelve nada, sólo un campo "null" cuando se utilizan las APIs de búsqueda, como https://my_account_name.vtexcommercestable.com.br/api/catalog_system/pvt/collection/search


##

## Simulación


1 - al editar una colección por cualquier medio, intente realizar cualquier cambio

2 - Utilizando la URL de la API de búsqueda antes mencionada, compruebe el campo lastModifiedBy en la respuesta

3 - Este campo siempre devolverá null.



## Workaround


-





