---
title: 'linkId no se está registrando en rewriter cuando se traduce con graphql catálogo'
id: 7b7KOHlxyIO4zKy2xrMuSD
status: PUBLISHED
createdAt: 2022-09-08T21:27:03.855Z
updatedAt: 2024-07-10T12:47:32.306Z
publishedAt: 2024-07-10T12:47:32.306Z
firstPublishedAt: 2022-09-08T21:27:04.567Z
contentType: knownIssue
productTeam: Store Framework
author: 2mXZkbi0oi061KicTExNjo
tag: Store Framework
slug: linkid-no-se-esta-registrando-en-rewriter-cuando-se-traduce-con-graphql-catalogo
locale: es
kiStatus: Backlog
internalReference: 654951
---

## Sumario

>ℹ️ Este problema conocido ha sido traducido automáticamente del inglés.


Cuando se utiliza el catálogo graphQL y se traduce la URL utilizando el linkId el rewriter debería almacenar el linkId, pero no está sucediendo: https://developers.vtex.com/docs/guides/catalog-internationalization


##

## Simulación



- Sigue la guía de documentación para traducir el contenido del catálogo: https://developers.vtex.com/vtex-developer-docs/docs/catalog-internationalization#mutation
- **Para enlaces de categoría:**
  - Comprueba el linkId que creaste en admin/graphql-ide y elige la aplicación de reescritura:

    { internal{ get(ruta: "tuLinkdIdAquí"){ id } }}



- Esto devolverá null;
- Compruebe de nuevo con el nombre de su categoría traducida pero, slugified:

    { internal{ get(ruta: "tuNombreCategoriaTraducidoSlugified"){ id } }}



- Esto devolverá los resultados.



- Para los enlaces de productos
  - Acceda a la página del producto utilizando el enlace traducido creado mediante el graphQL del catálogo;
  - Se mostrará un 404 No encontrado.



## Workaround



- Para enlaces de categoría
  - Ejecute la siguiente consulta en rewriter:

    { internal{ get(path: "yourTranslatedLinkdId"){ id from declarer type query binding origin resolveAs } }}



- Guarde los valores devueltos, necesitará utilizarlos en el siguiente paso;
- Ejecuta la siguiente mutación cambiando sólo el parámetro from, los demás deben ser iguales que los anteriores:

    mutation saveInternal($ruta: InternalInput!) { internal { save(ruta: $ruta) { from declarador tipo id binding resolveAs origen } }}{ "ruta": { "from": "yourLinkId", "declarer": "tuDeclaradorGuardado", "tipo": "yourSavedType", "binding": "yourSavedBinding", "id": "yourSavedId", "origin": "yourSavedOrigin", "resolveAs": "yourSavedResolveAs" }}

> Para más información sobre estos parámetros, puede consultar: https://developers.vtex.com/vtex-developer-docs/docs/rewriter



- Ahora, vamos a borrar la ruta antigua (la guardada con el nombre)

    mutation saveInternal($ruta: InternalInput!) { internal { delete(ruta: "tuTraducidoLinkdId") { id } }}



- Para enlaces de productos:**
  - Ejecute la siguiente mutación cambiando únicamente el parámetro from, los demás deben ser iguales que los anteriores:

    mutación saveInternal($route: InternalInput!) { internal { save(route: $route) { from declarer type id binding resolveAs origin } }}{ "ruta": { "origen": "/yourTranslatedLinkdId/p", "declarer": "vtex.store@2.x", "type": "product", "id": "productId", "resolveAs": "/yourOrinalLinkdId/p", "binding": "bindingId" }}




