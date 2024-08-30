---
title: 'El linkId de la categoría no se registra en la reescritura cuando se traduce con el catálogo graphql'
id: 7b7KOHlxyIO4zKy2xrMuSD
status: PUBLISHED
createdAt: 2022-09-08T21:27:03.855Z
updatedAt: 2022-11-25T22:13:34.491Z
publishedAt: 2022-11-25T22:13:34.491Z
firstPublishedAt: 2022-09-08T21:27:04.567Z
contentType: knownIssue
productTeam: Store Framework
author: 2mXZkbi0oi061KicTExNjo
tag: Store Framework
slug: el-linkid-de-la-categoria-no-se-registra-en-la-reescritura-cuando-se-traduce-con-el-catalogo-graphql
locale: es
kiStatus: Backlog
internalReference: 654951
---

## Sumario

>ℹ️ Este problema conocido ha sido traducido automáticamente del inglés.


Cuando se utiliza el catálogo graphql y se traduce la URL utilizando el linkId el reescribidor debería almacenar el linkId, pero, no está sucediendo: https://developers.vtex.com/vtex-developer-docs/docs/catalog-internationalization#category

El reescribidor está almacenando el nombre en lugar del linkId



## Simulación



Siga la guía de documentación para traducir el contenido del catálogo: https://developers.vtex.com/vtex-developer-docs/docs/catalog-internationalization#mutation

Comprueba el rewriter con el linkId que has creado en admin/graphql-ide y elige rewriter app:


    { internal{ get(path: "yourLinkdIdHere"){ id } }}


Esto devolverá null

Compruebe de nuevo, pero, con el nombre de su categoría traducida, pero, slugified


    { internal{ get(path: "yourTranslatedCategoryNameSlugified"){ id } }}


Esto devolverá los resultados



## Workaround



Ejecute la siguiente consulta en el rewriter


    { internal{ get(path: "yourTranslatedCategoryNameSlugified"){ id from declarer type query binding origin resolveAs } }}


Guarde los valores devueltos, necesitará utilizarlos en el siguiente paso

Ejecute la siguiente mutación cambiando sólo el parámetro from, los demás deben ser los mismos que los anteriores:


    mutación saveInternal($route: InternalInput!) { internal { save(route: $route) { from declarer type id binding resolveAs origin } }}{ "ruta": { "from": "yourLinkId", "declarer": "yourSavedDeclarer", "type": "yourSavedType", "binding": "yourSavedBinding", "id": "yourSavedId", "origin": "yourSavedOrigin", "resolveAs": "yourSavedResolveAs" }}



> Para más información sobre estos parámetros, puede consultar: https://developers.vtex.com/vtex-developer-docs/docs/rewriter


Ahora, vamos a borrar la antigua ruta (la que se guardó con el nombre)


    mutación saveInternal($ruta: InternalInput!) { internal { delete(ruta: "tuNombreDeCategoríaTraducido") { id } }}

