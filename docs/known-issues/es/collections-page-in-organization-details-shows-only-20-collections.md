---
title: 'La página Colecciones en Detalles de la organización sólo muestra 20 colecciones'
id: 1NL46GlhANQoa6IzGSSwdS
status: PUBLISHED
createdAt: 2023-08-31T20:02:37.675Z
updatedAt: 2024-04-23T21:35:34.440Z
publishedAt: 2024-04-23T21:35:34.440Z
firstPublishedAt: 2023-08-31T20:02:38.351Z
contentType: knownIssue
productTeam: B2B
author: 2mXZkbi0oi061KicTExNjo
tag: B2B
slug: la-pagina-colecciones-en-detalles-de-la-organizacion-solo-muestra-20-colecciones
locale: es
kiStatus: Fixed
internalReference: 891511
---

## Sumario

<div class="alert alert-info">
  <p>Este problema conocido ha sido traducido automáticamente del inglés.</p>
</div>


La página Colecciones en Detalles de la Organización muestra sólo 20 colecciones incluso después de cambiar la cantidad de filas en la parte inferior de la página.


##

## Simulación



- Asegúrese de que tiene más de 20 colecciones activas;
- En el administrador, vaya a la página Organizaciones B2B, seleccione una organización;
- Vaya a la pestaña Colecciones; verá sólo 20 colecciones disponibles.



## Workaround


Si la colección deseada no aparece en la pestaña Colecciones, asígnela utilizando GraphQL IDE:

- Acceda a GraphQL IDE;
- Seleccione la aplicación `vtex.b2b-organizations-graphql`;
- Utilice la siguiente mutación y añada los valores de `id`, `name`, `collections.id` y `collections.name`.

    mutation { updateOrganization ( id: "" name: "" status: "active" collections: [{ id: "" name: "" }] ){ status message }}





