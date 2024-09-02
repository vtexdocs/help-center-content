---
title: 'La transliteración sólo se guarda en vbase y no en rewriter'
id: 3ngFt1qXOUjmY5L84dk6in
status: PUBLISHED
createdAt: 2023-12-12T19:54:12.171Z
updatedAt: 2024-02-16T20:26:46.444Z
publishedAt: 2024-02-16T20:26:46.444Z
firstPublishedAt: 2023-12-12T19:54:13.102Z
contentType: knownIssue
productTeam: Store Framework
author: 2mXZkbi0oi061KicTExNjo
tag: Store Framework
slug: la-transliteracion-solo-se-guarda-en-vbase-y-no-en-rewriter
locale: es
kiStatus: No Fix
internalReference: 738334
---

## Sumario

<div class="alert alert-info">
  <p>Este problema conocido ha sido traducido automáticamente del inglés.</p>
</div>



Al transliterar las urls a través del catalogo rewriter no lo almacena, o no recibe ninguna notificación a través del broadcaster, solo lo almacenamos en vbase


##

## Simulación



Traducir

Comprueba el rewriter con el linkId que creaste en admin/graphql-ide y elige la app rewriter:


    { internal{ get(ruta: "tuLinkdIdAquí"){ id } }}





## Workaround



Ejecute la siguiente consulta en la regrabadora


    { internal{ get(path: "tuNombreCategoriaTraducidoSlugified"){ id from declarer type query binding origin resolveAs } }}


Guarde los valores devueltos, necesitará utilizarlos en el siguiente paso

Ejecute la siguiente mutación cambiando únicamente el parámetro from, los demás deben ser iguales que los anteriores:


    mutation saveInternal($ruta: InternalInput!) { internal { save(ruta: $ruta) { from declarer type id binding resolveAs origin } }}{ "ruta": { "from": "yourLinkId", "declarer": "tuDeclaradorGuardado", "tipo": "yourSavedType", "binding": "yourSavedBinding", "id": "yourSavedId", "origin": "yourSavedOrigin", "resolveAs": "TheOriginalNameOfTheCategory" -aquí en cirílico }}



> Para más información sobre estos parámetros, puede consultar: https://developers.vtex.com/vtex-developer-docs/docs/rewriter


Ahora, vamos a borrar la ruta antigua (la guardada con el nombre)


    mutation guardarInterna($ruta: ¡EntradaInterna!) { interna { borrar(ruta: "tuNombreCategoriaTraducidoSlugificado") { id } }}


